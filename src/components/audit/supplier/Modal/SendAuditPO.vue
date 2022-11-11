<template>
 <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
    <div class="modal-dialog modal-lg mt-20">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Purchase Order</h5>
                <div @click="closePoModel()" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <i  class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
            <!-- <PageLoader v-if="store.rfqDetailLoader" /> -->
            <div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="d-flex mb-3 "> <span class="text-muted me-1">PO#:</span> {{ Data.audit_po.aud_PO_code }}  </h3>
                            <h3 class="d-flex mb-3"> {{ PO.RegD_name_to }} </h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>  {{ PO.Email_to }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>   {{ PO.Head_office_address_to }}  </td>
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
                            <input maxlength="50" v-model="Data.audit_po.aud_PO_title" :class="{'is-invalid border-danger': DataError.aud_PO_title }" name="" placeholder="Type your project/service title" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.aud_PO_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label">PO Date</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input v-model="Data.audit_po.aud_PO_datetime" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.aud_PO_datetime }"  type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.aud_PO_datetime }} </div>
                        </div>                
                    </div>
                    <!-- <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label ">For Attachments</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.audit_po.PO_type" class="form-check-input" type="checkbox" name="account_plan">                                
                        </div>
                    </div> -->
                    <div class="row mb-2">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Quotation Files</label>
                        </div>
                        <div class="col-md-6">
                            <input @change="onFileChange($event)" type="file" :class="{'is-invalid border-danger': DataError.aud_PO_document }" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div v-if="showDoc"><span>View Attachments</span> </div>
                            <div v-if="showDoc"><a :href="formData.aud_PO_document" target="_blank">{{ docName(formData.aud_PO_document) }}</a></div>
                            <div class="text-danger"> {{ DataError.aud_PO_document }} </div>
                        </div>  
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-10">
                            <label class="form-label required">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.audit_po.aud_PO_template" v-model:content="Data.audit_po.aud_PO_template"  content-type="html"                                 
                            class="form-control form-control-lg form-control-solid" />
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="text-danger"> {{ DataError.aud_PO_template }} </div>
                        <div class="col-md-12">
                            <!-- <TableUse v-if="existingPo.audit_po_paymentd?.length" @sentTableData="getTableValue" :tableH="existingPo.audit_po_paymenth" :tableD="existingPo.audit_po_paymentd"  />
                            <TableUse v-else @sentTableData="getTableValue" :tableH="Data.audit_po_paymenth" :tableD="Data.audit_po_paymentd"  /> -->
                        </div>                            
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button @click="closePoModel()" type="button" class="btn btn-light" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button v-if="poBtnVisibilty != 1" @click="sendPO" type="button" class="btn btn-primary">
                    <SLoader v-if="store.poBtnLoader" /> <span v-else> Send PO </span> 
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import SLoader from '@/global_components/loader/SLoader.vue'
// import PageLoader from '@/global_components/loader/PageLoader.vue'
import { reactive, ref, defineEmits, defineProps } from "vue";
import { computed, toRefs, watch } from "@vue/runtime-core";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import TableUse from '@/components/projects/Modal/TableUse.vue';
import { Account } from "@/store/SwitchAccount";
import { useAuditStore } from '@/store/audit.store';
import { useRoute } from 'vue-router';
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const store = useAuditStore()
const route = useRoute()

const emit = defineEmits(['Close_PO_Model'])
const closePoModel = () => {
    emit('Close_PO_Model', false)
}

let props = defineProps({
    purchaseOrder: {
        type: Array,
        required: false
    },
    existingPo: {
        type: Object,
        required: false
    },
})

const po = toRefs(props)
const PO = po.purchaseOrder.value[0]
const existing_po = po.existingPo.value
const poBtnVisibilty = PO.PO_status

let document = ref()
let showDoc = ref()

