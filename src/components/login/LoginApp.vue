<template>
    <div id="google_translate_element"></div>
  <div id="kt_body" class="bg-body">
    <div class="d-flex flex-column flex-root">
      <div class="d-flex flex-column flex-column-fluid">
        <div
          class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-10"
        >
          <a href="index.html" class="mb-12 loginlogo">
            <img :src="COMPANY_LOGO" />
          </a>
          <div
            class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
          >
            <form
              class="form w-100"
               @submit.prevent="Login"
            >
              <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Sign In</h1>
                <div class="text-gray-400 fw-bold fs-4">
                  New Here?
                  <a href="https://signup.glasshub.ai/sign-up-with">Create an Account</a>
                </div>
              </div>
              <div v-if="auth.error_message != null" class="alert alert-danger" role="alert">
                {{ auth.error_message }}
              </div>
              <div class="fv-row mb-10">
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                <input
                  class="form-control form-control-lg form-control-solid"
                  id="email" 
                  name="email"
                  type="email"
                  placeholder="email@yourdomain.com"
                  v-model.trim="validate.useremail.$model"
                  :class="[{ error: validate.useremail.$errors.length },{ error: message },
                         { error: Passvalidate.useremail.$errors.length }]"
                />
                <div v-if="validate.useremail.$error">
                    <div v-for="(error, index) in validate.useremail.$errors" :key="index" class="text-danger	mt-2" >
                      {{ error.$message }}
                  </div>
								</div>
                <div v-else>
                    <div v-for="(error, index) in Passvalidate.useremail.$errors" :key="index" class="text-danger	mt-2" >
                      {{ error.$message }}
                  </div>
								</div>
                <span  class="text-danger">{{message}}</span>
              </div>
              <div class="fv-row mb-10">
                <div class="d-flex flex-stack mb-2">
                  <label class="form-label fw-bolder text-dark fs-6 mb-0"
                    >Type Password</label
                  >
                 <a @click="forgetPassword" style="cursor:pointer">Forgot Password ?</a>
                </div>
                <input
                  class="form-control form-control-lg form-control-solid"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******"
                  v-model="validate.password.$model"
                  :class="{ error: validate.password.$errors.length }"
                />
                <div
                  class="input-errors"
                  v-for="error of validate.password.$errors"
                  :key="error"
                >
                  <div class="error-msg text-red">{{ error.$message }}</div>
                </div>
              </div>
             
              <div class="text-center loginbtn">
                <button  :disabled='auth.loader'  type="submit" class="btn btn-lg btn-primary w-100 mb-5">
                  Login   <Laoder v-if="auth.loader"></Laoder> </button>
              </div>
            </form>
              <div class="text-center text-muted text-uppercase fw-bolder mb-5">
                or
              </div>

                  <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77m2v67tulv3bl&redirect_uri=https://dashboard.glasshub.ai/login&state=foobar&scope=r_liteprofile%20r_emailaddress">
              <button
                class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                type="button"
              >
                <img
                  alt="Logo"
                  src="assets/admin/media/linkedin-logo-login-form-icon.png"
                  class="h-20px me-3"
                />Continue with LinkedIn</button
              ></a>
                  <!-- <GoogleLogin :callback="handleCredentialResponse" /> -->
                  <button
                  type="button"
                  @click="handleCredentialResponse"
                class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
              >
                <img
                  alt="Logo"
                  src="https://preview.keenthemes.com/metronic8/demo2/assets/media/svg/brand-logos/google-icon.svg"
                  class="h-20px me-3"
                />Continue with Google</button> 
                  <!-- </GoogleLogin> -->
              
                 
                    
                 
                   <v-facebook-login v-model="FBvalue"   class="d-none" id="FAuth" @login="FacebookLogin" app-id="3264615013770939">
                   </v-facebook-login>
             
             
            
            <div
              class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
              @click="openFacebook()"
            >
              <img
                alt="Logo"
                src="https://preview.keenthemes.com/metronic8/demo2/assets/media/svg/brand-logos/facebook-4.svg"
                class="h-20px me-3"
              />Continue with Facebook</div>

          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row footerlogin text-center">
        <div class="col-md-12">
          <p class="text-gray-800 text-hover-primary">2022© {{COMPANY_Name_2}}</p>
          <ul class="p-0">
            <li><a @click="TremCondition(5,4)" class="cursor-pointer">About</a></li>
            <li><a @click="TremCondition(5,5)" class="cursor-pointer">Support</a></li>
            <li><a @click="TremCondition(5,3)" class="cursor-pointer">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ForgetPassword} from '@/store/ForgetPassword'
import VFacebookLogin from 'vue-facebook-login-component-next'
// import googleOneTap from 'google-one-tap';
import useVuelidate from "@vuelidate/core";
import Laoder from '@/global_components/loader/SLoader.vue'
import { required, helpers,email} from "@vuelidate/validators";

