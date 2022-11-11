<template>
        <div class="col-md-6 pb-5">
            <label class="form-label required">Title</label>
            <input @focus="formData.Bid_tittle == 'Enter Name' ? formData.Bid_tittle = '' : formData.Bid_tittle = formData.Bid_tittle " maxlength="150" v-model="validate.Bid_tittle.$model" name="" :class="{'is-invalid border-danger':validate.Bid_tittle.$error}" 
             placeholder="Title of your project" class="form-control form-control-lg form-control-solid">
            <div v-for="(error, index) in validate.Bid_tittle.$errors" :key="index" class="mt-1">
                <span class="text-danger ">{{error.$message}}</span>
            </div>
        </div>
        <div class="col-md-6 pb-5">
            <label class="form-label required"> Category</label>
            <select @change="GetCategoryName($event)" v-model="formData.Category_id"  :class="{'is-invalid border-danger':validate.Category_name.$error}"  name="" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                <option selected disabled value="">Select One</option>
                <option v-for="cat in regStore.regCategories" :value="cat.Cat_id" :key="cat.Cat_id" > {{ cat.Cat_name }} </option>
            </select>
            <div v-for="(error, index) in validate.Category_name.$errors" :key="index" class="mt-1">
                <span class="text-danger ">{{error.$message}}</span>
            </div>
        </div>
        <div class="col-md-6 pb-5">
            <div class="form-label">Compliance  
            </div>
            <select  @change="GetComplianceName($event)" v-model="formData.Compliance_id"   name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                <option selected  value= null>Select One</option>
                <option v-for="compliance in offeringStore.complianceList" :key="compliance.Compliance_id" :value="compliance.Compliance_id"> {{ compliance.Compliance_name }} </option>
            </select>      
        </div>
        <div class="col-md-6 pb-5">
            <div class="form-label">Authorized Audit Firms  
                <!-- <a href="request-registeration.html" target="_blank">Add New</a>   -->
                </div>
            <select @change="GetAuditFirmName($event)"  v-model="formData.Auditfirm_id"  name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                <option selected  value= null>Select One</option>
                <option v-for="audit in offeringStore.auditsList" :key="audit.RegD_id" :value="audit.RegD_id"> {{ audit.Fullname }}  </option>
            </select>    
        </div>
        <div class="col-md-6 pb-5">
            <label class="form-label required">Start Date</label>
                <input  v-model="validate.start_date.$model" :min="(new Date().toISOString().slice(0, 10))" :class="{'is-invalid border-danger':validate.start_date.$error}" type="date"   class="form-control form-control-solid" placeholder="Pick date rage" id="kt_daterangepicker_1"/>
            <div v-for="(error, index) in validate.start_date.$errors" :key="index" class="mt-1">
                <span class="text-danger ">{{error.$message}}</span>
            </div>        
        </div>
        <div class="col-md-6 pb-5">
            <label class="form-label required">End Date</label>
                <input  v-model="validate.end_date.$model" :min="(new Date().toISOString().slice(0, 10))" :class="{'is-invalid border-danger':validate.end_date.$error}" type="date"   class="form-control form-control-solid" placeholder="Pick date rage" id="kt_daterangepicker_1"/>
            <div v-for="(error, index) in validate.end_date.$errors" :key="index" class="mt-1">
                <span class="text-danger ">{{error.$message}}</span>
            </div>        
        </div>
        <!-- <div class="col-md-12">
            <div class="row mb-2">
                <div class="col-md-2 ">
                    <label class="form-label ">For Attachments</label>
                </div>
                <div class="col-md-6">
                    <input v-model="formData.RFQ_type" class="form-check-input" type="checkbox" name="account_plan">                                
                </div>
            </div>     
        </div> -->
        <div class="col-md-12 mb-5">
            <label class="form-label">Attachments</label>
            <input @change="onFileChange($event)" type="file" id="attachment" class="form-control form-control-lg form-control-solid" :class="{'is-invalid border-danger':Doc_attachmentError}" />
            <div class="text-danger"> {{ Doc_attachmentError }} </div>
        </div>
        <div class="col-md-12 mb-15">
            <label class="form-label required">Project Details</label>
            <QuillEditor theme="snow"  v-model:content="formData.Bid_detail"  ref="quill" :toolbar="toolbar" :content="formData.Bid_detail" name="description"  content-type="html" placeholder="Enter your helping description" id="summernote" class="form-control 
            form-control-lg form-control-solid"></QuillEditor>       
        </div>
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="col-md-6 mt-10">
            <div class="text-danger"> {{ Bid_detailError }} </div>
            <div class="d-flex ">
                <div class="me-5">
                    <label class="fs-6 fw-bold form-label">Freelancer can bid project</label>
                </div>
                <label class="form-check form-switch form-check-custom form-check-solid">
                    <input v-model="formData.Is_freelancer_bid" class="form-check-input" type="checkbox" value="0">
                </label>
            </div>
        </div>
        <div class="col-md-6 pb-5 mt-10 text-right">
            <button @click="router.back()" type="button" class="btn btn-lg btn-secondary me-3 d-inline-block" data-kt-stepper-action="submit">Cancel</button>
            <button @click="onSubmit" type="button" class="btn btn-lg btn-primary me-3 d-inline-block" data-kt-stepper-action="submit">
            <SLoader v-if="projectStore.btnLoader" /> <span v-else>Post Project</span> </button>
        </div>
