<template>
    <div  class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-20" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">RFQ</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i  class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <PageLoader v-if="store.rfqDetailLoader || store.rfqDetails.project_bid == undefined" />
                <div v-else class="modal-body">
                    <div v-if="store.rfqDetails.project_rfq_org.length" class="row">
                            <h3 class="d-flex mb-3 text-muted">RFQ#: {{ store.rfqDetails.project_rfq_org[0].RFQ_code }} </h3>
                            <h3 class="d-flex mb-3"> RFQ From:  {{ store.rfqDetails.project_rfq_org[0].RegD_comp_name }}  </h3>
                        <div class="col-md-6">
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>   {{ store.rfqDetails.project_rfq_org[0].bid_send_email }}   </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>  {{ store.rfqDetails.project_rfq_org[0].Address }}  </td>
                                        </tr>
                                        <tr>
                                            <td>RFQ Title:</td>
                                            <td>  {{ store.rfqDetails.project_rfq_org[0].RFQ_title }}  </td>
                                        </tr>
                                        <tr>
                                            <td>RFQ Date:</td>
                                            <td>  {{ store.rfqDetails.project_rfq_org[0].RFQ_datetime.substring(0, 10) }}  </td>
                                        </tr>
                                        <tr>
                                            <td>End Date:</td>
                                            <td>  {{ store.rfqDetails.project_rfq_org[0].end_date?.substring(0, 10) }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Attachment: </td>
                                            <td>  
                                                <a :href="store.rfqDetails.project_rfq_org[0]?.rfq_document" target="_blank">  
                                                {{ docName(store.rfqDetails.project_rfq_org[0].rfq_document) }}</a>  
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-12 mb-10">
                            <div>
                              <p>Description:</p>
                              <p v-html="store.rfqDetails.project_rfq_org[0].RFQ_template"></p>
                            </div>
                         
                            <div v-if="store.rfqDetails.project_rfq_paymentd.length " id="table" class="table-editable mb-10">
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_1 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_2 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_3 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_4 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_5 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_6 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.rfqDetails.project_rfq_paymenth[0].Col_7 }} </th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="store.rfqDetails.project_rfq_paymentd.length">
                                        <tr v-for="value in store.rfqDetails.project_rfq_paymentd" :key="value" >
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
const emit = defineEmits(['closeRFQViewModel'])
const CloseModel = () => {
    emit('closeRFQViewModel', false)
}
const store = useProjectStore()
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
</script>

<style>

</style>