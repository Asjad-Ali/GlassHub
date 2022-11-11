<template>
    <div class="pd-30 ">
        <div class="table-responsive">
            <!--begin::Table-->
            <table  class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                <thead>
                    <tr>
                        <th class="fw-bolder text-gray-800">Name</th>
                        <th class="fw-bolder text-gray-800">Business Category</th>
                        <th class="fw-bolder text-gray-800">Chat/Inbox</th>
                        <th class="fw-bolder text-gray-800">RFQ</th>
                        <th class="fw-bolder text-gray-800">RFQ Status</th>
                        <th  class="fw-bolder text-gray-800">Quotation</th>
                        <th  class="fw-bolder text-gray-800">Quotation Status</th>
                        <th class="fw-bolder text-gray-800">PO</th>
                        <th class="fw-bolder text-gray-800">PO Status</th>
                        <th class="fw-bolder text-gray-800">Payment</th>
                        <th class="fw-bolder text-gray-800">Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(project) in projects" :key="project">

                        <td>{{ project.Bid_title }}</td>
                        <td>{{ project.Category_name }}</td>

                        <td class="chat_or_message_with_supplier">
                            <a style="cursor:pointer"><i @click="openLiveChatModelFun(project)" class="fa fa-comment-dots"></i></a>
                            <router-link to="chat"><i class="fa fa-envelope-open-text"></i></router-link>
                        </td>

                        <td>
                            <span @click="openSendRFQModelFun(project)"  class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"  > RFQ </span>
                        </td>
                        <td>
                            <span class="badge badge-primary cursor_pointer"> {{ project.RFQ_status_name }} </span>
                        </td>
                        <td >
                            <a  v-if="project.qutation_id" @click="openQuotationViewModelFun(project.qutation_id)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" :class="project.Qutation_status == 2 ? 'text-danger' : 'text_success' ">View Quotation </a>
                        </td>
                        <td >
                            <select v-if="project.qutation_id" :disabled="project.PO_status_name" style="width: 100px;" 
                            @change="changeQuotationStatus($event,project)" v-model="project.Qutation_status" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option value=null>Select One</option>
                                <option v-for="(status,index) in statusType" :key="index" :value="index">{{ status }}</option>
                            </select>
                        </td>
                        <td>
                            <span v-if="project.Qutation_status==0" @click="openPoModelFun(project)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >
                            <span class="spinner-border text-primary " v-if="po_loader"></span><span v-else> PO</span></span>
                        </td>
                        <td>
                            <span  class="badge badge-primary cursor_pointer"> {{ project.PO_status_name }} </span>
                        </td>
                        <td>
                            <span v-if="project.PO_status_name=='Approved'" @click="openPaymentModelFun" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >Payment</span>
                        </td>
                        <td>
                            <select v-if="project.Supply_type==1" style="width: 100px;" @change="changeSupplyStatus($event)" v-model="project.Supply" name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                <option value= null>Select One </option>
                                <option v-for="(status,index) in supplyStatusName" :key="index" :value="index"> {{ status }} </option>
                            </select>
                        </td>

                    </tr>
                </tbody>
            </table>
    
        </div>
        <!-- Modal -->
        <teleport to="body">
            <!-- <LiveChat v-if="openLiveChatModel" :user="User" @closeLiveChatModel="closeLiveChatModel" />   -->
            <SendPO  v-if="openPoModel" :purchaseOrder="purchase_order" :bid_data="bid_data" @closePoModel="closePoModel" />  
            <SendRFQ v-if="openSendRFQModel" :user="bid_data" :existing_rfq="existing_rfq" @closeSendRFQModel="closeSendRFQModel" />  
            <QuotationViewModel v-if="openQuotationViewModel" @closeQuotationViewModel="closeQuotationViewModel" />  
            <ProjectPayment v-if="openPaymentModel" @closePaymentModel="closePaymentModel" />
            <!-- <FileViewModal v-if="openFileViewModal" :document="openDocument" @closeFileViewModal="closeFileViewModal" />   -->
        </teleport>  
    </div>
</template>


