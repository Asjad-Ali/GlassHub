<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <div class="row gy-0 gx-10">
              <!-- Timeline Section -->
              <div class="col-xl-3 aside-profile-details">
                <div class="card">
                  <div class="card card-xl-stretch">
                    <div class="card-header align-items-center border-0 mt-4">
                      <h3 class="card-title align-items-start flex-column">
                        <span class="fw-bolder mb-2 text-dark"
                          >Project Timeline </span
                        >
                      </h3>
                    </div>
                    <div class="card-body pt-5">
                      <div class="timeline-label">
                        <div class="timeline-item">
                          <div
                            class="timeline-label fw-bolder text-gray-800 fs-9"
                          >
                            10-02-2022
                            <span class="text-gray-800 fs-9">10:00</span>
                          </div>
                          <div class="timeline-badge">
                            <i class="fa fa-genderless text-warning fs-1"></i>
                          </div>
                          <div class="fw-bolder text-gray-800 ps-3">
                            Project Posted
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div
                            class="timeline-label fw-bolder text-gray-800 fs-9"
                          >
                            12-02-2022
                            <span class="text-gray-800 fs-9">10:00</span>
                          </div>
                          <div class="timeline-badge">
                            <i class="fa fa-genderless text-success fs-1"></i>
                          </div>
                          <div class="timeline-content d-flex">
                            <span class="fw-bolder text-gray-800 ps-3"
                              >20 Suppliers requests received</span
                            >
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div
                            class="timeline-label fw-bolder text-gray-800 fs-9"
                          >
                            13-02-2022
                            <span class="text-gray-800 fs-9">12:00</span>
                          </div>
                          <div class="timeline-badge">
                            <i class="fa fa-genderless text-danger fs-1"></i>
                          </div>
                          <div class="fw-bolder text-gray-800 ps-3">
                            You have send request for proposal to Design786
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div
                            class="timeline-label fw-bolder text-gray-800 fs-9"
                          >
                            14-02-2022
                            <span class="text-gray-800 fs-9">13:00</span>
                          </div>
                          <div class="timeline-badge">
                            <i class="fa fa-genderless text-primary fs-1"></i>
                          </div>
                          <div class="fw-bolder text-gray-800 ps-3">
                            You have received proposal from Design786
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="col-xl-9">
                <PageLoader class="mt-15" v-if="pageLoader" /> 
                <div v-else>
                  <div class="row">
                    <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
                        <li class="nav-item">
                            <a @click="tab = 1" class="nav-link cursor-pointer" :class="{'active': tab == 1}"><h3>Project Requirements </h3></a>
                        </li>
                        <li class="nav-item">
                            <a @click="tab = 2" class="nav-link cursor-pointer" :class="{'active': tab == 2}">
                              <h3 v-if="!store.bidDetails[0].Isdirect">Freelancer/Supplier</h3>

                              <h3 v-else-if="account[0].Account_type == 0" 
                                @click="router.push(`/reg-profile/${store.bidDetails[0].bid_send_to}`)" > 
                                {{ store.bidDetails[0].Is_freelancer_bid ? 'Freelancer' : 'Supplier' }} 
                                <span style="font-weight: 100;" v-if="store.bidDetails[0].bid_send_to_name">: 
                                  {{ store.bidDetails[0].bid_send_to_name }}
                                </span>
                              </h3>
                              
                              <h3 v-else @click="router.push(`/reg-profile/${store.bidDetails[0].RegD_id}`)"> Organizations  <span style="font-weight: 100;" >: {{ store.bidDetails[0].RegM_name }}</span> </h3>
                            </a>
                        </li>
                    </ul>
                  </div>
                  <div class="row bg-w pendingprojects_all_lists">
                    <div  class="tab-content" id="cureent_active_project_detail">
                      <DetailsTabOrg  v-show="account[0].Account_type == 0 && tab == 2" :projects="store.bidDetails" />
                      <DetailsTabSupFree v-show="account[0].Account_type != 0 && tab == 2" :projects="store.bidDetails" />
                      <ProjectRequirementsTab v-show="tab == 1" :projects="store.bidDetails" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectRequirementsTab from '@/components/projects/ProjectRequirementsTab.vue';
import DetailsTabSupFree from '@/components/projects/DetailsTabSupFree.vue';
import DetailsTabOrg from '@/components/projects/DetailsTabOrg.vue';
import { useRouter } from 'vue-router';
import { computed, onMounted, onUnmounted, ref } from '@vue/runtime-core';
import { useProjectStore } from '@/store/project.store';
import PageLoader from '@/global_components/loader/PageLoader.vue';
import { Account } from '@/store/SwitchAccount';
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

let pageLoader = ref(true)
const router = useRouter()
const store = useProjectStore()
const tab = ref(2)
const bid_By_Id = computed(() =>{
  return JSON.parse(localStorage.getItem('bid_By_Id'))
})
onMounted(() => {
    store.loadProjectDetails(bid_By_Id.value).then( () => {
    store.loadRFQDetails(bid_By_Id.value.Bid_id)
    pageLoader.value = false
    if(store.bidDetails.length==1){
      if(store.bidDetails[0].qutation_id){
        store.loadQuotationDetails(store.bidDetails[0].qutation_id)
      }
      if(store.bidDetails[0].PO_id){
        store.loadPODetails(store.bidDetails[0].PO_id)
      }
    }
  })
})

onUnmounted(() => {
  localStorage.removeItem('bid_By_Id')
  store.rfqDetails = []
  store.quotationDetails = []
  store.poDetails = []
})

</script>

