<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <div class="row gy-0 gx-10">
              <div class="col-xl-9 bg-w pd-30 pendingprojects_all_lists">
                   <div class="row mb-10">
                      <div class="col-md-8">
                          <h1 class="pb-2">Completed Projects</h1>    
                      </div>
                      <div v-if="account[0].Account_type == 0" class="col-md-4 text-right">
                          <router-link to="/project_quotation" class="btn btn-primary">Post Project</router-link>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                            <ul class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6">

                              <li class="nav-item">
                                  <router-link to="/all_projects"><a class="nav-link"><h5>All</h5></a></router-link> 
                              </li>                            
                              <li class="nav-item">
                                <router-link to="/pending_projects"> <a class="nav-link "><h5>Pending</h5></a></router-link> 
                              </li>
                              <li  class="nav-item">
                                  <router-link to="/Inprocess_projects"><a class="nav-link"><h5>In Process</h5></a></router-link> 
                              </li>  
                              <li class="nav-item">
                                  <router-link to="/complete_projects"> <a class="nav-link active" ><h5>Completed </h5></a></router-link>

                              </li>
                              <li class="nav-item">
                                  <router-link to="/cancelled_projects">  <a class="nav-link" ><h5>Cancelled</h5></a></router-link>

                              </li>
                          </ul>
                      </div>
                  </div>
                <div class="row">
                <PageLoader v-if="store.loader" />
                <div v-else-if="store.bidProjectList.length">
                    <div class="table-responsive">
    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
        <thead>
            <tr class="fw-bolder text-muted">
                <th>ID</th>
                <th>Date</th>
                <th class="min-w-150px">Project Title</th>
                <th class="min-w-140px">Category</th>
                <th class="min-w-140px">Assigned Supplier</th>
                <th class="min-w-140px">Rating</th>
                <th class="min-w-140px" v-if="account[0].Account_type == 1">Dispute</th>
                <th class="min-w-140px" v-if="account[0].Account_type != 1">Evaluate Supplier</th>
                <th class="min-w-100px">Status</th>
                <th class="min-w-100px text-end">View Details</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(project) in store.bidProjectList" :key="project">
                <td> 
                    <span class="cursor-pointer text-primary" @click="openBidDetail(project)">
                        {{ project.RFQ_code }}
                    </span>
                </td>                     
                <td> {{ project.start_date.substring(0, 10) }} </td>
                <td>
                    <span class="text-muted fw-bold text-muted d-block fs-7"> {{ project.Bid_title }} </span>
                </td>
                <td>
                    <span class="text-muted fw-bold text-muted d-block fs-7">{{ project.Category_name }}</span>
                </td>
                <td>
                    <a href="#"><span class="text-muted fw-bold text-muted d-block fs-7"> {{ project.Supplier_name }} </span></a>
                </td>
                <td>
                    <a href="#" @click="Show_starrating_Model(project)">Rate Now</a>
                </td>
                <td class="chat_or_message_with_supplier" v-if="account[0].Account_type == 1">
                    <a href="#"  @click="Show_dispute_reason_Model(project)"><i class="fa fa-exclamation-circle" style="color: green"></i></a>
                </td>
                <td class="chat_or_message_with_supplier" v-if="account[0].Account_type != 1">
                    <a href="#"  @click="Show_eveluate_Model(project)" data-bs-toggle="modal" data-bs-target="#evaluatesupplier"><i class="fa fa-check-square" style="color: #50cd89"></i></a>
                </td>
                <td>
                    <span class="badge badge-success"> Completed </span>
                </td>
                <td class="text-end view_pending_project">
                    <span @click="openBidDetail(project)">
                        <i class="fa fa-eye cursor-pointer" aria-hidden="true"></i>
                    </span>
                </td>
            </tr>
        </tbody>
        <!--end::Table body-->
    </table>
    <div style="display:flex ; justify-content:center; margin-top:10px">
        <v-pagination v-if="store.totalPages >= 1"
        v-model="projectListing.PageNo"
        :pages="store.totalPages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="loadProjectListing"
        />
    </div> 
</div>
                </div>                 
                    <RecordNotAvailable v-else  /> 
                </div>
              </div>
              <div class="col-xl-3 aside-profile-details">
                               
                <HelpText :helpText="registrationStore.helpText" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body">
      <StarRating  :D_Data='project_info'  v-if="open_starrating_model"  @Close_starrating_Model="Close_starrating_Model" />
      <DisputeReason    v-if="open_dispute_reason_model" :D_Data='project_info' @Close_dispute_reason_Model="Close_dispute_reason_Model" />
      <EveluateSupplier  :D_Data='project_info'  v-if="open_eveluateModel"  @Close_eveluate_Model="Close_eveluate_Model"></EveluateSupplier>
    </teleport>
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import StarRating from '@/components/projects/Modal/StarRating.vue';
import EveluateSupplier from '@/components/projects/Modal/eveluateSupplier.vue';
import DisputeReason from '@/components/projects/Modal/DisputeReason.vue';

import HelpText from '@/components/global/HelpText.vue';
import PageLoader from "@/global_components/loader/PageLoader.vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import { useProjectStore } from '@/store/project.store';
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useRegisterationStore } from '@/store/registeration.store';
import { Account } from '@/store/SwitchAccount';
import { useRouter } from "vue-router";

const store = useProjectStore()
const registrationStore = useRegisterationStore()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const accountStore = Account()
const project_info= ref('')
const account = computed(()=>{
    return accountStore.Account_detail
})

const open_starrating_model = ref(false)
const open_dispute_reason_model = ref(false)
const open_eveluateModel = ref(false)
const router = useRouter()

const data = ref({
  Bid_id: '',
  flag: '',
  RegD_id: account.value[0].RegD_id,
  Account_id: account.value[0].Account_type
})

const openBidDetail = (bid) => {
    data.value.flag = bid.flag
    data.value.Bid_id = bid.Bid_id
    localStorage.setItem('bid_By_Id',JSON.stringify(data.value))
    router.push({path: `/bid_details`})
}
const projectListing = ref({
  Bid_status: 3,
  Category_id: currentUser.cat_ids,
  Is_freelancer_bid: account.value[0].Account_type == 0 ? null : account.value[0].Account_type == 1 ? false : true,
  RegD_id: account.value[0].RegD_id,
  Account_type: account.value[0].Account_type,
  PageNo: 1,
  RowNo: 10,
  search: null
})

const loadProjectListing = () => {
    store.loadBidProjectList(projectListing.value)
}

 const Show_starrating_Model = (val) => {
     open_starrating_model.value = true
     project_info.value = val
    }

const Show_eveluate_Model = (val)=>{
    open_eveluateModel.value = true
    project_info.value = val
}

const Close_eveluate_Model = ()=>{
    open_eveluateModel.value = false
}

    const Close_starrating_Model =(event)=>{
     open_starrating_model.value=event
    }

    const Show_dispute_reason_Model = (val) => {
     open_dispute_reason_model.value = true
     project_info.value = val
    }

    const Close_dispute_reason_Model =(event)=>{
     open_dispute_reason_model.value=event
    }

onMounted(() =>{
 loadProjectListing()
  registrationStore.loadRegistrationHelpText(`${account.value[0].Account_type}/Projects/Completed Projects/null`)
} )
</script>
