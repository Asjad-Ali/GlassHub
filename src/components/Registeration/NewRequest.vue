<template>
    <div>
        <div v-for="user in users" :key="user">
            <div class="row supplier_lists_shot_view">
            <div class="col-md-5">
                <h4  class="cursor-pointer"><span @click="router.push(`/reg-profile/${account[0].RegD_id ==  user.RegD_id_frm ? user.RegD_id_to : user.RegD_id_frm}`)" class="text-primary fs-2 me-1"> {{ account[0].RegD_id ==  user.RegD_id_frm ? user.Company_name_to : user.Company_name_frm }} </span></h4>
                <p>Category: {{ account[0].RegD_id ==  user.RegD_id_frm ? user.Category_to : user.Category_to }} </p>
            </div>
            <div class="col-md-4">
                <h4>Audit By:  { } </h4>
                <p class="mb-0">Date: { }</p>
                <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                    <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                        <router-link to="audit_process"> <a ><span class="fw-bold fs-6 ">Audit Progress</span></a></router-link>
                        <span class="fw-bolder fs-6">{}%</span>
                    </div>
                    <div class="h-5px w-100 bg-light mb-3">
                        <div class="bg-success rounded h-5px" role="progressbar" style="width: 70%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 text-right suppliers-lastcol-contact-section">
                <button @click="reqStatus(1, user.Registration_id)" class="btn btn-primary me-2">
                <SLoader v-if="store.btnLoader == user.Registration_id  && data.reg_status == 1" /> <span v-else> Accept </span> </button>
                <button @click="reqStatus(2, user.Registration_id)" class="btn btn-secondary">
                <SLoader v-if="store.btnLoader == user.Registration_id && data.reg_status == 2" /> <span v-else> Reject </span> </button>                                                
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import SLoader from "@/global_components/loader/SLoader.vue";
import { useRegisterationStore } from "@/store/registeration.store";
import { computed, defineProps, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { Account } from "@/store/SwitchAccount";
const store = useRegisterationStore()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const router = useRouter()
const props = defineProps({
  users: {
    type: Array,
    required: true
  }
})
let { users } = toRefs(props);

const data = reactive({
    reg_status: null,
    updated_by: currentUser.User_id,
    accepted_by: currentUser.User_id,
    Registration_id: null,
})

const reqStatus = (reqStatus, regId) => {
    data.reg_status = reqStatus
    data.Registration_id = regId
    store.acceptRequestSupplier(data)
}
    store.requestRegistrationList= []
    store.suggestedList= []
</script>

<style>

</style>