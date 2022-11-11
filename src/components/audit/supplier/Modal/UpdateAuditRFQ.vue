<template>
    <div  class="modal show fade " style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-16">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Request For Quotation</h5>
                    <div @click="CloseModel()" class="btn btn-icon btn-sm btn-active-light-primary ms-2" >
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex mb-4">
                                <h6 class="me-2">RFQ#: </h6> 
                                <input maxlength="50" v-model="Data.audit_rfq.Aud_RFQ_code" class="form-control form-control-lg form-control-solid" />                            
                            </div>
                            <h3 class="d-flex mb-3"> {{ Data.audit_rfq.RegD_comp_name }} </h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>  {{ Data.audit_rfq.sender_email }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>   {{ Data.audit_rfq.sender_address }}  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>                        
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required me-3 ">Title</label>
                        </div>
                        <div class="col-md-6">
                            <input maxlength="150" v-model="Data.audit_rfq.Aud_RFQ_title" placeholder="Enter Title" :class="{'is-invalid border-danger': DataError.Aud_RFQ_title }" class="form-control form-control-lg form-control-solid" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.Aud_RFQ_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2  ">
                            <label class="form-label">RFQ Date</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.audit_rfq.Aud_RFQ_datetime" data-date-format="YYYY-MM-DD" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.Aud_RFQ_datetime }" type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div  class="col-md-4 ">
                            <div class="text-danger"> {{ DataError.Aud_RFQ_datetime }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2  ">
                            <label class="form-label required">End Date</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.audit_rfq.end_date" :min="new Date().toISOString().slice(0, 10)" :class="{'is-invalid border-danger': DataError.end_date }" type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4 ">
                            <div class="text-danger"> {{ DataError.end_date }} </div>
                        </div>
                    </div>
                    <div  class="row mb-2">
                        <div  class="col-md-2 ">
                            <label class="form-label required">Upload Quotation Files </label>
                        </div>
                        <div  class="col-md-6">
                            <input @change="onFileChange($event)" id="fileInput" :class="{'is-invalid border-danger': DataError.RFQ_document }" type="file" class="form-control form-control-lg form-control-solid" />
                        </div>
                        <div  class="col-md-4 ">
                            <div ><span>View Attachments</span></div>
                            <div><a :href="formData.Aud_RFQ_document" target="_blank">{{ docName(formData.Aud_RFQ_document) }}</a></div>
                            <div class="text-danger"> {{ DataError.RFQ_document }} </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-12 mb-10">
                            <label class="form-label">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.audit_rfq.Aud_RFQ_template" v-model:content="Data.audit_rfq.Aud_RFQ_template" content-type="html"                                 
                            class="form-control form-control-lg form-control-solid" />
                        </div>
                    </div>
                    <div class="row mt-20" >
                        <div class="col-md-6">
                            <h3 class="d-flex mb-3 text-muted">Sending To</h3>
                            <h3 class="d-flex mb-3"> {{ RFQ[0].RegD_name_to }} </h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td> {{ RFQ[0].Email_to }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td> {{ RFQ[0].Head_office_address_to }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                        </div>
                        <div class="col-md-6"></div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button @click="CloseModel()" type="button" class="btn btn-light">
                        Close
                    </button>
                    <button v-if="rfqBtnVisibilty != 1" @click="sendRequest()" type="button" class="btn btn-primary">
                        <s-loader v-if=" btnLoader == audit.RegD_id " /> <span v-else>Request Quotation</span> 
                    </button>

                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { computed, toRefs } from "vue";
import { reactive, ref, watch, defineEmits, defineProps } from "vue";
import { Account } from "@/store/SwitchAccount";
import { useAuditStore } from "@/store/audit.store";
import { useRoute } from "vue-router";
import SLoader from '@/global_components/loader/SLoader.vue'


const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const emit = defineEmits(['closeUpdateAuditRFQModel'])

const CloseModel = () => {
    emit('closeUpdateAuditRFQModel', false)
}
const btnLoader = ref(false)
const store = useAuditStore()
const currentUser = computed(() => {
    return JSON.parse(localStorage.getItem('UserInfo'))
})
let props = defineProps({
    audit_rfq: {
        type: Array,
        required: false
    },
    exist_rfq: {
        type: Object,
        required: false
    },

})
const audit = toRefs(props)
const RFQ = audit.audit_rfq.value
const rfqBtnVisibilty = audit.audit_rfq.value[0].RFQ_status
const existRFQ = audit.exist_rfq.value
const route = useRoute()
const currentPath = computed(() => route.path)
let document = ref()
let formData = reactive({
    Aud_RFQ_document:"null",
    data:{}
})
let Data = reactive({
    audit_rfq:{
        Aud_RFQ_code: null,
        Compliance_id: null,
        Aud_RFQ_title: null,
        Aud_RFQ_datetime: null,
        end_date: null,
        Aud_RFQ_template: null,
        Grand_total:0,
        RegM_id: currentUser.value.RegM_id,
        RegM_name: currentUser.value.Company_name,
        RegD_id: account.value[0].RegD_id,
        RegD_comp_name: currentUser.value.Company_name,
        Created_by: currentUser.value.User_id ,
        Created_by_name: currentUser.value.User_fullname,
        Updated_by: currentUser.value.User_id ,
        Updated_by_name: currentUser.value.User_fullname,
        sender_address: account.value[0].Head_office_address,
        sender_email: account.value[0].Comp_email,
        RegM_id_to: 0, 
        RegM_name_to: "", 
        RegD_id_to: 0, 
        RegD_name_to: "", 
        Requested_type: 1, 
        Requested_type_name: "audit",
        aud_org_name:"",
        aud_org_RegD_id: 0, 
    }
});
if(currentPath.value == "/organization-request-registration"){
    Data.audit_rfq.Requested_type = 0
    Data.audit_rfq.Requested_type_name = "Registration"
}else{
    Data.audit_rfq.Requested_type = 1
    Data.audit_rfq.Requested_type_name = "Project"
}
if(existRFQ.audit_rfq.length){
    const gRfq = existRFQ.audit_rfq[0]
    formData.Aud_RFQ_document = gRfq.aud_rfq_document
    formData.Aud_RFQ_document = gRfq.aud_rfq_document
    Data.audit_rfq.Aud_RFQ_code = gRfq.Aud_RFQ_code
    Data.audit_rfq.Compliance_id= audit.audit_rfq.value[0].compliance_id,
    Data.audit_rfq.Aud_RFQ_title = gRfq.Aud_RFQ_title
    Data.audit_rfq.Aud_RFQ_datetime = gRfq.Aud_RFQ_datetime.substring(0,10)
    Data.audit_rfq.end_date = gRfq.end_date.substring(0,10)
    Data.audit_rfq.Aud_RFQ_template = gRfq.Aud_RFQ_template
    Data.audit_rfq.Grand_total = 0,
    Data.audit_rfq.RegM_id_to =  gRfq.RegM_id_to, 
    Data.audit_rfq.RegM_name_to =  gRfq.RegM_name_to, 
    Data.audit_rfq.RegD_id_to =  gRfq.RegD_id_to,  
    Data.audit_rfq.RegD_name_to =  gRfq.RegD_name_to
}

const DataError = reactive({
    Aud_RFQ_title: null,
    Aud_RFQ_datetime: null,
    end_date: null,
    RFQ_document: null,
    Aud_RFQ_template: null
})
function docName(str){
    if(!str) return
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
    watch(Data.audit_rfq,(current) => {
        if( current.Aud_RFQ_title ){
            DataError.Aud_RFQ_title = null 
        }
        if( current.Aud_RFQ_datetime ){
            DataError.Aud_RFQ_datetime = null
        }
        if( current.end_date ){
            DataError.end_date = null
        }
    })

    watch(document,(current) => {
        if( current ){
            DataError.RFQ_document = null
        }
    })

watch( 
    () => Data.audit_rfq.Aud_RFQ_template,
    () => {
        if(Data.audit_rfq.Aud_RFQ_template){
            if(Data.audit_rfq.Aud_RFQ_template.length >= 5000 ){
                DataError.Aud_RFQ_template = "Maximin character length is 5000"
            }else{
                DataError.Aud_RFQ_template = null
            }
        }
    },
    { deep: true }
)
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
        console.log(fileSize)
        if(fileSize>300)
        {
            // showToast('file size exceed 500kb')
            DataError.RFQ_document = 'file size exceed 300 kb'
            e.target.value =""
            formData.Aud_RFQ_document = null
            return false
        }else{
            document.value = files[0]
            formData.Aud_RFQ_document = files[0]
        }  
    };
    const sendRequest = () => {
        if(Data.audit_rfq.Aud_RFQ_title && Data.audit_rfq.Aud_RFQ_datetime && Data.audit_rfq.end_date && Data.audit_rfq.Aud_RFQ_template){
            Submit()
        } else {
            Data.audit_rfq.Aud_RFQ_title ? DataError.Aud_RFQ_title = null : DataError.Aud_RFQ_title = "Title is required"
            Data.audit_rfq.Aud_RFQ_datetime ? DataError.Aud_RFQ_datetime = null : DataError.Aud_RFQ_datetime = "Start Date is required"
            Data.audit_rfq.end_date ? DataError.end_date = null : DataError.end_date = "Start Date is required"
            Data.audit_rfq.Aud_RFQ_template ? DataError.Aud_RFQ_template = null : DataError.Aud_RFQ_template = "Description is required Date is required"
        }
   }
const Submit = () => {
    btnLoader.value = Data.audit_rfq.RegD_id_to
    formData.data = Data
    formData.data = JSON.stringify(Data)
    store.sendAuditRFQ(formData).then( () => {
        if(store.comAuditList.length == 1){
            btnLoader.value = false
            CloseModel()
        }
    })
}
</script>

<style>
</style>