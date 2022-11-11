<template>
    <div  class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-20" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Quotation</h5>
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2"  @click="CloseModel" >
                        <i  class="fa fa-times"></i>
                    </div>
                </div>
                <PageLoader v-if="store.quotationLoader" />
                <div v-else  class="modal-body">
                    <div v-if="store.quotationDetails.project_qutation?.length" class="row">
                            <h3 class="d-flex mb-3 text-muted">Quotation#: {{ store.quotationDetails.project_qutation[0].qutation_code }} </h3>
                            <h3 class="d-flex mb-3"> Quotation From:  {{ store.quotationDetails.project_qutation[0].RegD_comp_name }}  </h3>
                        <div class="col-md-6">
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>   {{ store.quotationDetails.project_qutation[0].Qutation_sender_email }}   </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>  {{ store.quotationDetails.project_qutation[0].Qutation_sender_address }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Quotation Title:</td>
                                            <td>  {{ store.quotationDetails.project_qutation[0].qutation_title }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Date:</td>
                                            <td>  {{ store.quotationDetails.project_qutation[0].qutation_datetime.substring(0, 10) }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Attachment: </td>
                                            <td>  
                                                <a :href="store.quotationDetails?.project_qutation[0]?.qutation_document" target="_blank">  
                                                {{ docName(store.quotationDetails.project_qutation[0].qutation_document) }}</a>  
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-12">
                            <h6>Description</h6>
                            <p v-html="store.quotationDetails.project_qutation[0].qutation_template"></p>
                        </div>
                        <div class="col-md-12 mb-10">
                            <div v-if="store.quotationDetails.project_qutation_paymentd.length" id="table" class="table-editable mb-10">
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_1 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_2 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_3 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_4 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_5 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_6 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.quotationDetails.project_qutation_paymenth[0].Col_7 }} </th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="store.quotationDetails.project_qutation_paymentd.length">
                                        <tr v-for="value in store.quotationDetails.project_qutation_paymentd" :key="value" >
                                            <td> {{ value.Col_1 }} </td>
                                            <td> {{ value.Col_2 }} </td>
                                            <td> {{ value.Col_3 }} </td>
                                            <td> {{ value.Col_4 }} </td>
                                            <td> {{ value.Col_5 }} </td>
                                            <td> {{ value.Col_6 }} </td>
                                            <td> {{ value.Col_7 }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <RecordNotAvailable v-else />
                </div>
                <div class="modal-footer">
                    <button @click="CloseModel" type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PageLoader from '@/global_components/loader/PageLoader.vue';
import { useProjectStore } from '@/store/project.store';
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import { defineEmits } from 'vue'
const emit = defineEmits(['closeQuotationViewModel'])
const CloseModel = () => {
    emit('closeQuotationViewModel', false)
}
const store = useProjectStore()
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
</script>

