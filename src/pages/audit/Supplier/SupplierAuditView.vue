<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div class="row gy-0 gx-10">
                            <div  class="col-xl-12 bg-w pd-30">
                                <div v-if="!store.loader" class="col-md-12">
                                    <i @click="router.go(-1)" style="font-size: 20px; color: #5241a1" class="fa fa-arrow-left cursor-pointer" ></i>
                                </div>
                                <PageLoader v-if="store.loader" />
                                <div v-else class="table-responsive">
                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        <thead>
                                            <tr>
                                                <th class="fw-bolder text-gray-800">ID</th>
                                                <th class="fw-bolder text-gray-800">CODE</th>
                                                <th class="fw-bolder text-gray-800">Date</th>
                                                <th class="fw-bolder text-gray-800">Audit Firm</th>
                                                <th class="fw-bolder text-gray-800">Organization</th>
                                                <th class="fw-bolder text-gray-800">RFQ</th>
                                                <th class="fw-bolder text-gray-800">RFQ Status</th>
                                                <th class="fw-bolder text-gray-800">Audit Quotation</th>
                                                <th class="fw-bolder text-gray-800">Quotation Status</th>
                                                <th class="fw-bolder text-gray-800">Live Chat/Inbox</th>
                                                <th class="fw-bolder text-gray-800">Audit PO</th>
                                                <th class="fw-bolder text-gray-800">PO Status</th>
                                                <th class="fw-bolder text-gray-800">Payments</th>
                                                <th class="fw-bolder text-gray-800">Audit Requirements</th>
                                                <th class="fw-bolder text-gray-800">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(audit,index) in store.auditDetailList" :key="index">
                                                <td> {{ audit.aud_req_code }} </td>
                                                <td> {{ audit.Aud_RFQ_code }} </td>
                                                <td> {{ audit.start_date?.substring(0,10) }} </td>
                                                <td><a class="cursor-pointer" @click="router.push(`/reg-profile/${audit.RegD_id_to}`)"> {{ audit.RegD_name_to }} </a> </td>
                                                <td>
                                                    {{ audit.aud_org_name }}
                                                </td>
                                                <td>
                                                    <span class="badge badge-primary cursor_pointer"
                                                        @click="ViewAuditRFQ(audit.aud_RFQ_id)">View</span>
                                                    <span class="badge badge-light cursor_pointer"  @click="ShowUpdateAuditRFQModel(audit)">
                                                        <span class="spinner-border " v-if="rfqLoader == audit.aud_req_id" ></span> 
                                                        <span v-else>Edit</span>
                                                    </span>
                                                </td>
                                                <td> 
                                                    <span class="badge badge-primary cursor_pointer">{{ audit.RFQ_status_name }}</span> 
                                                </td>
                                                <td>
                                                    <span v-if="audit.aud_Qutation_id" @click="openViewQuotationModel(audit.aud_Qutation_id)"  class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">View Quotation</span>
                                                </td>
                                                <td>
                                                    <select style="width:100px" @change="changeQuotationStatus($event,audit)" v-model="audit.Qutation_status" 
                                                    v-if="audit.aud_Qutation_id" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                        <option value=null selected>Select One</option>
                                                        <option v-for="(status,index) in statusType" :key="status" :value="index"> {{ status }} </option>
                                                    </select> 
                                                </td>
                                                <td class="chat_or_message_with_supplier">
                                                    <a href="#" @click="Show_Chat_Model()"><i
                                                            class="far fa-comment-dots"></i></a>
                                                    <a target="_blank"> <router-link to="chat"><i class="fas fa-envelope-open-text"></i></router-link></a>
                                                </td>
                                                <td>
                                                    <div v-if="audit.Qutation_status == 1">
                                                        <span @click="Show_PO_Model(audit)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >
                                                        <span class="spinner-border " v-if="poLoader == audit.aud_PO_id" ></span> <span v-else>Audit PO</span> </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span v-show="audit.PO_status" class="badge badge-primary cursor_pointer">{{ audit.PO_status_name }}</span> 
                                                </td>
                                                <td>
                                                    <span @click="openPaymentModelFun(audit)" v-if="audit.aud_PO_id" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >Payment</span>
                                                </td>

                                                <td>
                                                    <a href="#" @click="Show_registration_requirement_Model()">View Details</a>
                                                </td>
                                                <td><span class="badge badge-success">Pending</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style="display:flex ; justify-content:center; margin-top:10px">
                                    <v-pagination v-if="store.totalPages >= 1"
                                    v-model="data.PageNo"
                                    :pages="store.totalPages"
                                    :range-size="1"
                                    active-color="#DCEDFF"
                                    @update:modelValue="loadAuditDetailListing"
                                    />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <teleport to="body">
        <UpdateAuditRFQ  v-if="open_audit_rfq_model" :audit_rfq="audit_rfq" :exist_rfq="exist_rfq" @closeUpdateAuditRFQModel="closeUpdateAuditRFQModel" /> 
        <ViewAuditQuotationModal  v-if="open_quotation_model"  @closeViewQuotationModel="closeViewQuotationModel" />
        <SendAuditPO  v-if="open_po_model" :purchaseOrder="po" :existingPo="existPo"  @Close_PO_Model="Close_PO_Model" />
        <AuditPayment v-if="openAuditPaymentModel" :audit="audit"   @closePaymentModel="closePaymentModel" />
        <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
        <RegistrationRequirement  v-if="open_registration_requirement_Model"  @Close_registration_requirement_Model="Close_registration_requirement_Model" />      
        <AuditRFQView  v-if="openViewAuditRFQModel"  @closeViewAuditRFQModel="closeViewAuditRFQModel" />
    </teleport>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import UpdateAuditRFQ from '@/components/audit/supplier/Modal/UpdateAuditRFQ.vue'
