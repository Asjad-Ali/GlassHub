<template>
  <div
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
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
                <!--begin::Navbar-->
                <div class="text-right mb-5 pt-20px edit_btn_link" v-if="per?.Can_edit">
                  <router-link to="edit-user-profile"><a class="btn btn-sm btn-primary me-2">Edit Profile</a></router-link>
                </div>

                <ProfileHeader  :user_info="user_detail"></ProfileHeader>
                <profile-detail  :user_info="user_detail"></profile-detail>

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

import ProfileHeader from "@/components/profile/my-profile/ProfileHeader.vue"
import ProfileDetail from "@/components/profile/my-profile/ProfileDetail.vue";
import {profile} from '@/store/profile'
import {ref, onMounted,computed} from "vue"
import permission from '@/_helper/Permission'
export default {
components:{
   ProfileHeader, 
   ProfileDetail
},

setup(){
  const store = profile()
   const user_detail = computed(()=>{
    return store.user_detail
   })
   const per = ref('')
    // const GetUser= async(id)=>{
    //    await Api.get('/api/profile/profile-by-id?User_id='+ id)
    //    .then(response=>{
    //      user_detail.value=response.data[0];
    //    })
    //    .catch(error=>{
    //      showToast(error.message)
    //    })
    // }
    onMounted(()=>{
      per.value = permission()
      store.GetUser()
    })
   return{
      user_detail,
      per
   }
}
};
</script>
