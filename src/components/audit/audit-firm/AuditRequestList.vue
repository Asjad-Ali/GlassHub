<template>
<div>
    <div class="table-responsive">
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
                <tr>
                    <th class="fw-bolder text-gray-800">CODE</th>
                    <th class="fw-bolder text-gray-800">TKID</th>
                    <th class="fw-bolder text-gray-800">TK Status</th>
                    <th class="fw-bolder text-gray-800">Date</th>
                    <th class="fw-bolder text-gray-800">Customer Name</th>
                    <th class="fw-bolder text-gray-800">Type</th>
                    <th class="fw-bolder text-gray-800">Live Chat</th>
                    <th class="fw-bolder text-gray-800">Audit For</th>
                    <th class="fw-bolder text-gray-800">Compliance</th>
                    <th class="fw-bolder text-gray-800">Audit Progress</th>
                    <th class="fw-bolder text-gray-800">RFQ</th>
                    <th class="fw-bolder text-gray-800">RFQ Status</th>
                    <th class="fw-bolder text-gray-800">Quotation</th>
                    <th class="fw-bolder text-gray-800">Quotation Status</th>
                    <th class="fw-bolder text-gray-800">Audit PO</th>
                    <th class="fw-bolder text-gray-800">PO Status</th>
                    <th class="fw-bolder text-gray-800">Payment</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(audit,index) in auditList" :key="index">
                    <td> {{ audit.Aud_RFQ_code }} </td>
                    <td><router-link to="audit_ticket"><a> {{ audit.aud_req_code }} </a></router-link></td>
                    <td>
                        <select  style="width:100px" @change="changeRFQStatus($event,audit)" v-model="audit.TK_status" 
                        class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                            <option value=null>Select One</option>
                            <option :value="0">Open</option>
                            <option :value="1">Close</option>
                        </select> 
                    </td>
                   <td> {{ audit.start_date?.substring(0,10) }} </td>
                    <td><a class="cursor-pointer" @click="router.push(`/reg-profile/${audit.RegD_id_frm}`)"> {{ audit.RegM_name_frm }} </a> </td>
                    <td>
                        <router-link to="audit_ticket">Supplier</router-link>
                    </td>
                    <td class="chat_or_message_with_supplier">
                        <a href="#" @click="Show_Chat_Model()">
                            <i class="far fa-comment-dots"></i>
                        </a>
                        <router-link to="chat">
                            <i class="fas fa-envelope-open-text"></i>
                        </router-link>
                    </td>
                    <td>
                        <span>Registration</span><br>
                        <span class="text-muted"></span>
                    </td>
                    <td>
                        <a class="text-primary cursor-pointer" @click="Show_Compliancecriteria_Model(audit)" >View Compliance</a>
                    </td>
                    <td>
                        <a class="text-primary cursor-pointer" @click="auditCompliance(audit)" > View Details</a>
                    </td>
                    <td>
                        <span
                            class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"
                            @click="Show_audit_rfq_Model(audit.aud_RFQ_id)">RFQ</span>
                    </td>
                    <td>
                        <select style="width:100px" @change="changeRFQStatus($event,audit)" v-model="audit.RFQ_status" 
                        class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                            <option value=null>Select One</option>
                            <option v-for="(status,index) in statusType" :key="status" :value="index"> {{ status }} </option>
                        </select> 
                    </td>
                    <td>
                        <div v-show="audit.RFQ_status">
                            <span class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" @click="Show_audit_quotation_Model(audit)">
                            <span class="spinner-border " v-if="qoLoader == audit.aud_Qutation_id"></span> <span v-else> Quotation </span> </span>
                        </div>
                    </td>
                    <td>  
                        <span v-show="audit.Qutation_status" class="badge badge-primary cursor_pointer">{{ audit.Qutation_status_name }}</span> 
                    </td>
                    <td>
                        <span v-show="audit.aud_PO_id" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"  @click="Show_audit_po_view_Model(audit.aud_PO_id)">PO</span>
                    </td>
                    <td>
                        <select style="width:100px" @change="changePOStatus($event,audit)" v-model="audit.PO_status" 
                        v-show="audit.aud_PO_id" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                            <option value=null>Select One</option>
                            <option v-for="(status,index) in statusType" :key="status" :value="index"> {{ status }} </option>
                        </select> 
                    </td>
                    <td>
                        <span v-show="audit.aud_PO_id"  @click="Show_payment__list_Model(audit.aud_req_id)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >Payment</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <teleport to="body">                  
      <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
      <Compliancecriteria  v-if="open_Compliancecriteria_Model"  @Close_Compliancecriteria_Model="Close_Compliancecriteria_Model" />
      <AuditRFQView  v-if="open_audit_rfq_model"  @closeViewAuditRFQModel="closeViewAuditRFQModel" />
      <AuditPOView  v-if="open_audit_po_model"  @Close_audit_po_view_Model="Close_audit_po_view_Model" />
      <AuditPaymentList  v-if="open_payment_list"  @closePaymentsList="closePaymentsList" /> 
      <SendAuditQuotation  v-if="open_audit_quotation_Model" :quotation="quotationData" :exitingQuotation="existQuotationData"  @Close_audit_quotation_Model="Close_audit_quotation_Model" /> 
   </teleport>