let formData = reactive({
    aud_PO_document:'',
    data:{}
})
   let Data = reactive({
        audit_po:{
            aud_PO_code: '',
            aud_PO_title: '',
            aud_PO_datetime:'',
            aud_PO_template:'',
            Grand_total: 0,
            RegM_id: account.value[0].RegM_id,
            RegM_name: currentUser.User_fullname,
            RegD_id: account.value[0].RegD_id,
            RegD_comp_name: currentUser.Company_name,
            Created_by: currentUser.User_id ,
            Created_by_name: currentUser.User_fullname,
            Updated_by: currentUser.User_id ,
            Updated_by_name: currentUser.User_fullname,
            Aud_RFQ_id: null,
            PO_id: 0,
            PO_status_name: "Pending",
            sender_head_office_address: account.value[0].Head_office_address,
            sender_email: account.value[0].Comp_email,
            aud_req_id: 0
        }
})
if(po.purchaseOrder.value.length){
    Data.audit_po.aud_PO_code = po.purchaseOrder.value[0]?.aud_po_code
    Data.audit_po.aud_req_id = po.purchaseOrder.value[0]?.aud_req_id
}
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
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
    aud_PO_title: null,
    aud_PO_datetime: null,
    aud_PO_document: null,
    aud_PO_template: null
})

// const  getTableValue = (tablevalue) => {
//     console.log(tablevalue)
//     Data.audit_po_paymenth.Col_5 = tablevalue.dataH.Col_5
//     Data.audit_po_paymenth.Col_6 = tablevalue.dataH.Col_6
//     Data.audit_po_paymenth.Col_7 = tablevalue.dataH.Col_7
//     Data.audit_po_paymentd = tablevalue.dataD
// }

watch(document,(current) => {
    if( current ){
        DataError.aud_PO_document = null
    }
})
watch(Data.audit_po,(current) => {
    if(current.aud_PO_title){
        DataError.aud_PO_title = null
    }
    if(current.aud_PO_datetime){
        DataError.aud_PO_datetime = null
    }
})

watch(tableValue,(current) => {
    if(current.Col1){
        tableValueError.Col1 = null
    }
})

watch(
    () => Data.audit_po.aud_PO_template,
    () => {
        if (Data.audit_po.aud_PO_template) {
            if(Data.audit_po.aud_PO_template.length >= 5000){
                DataError.aud_PO_template = "Detail Help must be at most 5000 characters"
            }
            else{
                DataError.aud_PO_template = null
            }
        } 
    },
    { deep: true }
);
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
        DataError.aud_PO_document = 'file size exceed 300 kb'
        e.target.value =""
        formData.aud_PO_document = null
        return false
    }else{
        document.value = files[0]
        formData.aud_PO_document = files[0]
    }  
};

const sendPO = () => {
    Data.audit_po.Aud_RFQ_id = PO.aud_RFQ_id
    if(Data.audit_po.aud_PO_title && Data.audit_po.aud_PO_datetime && Data.audit_po.aud_PO_template){
        formData.aud_PO_document = document.value
            Submit()
    } else {
        Data.audit_po.aud_PO_title ? DataError.aud_PO_title = null : DataError.aud_PO_title = "Title is required"
        Data.audit_po.aud_PO_datetime ? DataError.aud_PO_datetime = null : DataError.aud_PO_datetime = "Date is required"
        Data.audit_po.aud_PO_template ? DataError.aud_PO_template = null : DataError.aud_PO_template = "Description is required"
    }
}

const Submit = () =>{
    formData.data = JSON.stringify(Data)
    store.sendAuditPurchaseOrder(formData).then(res => {
        if( res.status == 200 ){
            const data = ref({
                RegD_id: account.value[0].RegD_id ,
                aud_RFQ_id: route.params.id,
                PageNo: 1,
                RowNo:10 ,
                search: null,
                audit_status_id: null
            })
            store.loadAuditDetailList(data.value)
            closePoModel()
        }
    })
}
    if(existing_po.audit_po?.length){
    showDoc.value = true
        formData.aud_PO_document = existing_po.audit_po[0].aud_po_document
        Data.audit_po.aud_PO_code = existing_po.audit_po[0].aud_PO_code,
        Data.audit_po.aud_PO_title = existing_po.audit_po[0].aud_PO_title,
        Data.audit_po.aud_PO_datetime = existing_po.audit_po[0].aud_PO_datetime.substring(0,10),
        Data.audit_po.aud_PO_template = existing_po.audit_po[0].aud_PO_template
    }else{
        Data.audit_po.aud_PO_code = PO.aud_po_code
        Data.audit_po.aud_PO_title = PO.Aud_RFQ_title
    }
</script>
