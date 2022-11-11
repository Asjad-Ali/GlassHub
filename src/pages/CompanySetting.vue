<template>
  <div
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled"
  >
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          <!--begin::Container-->
          <div class="bg-lg">
            <div
              id="kt_content_container"
              class="d-flex flex-column-fluid align-items-start container-xxl"
            >
              <!--begin::Post-->
              <div class="content flex-row-fluid" id="kt_content">
              <com-setting-header  :company_info="company_info"></com-setting-header>
              <company-setting-detail></company-setting-detail>   
              <deactivate-account-setting></deactivate-account-setting>  
              </div>
            </div>
          </div>
          <!--end::Container-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComSettingHeader from "@/components/settings/CompanySetting/ComSettingHeader.vue"
import CompanySettingDetail from "@/components/settings/CompanySetting/CompanySettingDetail.vue"
import DeactivateAccountSetting from "@/components/settings/CompanySetting/DeactivateAccountSetting.vue"
import showToast from '@/global_components/Toast/useToast'
import Api from '@/APi/axios_instance'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import { mapState } from 'pinia'
export default {
    components: {
      ComSettingHeader,
      CompanySettingDetail,
      DeactivateAccountSetting  
    },
   data(){
      return{
       company_info:'',
    }
  },

   computed: {
    ...mapState(Account, ['Account_detail']),
  },
 watch:{
    Account_detail(){
      this.getSetting()
    }
 },

methods:{
     async getSetting(){
          await Api.get('/api/profile/comp-profile?RegD_id='+this.Account_detail[0].RegD_id)
          .then(response =>{
              if(response.status==200){
                this.company_info=response.data[0][0]
              }
          })
          .catch(error=>{
             showToast('internal server error')
          })
       },

},

  mounted(){
    this.getSetting()
  }
};
</script>