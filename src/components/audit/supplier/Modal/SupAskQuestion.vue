<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
        <div class="modal-dialog mt-20" style="width: 500px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ask any question</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <label class="form-label mb-0">Message</label>
                    <textarea v-model="data.sup_response" maxlength="150" class="form-control form-control-lg form-control-solid"></textarea>
                </div>
                <div class="modal-footer text-end">
                    <button @click="CloseModel" class="btn btn-secondary">Close</button>
                    <button @click="submit" class="btn btn-primary">
                    <SLoader v-if="store.btnLoader" /> <span v-else>Send</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuditStore } from "@/store/audit.store";
import { Account } from "@/store/SwitchAccount";
import { computed, defineEmits, defineProps , ref, toRefs } from "vue";
import SLoader from "@/global_components/loader/SLoader.vue";

const store = useAuditStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))


const emit = defineEmits(['closeAskAnyQuestionList'])
const CloseModel = () => {
    emit('closeAskAnyQuestionList', false)
}

let props = defineProps({
    messageData: {
        type: Object,
        required: false
    }
})

const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})

var today = new Date();
console.log(today)
const message_data = toRefs(props)

console.log("message data",message_data.messageData.value)
const data = ref({
    audit_request_id: audit.value.aud_req_id,
    question:"",
    refrence_no: "",
    auditor_regd_id: "",
    auditor_regd_name: "",
    auditor_user_id: "",
    auditor_user_name:"",
    created_by: currentUser.User_id,
    updated_by:currentUser.User_id,
    response_id: message_data.messageData.value.sup_con_id,
    res_datetime: "",
    sup_response:"",
    supplier_regd_id: account.value[0].RegD_id,
    supplier_regd_name:account.value[0].Company_name,
    supplier_user_id: currentUser.User_id,
    supplier_user_name: currentUser.User_fullname,
    note_updated_date:"",
    auditor_note: "null"
})

const submit = () => {
    data.value.res_datetime = today
    if(data.value.sup_response){
        store.sendAuditAskQuestion(data.value).then((response) => {
            const index = store.auditMessages.findIndex(message => message.sup_con_id == response.data.sup_con_id )
            if(index != -1){
                store.auditMessages[index] = response.data
            }
            CloseModel()
        })    
    }
}



console.log(data.value)


</script>
