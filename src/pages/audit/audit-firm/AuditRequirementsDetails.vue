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
                            <div @click="router.go(-1)" class="row">
                                <i class="fa fa-arrow-left cursor-pointer px-5 py-4" style="font-size: 20px; color: rgb(82, 65, 161);"></i>
                            </div>
                            <div v-if="store.auditControlsList.compliance_audited?.length" class="col-md-12">
                                <div class="row">
                                    <div  class="row">
                                        <div class="col-md-6">
                                            <!--system genrated-->
                                            <h5 class="form-label ">Control No: {{ currentObject+1 }}/{{ store.auditControlsList.compliance_audited.length }} </h5>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required d-flex">Compliance Status</label>
                                            <div class="col-md-12 d-flex  mb-2">
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Complained"  v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" :value="0" />
                                                    <label class="fs-6  fw-bold form-label" for="Complained">Complained</label>
                                                </div>
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Non_Complained"  v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" :value="1" />
                                                    <label class="fs-6  fw-bold form-label" for="Non_Complained">Non-Complained</label>
                                                </div>
                                                <div class="me-5">
                                                    <input type="radio" class="form-check-input me-5" id="Not_Acceptable" v-model="store.auditControlsList.compliance_audited[currentObject].compliance_status" :value="2" />
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
                                            <table class=" table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 col-md-12">
                                                <tbody>
                                                    <tr v-for="(data,index) in documents.length" :key="data" class="mb-5 cursor-pointer" >
                                                        <td >
                                                            <input @change="onFileChange($event,index)" type="file" class="form-control form-control-lg form-control-solid" />
                                                        </td>
                                                        <td v-if="documents.length>1">
                                                            <span @click="removeDoc(index)" class="plustoaddoption badge badge-danger ms-3">Remove</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span @click="addDocument" class="plustoaddoption badge badge-primary">Add Document</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-md-6 mb-20">
                                            <label class="form-label my-2">Compliance analysis & remarks</label>
                                            <QuillEditor theme="snow"  v-model:content="store.auditControlsList.compliance_audited[currentObject].analysis_remarks" :toolbar="toolbar" ref="quill"
                                           name="description"  content-type="html" id="summernote" class="form-control 
                                            form-control-lg form-control-solid"></QuillEditor>       
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-15 mb-5">
                                    <div class="col-6 text-left">
                                        <button v-if="currentObject>=1" @click="previousControl" class="btn btn-secondary">Previous</button>
                                    </div>
                                    <div class="col-6  text-right">
                                        <button @click="addAuditControls(store.auditControlsList.compliance_audited[currentObject])" v-if="currentObject+1 != store.auditControlsList.compliance_audited.length" class="btn btn-secondary">Next</button>
                                        <button ref="finishBtn" @click="addAuditControls(store.auditControlsList.compliance_audited[currentObject])" v-if="currentObject+1 == store.auditControlsList.compliance_audited.length" class="btn btn-primary">Finish</button>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="col-md-12">
                                <RecordNotAvailable  />
                            </div>
                            <div v-if="store.auditMessages.length" class="separator separator-dashed border-gray-300 my-1"></div>
                            <div v-if="store.auditMessages.length" class="col-md-12 FixedHeightContainer">
                                    <h3  @click="openProfileModelFun(audit.RegD_id_frm)" >Conversation with <span  class="text-primary cursor-pointer">{{ audit.RegD_name_frm }}</span> </h3>
                                <div class="Content">
                                    <div v-for="(message,index) in store.auditMessages" :key="index" class="row pb-5">
                                        <div class="col-md-12">
                                            <h5> {{ message.question }} ? </h5>
                                            <p class="notee"><b>My Note:</b> {{ message.auditor_note }} </p>
                                            <p class="response"><b>Supplier Response:</b>{{ message.sup_response }} </p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <span class="dateandtime">{{ message.created_datetime.substring(0,10) }} | {{ message.created_datetime.substring(11,16) }}</span>
                                                </div>
                                                <div class="col-md-6">
                                                    <p @click="openAddNote(message)" class="text-right w-100"><a class="fts-12 cursor-pointer">Add Note</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="store.auditMessages.length" class="separator separator-dashed border-gray-300 my-1"></div>
                            <div data-bs-toggle="modal" data-bs-target="#askformoreques" class="d-flex align-items-sm-center mb-2  mt-2">
                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                                    <div class="d-flex ">
                                        <div class="me-5">
                                            <span class="btn text-primary btn-outline btn-outline-dashed btn-outline-default" 
                                            @click="openAskAnyQuestion(audit.aud_RFQ_id)">Ask any Question</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <!--begin::Table-->
                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        <thead>
                                            <tr>
                                                <th class="fw-bolder text-gray-800">Title</th>
                                                <th class="fw-bolder text-gray-800">Image</th>
                                                <th class="fw-bolder text-gray-800">Status</th>
                                                <th class="fw-bolder text-gray-800">Regulator Verification</th>
                                                <th class="fw-bolder text-gray-800">For Message</th>
                                                <th class="fw-bolder text-gray-800">Remarks</th>
                                                <th class="fw-bolder text-gray-800">Regulator Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="certificate in store.auditCertificatesName" :key="certificate">
                                                <td>{{ certificate.doc_name }}</td>
                                                <td>
                                                    <span class="btn text-primary  btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" @click="openCertificateView(certificate)">View</span>
                                                </td>
                                                <td>
                                                    <select @change="certificateStatus($event,certificate)" v-model="certificate.doc_status" name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                        <option selected value=null>Select One</option>
                                                        <option :value="0" >Pending</option>
                                                        <option :value="1">Re Submit</option>
                                                        <option :value="2">Verified</option>
                                                        <option :value="3">Rejected</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div  class="d-flex align-items-sm-center mb-2">
                                                            <span v-if="certificate.is_regulator_verification" class="badge badge-success">Required</span>
                                                            <span v-else class="badge badge-primary">Not Required</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-if="certificate.is_regulator_verification" class="d-flex align-items-sm-center mb-2">
                                                        <span class="btn text-primary  btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" @click="openRegulatorMessage">Required</span>
                                                    </div>
                                                </td>
                                                <td><a v-if="certificate.is_regulator_verification" href="#">View</a></td>
                                                <td>
                                                     <span v-if="certificate.regulator_status == 0" class="badge badge-secondary">Pending</span>
                                                     <span v-else-if="certificate.regulator_status == 1" class="badge badge-success"> Verified </span>
                                                     <span v-else-if="certificate.regulator_status == 2" class="badge badge-danger">Rejected</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#askformoredocs" class="d-flex align-items-sm-center mb-2">
                                    <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                                        <div class="flex-grow-1 me-2">
                                            <span @click="openAskForDocuments" class="btn text-primary  btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">Ask for more documents</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <teleport to="body">       
            <AskAnyQuestion v-if="showAskAnyQuestion" :audit="audit" @closeAskAnyQuestionList="closeAskAnyQuestionList"  />
            <RegulatorMessage v-if="showRegulatorMessage" :audit="audit" @closeRegulatorMessage="closeRegulatorMessage"  />
            <CertificateView v-if="showCertificateView" @closeCertificateView="closeCertificateView"  />
            <AskForDocuments v-if="showAskForDocuments" @closeAskForDocuments="closeAskForDocuments"  />
            <AddNote v-if="openAddNoteModal" :messageData="messageData" @closeAddNote="closeAddNote"  />
            <ProfileModel v-if="openProfileModel" @closeProfileModel="closeProfileModel" />  

        </teleport>
    </div>
