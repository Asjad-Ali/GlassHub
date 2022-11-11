<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div class="row gy-0 gx-10">
                            <div class="col-xl-9 pd-30 bg-w">
                                <div class="row ">
                                    <div class="col-md-8">
                                        <h1 class="pb-2">Suppliers Registration</h1>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-12">
                                            <ul class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6">

                                        <li class="nav-item">
                                            <router-link to="suppliers_register"><a class="nav-link "><h5>Registered</h5></a></router-link>
                                        </li>
                                        <li class="nav-item">
                                                <router-link to="supplier_new_requests"><a class="nav-link "><h5>New Requests</h5></a></router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="supplier-request-registration"><a class="nav-link active" ><h5>Request Registration</h5></a></router-link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 pb-5">
                                        <h5>Search Filter</h5>
                                    </div>                                      
                                    <RequestRegistration />
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
</template>

<script setup>
import HelpText from "@/components/global/HelpText.vue"
import RequestRegistration from "@/components/Registeration/RequestRegistration.vue";
import { useRegisterationStore } from "@/store/registeration.store";
import { Account } from "@/store/SwitchAccount";
import { computed, onMounted } from "@vue/runtime-core";
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const store = useRegisterationStore()

onMounted(() => {
     store.loadRegistrationHelpText(`${account.value[0].Account_type}/Suppliers/Request Registeration/null`)
} )

</script>