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
                  <h1 class="mt-5">30</h1>
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
                    src="assets/admin/media/organizations-dashboard-auditfirm-icon.png"
                  />
                  <h1 class="mt-5">10</h1>
                  <div class="text-white fw-bolder fs-2 mb-2">
                    Registered Audit Firm
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
    <!--begin::Footer-->
    <div class="footer py-0 d-flex flex-lg-column" id="kt_footer">
      <!--begin::Container-->
      <div
        class="
          container-xxl
          d-flex
          flex-column flex-md-row
          align-items-center
          justify-content-between
        "
      >
        <!--begin::Copyright-->
        <div class="text-dark order-2 order-md-1">
          <p class="text-gray-800 text-muted text-hover-primary mb-0">
            2022© {{COMPANY_Name_2}}
          </p>
        </div>
        <!--end::Copyright-->
        <!--begin::Menu-->
        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li class="menu-item">
            <a href="#" class="menu-link px-2">About</a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link px-2">Support</a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link px-2">Contact</a>
          </li>
        </ul>
        <!--end::Menu-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script>
import OrgInfo from "@/components/dashboard/OrgInfo.vue";
import OrgSingUpCard from "@/components/dashboard/OrgSingUpCard.vue";
import OrgProjectsCard from "@/components/dashboard/OrgProjectsCard.vue";
import OrgStartedCard from "@/components/dashboard/OrgStartedCard.vue";
import {computed} from 'vue'
export default {
  name: "DashboardCom",
  components: {
    OrgInfo,
    OrgSingUpCard,
    OrgProjectsCard,
    OrgStartedCard,
  },
  setup(){
const COMPANY_Name_2 = computed(() => process.env._2 ); 
// console.log("Company name",COMPANY_Name_2.value)
    return{
COMPANY_Name_2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>