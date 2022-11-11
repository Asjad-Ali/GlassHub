<template>
    <div  class="modal show fade " style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog mt-20 modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Request For Quotation</h5>
                    <div @click="CloseModel()" class="btn btn-icon btn-sm btn-active-light-primary ms-2" >
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div v-if="store.comp_loader" class="modal-body">
                    <PageLoader  />
                </div>
                <div v-else class="modal-body">
                    <div v-if="store.complianceList.length" class="row mb-5">
                        <div class="col-md-12">
                            <table class="table table-row-dashed table-row-gray-300 gs-0 gy-4 ">
                                <tbody>
                                    <tr class="response">
                                        <td class="response">
                                            <div class="row px-5">
                                                <div class="col-md-12 mb-3">
                                                    <h4 class="text-muted">Controls {{currentComp+1}}/{{store.complianceList.length}}</h4>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted"> Control no </label>
                                                    <p>{{ store.complianceList[currentComp].Control_no }}</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted">Refrence no</label>
                                                    <p>{{ store.complianceList[currentComp].Ref_no }}</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted">Source</label>
                                                    <p>{{ store.complianceList[currentComp].Source }}</p>
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label text-muted">Control statement</label>
                                                    <p> {{ store.complianceList[currentComp].Ctrl_statement }} </p>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <span class="badge badge-light m-5" style="background-color: #5241a1;color:white">Compliance</span>
                                                    <span class="badge badge-light m-5">Non Compliance</span>
                                                    <span class="badge badge-light m-5">Not Acceptable</span>
                                                </div>
                                                <div class="col-md-6 text-start mb-3">
                                                    <button v-show="currentComp>0"  @click="currentComp = currentComp-1" class="btn btn-secondary" :class="{'cursor-none': currentComp == 0}" >Previous</button>
                                                </div>
                                                <div class="col-md-6 text-end mb-3">
                                                    <button v-show="currentComp+1 != store.complianceList.length" @click="currentComp = currentComp+1" class="btn btn-secondary" >Next</button>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <RecordNotAvailable v-else />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex mb-4">
                                <h6 class="me-2">RFQ#: </h6> 
                                <input maxlength="50" v-model="Data.audit_rfq.Aud_RFQ_code" class="form-control form-control-lg form-control-solid" />                            
                            </div>
                            <h3 class="d-flex mb-3"> {{ Data.audit_rfq.aud_org_name }} </h3>
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
                                            <td>   {{ audit.user.Head_office_address }}  </td>
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
                            <div class="text-danger"> {{ DataError.RFQ_document }} </div>
                        </div>
                    </div>
                    <div class="row mb-10">
                        <div class="col-md-12 mb-10">
                            <label class="form-label">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.audit_rfq.Aud_RFQ_template" v-model:content="Data.audit_rfq.Aud_RFQ_template" content-type="html"                                 
                            class="form-control form-control-lg form-control-solid" />
                        </div>
                    </div>
                    <div  class="col-md-12 mt-20">
                        <div class="text-danger"> {{ DataError.Aud_RFQ_template }} </div>
                        <h2 class="pt-5">Audit Firms</h2>
                        <table v-if="store.comAuditList.length" class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <tbody>
                                <tr v-for="audit in store.comAuditList" :key="audit">
                                    <td><label @click="openProfileModelFun(audit.RegD_id)" class="form-label text-primary cursor-pointer"> {{ audit.Company_name }} </label></td>
                                    <td class="text-right">
                                        <button v-if="audit.flag" disabled type="button" class="btn btn-primary">
                                            <s-loader v-if=" btnLoader == audit.RegD_id " /> <span v-else> Sent</span> 
                                        </button>
                                        <button v-else @click="sendRequest(audit)" type="button" class="btn btn-primary">
                                            <s-loader v-if=" btnLoader == audit.RegD_id " /> <span v-else>Request Quotation</span> 
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <RecordNotAvailable v-else />
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="CloseModel()" type="button" class="btn btn-light">
                        Close
                    </button>
                </div>
            </div>
        </div> 
        <teleport to="body">
          <ProfileModel v-if="openProfileModel" @closeProfileModel="closeProfileModel" />  
      </teleport> 
    </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import SLoader from '@/global_components/loader/SLoader.vue'
