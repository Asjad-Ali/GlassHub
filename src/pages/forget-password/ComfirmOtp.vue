<template>
    
		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid">
				<!--begin::Content-->
				<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-10">
					<!--begin::Logo-->
					<a class="mb-12 loginlogo">
						<img :src="COMPANY_LOGO" />
					</a>
					<!--end::Logo-->
					<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
							<div class="text-center mb-10">
								<h1 class="text-dark mb-3">Forgot Password?</h1>
								<div class="text-gray-400 fw-bold fs-4">Enter your OTP to change  your password .</div>
							</div>
							<div class="fv-row mb-10">
								<label class="form-label fs-6 fw-bolder text-dark">Enter Your OTP</label>
								<input  type="email" name="email" v-model.trim="validate.otp.$model"
                                  :class="{ 'border border-danger': validate.otp.$error }" class="form-control form-control-lg form-control-solid" placeholder="otp@yourdomain.com" autocomplete="off" />
								<div v-if="validate.otp.$error">
                                      <div v-for="(error, index) in validate.otp.$errors" :key="index" class="text-danger	mt-2" >
                                        {{ error.$message }}
                                      </div>
								</div>
							</div>
                            
                            <div class="text-center">
                              <button :disabled="disabled" type="button" class="btn btn-lg btn-primary w-100 mb-5" @click="submit()"> Submit <SLoader v-if="disabled"></SLoader></button>
                                 <router-link to="/reset_password"><button class="btn btn-lg btn-bg-light w-100 mb-5"> Resend </button></router-link>
							</div>
					
						</form>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
 // eslint-disable-next-line 
 /* eslint-disable */
import {ForgetPassword} from '@/store/ForgetPassword'
import { useVuelidate } from "@vuelidate/core";
import { required ,helpers} from "@vuelidate/validators";
import {onMounted, reactive,ref,computed} from 'vue'
import SLoader from '@/global_components/loader/SLoader.vue'
import {useRouter} from 'vue-router'
//import showToast from '@/global_components/Toast/useToast'

export default {
    components:{
        SLoader
    },
    setup() {
        const store = ForgetPassword();  
		const router = useRouter();
        const disabled = ref(false)
        const formData = reactive({
             otp:'',
             email:'',
        })
       const rules = {
         otp: {
           required: helpers.withMessage("OTP is required", required),
          },
        };


        const validate = useVuelidate(rules, formData);
     
       const COMPANY_LOGO = computed(() => process.env.VUE_APP_COMPANY_LOGO ); 
       
       const submit =  () => {
            validate.value.$touch();
               if (!validate.value.$invalid) {
                  disabled.value=true
                  localStorage.setItem('otp', formData.otp)
                  store.verify_otp({otp:formData.otp,email:localStorage.getItem('verifyemail')}).then(res=>{
                   if(res==true){ 
                        router.push({path:'/comfirm_password'});
                   }
                   disabled.value=false;
				  })

            }
        };
  
    onMounted(()=>{
		 let url_string = window.location.href
     let url = new URL(url_string);
     let e = url.searchParams.get("request_id");
     let email =url.searchParams.get("email");
     if(e){
       formData.otp =e
     }
     localStorage.setItem('email',email)
	})    


// const { computed }=require("@vue/runtime-core");

        return{
		       disabled,
           validate,
           submit,
           COMPANY_LOGO
        }
    },
}
</script>
<style >
.errorToast{
	background: red !important;
}
</style>