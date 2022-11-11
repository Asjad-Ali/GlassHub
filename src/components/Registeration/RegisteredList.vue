<template>
    <div>
        <div class="row position-relative mb-5">
            <div class="col-md-12 text-end">
                <button @click="showFilterFun('FilterMenu')" class="btn btn-custom btn-active-white btn-flex fw-bolder btn btn-xs btn-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
                        </svg>
                    </span>
                    Filter
                </button>
            </div>
            <SupplierFilter @filterList="filter_list" id="FilterMenu"  />
        </div>
        <PageLoader v-if="store.loader" />
        <div v-else>
            <div v-if="store.registerList.length">
                <div v-for="user in store.registerList" :key="user" class="row supplier_lists_shot_view">
                    <div class="col-md-5">
                        <h4 class="cursor-pointer"><span @click="router.push(`/reg-profile/${account[0].RegD_id ==  user.RegD_id_frm ? user.RegD_id_to : user.RegD_id_frm}`)" class="text-primary fs-2 me-1"> {{ account[0].RegD_id ==  user.RegD_id_frm ? user.RegD_Name_to : user.RegD_Name_frm }} </span> </h4>
                        <p>Category: {{ account[0].RegD_id ==  user.RegD_id_frm ? user.Category_to : user.Category_frm }} </p>
                        <div class="col-md-12 supplier_statsandrating">
                            <ul>
                                <li>Completed Projects: <b></b></li>
                                <!-- <li>Rating: <b>4.5</b><i class="fa fa-star" aria-hidden="true"></i></li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4>Fullfilled Compliance</h4>
                        <p class="mb-0">Through Audit ? </p>
                    </div>
                    <div class="col-md-3 suppliers-lastcol-contact-section">
                        <ul>
                            <li>
                                <span class="cursor_pointer" @click="Show_Chat_Model(user)">Chat</span>
                            </li>
                            <li><router-link to="chat">
                                <a href="#">Inbox</a></router-link>
                            </li>
                            <li v-show="account[0].Account_type != 2 && account[0].Account_type != 3 && route.path!='/auditFirm_register' && route.path!='/organization_register'">
                                <span @click="getRFQData(user)" class="cursor_pointer btn btn-sm btn-outline btn-outline-dashed btn-outline-success btn-active-light-success" >RFQ</span>
                            </li>
                        </ul>
                        <ul>
                            <select @change="updateStatus($event, user.Registration_id )" v-model="user.registred_status" name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option value= null disabled>Select One</option>
                                <option v-for="status in supplierStatus" :key="status.registred_status" :value="status.registred_status" selected> {{ status.registred_status_name }}</option>
                            </select>
                        </ul>
                    </div>
                </div>
                <div style="display:flex ; justify-content:center; margin-top:10px">
                    <v-pagination v-if="store.totalPages >= 1"
                    v-model="data.PageNo"
                    :pages="store.totalPages"
                    :range-size="1"
                    active-color="#DCEDFF"
                    @update:modelValue="paginationRegisteredList"
                    />
                </div> 
            </div>
            <RecordNotAvailable v-else /> 
        </div>
         <teleport to="body">
            <SendRFQ v-if="open_model" :user="userData" @closeSendRFQModel="closeSendRFQModel" /> 
            <ChatModal  v-if="open_Chat_model" :user="userData"   @Close_Chat_Model="Close_Chat_Model" />
        </teleport>  
    </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import SupplierFilter from "@/components/Registeration/FilterReg.vue"
import SendRFQ from '@/components/projects/Modal/SendRFQ.vue'
import ChatModal from '@/components/Modal/ChatModel.vue';
import { reactive, ref, onMounted, computed } from 'vue';
import { useRegisterationStore } from '@/store/registeration.store';
import {Account} from '@/store/SwitchAccount'
import { useRoute, useRouter } from 'vue-router';
import { useProjectStore } from "@/store/project.store";
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const router = useRouter()
// const SwitchAccount = Account()
const store = useRegisterationStore()
const prj_store = useProjectStore()
const open_model = ref(false)
const open_Chat_model = ref(false)
const userData = ref("")
// const props = defineProps({
//   users: {
//     type: Array,
//     required: true
//   }
// })
const data = reactive({
    RegD_id: account.value[0]?.RegD_id,
    Account_id:'',
    registred_status:'',
    PageNo: 1,
    RowNo: 10
})
const route = useRoute()
const currentPath = computed(() => route.path)

if(currentPath.value == "/suppliers_register" || currentPath.value == "/project_supplier"){
    data.Account_id = 1
} else if(currentPath.value == "/freelancer_register" || currentPath.value == "/project_freelancer" ){
    data.Account_id = 2
}else if(currentPath.value == "/auditFirm_register"){
    data.Account_id = 3 
}else if(currentPath.value == "/regulator_register"){
    data.Account_id = 4
}else{
    data.Account_id = 0
}

const showFilterFun = (e) => {
    setTimeout(()=>{
    let ele = document.getElementById(e)
    ele.classList.add('showFilter')
    },) 
}
// const { users } = toRefs(props);
const supplierStatus = [
    {registred_status: 1, registred_status_name: 'Whitelist'},
    {registred_status: 2, registred_status_name: 'Graylist'},
    {registred_status: 3, registred_status_name: 'Blacklist'}
]

const filter_list = (status) => {
    data.registred_status = status    
    data.PageNo = 1
    paginationRegisteredList()
}

const status_data = reactive({
    registred_status: '',
    updated_by: currentUser.User_id,
    registred_status_name: null,
    Registration_id: null,
})

const getRFQData = (user) => {
    userData.value = user
    open_model.value = true
    // store.loadRegistrationProfileData(user.RegD_id_to)
}

const closeSendRFQModel =(event)=>{
    open_model.value=event
}
const updateStatus = async (e, regSupId) =>{
    status_data.registred_status = e.target.value
    status_data.registred_status_name = supplierStatus[e.target.value-1].registred_status_name
    status_data.Registration_id = regSupId
    store.statusUpdateRegisterList(status_data)
}


 const Show_Chat_Model = (user) => {
    open_Chat_model.value = true;
    userData.value = user
}

const Close_Chat_Model =(event)=>{
    open_Chat_model.value=event
}
const paginationRegisteredList = () => {
  store.loadRegistrationList(data).then(res => {
    if(res.status == 200){
        let filter = document.getElementById('FilterMenu')
        filter.classList.remove('showFilter')
    }
  })
}
onMounted(() => {
    prj_store.rfqDetails = []
} )    

</script>

<style scoped>
.showFilter{
  display: block;
  position: absolute;
  top:50px;
  right: 5px;
}
</style>