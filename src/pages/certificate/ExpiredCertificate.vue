<template>
<div  id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
						<div id="kt_toolbar_container" class="container-xxl py-5">
							<div class="row gy-0 gx-10">
                                <div class="col-xl-9 pd-30 bg-w">
                                    <div class="row mb-10">
                                        <div class="col-md-8">
                                            <h1 class="pb-2"> Expired Certificate </h1>    
                                        </div>
                                        <div class="col-md-4 text-right" v-if="per.Can_add">
                                           <router-link to="add-certificate"> <a class="btn btn-primary">Add</a></router-link>
                                        </div>
                                    </div> 
                                    <div class="col-md-12">
                                        <ul class="topmenutabs nav nav-tabs nav-line-tabs mb-5 fs-6">
                                            <li @click="allCertificate" class="nav-item ">
                                                <router-link to="/certificate" class="nav-link cursor-pointer " ><h5>All Certificates</h5></router-link>
                                            </li>
                                            <li @click="expiredCertificate" class="nav-item">
                                                <router-link to="/expired-certificate"  class="nav-link cursor-pointer active" ><h5>Expired Certificates</h5></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <PageLoader v-if="loader" />
                                        <div v-else >
                                            <div v-if="all_certificate.length" class="table-responsive">
                                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <!--begin::Table head-->
                                                    <thead>
                                                        <tr class="fw-bolder text-muted">
                                                            <th class="min-w-150px">Ref No</th>
                                                            <th class="min-w-150px">Certificate</th>
                                                            <th class="min-w-140px">Category</th>
                                                            <th class="min-w-140px">Authorty</th>
                                                            <th class="min-w-140px">Validity</th>
                                                            <th class="min-w-140px">Expiry Date</th>
                                                            <th class="min-w-140px">Verfication</th>
                                                            <th class="min-w-100px text-end">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <!--end::Table head-->
                                                    <!--begin::Table body-->
                                                    <tbody>
                                                     
                                                        <tr v-for="(cer , index ) in all_certificate" :key="index"> 
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Ref_no }}</span>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="d-flex justify-content-start flex-column">
                                                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Certificate_name }}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Cat_name }}</span>
                                                            </td>
                                                            <td >
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{cer.Authority_id }}</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7"> {{ cer.Lifetime_valid ? "Life Time" : 'Limited Time' }} </span>
                                                            </td>
                                                            <td>
                                                                <span v-if="!cer.Lifetime_valid" class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Validity_to?.substring(0,10) }}</span>
                                                                 <span v-if="cer.Isexpire" class="badge badge-xs ml-5 badge-danger" >Expired</span>
                                                            </td>
                                                            <td class="text-center">
                                                                <i  v-if="cer.Isexpire==false" class="fa fa-check text-success"></i>
                                                                <i  v-if="cer.Isexpire==true" class="fa fa-times text-danger"></i>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex justify-content-end flex-shrink-0">
    
                                                                  <router-link :to="'/add-certificate/'+ cer.Certificate_id" v-if="per.Can_edit">
                                                                    <a  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                                                                    <a @click="DeleteRecord(cer.Certificate_id)" v-if="per.Can_delete" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
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
    
                                                
                                            </div>
                                            <RecordNotAvailable v-else />
                                        </div>
                                    </div>
                                    
                                  <div style="display:flex ; justify-content:center; margin-top:10px">
                                    <v-pagination
                                    v-model="current_page"
                                    :pages="row_num"
                                    :range-size="1"
                                    active-color="#DCEDFF"
                                    @update:modelValue="GetRecord"
                                      />
                                   </div>

                                </div>
                                <div class="col-xl-3 aside-profile-details">
                                   <projects-help-text  :helpText="regStore?.helpText"></projects-help-text>
                                </div>
                            </div>
                        </div>
                    </div>
					<!--end::Toolbar-->
                      </div>
            </div>
        </div>
</div>

</template>

<script>
import VPagination from '@hennge/vue3-pagination'
import ProjectsHelpText from "@/components/global/HelpText.vue"
import PageLoader from "@/global_components/loader/PageLoader.vue"
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue"
import Api from '@/APi/axios_instance'
import {onMounted, ref ,watch,computed} from "vue";
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import showToast from '@/global_components/Toast/useToast'
import sweetalert from '@/global_components/sweetAlert/SweetAlert'
// import {useRouter} from 'vue-router'
import permission from '@/_helper/Permission'
import {useRegisterationStore } from "@/store/registeration.store";
export default {
    components: {
        ProjectsHelpText,
        VPagination,
        PageLoader,
        RecordNotAvailable
    },
    setup() {
      const auth =useAuthStore()
      const SwitchAccount = computed(()=>Account().Account_detail[0]) 
      const regStore = useRegisterationStore()
      const per= ref('');
      let loader = ref(false);
      const all_certificate = ref('')
    //   const router = useRouter()
      const row_num = ref(1)    
      const current_page = ref(1)
      watch(SwitchAccount,()=>{
          GetRecord()
          regStore.loadRegistrationHelpText(`${SwitchAccount.value.Account_type}/Expired Certificates/null/null`)
      })

      const cal_row =(value)=>{
        row_num.value=Math.ceil(value/10)
      }

      const GetRecord= async() => {
        loader.value = true
       await Api.get(`/api/Certificate/GetList/${SwitchAccount.value.Account_type}/${SwitchAccount.value.RegD_id}/null/${current_page.value}/10/1`)
       .then(response=>{
           cal_row(response.data.TotalRows)
           all_certificate.value=response.data.Pagination;
       })
       .catch(error=>{
        showToast(error.message)
       })
       loader.value = false
      };

      const DeleteRecord = async (id)=>{
         const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to Delete this recorde?')
        if(value.isConfirmed){
          await Api.delete('/api/Certificate/Delete/' + id )
         .then(response=>{
         if (response.status ==200){
             GetRecord()
         }
       })
       .catch(error=>{
         showToast(error.message)
       })
         }
      }

      const nextpage =(value)=>{
          if(value==0){
              return false
          }
          if(value > row_num.value )
          {
              return false
          }
         current_page.value=value;
         GetRecord()
      }

      
      onMounted(()=>{
         per.value =permission()
        GetRecord()
         regStore.loadRegistrationHelpText(`${SwitchAccount.value.Account_type}/Expired Certificates/null/null`)
      
      })
      return{
          row_num,
          current_page,
          all_certificate,
          nextpage,
          GetRecord,
          DeleteRecord,
          per,
          regStore,
          loader,
      }

    },
}
</script>