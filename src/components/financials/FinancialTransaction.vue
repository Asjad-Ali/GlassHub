<template>
<div class="row">
    <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
                <tr>
                    <th class="fw-bolder">Project ID</th>
                    <th class="fw-bolder">Date</th>
                    <th class="fw-bolder">Transection Type</th>
                    <th class="fw-bolder">Total</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="TransectionList.lenght>0">
                    <tr v-for="(list,index) in  TransectionList" :key="index">
                    <td>{{list.code}}</td>
                    <td>{{list.date.substring(0,10)}}</td>
                    <td>
                        <span v-if="list.method">{{list.method}}</span>
                        <span v-else>{{list.type}}</span>
                    </td>
                    <td>${{list.Amount}}</td>
                </tr>
                </template>
                <tr v-else>
                    <td colspan="4" style="text-align:center">                                                        
                        <RecordNotAvailable />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>                                       
</template>

<script setup>
import { computed} from 'vue';
import { financail} from '@/store/financialTransaction';
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';

const store= financail()

const TransectionList = computed(()=>{
    return store.financailTransaction
})

</script>

