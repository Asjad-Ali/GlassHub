<template>
    <div class="card mb-5 mb-xl-10">
                                    <!--begin::Card header-->
                                    <div class="card-header border-0 cursor-pointer show"   role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                                        <div class="card-title m-0">
                                            <h3 class="fw-bolder m-0">Sign-in Method</h3>
                                        </div>
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Content-->
                                    <div id="kt_account_signin_method" class="collapse show" style="display:block">
                                        <!--begin::Card body-->
                                        <div class="card-body border-top p-9">
                                            <!--begin::Email Address-->
                                            <div class="d-flex flex-wrap align-items-center">
                                                <!--begin::Label-->
                                                <div id="kt_signin_email" v-if="!ChangeEmail">
                                                    <div class="fs-6 fw-bolder mb-1">Email Address</div>
                                                    <div class="fw-bold text-gray-600">{{UserInfo.User_email}}</div>
                                                </div>

                                                <!--end::Label-->
                                                <!--begin::Edit-->
                                                <div id="kt_signin_email_edit" v-if="ChangeEmail" class="flex-row-fluid ">
                                                    <!--begin::Form-->
                                                    <form id="kt_signin_change_email" class="form" novalidate="novalidate">
                                                        <div class="row mb-6">
                                                            <div class="col-lg-6 mb-4 mb-lg-0">
                                                                <div class="fv-row mb-0">
                                                                    <label for="emailaddress" class="form-label fs-6 fw-bolder mb-3">Enter New Email Address</label>
                                                                    <input type="email" autocomplete="off" v-model="Emailvalidate.NewEmail.$model" class="form-control form-control-lg form-control-solid" :class="{ error:Emailvalidate.NewEmail.$errors.length }"  placeholder="Email Address" name="emailaddress"  />
                                                                </div>
                                                                 <div class="error-msg mt-2" v-if="Emessage!=''">{{Emessage}}</div>
                                                                  <div class="input-errors mt-2" v-for="error of Emailvalidate.NewEmail.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="fv-row mb-0">
                                                                    <label for="confirmemailpassword" class="form-label fs-6 fw-bolder mb-3">Confirm Password</label>
                                                                     <input type="password" 
                                                                         v-model.trim="Emailvalidate.Password.$model"
                                                                         :class="{ 'error': Emailvalidate.Password.$error }"
                                                                          class="form-control form-control-lg form-control-solid"
                                                                         name="confirmemailpassword" />
                                                                </div>
                                                                 <div class="input-errors mt-2" v-for="error of Emailvalidate.Password.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex">
                                                            <button id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6" @click="UpdateEmail()">Update Email</button>
                                                            <button id="kt_signin_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6" @click="closeModel('change_email')">Cancel</button>
                                                        </div>
                                                    </form>
                                                    <!--end::Form-->
                                                </div>
                                                <!--end::Edit-->
                                                <!--begin::Action-->
                                                <div  class="ms-auto" v-if="!ChangeEmail">
                                                    <button v-if="pre?.Can_edit" class="btn btn-light btn-active-light-primary" @click="showModel('change_email')" >Change Email</button>
                                                </div>
                                                <!--end::Action-->
                                            </div>
                                            <!--end::Email Address-->
                                            <!--begin::Separator-->
                                            <div class="separator separator-dashed my-6"></div>
                                            <!--end::Separator-->
                                            <!--begin::Password-->
                                            <div class="d-flex flex-wrap align-items-center ">
                                                <!--begin::Label-->
                                                <div  v-if="!ChangePassword">
                                                    <div class="fs-6 fw-bolder mb-1">Password</div>
                                                    <div class="fw-bold text-gray-600"><input  type="password" style="border: none;color: #7e8299!important;" readonly :value="UserInfo.User_password"></div>
                                                </div>
                                                <!--end::Label-->
                                                <!--begin::Edit-->
                                                <div  class="flex-row-fluid"  v-if="ChangePassword">
                                                    <!--begin::Form-->
                                                    <form id="kt_signin_change_password" class="form" novalidate="novalidate">
                                                        <div class="row mb-1">
                                                            <div class="col-lg-4">
                                                                <div class="fv-row mb-0">
                                                                    <label for="currentpassword" class="form-label fs-6 fw-bolder mb-3">Current Password</label>
                                                                    <input type="password"  v-model="Passwordvalidate.CurrentPassword.$model"  :class="{ 'error': Passwordvalidate.CurrentPassword.$error }" class="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
                                                                </div>
                                                                  <div class="input-errors mt-2" v-for="error of Passwordvalidate.CurrentPassword.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="fv-row mb-0">
                                                                    <label for="newpassword" class="form-label fs-6 fw-bolder mb-3">New Password</label>
                                                                    <input type="password" v-model="Passwordvalidate.NewPassword.$model"  :class="{ 'error': Passwordvalidate.NewPassword.$error }" class="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
                                                                </div>
                
                                                                 <div class="input-errors mt-2" v-for="error of Passwordvalidate.NewPassword.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div class="fv-row mb-0">
                        
                                                                    <label for="confirmpassword" class="form-label fs-6 fw-bolder mb-3">Confirm New Password</label>
                                                                    <input type="password"  v-model="Passwordvalidate.comfirmPassword.$model"  :class="{ 'error': Passwordvalidate.comfirmPassword.$error }" class="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
                                                                    <div class="input-errors mt-2" v-for="error of Passwordvalidate.comfirmPassword.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-text mb-5">Password must be at least 8 character and contain symbols</div>
                                                        <div class="d-flex">
                                                            <button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6" @click="UpdatePassword()">Update Password</button>
                                                            <button id="kt_password_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6" @click="closeModel('change_password')">Cancel</button>
                                                        </div>
                                                    </form>
                                                    <!--end::Form-->
                                                </div>
                                                <!--end::Edit-->
                                                <!--begin::Action-->
                                                <div class="ms-auto"  v-if="!ChangePassword">
                                                    <button v-if="pre?.Can_edit" class="btn btn-light btn-active-light-primary"  @click="showModel('change_password')" >Reset Password</button>
                                                </div>
                                                <!--end::Action-->
                                            </div>
                                            <div class="separator separator-dashed my-6"></div>
                                            <div class="d-flex flex-wrap align-items-center mb-10">
                                                <!--begin::Label-->
                                                <div id="kt_signin_number" v-if="!ChangePhone">
                                                    <div class="fs-6 fw-bolder mb-1">Phone No</div>
                                                    <div class="fw-bold text-gray-600">{{UserInfo.User_phone}}</div>
                                                </div>
                                                <!--end::Label-->
                                                <!--begin::Edit-->
                                                <div id="kt_signin_number_edit" class="flex-row-fluid" v-show="ChangePhone">
                                                    <!--begin::Form-->
                                                    <form id="kt_signin_change_number" class="form" novalidate="novalidate">
                                                        <div class="row mb-6">
                                                            <div class="col-lg-6 mb-4 mb-lg-0">
                                                                <div class="fv-row mb-0">
                                                                    <label for="number" class="form-label fs-6 fw-bolder mb-3">Enter New Phone no</label>
                                                                    <input type="tel" id="tel" ref="telephone" autocomplete="off"  v-model="Phonevalidate.NewPhone.$model"  :class="{ 'error': Phonevalidate.NewPhone.$error }" class="form-control form-control-lg form-control-solid"  placeholder="92756394643862" name="emailaddress" />
                                                                </div>
                                                                  <div class="input-errors mt-2" v-for="error of Phonevalidate.NewPhone.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="fv-row mb-0">
                                                                    <label for="confirmemailpassword" class="form-label fs-6 fw-bolder mb-3">Confirm Password</label>
                                                                    <input type="password"   v-model="Phonevalidate.Password.$model"  :class="{ 'error': Phonevalidate.Password.$error }" class="form-control form-control-lg form-control-solid" name="confirmemailpassword"  />
                                                                </div>
                                                                  <div class="input-errors mt-2" v-for="error of Phonevalidate.Password.$errors" :key="error.$uid">
                                                                   <div class="error-msg">{{ error.$message }}</div>
                                                                  </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex">
                                                            <button id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6"  @click="UpdatePhone()">Update Phone No</button>
                                                            <button id="kt_signin_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6"  @click="closeModel('change_phone')">Cancel</button>
                                                        </div>
                                                    </form>
                                                    <!--end::Form-->
                                                </div>
                                                <!--end::Edit-->
                                                <!--begin::Action-->
                                                <div id="kt_signin_number_button" class="ms-auto" v-if="!ChangePhone">
                                                    <button v-if="pre?.Can_edit" class="btn btn-light btn-active-light-primary"  @click="showModel('change_phone')" >Change Phone No</button>
                                                </div>
                                                <!--end::Action-->
                                            </div>
                                            <!--end::Password-->
                                            <!--begin::Notice-->
                                            <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                                                <!--begin::Icon-->
                                                <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
                                                <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black" />
                                                        <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                                <!--end::Icon-->
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                    <!--begin::Content-->
                                                    <div class="mb-3 mb-md-0 fw-bold">
                                                        <h4 class="text-gray-900 fw-bolder">Secure Your Account</h4>
                                                        <div class="fs-6 text-gray-700 pe-7">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</div>
                                                    </div>
                                                    <!--end::Content-->
                                                    <!--begin::Action-->
                                                    <a href="#" class="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable</a>
                                                    <!--end::Action-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Notice-->
                                        </div>
                                        <!--end::Card body-->
                                    </div>
                                    <!--end::Content-->
                                </div>
                                <authentication-methods></authentication-methods>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
