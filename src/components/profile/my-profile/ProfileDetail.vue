<template>
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profile Details</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show" style="display:block">
      <!--begin::Form-->
      <form id="kt_account_profile_details_form" class="form">
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >User Picture</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Image input-->
              <div
                class="image-input image-input-outline"
                data-kt-image-input="true"
                style="background-image: url(assets/media/avatars/blank.png)"
              >
              
                <div
                  class="image-input-wrapper w-125px h-125px"
                  :style='{ backgroundImage: `url("${UserImage}")` }'
                ></div>
                <!--end::Preview existing avatar-->
                <!--begin::Label-->
                <label
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                  style="display: none"
                >
                  <i class="fas fa-pencil-alt"></i>
                  <!--begin::Inputs-->
                  <input type="file" name="avatar"   accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="vc"  />
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->
                <!--begin::Cancel-->
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="cancel"
                  data-bs-toggle="tooltip"
                  title="Cancel avatar"
                  style="display: none"
                >
                  <i class="fa fa-close"></i>
                </span>
                <!--end::Cancel-->
                <!--begin::Remove-->
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  title="Remove avatar"
                   style="display: none"
                >
                  <i class="fa fa-close"></i>
                </span>
                <!--end::Remove-->
              </div>
              <!--end::Image input-->
              <!--begin::Hint-->
              <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row">
            <div class="col-md-6 pb-5">
              <label class="form-label required">Your Name</label>
              <input
                type="text"
                v-model.trim="validate.name.$model"
                readonly
                :class="{ 'border-theme-6': validate.name.$error }"
                name=""
                class="form-control form-control-lg form-control-solid"
              />
              <template v-if="validate.name.$error">
                <div
                  v-for="(error, index) in validate.name.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-md-6 pb-5">
              <label class="form-label required">Your Designation</label>
              <input
                type="text"
                name=""
                v-model.trim="validate.designation.$model"
                readonly
                :class="{ 'border-theme-6': validate.designation.$error }"
                class="form-control form-control-lg form-control-solid"
              />
              <template v-if="validate.designation.$error">
                <div
                  v-for="(error, index) in validate.designation.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-md-6 pb-5">
              <label class="form-label required">Your Email</label>
              <input
                type="email"
                name=""
                v-model.trim="validate.email.$model"
                readonly
                :class="{ 'border-theme-6': validate.email.$error }"
                class="form-control form-control-lg form-control-solid"
              />
              <template v-if="validate.email.$error">
                <div
                  v-for="(error, index) in validate.email.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-md-6 pb-5">
              <label class="form-label required">Your Phone</label>
              <input
                type="text"
                name=""
                v-model.trim="validate.phone.$model"
                readonly
                :class="{ 'border-theme-6': validate.phone.$error }"
                class="form-control form-control-lg form-control-solid"
              />
              
              <template v-if="validate.phone.$error">
                <div
                  v-for="(error, index) in validate.phone.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            
            <div class="col-md-12 pb-5">
             <i v-if="extention=='docx'" style="font-size: 70px;" class="fa-solid fa-file-word"></i>
             <i  v-if="extention=='rar'" style="font-size: 70px;" class="fa-solid fa-file-zipper"></i>
             <i  v-if="extention=='pptx'" style="font-size: 70px;" class="fa-solid fa-file-powerpoint"></i>
             <br>
             <div  v-if="extention!='docx' && extention!='rar' && extention!='pptx'">
              <div>
               <embed  :src="company_letter" width="150" height="100">
              </div>
              </div>
               <a :href="company_letter" target="_blank" style="font-size:12px;">View Document</a><br>
           
              <label class="form-label required"
                >Upload Company's Authorized Letter
              </label>
             
              <input
                type="file"
                id="file_input"
                disabled
                :class="{ 'border-theme-6': validate.company_letter.$error }"
                class="form-control form-control-lg form-control-solid"
              />
              <spa>PDF, Doc, Docx, JPG</spa>
              <template v-if="validate.company_letter.$error">
                <div
                  v-for="(error, index) in validate.company_letter.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Communication</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <!--begin::Options-->
              <div class="d-flex align-items-center mt-3">
                <!--begin::Option-->
                <label
                  class="form-check form-check-inline form-check-solid me-5"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="formData.communication_email"
                    disabled
                  />
                  <span class="fw-bold ps-2 fs-6">Email</span>
                </label>
                <!--end::Option-->
                <!--begin::Option-->
                <label class="form-check form-check-inline form-check-solid">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="formData.communication_phone"
                    disabled
                  />
                  <span class="fw-bold ps-2 fs-6">Phone</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Options-->
            </div>
            <!--end::Col-->
            <template v-if="validate.communication.$error">
              <div
                v-for="(error, index) in validate.communication.$errors"
                :key="index"
                class="text-theme-6"
              >
                {{ error.$message }}
              </div>
            </template>
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-0">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >Allow Marketing</label
            >
            <!--begin::Label-->
            <!--begin::Label-->
            <div class="col-lg-8 d-flex align-items-center">
              <div class="form-check form-check-solid form-switch fv-row">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="allowmarketing"
                  value=""
                  disabled
                  v-model="formData.allow_marketing"
                />
                <label class="form-check-label" for="allowmarketing"></label>
              </div>
            </div>
            <!--begin::Label-->
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Card body-->
        <!--begin::Actions-->
        <!-- <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            class="btn btn-light btn-active-light-primary me-2"
          >
            Discard
          </button>
          <button
            @click.prevent="save()"
            type="submit"
            class="btn btn-primary"
            id="kt_account_profile_details_submit"
          >
            Save Changes
          </button>
        </div> -->
        <!--end::Actions-->
      </form>
      <!--end::Form-->
    </div>
    <div class="card">
      <!--begin::Card header-->
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_deactivate"
        aria-expanded="true"
        aria-controls="kt_account_deactivate"
      >
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Deactivate User Account</h3>
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
            <div
              class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6"
            >
              <!--begin::Icon-->
              <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
              <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.3"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="10"
                    fill="black"
                  />
                  <rect
                    x="11"
                    y="14"
                    width="7"
                    height="2"
                    rx="1"
                    transform="rotate(-90 11 14)"
                    fill="black"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="1"
                    transform="rotate(-90 11 17)"
                    fill="black"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
              <!--end::Icon-->
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack flex-grow-1">
                <!--begin::Content-->
                <div class="fw-bold">
                  <h4 class="text-gray-900 fw-bolder">
                    You Are Deactivating Your Account
                  </h4>
                  <div class="fs-6 text-gray-700">
                    For extra security, this requires you to confirm your phone
                    number and password when you deactivating your account.
                    <br />
                    <button
                      class="btn btn-lg btn-primary me-3"
                      type="button"
                      id="show1"
                      @click="showDeactive('form')"
                      >Click Here</button
                    >
                    
                  </div>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
            <div class="fs-6 text-gray-700 menu1 mb-4" v-if="show">
              Please! enter your email and enter your password<br />
              <div class="col-md-6 mb-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  v-model="Devalidate.User_email.$model"
                  class="form-control form-control-lg form-control-solid"
                  size="40"
                />
                 <template v-if="Devalidate.User_email.$error">
                <div
                  v-for="(error, index) in Devalidate.User_email.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
              </div>
              <div class="col-md-6 mb-4">
                <input
                  name="Please enter your 8 digit password"
                  placeholder="xxxxxxxx"
                  v-model="Devalidate.User_password.$model"
                  class="form-control form-control-lg form-control-solid"
                  size="8"
                />
                  <template v-if="Devalidate.User_password.$error">
                <div
                  v-for="(error, index) in Devalidate.User_password.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
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
            <div
              class="form-check form-check-solid fv-row menu3"
              v-if="DeatciveForm"
            >
              <input
                name="deactivate"
                class="form-check-input"
                type="checkbox"
                value=""
                id="deactivate"
                @click="showDeactive('confirm')"
              />
              <label class="form-check-label fw-bold ps-2 fs-6" for="deactivate"
                >I confirm my account deactivation</label
              >
            </div>
            <!--end::Form input row-->
          </div>
          <!--end::Card body-->
          <!--begin::Card footer-->
          <div
            class="card-footer d-flex justify-content-end py-6 px-9 menu3"
           v-if="confirm"
          >
            <button
              type="button"
              @click="showalert"
              class="btn btn-danger fw-bold"
            >
              Deactivate Account
            </button>
          </div>
          <!--end::Card footer-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
 import showToast from '@/global_components/Toast/useToast'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useVuelidate } from "@vuelidate/core";
