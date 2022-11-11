<template>
    <div class="pd-30">
        <div  class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                <thead>
                    <tr>
                        <th class="fw-bolder text-gray-800">Name</th>
                        <th class="fw-bolder text-gray-800">Business Category</th>
                        <th class="fw-bolder text-gray-800">Chat/Inbox</th>
                        <th  class="fw-bolder text-gray-800">RFQ</th>
                        <th  class="fw-bolder text-gray-800">RFQ Status</th>
                        <th class="fw-bolder text-gray-800">Quotation</th>
                        <th class="fw-bolder text-gray-800">Quotation Status</th>
                        <th  class="fw-bolder text-gray-800">PO</th>
                        <th  class="fw-bolder text-gray-800">PO Status</th>
                        <th class="fw-bolder text-gray-800">Payment</th>
                        <th class="fw-bolder text-gray-800">Supply</th>
                        <th class="fw-bolder text-gray-800">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(project) in projects" :key="project">
                        <td>
                            {{ project.Bid_title }}
                        </td>
                        <td>
                            {{ project.Category_name }}
                        </td>
                        <td  class="chat_or_message_with_supplier">
                            <a href="#"  @click="openLiveChatModelFun"><i class="far fa-comment-dots"  style="cursor:pointer"></i></a>
                            <router-link to="chat"><i class="fas fa-envelope-open-text"></i></router-link>
                        </td>
                        <td >
                            <span @click="openRFQViewModelFun" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"  >RFQ</span>
                        </td>

                        <td >
                            <select :disabled="project.Qutation_status_name" style="width:100px" @change="changeRFQ_status($event, project)" v-model="project.RFQ_status"  name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option value=null>Select One</option>
                                <option v-for="(status,index) in statusType" :key="status" :value="index"> {{ status }} </option>
                            </select>                        
                        </td>

                        <td>
                            <!-- <div v-if="store.quotationDetails.project_qutation?.length">
                                <a v-if="store.quotationDetails.project_qutation[0].Qutation_doc_type" :href="store.quotationDetails.project_qutation[0]?.qutation_document" target="_blank" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"  >View Quotation </a>
                                <a v-else @click="openQuotationViewModelFun"  class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"  >View Quotation</a>
                            </div> -->
                            <span v-if="project.RFQ_status ==1" @click="openSendQuotationModelFun(project)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"> Quotation </span>
                        </td>
                        <td>
                            <span class="badge badge-primary cursor_pointer" > {{ project.Qutation_status_name }} </span>
                        </td>
                        <td>
                            <span  v-if="project.PO_id"  @click="openViewPOModal()" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" style="color:green">PO View</span>
                        </td>
                        <td  >
                            <select v-if="project.PO_id" :disabled="store.paymentList.length" style="width:100px" @change="poStatusChange($event)" name="" v-model="project.PO_status" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option value= null>Select One</option>
                                <option v-for="(status,index) in statusType" :key="index" :value="index"> {{ status }} </option>
                            </select>
                        </td>

                        <td>
                            <span v-if="store.paymentList.length" @click="openPaymentsListFun" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" style="color:green">Payments</span>
                        </td>
                        <td>
                            <select v-if="project.PO_status==1" style="width:100px" @change="changeSupplyStatus($event)" v-model="project.Supply_type" name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option v-for="(status,index) in supplyStatusName" :key="index" :value="status.id">{{ status.name }}</option>
                            </select>
                        </td>
                        <td data-bs-toggle="modal" data-bs-target="#rating_view">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Modal -->
        <teleport to="body">
            <LiveChat v-if="openLiveChatModel" @closeLiveChatModel="closeLiveChatModel" />  
            <RFQView v-if="openRFQViewModel" @closeRFQViewModel="closeRFQViewModel" />  
            <SendQuotation v-if="openSendQuotationModal" :quotation="quotation" :bid_Data="bid_Data" @closeSendQuotationModal="closeSendQuotationModal" />  
            <PaymentsList v-if="openPaymentsList" @closePaymentsList="closePaymentsList" />  
            <ViewPurchaseOrder v-if="openViewPO" @closeViewPO="closeViewPO" />
        </teleport>  

    </div>
</template>

<script setup>
import SendQuotation from '@/components/projects/Modal/SendQuotation.vue'
import RFQView from '@/components/projects/Modal/RFQView.vue'
import LiveChat from '@/components/projects/Modal/LiveChat.vue'
import ViewPurchaseOrder from '@/components/projects/Modal/ViewPurchaseOrder.vue'
import PaymentsList from '@/components/projects/Modal/PaymentsList.vue'
import {Account} from '@/store/SwitchAccount'
// import ViewQuotation from '@/components/projects/Modal/ViewQuotation.vue'
import {toRefs, defineProps, ref, computed, onMounted } from 'vue';
import { useProjectStore } from '@/store/project.store';
const store = useProjectStore()
const SwitchAccount = computed(()=> Account().Account_detail[0]) 
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const quotation = computed(() => {
    return store.quotationDetails
})
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const statusType = ['Pending', 'Approved', 'In Process', 'Canceled']

