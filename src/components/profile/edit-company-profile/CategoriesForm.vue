<template>
    <div>
        <div class="w-100">
                <div class="fv-row mb-10 pb-5">
                <label class="form-label required">Main Category</label>
                <select @change="addSelected(add_cat)" v-model="add_cat"
                    name="mainCategory"
                    class="form-select form-select-lg form-select-solid" data-control="select2"
                    data-placeholder="Select..." data-allow-clear="true" data-hide-search="true" >
                    <option selected value="" disabled>Select Main Category</option>
                    <template v-for="(list, index) in store.mainCategoryList.Categories" :key="index">
                            <option v-if="list.Cat_name != ''" :value="list.Cat_id">
                                {{ list.Cat_name }}
                            </option>
                    </template>
                </select>
                <!-- <div class="fv-plugins-message-container invalid-feedback">
                    {{ errors.mainCategory }}
                </div> -->
                <div class="compliances_added mt-2">
                        <template v-for="(val, index) in cat_name" :key="index">
                            <p style="margin:3px; padding: 1px 3px;"><span @click="remove_catgory(index)" class="closeIcon">x</span> {{ val }} </p>
                        </template>
                    </div>
            </div>



            <div v-if="subCategory.length" class="fv-row mb-10 pb-5">
                <label class="form-label required">Sub-Category</label>
                <select @change="subCat(add_sub_cat)" v-model="add_sub_cat"
                    name="subCategory"
                    class="form-select form-select-lg form-select-solid" data-control="select3"
                    data-placeholder="Select..." data-allow-clear="true" data-hide-search="true"> 
                    <option selected disabled value="">Select Sub Category</option>  
                    <template v-for="(list, index) in subCategory" :key="index">                             
                            <option v-if="list.Scat_name != ''" :value="list.Scat_id">
                                {{ list.Scat_name }}
                            </option>
                        </template>
                </select>
                
                <div class="compliances_added mt-2">
                        <template v-for="(val, index) in sub_cat_name" :key="index">
                            <p style="margin:3px; padding: 1px 3px;"><span @click="remove_sub_catgory(index)" class="closeIcon">x</span> {{ val }} </p>
                        </template>
                    </div>
            </div>

            <div v-if="subCategory1.length" class="fv-row mb-10 pb-5">
                <label class="form-label required">Sub-Category 1</label>
                <select @change="subCat1(add_sub1_cat)" v-model="add_sub1_cat"
                    name="subCategory1" 
                    class="form-select form-select-lg form-select-solid" data-control="select4"
                    data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                    <option selected disabled value="">Select Sub Category</option>
                    <template v-for="(list, index) in subCategory1" :key="index">                             
                            <option v-if="list.Scat1_name != ''" :value="list.Scat1_id">
                                {{ list.Scat1_name }}
                            </option>
                        </template>
                </select>
                
                <div class="compliances_added mt-2">
                        <template v-for="(val, index) in sub_cat1_name" :key="index">
                            <p style="margin:3px; padding: 1px 3px;"><span @click="remove_sub_catgory1(index)" class="closeIcon">x</span> {{ val }} </p>
                        </template>
                    </div>
            </div>
            

            <div v-show="allCatTableShow">
                <table class="
        table table-bordered table-responsive-md table-striped
        fa-address-book
        ">
                    <thead>
                        <tr>
                            <th class="fw-bolder">Category</th>
                            <th class="fw-bolder">Sub-Category</th>
                            <th class="fw-bolder">Sub-Category1</th>
                            <th class="fw-bolder">Sub-Category2</th>
                            <th class="fw-bolder">Sub-Category3</th>
                            <th class="fw-bolder">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(all_cat,index) in allSelectedCatList" :key="all_cat">
                            <td >{{all_cat.Cat_name}}</td>
                            <td>
                                {{all_cat.Scat_name}}
                            </td>
                            <td>{{all_cat.Scat1_name}}</td>
                            <td>
                                {{all_cat.Scat2_name}}
                            </td>
                            <td>
                                
                            </td>
                            
                            <td>
                                <div class="justify-content-end">
                                    
                                    <a @click="removeCategoryRow(index)" class="
                    btn
                    btn-icon
                    btn-bg-light
                    btn-active-color-primary
                    btn-sm
                ">
                                        <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
                                        <span class="svg-icon svg-icon-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                    fill="black"></path>
                                                <path opacity="0.5"
                                                    d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                    fill="black"></path>
                                                <path opacity="0.5"
                                                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                    fill="black"></path>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref,reactive,onMounted,defineEmits,defineProps,watch, onUpdated,computed} from 'vue'
import { useMainCategoryStore } from "@/store/signupStore/mainCategory";
import showToast from '@/global_components/Toast/useToast';
import {Account} from '@/store/SwitchAccount'
const props = defineProps(['submit'])
const store = useMainCategoryStore();
const SwitchAccount = Account()
const User = JSON.parse(localStorage.getItem("user"));
const allCatTableShow = ref(false);
const cat_name = reactive([]);
const sub_cat_name = reactive([]);
const sub_cat1_name = reactive([]);
const add_cat = ref("");
const add_sub_cat = ref("");
const add_sub1_cat = ref("");
const loadCat= computed(()=>{
    return store.RegistrationCategories
})
let subCategory = ref([])
let subCategory1 = ref([])

 const Categories_IDs= reactive([]) 
 const sub_Categories_IDs= reactive([]) 
 const sub_Categories1_IDs= reactive([]) 

