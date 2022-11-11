
<template>

		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid">
				<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-10">
					<a class="mb-12 loginlogo">
						<img :src="COMPANY_LOGO" />
					</a>
					<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
							<form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
							<div class="text-center mb-10">
								<h1 class="text-dark mb-3">Forgot Password?</h1>
								<div class="text-gray-400 fw-bold fs-4">Enter your new password </div>
							</div>
							<div class="fv-row mb-10">
								<label class="form-label fs-6 fw-bolder text-dark">Password</label>
								<input  type="password"  v-model.trim="validate.password.$model"
                                  :class="{ 'border border-danger': validate.password.$error }" class="form-control form-control-lg form-control-solid" placeholder="*******" autocomplete="off" />
								<div v-if="validate.password.$error">
                                      <div v-for="(error, index) in validate.password.$errors" :key="index" class="text-danger	mt-2" >
                                        {{ error.$message }}
                                      </div>
								</div>
							</div>
                            <div  class="fv-row mb-10">
                                <label class="form-label fs-6 fw-bolder text-dark"> Comfirm Password</label>
									<input  type="password" v-model.trim="validate.comfirm_password.$model"
                                  :class="{ 'border border-danger': validate.comfirm_password.$error }" class="form-control form-control-lg form-control-solid" placeholder="*******" autocomplete="off" />
								<div v-if="validate.comfirm_password.$error">
                                      <div v-for="(error, index) in validate.comfirm_password.$errors" :key="index" class="text-danger	mt-2" >
                                        {{ error.$message }}
                                      </div>
								</div>
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
import { required ,helpers, sameAs,minLength} from "@vuelidate/validators";
import {reactive,ref,computed, onMounted} from 'vue'
import SLoader from '@/global_components/loader/SLoader.vue'
import {useRouter} from 'vue-router'
import showToast from '@/global_components/Toast/useToast'
export default {
    components:{
        SLoader
    },
    setup() {
		const router= useRouter();
        const passwpord_lentgh= ref(null);
        const error_message= ref('');
        const store = ForgetPassword();  
        const disabled = ref(false)
        const formData = reactive({
		         comfirm_password:'',
             password:'',
        })
      let pass2 =helpers.regex()
      const  passwordHint=()=>{
          store.setRegistrationSetting()
            store.setRegistrationSetting().then((resp) => {
              if(resp.data && resp.data.RegistrationSettingM &&  resp.data.RegistrationSettingM.length > 0){
                  let validationData=resp.data.RegistrationSettingM[0]
                  if(validationData.Psw_type==0){
                    pass2 = helpers.regex();
                     passwpord_lentgh.value= validationData.Psw_length
                  }else if(validationData.Psw_type==1){
                     pass2 = helpers.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*]+)$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one letter and one number"
                  }else if(validationData.Psw_type==2){
                    pass2 = helpers.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one special character, one number, one letter and uppercase letter"
                  }
              }
            })
        }
       
        const rules = computed(()=>{
		   return {
          password: {
           minLength:helpers.withMessage(`Password must contain at least ${passwpord_lentgh.value} digits` , minLength(passwpord_lentgh.value)),
           pass2:helpers.withMessage(`${error_message.value}`,pass2),
           required: helpers.withMessage("password is required", required),
          },
		  comfirm_password:{
             required: helpers.withMessage("comfirm_password is required", required),
			       sameAs:sameAs(formData.password),
		  }
	   }
       
        });

        const validate = useVuelidate(rules, formData);
        const COMPANY_LOGO = computed(() => process.env.VUE_APP_COMPANY_LOGO ); 

       const submit = () => {
            validate.value.$touch();
               if (!validate.value.$invalid) {
                  disabled.value=true
                  store.comfirm_password(formData.password).then(res=>{
          
					  disabled.value=false
            })
        }
	 }
     onMounted(()=>{
        passwordHint()
     })



        return{
			disabled,
           validate,
           submit,
           COMPANY_LOGO,
        }
    }
}
</script>