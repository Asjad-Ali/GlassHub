<template>
  <div class="row ">
    <div class="col-md-8">
    <h3 class="pt-2">All Compliances</h3>
    </div>
    <div class="col-md-4 text-right" v-if="per?.Can_add">
    <router-link to="add_compliance">
        <a class="btn btn-sm btn-primary">Add</a></router-link
    >
    <!--<button type="button" data-bs-toggle="modal" data-bs-target="#help_modal" class="btn btn-sm btn-icon btn-active-light btn-active-color-primary btn-outline btn-outline-success"><i class="far fa-question-circle"></i></button>-->
    </div>
</div>
<PageLoader v-if="loader" />
<div v-else class="row mt-50">
                                    <div class="table-responsive">
                                        <!--begin::Table-->
                                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <!--begin::Table head-->
                                            <thead>
                                                <tr class="fw-bolder">
                                                    <th>ID</th>
                                                    <th>Date</th>
                                                    <th class="min-w-150px">Compliance Name</th>
                                                    <!-- <th class="min-w-140px">Category</th> -->
                                                    <th class="min-w-140px" v-if="Account_detail[0]?.Account_type!=4">Account Type</th>
                                                    <th class="min-w-140px">Compliance For</th>
                                                    <th class="min-w-140px">Defined Compliance</th>
                                                    <th class="min-w-100px text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <!--end::Table head-->
                                            <!--begin::Table body-->
                                            <tbody>
                                                <tr v-for="(list,index) in allComplanice" :key="index">
                                                    <td>{{list.Compliance_id}}</td>
                                                    <td>{{list.created_at.substring(0,10)}}</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="d-flex justify-content-start flex-column">
                                                                <span class="fw-bold d-block fs-7">{{list.Compliance_name}}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <!-- <td>
                                                        <span class="fw-bold d-block fs-7"> Financial Services</span>
                                                    </td> -->
                                                    <td v-if="Account_detail[0]?.Account_type!=4">
                                                        <span v-if="list.Supplier" class="fw-bold d-block fs-7">Supplier</span>
                                                        <span v-if="list.AuditFirm" class="fw-bold d-block fs-7">Audit Firm</span>
                                                        <span v-if="list.Freelancer" class="fw-bold d-block fs-7">Freelancer</span>
                                                        <span v-if="list.Regulator" class="fw-bold d-block fs-7">Regulator</span>
                                                        <span v-if="list.Organization" class="fw-bold d-block fs-7">Organization</span>
                                                    </td>
                                                    <td>
                                                        <span v-if="list.Registration" class="fw-bold d-block fs-7">Registeration</span>
                                                        <span v-if="list.Certificate" class="fw-bold d-block fs-7">Certificate</span>
                                                         <span v-if="list.Project" class="fw-bold d-block fs-7">Project</span>
                                                    </td>
                                                    <td>{{list.Regulatory_Auth_name}}</td>
                                                    <td>
                                                        <div class="d-flex justify-content-end flex-shrink-0">

                                                           <router-link :to="'/add_compliance/'+list.Compliance_id" v-if="per?.Can_edit"> <a  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                            </a>
                                                            </router-link>
                                                            <a  @click="deleteCompalanice(list.Compliance_id)" v-if="per?.Can_delete" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <!--end::Table body-->
                                        </table>
                                        <!--end::Table-->
                                    </div>
                                </div>
<!-- 
                                 <ul class="pagination mt-5">
                                    <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
                                    <li class="page-item "><a href="#" class="page-link">1</a></li>
                                    <li class="page-item active"><a href="#" class="page-link">2</a></li>
                                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                                    <li class="page-item "><a href="#" class="page-link">4</a></li>
                                    <li class="page-item "><a href="#" class="page-link">5</a></li>
                                    <li class="page-item "><a href="#" class="page-link">6</a></li>
                                    <li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li>
                                </ul> -->

                                <div style="display:flex ; justify-content:center; margin-top:10px">
                                   <v-pagination
                                    v-model="current_page"
                                    :pages="row_num"
                                    :range-size="1"
                                    active-color="#DCEDFF"
                                    @update:modelValue="GetFullList"
                                  />
                                </div>

</template>
<script>
import PageLoader from "@/global_components/loader/PageLoader.vue";
import VPagination from '@hennge/vue3-pagination'
import { ref,onMounted, computed,watch } from 'vue'
import Api from '@/APi/axios_instance'
import {Account} from '@/store/SwitchAccount'
import {useAuthStore} from '@/store/auth'
import {mapState} from 'pinia'
 import showToast from '@/global_components/Toast/useToast'
 import sweetalert from '@/global_components/sweetAlert/SweetAlert'
 import permission from '@/_helper/Permission'
 import {useRouter} from 'vue-router'
export default {
    components:{
        VPagination,
        PageLoader
    },

     computed:{
      ...mapState(Account,{
         Account_detail:'Account_detail'
      })
     },
    setup() {
    const SwitchAccount =computed(()=>  Account().Account_detail[0]);
    const auth = useAuthStore()
    const current_page = ref(1)
    const row_num =ref(1)
    const loader =ref(false)
     const allComplanice= ref('');   
     const per =ref('');
     const router = useRouter()
    //  const GetFullList =async()=>{
    //      await Api.get('/api/compliance/all-compliance?RegD_id='+SwitchAccount.Account_Id)
    //      .then(response=>{
    //          allComplanice.value=response.data
    //      })
    //  }

    watch(SwitchAccount,()=>{
       if(SwitchAccount.value.Account_type==2){
       router.push('dashboard')
      }
       GetFullList()
    })

     const deleteCompalanice = async(id)=>{
          const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to Delete this recorde?')
        if(value.isConfirmed){
            await Api.delete('api/compliance/delete?Compliance_id='+id)
         .then(response=>{
             if(response.status==200){
                GetFullList()
                 showToast('Delete SuccessFully', 'success')
             }
         })
         .catch(error=>{
             showToast(error.message)
         })
         }
     }
     
           const cal_row =(value)=>{
            row_num.value=Math.ceil(value/10)
         }

       const GetFullList= async() => {
        loader.value = true
       await Api.get(`/api/compliance/get-bypagination/?Search=null&PageNo=${current_page.value}&RowNo=10&RegD_id=${SwitchAccount.value?.RegD_id}&Account_id=${SwitchAccount.value.Account_type}`)
       .then(response=>{
        loader.value = false
           cal_row(response.data.TotalRows)
             allComplanice.value=response.data.Pagination;
       })
       .catch(error=>{
         showToast(error.message)
       })
        loader.value = false
      };

      onMounted(()=>{
        per.value = permission()
        GetFullList()
    })

     return{
        current_page,
        row_num,
        allComplanice,
        deleteCompalanice,
        GetFullList,
        per,
        loader
     }
     
    },   
}
</script>