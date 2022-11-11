<template>
      <div class="modal show fade " style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Evaluate Supplier</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2"  @click="Close_eveluate_Model()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">

                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="d-flex mb-3">{{SwitchAccount.Company_name}}</h3>
                        </div>
                        <div class="col-md-12 ">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="table-responsive" style="max-height: 325px;overflow: auto;">
                                        <!--begin::Table-->
                                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <thead>
                                                <tr>
                                                    <th>Question</th>
                                                    
                                                    <th >Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="(list ,index) in formdata.dash_evaluate_supD" :key="index">
                                                <tr v-if="list.Question!=''">
                                                    <td :class="list.request_type==1?'required':''">{{list.Question}}</td>
                                                    
                                                    <td>
                                                        <star-rating v-model:rating="list.Rating" star-size="30" :show-rating="false"/>
                                                        <!-- <select v-model="list.Rating" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select Point" data-allow-clear="true" data-hide-search="true">
                                                            <option selected></option>
                                                            <option value="1"> 1</option>
                                                            <option value="2"> 2 </option>
                                                            <option value="3"> 3 </option>
                                                            <option value="4"> 4 </option>
                                                            <option value="5"> 5 </option>
                                                        </select> -->
                                                    </td>
                                                </tr>
                                            </template>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9 vertical_text_mid">
                                <label class="form-label mb-0">Are you want to share your ideas with us?</label>
                            </div>
                            <div class="col-md-12">
                                <textarea v-model="formdata.dash_evaluate_supM.user_idea" placeholder="enter your ideas" class="form-control form-control-lg form-control-solid"></textarea>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" @click="Close_eveluate_Model()">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="send()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineEmits, defineProps,reactive ,onMounted, watch} from 'vue'
import StarRating from 'vue-star-rating'
import useToast from '@/global_components/Toast/useToast'
import {Account} from '@/store/SwitchAccount'
import { useAuthStore } from '@/store/auth';
import {useProjectStore} from '@/store/project.store'
import { useRoute } from 'vue-router';
const props = defineProps(['D_Data'])
const emit = defineEmits(['Close_eveluate_Model'])

const SwitchAccount = Account().Account_detail[0]
const auth = useAuthStore()
const store =useProjectStore()
const route = useRoute()
const qestions = computed(()=>{
    return store.Evel_Questions
})

const formdata= reactive({
    dash_evaluate_supM:{
    user_idea:'', //user enter any suggeation or idea, character varying (500)
    RegD_id_frm: '', // regd_id from switch account , bigint
    RegD_name_frm: '', // enter the company name that give the comments 
    RegM_id_to: '', // user regm id that recive the star rating, bigint
    RegM_name_to:'', // name of the regm name that recive the star rating 
    RegD_id_to: '', // regd_id to switch account , bigint
    RegD_name_to:'', // enter the company name that recive the comments 
    RegM_id_frm: '', // user regm id that recive the star rating, bigint
    RegM_name_frm:'', // name of the regm name that recive the star rating 
    raising_area:'', //0 or 1 
    raising_area_name:'', // project or audit
    raising_area_id:'', // rasing area id should be primary key ,e.g for audit used the audit_req_id/rfq_id and for project use the bid_id
    Created_by: '', // login user id
    Updated_by: '', // login user id
    // AdminRating_id: '',// pass the master rating id that comes from the getting data
    // account_id: '', //pass the account id from switch account
    Category_id:'' // pas the login user categories id
},
dash_evaluate_supD:[]
})


watch(qestions,()=>{
  for(let x of qestions.value){
    if(x.Add_Question!=''){
        formdata.dash_evaluate_supD.push(
    {
    Question:x.Add_Point , // pass the question that comes in the get api, character varying (250)
    Rating:'', // pass rating 1 to 5 , int
    Evaluate_Supplier_id:x.Evaluate_Supplier_id,
    Created_by:auth.user.User_id,
    Updated_by:auth.user.User_id,
    request_type:x.Request_Type // 0 or 1 , optional or mandatory
   }
    )
    }
  }
})

const Close_eveluate_Model = () => {
    emit('Close_eveluate_Model', false)
}


const send =()=>{
    
    for(let y of formdata.dash_evaluate_supD)
    {
        if(y.request_type==1 ){
            if(y.Rating==''){
                useToast('please rate all required questions')
                return false 
            }
        }
    }

    store.SendEveluation(formdata).then(resp=>{
        if(resp){
            emit('Close_eveluate_Model', false)
        }
})
}

const getdata=()=>{
    // console.log(props.D_Data)
    formdata.dash_evaluate_supM.RegD_id_frm= SwitchAccount.RegD_id // regd_id from switch account , bigint
    formdata.dash_evaluate_supM.RegD_name_frm=SwitchAccount.Company_name // enter the company name that give the comments 
    formdata.dash_evaluate_supM.RegM_id_to=props.D_Data.Supplier_RegM_id // user regm id that recive the star rating, bigint
    formdata.dash_evaluate_supM.RegM_name_to=props.D_Data.Supplier_RegM_name // name of the regm name that recive the star rating 
    formdata.dash_evaluate_supM.RegD_id_to=props.D_Data.Supplier_id // regd_id to switch account , bigint
    formdata.dash_evaluate_supM.RegD_name_to=props.D_Data.Supplier_name // enter the company name that recive the comments 
    formdata.dash_evaluate_supM.RegM_id_frm=SwitchAccount.RegM_id // user regm id that recive the star rating, bigint
    formdata.dash_evaluate_supM.RegM_name_frm= SwitchAccount.RegM_name // name of the regm name that recive the star rating 
    if(route.path=='/complete_projects'){
        formdata.dash_evaluate_supM.raising_area=0
        formdata.dash_evaluate_supM.raising_area_name='project'
    }
    if(route.path=='/completed_audit')
    {
        formdata.dash_evaluate_supM.raising_area=1
        formdata.dash_evaluate_supM.raising_area_name='audit'
    }
    formdata.dash_evaluate_supM.raising_area_id = props.D_Data.Bid_id
    formdata.dash_evaluate_supM.Created_by=auth.user.User_id // login user id
    formdata.dash_evaluate_supM.Updated_by=auth.user.User_id // login user id
    // formdata.dash_evaluate_supM.AdminRating_id= ''// pass the master rating id that comes from the getting data
    // formdata.dash_evaluate_supM.account_id=SwitchAccount.Account_type //pass the account id from switch account
    formdata.dash_evaluate_supM.Category_id=auth.user.cat_ids.toString() // pas the login user categories id
}


onMounted(()=>{
 store.getEvelQuestions(auth.user.cat_ids.toString())
 getdata()

})

</script>

<style>

</style>