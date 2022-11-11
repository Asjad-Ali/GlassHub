<template>
  <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="container-xxl py-5">
      <!--begin::Row-->
      <div class="row gy-0 gx-10">
        <OrgInfo />
        <div class="col-xl-9">
          <div class="row g-5 g-xl-8 organization-dashboard-firstrow">
            <div class="col-xl-4">
              <!--begin::Statistics Widget 5-->
              <a
                href="#"
                class="card bg-primary hoverable card-xl-stretch mb-xl-8"
              >
                <!--begin::Body-->

                <div class="card-body">
                  <img
                    src="assets/admin/media/organizations-dashboard-supplier-icon.png"
                  />
                  <h1 class="mt-5"> { } </h1>
                  <div class="text-white fw-bolder fs-2 mb-2">
                    Registered Suppliers
                  </div>
                </div>
                <!--end::Body-->
              </a>
              <!--end::Statistics Widget 5-->
            </div>
            <div class="col-xl-4">
              <!--begin::Statistics Widget 5-->
              <a
                href="#"
                class="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8"
              >
                <!--begin::Body-->
                <div class="card-body">
                  <img
                    src="assets/admin/media/auditfirm.png"
                  />
                  <h1 class="mt-5"> { }  </h1>
                  <div class="text-white fw-bolder fs-2 mb-2">
                    Registered Audit Firms
                  </div>
                </div>
                <!--end::Body-->
              </a>
              <!--end::Statistics Widget 5-->
            </div>
            <div class="col-xl-4">
              <div id="myNav" class="overlay">
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onclick="closeNav()"
                  >&times;</a
                >
                <div class="overlay-content">
                  <div
                    class="card-body mb-xl-8"
                    style="
                      background-image: url('assets/img/Picture1.png');
                      padding: 19rem 1rem;
                    "
                  ></div>
                </div>
              </div>
              <a href="#" class="card hoverable card-xl-stretch mb-xl-8">
                <div
                  class="card-body"
                  style="
                    background-image: url('assets/img/Picture1.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                  "
                >
                  <!--span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>-->
                </div>
                <button class="btn btn-transparent" onclick="openNav()">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </button>
              </a>
            </div>
            <div class="row gy-5 g-xl-8 dashboard-stats-2ndrow">
              <OrgSingUpCard />
              <OrgProjectsCard />
              <OrgStartedCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import OrgInfo from "@/components/dashboard/OrgInfo.vue";
import OrgSingUpCard from "@/components/dashboard/OrgSingUpCard.vue";
import OrgProjectsCard from "@/components/dashboard/OrgProjectsCard.vue";
import OrgStartedCard from "@/components/dashboard/OrgStartedCard.vue";

export default {
  name: "DashboardCom",
  components: {
    OrgInfo,
    OrgSingUpCard,
    OrgProjectsCard,
    OrgStartedCard,
  },
   
};
</script>

<style lang="scss" scoped>
</style>