import { required, email ,helpers} from "@vuelidate/validators";
import {  reactive, toRefs, watch,ref, onMounted } from "vue";
import {useAuthStore} from '@/store/auth' 
import Api from '@/APi/axios_instance'
export default {
  props:['user_info'],
  watch:{
  user_info(){   
  this.user_detail=this.user_info
  }
  },

  setup(props) {
    const auth = useAuthStore()
    const UserImage = ref('');
    const company_letter = ref(null);
    const extention = ref(null)
    const show = ref(false)
    const DeatciveForm = ref(false)
    const confirm = ref(false)
    const formData = reactive({
      name:null,
      designation:null,
      email:null,
      phone:null,
      communication_email:null,
      communication_phone:null,
      allow_marketing:null
    });

    const DeativeData= reactive({
      Isactive:true,
      User_id:auth.user.User_id,
      User_email:'',
      User_password:'', 
    })
     



    watch(props,()=>{
      UserImage.value=props.user_info?.user_image;
      formData.name=props.user_info?.User_fullname;
      formData.designation=props.user_info?.User_designation;
      formData.email=props.user_info?.User_email;
      formData.phone=props.user_info?.User_phone;
      company_letter.value=props.user_info?.authorized_letter;
      formData.communication_email=props.user_info?.communication_email;
      formData.communication_phone=props.user_info?.communication_phone;
      formData.allow_marketing=props.user_info?.allow_marketing;
    })

          
    watch(company_letter, ()=>{
      let index = company_letter.value?.indexOf("--")
      if(!(index > 0)){
        company_letter.value=null
        return
      }
    const urlToObject= async()=> {
    const response = await fetch(company_letter.value);
    const blob = await response.blob();
      
      let name = company_letter.value.substr(index+2,company_letter.value.length)
      var file=new File([blob], name)
      let container = new DataTransfer(); 
      container.items.add(file);
      document.querySelector('#file_input').files = container.files;
      }
      urlToObject()
      FileExtention()
    })

  const FileExtention=()=>{
      let index = company_letter.value.lastIndexOf(".")
      let name = company_letter.value.substr(index+1,company_letter.value.length)
      extention.value=name
  }

    const  OfficailEmail = (value)=> {
      if( value.includes('@gmail') || value.includes('@yahoow') || value.includes('@hotemail'))
      {
        return false
      }else{
        return true
      }
    };

    const rules = {
      name: {required:helpers.withMessage('Name is required', required)},
      designation: {required:helpers.withMessage('designation is required', required)},
      email: {email,required:helpers.withMessage('email is required', required),
      OfficailEmail:helpers.withMessage('use officail email address',OfficailEmail)},
      phone: { required:helpers.withMessage('phon is required',required)},
      company_letter: { required:helpers.withMessage('company letter is requried',required)},
      communication: { required:helpers.withMessage('communication is required',required)},
    };

     const DRule ={
         User_email:{email,required:helpers.withMessage('email is required', required)},
         User_password :{required:helpers.withMessage('password is required', required)} 
     }


    const showDeactive = (value)=>{
      if(value=='form'){
         show.value=true
      }else if(value=="deactive")
      {
        DeatciveForm.value= true
      } else if(value=='confirm')
      {
        DeativeData.Isactive=!DeativeData.Isactive
        if(DeativeData.Isactive)
        {
            confirm.value= false
        }else{
          confirm.value= true
        }
       
      }   
   }

   const HideDiv =()=>{
    show.value=false
    DeatciveForm.value= false
    confirm.value= false
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
      await Api.post('api/profile/deactive-acct',DeativeData).then(async response=>{
         if (response.status==200){
        const value = await   alert('success',true,'ok','',false,'Your account has been deactivated.')
       if(value.isConfirmed==true)
       {
        auth.logout()
       }
     }
      })
      .catch(error=>{
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
    const validate = useVuelidate(rules, toRefs(formData));
    const Devalidate = useVuelidate(DRule, DeativeData);
    return {
      show,
      formData,
      validate,
      UserImage,
      company_letter,
      showDeactive,
      HideDiv,
      Deactivate,
      DeativeData,
      Devalidate,
      DeatciveForm,
      Submit,
      confirm,
      showalert,
      extention
    };
  },
};
</script>

<style scoped>
.border-theme-6 {
  border: 1px solid red;
}
.text-theme-6 {
  color: red;
}
</style>