</template>

<script setup>
import ProfileModel from "@/components/Modal/ProfileModel.vue"
import useToast from '@/global_components/Toast/useToast'
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import AskAnyQuestion from '@/components/audit/audit-firm/Modal/AuditAskQuestion.vue';
import RegulatorMessage from '@/components/audit/audit-firm/Modal/RegulatorMessage.vue';
import CertificateView from '@/components/audit/audit-firm/Modal/AuditCertificateView.vue';
import AskForDocuments from '@/components/audit/audit-firm/Modal/AskForDocuments.vue';
import AddNote from '@/components/audit/audit-firm/Modal/AuditAddNote.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useAuditStore } from '@/store/audit.store';
import { Account } from '@/store/SwitchAccount';
import { computed, onMounted, ref } from 'vue';
import PageLoader from '@/global_components/loader/PageLoader.vue';
import { useRegisterationStore } from '@/store/registeration.store';
import { useRouter } from "vue-router";

const router = useRouter()
const store = useAuditStore()
const accountStore = Account()
const regStore = useRegisterationStore()
const account = computed(()=>{
    return accountStore.Account_detail
})
const finishBtn = ref()
const quill = ref()
const currentControlDocs = ref([])
const Doc_path = ref({Doc_path:{}})
const openProfileModel = ref(false)
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const showAskAnyQuestion = ref(false)
const showRegulatorMessage = ref(false)
const showAskForDocuments = ref(false)
const openAddNoteModal = ref(false)
const showCertificateView = ref(false)
const messageData = ref({})
const currentObject = ref(0)

