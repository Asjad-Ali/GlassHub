<template>
    <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
                <tr>
                    <th class="fw-bolder text-gray-800">CODE</th>
                    <th class="fw-bolder text-gray-800">Date</th>
                    <th class="fw-bolder text-gray-800">Audit Firm</th>
                    <th class="fw-bolder text-gray-800">Organization</th>
                    <th class="fw-bolder text-gray-800">Audit Quotation</th>
                    <th class="fw-bolder text-gray-800">Live Chat/Inbox</th>
                    <th class="fw-bolder text-gray-800">Audit PO</th>
                    <th class="fw-bolder text-gray-800">Audit Requirements</th>
                    <th class="fw-bolder text-gray-800">Audit Progress</th>
                    <th class="fw-bolder text-gray-800">Audit Report</th>
                    <th class="fw-bolder text-gray-800">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(audit,index) in auditList" :key="index">
                    <td> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Aud_RFQ_code }} </router-link> </td>
                    <td> {{ audit.start_date?.substring(0,10) }} </td>
                    <td class="text-center"> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Total_audit_request }} </router-link> </td>
                    <td> {{ audit.aud_org_name }}  </td>
                    <td>
                        <span v-if="audit.aud_Qutation_id" @click="openViewQuotationModel(audit.aud_Qutation_id)"  class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">View Quotation</span>
                    </td>
                    <td class="chat_or_message_with_supplier">
                        <a href="#" @click="Show_Chat_Model()"><i
                                class="far fa-comment-dots"></i></a>
                        <router-link to="chat"><i class="fas fa-envelope-open-text"></i>
                        </router-link>
                    </td>
                    <td>
                        <span @click="Show_PO_Model(audit)" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" >
                        <span class="spinner-border " v-if="poLoader == audit.aud_PO_id" ></span> <span v-else>Audit PO</span> </span>
                    </td>
                    <td>
                        <a class="text-primary cursor-pointer" @click="supplierCompliance(audit)" > View Details</a>
                    </td>
                    <td>
                        <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                <span class="fw-bold fs-6 text-gray-400">Compleation
                                    Percentage</span>
                                <span class="fw-bolder fs-6">100%</span><br>
                            </div>
                            <div class="h-5px w-100 bg-light mb-3 ml-0">
                                <div class="bg-success rounded h-5px" role="progressbar"
                                    style="width: 100%;" aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </td>
                    <td class="chat_or_message_with_supplier"> 
                        <a class="cursor-pointer" v-if="audit.report_id" @click="auditReport(audit)" >
                            <i class="fa fa-file" aria-hidden="true"></i>
                        </a>
                    </td> 
                    <td><span class="badge badge-success">Success</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <teleport to="body">
        <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
        <SendAuditPO  v-if="open_po_model" :purchaseOrder="po" :existingPo="existPo"  @Close_PO_Model="Close_PO_Model" />
        <ViewAuditQuotationModal  v-if="open_quotation_model"  @closeViewQuotationModel="closeViewQuotationModel" />
    </teleport>
</template>

<script setup>
import ChatModal from '@/components/Modal/ChatModel.vue';
import SendAuditPO from '@/components/audit/supplier/Modal/SendAuditPO.vue';
import {ref, defineProps, toRefs} from 'vue'
import { useRouter } from 'vue-router';
import ViewAuditQuotationModal from '@/components/audit/supplier/Modal/ViewAuditQuotation.vue';
import { useAuditStore } from '@/store/audit.store';

const store = useAuditStore()
const open_Chat_model = ref(false)
const open_quotation_model = ref(false)
const open_po_model = ref(false)
const poLoader = ref(false)
const po = ref([])
const existPo = ref({})
const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const { auditList } = toRefs(props)
const router = useRouter()
const supplierCompliance = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/supplier-audit-requirements-details"})
}
const auditReport = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/document-control-view"})
}
  const Show_Chat_Model = () => {
     open_Chat_model.value = true
    }

    const Close_Chat_Model =(event)=>{
     open_Chat_model.value=event
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

//  open quotation view
const openViewQuotationModel = (qo_id) => {
    store.loadAuditQuotation(qo_id)
    open_quotation_model.value = true
  }
  const closeViewQuotationModel =(event)=>{
    open_quotation_model.value=event
  }


</script>