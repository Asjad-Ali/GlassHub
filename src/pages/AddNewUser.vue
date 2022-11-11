<template>
  <div
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled"
  >
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          <!--begin::Container-->
          <div class="bg-lg">
            <div
              id="kt_content_container"
              class="d-flex flex-column-fluid align-items-start container-xxl"
            >
              <!--begin::Post-->
              <div class="content flex-row-fluid" id="kt_content">
                  <org-header :user_detail="user_detail"></org-header>
                  <add-user></add-user>
              </div>
            </div>
          </div>
          <!--end::Container-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrgHeader from "@/components/add-new-user/OrgHeader.vue"
import AddUser from "@/components/add-new-user/AddUser.vue"
import {useAuthStore} from '@/store/auth'
import {mapState} from 'pinia'

import {ref, onMounted} from "vue"
import Api from '@/APi/axios_instance'
export default {
    components: {
        OrgHeader,
        AddUser
    },
    computed: {
   ...mapState(useAuthStore , {
     user_id :'user.User_id'
     })
},
watch:{ 
  user_id(){
    this.GetUser(this.user_id)
  }
},
setup(){
   
   const auth = useAuthStore();
   const user_detail = ref('') 
    const GetUser= async(id)=>{
    
       await Api.get( '/api/profile/profile-by-id?User_id='+ id)
       .then(response=>{
         user_detail.value=response.data[0];
       }) 
    }
    onMounted(()=>{
      GetUser(auth.user.User_id)
    })
   return{
     
      user_detail,
      GetUser
   }
}
};
</script>
