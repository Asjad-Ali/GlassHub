<template>
  <!--begin::Main-->
  <!--begin::Root-->
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Toolbar-->
        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <!--begin::Container-->
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <!--begin::Row-->
            <div class="row gy-0 gx-10">
              <div class="col-xl-9 bg-w pd-30">
                <div class="row">
                  <div class="col-md-6">
                    <h1 class="pb-2 mb-10">Transactions</h1>
                  </div>
                  <div class="col-md-6 mb-10">
                    <div class="mb-0">
                      <label class="form-label">Select Date</label>
                      <Datepicker v-model="date" range multiCalendars></Datepicker>
                    </div>
                  </div>
                </div>

                <div class="row ">
                  <div class="col-md-12">
                    <ul
                      class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6"
                    >
                      <li class="nav-item">
                        <router-link to="transactions"
                          ><a class="nav-link"
                            ><h5>Transactions</h5></a
                          ></router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link to="summary"
                          ><a class="nav-link active"><h5>Summary</h5></a></router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="store.loader" class="row">
                  <PageLoader />
                </div>
                <div v-else class="row">
                  <financial-summary></financial-summary>
                </div>
              </div>

              <div class="col-xl-3 aside-profile-details">
                <projects-help-text></projects-help-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProjectsHelpText from "@/components/projects/ProjectsHelpText.vue";
import FinancialSummary from "@/components/Summary/FinancialSummary.vue";
import Datepicker from '@vuepic/vue-datepicker';
import { financail} from '@/store/financialTransaction';
import '@vuepic/vue-datepicker/dist/main.css'
import {ref,watch,onMounted} from 'vue'
import PageLoader from '@/global_components/loader/PageLoader.vue';

const store= financail()
const date = ref();
const start_time = ref();
const end_time = ref();

watch(date,()=>{
start_time.value = date.value[0]
 end_time.value = date.value[1]
 store.getsummer({start_time:start_time.value.toISOString().substring(0, 10),end_time:end_time.value.toISOString().substring(0, 10)})
})


onMounted(()=>{
  store.getsummer({start_time:'null',end_time:'null'})
})
</script>