import ViewAuditQuotationModal from '@/components/audit/supplier/Modal/ViewAuditQuotation.vue';
import SendAuditPO from '@/components/audit/supplier/Modal/SendAuditPO.vue';
import AuditPayment from '@/components/audit/supplier/Modal/AuditPayment.vue'
import AuditRFQView from '@/components/audit/AuditRFQView.vue'

import RegistrationRequirement from '@/components/Modal/RegistrationRequirement.vue'
import ChatModal from '@/components/Modal/ChatModel.vue';
import {computed, onMounted, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuditStore } from '@/store/audit.store';
import { Account } from '@/store/SwitchAccount';
import PageLoader from '@/global_components/loader/PageLoader.vue';


const router = useRouter()
const route = useRoute()
const store = useAuditStore()
const accountStore = Account()

const open_Chat_model = ref(false)
const openViewAuditRFQModel = ref(false)
const open_registration_requirement_Model = ref(false)


const rfqLoader = ref(false)
const open_audit_rfq_model = ref(false)
const audit_rfq = ref([])
const exist_rfq = ref({})
const open_quotation_model = ref(false)
const statusType = ['Pending', 'Approved', 'Canceled']
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const open_po_model = ref(false)
const po = ref([])
const existPo = ref({})
const poLoader = ref(false)
const openAuditPaymentModel = ref(false)
const audit = ref([])
const account = computed(()=>{
    return accountStore.Account_detail
})
const data = ref({
    RegD_id: account.value[0].RegD_id ,
    aud_RFQ_id: route.params.id,
    PageNo: 1,
    RowNo:10 ,
    search: null,
    audit_status_id: null
})

const loadAuditDetailListing = () => {
    store.loadAuditDetailList(data.value)
}

// Edit RFQ
    const ShowUpdateAuditRFQModel = (audit) => {
        rfqLoader.value = audit.aud_req_id
        store.loadAuditRFQ(audit.aud_RFQ_id).then(res => {
            if(res.status == 200){
                rfqLoader.value = false
                open_audit_rfq_model.value = true
                audit_rfq.value[0] = audit
                exist_rfq.value = res.data
            }
        })
    }

    const closeUpdateAuditRFQModel =(event)=>{
        open_audit_rfq_model.value = event
    }

//  open quotation view
  const openViewQuotationModel = (qo_id) => {
    store.loadAuditQuotation(qo_id)
    open_quotation_model.value = true
  }
  const closeViewQuotationModel =(event)=>{
    open_quotation_model.value=event
  }

const qoStatusData = ref({
    Qutation_status: '',
    Qutation_status_name:'',
    aud_RFQ_id:'',
    Updated_by: currentUser.User_id,
    aud_req_id: ''
})
const changeQuotationStatus = (e, audit) =>{
    qoStatusData.value.Qutation_status = e.target.value;
    qoStatusData.value.Qutation_status_name =  e.target.options[e.target.options.selectedIndex].text;
    qoStatusData.value.aud_RFQ_id = audit.aud_RFQ_id
    qoStatusData.value.aud_req_id = audit.aud_req_id
    store.changeAuditQuotationStatus(qoStatusData.value)
}

// Po Send
  const Show_PO_Model = (data) => {
    po.value[0] = data,
    existPo.value = {}
    if(data.aud_PO_id){
        poLoader.value = data.aud_PO_id
        store.loadAuditPO(data.aud_PO_id).then((res)=>{
        if(res.status == 200){
                poLoader.value = false
                existPo.value = store.poDetails
                open_po_model.value = true
            }
        })
    }else{
        open_po_model.value = true
    }
}

const Close_PO_Model =(event)=>{
    open_po_model.value=event
}
//  Payment 
const openPaymentModelFun = (data) => {
    store.loadAuditPaymentList(data.aud_req_id)
    audit.value[0] = data
    openAuditPaymentModel.value = true
    
}
const closePaymentModel =(event)=>{
    openAuditPaymentModel.value = event
}

 const Show_Chat_Model = () => {
     open_Chat_model.value = true
    }

    const Close_Chat_Model =(event)=>{
     open_Chat_model.value=event
    }
// Audit rfq view
     const ViewAuditRFQ = (aud_RFQ_id) => {
        store.loadAuditRFQ(aud_RFQ_id)
        openViewAuditRFQModel.value = true
    }

    const closeViewAuditRFQModel =(event)=>{
     openViewAuditRFQModel.value=event
    }


     const Show_registration_requirement_Model = () => {
     open_registration_requirement_Model.value = true
    }

    const Close_registration_requirement_Model =(event)=>{
     open_registration_requirement_Model.value=event
    }
onMounted(() =>{
    loadAuditDetailListing()
})
</script>
