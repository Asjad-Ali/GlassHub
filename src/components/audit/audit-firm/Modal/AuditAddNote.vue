<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
        <div class="modal-dialog mt-20" style="width: 500px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Note</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <label class="form-label mb-0">Add Note</label>
                    <textarea  maxlength="500" v-model="messageData.auditor_note" class="form-control form-control-lg form-control-solid"></textarea>
                </div>
                <div class="modal-footer text-end">
                    <button @click="CloseModel" class="btn btn-secondary">Close</button>
                    <button @click="sendNote" class="btn btn-primary">
                    <SLoader v-if="store.btnLoader" /> <span v-else>Send</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuditStore } from "@/store/audit.store";
import { defineEmits, defineProps , ref, toRefs } from "vue";
import SLoader from "@/global_components/loader/SLoader.vue";
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const store = useAuditStore()
const messageData = ref({
    response_id: 0,
    note_updated_date:"",
    auditor_note:"",
    supplier_regd_id:0,
    updated_by:currentUser.User_id,
})


const emit = defineEmits(['closeAddNote'])
const CloseModel = () => {
    emit('closeAddNote', false)
}

let props = defineProps({
    messageData: {
        type: Object,
        required: false
    }
})

var today = new Date();
console.log(today)
const message_data = toRefs(props)
console.log("message data",message_data.messageData.value)
   
const sendNote = () => {
    messageData.value.response_id = message_data.messageData.value.response_id
    messageData.value.note_updated_date = new Date();
    store.sendAuditAskQuestion(messageData.value).then((response) => {
        const index = store.auditMessages.findIndex(message => message.response_id == response.data.response_id )
            if(index != -1){
                store.auditMessages[index] = response.data
            }
            CloseModel()
    }) 
}

</script>
