<template>
  <div class="card mb-10 mb-xxl-8">
    <div class="card-body pb-0">
      <form>
      <div class="row mb-10">
        <div class="col-md-12">
          <h1 class="pb-2">Your Profile Information</h1>
          <div class="separator separator-dashed border-gray-300 my-3"></div>
        </div>
      </div>
      <div class="row">
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-bold fs-6"
            >User Profile</label
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
              <!--begin::Preview existing avatar-->
              <div
                class="image-input-wrapper w-125px h-125px"
               :style='{ backgroundImage: `url("${UserImage}")` }'
              ></div>
              <!--end::Preview existing avatar-->
              <!--begin::Label-->
              <label
                class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-body
                  shadow
                "
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                title="Change avatar"
              >
                <i class="fas fa-pencil-alt"></i>
                <!--begin::Inputs-->
                <input
                  type="file"
                  name="avatar"
                  id="profie_image"
                  @change="profileimage($event)"
                  accept=".png, .jpg, .jpeg"
                />
                <input type="hidden" name="avatar_remove" />
                <!--end::Inputs-->
              </label>
              <!--end::Label-->
              <!--begin::Cancel-->
              <span
                class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-body
                  shadow
                "
                data-kt-image-input-action="cancel"
                data-bs-toggle="tooltip"
                title="Cancel avatar"
              >
                <i class="fa fa-close"></i>
              </span>
              <!--end::Cancel-->
              <!--begin::Remove-->
              <span
                class="
                  btn btn-icon btn-circle btn-active-color-primary
                  w-25px
                  h-25px
                  bg-body
                  shadow
                "
                data-kt-image-input-action="remove"
                data-bs-toggle="tooltip"
                title="Remove avatar"
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
        <div class="col-md-6 pb-5">
          <label class="form-label required">Your Name</label>
          <input
            type="text"
            name=""
             maxlength="50"
            v-model.trim="validate.name.$model"
            :class="{ 'border-theme-6': validate.name.$error }"
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
            maxlength="50"
            v-model.trim="validate.designation.$model"
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
             maxlength="50"
            v-model.trim="validate.email.$model"
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
          <!-- <input
            type="text"
            name=""
            v-model.trim="validate.phone.$model"
            :class="{ 'border-theme-6': validate.phone.$error }"
            
            class="form-control form-control-lg form-control-solid"
          /> -->
            <div style="position: relative;"   :class="{'error':validate.phone.$error}">
                  <input type="tel" maxlength="20" v-model="formData.phone" class="form-control form-control-lg form-control-solid" id="telephone">
                 <!-- <span style="position:absolute;left:50px;top:14px;">{{p_code}}</span> -->
             </div>
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
          <label class="form-label required"
            >Upload Company's Authorized Letter
          </label>
          <input
            type="file"
            id="file_input"
            @change="onFileChange($event)"
            class="form-control form-control-lg form-control-solid"
          />
          <spa>PDF, Doc, Docx, JPG</spa>
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
                  />
                  <span class="fw-bold ps-2 fs-6">Phone</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Options-->
            </div>
            <!--end::Col-->
          </div>
     

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
                  v-model="formData.allow_marketing"
                />
                <label class="form-check-label" for="allowmarketing"></label>
              </div>
            </div>
            <!--begin::Label-->
          </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-right mb-5 pt-20px edit_btn_link">
          <button @click="save()" :disabled="disabled" type="button" class="btn btn-sm btn-primary me-2"
            >Update Profile <Loader v-if="disabled"></Loader> </button
          >
        </div>
      </div>
     </form>
    </div>
  </div>
