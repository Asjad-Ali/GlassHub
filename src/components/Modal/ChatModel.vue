<template>

      <div class="modal fade show"  style="display:block;background:rgba(0,0,0,0.5);opacity:1 !important">
        <div class="modal-dialog mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-flex justify-content-center flex-column me-3">
                        <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">{{props.user?.RegD_Name_to==switchAccount.Company_name?props.user.RegD_Name_frm:props.user?.RegD_Name_to}}</a>
                        <div class="mb-0 lh-1">
                            <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                            <span class="fs-7 fw-bold text-muted">Active</span>
                        </div>
                    </div>    
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="Close_Chat_Model()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body p-0">
                    <div class="card" id="kt_chat_messenger">
                        <div class="card-body"  id="kt_chat_messenger_body">
                            <div class="scroll-y me-n5 pe-5 max-h-350" id="chat_box" >
                                <!-- <button @click="scrollToBottom()">bottom</button> -->
                                <template v-for="(list,index) in data_list" :key="index">
                                <div class="d-flex justify-content-start mb-5" v-if="list.regd_id_frm==switchAccount.RegD_id">
                                    <div class="d-flex flex-column align-items-start">
                                        <div class="d-flex align-items-center mb-1">
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" :src="profileStore.user_detail.user_image">
                                            </div>
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">You</a>
                                                <span class="text-muted fs-7 mb-1">{{getTime(list.massage_datetime)}}</span>
                                            </div>
                                        </div>
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">{{list.massage}}</div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mb-5" v-if="list.regd_id_frm!=switchAccount.RegD_id">
                                    <div class="d-flex flex-column align-items-end">
                                        <div class="d-flex align-items-center mb-1">
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">{{getTime(list.massage_datetime)}}</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">{{list.user_name_frm}}</a>
                                            </div>
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" :src="`${image_path}/${list.user_image}`">
                                            </div>
                                        </div>
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">{{list.massage}}</div>
                                    </div>
                                </div>
                            </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <form @submit.prevent="sendMessage()" style="width: 100%;">
                    <label class="form-label text-left">Type Message</label>
                    <input name="" v-model="formdata.massage" class="mb-2 form-control form-control-lg form-control-solid">
                    <button type="submit" class="btn w-100 btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import {profile} from '@/store/profile'
  import {chat} from '@/store/chat'
  import {useAuthStore} from '@/store/auth'
  import {Account} from '@/store/SwitchAccount'
  import {defineEmits,defineProps, onMounted,computed,reactive,watch} from 'vue'
const profileStore = profile()
const emit = defineEmits(['close_Chat_Model'])
const props = defineProps(['user'])
const image_path = process.env.VUE_APP_API_PATH
const store = chat()
const auth = useAuthStore()
const switchAccount = Account().Account_detail[0]
const data_list = computed(()=>{
  return store.chat_data
})


const Close_Chat_Model = () => {
    emit('close_Chat_Model', false)
}

watch(store,()=>{
setTimeout(() => {
    scrollToBottom()
});
})

const scrollToBottom=()=>{
const element = document.getElementById('chat_box');
element.scrollTop = element.scrollHeight;
}

const getTime =(val)=>{
    var event = new Date(val);
    return  event.toLocaleTimeString('en-US')
}

const sendMessage= ()=>{
    let data = props.user
    formdata.massage_datetime = new Date();
    formdata.regd_id_frm = switchAccount.RegD_id;
    formdata.regd_name_frm = switchAccount.Company_name
    formdata.regd_id_to = data.RegD_id_to==switchAccount.RegD_id?data.RegD_id_frm:data.RegD_id_to
    formdata.regd_name_to =data.RegD_Name_to==switchAccount.Company_name?data.RegD_Name_frm:data.RegD_Name_to
    formdata.regm_id_frm=switchAccount.RegM_id
    formdata.regm_name_frm=switchAccount.RegM_name
    formdata.regm_id_to = data.RegM_id_to==switchAccount.RegM_id?data.RegM_id_frm:data.RegM_id_to
    formdata.regm_name_to =data.RegM_Name_to==switchAccount.RegM_name?data.RegM_Name_frm:data.RegM_Name_to
    formdata.user_id_frm = auth.user.User_id
    formdata.user_name_frm =auth.user.User_fullname
    formdata.created_by = auth.user.User_id
    formdata.is_admin = false
    formdata.admin_user_id ='null'
    formdata.account_id_frm = switchAccount.Account_type
    formdata.account_name_frm =switchAccount.Account_type_name
    formdata.account_id_to = data.Accttype_id_to==switchAccount.Account_type?data.Accttype_id_frm:data.Accttype_id_to
    formdata.account_name_to =data.Accttype_Name_to==switchAccount.Account_type_name?data.Accttype_Name_frm:data.Accttype_Name_to
    formdata.admin_user_name ='null'
    if(formdata.massage!=''){
        store.sendMessage(formdata)
        formdata.massage=''
    }
}
  
const formdata = reactive({
    type: "Chat",
    massage:'',
    massage_datetime:'',
    regd_id_frm:'',
    regd_name_frm:'',
    regd_id_to:'',
    regd_name_to:'',
    regm_id_frm:'',
    regm_name_frm:'',
    regm_id_to:'',
    regm_name_to:'',
    user_id_frm:'',
    user_name_frm:'',
    created_by:'',
    is_admin:'',
    admin_user_id:'',
    account_id_frm:'',
    account_name_frm:'',
    account_id_to:'',
    account_name_to:'',
    admin_user_name:''
    
})


onMounted(()=>{
    console.log()
store.GetMessage({RegD_frm:switchAccount.RegD_id,RegD_to:props.user.RegD_id_to==switchAccount.RegD_id?props.user.RegD_id_frm:props.user.RegD_id_to})
})

</script>

<style>

</style>