<template>
<div>
    <div  class="table-responsive">
            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                <thead>
                    <tr>
                        <th class="fw-bolder text-gray-800">CODE</th>
                        <th class="fw-bolder text-gray-800">Date</th>
                        <th class="fw-bolder text-gray-800">Audit Firm</th>
                        <th class="fw-bolder text-gray-800">Organization</th>
                        <th class="fw-bolder text-gray-800">Audit Requirements</th>
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
                        <td>
                            <a href="#" @click="Show_registration_requirement_Model()">View Details</a>
                        </td>
                        <td>
                        <span v-if="audit.audit_status_id == 0" class="badge badge-light">{{ audit.audit_status_name }}</span>
                        </td>
                        <td class="chat_or_message_with_supplier"> 
                            <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`" >
                                <i class="fa fa-eye cursor-pointer" aria-hidden="true"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
    <teleport to="body">
        <RegistrationRequirement  v-if="open_registration_requirement_Model"  @Close_registration_requirement_Model="Close_registration_requirement_Model" />      
    </teleport>  
</div>
</template>

<script setup>
import RegistrationRequirement from '@/components/Modal/RegistrationRequirement.vue'
import {defineProps, ref, toRefs} from 'vue'

const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const { auditList } = toRefs(props)

const open_registration_requirement_Model = ref(false)

const Show_registration_requirement_Model = () => {
  open_registration_requirement_Model.value = true
}

const Close_registration_requirement_Model =(event)=>{
  open_registration_requirement_Model.value=event
}
</script>

<style>

</style>