import AuthenticationMethods from "./AuthenticationMethods.vue"
import { useVuelidate } from "@vuelidate/core";
import { required, email,sameAs, helpers,minLength} from "@vuelidate/validators";
import {useAuthStore} from '@/store/auth'
import Api from '@/APi/axios_instance'
import { onMounted, reactive,ref,computed } from 'vue';
import {Account} from '@/store/SwitchAccount'
import showToast from '@/global_components/Toast/useToast'
import permission from '@/_helper/Permission'
export default {
    components:{
          AuthenticationMethods
    },
  setup () {
         const auth = useAuthStore()
         const SwitchAccount = Account()
         const passwpord_lentgh= ref(null);
         const error_message= ref('');
         const Emessage = ref('');
         const UserInfo = ref('')
         const ChangeEmail= ref(false)
         const ChangePassword= ref(false)
         const ChangePhone=  ref(false)
         const telephone =ref('')
         const pre = ref('');
         const e_fileds = reactive({
            NewEmail:'',
            Password:'',
        })
        
          const p_fileds = reactive({
            CurrentPassword:'',
            NewPassword:'',
            comfirmPassword:''
        })
          const ph_fileds = reactive({
            NewPhone:'+',
            Password:''
        })
        

         const VerifyEmail =(value) => {
          if(value){
         return  Api.get('/api/Signup/EmailExist?email='+value).then(res=>{
              if(res.data?.emailExist!=null){
                Emessage.value=res.data.emailExist[0].email_exist;
                return false
                // response=false
              }else{
                Emessage.value='';
                console.log('arslan')
                return true
                // response=true
              }             
         })
          }
            
        } 
    
      const emailRules ={
      NewEmail: {
         VerifyEmail,
         required:helpers.withMessage('Email is requried', required),
         email
         },
      Password: { required:helpers.withMessage('Password is requried', required) },
      }





       let pass2 =helpers.regex()
         const  passwordHint=()=>{
               Api.get('/api/RegistrationSetting/GetAccountBase/'+ SwitchAccount.Account_detail[0].Account_type).then((resp) => {
              if(resp.data && resp.data.RegistrationSettingM &&  resp.data.RegistrationSettingM.length > 0){
                  let validationData=resp.data.RegistrationSettingM[0]
                  if(validationData.Psw_type==0){
                    pass2 = helpers.regex();
                     passwpord_lentgh.value= validationData.Psw_length
                  }else if(validationData.Psw_type==1){
                     pass2 = helpers.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one letter and one number"
                  }else if(validationData.Psw_type==2){
                    pass2 = helpers.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one special character, one number, one letter and uppercase letter"
                  }
              }
            }).catch((errors)=>{
             showToast('internal server error')
            })
        }

        const password_Rules =computed(()=>{
            return{
            CurrentPassword: { required:helpers.withMessage('Current Password is requried', required) },
            NewPassword: {
            minLength:helpers.withMessage(`Password must contain at least ${passwpord_lentgh.value} digits` , minLength(passwpord_lentgh.value)),
            pass2:helpers.withMessage(`${error_message.value}`,pass2),
            required: helpers.withMessage("password is required", required),
             },
            comfirmPassword:{required:helpers.withMessage('comfirm Password is requried', required),sameAs:sameAs(p_fileds.NewPassword)}
            }
       
      })

       const phone_Rules ={
      NewPhone: { required:helpers.withMessage('New Phone is requried', required)},
      Password: { required:helpers.withMessage('Password is requried', required)}, 
      }

        const Emailvalidate = useVuelidate(emailRules, e_fileds)
        const Passwordvalidate = useVuelidate(password_Rules, p_fileds)
        const Phonevalidate = useVuelidate(phone_Rules, ph_fileds)

         
          const showModel = (event)=>{
           if(event=='change_email'){
             ChangeEmail.value=!ChangeEmail.value
           }           

            if(event=='change_password'){
               
            ChangePassword.value=!ChangePassword.value
           }
           
            if(event=='change_phone'){
                  const input = document.querySelector('#tel');
                  intlTelInput(input, {
                //  preferredCountries: ["gb"], 
        //         geoIpLookup: function(callback) {
        //    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
        //    var countryCode = (resp && resp.country) ? resp.country : "us";
        //     callback(countryCode);
        //      });
        //     },
        //     utilsScript: "../../build/js/utils.js?1638200991544" // just for formatting/placeholders etc 
            })
               
            ChangePhone.value=!ChangePhone.value
           }
        }
        
       const closeModel = (event)=>{
             if(event=='change_email'){
            ChangeEmail.value=!ChangeEmail.value
           }
            if(event=='change_password'){
            ChangePassword.value=!ChangePassword.value
           }
            if(event=='change_phone'){
            ChangePhone.value=!ChangePhone.value
           }
      }



         const Email = async ()=>{
         
         await Api.post( '/api/setting/change-email',{
             User_id:auth.user.User_id,
             User_email:e_fileds.NewEmail,
             User_password:e_fileds.Password,           
         }).then(response=>{
             if(response.status==200){
               GetUserInfo()
               closeModel('change_email')
               e_fileds.NewEmail=null;
               e_fileds.Password=null;
                Swal.fire({
        icon: 'success',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Email Update SuccessFully'
      })               
             }
         })
         .catch(error=>{
        Swal.fire({
        icon: 'error',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Your Password is Not Correct'
      })            
         })
         
      }


       const Password = async ()=>{
         
         await Api.post( '/api/setting/change-password',{
             User_id:auth.user.User_id,
             Old_Password:p_fileds.CurrentPassword,
             User_password:p_fileds.comfirmPassword,   
         }).then(response=>{
             if(response.status==200){
               GetUserInfo()
                closeModel('change_password')
                p_fileds.CurrentPassword='';
                p_fileds.NewPassword="";
                p_fileds.comfirmPassword="";
                   Swal.fire({
        icon: 'success',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Password Update SuccessFully'
      })               
             }
         })
           .catch(error=>{
        Swal.fire({
        icon: 'error',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Your Password is Not Correct'
      })            
         })
      }


    const Phone = async ()=>{
      
         await Api.post('/api/setting/change-phone',{
             User_id:auth.user.User_id,
             User_phone:ph_fileds.NewPhone,
             User_password:ph_fileds.Password,           
         }).then(response=>{
             if(response.status==200){
               GetUserInfo()
              closeModel('change_phone')
              ph_fileds.NewPhone='+'
                Swal.fire({
        icon: 'success',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Phone Update SuccessFully'
      })               
             }
         })
         .catch(error=>{
        Swal.fire({
        icon: 'error',
        showConfirmButton:true,
        confirmButtonText:'ok',
        text:'Your Password is Not Correct'
      })            
         })
      }

      const GetUserInfo = async()=>{
      
       await Api.get( '/api/profile/profile-by-id?User_id='+ auth.user.User_id)
       .then(response=>{
         UserInfo.value=response.data[0];
       })
       .catch(error=>{
         showToast('internal server error')
       }) 
    }

        const UpdateEmail = () => {
           Emailvalidate.value.$touch();
      if (!Emailvalidate.value.$invalid && !Emessage.value) {
           Email()
        }
    };

          const UpdatePassword = () => {
             Passwordvalidate.value.$touch();
        if (!Passwordvalidate.value.$invalid) {
          Password()
        }
    };

         const UpdatePhone = () => {
            Phonevalidate.value.$touch();
         if (!Phonevalidate.value.$invalid) {
            Phone()
         }
    };

    onMounted(()=>{
        passwordHint()
        GetUserInfo()
        pre.value = permission()
        console.log(pre.value.Can_edit)
    })

      return {
          Emessage,
          telephone,
          UserInfo,
          ChangeEmail,
          ChangePassword,
          ChangePhone,
          Emailvalidate,
          Passwordvalidate ,
          Phonevalidate,
          closeModel,
          showModel,
          UpdateEmail ,
          UpdatePassword,
          UpdatePhone,
          pre
          }
  },
}
</script>
<style scoped>
.error{
    border:1px solid red
}
.error-msg{
    color: red;
}
</style>
