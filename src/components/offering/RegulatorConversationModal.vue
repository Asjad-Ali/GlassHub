<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
        <div class="modal-dialog modal-lg mt-20">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Conversation</h5>
                    <!--begin::Close-->
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>
                <div class="modal-body cursor-none">
                   <PageLoader v-if="store.singleCertificateLoader" />
                   <div v-else>
                        <div v-if="store.auditMessages.length" class="col-md-12 FixedHeightContainer">
                            <h3  @click="openProfileModelFun(audit.auditor_regd_id)" >Conversation with <span  class="text-primary cursor-pointer">{{ store.auditMessages[0].auditor_regd_name }}</span> </h3>
                            <div class="Content">
                                <div v-for="(message,index) in store.auditMessages" :key="index" class="row pb-5">
                                    <div class="col-md-12">
                                        <h5> {{ message.question }} ? </h5>
                                        <p class="notee"><b>{{ message.auditor_regd_name }} Note:</b> {{ message.auditor_note }} </p>
                                        <span class="dateandtime"> {{ message.created_datetime?.substring(0,10) }} |  {{ message.created_datetime?.substring(11,16) }} </span>
                                        <p class="response"><b>Response:</b> {{ message.sup_response }} </p>
                                        <span v-show=" message.res_datetime" class="dateandtime"> {{ message.res_datetime?.substring(0,10) }} |  {{ message.note_updated_date?.substring(11,16) }} </span>
                                        <p @click="openAskAnyQuestion(message)" class="text-right w-100"><a class="fts-12 cursor-pointer">Send Response</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="modal-footer text-end">
                    <button @click="CloseModel" class="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import { useAuditStore } from "@/store/audit.store";

const store = useAuditStore()
const emit = defineEmits(['closeRegulatorConversationView'])
const CloseModel = () => {
    emit('closeRegulatorConversationView', false)
}

</script>
