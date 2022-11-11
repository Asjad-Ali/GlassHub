<template>
  <div
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
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
                 <profile-header  :user_info="user_info"></profile-header>
                 <profile-detail  :user_info="user_info"></profile-detail>
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
import ProfileHeader from "@/components/profile/edit-my-profile/ProfileHeader.vue"
import ProfileDetail from "@/components/profile/edit-my-profile/ProfileDetail.vue"
import {profile} from '@/store/profile'
import {computed, onMounted} from 'vue'

export default {
    components: {
        ProfileHeader,
        ProfileDetail
    },
       setup() {
        const profileStore = profile()
        const user_info = computed(()=>{
          return profileStore.user_detail
        })
        onMounted(()=>{
         profileStore.GetUser()
        })
        return{
            user_info
        }
    },
};
</script>
