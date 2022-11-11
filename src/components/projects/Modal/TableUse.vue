<template>
    <div class="card">
        <div class="card-body p-0">
            <div id="table"  class="table-editable">
                <table class="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                        <tr class="mx-2">
                            <th  class="text-center fw-bolder text-gray-800">
                                Description
                            </th>
                            <th  class="text-center fw-bolder text-gray-800">
                                Quantity
                            </th>
                            <th class="text-center fw-bolder text-gray-800">
                               {{ table.rfq ? 'EST.Rate' : 'Rate' }} 
                            </th>
                            <th class="text-center fw-bolder text-gray-800">
                                Amount 
                            </th>
                            <th class="text-center fw-bolder text-gray-800">
                                <input maxlength="50" v-model="tableData.dataH.Col_5" placeholder="Enter Heading" class="form-control form-control-sm" />
                            </th>
                            <th class="text-center fw-bolder text-gray-800">
                                <input maxlength="50" v-model="tableData.dataH.Col_6" placeholder="Enter Heading" class="form-control form-control-sm" />
                            </th>
                            <th class="text-center fw-bolder text-gray-800">
                                <input maxlength="50" v-model="tableData.dataH.Col_7" placeholder="Enter Heading" class="form-control form-control-sm" />
                            </th>
                            <th class="text-center fw-bolder text-gray-800">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="tableData.dataD.length">
                            <tr v-for="(data,index) in tableData.dataD" class="mx-2" :key="index" >
                                <td class="p-1" >
                                    {{ data.Col_1 }}
                                </td>
                                <td class="p-1" >
                                    {{ data.Col_2 }}
                                </td>
                                <td class="p-1">
                                    {{ data.Col_3 }}
                                </td>
                                <td class="p-1">
                                    {{ data.Col_4 }}
                                </td>
                                <td class="p-1">
                                    {{ data.Col_5 }}
                                </td>
                                <td class="p-1">
                                    {{ data.Col_6 }}
                                </td>
                                <td class="p-1">
                                    {{ data.Col_7 }}
                                </td>
                                <td>
                                    <span @click="editTableRow(index)" v-if="edit" class="badge btn-primary m-1 cursor-pointer">Edit</span>
                                    <span @click="removeTableRow(index)" v-if="edit" class="badge badge-danger m-1 cursor-pointer">Remove -</span>
                                </td>
                            </tr>
                        </template>
                        <tr v-if="edit">
                            <td>
                                <input maxlength="50" type="text" v-model="tableValue.Col1" placeholder="Description" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" type="number" v-model="tableValue.Col2" placeholder="Quality" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" type="number" v-model="tableValue.Col3" placeholder="EST.Rate" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" readonly v-model="tableValue.Col4" placeholder="Amount" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" v-model="tableValue.Col5" placeholder="Description" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" v-model="tableValue.Col6" placeholder="Description" class="form-control form-control-sm " />
                            </td>
                            <td>
                                <input maxlength="15" v-model="tableValue.Col7" placeholder="Description" class="form-control form-control-sm " />
                            </td>
                            <td>
                                 <!-- <slot name="addTableValue"></slot> -->
                                <span @click="addTableValue" id="addTableValue" ref="btn" class="badge btn-primary m-1 cursor-pointer"> {{ updateBtn ? 'update' : 'Add'  }}  </span>
                            </td>
                        </tr>
                        <tr>
                            <td> <div class="text-danger"> {{ tableValueError.Col1 }} </div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {toRefs, defineProps, defineEmits, ref, reactive, watch, computed} from 'vue';
import { Account } from "@/store/SwitchAccount";
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const props = defineProps({
  tableH: {
    type: Object,
    required: false
  },
  callMethod:{
    required: false
  },
  tableD: {
    type: Array,
    required: false
  },
  rfq: {
    type: Boolean,
    required: false
  }
})
const table = toRefs(props)
console.log(table.rfq.value)
const emit = defineEmits(['sentTableData'])

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
let updateBtn = ref(false)
const edit = ref(true)
let editIndex = ref(null)

let tableData = reactive({
    dataH:{
        Col_5: null,
        Col_6: null,
        Col_7: null,
    },
    dataD: []
})

if(table.tableH.value?.length){
tableData.dataH.Col_5 = table.tableH.value[0].Col_5
tableData.dataH.Col_6 = table.tableH.value[0].Col_6
tableData.dataH.Col_7 = table.tableH.value[0].Col_7
}else{
    tableData.dataH.Col_5 = null
    tableData.dataH.Col_6 = null
    tableData.dataH.Col_7 = null
}
if(table.tableD.value?.length){
    tableData.dataD = table.tableD.value
    tableData.dataD.splice( tableData.dataD.length,1)
    edit.value = false
}


let tableValue = reactive({
    Col1:null,
    Col2: null,
    Col3: null,
    Col4: null,
    Col5: null,
    Col6: null,
    Col7: null,
})
const setTable = {
    Col_1: '',
    Col_2: '',
    Col_3: '',
    Col_4: '',
    Col_5: '',
    Col_6: '',
    Col_7: '',
    RegD_id: account.value[0].RegD_id,
    RegD_comp_name: currentUser.User_fullname,
    Created_by: currentUser.User_id,
    Updated_by: currentUser.User_id
}

const tableValueError = reactive({
    Col1:null,
})
watch(tableValue,(current) => {
    if(current.Col1){
        tableValueError.Col1 = null
    }
})

watch(tableValue,() => {
   tableValue.Col4 = tableValue.Col2* tableValue.Col3
})

watch(props,()=>{
  addTableValue()   
})


   const addTableValue = () => {
    if(tableValue.Col1){
        setTable.Col_1 = tableValue.Col1
        setTable.Col_2 = tableValue.Col2
        setTable.Col_3 = tableValue.Col3
        setTable.Col_4 = tableValue.Col4
        setTable.Col_5 = tableValue.Col5
        setTable.Col_6 = tableValue.Col6
        setTable.Col_7 = tableValue.Col7

        if(updateBtn.value){
            tableData.dataD[editIndex.value] = setTable
            updateBtn.value = false
        } else {
            tableData.dataD.unshift(setTable)
            submit()
        }
        tableValue.Col1 = null
        tableValue.Col2 = null
        tableValue.Col3 = null
        tableValue.Col4 = null
        tableValue.Col5 = null
        tableValue.Col6 = null
        tableValue.Col7 = null
    } else {
        tableValueError.Col1 = ""
    }
   }
   const editTableRow = (index) => {
        editIndex.value = index
        updateBtn.value = true

        tableValue.Col1 = tableData.dataD[index].Col_1
        tableValue.Col2 = tableData.dataD[index].Col_2
        tableValue.Col3 = tableData.dataD[index].Col_3
        tableValue.Col4 = tableData.dataD[index].Col_4
        tableValue.Col5 = tableData.dataD[index].Col_5
        tableValue.Col6 = tableData.dataD[index].Col_6
        tableValue.Col7 = tableData.dataD[index].Col_7

   }
    const removeTableRow = (index) => {
    tableData.dataD.splice(index,1)
   }

   const submit = () => {
    edit.value=false
    //  tableData.dataD.splice( tableData.dataD.length-1,1)
    console.log(tableData)
    let Data = reactive({
        dataH:{},
        dataD: []
    })
    Data.dataH = JSON.stringify(tableData.dataH)
    Data.dataD = JSON.stringify(tableData.dataD)
    emit('sentTableData', tableData)
}

</script>

<style scoped>
.table > :not(caption) > * > * {
  padding: 0.25rem 0.25rem !important;
}
</style>
