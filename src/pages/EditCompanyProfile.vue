<template>
  <div
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled"
  >
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
              class="d-flex flex-column-fluid align-items-start container-xxl">
              <!--begin::Post-->
              <div class="content flex-row-fluid" id="kt_content">
                 <profile-header :edit="Cdata"></profile-header>
                 <profile-detail :edit="Cdata"></profile-detail>
              </div>
            </div>
          </div>
          <!--end::Container-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProfileHeader from "@/components/profile/edit-company-profile/ProfileHeader.vue"
import ProfileDetail from "@/components/profile/edit-company-profile/ProfileDetail.vue"
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import showToast from '@/global_components/Toast/useToast'
import Api from '@/APi/axios_instance'
import { computed, onMounted, ref ,watch} from "vue"

const Cdata = ref(null)
const auth = useAuthStore()
const SwitchAccount = computed(()=> Account().Account_detail[0])

watch(SwitchAccount,()=>{
fatchCompanyData()
})
const fatchCompanyData = async()=>{
await Api.get('/api/RegistrationSetting/getEditComp/'+SwitchAccount.value.RegD_id)
 .then(reponse=>{
     Cdata.value= reponse.data;
 })
.catch(error=>{
        showToast('Internal server error')
      })

}

onMounted(()=>{
fatchCompanyData()
})
</script>
