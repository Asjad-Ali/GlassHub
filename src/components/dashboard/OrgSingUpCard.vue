<template>
  <div class="col-xl-4" v-if="Account_type!=2">
    <!--begin::List Widget 4-->
    <div class="card card-xl-stretch mb-xl-8">
      <!--begin::Beader-->
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-3 mb-1"
            >You may also signup as</span
          >
        </h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body p-10 d-flex flex-column">
        <!--begin::Stats-->
        <div class="mb-0">
          <!--begin:Option-->
          <label class="d-flex flex-stack mb-5 cursor-pointer" v-if="Account_type!=0">
            <!--begin:Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="account_plan"
                    :value="0"
                    v-model="signUpAccount"
                    :disabled="auth.account.find(({Account_type}) =>Account_type==0)"
                  />
                </span>
              </span>
              <!--end::Icon-->
              <!--begin::Description-->
              <span class="d-flex flex-column " >
                <span class="fw-bolder text-gray-800 text-hover-primary fs-5" :class="auth.account.find(({Account_type}) =>Account_type==0)?'text-muted':''"
                  >Organization</span
                >
              </span>
              <!--end:Description-->
            </span>
            <!--end:Label-->
            <!--begin:Input-->
            <!--end:Input-->
          </label>
          <!--end::Option-->

          <!--begin:Option-->
          <label class="d-flex flex-stack mb-5 cursor-pointer" v-if="Account_type!=3">
            <!--begin:Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="account_plan"
                    :value="3"
                    v-model="signUpAccount"
                     :disabled="auth.account.find(({Account_type}) =>Account_type==3)"
                  />
                </span>
              </span>
              <!--end::Icon-->
              <!--begin::Description-->
              <span class="d-flex flex-column">
                <span class="fw-bolder text-gray-800 text-hover-primary fs-5" :class="auth.account.find(({Account_type}) =>Account_type==3)?'text-muted':''"
                  >Audit Firm</span
                >
              </span>
              <!--end:Description-->
            </span>
            <!--end:Label-->
            <!--begin:Input-->
            <!--end:Input-->
          </label>
          <!--end::Option-->
          <!--begin:Option-->
          <label class="d-flex flex-stack mb-5 cursor-pointer" v-if="Account_type!=1">
            <!--begin:Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="account_plan"
                    :value="1"
                    v-model="signUpAccount"
                    :disabled="auth.account.find(({Account_type}) =>Account_type==1)"
                  />
                </span>
              </span>
              <!--end::Icon-->
              <!--begin::Description-->
              <span class="d-flex flex-column">
                <span class="fw-bolder text-gray-800 text-hover-primary fs-5" :class="auth.account.find(({Account_type}) =>Account_type==1)?'text-muted':''"
                  >Supplier</span
                >
              </span>
              <!--end:Description-->
            </span>
            <!--end:Label-->
            <!--begin:Input-->
            <!--end:Input-->
          </label>
          <label class="d-flex flex-stack mb-5 cursor-pointer" v-if="Account_type!=2 && Account_type==0">
            <!--begin:Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="account_plan"
                    :value="2"
                    v-model="signUpAccount"
                     :disabled="auth.account.find(({Account_type}) =>Account_type==2)"
                  />
                </span>
              </span>
              <!--end::Icon-->
              <!--begin::Description-->
              <span class="d-flex flex-column">
                <span class="fw-bolder text-gray-800 text-hover-primary fs-5" :class="auth.account.find(({Account_type}) =>Account_type==2)?'text-muted':''"
                  >Freelancer</span
                >
              </span>
              <!--end:Description-->
            </span>
            <!--end:Label-->
            <!--begin:Input-->
            <!--end:Input-->
          </label>
          <!--end::Option-->
          <!--begin:Option-->
          <label class="d-flex flex-stack mb-5 cursor-pointer" v-if="Account_type!=4">
            <!--begin:Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="account_plan"
                    :value="4"
                    v-model="signUpAccount"
                     :disabled="auth.account.find(({Account_type}) =>Account_type==4)"
                  />
                </span>
              </span>
              <!--end::Icon-->
              <!--begin::Description-->
              <span class="d-flex flex-column">
                <span class="fw-bolder text-gray-800 text-hover-primary fs-5" :class="auth.account.find(({Account_type}) =>Account_type==4)?'text-muted':''"
                  >Regulator</span
                >
              </span>
              <!--end:Description-->
            </span>
            <!--end:Label-->
            <!--begin:Input-->
            <!--end:Input-->
          </label>
          <!--end::Option-->
        </div>
      </div>
      <div class="col-md-6 text-right mb-5">
        <button  class="btn btn-primary" @click="signup">Get Started</button>
      </div>
      <!--end::Body-->
    </div>
    <!--end::List Widget 4-->
  </div>
</template>

<script setup>
 import {Account} from '@/store/SwitchAccount'
 import {useAuthStore} from '@/store/auth'
import { computed, onMounted, ref } from 'vue'
import showToast from '@/global_components/Toast/useToast'
 const SwitchAccount = Account()
 const auth = useAuthStore()
 const Account_type = ref('')
//  const Account_type = computed(()=>SwitchAccount.Account_detail[0]?.Account_type);

 const signUpAccount = ref(null)
 const user_id = computed(()=>auth.user.User_id) 

 const signup =()=>{
  if(signUpAccount.value!=null){
    window.location.href=`https://signup.glasshub.ai/sign-up-with?account_type=${signUpAccount.value}&user_id=${user_id.value}`
  }else
  {
    showToast('please select account first')
  }
 }

 onMounted(()=>{
     Account_type.value =auth.account?.filter( (data) => { return data.RegD_id==auth.user.RegD_id})[0].Account_type;
 })
</script>

<style  scoped>
.card-body .text-muted{
  color: #a1a5b7!important;
  cursor:no-drop;
}
</style>