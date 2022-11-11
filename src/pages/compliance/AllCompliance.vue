<template>
  <!--begin::Main-->
  <!--begin::Root-->
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Toolbar-->
         <div class="bg-lg py-5 py-lg-5" id="kt_toolbar"> 
          <!--begin::Container-->
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <!--begin::Row-->
            <div class="row gy-0 gx-10">
              <div class="col-xl-9 pd-30 bg-w pt-5">
                <all-compliance> </all-compliance>
              </div>
              <div class="col-xl-3 aside-profile-details">
                <projects-help-text  :helpText="regStore?.helpText"></projects-help-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  
</template>

<script>
import AllCompliance from "@/components/compliance/AllCompliance.vue";
import ProjectsHelpText from "@/components/global/HelpText.vue";
import {useRegisterationStore } from "@/store/registeration.store";
import {onMounted} from 'vue'
import {Account} from '@/store/SwitchAccount'
export default {
  components: { AllCompliance, ProjectsHelpText },
  setup(){
    const Account_info = Account()
    const regStore = useRegisterationStore() 
    onMounted(()=>{
         regStore.loadRegistrationHelpText(`${Account_info.Account_detail[0].Account_type}/Compliance/null/null`)
    })

    return{
      regStore
    }
  }
};
</script>

<style>
</style>