let signUpForm = reactive({
    RegistrationCategories: []
    })
 // Start Main Category

const allSelectedCatList = ref([])

watch(loadCat,()=>{
    for(let x of loadCat.value){
        add_cat.value = x.Cat_id
        addSelected(x.Cat_id)
        if(x.Scat_id){
         add_sub_cat.value=x.Scat_id
         subCat(x.Scat_id)
        }
        if(x.Scat1_id){
            add_sub1_cat.value = x.Scat1_id
            subCat1(x.Scat1_id)
        }
    }
})

watch(props,()=>{
    if(allSelectedCatList.value.length>0){
        onsubmit()
    }
})


const addSelected = (e) => {
    const subcat = store.mainCategoryList.SubCategories.filter( cat => cat.Cat_id == e )
    subCategory.value = [...subCategory.value, ...subcat]
    if(!subcat.length){
        const cat = store.mainCategoryList.Categories.filter( cat => cat.Cat_id == e )
        allSelectedCatList.value.push(cat[0])
        // allSelectedCatList.value = allSelectedCatList.value.map(v => ({...v, RegD_id: SwitchAccount.Account_detail[0].RegD_id }))
        allCatTableShow.value = true;
    }
  const found =  Categories_IDs.some( el => el === e);
  if (!found) {
      Categories_IDs.push(e);
      const index = store.mainCategoryList.Categories.findIndex( cat => cat.Cat_id == e)
      if(index != -1){
          cat_name[cat_name.length] = store.mainCategoryList.Categories[index].Cat_name
      }
    }
}

const remove_catgory = (index) => {
    Categories_IDs.splice(index, 1);
    cat_name.splice(index, 1);
    add_sub_cat.value = " ";
};

// End Main_Category

// Start Sub_Category

const subCat = (e) => {
    const sub_cat = store.mainCategoryList.SubCategories1.filter( sub_cat => sub_cat.Scat_id == e )
    subCategory1.value = [...subCategory1.value, ...sub_cat]
    if(!sub_cat.length){
        const subcat = store.mainCategoryList.SubCategories.filter( cat => cat.Scat_id == e )
        const cat = store.mainCategoryList.Categories.filter( cat => cat.Cat_id == subcat[0]?.Cat_id )   
        // allSelectedCatList.value = allSelectedCatList.value.map(v => ({...v, RegD_id:SwitchAccount.Account_detail[0].RegD_id }))
        const mergCAt = [cat[0], subcat[0] ]         
        allSelectedCatList.value.push(mergCAt.reduce(((r, c) => Object.assign(r, c)), {})) 
        signUpForm.RegistrationCategories.push(allSelectedCatList.value[1])       
       allCatTableShow.value = true;
    }
  const found =  sub_Categories_IDs.some( el => el === e);
  if (!found) {
      sub_Categories_IDs.push(e);
      const index = store.mainCategoryList.SubCategories.findIndex( sub_cat => sub_cat.Scat_id == e)
      if(index != -1){
          sub_cat_name[sub_cat_name.length] = store.mainCategoryList.SubCategories[index].Scat_name
      }
    }
};

const remove_sub_catgory = (index) => {
    sub_Categories_IDs.splice(index, 1);
    sub_cat_name.splice(index, 1);
    add_cat.value = " ";
};

// End Sub_Category

// Start Sub_Category1

const subCat1 = (e) => {
        const subcat1 = store.mainCategoryList.SubCategories1.filter( cat => cat.Scat1_id == e )
        const subcat = store.mainCategoryList.SubCategories.filter( cat => cat.Scat_id == subcat1[0]?.Scat_id )
        const cat = store.mainCategoryList.Categories.filter( cat => cat.Cat_id == subcat[0]?.Cat_id )
        // allSelectedCatList.value = allSelectedCatList.value.map(v => ({...v, RegD_id: SwitchAccount.Account_detail[0].RegD_id }))
        const mergCAt = [cat[0],subcat[0] , subcat1[0] ]
        allSelectedCatList.value.push(mergCAt.reduce(((r, c) => Object.assign(r, c)), {}))
        // signUpForm.RegistrationCategories.push(allSelectedCatList.value[2])
         allCatTableShow.value = true;
         const found =  sub_Categories1_IDs.some( el => el === e);
  if (!found) {
      sub_Categories1_IDs.push(e);
      const index = store.mainCategoryList.SubCategories1.findIndex( sub_cat1 => sub_cat1.Scat1_id == e)
      if(index != -1){
          sub_cat1_name[sub_cat1_name.length] = store.mainCategoryList.SubCategories1[index].Scat1_name
      }
    }
};

const remove_sub_catgory1 = (index) => {
    sub_Categories1_IDs.splice(index, 1);
    sub_cat1_name.splice(index, 1);
    add_sub1_cat.value = " ";
};

// End Sub_Category1

//  Start Delete_Category_Row

 const removeCategoryRow=(index)=>{
          allSelectedCatList.value.splice(index,1);
        };

// End Delete_Category_Row
const onsubmit = () => {
    allSelectedCatList.value = allSelectedCatList.value.map(v => ({...v, RegD_id:SwitchAccount.Account_detail[0].RegD_id }))
    store.insertCategories(allSelectedCatList.value)
}

onMounted(()=>{
     store.loadCategory()
     .then(response=>{
        if(response){
            store.getRegistrationCategories(SwitchAccount.Account_detail[0].RegD_id)
        }
     })
     
})
</script>