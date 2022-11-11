<template>
    
<div class="modal show fade " style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Dispute Reason</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="Close_dispute_reason_Model()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">

                    <label class="form-label mb-0">Reason</label>
                    <textarea class="form-control form-control-lg form-control-solid" v-model="formdata.Dispute_Reason"></textarea>
                    <label class="form-label mb-0">Priority</label>
                    <select  @change ="getDPName()"  v-model="formdata.Dispute_Prority" class="form-select form-select-solid" data-control="select2" data-placeholder="Open" data-hide-search="true">
                        <option :value="index"  v-for="(list,index) in DP" :key="index">{{list}}</option>
                    </select>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary w-100" @click = "send()">Send</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive ,ref} from 'vue'
import {Account} from '@/store/SwitchAccount'
import { useAuthStore } from '@/store/auth';
import {useProjectStore} from '@/store/project.store'
import { useRoute } from 'vue-router';
const emit = defineEmits(['Close_dispute_reason_Model'])
const props = defineProps(['D_Data'])
const route = useRoute()
const DP = ref(['Low','Medium','High','Urgent'])
const SwitchAccount = Account().Account_detail[0]
const auth = useAuthStore()
const store =useProjectStore()
const formdata = reactive({
    Dispute_Reason:'',
    Dispute_Prority:'',
    Dispute_Pro_name:'',
    Account_id:'',
    RaisedBy:'',
    RaisedBy_name:'',
    RaisedAgnst:'',
    RaisedAgnst_name:'',
    Created_by:'',
    Updated_by: '',
    raisedby_regm_id:'',
    raisedby_regm_name:'',
    raisedagnst_regm_id:'',
    raisedangst_regm_name:'',
    raising_area:'',
    raising_area_name:'',
    raising_area_id:''
})

const getDPName =()=>{
    formdata.Dispute_Pro_name = DP.value[formdata.Dispute_Prority]
}

const Close_dispute_reason_Model = () => {
    emit('Close_dispute_reason_Model', false)
}

const getdata = ()=>{
    console.log(props.D_Data)
    formdata.Account_id= SwitchAccount.Account_type
    formdata.RaisedBy = SwitchAccount.RegD_id 
    formdata.RaisedBy_name = SwitchAccount.Company_name
    formdata.RaisedAgnst= props.D_Data.RegD_id
    formdata.RaisedAgnst_name = props.D_Data.Company_name
    formdata.Created_by = auth.user.User_id,
    formdata.Updated_by = auth.user.User_id,
    formdata.raisedby_regm_id = SwitchAccount.RegM_id
    formdata.raisedby_regm_name = SwitchAccount.RegM_name
    formdata.raisedagnst_regm_id =  props.D_Data.RegM_id
    formdata.raisedangst_regm_name = props.D_Data.RegM_name
    if(route.path=='/complete_projects'){
    formdata.raising_area=0
    formdata.raising_area_name='project'
    }
    if(route.path=='/completed_audit')
    {
    formdata.raising_area=1
    formdata.raising_area_name='audit'
    }
    formdata.raising_area_id = props.D_Data.Bid_id
}

const send =()=>{
    store.SendDisput(formdata).then(resp=>{
        if(resp){
            emit('Close_dispute_reason_Model', false)
        }
    })
}

onMounted(()=>{
    getdata()
})



</script>