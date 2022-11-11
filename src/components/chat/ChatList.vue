<template>
  <div
          class="
            flex-column flex-lg-row-auto
            w-100 w-lg-300px w-xl-400px
            mb-10 mb-lg-0
          "
        >
          <!--begin::Contacts-->
          <div class="card card-flush">
            <!--begin::Card header-->
            <div class="card-header pt-7" id="kt_chat_contacts_header">
              <!--begin::Form-->
              <form class="w-100 position-relative" autocomplete="off">
                <!--begin::Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                <span
                  class="
                    svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                    position-absolute
                    top-50
                    ms-5
                    translate-middle-y
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="17.0365"
                      y="15.1223"
                      width="8.15546"
                      height="2"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      fill="black"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--end::Icon-->
                <!--begin::Input-->
                <input
                  type="text"
                  class="form-control form-control-solid px-15"
                  name="search"
                  v-model="search"
                  @change="getList()"
                  placeholder="Search by name"
                />
                <!--end::Input-->
              </form>
              <!--end::Form-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-5" id="kt_chat_contacts_body">
              <!--begin::List-->
              <div
                class="scroll-y me-n5 pe-5 h-200px h-lg-auto"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
                data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
                data-kt-scroll-offset="5px"
              >
                <!--begin::User-->
                <div class="d-flex flex-stack py-4"  v-for="(list ,index) in user_list" :key="index" >
                  <!--begin::Details-->
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-45px symbol-circle">
                      <span
                        class="
                          symbol-label
                          bg-light-danger
                          text-danger
                          fs-6
                          fw-bolder
                        "
                        >{{ShortName(list.RegD_Name_frm)}}</span
                      >
                      <div
                        class="
                          symbol-badge
                          bg-success
                          start-100
                          top-100
                          border-4
                          h-15px
                          w-15px
                          ms-n2
                          mt-n2
                        "
                      ></div>
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Details-->
                    <div class="ms-5">
                      <a
                        href="#"
                        class="
                          fs-5
                          fw-bolder
                          text-gray-900 text-hover-primary
                          mb-2
                        "
                        > {{list.RegD_Name_to==switchAccount.Company_name?list.RegD_Name_frm:list.RegD_Name_to}}</a
                       
                      >
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::Details-->
                  <!--begin::Lat seen-->
                  <div class="d-flex flex-column align-items-end ms-2">
                    <span class="text-muted fs-7 mb-1">20 arslan hrs</span>
                  </div>
                  <!--end::Lat seen-->
                </div>
                <!--end::User-->
                <!--begin::Separator-->
                <div class="separator separator-dashed d-none"></div>
                <!--end::Separator-->
              </div>
              <!--end::List-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Contacts-->
        </div>
</template>

<script setup>
  import { computed, onMounted, watch,ref } from 'vue';
  import {chat} from '@/store/chat'
  import {Account} from '@/store/SwitchAccount'
  const switchAccount = Account().Account_detail[0]
  const store = chat()
  const search = ref('')
  const user_list= computed(()=>{
     return store.user_list
  })

watch(user_list,()=>{
  console.log(user_list.value)
})

const ShortName =(val)=>{
   const name = val.substring(0,1).toUpperCase() 
   return name
}

const getList= ()=>{
  store.getUserList(search.value)
}

onMounted(()=>{
   store.getUserList(search.value)
})  

</script>

<style scoped>
</style>