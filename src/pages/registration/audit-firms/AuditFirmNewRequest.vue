<template>
    <div  id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
						<div id="kt_toolbar_container" class="container-xxl py-5">
							<div class="row gy-0 gx-10">
                                <div class="col-xl-9 pd-30 bg-w">
                                    <div class="row ">
                                        <div class="col-md-8">
                                            <h1 class="pb-2">Audit Firms Registration</h1>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                              <ul class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6">
                                            <li class="nav-item">
                                              <router-link to="auditFirm_register"><a class="nav-link "><h5>Registered</h5></a></router-link>
                                            </li>
                                            <li class="nav-item">
                                                  <router-link to="auditFirm_new_requests"><a class="nav-link active"><h5>New Requests</h5></a></router-link>
                                            </li>
                                            <li class="nav-item">
                                              <router-link to="auditFirm-request-registration"><a class="nav-link " ><h5>Request Registration</h5></a></router-link>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <PageLoader v-if="store.loader" />
                                    <div v-else>
                                        <div v-if="store.newRequestList.length">
                                            <NewRequest  :users="store.newRequestList" />
                                            <div style="display:flex ; justify-content:center; margin-top:10px">
                                            <v-pagination v-if="store.totalPages >= 1"
                                            v-model="data.PageNo"
                                            :pages="store.totalPages"
                                            :range-size="1"
                                            active-color="#DCEDFF"
                                            @update:modelValue="paginationNewRequestList"
                                            />
                                            </div> 
                                        </div>
                                        <RecordNotAvailable v-else  /> 
                                    </div>                                
                                </div>
                                <div class="col-xl-3 aside-profile-details">
                                    <HelpText :helpText="store.helpText" />
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
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import HelpText from "@/components/global/HelpText.vue"
import { useRegisterationStore } from "@/store/registeration.store";
import { computed, onMounted, reactive } from "vue";
import NewRequest from "@/components/Registeration/NewRequest.vue";
import { useRoute } from "vue-router";
import { Account } from "@/store/SwitchAccount";

const store = useRegisterationStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const route = useRoute()
const currentPath = computed(() => route.path)
const data = reactive({
    RegD_id: account.value[0].RegD_id,
    Account_id:'',
    registred_status:'',
    PageNo: 1,
    RowNo: 10
})
if(currentPath.value == "/supplier_new_requests"){
    data.Account_id = 1
} else if(currentPath.value == "/freelancer_new_requests"){
    data.Account_id = 2
}else if(currentPath.value == "/auditFirm_new_requests"){
    data.Account_id = 3 
}else if(currentPath.value == "/regulator_new_request"){
    data.Account_id = 4
}else{
    data.Account_id = 0
}
const paginationNewRequestList = () => {
  store.loadNewRequestList(data)
}
onMounted(() => {
    paginationNewRequestList()
    store.loadRegistrationHelpText(`${account.value[0].Account_type}/Audit Firms/New Request/null`)
} )
</script>