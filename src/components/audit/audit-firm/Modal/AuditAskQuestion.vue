<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
        <div class="modal-dialog mt-20" style="width: 500px;">
            <div class="modal-content">
                <div  class="modal-header">
                    <h5 class="modal-title">Ask any question</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <label class="form-label mb-0">Refrence #</label>
                    <input v-model="formData.refrence_no" maxlength="150" placeholder="Enter Your Control Refrences No" type="text" class="form-control form-control-lg form-control-solid mb-5">
                    <label class="form-label mb-0">Message</label>
                    <textarea v-model="formData.question" maxlength="500" class="form-control form-control-lg form-control-solid"></textarea>
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
    audit: {
        type: Object,
        required: false
    }
})

const getAudit = toRefs(props)
console.log(getAudit.audit.value)
const formData = ref({
    audit_request_id: getAudit.audit.value.aud_req_id,
    question:"",
    refrence_no: "",
    auditor_regd_id: account.value[0].RegD_id,
    auditor_regd_name: account.value[0].Company_name,
    auditor_user_id: currentUser.User_id,
    auditor_user_name: currentUser.User_fullname,
    created_by: currentUser.User_id,
    updated_by:currentUser.User_id,
    response_id: 0,
    supplier_regd_id: "",
    res_datetime: "",
    supplier_regd_name:"",
    supplier_user_id:0,
    supplier_user_name:"",
    note_updated_date:"",
    auditor_note:""
})

const submit = () => {
    store.sendAuditAskQuestion(formData.value).then((response) => {
        store.auditMessages.push(response.data)
        CloseModel()
    })    
}



console.log(formData.value)


</script>
