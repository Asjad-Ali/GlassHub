<template>
    <div class="d-flex flex-column flex-root">
           <div class="page d-flex flex-row flex-column-fluid">
               <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                   <!-- <div id="kt_header" class="header">
                       <div class="container-xxl d-flex flex-grow-1 flex-stack ">
                           <div class="d-flex align-items-center me-5 signupheaderlogo">
                               <a href="#" class="signupheaderlogo">
                                   <img alt="Logo" src="assets/admin/media/logo.png" class="h-40px h-lg-40px" />
                               </a>
                           </div>
                       </div>
                       <div class="separator"></div>
                   </div> -->
                   <div class="bg-lg">
                   <div id="kt_content_container"
                       class="bg-lg d-flex flex-column-fluid align-items-start container-xxl py-10">
                       <div class="content flex-row-fluid" id="kt_content">
                           <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                               id="kt_create_account_stepper">
                               <div class="card d-flex justify-content-center  w-xxl-350px me-4">
                                   <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
                                       <div class="bgi-position-center mb-5 fw-bolder">
                                           <h2 style="color: #5241a1"> </h2>
                                       </div>
                                       <div class="stepper-nav">
                                           <div class="stepper-item completed" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">1</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Document Control</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
                                           </div>
                                           <div class="stepper-item completed"  data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">2</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Third Party Information</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
                                           </div>
                                           <div  class="stepper-item completed" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">3</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Audit Firm Information</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
                                           </div>
                                           <div  class="stepper-item completed" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">4</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Guidelines</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
                                           </div>
                                           <div  class="stepper-item completed" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">5</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Executive Summary</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
   
                                           </div>
                                           <div class="stepper-item current" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">6</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Assessment Controls</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
   
                                           </div>
                                           <div  class="stepper-item pending" data-kt-stepper-element="nav">
                                               <div class="stepper-line w-40px"></div>
                                               <div class="stepper-icon w-40px h-40px">
                                                   <i class="stepper-check fa fa-check"></i>
                                                   <span class="stepper-number">7</span>
                                               </div>
                                               <div class="stepper-label">
                                                   <h3 class="stepper-title">Report Summary</h3>
                                                   <div class="stepper-desc fw-bold">Comment</div>
                                               </div>
   
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <AssessmentControls  />
                               <div class="aside-profile-details ms-4">
                                    <div class="card-body px-lg-10">
                                        <HelpText :helpText="regStore.helpText" />
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
           </div>
       </div>
   </template>
   
<script setup>
import AssessmentControls from '@/components/audit/audit-firm/report/AssessmentControls.vue';
import HelpText from '@/components/global/HelpText.vue';
import { useRegisterationStore } from '@/store/registeration.store';
const regStore = useRegisterationStore()

</script>