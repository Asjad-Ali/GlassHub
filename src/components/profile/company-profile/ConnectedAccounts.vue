<template>
     <div class="card mb-5 mb-xl-10">
                                    <!--begin::Card header-->
                                    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_connected_accounts" aria-expanded="true" aria-controls="kt_account_connected_accounts">
                                        <div class="card-title m-0">
                                            <h3 class="fw-bolder m-0">Connected Accounts</h3>
                                        </div>
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Content-->
                                    <div id="kt_account_connected_accounts" class="collapse show" style="display:block">
                                        <!--begin::Card body-->
                                        <div class="card-body border-top p-9">
                                            <!--begin::Notice-->
                                            <!--begin::Notice-->
                                            <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                                                <!--begin::Icon-->
                                                <!--begin::Svg Icon | path: icons/duotune/art/art006.svg-->
                                                <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="black" />
                                                        <path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="black" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                                <!--end::Icon-->
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack flex-grow-1">
                                                    <!--begin::Content-->
                                                    <div class="fw-bold">
                                                        <div class="fs-6 text-gray-700">
                                                            Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code.
                                                            <a href="#" class="fw-bolder">Learn More</a>
                                                        </div>
                                                    </div>
                                                    <!--end::Content-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Notice-->
                                            <!--end::Notice-->
                                            <!--begin::Items-->
                                            <div class="py-2">
                                                <!--begin::Item-->
                                                <div class="d-flex flex-stack">
                                                    <div class="d-flex">
                                                        <img :src="'assets/media/svg/brand-logos/google-icon.svg'" class="w-30px me-6" alt="" />
                                                        <div class="d-flex flex-column">
                                                            <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">Google</a>
                                                            <div class="fs-6 fw-bold text-gray-400">Plan properly your workflow</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-end">
                                                        <div class="form-check form-check-solid form-switch">
                                                            <button class="btn btn-primary" v-if="fromData.is_google==false" @click="GUpdate">Connect</button>
                                                             <button class="btn btn-danger"  v-if="fromData.is_google==true" @click="GUpdate" >Disconnect</button>
                                                            <!-- <input class="form-check-input w-45px h-30px"  type="checkbox" id="googleswitch" value="" v-model="fromData.is_google" />
                                                            <label class="form-check-label" for="googleswitch"></label> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--end::Item-->
                                                <div class="separator separator-dashed my-5"></div>
                                                <!--begin::Item-->
                                                <div class="d-flex flex-stack">
                                                    <div class="d-flex">
                                                        <img src="https://preview.keenthemes.com/metronic8/demo2/assets/media/svg/brand-logos/facebook-4.svg" class="w-30px me-6" alt="" />
                                                        <div class="d-flex flex-column">
                                                            <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">Facebook</a>
                                                            <div class="fs-6 fw-bold text-gray-400">Keep eye on on your Repositories</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-end">
                                                        <div class="form-check form-check-solid form-switch">
                                                           <v-facebook-login    @login="FacebookLogin" app-id="3264615013770939" class="d-none">
                                                            </v-facebook-login>
                                                              <button class="btn btn-primary" v-if="fromData.is_facebook==false" @click="GFaceBook">Connect</button>
                                                             <button class="btn btn-danger"  v-if="fromData.is_facebook==true" @click="GFaceBook" >Disconnect</button>
                                                             <!-- <input class="form-check-input w-45px h-30px" @click="" type="checkbox" id="githubswitch" value="true" v-model="fromData.is_facebook" />
                                                            <label class="form-check-label" for="githubswitch"></label> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--end::Item-->
                                                <div class="separator separator-dashed my-5"></div>
                                                <!--begin::Item-->
                                                <div class="d-flex flex-stack">
                                                    <div class="d-flex">
                                                        <img :src="'assets/admin/media/linkedin-logo-login-form-icon.png'" class="w-30px me-6" alt="" />
                                                        <div class="d-flex flex-column">
                                                            <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">LinkedIn</a>
                                                            <div class="fs-6 fw-bold text-gray-400">Integrate Projects Discussions</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-end">
                                                        <div class="form-check form-check-solid form-switch">
                                                              <button class="btn btn-primary" v-if="fromData.is_linkdin==false" >Connect</button>
                                                             <button class="btn btn-danger"  v-if="fromData.is_linkdin==true" >Disconnect</button>
                                                            <!-- <input class="form-check-input w-45px h-30px" type="checkbox" id="slackswitch"  value="" v-model="fromData.is_linkdin"/>
                                                            <label class="form-check-label" for="slackswitch"></label> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--end::Item-->
                                            </div>
                                            <!--end::Items-->
                                        </div>
                                        <!--end::Card body-->
                                        <!--begin::Card footer-->
                                        <!-- <div class="card-footer d-flex justify-content-end py-6 px-9">
                                            <button class="btn btn-light btn-active-light-primary me-2">Discard</button>
                                            <button class="btn btn-primary">Save Changes</button>
                                        </div> -->
                                        <!--end::Card footer-->
                                    </div>
                                    <!--end::Content-->
                                </div>
</template>
<script setup>
import {countedAcc} from '@/store/countedAccount'
import {useAuthStore} from '@/store/auth'
import {onMounted, reactive,} from 'vue'
import { googleTokenLogin } from "vue3-google-login"
import sweetalert from '@/global_components/sweetAlert/SweetAlert'
import showToast from '@/global_components/Toast/useToast'
import VFacebookLogin from 'vue-facebook-login-component-next'
const Acc = countedAcc()
const auth =useAuthStore()
const fromData=reactive({
    is_facebook:false,
    is_google:false,
    is_linkdin:false,
})



//  const handleSdkInit=({ FB, scope })=> {
//          FB.value  = FB
//         scope.value = scope
//       }


const  GUpdate = async() => {
if(fromData.is_google==false){
   googleTokenLogin().then((response) => {
   fromData.is_google=true
     Acc.updateSocialAccount({Is_google:true,Google_token:response.access_token,User_id:auth.user.User_id})
  })
 }
 if(fromData.is_google==true){
  const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to discount your account')
    if(value.isConfirmed){
       Acc.updateSocialAccount({Is_google:false,Google_token:"null",User_id:parseInt(auth.user.User_id)})
       .then(response=>{
           fromData.is_google=false
           sweetalert('success',true,'yes','No',false,'Account discount successfuly')
       })
       .catch(error=>{
          showToast(error.message)
       })
    }else{
        fromData.is_google==true
    }
 }
}


const  GFaceBook = async() => {
if(fromData.is_facebook==false){
 let el= document.getElementsByClassName('v-facebook-login')
 el[0].click()
 }
 if(fromData.is_facebook==true){
  const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to discount your account')
    if(value.isConfirmed){
       Acc.updateSocialAccount({Is_facebook:false,Facebook_token:"null",User_id:parseInt(auth.user.User_id)})
       .then(response=>{
           sweetalert('success',true,'yes','No',false,'Account discount successfuly')
       })
       .catch(error=>{
          showToast(error.message)
       })
    }else{
        fromData.is_facebook==true
    }
 }
}

const FacebookLogin=(data)=>{
     res = data.authResponse
     Acc.updateSocialAccount({Is_facebook:true,Facebook_token:res.userID,User_id:auth.user.User_id})
}

 const callback = ()=>{
 fromData.is_facebook=Acc.SocialAccount.is_facebook;
 fromData.is_google=Acc.SocialAccount.is_google;
 fromData.is_linkdin=Acc.SocialAccount.is_linkdin;
}
 
Acc.$subscribe(callback, { detached: true })

onMounted(()=>{
 Acc.getAccount(auth.user.User_id)
})

</script>