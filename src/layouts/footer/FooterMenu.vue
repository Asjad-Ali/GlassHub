<template>
  <div class="footer py-0 d-flex flex-lg-column mt-auto" id="kt_footer" style="background: white;">
    <!--begin::Container-->
    <div
      class="
        container-xxl
        d-flex
        flex-column flex-md-row
        align-items-center
        justify-content-between
      "
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <p class="text-gray-800 text-muted text-hover-primary mb-0">
          2022© {{COMPANY_Name_2}}
        </p>
      </div>
      <!--end::Copyright-->
      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <a  @click="TremCondition(4)" class="menu-link px-2">About</a>
        </li>
        <li class="menu-item">
          <a  @click="TremCondition(5)"  class="menu-link px-2">Support</a>
        </li>
        <li class="menu-item">
          <a   @click="TremCondition(3)" class="menu-link px-2">Contact</a>
        </li>
      </ul>
      <!--end::Menu-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script setup>
// import {Account} from '@/store/SwitchAccount'
import {useAuthStore} from '@/store/auth'
import {useRouter} from 'vue-router'
const { computed }=require("@vue/runtime-core");
// const account = Account()
const auth = useAuthStore()
const router = useRouter()
// const Acc_id = computed(()=>{
//   return  account.Account_detail[0].Account_type
// })
const COMPANY_Name_2 = computed(() => process.env.VUE_APP_COMPANY_Name_2 ); 
console.log("Company name",COMPANY_Name_2.value)

const TremCondition=(page_id)=>{
  router.push('/dashboard_footer')
  auth.FatchTerm({acc_id:5,page_id:page_id})
}
</script>