</template>

<script setup>
import SLoader from '@/global_components/loader/SLoader.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useProjectStore } from "@/store/project.store";
import { useOfferingCertificateStore } from "@/store/offeringCertificates.store";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { useVuelidate } from "@vuelidate/core";
import { required ,helpers} from "@vuelidate/validators";
import { useRouter } from 'vue-router';
import { useRegisterationStore } from '@/store/registeration.store';
import { Account } from "@/store/SwitchAccount";
const accountStore = Account()
const { reactive, ref }=require("@vue/reactivity");
let quill = ref(null) 
let Bid_detailError = ref(null) 
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const account = computed(()=>{
    return accountStore.Account_detail
})

const router = useRouter()
const offeringStore = useOfferingCertificateStore()
const regStore = useRegisterationStore()
const projectStore = useProjectStore()
let Doc_attachmentError = ref(null)

let postBidData = reactive({
    Doc_attachment:"null",
    data:{}
})
let formData = reactive({
    Bid_tittle:'',
    Category_id:'',
    Category_name:'',
    Compliance_id: null,
    Compliance_name: null,
    Auditfirm_id: null,
    Auditfirm_name: null,
    start_date:'',
    Bid_detail:'',
    Is_freelancer_bid: false,
    RegM_id: account.value[0].RegM_id ,
    RegM_name: currentUser.User_fullname,
    RegD_id: account.value[0].RegD_id,
    RegD_comp_name: currentUser.Company_name,
    Created_by: currentUser.User_id,
    Created_by_name: currentUser.User_fullname,
    Updated_by: currentUser.User_id,
    Updated_by_name: currentUser.User_fullname,
    bid_send_email: account.value[0].Comp_email,
    Address: account.value[0].Head_office_address,
    Is_Active: true,
    RFQ_type: false,
    Bid_type: 2,
    Isdirect: false,
    end_date: null
})
 const rules = {
      Bid_tittle:{required:helpers.withMessage('Title is Required',required)},
      Category_name:{required:helpers.withMessage('Category is Required',required)},
      start_date:{required:helpers.withMessage('Start Date Firms is Required',required)},
      end_date:{required:helpers.withMessage('End Date Firms is Required',required)},
 }

const validate = useVuelidate(rules, formData)

const GetCategoryName = (e) => {
    formData.Category_name = e.target.options[e.target.options.selectedIndex].text;
}
const GetComplianceName = (e) => {
    formData.Compliance_name = e.target.options[e.target.options.selectedIndex].text;
}
const GetAuditFirmName = (e) => {
    formData.Auditfirm_name = e.target.options[e.target.options.selectedIndex].text;
}

watch( 
    () => formData.Bid_detail,
    () => {
        if(formData.Bid_detail){
            if(formData.Bid_detail.length >= 5000 ){
                console.log(formData.Bid_detail.length)
                Bid_detailError.value = "Maximin character length is 5000"
            }
            if(!formData.Bid_detail)(
                Bid_detailError.value = "Detail is required"
            )
            else{
                Bid_detailError.value = null
            }
        }
    },
    { deep: true } 
)
const onSubmit = () => {
    validate.value.$touch();
    if(!validate.value.$invalid && !Bid_detailError.value){
        postBidData.data = formData
        postBidData.data = JSON.stringify(formData) 
        projectStore.postProjectBid(postBidData).then(res => {
            if(res.status == 200 ){
                router.push({path: '/pending_projects'})
            }
        })
    }else{
        formData.Bid_detail ? Bid_detailError.value = null : Bid_detailError.value = "Detail is required"
    }
    
}

    const onFileChange = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        const fileSize = Math.floor(files[0]?.size/1024);
        console.log(fileSize)
        if(fileSize>300)
        {
            Doc_attachmentError.value = 'file size exceed 300 kb'
            e.target.value =""
            postBidData.Doc_attachment = null
            return false
        }else{
            Doc_attachmentError.value = null
            document.value = files[0]
            postBidData.Doc_attachment = files[0]
        }  
    };

onMounted(() => {
    regStore.loadRegCategoriesList(account.value[0].RegD_id),
    offeringStore.loadComplianceCertificatesList(account.value[0].RegD_id).then(() =>{
            offeringStore.loadAuditsList()
        }
    )

})

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

</script>

<style>

</style>