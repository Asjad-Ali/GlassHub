<template>
    <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
            <div class="modal-dialog mt-20">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Trainer</h5>
                        <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="modal-body sendinvitationmodel">
                        <div class="row">
                            <div class="col-md-12 pb-5">
                                <label class="form-label">Name</label>
                                <input maxlength="80" v-model="trainerForm.Trainer_name" type="" name="" class="form-control form-control-lg form-control-solid mb-10">
                                <label class="form-label">Email</label>
                                <input maxlength="80" v-model="trainerForm.Trainer_email" type="" name="" class="form-control form-control-lg form-control-solid mb-10">
                                <label class="form-label">Phone</label>
                                <input maxlength="20" v-model="trainerForm.Trainer_phone" type="" name="" class="form-control form-control-lg form-control-solid mb-10">
                                <label class="form-label">Address</label>
                                <input maxlength="150" v-model="trainerForm.Trainer_address" type="" name="" class="form-control form-control-lg form-control-solid mb-10">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 float-end">
                                <button @click="addTrainer" type="button" data-bs-dismiss="modal"  class="mb-5 btn w-100 btn-primary">
                                {{ trainerForm.Trainer_id == 0 ? 'Add Trainer' : 'Update Trainer'  }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { useOfferingCertificateStore } from "@/store/offeringCertificates.store";
import { Account } from "@/store/SwitchAccount";
import { computed, defineEmits, reactive, defineProps } from 'vue'
const store = useOfferingCertificateStore()
const accountStore = Account()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const account = computed(()=>{
    return accountStore.Account_detail[0]
})
const emit = defineEmits(['closeAddTrainerModal'])
const CloseModel = () => {
    emit('closeAddTrainerModal', false)
}
const props = defineProps({
    id: String
})

let trainerForm = reactive({
    Trainer_id: 0,
    Trainer_name:'',
    Trainer_email:'',
    Trainer_phone:'',
    Trainer_address:'',
    RegD_id: account.value.RegD_id,
    Created_by: currentUser.User_id,
    Updated_by: currentUser.User_id,
})

// const emptyFormForAdd = () => {
//     trainerForm.Trainer_id = 0,
//     trainerForm.Trainer_name ='',
//     trainerForm.Trainer_email ='',
//     trainerForm.Trainer_phone ='',
//     trainerForm.Trainer_address =''
// }\
if( props.id != 0){
    const index = computed(() => store.trainerList.findIndex( trainer => trainer.Trainer_id == props.id ) )
    console.log("get in ",index.value, props.id)
    trainerForm.Trainer_id = store.trainerList[index.value].Trainer_id,
    trainerForm.Trainer_name = store.trainerList[index.value].Trainer_name,
    trainerForm.Trainer_email = store.trainerList[index.value].Trainer_email,
    trainerForm.Trainer_phone = store.trainerList[index.value].Trainer_phone,
    trainerForm.Trainer_address = store.trainerList[index.value].Trainer_address
    console.log(trainerForm)
}

const addTrainer = () => {
    store.insertUpdateTrainer(trainerForm).then(res => {
        if(res.status == 200){
            CloseModel()
        }
    })
}



</script>

<style>

</style>