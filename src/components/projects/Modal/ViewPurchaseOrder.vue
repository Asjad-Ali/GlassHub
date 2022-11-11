<template>
    <div  class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-20" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">PO</h5>
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i @click="CloseModel" class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <!-- <PageLoader  /> -->
                <div  class="modal-body">
                    <div v-if="store.poDetails.project_po?.length" class="row">
                            <h3 class="d-flex mb-3 text-muted">PO#: {{ store.poDetails.project_po[0].PO_code }} </h3>
                            <h3 class="d-flex mb-3"> PO From:  {{ store.poDetails.project_po[0].RegD_comp_name }}  </h3>
                        <div class="col-md-6">
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>   {{ store.poDetails.project_po[0].PO_sender_email }}   </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>  {{ store.poDetails.project_po[0].PO_sender_address }}  </td>
                                        </tr>
                                        <tr>
                                            <td>PO Title:</td>
                                            <td>  {{ store.poDetails.project_po[0].PO_title }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Date:</td>
                                            <td>  {{ store.poDetails.project_po[0].PO_datetime.substring(0, 10) }}  </td>
                                        </tr>
                                        <tr>
                                            <td>Attachment:</td>
                                            <td> <a :href="store.poDetails.project_po[0]?.po_document" target="_blank">  
                                                {{ docName(store.poDetails.project_po[0].po_document) }}</a>   </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-12">
                            <h6>Description</h6>
                            <p v-html="store.poDetails.project_po[0].PO_template "></p>
                        </div>
                        <div class="col-md-12 mb-10">
                            <div v-if="store.poDetails.project_po_paymentd.length" id="table" class="table-editable mb-10">
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_1 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_2 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_3 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_4 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_5 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_6 }} </th>
                                            <th class="text-center fw-bolder text-gray-800"> {{ store.poDetails.project_po_paymenth[0].Col_7 }} </th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="store.poDetails.project_po_paymentd.length">
                                        <tr v-for="value in store.poDetails.project_po_paymentd" :key="value" >
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
// import PageLoader from '@/global_components/loader/PageLoader.vue';
import { useProjectStore } from '@/store/project.store';
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';
import { defineEmits } from 'vue'
const emit = defineEmits(['closeViewPO'])
const CloseModel = () => {
    emit('closeViewPO', false)
}
const store = useProjectStore()
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
</script>

