<template>
  <div class="col-xl-4">
    <!--begin::List Widget 2-->
    <div class="card card-xl-stretch mb-xl-8 Gettingstartedlinksdashboard">
      <!--begin::Header-->
      <div class="card-header border-0">
        <h3 class="card-title fw-bolder text-dark">Getting Started</h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body pt-2" style="height: 290px;overflow: auto;">
        <!--begin::Item-->
          <template v-for="(qmanu, index) in header_manu" :key="index">
                   <template  v-if="qmanu.quick_link">
        <div class="d-flex align-items-center mb-3">
          <div class="flex-grow-1">
             <router-link :to="'/' + qmanu.Menue_location">  <a
              >{{qmanu.Menue_label}}</a
            ></router-link>
          </div>
        </div>
                   </template>
          </template>
        <!-- <div class="d-flex align-items-center mb-3">
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
            <a href="new_requests_suppliers.html">Register New Supplier</a>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div class="flex-grow-1">
            <a href="new_requests_freelancer.html">Register New Freelancer</a>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div class="flex-grow-1">
            <a href="new_requests_auditfirms.html">Register New Audit Firm </a>
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
        </div> -->
      </div>
      <!--end::Body-->
    </div>
    <!--end::List Widget 2-->
  </div>
</template>

<script setup>
import {computed} from 'vue'
import { useAuthStore } from "@/store/auth";
const auth = useAuthStore()
  const header_manu = computed(()=>{
    return auth.header_manu
  })

</script>

<style lang="scss" scoped>
</style>