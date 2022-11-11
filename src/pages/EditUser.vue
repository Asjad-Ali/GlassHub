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
              class="d-flex flex-column-fluid align-items-start container-xxl"
            >
              <!--begin::Post-->
              <div class="content flex-row-fluid" id="kt_content">
                  <org-header></org-header>
                  <EditUserRole></EditUserRole>
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
import OrgHeader from "@/components/edit-user/OrgHeader.vue"
import EditUserRole from "@/components/edit-user/EditUserRole.vue"
export default {
    components: {
  OrgHeader,
  EditUserRole
    },
    setup() {
        
    }
}
</script>