import { useAuthStore } from "@/store/auth";
// import linkDIN from "@/_helper/linkdine"
import {reactive,ref,computed,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios';
import Api from '@/APi/axios_instance'
import { googleTokenLogin } from "vue3-google-login"

// import { inject, toRefs } from "vue";
export default {
  
  components:{
    Laoder,
     VFacebookLogin,
  },
  data() {
    return {
      user:'',
      FBvalue:null,
      LinkDinCode:null,
    };
  },

   setup() {
 const store = ForgetPassword();  
 const disabled = ref(false)
const message = ref('')
const router =useRouter()
const auth = useAuthStore();
const COMPANY_Name_2 = computed(() => process.env.VUE_APP_COMPANY_Name_2); 
const COMPANY_LOGO = computed(() => process.env.VUE_APP_COMPANY_LOGO ); 
   const formData = reactive({
             useremail:null,
             password:null,
        })

         const VerifyEmail =(value) => {
          if(value){
         return  store.ExistEmail(value).then(res=>{
              if(res){
                message.value=res;
                return false
                // response=false
              }else{
                message.value='';
                return true
                // response=true
              }             
         })
          }
            
        } 

          const rules = {
         useremail: {
           email,
          //  VerifyEmail,
           required: helpers.withMessage("Email is required", required),
          },
          password:{
             required: helpers.withMessage("password is required", required),
          } 
          
        };

           const forgetPass = {
          useremail: {
           email,
          //  VerifyEmail,
           required: helpers.withMessage("Email is required", required),
          },
           }

      const validate = useVuelidate(rules, formData);
      const Passvalidate = useVuelidate(forgetPass, formData);
     const openFacebook =()=>{
      document.getElementById('FAuth').click()
     }
      const Login =()=>{
               validate.value.$touch();
               if (!validate.value.$invalid &&  !message.value){
                auth.login({
                  User_email: formData.useremail,
                  User_password:formData.password,
                }).then(res=>{
                  if(res){
                       window.location.href="dashboard"  
                  }
                })
                 disabled.value=true
               }
      }
       const forgetPassword = () => {
            Passvalidate.value.$touch();
               if (!Passvalidate.value.$invalid && !message.value) {
                  localStorage.setItem('verifyemail',formData.useremail)
                  router.push('/reset_password')
            }
        };


const TremCondition=(id,page_id)=>{
  router.push('/footer')
  auth.FatchTerm({acc_id:5,page_id:page_id})
}

function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          let expires = "expires="+ d.toUTCString();
          document.cookie = 'googtrans' +'=; Path=/;  Domain=' + '.glasshub.ai' +  '; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure' 
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
        }

function googleTranslateElementInit(lang) {
              setCookie('googtrans', `/en/${lang}`,1);
             new google.translate.TranslateElement({
             pageLanguage: 'en'
           }, 'google_translate_element');
          //   new google.translate.TranslateElement({
          //    pageLanguage: 'en'
          //  }, 'google_translate_element');
            // var language = window.navigator.userLanguage || window.navigator.language;
            // window.location.replace(`/#googtrans(${lang})`);
        }
        
onMounted(()=>{
  googleTranslateElementInit(navigator.language.substring(0,2))
})
    return {
      formData,
      validate,
      openFacebook,
      forgetPassword,
      Passvalidate,
      auth,
      Login,
      COMPANY_Name_2,
      COMPANY_LOGO,
      message,
      disabled,
      TremCondition
      
    };
  },
//  watch:{
//    LinkDinCode(){
//     this.linkdineOpen()
//    }
//  },

  methods: {

  FacebookLogin(data){
    let res = data.authResponse
    this.auth.loginwithSocial({SocialMediaType:2,Facebook_token: res.userID})
},
  
async linkdineInfo(){
  Api.get('/api/general/linkedin_token?LinkDinCode='+this.LinkDinCode+'&redirect_uri=https://dashboard.glasshub.ai/login') 
  .then(response=>{
      let res= response.data
      this.auth.loginwithSocial({SocialMediaType:3,Linkedin_token: res.id})
})
.catch(error=>{
  console.log(error)
})
},


    handleCredentialResponse() {
    googleTokenLogin().then((response) => {
       axios.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token='+response.access_token)
       .then(response=>{
        this.auth.loginwithSocial({SocialMediaType:1,Google_token: response.data.sub})
       })
   })       
  }
  },

  mounted(){  
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
     let url_string = window.location.href
     let url = new URL(url_string);
     //let code = url.search.replaceAll("?code=","").replaceAll("&state=foobar","");
     this.LinkDinCode=code
     if(this.LinkDinCode){
      this.linkdineInfo()
     }
     let e = url.searchParams.get("email");
     if(e){
      this.formData.useremail =e
     }
     localStorage.removeItem('otp')
     localStorage.removeItem('email')   
  },

};
</script>
<style scoped>
  a {
    color: #5241a1 !important;
    text-decoration: none;
}
.error {
  border: 1px solid red;
}
.error-msg {
  color: red;
  margin-top: 5px;
}
</style>
<style>
.nsm7Bb-HzV7m-LgbsSe{
    height: 47px;
    color: #7e8299;
    border-color: #f5f8fa;
    background-color: #f5f8fa;
}
.S9gUrf-YoZ4jf iframe{
    width: 100% !important;
    margin-bottom: 13px !important;
    height: 50px !important;
    margin-bottom: 20px !important;
}
.haAclf{
  padding: 0px !important;
  width: 100% !important;
}
</style>
<style>
.v-facebook-login{
      border: none;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 10px;
    background: #f5f8fa;
}
.v-facebook-login span
{
      font-size: 15px;
    color: #7e8299;
    font-weight: 500;
        
   margin-left: 10px;
}
.v-facebook-login svg
{
      color: #004080
}
.g-btn-wrapper{
  width:100%
}
</style>
