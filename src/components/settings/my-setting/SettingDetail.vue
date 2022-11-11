<template>
    <div class="card mb-10 pb-10 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row mb-10">
                                            <div class="col-md-8">
                                                <h1 class="pb-2">My Settings</h1>
                                            </div>
                                            <div class="col-md-4 text-right text-hover-white">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 pr-10">
                                                <div class="row mb-5">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">Notifications </h4>
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <div class="table-responsive">
                                                    <!--begin::Table-->
                                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                        <tbody>
                                                            <tr>
                                                                <td><label class="form-label">Enable recive notifications on phone</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox" value="" v-model="formData.phone_notification">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label class="form-label">Enable recive notifications on email</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox" value="" v-model="formData.email_notification">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label class="form-label">Enable desktop notifications</label></td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox" value="" v-model="formData.desktop_notification">
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
                                                        <h4 class="pb-2">Authentication </h4>
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <div class="table-responsive">
                                                    <!--begin::Table-->
                                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label class="form-label">Two factor authentication</label>
                                                                </td>
                                                                <td>
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox" value="" v-model="formData.twoway_auth">
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td>
                                                                    <span>To help keep your account secure, we'll ask you to submit a code when using a new device to log in. We'll send the code via SMS, or email.</span>
                                                                </td>
                                                            </tr> -->
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <!-- <div class="col-md-4 pr-10">
                                                <div class="row mb-5">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">Change Password </h4>
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <label class="form-label required">Current Password</label>
                                                <input class="form-control form-control-lg form-control-solid mb-5" type="password" name="password" autocomplete="off">

                                                <label class="form-label required">New Password</label>
                                                <input class="form-control form-control-lg form-control-solid mb-5" type="password" name="password" autocomplete="off">

                                                <label class="form-label required">Confirm Password</label>
                                                <input class="form-control form-control-lg form-control-solid mb-5" type="password" name="password" autocomplete="off">

                                                <div class="text-right text-hover-white">
                                                    <a href="#" class="text-hover-white">
                                                        <button class="btn btn-primary w-100">Save Changes</button>
                                                    </a>
                                                </div>
                                            </div> -->

                                        </div>
                                              <div class="text-right text-hover-white" v-if="per?.Can_edit">
                                                    <button  @click="Updatesetting()" :disabled="disabled" class=" btn btn-primary w-100 text-hover-white">
                                                      Save Changes <Loader v-if="disabled"></Loader>
                                                    </button>
                                                </div>
                                    </div>
                                </div> 
</template>

<script>
import Loader from '@/global_components/loader/SLoader.vue'
import {useAuthStore} from '@/store/auth'
import { mapState } from 'pinia'
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import permission from '@/_helper/Permission'

export default {
    components:{
       Loader
    },
    data(){
        
       return{
           disabled:false,
         formData:{
             phone_notification:false,
             email_notification:false,
             desktop_notification:false,
             twoway_auth:false,
             per:'',

         }
       }
    },
    computed: {
    ...mapState(useAuthStore, ['user']),
  },
    methods:{

       async getSetting(){
         
          await Api.get( '/api/profile/profile-by-id?User_id='+this.user.User_id)
          .then(response =>{
              if(response.status==200){
                this.formData.phone_notification=response.data[0].phone_notification;
                this.formData.email_notification=response.data[0].email_notification;
                this.formData.desktop_notification=response.data[0].desktop_notification;
                this.formData.twoway_auth=response.data[0].twoway_auth;
              }
          })
          .catch(error=>{
            showToast('internal server error')
          })
       },

      async Updatesetting(){
          this.disabled=true
          
          await Api.post( '/api/setting/my-setting',{
             UserID:this.user.User_id,
             phone_notification:this.formData.phone_notification,
             email_notification:this.formData.email_notification,
             desktop_notification:this.formData.desktop_notification,
             twoway_auth:this.formData.twoway_auth
          })
          .then(response =>{
              if(response.status==200){
                  this.getSetting()
                  showToast('Setting Update Successfully', 'success')
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