const loader = ref(true)
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const formData = ref({
compliance_audited:{
    id:null,
    compliance_id: audit.value.compliance_id, 
    aud_req_id: audit.value.aud_req_id,  
    ref_no:null,
    control_statement:"", 
    source:"",
    analysis_remarks:"",
    user_id: currentUser.User_id, 
    created_by: currentUser.User_id, 
    updated_by: currentUser.User_id,
    RegM_id: account.value[0].RegM_id, 
    RegD_id: account.value[0].RegD_id, 
    regd_name: account.value[0].Company_name,
    compliance_status: null, 
    compliance_status_name: '',
},
    compliance_evidance:[]
})

const cerStatus = ref({
    doc_id:0,
    doc_name:"",
    doc_status:'',
    doc_status_name:"",
    audited_by: currentUser.User_id,
    doc_type: audit.value.doc_type,
    doc_type_name: audit.value.doc_type_name,
    audit_req_id: audit.value.aud_req_id,
    RegM_id: account.value[0].RegM_id,
    RegM_name: account.value[0].Company_name,
    RegD_id: account.value[0].RegD_id,
    RegD_name: account.value[0].Company_name,
    RegD_type: account.value[0].Account_type,
    RegD_type_name: account.value[0].Account_type_name,
    Created_by: currentUser.User_id,
    Updated_by: currentUser.User_id,
    aud_doc_id: 0,
    is_regulator_verification:0,
    regulator_by_regd_id:0,
    aud_for_regd_id: audit.value.RegM_id_frm,
    aud_for_regd_name: audit.value.RegM_name_frm,
    aud_compliance_id: audit.value.compliance_id
})

const certificateStatus = (e,certificate) => {
    cerStatus.value.doc_id = certificate.doc_id
    cerStatus.value.doc_name = certificate.doc_name
    cerStatus.value.doc_status = e.target.value
    cerStatus.value.doc_status_name = e.target.options[e.target.options.selectedIndex].text;
    cerStatus.value.aud_doc_id = certificate.aud_doc_id ? certificate.aud_doc_id : 0
    cerStatus.value.is_regulator_verification = certificate.is_regulator_verification 
    cerStatus.value.regulator_by_regd_id = certificate.regulator_by_regd_id
    store.updateStatusCertificateNames(cerStatus.value)
}

const documents = ref ([{doc_path:{}}])
const removeDoc = (index) => {
    documents.value.splice(index,1)
}
const addDocument = () => {
    documents.value.push({doc_path:{}})
}

const onFileChange = (e,index) => {
    var files = e.target.files || e.dataTransfer.files;
    const fileSize = Math.floor(files[0]?.size/1024);
    if(fileSize>300)
    {
        useToast('file size exceed 300 kb')
        e.target.value =""
        return false
    }else{
        Doc_path.value.Doc_path = files[0]
        console.log(index)
        console.log(Doc_path.value)
        documents.value[index] = (Doc_path.value)
        console.log(documents.value)
    }  
};
//  modals function
const openAskAnyQuestion =()=>{
    showAskAnyQuestion.value = true
 }
