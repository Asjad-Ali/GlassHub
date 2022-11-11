<template>
  <div>
    <!--begin::Main-->
    <!--begin::Root-->
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
                <!--begin::Navbar-->
                <div class="text-right mb-5 pt-20px edit_btn_link" v-if="pre?.Can_edit">
                  <router-link to="edit-company-profile"><a class="btn btn-sm btn-primary me-2">Edit Profile</a></router-link>
                </div>
                <profile-header :company_info="company_info"></profile-header>
                <profile-detail :company_info="company_info"></profile-detail>
                <VerifiedSMSEmail :company_info="company_info"></VerifiedSMSEmail>
                <profile-documents :RegistrationDocument="RegistrationDocument" :AdditionalDoc="AdditionalDoc"></profile-documents>
                <connected-accounts></connected-accounts>
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
import ProfileHeader from "@/components/profile/company-profile/ProfileHeader.vue"
import ProfileDetail from "@/components/profile/company-profile/ProfileDetail.vue"
import VerifiedSMSEmail from "@/components/profile/company-profile/VerifiedSMS&Email.vue";
import ProfileDocuments from "@/components/profile/company-profile/ProfileDocuments.vue";
import ConnectedAccounts from "@/components/profile/company-profile/ConnectedAccounts.vue";
import {profile} from '@/store/profile'
import { mapState ,mapActions} from 'pinia'
import permission from '@/_helper/Permission'
export default {
  components: {
    ProfileHeader,
    ProfileDetail,
    VerifiedSMSEmail,
    ProfileDocuments,
    ConnectedAccounts,
  },
   data(){
      return{
       pre:'',
    }
  },

   computed: {
    ...mapState(profile,['company_info','RegistrationDocument','AdditionalDoc']),
    ...mapActions(profile,['getSetting'])
  },


  mounted(){
    this.getSetting
    this.pre=permission()
  }
};
</script>
