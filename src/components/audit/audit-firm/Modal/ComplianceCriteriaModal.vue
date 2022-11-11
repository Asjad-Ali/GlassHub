<template>
    <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5);opacity:1 !important">
        <div class="modal-dialog modal-lg mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Compliance Criteria</h5>
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        @click="Close_Compliancecriteria_Model()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div v-if="store.controlLoader" class="modal-body">
                    <PageLoader />
                </div>
                <div v-else class="modal-body">
                    <div v-if="store.complianceList.length" class="row mb-5">
                        <div class="col-md-12">
                            <table class="table table-row-dashed table-row-gray-300 gs-0 gy-4 ">
                                <tbody>
                                    <tr class="response">
                                        <td class="response">
                                            <div class="row px-5">
                                                <div class="col-md-12 mb-3">
                                                    <h4 class="text-muted">Controls {{currentComp+1}}/{{store.complianceList.length}}</h4>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted"> Control no </label>
                                                    <p>{{ store.complianceList[currentComp].Control_no }}</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted">Refrence no</label>
                                                    <p>{{ store.complianceList[currentComp].Ref_no }}</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label text-muted">Source</label>
                                                    <p>{{ store.complianceList[currentComp].Source }}</p>
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label text-muted">Control statement</label>
                                                    <p> {{ store.complianceList[currentComp].Ctrl_statement }} </p>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <span class="badge badge-light m-5" style="background-color: #5241a1;color:white">Compliance</span>
                                                    <span class="badge badge-light m-5">Non Compliance</span>
                                                    <span class="badge badge-light m-5">Not Acceptable</span>
                                                </div>
                                                <div class="col-md-6 text-start mb-3">
                                                    <button v-show="currentComp>0"  @click="currentComp = currentComp-1" class="btn btn-secondary" :class="{'cursor-none': currentComp == 0}" >Previous</button>
                                                </div>
                                                <div class="col-md-6 text-end mb-3">
                                                    <button v-show="currentComp+1 != store.complianceList.length" @click="currentComp = currentComp+1" class="btn btn-secondary" >Next</button>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-else class="col-md-12">
                        <RecordNotAvailable />
                    </div>
                    <div class="col-md-12">
                        <h5>Documents</h5>
                        <a @click="openCertificateView(cer)" class="text-primary cursor-pointer" v-for="cer in store.auditCertificatesName" :key="cer" >{{ cer.doc_name }}</a><br>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary"
                        @click="Close_Compliancecriteria_Model()">Close</button>
                </div>
            </div>
        </div>
    </div>
    <teleport to="body">
        <CertificateView v-if="showCertificateView" @closeCertificateView="closeCertificateView"  />
    </teleport>

</template>

<script setup>
import { computed, defineEmits, onMounted, ref } from 'vue'
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import PageLoader from '@/global_components/loader/PageLoader.vue';
import { useAuditStore } from '@/store/audit.store';
import CertificateView from '@/components/audit/audit-firm/Modal/AuditCertificateView.vue';

const emit = defineEmits(['Close_Compliancecriteria_Model'])
const Close_Compliancecriteria_Model = () => {
    emit('Close_Compliancecriteria_Model', false)
}
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const currentComp = ref(0)
const showCertificateView = ref(false)

const store = useAuditStore()
const cerdata = ref({
    aud_doc_id: audit.value.aud_doc_id,
    Compliance_id: audit.value.compliance_id
})

const openCertificateView =(certificate)=>{
    store.loadSingleCertificate(certificate.doc_id)
    showCertificateView.value = true
 }
const closeCertificateView =(event)=>{
    showCertificateView.value=event
}

onMounted(() => {
    store.loadCertificateName(cerdata.value)
})

</script>