const supplyStatusName = [
     {name:'Pending',id:3},
     {name:'Sent',id:1},
     {name:'Cancelled',id:2}
  ]

const { projects } = toRefs(props);
const openLiveChatModel = ref(false)
const openRFQViewModel = ref(false)
const openSendQuotationModal = ref(false)
const openPaymentsList = ref(false)
const openViewPO = ref(false)
const bid_Data = ref()

const openRFQViewModelFun = () => {
    openRFQViewModel.value = true
}
const closeRFQViewModel =(event)=>{
    openRFQViewModel.value = event
}

const openSendQuotationModelFun = (data) => {
    bid_Data.value = data
    openSendQuotationModal.value = true
}
const closeSendQuotationModal =(event)=>{
    openSendQuotationModal.value = event
}

const openPaymentsListFun = () => {
    store.loadPaymentList(bid_By_Id.value.Bid_id),
    openPaymentsList.value = true
}
const closePaymentsList =(event)=>{
    openPaymentsList.value = event
}

const closeViewPO =(event)=>{
    openViewPO.value = event
}
const bid_By_Id = computed(() =>{
  return JSON.parse(localStorage.getItem('bid_By_Id'))
})
// const rfqDetail = (bidId) => {
//     store.loadRFQDetails(bidId)
// }

const data = ref({
    Bid_id:0,
    RegD_id: '',
    RegD_comp_name: '' ,
    Category_ids: [],
    Category_names:[],
    RFQ_id:'',
    RFQ_status:'',
    RFQ_status_name:'',
    Created_by: currentUser.User_id,
    Updated_by: currentUser.User_id,
    BidD_id: 0,
    flag: null,
    Account_type: SwitchAccount.value.Account_type
})
const changeRFQ_status = (e, bid) => {
    data.value.Bid_id = store.rfqDetails.project_bid[0].Bid_id,
    data.value.Category_ids = store.rfqDetails.project_bid[0].Category_id,
    data.value.Category_names = store.rfqDetails.project_bid[0].Category_name,
    data.value.RegD_id = SwitchAccount.value.RegD_id
    data.value.RegD_comp_name = SwitchAccount.value.Company_name
    data.value.RFQ_id = store.rfqDetails.project_rfq_org[0].RFQ_id,
    data.value.RFQ_status = e.target.value,
    data.value.BidD_id= bid.BidD_id
    data.value.flag = bid.flag
    data.value.RFQ_status_name = statusType[e.target.value]
    store.changeRFQStatus(data.value)
    projects.value[0].flag = true
    bid_By_Id.value.flag = true
    localStorage.setItem('bid_By_Id',JSON.stringify(bid_By_Id.value))
}

let poStatus = ref({
    BidD_id: '',
    Bid_id: '',
    PO_status: '',
    PO_status_name:'',
    Is_freelancer_bid:SwitchAccount.value.Account_type == 1 ? false:true
})
const poStatusChange = (e) => {
    poStatus.value.Bid_id = store.rfqDetails.project_bid[0].Bid_id,
    poStatus.value.BidD_id = store.rfqDetails.project_bidd[0].BidD_id,
    poStatus.value.PO_status = e.target.value,
    poStatus.value.PO_status_name = statusType[e.target.value]
    store.changeBidStatus(poStatus.value)
}
let supplyStatus = ref({
    BidD_id: '',
    Bid_id: '',
    Supply_type: '',
    Supply_type_name:''
})
const changeSupplyStatus = (e) =>{
    supplyStatus.value.Bid_id = store.rfqDetails.project_bid[0].Bid_id,
    supplyStatus.value.BidD_id = store.rfqDetails.project_bidd[0]?.BidD_id || "",
    supplyStatus.value.Supply_type = e.target.value,
    supplyStatus.value.Supply_type_name = supplyStatusName[e.target.value]
    store.changeBidStatus(supplyStatus.value)
}

const openViewPOModal = () => {
    openViewPO.value = true
}
const openLiveChatModelFun = () => {
    openLiveChatModel.value = true
}
const closeLiveChatModel =(event)=>{
    openLiveChatModel.value = event
}


onMounted(()=>[
    store.loadPaymentList(bid_By_Id.value.Bid_id),
])
</script>
