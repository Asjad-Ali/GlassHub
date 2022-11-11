<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
           <div class="modal-dialog mt-20" style="width: 500px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ask for more documents</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <label class="form-label mb-0">Title</label>
                    <input v-model="formData.title"  maxlength="150" type="text" placeholder="Enter Title" class="form-control form-control-lg form-control-solid mb-5">
                    <label class="form-label mb-0">Message</label>
                    <textarea v-model="formData.message"  maxlength="500" placeholder="Enter Description" class="form-control form-control-lg form-control-solid"></textarea>
                </div>
                <div class="modal-footer text-end">
                    <button @click="CloseModel" class="btn btn-secondary">Close</button>
                    <button @click="submit" class="btn btn-primary"> <SLoader v-if="store.btnLoader" /> <span v-else>Send</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuditStore } from "@/store/audit.store";
import { Account } from "@/store/SwitchAccount";
import { computed, defineEmits, ref } from "vue";
import SLoader from "@/global_components/loader/SLoader.vue";

const store = useAuditStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const emit = defineEmits(['closeAskForDocuments'])
const CloseModel = () => {
    emit('closeAskForDocuments', false)
}
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const Data = ref({
    doc_path: null,
    data: {}
})
const formData = ref({
    title:"",
    audit_req_id: audit.value.aud_req_id,
    message:"",
    certificate_id: 0,
    certificate_name:"",
    RegM_id: account.value[0].RegM_id,
    RegM_name: account.value[0].Company_name,
    RegD_id: account.value[0].RegD_id,
    RegD_name: account.value[0].Company_name,
    RegD_type: account.value[0].Account_type,
    RegD_type_name: account.value[0].Account_type_name,
    Created_by: currentUser.User_id,
    Created_at:"",
    Updated_by:currentUser.User_id,
    Updated_at:"",
    doc_req_id:0

})

const submit = () => {
    if(formData.value.message){
        Data.value.data = JSON.stringify(formData.value)
        store.sendAuditAskDocuments(Data.value).then((res)=>{
            if(res.status == 200){
                CloseModel()
            }
        })
    }
}
</script>
