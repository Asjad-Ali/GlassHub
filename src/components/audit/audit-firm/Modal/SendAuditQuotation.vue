<template>
 <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
    <div class="modal-dialog modal-lg mt-20">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Audit Quotation</h4>
                <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
            <PageLoader v-if="store.quotationLoader" />
            <div v-else>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="d-flex mb-3"> <span class="text-muted me-2">Quotation#: </span> {{ Data.audit_qutation.aud_qutation_code }} </h4>
                            <h4 class="d-flex mb-3">   {{ Data.audit_qutation.RegD_comp_name }} </h4>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>  {{ Data.audit_qutation.sender_email }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>   {{ Data.audit_qutation.sender_head_office_address }}  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required">Title</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input maxlength="50" v-model="Data.audit_qutation.aud_qutation_title" :class="{'is-invalid border-danger': DataError.aud_qutation_title }" name="" placeholder="Type your project/service title" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.aud_qutation_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required">Quotation Date</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input v-model="Data.audit_qutation.aud_qutation_datetime" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.aud_qutation_datetime }"   type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.aud_qutation_datetime }} </div>
                        </div>                
                    </div>
                    <div  class="row mb-2">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Quotation Files</label>
                        </div>
                        <div class="col-md-6">
                            <input @change="onFileChange($event)" type="file" :class="{'is-invalid border-danger': DataError.aud_qutation_document }" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div v-if="showDoc">View Attachments </div>
                            <div v-if="showDoc">
                                <a :href="formData?.aud_qutation_document" target="_blank">  {{ docName(formData?.aud_qutation_document) }}</a>
                            </div>
                            <div class="text-danger"> {{ DataError.aud_qutation_document }} </div>
                        </div> 
                    </div>
                    <div  class="row">
                        <div class="col-md-12 mb-10">
                            <label class="form-label">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.audit_qutation.aud_qutation_template" v-model:content="Data.audit_qutation.aud_qutation_template"  content-type="html"/>
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="text-danger"> {{ DataError.aud_qutation_template }} </div>
                        <div class="col-md-12">
                            <!-- <TableUse v-if="existQuote.aud_qutation_paymentd?.length" @sentTableData="getTableValue" :tableH="existQuote.aud_qutation_paymenth" :tableD="existQuote.aud_qutation_paymentd"  />
                            <TableUse v-else @sentTableData="getTableValue" :tableH="Data.aud_qutation_paymenth" :tableD="Data.aud_qutation_paymentd"  /> -->
                        </div>                            
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <h4 class="d-flex text-muted">Sending To</h4>
                            <h4 class="d-flex"> {{ quote.RegD_name_frm }} </h4>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>   {{ quote.Email_frm }}   </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>  {{ quote.Head_office_address_frm }}  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="CloseModel" type="button" class="btn btn-light" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button v-if="qoBtnVisibilty != 1" @click="sendQR" type="button" class="btn btn-primary">
                    <s-loader v-if="store.btnLoader" /> <span v-else> Send Quotation Request </span> 
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
// import TableUse from "@/components/projects/Modal/TableUse.vue";
import SLoader from '@/global_components/loader/SLoader.vue'
import PageLoader from '@/global_components/loader/PageLoader.vue'
import { reactive, ref, defineEmits, defineProps } from "vue";
import { computed, toRefs, watch } from "@vue/runtime-core";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { Account } from "@/store/SwitchAccount";
import { useAuditStore } from "@/store/audit.store";

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const store = useAuditStore()

let props = defineProps({
    quotation: {
        type: Array,
        required: false
    },
    exitingQuotation: {
        type: Object,
        required: false
    },
})
const qo = toRefs(props)
const quote = qo.quotation.value[0]
let existQuote = qo.exitingQuotation.value
const qoBtnVisibilty = quote.Qutation_status
console.log(quote)
console.log(existQuote)
let document = ref()
let showDoc = ref()
const emit = defineEmits(['Close_audit_quotation_Model'])
const CloseModel = () => {
    emit('Close_audit_quotation_Model', false)
    existQuote = {}
}
let formData = reactive({
    aud_qutation_document:'',
    data:{}
})
   let Data = reactive({
        audit_qutation:{
            aud_qutation_code: 0,
            aud_qutation_title: '',
            aud_qutation_datetime:'',
            aud_qutation_template:'',
            Grand_total: 0,
            RegM_id: account.value[0].RegM_id,
            RegM_name: currentUser.User_fullname,
            RegD_id: account.value[0].RegD_id,
            RegD_comp_name: currentUser.Company_name,
            Created_by: currentUser.User_id,
            Created_by_name: currentUser.User_fullname,
            Updated_by: currentUser.User_id ,
            Updated_by_name: currentUser.User_fullname,
            aud_Qutation_type:3, 
            aud_Qutation_type_name:"pending", 
            Aud_RFQ_id: null,
            sender_head_office_address: account.value[0].Head_office_address,
            sender_email: account.value[0].Comp_email,
            aud_req_id: 0
        },
})

