<template>
     <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                 <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div v-if="controlLoader" class="row gy-0 gx-10 bg-w pd-30">
                            <PageLoader />
                        </div>
                        <div v-else class="row gy-0 gx-10 bg-w pd-30">
                            <div @click="router.back()" class="row">
                                <i class="fa fa-arrow-left cursor-pointer px-5 py-4" style="font-size: 20px; color: rgb(82, 65, 161);"></i>
                            </div>
                            <div class="col-md-12">
                                <div v-if="store.auditControlsList.compliance_audited?.length">
                                    <div  class="row">
                                        <div class="col-md-6">
                                            <!--system genrated-->
                                            <h5 class="form-label ">Control No: {{ currentObject+1 }}/{{ store.auditControlsList.compliance_audited?.length }} </h5>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required d-flex">Compliance Status</label>
                                            <div class="col-md-12 d-flex cursor-none  mb-2">
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Complained" value="0" v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" />
                                                    <label class="fs-6  fw-bold form-label" for="Complained">Complained</label>
                                                </div>
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Non_Complained" value="1" v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" />
                                                    <label class="fs-6  fw-bold form-label" for="Non_Complained">Non-Complained</label>
                                                </div>
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Not_Acceptable" value="2" v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" />
                                                    <label class="fs-6  fw-bold form-label" for="Not_Acceptable">Not-Acceptable</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required">Refrence No</label>
                                            <input name=""  v-model="store.auditControlsList.compliance_audited[currentObject].ref_no" class="form-control form-control-lg form-control-solid" readonly>
                                        </div>
                                        <div class="col-md-6 mb-5">
                                            <label class="form-label ">Source</label>
                                            <p>{{ store.auditControlsList.compliance_audited[currentObject].source }}</p>
                                        </div>
                                        <div class="col-md-6 ">
                                            <label class="form-label my-2">Control statement</label>
                                            <p>{{ store.auditControlsList.compliance_audited[currentObject].control_statement }}</p>
                                        </div>
                                        <div class="col-md-6 ">
                                            <label class="form-label">Support Evidence</label>
                                            <div class="mb-5" v-if="currentControlDocs.length">
                                                <div v-for="doc in currentControlDocs" :key="doc">
                                                    <a :href="doc.doc_path" target="_blank">  
                                                    {{ docName(doc.doc_path) }}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-15">
                                            <label class="form-label my-2">Compliance analysis & remarks</label>
                                            <p v-html="store.auditControlsList.compliance_audited[currentObject].analysis_remarks"></p>
                                                    
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-6 text-left">
                                            <button v-if="currentObject > 0" @click="previousControl" class="btn btn-secondary">Previous</button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <button @click="next" v-show="currentObject+1 != store.auditControlsList.compliance_audited.length" class="btn btn-secondary">Next</button>
                                            <button ref="finishBtn" @click="next" v-show="currentObject+1 == store.auditControlsList.compliance_audited.length" class="btn btn-primary">Finish</button>
                                        </div>
                                    </div>
                                </div>
                                <RecordNotAvailable v-else />
                                <div v-if="store.supDocumentStatus.length" class="separator separator-dashed border-gray-300 my-1"></div>
                                <div v-if="store.supDocumentStatus.length" class="col-md-7">
                                    <div class="table-responsive">
                                        <!--begin::Table-->
                                        <h4>Documents</h4>
                                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <tbody>
                                                <tr v-for="doc in store.supDocumentStatus" :key="doc">
                                                    <td><h6 class="text-primary"> {{ doc.doc_name }}  </h6></td>
                                                    <td class="text-right">
                                                        <span v-if="doc.doc_status == 0" class="badge badge-secondary">Pending</span>
                                                        <span v-else-if="doc.doc_status == 1" class="badge badge-light">Re Submit</span>
                                                        <span v-else-if="doc.doc_status == 2" class="badge badge-success">Verified</span>
                                                        <span v-else class="badge badge-danger">Rejected</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div v-if="store.supDocumentStatus.length" class="separator separator-dashed border-gray-300 my-1"></div>
                                <div v-if="store.auditMessages.length" class="col-md-12 FixedHeightContainer">
                                    <h3  @click="openProfileModelFun(audit.auditor_regd_id)" >Conversation with <span  class="text-primary cursor-pointer">{{ store.auditMessages[0].auditor_regd_name }}</span> </h3>
                                    <div class="Content">
                                        <div v-for="(message,index) in store.auditMessages" :key="index" class="row pb-5">
                                            <div class="col-md-12">
                                                <h5> {{ message.question }} ? </h5>
                                                <p class="notee"><b>{{ message.auditor_regd_name }} Note:</b> {{ message.auditor_note }} </p>
                                                <span class="dateandtime"> {{ message.created_datetime?.substring(0,10) }} |  {{ message.created_datetime?.substring(11,16) }} </span>
                                                <p class="response"><b>Response:</b> {{ message.sup_response }} </p>
                                                <span v-show=" message.res_datetime" class="dateandtime"> {{ message.res_datetime?.substring(0,10) }} |  {{ message.note_updated_date?.substring(11,16) }} </span>
                                                <p @click="openAskAnyQuestion(message)" class="text-right w-100"><a class="fts-12 cursor-pointer">Send Response</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                            <div class="col-md-7 mt-5">
                                <div class="table-responsive">
                                    <h4>Required Additional Documents</h4>
                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Upload</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="doc in store.auditDocuments" :key="doc">
                                                <td><h6><a> {{ doc.title }}  </a></h6></td>
                                                <td>
                                                    <input @change="onFileChange($event)" type="file" class="form-control form-control-lg form-control-solid">
                                                    <a @click="openAddedCertificate(doc)" class="float-end cursor-pointer">Attach from the list</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <teleport to="body">       
            <AskAnyQuestion v-if="showAskAnyQuestion" :messageData="messageData" @closeAskAnyQuestionList="closeAskAnyQuestionList"  />
            <ProfileModel v-if="openProfileModel" @closeProfileModel="closeProfileModel" />  
            <AddedCertificate v-if="openAddedCertificateModal" @closeAddedCertificate="closeAddedCertificate" />  
        </teleport>
    </div>
