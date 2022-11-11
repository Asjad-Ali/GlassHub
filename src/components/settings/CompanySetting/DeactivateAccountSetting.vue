<template>
       <div class="card">
                                    <!--begin::Card header-->
                                    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
                                        <div class="card-title m-0">
                                            <h3 class="fw-bolder m-0">Deactivate Account</h3>
                                        </div>
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Content-->
                                    <div id="kt_account_deactivate" class="collapse show" style="display:block">
                                        <!--begin::Form-->
                                        <form id="kt_account_deactivate_form" class="form">
                                            <!--begin::Card body-->
                                            <div class="card-body border-top p-9">
                                                <!--begin::Notice-->
                                                <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                                    <!--begin::Icon-->
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
                                                    <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                            <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                                                            <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                    <!--end::Icon-->
                                                    <!--begin::Wrapper-->
                                                    <div class="d-flex flex-stack flex-grow-1">
                                                        <!--begin::Content-->
                                                        <div class="fw-bold">
                                                            <h4 class="text-gray-900 fw-bolder">You Are Deactivating Your Account</h4>
                                                            <div class="fs-6 text-gray-700">
                                                                For extra security, this requires you to confirm your phone number and password when you deactivating your account.
                                                                <br />
                                                                    <button
                                                                      class="btn btn-lg btn-primary me-3"
                                                                      type="button"
                                                                      id="show1"
                                                                       @click="showDeactive('form')"
                                                                      >Click Here</button>
                                                            </div>
                                                        </div>
                                                        <!--end::Content-->
                                                    </div>
                                                    <!--end::Wrapper-->
                                                </div>
            <div class="fs-6 text-gray-700 menu1 mb-4" v-if="show">
              Please! enter your admin email and enter your admin password<br />
              <div class="col-md-6 mb-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  v-model="Devalidate.Email.$model"
                  class="form-control form-control-lg form-control-solid"
                  size="40"
                />
                 <template v-if="Devalidate.Email.$error">
                <div
                  v-for="(error, index) in Devalidate.Email.$errors"
                  :key="index"
                  class="text-theme-6 mt-2" style="color:red"
                >
                  {{ error.$message }}
                </div>
              </template>
              </div>
              <div class="col-md-6 mb-4">
                <input
                  name="Please enter your 8 digit password"
                  placeholder="xxxxxxxx"
                  v-model="Devalidate.Password.$model"
                  class="form-control form-control-lg form-control-solid"
                  size="8"
                />
                  <template v-if="Devalidate.Password.$error">
                <div
                  v-for="(error, index) in Devalidate.Password.$errors"
                  :key="index"
                  class="text-theme-6 mt-2" style="color:red"
                >
                  {{ error.$message }}
                </div>
              </template>
              </div>
              <button
                id="show3"
                class="btn btn-lg btn-primary me-3"
                type="button"
                @click="Submit()"
              >Submit 
              </button>
              <button
                class="btn btn-light btn-active-light-primary me-2"
                type="button"
                @Click="HideDiv"
              >
              Cancel
              </button>
            </div>


                                                <!--end::Notice-->
                                                <!--begin::Form input row-->
                                                <div class="form-check form-check-solid fv-row menu3"  v-if="DeatciveForm">
                                                    <input name="deactivate" class="form-check-input" type="checkbox" value="" id="deactivate"    @click="showDeactive('confirm')"/>
                                                    <label class="form-check-label fw-bold ps-2 fs-6" for="deactivate">I confirm my account deactivation</label>
                                                </div>
                                                <!--end::Form input row-->
                                            </div>
                                            <!--end::Card body-->
                                            <!--begin::Card footer-->
                                            <div class="card-footer d-flex justify-content-end py-6 px-9 menu3"      v-if="confirm">
                                                <button id="kt_account_deactivate_account_submit" type="button" class="btn btn-danger fw-bold"  @click="showalert">Deactivate Account</button>
                                            </div>
                                            <!--end::Card footer-->
                                        </form>
                                        <!--end::Form-->
                                    </div>
                                    <!--end::Content-->
                                </div>
</template>
<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useVuelidate } from "@vuelidate/core";
import { required, email ,helpers} from "@vuelidate/validators";
import {reactive,ref} from "vue";
import {useAuthStore} from '@/store/auth' 
import Api from '@/APi/axios_instance'
    const auth = useAuthStore()
    const show = ref(false)
    const DeatciveForm = ref(false)
    const Isactive=ref(true)
    const confirm = ref(false)
  
    const DeativeData= reactive({
      Account_status:null,
      RegD_id:auth.user.RegD_id,
      Email:'',
      Password:'', 
    })
     

   const DRule ={
         Email:{email,required:helpers.withMessage('email is required', required)},
         Password :{required:helpers.withMessage('password is required', required)} 
     }

    const showDeactive = (value)=>{
      if(value=='form'){
         show.value=true
      }else if(value=="deactive")
      {
        DeatciveForm.value= true
      } else if(value=='confirm')
      {
      
        Isactive.value=!Isactive.value
        if(Isactive.value)
        {
            confirm.value= false
            DeativeData.Account_status=null
        }else{
          console.log('arslan')
           confirm.value= true
           DeativeData.Account_status=4
      }   
   }
    }
   const HideDiv =()=>{
    show.value=false
    DeatciveForm.value= false
    confirm.value= false
    DeativeData.Account_status=null
   }

      const Submit = ()=>{
      Devalidate.value.$touch();
      if (!Devalidate.value.$invalid){
        showDeactive('deactive')
      }

   }

   const alert= async(icone,showConfirmButton=true,confirmButtonText,cancelButtonText,showCancelButton,text)=>{
       const value= await Swal.fire({
        icon: icone,
        showConfirmButton: showConfirmButton,
        confirmButtonText:confirmButtonText,
        cancelButtonText:cancelButtonText,
        showCancelButton:showCancelButton,
        text:text
      })
      return value
   }

  const Deactivate = async ()=>{
      await Api.post('api/setting/deactive-comp-accont',DeativeData).then(async response=>{
         if (response.status==200){
        const value = await   alert('success',true,'ok','',false,'Your account has been deactivated.')
       if(value.isConfirmed==true)
       {
        auth.logout()
       }
     }
      })
      .catch(()=>{
         alert('error',true,'ok','',false,'Your email or password is not correct.')
      })
    }

      const showalert= async()=>{
  const value = await alert('warning',true,'yes','No',true,'Are you sure you would like to deactivateyour account?')
     if(value.isConfirmed==true){
      Deactivate()
     }
     if(value.isConfirmed==false)
     {
      alert('info',true,'ok','',false,'Account not deactivated.')
     }
  }
      const Devalidate = useVuelidate(DRule, DeativeData);
</script>
