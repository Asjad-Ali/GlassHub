<template>
    <div>
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="  table table-row-dashed table-row-gray-300  align-middle  gs-0  gy-4">
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>Date</th>
                        <th class="fw-bolder text-gray-800">Customer Name</th>
                        <th class="fw-bolder text-gray-800">Type</th>
                        <th class="fw-bolder text-gray-800">Live Chat/Inbox</th>
                        <th class="fw-bolder text-gray-800">Audit Progress</th>
                        <th class="fw-bolder text-gray-800">
                            Audit Progress
                        </th>
                        <th class="fw-bolder text-gray-800">Audit Status</th>
                        <th class="fw-bolder text-gray-800">Audit Report</th>
                        <th class="fw-bolder text-gray-800">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(audit,index) in auditList" :key="index">
                        <td>{{ audit.Aud_RFQ_code }}</td>
                         <td> {{ audit.start_date?.substring(0,10) }} </td>
                        <td><a class="cursor-pointer" @click="router.push(`/reg-profile/${audit.RegD_id_frm}`)"> {{ audit.RegM_name_frm }} </a> </td>
                        <td>Supplier</td>
                        <td class="chat_or_message_with_supplier">
                            <a href="#" @click="Show_Chat_Model()"><i
                                    class="far fa-comment-dots"></i></a>
                                <router-link to="chat"><i class="fas fa-envelope-open-text"></i></router-link>
                        </td>
                        <td>
                            <div class=" align-items-center w-200px w-sm-300px flex-column mt-3">
                                <div class=" d-flex justify-content-between w-100 mt-auto mb-2 ">
                                    <span class="fw-bold fs-6 text-gray-400">Compleation
                                        Percentage</span>
                                    <span class="fw-bolder fs-6">50%</span><br />
                                </div>
                                <div class="h-5px w-100 bg-light mb-3 ml-0">
                                    <div class="bg-success rounded h-5px" role="progressbar"
                                        style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="50"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <a class="text-primary cursor-pointer" @click="auditCompliance(audit)" > View Details</a>
                        </td>
                        <td>
                            <span  class="badge badge-primary">In Process</span>

                        </td>
                        <td>
                            <a class="text-primary cursor-pointer" @click="auditReport(audit)" > <i class="fa fa-file" aria-hidden="true"></i></a>
                        </td>
                        <td  @click="Show_rating_view_Model()">
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
        <teleport to="body">
        <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
        <RatingView  v-if="open_rating_view_model"  @Close_rating_view_Model="Close_rating_view_Model" />
    </teleport>
    </div>
</template>


<script setup>
import ChatModal from '@/components/Modal/ChatModel.vue';
import RatingView from '@/components/audit/audit-firm/Modal/RatingView.vue';
import {ref, defineProps, toRefs} from 'vue'
import { useRouter } from 'vue-router';
// import { useAuditStore } from '@/store/audit.store';
const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const { auditList } = toRefs(props)
const open_Chat_model = ref(false)
const open_rating_view_model = ref(false)
const router = useRouter()
// const store = useAuditStore()
const auditCompliance = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/audit-requirements-details"})
}

const auditReport = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/document-control"})
}
const Show_Chat_Model = () => {
     open_Chat_model.value = true
    }

    const Close_Chat_Model =(event)=>{
     open_Chat_model.value=event
    }

    const Show_rating_view_Model = () => {
     open_rating_view_model.value = true
    }

    const Close_rating_view_Model =(event)=>{
     open_rating_view_model.value=event
    }

</script>