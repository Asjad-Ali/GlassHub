<template>
  <div class="modal fade show"  style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
        <div class="modal-dialog modal-lg mt-20">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Payments</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <PageLoader style="height: 50vh !important" v-if="store.paymentLoader" />
                    <div v-else>
                        <div v-if="store.paymentList.length" class="table-responsive project_payments_history">
                            <h6>Paymnet History</h6>
                            <div class="separator separator-dashed border-gray-300 my-5"></div>
        
                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr>
                                        <th class="fw-bolder text-gray-800">SR</th>
                                        <th class="fw-bolder text-gray-800">Date</th>
                                        <th class="fw-bolder text-gray-800">Methods</th>
                                        <th class="fw-bolder text-gray-800">PIN/ID</th>
                                        <th class="fw-bolder text-gray-800">Particulars</th>
                                         <th class="fw-bolder text-gray-800">Image</th>
                                        <th class="fw-bolder text-gray-800">Total Amount</th>
                                        <th class="fw-bolder text-gray-800">Status Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(payment,index) in store.paymentList" :key="index" >
                                        <td> {{ index+1 }} </td>
                                        <td> {{ payment.Pay_start_date.substring(0, 10) }} </td>
                                        <td> {{ payment.Pay_method_name }} </td>
                                        <td>{{ payment.Istrument_no }}</td>
                                        <td>{{ payment?.Particulars}}</td>
                                        <td><a :href="payment.pay_attachment" target="_blank"><i v-if="payment.Is_attachment" class="fa fa-images cursor-pointer"> </i> </a></td>
                                        <td>{{ payment.Amount }}</td>
                                        <td class="text-center">
                                            <select v-model="payment.pay_confirm" @change="paymentStatusUpdate($event, payment.Payment_id )" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                <option value= null>Select One</option>
                                                <option v-for="(status,index) in statusName" :key="index" :value="index"> {{ status }} </option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <RecordNotAvailable style="height: 50vh !important" v-else />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProjectStore } from "@/store/project.store";
import { defineEmits, ref } from "vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
const statusName = ['Received', 'Not-Received']
const emit = defineEmits(['closePaymentsList'])
const CloseModel = () => {
    emit('closePaymentsList', false)
}
const store = useProjectStore()

const data = ref({
    pay_confirm: '',
    pay_confirm_name: '',
    Payment_id:'',
    
})

const paymentStatusUpdate = (e, payId) => {
    data.value.pay_confirm = e.target.value,
    data.value.pay_confirm_name = statusName[e.target.value],
    data.value.Payment_id = payId
    store.paymentConfirmationUpdate(data.value)
}

</script>

<style>

</style>