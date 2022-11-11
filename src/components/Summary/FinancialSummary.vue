<template>
  
  
                                          <div class="row">        
                                                                                  
                                        <!-- <div class="col-md-12"> -->
                                                                               
                                            <!-- <div class="table-responsive"> -->
                                                <!--begin::Table-->
                                                <!-- <table class="table bg-light-b table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <thead>
                                                        <tr>
                                                            <th class="fw-bolder">Account Summary</th>
                                                            <th class="fw-bolder" style="text-align: center;text-indent: -10px;">$958657</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                          -->
                                             <!-- </div> -->
                                        <!-- </div> -->

                                       <div class="col-md-6">
                                            <div class="table-responsive">
                                                <!--begin::Table-->
                                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">       
                                                    <tbody>
                                                        <tr  v-if="check.includes('prj_total_amount')">
                                                            <td>Project Payments </td>
                                                            <td>${{SummeryList[0]?.prj_total_amount||0}}</td>
                                                        </tr>
                                                        <tr  v-if="check.includes('aud_total_amount')">
                                                            <td>Audit Payments </td>
                                                            <td>${{SummeryList[0]?.aud_total_amount||0}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                      <div class="col-md-6">
                                            <div class="table-responsive">
                                                    <!--begin::Table-->
                                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <thead>
                                                        <tr v-if="check.includes('prj_recived_amount')">
                                                            <th class="fw-bolder">Project Recived Amount</th>
                                                            <th class="fw-bolder">${{SummeryList[0]?.prj_recived_amount || 0}}</th>
                                                        </tr>
                                                        <tr  v-if="check.includes('prj_not_recived_amount')">
                                                            <th class="fw-bolder">Project not Recived Amount</th>
                                                            <th class="fw-bolder">${{SummeryList[0]?.prj_not_recived_amount||0}}</th>
                                                        </tr>
                                                        <tr  v-if="check.includes('aud_recived_amount')">
                                                            <th class="fw-bolder">Audit Recived Amount  </th>
                                                            <th class="fw-bolder">${{SummeryList[0]?.aud_recived_amount||0}}</th>
                                                        </tr>
                                                        <tr  v-if="check.includes('aud_not_recived_amount')">
                                                            <th class="fw-bolder">Audit Not Recived Amount </th>
                                                            <th class="fw-bolder">${{SummeryList[0]?.aud_not_recived_amount||0}}</th>
                                                        </tr>
                                                    </thead>                                                    
                                                </table>
                                            </div>
                                        </div>
                                        


                                           
                                        <div class="col-md-12 ">
                                            <div class="table-responsive">
                                                    <!--begin::Table-->
                                                <table class="table bg-light-b table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <thead>
                                                        <tr>
                                                            <th class="fw-bolder">Closing Balance</th>
                                                            <th class="fw-bolder" style="text-align: center;text-indent: -18px;">${{(SummeryList[0]?.prj_total_amount||0) +  (SummeryList[0]?.aud_total_amount||0) }}</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>



                                                </div>

                                                <!-- <div class="col-md-12 mt-10 mb-10">
                                            <ul class="pagination">
                                                <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
                                                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                                <li class="page-item "><a href="#" class="page-link">2</a></li>
                                                <li class="page-item "><a href="#" class="page-link">3</a></li>
                                                <li class="page-item "><a href="#" class="page-link">4</a></li>
                                                <li class="page-item "><a href="#" class="page-link">5</a></li>
                                                <li class="page-item "><a href="#" class="page-link">6</a></li>
                                                <li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li>
                                            </ul>
                                        </div> -->
                                                


  
</template>

<script setup>
import { computed,ref,watch} from 'vue';
import { financail} from '@/store/financialTransaction';
// import {Account} from '@/store/SwitchAccount'

// const COMPANY_Name_2 = computed(() => process.env.VUE_APP_COMPANY_Name_2 ); 
// const SwitchAccount = Account().Account_detail[0]
const store= financail()
const check = ref('')
const SummeryList = computed(()=>{
    return store.SummerList
})

watch(SummeryList,()=>{
    if(SummeryList.value.length) check.value = Object.keys(SummeryList.value[0]);
})

</script>

<style>

</style>