<script setup>
import SendRFQ from '@/components/projects/Modal/SendRFQ.vue'
import QuotationViewModel from '@/components/projects/Modal/QuotationView.vue'
import LiveChat from '@/components/Modal/ChatModel.vue'
import SendPO from '@/components/projects/Modal/SendPO.vue'
import ProjectPayment from '@/components/projects/Modal/PaymentOrg.vue'
// import FileViewModal from '@/components/projects/Modal/FileViewModal.vue'
// import StarRating from '@/components/projects/Modal/StarRating.vue'
import {toRefs, defineProps, ref, computed, onMounted } from 'vue';
import { useProjectStore } from '@/store/project.store';
const store = useProjectStore()

const statusType = ['Approved','Sent','Cancelled','Pending' ]

const supplyStatusName = ["Accepted","Rejected","Revision/Modification","Raise Dispute"]
const openQuotationViewModel = ref(false)
const openPoModel = ref(false)
const openSendRFQModel = ref(false)
const openPaymentModel = ref(false)
const openLiveChatModel = ref(false)
const User = ref('')
const existing_rfq = computed(() => {
    return store.rfqDetails
})
const existing_po = computed(() => {
    return store.poDetails
})
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const bid_By_Id = computed(() =>{
  return JSON.parse(localStorage.getItem('bid_By_Id'))
})
const bid_data = ref()
const purchase_order = ref({})
const po_loader = ref(false)
const { projects } = toRefs(props);
let quotationStatus = ref({
    BidD_id: '',
    Bid_id: '',
    Qutation_status: '',
    Qutation_status_name:''
})
const changeQuotationStatus = (e, bid) =>{
    quotationStatus.value.Bid_id = store.rfqDetails.project_bid[0].Bid_id,
    quotationStatus.value.BidD_id = bid.BidD_id,
    quotationStatus.value.Qutation_status = e.target.value,
    quotationStatus.value.Qutation_status_name = statusType[e.target.value]
    store.changeBidStatus(quotationStatus.value)
}

let supplyStatus = ref({
    BidD_id: '',
    Bid_id: '',
    Supply: '',
    Supply_name:''
})

const changeSupplyStatus = (e) =>{
    supplyStatus.value.Bid_id = store.rfqDetails.project_bid[0].Bid_id,
    supplyStatus.value.BidD_id = store.rfqDetails.project_bidd[0].BidD_id,
    supplyStatus.value.Supply = e.target.value,
    supplyStatus.value.Supply_name = supplyStatusName[e.target.value]
    store.changeBidStatus(supplyStatus.value)
}


const openQuotationViewModelFun = (q_id) => {
    store.loadQuotationDetails(q_id)
    openQuotationViewModel.value = true
}
const closeQuotationViewModel =(event)=>{
    openQuotationViewModel.value = event
}
const openPoModelFun = (bidData) => {
    bid_data.value = bidData
    if(bidData.PO_id){
        po_loader.value = true
        store.loadPODetails(bidData.PO_id).then(res => {
            if(res.status == 200){
                po_loader.value = false
                purchase_order.value = res.data
                openPoModel.value = true
            }
        })
    } else{
        openPoModel.value = true
    }
}
const closePoModel =(event)=>{
    openPoModel.value = event
}

const openSendRFQModelFun = (bidData) => {
    bid_data.value = bidData
    openSendRFQModel.value = true
}
const closeSendRFQModel =(event)=>{
    openSendRFQModel.value = event
}

const openPaymentModelFun = () => {
    openPaymentModel.value = true
    store.loadPaymentList(store.rfqDetails.project_bid[0].Bid_id)
}
const closePaymentModel =(event)=>{
    openPaymentModel.value = event
}

const openLiveChatModelFun = (val) => {
    console.log(val)
    openLiveChatModel.value = true
    // User.value = {
    //     RegD_id_to:val.RegD_id,
    //     RegD_Name_to:val.RegD_comp_name,
    //     RegM_id_to:val.RegM_id,
    //     RegM_Name_to:val.RegM_name,
    //     Accttype_id_to:'',
    //     Accttype_Name_to:'',
    //     RegD_id_frm:'',
    // }
}
const closeLiveChatModel =(event)=>{
    openLiveChatModel.value = event
}

// const openFileViewModalFun = (file) => {
//     openDocument.value = file
//     openFileViewModal.value = true
// }
// const closeFileViewModal =(event)=>{
//     openFileViewModal.value = event
// }

onMounted(()=>{
     store.loadPaymentList(bid_By_Id.value.Bid_id)
})

</script>

<style scoped>
.text_success{
    color: green !important
}
</style>

