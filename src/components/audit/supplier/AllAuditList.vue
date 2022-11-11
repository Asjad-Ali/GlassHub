<template>
<div>
    <div class="table-responsive">
      <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <thead>
              <tr>
                  <th class="fw-bolder text-gray-800">CODE</th>
                  <th class="fw-bolder text-gray-800">Date</th>
                  <th class="fw-bolder text-gray-800">Audit Firm</th>
                  <th class="fw-bolder text-gray-800">Organization</th>
                  <th class="fw-bolder text-gray-800">Live Chat/Inbox</th>
                  <th class="fw-bolder text-gray-800">Audit Requirements</th>
                  <th class="fw-bolder text-gray-800">Audit Progress</th>
                  <th class="fw-bolder text-gray-800">Status</th>
                  <th class="fw-bolder text-gray-800">View Detail</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(audit,index) in auditList" :key="index">
                    <td> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Aud_RFQ_code }} </router-link> </td>
                    <td> {{ audit.start_date?.substring(0,10) }} </td>
                    <td class="text-center"> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Total_audit_request }} </router-link> </td>
                    <td> {{ audit.aud_org_name }}  </td>
                    <td class="chat_or_message_with_supplier">
                        <a href="#" @click="Show_Chat_Model()"><i class="far fa-comment-dots"></i></a>
                        <router-link to="chat"><i class="fas fa-envelope-open-text"></i></router-link>
                    </td>
                    <td>
                        <a class="text-primary cursor-pointer" @click="supplierCompliance(audit)" > View Details</a>
                    </td>
                    <td>
                        <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                <span class="fw-bold fs-6 text-gray-400">Compleation Percentage</span>
                                <span class="fw-bolder fs-6">70%</span><br>
                            </div>
                            <div class="h-5px w-100 bg-light mb-3 ml-0">
                                <div class="bg-success rounded h-5px" role="progressbar" style="width: 70%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="70"></div>
                            </div>
                        </div>
                    </td>
                  
                    <td>
                        <span v-if="audit.audit_status_id == 0" class="badge badge-light"> Pending </span>
                        <span v-else-if="audit.audit_status_id == 1" class="badge badge-success">In Process</span>
                        <span v-else-if="audit.audit_status_id == 2" class="badge badge-danger">Cancelled</span>
                        <span v-else-if="audit.audit_status_id == 3" class="badge badge-primary">Completed</span>
                    </td>
                    <td class="chat_or_message_with_supplier"> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`" >
                        <a href="#" target="_blank">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                        </router-link>
                    </td>
              </tr>
          </tbody>
      </table>
    </div>
    <teleport to="body">
        <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
    </teleport>
</div>
</template>

<script setup>
import ChatModal from '@/components/Modal/ChatModel.vue';
import { ref } from '@vue/reactivity';
import {defineProps, toRefs} from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const { auditList } = toRefs(props)
const open_Chat_model = ref(false)
const router = useRouter()
const supplierCompliance = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/supplier-audit-requirements-details"})
}

const Show_Chat_Model = () => {
  open_Chat_model.value = true
  }

  const Close_Chat_Model =(event)=>{
  open_Chat_model.value=event
  }


</script>