</template>

<script setup>
import ProfileModel from "@/components/Modal/ProfileModel.vue"
import AskAnyQuestion from '@/components/audit/supplier/Modal/SupAskQuestion.vue';
import AddedCertificate from '@/components/audit/supplier/Modal/SupAddedCertificate.vue';
import { useAuditStore } from '@/store/audit.store';
import { computed, onMounted, ref } from 'vue';
import { useRegisterationStore } from "@/store/registeration.store";
import useToast from '@/global_components/Toast/useToast'
import { useRouter } from "vue-router";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";

const router = useRouter()
const showAskAnyQuestion = ref(false)
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const regStore = useRegisterationStore()
const store = useAuditStore()
const messageData = ref({})
const finishBtn = ref(null)
const loader = ref(true)
const currentObject = ref(0)
const currentControlDocs = ref([])
let openProfileModel = ref(false)
let openAddedCertificateModal = ref(false)


const Data = ref({
    doc_path: null,
    data: {}
})
const formData = ref({
doc_req_id: audit.value.aud_req_id,
Updated_by: currentUser.User_id,
certificate_id:0,
certificate_name:null
})

const sendDocument = () => {
    Data.value.data = JSON.stringify(formData.value)
    store.sendAuditAskDocuments(Data.value)
}

const onFileChange = (e) => {
    var files = e.target.files || e.dataTransfer.files;
    const fileSize = Math.floor(files[0]?.size/1024);
    if(fileSize>300)
    {
        useToast('file size exceed 300 kb')
        e.target.value =""
        Data.value.doc_path = null
        return false
    }else{
        document.value = files[0]
        Data.value.doc_path = files[0]
        sendDocument()
    }  
};
function docName(str){
    if(!str) return
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
//  modals function
const openAskAnyQuestion =(message)=>{
    messageData.value = message
    showAskAnyQuestion.value = true
 }
const closeAskAnyQuestionList =(event)=>{
    showAskAnyQuestion.value=event
}
const openProfileModelFun = (RegD_id) => {
    regStore.loadRegistrationProfileData(RegD_id)
    openProfileModel.value = true
}
const closeProfileModel =(event)=>{
    openProfileModel.value = event
}
const openAddedCertificate = (doc) => {
    console.log(doc)
    openAddedCertificateModal.value = true
}
const closeAddedCertificate =(event)=>{
    openAddedCertificateModal.value = event
}
const previousControl = () => {
    currentObject.value = currentObject.value-1
    currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
}
const next = () => {
    if(store.auditControlsList.compliance_audited.length-1 == currentObject.value){
        finishBtn.value.classList.add('disabled')
        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
    }else{
        currentObject.value = currentObject.value+1
        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
    }

}

onMounted(() => {
    store.loadAuditControlsList(audit.value.aud_req_id).then(() => {
        loader.value = false
        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
        store.loadAuditDocumentList(audit.value.aud_req_id).then(()=>{
            store.loadAuditAskQuestion(audit.value.aud_req_id)
            store.loadDocumentStatus(audit.value.aud_req_id)
        })
    })
})

</script>

<style scoped>
.FixedHeightContainer
{
    border-radius: 10px;
    padding:10px; 
    background:rgb(233, 231, 231);
}
.Content
{
    padding: 20px;
    height:350px;
    overflow:auto;
    background:#fff;
}
</style>