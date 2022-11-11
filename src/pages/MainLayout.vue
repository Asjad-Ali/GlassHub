<template>
  <div class="d-flex flex-column flex-root h-100">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid h-100">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid h-100 " id="kt_wrapper"  style="background-color:#f7f7f7">
        <!--begin::Header-->
        <Header  />
        <router-view></router-view>
        <!--end::Header-->
        <!--begin::Toolbar-->
        <Footer />
      </div>
    </div>
    <!--begin::Chat drawer-->
    <ChatDrawer />
    <!--end::Chat drawer-->
    <div class="modal fade" tabindex="-1" id="getingstartedpopup">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="card-title fw-bolder text-dark">Getting Started</h3>
            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <!--end::Close-->
          </div>
          <div
            class="card card-xl-stretch mb-xl-8 Gettingstartedlinksdashboard"
          >
            <!--begin::Body-->
            <div class="card-body pt-10">
              <!--begin::Item-->
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="add-compliance.html"
                    >Set Registration Criteria for Supplier</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="add-compliance.html"
                    >Set Registration Criteria for Freelancer</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="add-compliance.html"
                    >Set Registration Criteria for Audit Firm</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="new_requests_suppliers.html"
                    >Register New Supplier</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="new_requests_freelancer.html"
                    >Register New Freelancer</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="new_requests_auditfirms.html"
                    >Register New Audit Firm
                  </a>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="add-certificate.html">Save Certificates</a>
                </div>
              </div>

              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <a href="payments-summary.html">Financial Summary</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/layouts/header/ManuHeader.vue";
import Footer from "@/layouts/footer/FooterMenu.vue";
import ChatDrawer from "@/layouts/chat/ChatDrawer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
    ChatDrawer,
  },
};
</script>