let tableValue = reactive({
    Col1:null,
    Col2: null,
    Col3: null,
    Col4: null,
    Col5: null,
    Col6: null,
    Col7: null,
})

  const tableValueError = reactive({
        Col1:null,
    })
    const DataError = reactive({
        aud_qutation_title: null,
        aud_qutation_datetime: null,
        aud_qutation_document: null,
        aud_qutation_template: null
    })
// const  getTableValue = (tablevalue) => {
//     Data.aud_qutation_paymenth.Col_5 = tablevalue.dataH.Col_5
//     Data.aud_qutation_paymenth.Col_6 = tablevalue.dataH.Col_6
//     Data.aud_qutation_paymenth.Col_7 = tablevalue.dataH.Col_7
//     Data.aud_qutation_paymentd = tablevalue.dataD
// }

    watch(Data.audit_qutation,(current) => {
        if(current.aud_qutation_title){
            DataError.aud_qutation_title = null
        }
        if(current.aud_qutation_datetime){
            DataError.aud_qutation_datetime = null
        }
        if(current.aud_qutation_template){
            DataError.aud_qutation_template = null
        }
    })

    watch(tableValue,(current) => {
        if(current.Col1){
            tableValueError.Col1 = null
        }
    })
    watch(document,(current) => {
        if( current ){
            DataError.aud_qutation_document = null
        }
    })
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
    const toolbar = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        // ['link', 'image', 'video'],
        ["clean"],
    ];

    const onFileChange = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        const fileSize = Math.floor(files[0]?.size/1024);
        if(fileSize>300)
        {
            DataError.aud_qutation_document = 'file size exceed 300 kb'
            e.target.value =""
            formData.aud_qutation_document = null
            return false
        }else{
            document.value = files[0]
            formData.aud_qutation_document = files[0]
        }  
    };

watch(
    () => Data.audit_qutation.aud_qutation_template,
    () => {
        if (Data.audit_qutation.aud_qutation_template) {
            if(Data.audit_qutation.aud_qutation_template.length >= 5000){
                DataError.aud_qutation_document = "Detail Help must be at most 5000 characters"
            }else{
                DataError.aud_qutation_document = null
            }
        } 
    },
    { deep: true }
);

    const sendQR = () => {
        if(Data.audit_qutation.aud_qutation_title &&  Data.audit_qutation.aud_qutation_datetime &&  Data.audit_qutation.aud_qutation_template ){
            Data.audit_qutation.Aud_RFQ_id = qo.quotation.value[0].aud_RFQ_id
            Submit()
        } else {
            Data.audit_qutation.aud_qutation_title ? DataError.aud_qutation_title = null : DataError.aud_qutation_title = "Title is required"
            Data.audit_qutation.aud_qutation_datetime ? DataError.aud_qutation_datetime = null : DataError.aud_qutation_datetime = "Date is required"
            Data.audit_qutation.aud_qutation_template ? DataError.aud_qutation_template = null : DataError.aud_qutation_template = "Description is required"
        }
   }
   const Submit = () =>{
    formData.data = JSON.stringify(Data)
    store.sendAuditQuotation(formData).then( res => {
        if(res.status == 200){
            const auditData = ref({
                audit_status_id: null,
                Account_type: 3,
                RegD_id: account.value[0].RegD_id,
                PageNo:1,
                RowNo: 10,
                search: null
            })
            store.loadAuditList(auditData.value)
            CloseModel()
        }
    })
}
    if(existQuote.audit_qutation?.length){
    showDoc.value = true
        formData.aud_qutation_document = existQuote.audit_qutation[0].aud_qutation_document
        Data.audit_qutation.aud_qutation_code = existQuote.audit_qutation[0].aud_qutation_code,
        Data.audit_qutation.aud_qutation_title = existQuote.audit_qutation[0].aud_qutation_title,
        Data.audit_qutation.aud_qutation_datetime = existQuote.audit_qutation[0].aud_qutation_datetime.substring(0,10),
        Data.audit_qutation.aud_qutation_template = existQuote.audit_qutation[0].aud_qutation_template
    }else{
        Data.audit_qutation.aud_qutation_code = quote.aud_qutation_code
        Data.audit_qutation.aud_qutation_title = quote.Aud_RFQ_title
        Data.audit_qutation.aud_req_id = quote.aud_req_id
    }
</script>