const closeAskAnyQuestionList =(event)=>{
    showAskAnyQuestion.value=event
}
const openRegulatorMessage =()=>{
    showRegulatorMessage.value = true
 }
const closeRegulatorMessage =(event)=>{
    showRegulatorMessage.value=event
}
const openAskForDocuments = () => {
    showAskForDocuments.value = true
 }
const closeAskForDocuments =(event)=>{
    showAskForDocuments.value=event
}
const openAddNote = (message) => {
    messageData.value = message
    openAddNoteModal.value = true
 }
const closeAddNote =(event)=>{
    openAddNoteModal.value=event
}
const openProfileModelFun = (RegD_id) => {
    regStore.loadRegistrationProfileData(RegD_id)
    openProfileModel.value = true
}
const closeProfileModel =(event)=>{
    openProfileModel.value = event
}
const openCertificateView =(certificate)=>{
    store.loadSingleCertificate(certificate.doc_id)
    showCertificateView.value = true
 }
const closeCertificateView =(event)=>{
    showCertificateView.value=event
}


const toolbar = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    // ['link', 'image', 'video'],
    ['clean']
];

const previousControl = () => {
    currentObject.value = currentObject.value-1
    currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
    quill.value.setContents(store.auditControlsList.compliance_audited[currentObject.value].analysis_remarks)
}
function docName(str){
    if(!str) return
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
const addAuditControls = (control) => {
    if(currentObject.value < store.auditControlsList.compliance_audited.length){
        if(control.compliance_status == 0 || control.compliance_status  ) {
            formData.value.compliance_audited.compliance_status_name = control.compliance_status == 0 ? 'Complained' : control.compliance_status == 1 ? 'Non-Complained' : 'Not-Acceptable';
            formData.value.compliance_audited.ref_no = control.ref_no,
            formData.value.compliance_audited.id = control.id,
            formData.value.compliance_audited.control_statement = control.control_statement, 
            formData.value.compliance_audited.source = control.source,
            formData.value.compliance_audited.analysis_remarks = control.analysis_remarks,
            formData.value.compliance_audited.compliance_status = control.compliance_status,
            formData.value.compliance_evidance = documents.value
            var DocsFormData = new FormData();
            let d = JSON.stringify(formData.value.compliance_audited)
            DocsFormData.append('data',d)
           if(formData.value.compliance_evidance.length){
               for( let value of formData.value.compliance_evidance)
               {
                     let obj = value
                     for(const [key,value] of Object.entries(obj))
                     {
                       DocsFormData.append(key,value)
                     }    
               }
           }
            store.sendAuditControls(DocsFormData).then((res) => {
                if(res.status == 200 ){
                    if(store.auditControlsList.compliance_audited.length-1 == currentObject.value){
                        finishBtn.value.classList.add('disabled')
                        quill.value.setContents(store.auditControlsList.compliance_audited[currentObject.value].analysis_remarks)
                        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
                    }else{
                        currentObject.value = currentObject.value+1
                        quill.value.setContents(store.auditControlsList.compliance_audited[currentObject.value].analysis_remarks)
                        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
                    }
    
                }
            })
            documents.value = []
        }else{
            useToast("Please Select the Compliance Status")
        }
    }
}
const cerdata = ref({
    aud_doc_id: audit.value.aud_doc_id,
    Compliance_id: audit.value.compliance_id
})


onMounted(() => {
    store.loadAuditControlsList(audit.value.aud_req_id).then(() => {
        currentControlDocs.value = store.auditControlsList.compliance_evidance.filter(control => control.id == store.auditControlsList.compliance_audited[currentObject.value].id )
        store.loadAuditAskQuestion(audit.value.aud_req_id)
        store.loadAuditDocumentList(audit.value.aud_req_id)
        loader.value = false
        store.loadCertificateName(cerdata.value)
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