</template>
<script>
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
import Loader from '@/global_components/loader/SLoader.vue'
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers,maxLength } from "@vuelidate/validators";
import { reactive, toRefs,watch,ref} from "vue";
import {useRouter} from "vue-router"
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import {profile } from '@/store/profile'
export default {
  components:{
    Loader,
  },
    props:['user_info'],
  // watch:{
  // user_info(){   
  // this.user_detail=this.user_info
  // }
  // },
  setup(props) {
    const profileStore = profile()
    const router =useRouter()
    // const phone = ref('')
    // const p_code = ref('')
    const disabled=ref(false)
    const UserImage= ref(null)
    const letter = ref(null)
    const formData = reactive({
      profile:null,
      name: null,
      designation:null,
      email:null,
      phone: "",
      company_letter:null,
      communication_email: null,
      communication_phone: null,
      allow_marketing:null
    });

   watch(props ,()=>{
      UserImage.value=props.user_info.user_image,
      formData.name= props.user_info.User_fullname,
      formData.designation= props.user_info.User_designation,
      formData.email= props.user_info.User_email,
      formData.phone= props.user_info.User_phone,
       setphone()
      letter.value= props.user_info.authorized_letter,
      formData.communication_email= props.user_info.communication_email,
      formData.communication_phone= props.user_info.communication_phone,
      formData.allow_marketing= props.user_info.allow_marketing,
        urlToObject();
       
   })

//   watch( UserImage,()=>{
  
// }
  

//   })

    const urlToObject= async()=> {
    const response = await fetch(UserImage.value);
    const blob = await response.blob();
    let index = UserImage.value.indexOf("--")
    let name = UserImage.value.substr(index+2,UserImage.value.length)
    formData.profile = new File([blob],  name,{type:"image/png", lastModified:new Date().getTime(),});
    }

  watch( letter,()=>{
     let index = letter.value?.indexOf("--")
     if(!(index > 0)){
      letter.value =null
      return false
     }
    const urlToObject= async()=> {
    const response = await fetch(letter.value);
    const blob = await response.blob();
    let index = letter.value.indexOf("--")
    let name = letter.value.substr(index+2,letter.value.length)
    formData.company_letter = new File([blob],  name,{type:"image/png", lastModified:new Date().getTime(),});
    let container = new DataTransfer(); 
    container.items.add(formData.company_letter);
    document.querySelector('#file_input').files = container.files;
}
    urlToObject();

  })


    // const  OfficailEmail = (value)=> {
    //   if( value.includes('@gmail') || value.includes('@yahoow') || value.includes('@hotemail'))
    //   {
    //     return false
    //   }else{
    //     return true
    //   }
    // };

    const rules = {
      name: { required: helpers.withMessage("Name is required", required),maxLength:maxLength(250) },
      designation: {
        required: helpers.withMessage("designation is required", required),
        maxLength:maxLength(250)
      },
      email: {
        email,
        required: helpers.withMessage("email is required", required),
        // OfficailEmail: helpers.withMessage(
        //   "useOfficail email adress",
        //   OfficailEmail
        // ),
      },
      phone: { required: helpers.withMessage("phon is required", required),maxLength:maxLength(250) }

    };

    const profileimage = (e) => {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.profile=files[0];
      UserImage.value=URL.createObjectURL(files[0])
    };

    const onFileChange = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.company_letter = files[0];
    };
   const UpdateProfile = async()=>{
     let data = {
        Updated_by:props.user_info.User_id,
         User_fullname:formData.name,
         User_designation:formData.designation,
         User_email:formData.email,
         User_phone:formData.phone,
         User_id:props.user_info.User_id,
         communication_email:formData.communication_email,
         communication_phone:formData.communication_phone,
         allow_marketing:formData.allow_marketing
     };
     let uploadeProfile = new FormData();
     uploadeProfile.append('user_image',formData.profile)
     uploadeProfile.append('auth_file',formData.company_letter)
      uploadeProfile.append('data',JSON.stringify(data))
      await Api.post('/api/profile/update-user-profile', uploadeProfile)
      .then(response=>{
        if(response.status==200){
            showToast('profile update successfully', 'success')
            profileStore.GetUser()
            router.push('my-profile')
        }
      })
      .catch(error=>{
         disabled.value=false
        showToast(error.message)
      })
   }


    const validate = useVuelidate(rules, toRefs(formData));
    const save = () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        disabled.value=true
        UpdateProfile()
      }
    };

    const setphone=()=>{
      setTimeout(()=>{
      const input = document.querySelector("#telephone");
        intlTelInput(input, {
          preferredCountries: [""],  
     });
      })
        
    }
    
  //  onMounted(()=>{
  //   setphone()     
  //  })

    return {
      UserImage,
      formData,
      save,
      validate,
      onFileChange,
      profileimage,
      // phone,
      // p_code,
      // phoneCode,
      disabled
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