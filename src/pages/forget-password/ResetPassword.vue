<template>
    
		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid">
					<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-10">
					<!--begin::Logo-->
					<a class="mb-12 loginlogo">
						<img :src="COMPANY_LOGO" />
					</a>
						<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
							<div class="text-center mb-10">
								<h1 class="text-dark mb-3">Forgot Password?</h1>
								<div class="text-gray-400 fw-bold fs-4">Enter your email to reset your password.</div>
							</div>
								<div class="fv-row mb-10">
								<label class="form-label fs-6 fw-bolder text-dark">Email</label>
								<input  type="email" name="email" readonly v-model.trim="validate.email.$model"
                 class="form-control form-control-lg form-control-solid" placeholder="email@yourdomain.com" autocomplete="off" />
								<!-- <div v-if="validate.email.$error">
                                      <div v-for="(error, index) in validate.email.$errors" :key="index" class="text-danger	mt-2" >
                                        {{ error.$message }}
                                      </div>
								</div> -->
                <span  class="text-danger">{{message}}</span>
								</div>
								
								<div class="text-center">
                                 <button :disabled="disabled" type="button" class="btn btn-lg btn-primary w-100 mb-5" @click="submit()"> Submit <SLoader v-if="disabled"></SLoader></button>
                                 <router-link to="/login"><button class="btn btn-lg btn-bg-light w-100 mb-5"> Cancel</button></router-link>
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
import { required, email ,helpers} from "@vuelidate/validators";
import {reactive,ref,computed,onMounted} from 'vue'
import showToast from '@/global_components/Toast/useToast'
import SLoader from '@/global_components/loader/SLoader.vue'
import {useRouter} from 'vue-router'

export default {
    components:{
        SLoader
    },
    setup() {
		    const router =useRouter();
        const store = ForgetPassword();  
        const disabled = ref(false)
        const message = ref('')
        const formData = reactive({
             email:''
        })
      const COMPANY_LOGO = computed(() => process.env.VUE_APP_COMPANY_LOGO ); 
      
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

    //   const  OfficailEmail = (value)=> {
    //   if( value.includes('@gmail') || value.includes('@yahoow') || value.includes('@hotemail'))
    //   {
    //     return false
    //   }else{
    //     return true
    //   }
    // };

       const rules = {
         email: {
           email,
           VerifyEmail,
          //  OfficailEmail:helpers.withMessage('Put valid and business email address.',OfficailEmail),
           required: helpers.withMessage("Email is required", required),
          },
        };

        const validate = useVuelidate(rules, formData);
    
      //  const VerifyEmail= ()=>{
         
      //  }
       const submit = () => {

            validate.value.$touch();
               if (!validate.value.$invalid && !message.value) {
                  disabled.value=true
                  store.send_email(formData.email).then(res=>{
					  if(res==true){
                      disabled.value=false
                      router.push('/password-change')
					  }else{
              disabled.value=false
              showToast(res)
					  }  
				  })
            }
        };
onMounted(()=>{
  formData.email = localStorage.getItem('verifyemail')
})

        return{
			     disabled,
           validate,
           submit,
           message,
           COMPANY_LOGO
        }
    },
}
</script>
<style scoped>
.errorToast{
	 background: red !important;
}
</style>