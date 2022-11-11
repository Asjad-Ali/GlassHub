<template>
<div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                <div id="kt_toolbar_container" class="container-xxl py-5">
                    <div class="row gy-0 gx-10">
                        <div class="col-xl-9 pd-30 bg-w">
                            <h1 class="pb-2">Post Project for Quotation</h1>
                            <div class="separator separator-dashed border-gray-300 my-8"></div>
                            <div class="row">
                                <PostProjectForQuotationForm />
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
import PostProjectForQuotationForm from '@/components/projects/PostProjectForQuotationForm.vue'
import { computed, onMounted } from "@vue/runtime-core";
import { useRegisterationStore } from "@/store/registeration.store";
import { Account } from "@/store/SwitchAccount";

const store = useRegisterationStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
onMounted(() => {
    // store.loadRegistrationHelpText(`${account.value[0]?.Account_type}/Post Project For Quotation /null/null`)
} )

</script>