import { computed, toRefs } from "vue";
import { reactive, ref, watch, defineEmits, defineProps } from "vue";
import { Account } from "@/store/SwitchAccount";
import { useAuditStore } from "@/store/audit.store";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import ProfileModel from "@/components/Modal/ProfileModel.vue"
import { useRegisterationStore } from "@/store/registeration.store";
import { useRoute } from "vue-router";
const store = useAuditStore()
const regStore = useRegisterationStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const emit = defineEmits(['closeAuditRFQModel'])

const CloseModel = () => {
    emit('closeAuditRFQModel', false)
}

const btnLoader = ref(false)
const route = useRoute()
const currentPath = computed(() => route.path)

const currentUser = computed(() => {
    return JSON.parse(localStorage.getItem('UserInfo'))
})
let props = defineProps({
    user: {
        type: Object,
        required: false
    },
})
const audit = toRefs(props)
console.log("audit",audit.user.value)

const currentComp = ref(0)

let document = ref()
let openProfileModel = ref(false)
let formData = reactive({
    Aud_RFQ_document:"null",
    data:{}
})
let Data = reactive({
    audit_rfq:{
        Aud_RFQ_code: null,
        Aud_RFQ_id: 0,
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
        Requested_type: 0, 
        Requested_type_name: "",
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
Data.audit_rfq.Aud_RFQ_code = audit.user.value.Aud_RFQ_code
Data.audit_rfq.aud_org_name = audit.user.value.Company_name
Data.audit_rfq.aud_org_RegD_id = audit.user.value.RegD_id

const existingAudit = computed(() => {
    return store.existingAuditRFQ
})

watch(existingAudit,(current) => {
    if(current.length){
        Data.audit_rfq.Aud_RFQ_code = current[0].Aud_RFQ_code
        Data.audit_rfq.Aud_RFQ_title = current[0].Aud_RFQ_title
        Data.audit_rfq.Aud_RFQ_id = current[0].Aud_RFQ_id,
        Data.audit_rfq.Compliance_id = current[0].Compliance_id
        Data.audit_rfq.Aud_RFQ_datetime =current[0].Aud_RFQ_datetime.substring(0,10),
        Data.audit_rfq.end_date =current[0].end_date.substring(0,10),
        Data.audit_rfq.Aud_RFQ_template =current[0].Aud_RFQ_template
    }

})

const DataError = reactive({
    Aud_RFQ_title: null,
    Aud_RFQ_datetime: null,
    end_date: null,
    RFQ_document: null,
    Aud_RFQ_template: null
})

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

const sendRequest = (audit) => {
    if(Data.audit_rfq.Aud_RFQ_title && Data.audit_rfq.Aud_RFQ_datetime && Data.audit_rfq.end_date && Data.audit_rfq.Aud_RFQ_template){
        Data.audit_rfq.Compliance_id = store.complianceList[0]?.Compliance_id || 0
        Data.audit_rfq.RegM_id_to = audit.RegM_id, 
        Data.audit_rfq.RegM_name_to= audit.Company_name, 
        Data.audit_rfq.RegD_id_to= audit.RegD_id,
        Data.audit_rfq.RegD_name_to= audit.Company_name
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
    formData.data = JSON.stringify(Data)
    store.sendAuditRFQ(formData).then( (res) => {
        const index = store.comAuditList.findIndex(val => val.RegD_id == Data.audit_rfq.RegD_id_to )
        if(index != -1){
            store.comAuditList[index].flag = true
        }
        Data.audit_rfq.Aud_RFQ_id = res.data[0].Aud_RFQ_id
        btnLoader.value = false
        if(store.comAuditList.length == 1){
            CloseModel()
        }
    })
}

const openProfileModelFun = (RegD_id) => {
    regStore.loadRegistrationProfileData(RegD_id)
    openProfileModel.value = true
}
const closeProfileModel =(event)=>{
    openProfileModel.value = event
}
</script>

<style>
</style>