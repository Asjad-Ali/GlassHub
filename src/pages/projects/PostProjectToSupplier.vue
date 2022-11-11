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
                                    <h1 class="pb-2">Suppliers</h1>
                                </div>
                                <!-- <ProjectsFilter /> -->
                            </div>
                            <div >
                                <RegisteredList/>
                            </div>  
                        </div>
                        <div class="col-xl-3 aside-profile-details">
                            <HelpText :helpText="regStore.helpText" />
                        </div>
                    </div>
                </div>
            </div>
            <!--Start Live Chat Modal-->
            <LiveChat />
        </div>
    </div>
</div>
</template>

<script setup>
import HelpText from "@/components/global/HelpText.vue"
import RegisteredList from "@/components/Registeration/RegisteredList.vue";
// import ProjectsFilter from '@/components/projects/ProjectsFilter.vue'
import { useProjectStore } from "@/store/project.store";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import LiveChat from "@/components/projects/LiveChat.vue";
import { useRegisterationStore } from "@/store/registeration.store";
import { Account } from "@/store/SwitchAccount";

const store = useProjectStore()
const regStore = useRegisterationStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const data = reactive({
    RegD_id: account.value[0].RegD_id,
    Account_id: 1,
    registred_status: '',
    PageNo: 1,
    RowNo: 10
})
onMounted( () => {
  store.rfqDetails = []
//   store.loadPostProjectSupplier(currentUser.RegD_id)
  regStore.loadRegistrationList(data)
//   regStore.loadRegistrationHelpText(`${account.value[0]?.Account_type}/Post Project To Supplier/null/null`)
} )

</script>
