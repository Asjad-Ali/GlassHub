<template>
        <div class="col-md-5 pb-5">
            <label class="form-label required">Category</label>
                <select name="" @change="addSelected($event)" v-model="add_cat"   class="form-select form-select-lg form-select-solid cursor-pointer" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                    <option  value="" selected disabled > Select Category</option>
                    <template   v-for="(cat) in store.regCategories" :key="cat">
                            <option class="cursor-pointer"  v-if="cat.Cat_name!=''"  :value="cat.Cat_id" >{{cat.Cat_name}}</option>
                    </template>
                </select>
            <div class="compliances_added mt-2">
                <template  v-for="(name,index) in cat_name" :key="index">
                <p style="margin:3px; padding: 1px 3px;"><span @click="remove_catgory(index)" class="closeIcon">x</span> {{ name }} </p>
                </template>
            </div>
        </div>

        <!-- <div class="col-md-4 pb-5">
            <label class="form-label required">Detail</label>
            <select name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true">
                <option></option>
            </select>
        </div> -->
        <!-- <div class="col-md-4 pb-5">
            <label class="form-label required">Search by Name</label>
            <select name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true">
                <option></option>
            </select>
        </div> -->
        <div class="col-md-5 pb-5">
            <label class="form-label ">Search by Name</label>
            <div class="position-relative">
                <span class="svg-icon svg-icon-1 svg-icon-primary position-absolute top-50 translate-middle ms-9">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                    </svg>
                </span>
                <input v-model="searchData.Company_name" type="text" class="form-control form-control-lg form-control-solid ps-14" name="search" placeholder="Search">
            </div>
        </div>
        <div class="col-md-2 pb-5">
            
            <button class="btn btn-lg btn-primary mt-md-8 w-100" type="button" @click="searchRequest" > 
            <SLoader v-if="store.btnLoader == 1" /> <span v-else>Search</span> </button>
        </div>
        <div v-if="store.requestRegistrationList.length || store.suggestedList.length || store.showOops" class="row my-5">
            <div class="col-md-4">
                <input v-model.trim="validate.email.$model" :class="{'border-danger is-invalid': validate.email.$errors.length}" name="email" placeholder="abc@paratech.com" class="form-control form-control-solid">
                <div v-if="validate.email.$error">
                    <div v-for="(error, index) in validate.email.$errors" :key="index" class="text-danger	mt-2" >
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-md-6" >
                <button @click="send_invitation" class="btn btn-lg btn-primary" type="button">
                <div v-if="invitation_btn_loader" style="width: 1.5rem; height: 1.5rem;" class="spinner-border mx-10" role="status"></div> <span v-else> Send Invitation </span> </button>
            </div>
        </div>
        <div v-if="store.requestRegistrationList.length">
         <h5>Search Results</h5>
            <div v-for="(data,index) in store.requestRegistrationList" :key="index" class="col-md-12 p-1">
                <div class="row searchresultfor_request_regis">
                    <div class="col-md-3">
                        <h5> {{ data.Company_name }} </h5>
                        <p>Category: {{  data.Cat_name }} </p>
                    </div>
                    <div class="col-md-4">
                         <h4>Projects Completed: </h4>
                        <p class="mb-0">Rating: 
                            <!-- <b>4.5</b><i class="fa fa-star" aria-hidden="true"></i> -->
                        </p> 
                    </div>
                    <div class="col-md-2">
                        <h6>     
                            <a :href="`https://maps.google.com/?q=${data.Head_office_lat},${data.Head_office_long}`" target="_blank" class=" align-items-center text-gray-900 text-hover-primary  mb-3">
                                <span  class="svg-icon me-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                        <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                    </svg>
                                </span>
                            <span class="text-primary">Map</span>
                            </a>
                        </h6>
                        <h5  @click="openProfile(data.RegD_id)" class="cursor-pointer mb-0"><span class=" text-primary me-1"> View Profile</span></h5>
                    </div>
                    <div class="col-md-3 text-right">

                        <button @click="sendRequest(data)" :disabled="data.flag" class="mb-2 btn btn-outline btn-outline btn-outline-success btn-active-light-success"  >
                            <div v-if="store.sendReqLoader == data.RegD_id" style="width: 1.5rem; height: 1.5rem;" class="spinner-border mx-5" role="status"></div> 
                            <span v-else> 
                                <span v-if="data.flag">
                                    <span v-if="data.request || sent">Sent</span>
                                    <span v-else>Respond</span>
                                </span>
                                <span v-else>Send Request</span>
                            </span> 
                        </button>
                        <div v-if="account[0].Account_type == 1 && currentPath == '/organization-request-registration' ">
                            <a v-if="data.audit_required" @click="openAuditRFQModelFun(data)" class="badge cursor-pointer badge-light text-primary">Audit Required</a>
                            <span v-else class="badge badge-light"> No Audit Required</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display:flex ; justify-content:center; margin-top:10px">
                <v-pagination v-if="store.totalPages >= 1"
                v-model="searchData.PageNo"
                :pages="store.totalPages"
                :range-size="1"
                active-color="#DCEDFF"
                @update:modelValue="paginationSearchRequest"
                />
            </div> 
        </div>
        <div v-else v-show="store.showOops">
            <div  class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                    </svg>
                </span>
                <div class="d-flex flex-stack flex-grow-1">
                    <div class="fw-bold">
                        <div class="fs-6 text-gray-700">
                            <b> OOPS! </b> No record Found If you know the {{ account_name[searchData.Account_type] }}, Please invite them into our system.
                        </div>
                    </div>
                </div>
            </div>
            <PageLoader v-if="store.suggestedListLoader" />
            <div v-else>
                <div v-if="store.suggestedList.length">
                    <div  class="my-5">
                        <div class="m-3">
                            <h2 class="text-center text-primary">------------------------------ OR ------------------------------</h2>
                        </div>
                        <h4> The following {{ account_name[searchData.Account_type] }} may be helpful for you</h4>
                        <div v-for="(data,index) in store.suggestedList" :key="index" class="col-md-12 p-1">
                            <div class="row searchresultfor_request_regis">
                                <div class="col-md-3">
                                    <h5> {{ data.Company_name }} </h5>
                                    <p>Category: {{  data.Cat_name }} </p>
                                </div>
                                <div class="col-md-4">
                                    <h4>Projects Completed:</h4>
                                    <p class="mb-0">Rating: 
                                        <!-- <b>4.5</b><i class="fa fa-star" aria-hidden="true"></i> -->
                                        </p>
                                </div>
                                <div class="col-md-2">
                            <h6>     
                                <a :href="`https://maps.google.com/?q=${data.Head_office_lat},${data.Head_office_long}`" target="_blank" class=" align-items-center text-gray-900 text-hover-primary  mb-3">
                                    <span style="font-size: 20px" class="svg-icon me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                        </svg>
                                    </span>
                                <span class="text-primary">Map</span>
                                </a>
                            </h6>                                
                            <h5 @click="openProfile(data.RegD_id)" class="cursor-pointer mb-0"><span class="text-primary me-1"> view profile</span></h5>
                                </div>
                                <div class="col-md-3 text-right">
                                    <button @click="sendRequest(data)" :disabled="data.flag" class="mb-2 btn btn-outline btn-outline btn-outline-success btn-active-light-success"  >
                                        <div v-if="store.sendReqLoader == data.RegD_id" style="width: 1.5rem; height: 1.5rem;" class="spinner-border mx-5" role="status"></div>
                                        <span v-else>
                                            <span v-if="data.flag">
                                                <span v-if="data.request || sent">Sent</span>
                                                <span v-else>Respond</span>
                                            </span>
                                            <span v-else>Send Request</span>
                                    </span> 
                                    </button>
                                    <div v-if="account[0].Account_type == 1 && currentPath == '/organization-request-registration' ">
                                        <a v-if="data.audit_required" @click="openAuditRFQModelFun(data)" class="badge cursor-pointer badge-light text-primary">Audit Required</a>
                                        <span v-else class="badge badge-light"> No Audit Required</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex ; justify-content:center; margin-top:10px">
                            <v-pagination v-if="store.totalPages >= 1"
                            v-model="suggestedData.PageNo"
                            :pages="store.totalPages"
                            :range-size="1"
                            active-color="#DCEDFF"
                            @update:modelValue="paginationSuggested"
                            />
                        </div> 
                    </div>
                </div>
                <div v-else class="text-center m-20">
                    <h4 class="text-center text-muted mt-20">No Suggested {{ account_name[searchData.Account_type] }} Available</h4>
                </div>
            </div>
        </div>

        <teleport to="body">
          <AuditsRFQ v-if="openAuditRFQModel" :user="auditData" @closeAuditRFQModel="closeAuditRFQModel" />  
      </teleport> 

