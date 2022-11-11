<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <div id="kt_toolbar_container" class="container-xxl py-5">
              <div class="row gy-0 gx-10">
                  <div class="col-xl-12 bg-w pd-30">
                      <h2 class="mb-4">All Audits</h2>
                      <div class="row">
                          <div class="col-md-12">
                              <ul class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6">
                                  <li class="nav-item">
                                    <router-link to="all_audits">
                                      <a class="nav-link active">
                                        <h5>All Audits</h5>
                                      </a>
                                    </router-link>
                                  </li>
                                  <li class="nav-item">
                                    <router-link to="pending_audit">
                                      <a class="nav-link">
                                        <h5>Pending</h5>
                                      </a>
                                    </router-link>
                                  </li>
                                  <li class="nav-item">
                                    <router-link to="Inprocess_audit">
                                      <a class="nav-link">
                                        <h5>In Process</h5>
                                      </a>
                                    </router-link>
                                  </li>
                                  <li class="nav-item">
                                  <router-link to="audits_cancelled">
                                      <a class="nav-link ">
                                      <h5>Cancelled</h5>
                                      </a>
                                  </router-link>
                                  </li>
                                  <li class="nav-item">
                                    <router-link to="completed_audit">
                                      <a class="nav-link">
                                        <h5>Completed</h5>
                                      </a>
                                    </router-link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <PageLoader v-if="store.loader"/>
                      <div v-else-if="store.auditList.length">
                        <AllAuditList :auditList="store.auditList"  />
                          <div style="display:flex ; justify-content:center; margin-top:10px">
                              <v-pagination v-if="store.totalPages >= 1"
                              v-model="data.PageNo"
                              :pages="store.totalPages"
                              :range-size="1"
                              active-color="#DCEDFF"
                              @update:modelValue="loadAuditListing"
                              />
                          </div>
                      </div>
                      <RecordNotAvailable v-else />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { useAuditStore } from '@/store/audit.store';
import {computed, onMounted, ref } from 'vue'
import PageLoader from '@/global_components/loader/PageLoader.vue';
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import { Account } from '@/store/SwitchAccount';
import AllAuditList from '@/components/audit/supplier/AllAuditList.vue';


const store = useAuditStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const data = ref({
  audit_status_id: null,
  Account_type: 1,
  RegD_id: account.value[0].RegD_id,
  PageNo:1,
  RowNo: 10,
  search: null
})
const loadAuditListing = () =>{
  store.loadAuditList(data.value)
}
onMounted(() =>{
  store.loadAuditList(data.value)
})
</script>


