<template>
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
						<div id="kt_toolbar_container" class="container-xxl py-5">
							<div class="row gy-0 gx-10">
                                <div class="col-xl-12 pd-30 bg-w">
                                    <div class="row mb-10">
                                        <div class="col-md-8">
                                            <h1 class="pb-2">Verify Certificates</h1>    
                                        </div>
                                        <div class="col-md-4 text-right">
                                           
                                        </div>
                                    </div> 
                                     <div class="row">
                                        <PageLoader v-if="store.loader"  />
                                        <div v-else-if="store.regVerifyCertificates.length" class="table-responsive">
                                                    <!--begin::Table-->
                                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                <!--begin::Table head-->
                                                <thead>
                                                    <tr class="fw-bolder text-muted">
                                                        <th>SR</th>
                                                        <th>Date</th>
                                                        <th class="min-w-150px">Certificate Name</th>
                                                        <th class="min-w-140px">Type</th>
                                                        <th class="min-w-140px">Awarded To</th>
                                                        <th class="min-w-140px">Certificate Image</th>
                                                        <th class="min-w-140px">Remarks</th>
                                                        <th class="min-w-140px">Audit Process</th>
                                                        <th class="min-w-140px">Audit Status</th>
                                                        <th class="min-w-100px text-end">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(certificate,index) in store.regVerifyCertificates" :key="index" >
                                                        <td>{{ index+1 }}</td>
                                                        <td> {{ certificate.Created_at.substring(0,10) }} </td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="d-flex justify-content-start flex-column">
                                                                    <span class="text-muted fw-bold text-muted d-block fs-7"> {{ certificate.doc_name }} </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>                                                            
                                                            <span class="text-muted fw-bold text-muted d-block fs-7">{{ certificate.doc_type_name }}</span>
                                                        </td>
                                                        <td>                                                            
                                                            <span class="text-muted fw-bold text-muted d-block fs-7"> {{ certificate.aud_for_regd_name }} </span>
                                                        </td>
                                                        <td>
                                                            <span class="btn text-primary  btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" @click="openCertificateView(certificate)">View</span>
                                                        </td>
                                                        <td>
                                                            <span class="btn text-primary  btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" @click="openRegulatorConversation(certificate)">View</span>
                                                        </td>
                                                        <td><a href="#" >View</a></td>
                                                        <td>
                                                            <span class="badge badge-primary"> {{ certificate.doc_status_name }} </span>
                                                        </td>
                                                        <td>
                                                            <div class="d-flex justify-content-end flex-shrink-0">
                                                                <select @change="changeCertificateStatus($event,certificate)" v-model="certificate.regulator_status" name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                                    <option value="null" selected>Select One</option>
                                                                    <option :value="0">Pending</option>
                                                                    <option :value="1" selected="">Verified</option>
                                                                    <option :value="2">Rejected</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <!--end::Table body-->
                                            </table>
                                            <!--end::Table-->
                                        </div>
                                        <RecordNotAvailable v-else />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <teleport to="body">
                    <CertificateView v-if="showCertificateView" @closeCertificateView="closeCertificateView"  />
                    <RegulatorConversation v-if="showRegulatorConversation" @closeRegulatorConversationView="closeRegulatorConversationView"  />
                </teleport>
            </div>

</template>

<script setup>
import {computed,onMounted,ref,watch} from 'vue'
import {useRouter} from 'vue-router'
import {Account} from '@/store/SwitchAccount'
import useToast from '@/global_components/Toast/useToast'

import PageLoader from '@/global_components/loader/PageLoader.vue';
import { useAuditStore } from '@/store/audit.store';
import CertificateView from '@/components/audit/audit-firm/Modal/AuditCertificateView.vue';
import RegulatorConversation from '@/components/offering/RegulatorConversationModal.vue';
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import API from '@/composables/API';
const router = useRouter()
const store = useAuditStore()
const SwitchAccount = computed(()=> Account().Account_detail[0]) 
watch(SwitchAccount,()=>{
  if(SwitchAccount.value.Account_type!=4){
    router.push('dashboard')
  }
})

const showCertificateView = ref(false)
const showRegulatorConversation = ref(false)

const certStatus = ref({
    regulator_status:"",
    regulator_status_name:"",
    aud_doc_id:""
})

const changeCertificateStatus = async(e,certificate) => {
    certStatus.value.aud_doc_id = certificate.aud_doc_id
    certStatus.value.regulator_status = e.target.value
    certStatus.value.regulator_status_name = e.target.options[e.target.options.selectedIndex].text;
    await API.post('api/audit/update-reg-status',certStatus.value).then((res) => {
        if(res.status == 200) {
            useToast("Status Changed", 'success')
        }else{
             useToast(res)
        }
    })
}


const openCertificateView =(certificate)=>{
    store.loadSingleCertificate(certificate.doc_id)
    showCertificateView.value = true
}
const closeCertificateView =(event)=>{
    showCertificateView.value=event
}
const openRegulatorConversation =(certificate)=>{
    console.log(certificate)
    showRegulatorConversation.value = true
}
const closeRegulatorConversationView =(event)=>{
    showRegulatorConversation.value=event
}
onMounted(() => {
    store.loadRegulatorVerifyCertificate(SwitchAccount.value.RegD_id)
})

</script>
