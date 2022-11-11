<template>
  <!--begin::Main-->
  <!--begin::Root-->
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <!--begin::Container-->
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <!--begin::Row-->
            <div class="row gy-0 gx-10">
              <div class="col-xl-9 pd-30 bg-w">
                <div class="row">
                  <div class="col-md-8">
                    <h1 class="pb-2">Regulators Registration</h1>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <ul
                      class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6"
                    >
                      <li class="nav-item">
                        <router-link to="regulator_register"><a class="nav-link active" 
                          ><h5>Registered</h5></a
                        ></router-link>
                      </li>
                      <li class="nav-item">
                       <router-link to="regulator_new_request"> <a
                          class="nav-link"
                          ><h5>New Requests</h5></a
                        ></router-link>
                      </li>
                      <li class="nav-item">
                      <router-link to="regulator_request_registration">  <a class="nav-link " 
                          ><h5>Requests Registration</h5></a
                        ></router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <RegisteredList />             
                </div>

              <div class="col-xl-3 aside-profile-details">
                <HelpText :helpText="store.helpText" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupplierChat />
    </div>
  </div>
</template>

<script setup>
import HelpText from "@/components/global/HelpText.vue"
import SupplierChat from "@/components/suppliers/SupplierChat.vue"
import { computed, onMounted, reactive } from "vue";
import { useRegisterationStore } from '@/store/registeration.store'
import RegisteredList from "@/components/Registeration/RegisteredList.vue";
import { useRoute } from "vue-router";
import { Account } from "@/store/SwitchAccount";
const store = useRegisterationStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const data = reactive({
    RegD_id: account.value[0]?.RegD_id,
    Account_id:'',
    registred_status:'',
    PageNo: 1,
    RowNo: 10
})
const route = useRoute()
const currentPath = computed(() => route.path)
if(currentPath.value == "/suppliers_register"){
    data.Account_id = 1
} else if(currentPath.value == "/freelancer_register"){
    data.Account_id = 2
}else if(currentPath.value == "/auditFirm_register"){
    data.Account_id = 3 
}else if(currentPath.value == "/regulator_register"){
    data.Account_id = 4
}else{
    data.Account_id = 0
}
 

onMounted(() => {
   store.requestRegistrationList = []
  store.suggestedList = [],
  store.showOops = false
  store.loadRegistrationList(data)
  store.loadRegistrationHelpText(`${account.value[0].Account_type}/Regulator/Registered/null`)
} )
</script>