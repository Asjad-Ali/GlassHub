<template>
<div>
    <PageLoader style="height: 70vh" v-if="store.profileLoader"/>
    <div v-else>
        <div v-if="store.regProfileData.RegistrationD?.length" id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
            <div class="d-flex flex-column flex-root">
                <div class="page d-flex flex-row flex-column-fluid">
                    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        <div class="bg-lg">
                            <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
                                <div class="content flex-row-fluid" id="kt_content">
                                    <HeaderRegistration :data="store.regProfileData.RegistrationD" />
                                    <ProfileDetail :regD="store.regProfileData.RegistrationD" :officeB="store.regProfileData.Office_Branches" :Documents="store.regProfileData.company_Doc"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <CompletedProject />
        <CancelledProject />
        <ActiveProject />
        </div>
    </div>
</div>
</template>

<script setup>
import HeaderRegistration from '@/components/Registeration/HeaderRegistration.vue'
import ProfileDetail from '@/components/Registeration/ProfileDetail.vue'
import CompletedProject from '@/components/Registeration/CompletedProject.vue'
import CancelledProject from '@/components/Registeration/CancelledProject.vue'
import ActiveProject from '@/components/Registeration/ActiveProject.vue'
import PageLoader from '@/global_components/loader/PageLoader.vue'
import { useRegisterationStore } from '@/store/registeration.store'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const store = useRegisterationStore()
const route = useRoute()
onMounted(() => store.loadRegistrationProfileData(route.params.id))
</script>