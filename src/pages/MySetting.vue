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
              <setting-header></setting-header>
              <setting-detail></setting-detail>
              <sign-in-methods></sign-in-methods>
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
import SettingHeader from "@/components/settings/my-setting/SettingHeader.vue"
import SettingDetail from "@/components/settings/my-setting/SettingDetail.vue"
import SignInMethods from "@/components/settings/my-setting/SignInMethods.vue"
export default {
    components: {
       SettingHeader,
       SettingDetail,
       SignInMethods
    },
    setup() {
        
    },
}
</script>