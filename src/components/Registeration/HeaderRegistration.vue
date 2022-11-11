<template>
    <div class="card mb-xxl-8 mt-10">
        <div class="row mt-2">
            <div class="col-md-12">
                <i @click="router.go(-1)" style="font-size: 20px; color: #5241a1" class="fa fa-arrow-left cursor-pointer px-5 py-4" ></i>
            </div>
        </div>
        <div class="card-body px-9 py-5 pb-0">
            <div class="d-flex flex-wrap flex-sm-nowrap">
                <div class="me-7 mb-4">
                    <div class="symbol symbol-70px symbol-lg-70px symbol-fixed position-relative">
                        <img :src="!data[0].company_logo.includes(null) ? data[0].company_logo : '/assets/img/organizations/media/logo-01.jpg'" alt="image" />
                        <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                    </div>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center mb-2">
                                <h3 class="text-gray-900 fs-2 fw-bolder me-1"> {{ data[0].Company_name }} </h3>
                                <a href="#">
                                    <span class="svg-icon svg-icon-1 svg-icon-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                            <path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="#00A3FF" />
                                            <path class="permanent" d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <!-- <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                 <div class="star_ratings_of_company">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p class="display-inline">5 (24 reviews)</p>
                                </div>  
                            </div> -->
                            <div class="d-flex flex-wrap fw-bold fs-6">
                                <a :href="`https://maps.google.com/?q=${data[0].Head_office_lat},${data[0].Head_office_long}`" target="_blank" class="d-flex mt-0 align-items-center text-gray-700 text-hover-primary  mb-4">
                                    <span class="svg-icon mt-0 svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                        </svg>
                                    </span>
                                <span> {{ data[0].Head_office_address }} </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row supplier_profile_view_for_organizations_stats">
                    <div class="col-xl-4">
                        <a href="#" class=" bg-body-secondary card-xl-stretch mb-xl-8" data-bs-toggle="modal" data-bs-target="#request_requirements_m_01">
                            <div class="card-body" style="padding: 4px 8px !important;">
                                <h1 class="fw-bolder "> { } </h1>
                                <h4 class="fw-bolder text-gray">Completed Projects</h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-xl-4">
                        <a href="#" class=" card-xl-stretch mb-xl-8" data-bs-toggle="modal" data-bs-target="#request_requirements_m_02">
                            <div class="card-body" style="padding: 4px 8px !important;">
                                <h1 class="text-primary fw-bolder"> { } </h1>
                                <h4 class="fw-bolder ">Active Projects</h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-xl-4">
                        <a href="#" class=" card-xl-stretch mb-5 mb-xl-8" data-bs-toggle="modal" data-bs-target="#request_requirements_m_03">
                            <div class="card-body" style="padding: 4px 8px !important;">
                                <h1 class="text-danger fw-bolder"> { } </h1>
                                <h4 class="fw-bolder ">Canceled Projects</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                <li class="nav-item mt-2">
                    <a class="nav-link text-active-primary ms-0 me-10 py-5 active"> {{ data[0].Account_type_name }} Profile & Credibility</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
let { data } = toRefs(props);

// router.beforeEach((to, from) => {

//   return false
// })
</script>