</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import AuditsRFQ from '@/components/audit/supplier/Modal/SendAuditRFQ.vue'
import useVuelidate from "@vuelidate/core";
import { required, helpers,email} from "@vuelidate/validators";
import useToast from '@/global_components/Toast/useToast'
import SLoader from "@/global_components/loader/SLoader.vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import { useRoute, useRouter } from "vue-router";
import API from "@/composables/API";
import { Account } from "@/store/SwitchAccount";
import { useAuditStore } from "@/store/audit.store";
const { useRegisterationStore }=require("@/store/registeration.store");
const { onMounted, ref, reactive, computed }=require("vue");
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const currentPath = computed(() => route.path)
const sent = ref(false)
const openAuditRFQModel = ref(false)
const auditData = ref()
const route = useRoute()
const store = useRegisterationStore()
const auditStore = useAuditStore()
const router = useRouter()
const add_cat = ref('')
const invitation_btn_loader = ref(false)
const cat_name = reactive([])
const searchData = reactive({
    Cat_id:[],
    Account_type: '',
    RegD_id_frm: account.value[0].RegD_id,
    PageNo: 1,
    RowNo: 10,
    Company_name: null
})
const suggestedData = reactive ({
    Account_type: '',
    Cat_id:[],
    PageNo: 1,
    RowNo: 10,
    Company_name: null,
    RegD_id_frm: account.value[0].RegD_id
})
if(currentPath.value == "/supplier-request-registration"){
    searchData.Account_type = 1
} else if(currentPath.value  == "/freelancer-request-registration"){
    searchData.Account_type = 2
}else if(currentPath.value  == "/auditFirm-request-registration"){
    searchData.Account_type = 3 
}else if(currentPath.value  == "/regulator_request_registration"){
    searchData.Account_type = 4
}else{
    searchData.Account_type = 0
}
const account_name = ['Organization', 'Suppliers', 'Freelancers', 'Audit Firms', 'Regulators']
const emailForm = reactive({
    email: null,
    categories: [],
    senderemail: currentUser.User_email,
    Compname: currentUser.Company_name,
    Account: ''
})