</div>
</template>

<script setup>
import ChatModal from '@/components/Modal/ChatModel.vue';
import Compliancecriteria from '@/components/audit/audit-firm/Modal/ComplianceCriteriaModal.vue';
import SendAuditQuotation from '@/components/audit/audit-firm/Modal/SendAuditQuotation.vue';
import AuditRFQView from '@/components/audit/AuditRFQView.vue'
import AuditPOView from '@/components/audit/audit-firm/Modal/AuditPOView.vue'
import AuditPaymentList from '@/components/audit/audit-firm/Modal/AuditPaymentList.vue'
import {ref, defineProps, toRefs } from 'vue'
import { useAuditStore } from '@/store/audit.store';
import { useRouter } from 'vue-router';

const open_Chat_model = ref(false)
const open_Compliancecriteria_Model = ref(false)
const open_audit_po_model = ref(false)
const open_audit_rfq_model = ref(false)
const open_payment_list = ref(false)
const qoLoader = ref(false)
const open_audit_quotation_Model = ref(false)
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const store = useAuditStore()
const router = useRouter()
const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const rfqStatusData = ref({
    RFQ_status: '',
    RFQ_status_name:'',
    aud_RFQ_id:'',
    Updated_by: currentUser.User_id,
    aud_req_id: 0
})
const poStatusData = ref({
    PO_status: '',
    PO_status_name:'',
    aud_RFQ_id:'',
    Updated_by: currentUser.User_id,
    aud_req_id: 0
})


const { auditList } = toRefs(props)
const statusType = ['Pending', 'Approved', 'In Process', 'Canceled']
const quotationData = ref([])
const existQuotationData = ref()


const changeRFQStatus = (e, audit) =>{
    rfqStatusData.value.RFQ_status = e.target.value;
    rfqStatusData.value.RFQ_status_name =  e.target.options[e.target.options.selectedIndex].text;
    rfqStatusData.value.aud_RFQ_id = audit.aud_RFQ_id
    rfqStatusData.value.aud_req_id = audit.aud_req_id
    store.changeAuditRFQStatus(rfqStatusData.value)
}
const changePOStatus = (e, audit) =>{
    if(e.target.value){
        poStatusData.value.PO_status = e.target.value;
        poStatusData.value.PO_status_name =  e.target.options[e.target.options.selectedIndex].text;
        poStatusData.value.aud_RFQ_id = audit.aud_RFQ_id
        poStatusData.value.aud_req_id = audit.aud_req_id
        store.changeAuditPOStatus(poStatusData.value)
    }
}

const auditCompliance = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/audit-requirements-details"})
}

const Show_Chat_Model = () => {
    open_Chat_model.value = true
}

const Close_Chat_Model =(event)=>{
    open_Chat_model.value=event
}

const Show_Compliancecriteria_Model = (audit) => {
    console.log(audit)
    open_Compliancecriteria_Model.value = true
    store.loadAuditControlsList(audit.aud_req_id)
}

const Close_Compliancecriteria_Model =(event)=>{
    open_Compliancecriteria_Model.value=event
}

const Show_audit_po_view_Model = (po_id) => {
    store.loadAuditPO(po_id)
    open_audit_po_model.value = true
}

const Close_audit_po_view_Model =(event)=>{
    open_audit_po_model.value=event
}

const Show_audit_rfq_Model = (rfq_id) => {
    open_audit_rfq_model.value = true
    store.loadAuditRFQ(rfq_id)
}

const closeViewAuditRFQModel =(event)=>{
    open_audit_rfq_model.value=event
}

const Show_payment__list_Model = (aud_req_id) => {
    store.loadAuditPaymentList(aud_req_id)
    open_payment_list.value = true
}

const closePaymentsList =(event)=>{
    open_payment_list.value=event
}

const Show_audit_quotation_Model = (data) => {
    quotationData.value[0] = data
    existQuotationData.value = {}
    if(data.aud_Qutation_id){
        qoLoader.value = data.aud_Qutation_id
        store.loadAuditQuotation(data.aud_Qutation_id).then((res)=>{
            if(res.status == 200){
                qoLoader.value = false
                existQuotationData.value = store.qoDetails
                open_audit_quotation_Model.value = true
            }
        })
    }else{
        open_audit_quotation_Model.value = true
    }
}
const Close_audit_quotation_Model =(event)=>{
    open_audit_quotation_Model.value=event
}

</script>
