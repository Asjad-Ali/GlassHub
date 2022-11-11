<template>
     <div class="card mb-10 pb-10 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row mb-10">
                                            <div class="col-md-8">
                                                <h1 class="pb-2">Company Settings</h1>
                                            </div>
                                            <div class="col-md-4 text-right text-hover-white">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 pr-10">
                                                <div class="row mb-5">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">General Settings </h4>
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <div class="table-responsive">
                                                    <!--begin::Table-->
                                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                        <tbody>
                                                             <tr v-if="Account_detail[0]?.Account_type==1 || Account_detail[0]?.Account_type==2 || Account_detail[0]?.Account_type==3">
                                                                <td><label class="form-label">Allow Organization to send Registration request</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"  value="" v-model="formData.AllowOrgniazation">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr v-if=" Account_detail[0]?.Account_type==3 || Account_detail[0]?.Account_type==0">
                                                                <td><label class="form-label">Allow suppliers to send Registration request</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"  value="" v-model="formData.AllowSupplier">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr v-if="Account_detail[0]?.Account_type==1 || Account_detail[0]?.Account_type==4 || Account_detail[0]?.Account_type==0">
                                                                <td><label class="form-label">Allow Auditfirm to send Registration request</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox" value="" v-model="formData.AllowAuditFirm">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                             <tr v-if=" Account_detail[0]?.Account_type==3 || Account_detail[0]?.Account_type==0">
                                                                <td><label class="form-label">Allow Freelancer to send Registration request</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"  value="" v-model="formData.AllowFreelancer">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-6 pr-10">
                                                <div class="row mb-5">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">Profile Visibility</h4>
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <div class="table-responsive">
                                                    <!--begin::Table-->
                                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label class="form-label">Show only verified users to view profile </label>
                                                                </td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"  value="" v-model="formData.verified">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td>
                                                                    <span>To help keep your account secure for any spamming, like ghost calls, emails, and sms.</span>
                                                                </td>
                                                            </tr> -->
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-md-4 pr-10">
                                            </div>
                             
                                        </div>
                                         <div class="text-right text-hover-white" v-if="per?.Can_edit">
                                           <button @click="Updatesetting()" :disabled="disabled" class=" btn btn-primary w-100 text-hover-white">
                                            Save Changes <Loader v-if="disabled"></Loader>
                                           </button>
                                        </div>
                                    
                                    </div>
                                </div>              
</template>

<script>
import Loader from '@/global_components/loader/SLoader.vue'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import showToast from '@/global_components/Toast/useToast'
import { mapState } from 'pinia'
import Api from '@/APi/axios_instance'
import permission from '@/_helper/Permission'
export default {
    components:{
       Loader
    },
    data(){
        
       return{
           disabled:false,
            formData:{
             AllowSupplier:false,
             AllowAuditFirm:false,
             AllowFreelancer:false,
             AllowOrgniazation:false,
             verified:false,
             per:'',

         }
       }
    },
    computed: {
    ...mapState(useAuthStore, ['user']),
    ...mapState(Account,['Account_detail'])
  },
  watch:{
Account_detail(){
    this.getSetting()
}
  },
    methods:{
       async getSetting(){
          await Api.get('api/setting/get-gnrlSetting?RegD_id='+this.Account_detail[0].RegD_id)
          .then(response =>{
              if(response.status==200){
                this.formData.AllowSupplier=response.data[0].Is_sup_sndReq;
                this.formData.AllowAuditFirm=response.data[0].Is_Audt_sndReq;
                this.formData.AllowFreelancer=response.data[0].Is_Freelancer_sndReq;
                this.formData.AllowOrgniazation= response.data[0].Is_Organization_sndReq;
                this.formData.verified=response.data[0].Is_verifiedUser;
              }
          })
          .catch(error=>{
             showToast('internal server error')
          })
       },

      async Updatesetting(){
          this.disabled=true
          await Api.post( '/api/setting/general-setting',{
             RegD_id:this.Account_detail[0].RegD_id,
             Is_sup_sndReq:this.formData.AllowSupplier,
             Is_Audt_sndReq:this.formData.AllowAuditFirm,
             Is_Freelancer_sndReq:this.formData.AllowFreelancer,
             Is_Organization_sndReq:this.formData.AllowOrgniazation,
             Is_verifiedUser:this.formData.verified,
           
          })
          .then(response =>{
              if(response.status==200){
                  this.getSetting()
                   showToast('Setting Update Successfully','success')
                   this.disabled=false
              }
          })
          .catch(error=>{
            this.disabled=false
             showToast('internal server error')
          })
       }
    },

    mounted(){
          this.getSetting()
          this.per=permission()
    }
}
</script>
<style>
.my-toast
  {
    font-size: 18px;
    width: 300px !important;
    height: 70px !important;
}
</style>