const sendReqData = reactive({
    Accttype_id_frm: account.value[0].Account_type,
    Accttype_Name_frm: account.value[0].Account_type_name,
    RegD_id_frm: account.value[0].RegD_id,
    RegM_id_frm: account.value[0].RegM_id,
    RegM_Name_frm: currentUser.Fullname,
    Accttype_id_to:'',
    Accttype_Name_to:'',
    RegD_id_to:'',
    RegM_id_to:'',
    RegM_Name_to:'',
    Requested_by: currentUser.User_id,
    reg_status: 0,
    accepted_by: currentUser.User_id,
    created_by: currentUser.User_id,
    updated_by: currentUser.User_id,
    Cat_ids: [] ,
    Cat_names: []
})

const sendRequest = (data) => {
    sendReqData.Accttype_id_to = data.Account_type,
    sendReqData.Accttype_Name_to = data.Account_type_name,
    sendReqData.RegD_id_to = data.RegD_id,
    sendReqData.RegM_id_to = data.RegM_id,
    sendReqData.RegM_Name_to = data.Company_name,
    sendReqData.Cat_ids = [...searchData.Cat_id] ,
    sendReqData.Cat_names = [...cat_name]
    sent.value = true
    store.sendRequestRegistration(sendReqData)
}

const openProfile = (RegDId) => {
    router.push({ name: 'RegProfile', params:{ id: RegDId} })
    store.loadRegistrationProfileData(RegDId)
}
const addSelected = (e) => {
    const found = searchData.Cat_id.some(el => el == e.target.value);
  if (!found) {
      searchData.Cat_id.push(e.target.value);
      const index = store.regCategories.findIndex( cat => cat.Cat_id == e.target.value)
      if(index != -1){
          cat_name[cat_name.length] = store.regCategories[index].Cat_name
      }
    }
}
const rules = {
        email: {
        email,
        required: helpers.withMessage("Email is required", required),
        }, 
};
const validate = useVuelidate(rules, emailForm);
const remove_catgory=(index)=>{
    searchData.Cat_id.splice(index, 1);
    cat_name.splice(index,1)
    add_cat.value=''
}

const searchRequest = () => {
    searchData.PageNo = 1
    store.searchRequestRegistrationList(searchData).then( response => {
        if(response.status == 200 && !response.data.Pagination.length){
            suggestedData.Account_type = searchData.Account_type
            suggestedData.Cat_id = searchData.Cat_id
            suggestedData.Company_name = searchData.Company_name
            store.loadSuggestedList(suggestedData)
        }
    })
}
const paginationSearchRequest = () =>{
    store.searchRequestRegistrationList(searchData)
}
const paginationSuggested = () => {
    store.loadSuggestedList(suggestedData)
}
const send_invitation = async () =>{
    invitation_btn_loader.value = true
    emailForm.Account = account_name[searchData.Account_type]
    emailForm.categories = cat_name 
    console.log(emailForm)
    const response = await API.get('api/Forgot_logs/sendRequest/'+emailForm.email+'/'+emailForm.categories+'/'+emailForm.senderemail+'/'+emailForm.Compname+'/'+emailForm.Account)
    if(response.status == 200){
        response
        useToast("Invitation sent successfully",'success')
    }else{
        useToast(response)
    }
    invitation_btn_loader.value = false


}
const openAuditRFQModelFun = (data) => {
  auditData.value = data
  openAuditRFQModel.value = true
  const comData = ref({
    RegD_id: data.RegD_id,
    RegD_id_frm: account.value[0].RegD_id,
    Audit_type: 0
  })
  auditStore.loadAuditAndComplianceList(comData.value)
}
const closeAuditRFQModel =(event)=>{
    openAuditRFQModel.value = event
}
onMounted(() => {
    store.loadRegCategoriesList(account.value[0].RegD_id)
} )

</script>

<style>
.closeIcon{
    padding: 0px 3px;
    font-size: 15px;
    margin-right: 3px;
    color: red;
    font-weight: bold;
}
</style>