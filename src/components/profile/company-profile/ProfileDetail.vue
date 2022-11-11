<template>
      <div class="card mb-5 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="table-responsive">
                                                    <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                        <tbody>
                                                            <div class="row mb-6">
                                                                <!--begin::Label-->
                                                                <label class="col-lg-4 col-form-label fw-bold fs-6 text-muted">Company Logo</label>
                                                                <!--end::Label-->
                                                                <!--begin::Col-->
                                                                <div class="col-lg-8">
                                                                    <!--begin::Image input-->
                                                                    <div class="image-input image-input-outline" data-kt-image-input="true"  :style='{ backgroundImage: `url("${company_info.company_logo}")` }'>
                                                                        <!--begin::Preview existing avatar-->
                                                                        <div class="image-input-wrapper w-125px h-125px"  :style='{ backgroundImage: `url("${company_info.company_logo}")` }'></div>
                                                                        <!--end::Preview existing avatar-->
                                                                        <!--begin::Label-->
                                                                        <!-- <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                                            <i class="fas fa-pencil-alt"></i>
                                                                            
                                                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                                            <input type="hidden" name="avatar_remove" />
                                                            
                                                                        </label> -->
                                                                        <!--end::Label-->
                                                                        <!--begin::Cancel-->
                                                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                                            <i class="fa fa-close"></i>
                                                                        </span>
                                                                        <!--end::Cancel-->
                                                                        <!--begin::Remove-->
                                                                        <!-- <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                                            <i class="fa fa-close"></i>
                                                                        </span> -->
                                                                        <!--end::Remove-->
                                                                    </div>
                                                                    <!--end::Image input-->
                                                                    <!--begin::Hint-->
                                                                    <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                                                                    <!--end::Hint-->
                                                                </div>
                                                                <!--end::Col-->
                                                            </div>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Company Name:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info.Company_name}}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Company Start Date:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info?.Start_date?.substring(0,10)}}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Account Type:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info.Account_type_name}}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Business Category:</span>
                                                                </td>
                                                                <td style="display:flex">
                                                                    <span class="text-muted fw-bold d-block" v-for="(list, index) in company_info?.category_list?.split('/')" :key="index">{{list}},</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Company Size:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info.Company_size}}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Global Presence:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold" v-for="(list , index ) in company_info?.global_presence?.split('/') " :key="index">{{list}},</span>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="table-responsive">
                                                    <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block"><a class="fa fa-map-marker" aria-hidden="true" style="color: #5241a1; font-size: 20px" :href="'https://www.google.com/maps/place/'+company_info.Head_office_address+'./@'+company_info.Head_office_long+','+company_info.Head_office_lat+',17z'" target="_blank"></a> Head Office Address:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info.Head_office_address}}</span>
                                                                </td>
                                                            </tr>
                                                            <tr v-for="(list , index ) in company_info?.office_address?.split('/') " :key="index">
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block"><a class="fa fa-map-marker" aria-hidden="true" style="color: #5241a1; font-size: 20px" href="https://www.google.com/maps/place/PARATECH+Software+Solutions+(Pvt.)+Ltd./@31.4726997,74.3744779" target="_blank"></a> Branch Office Address:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{list}}</span>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block"><a class="fa fa-map-marker" aria-hidden="true" style="color: #5241a1; font-size: 20px" href="https://www.google.com/maps/place/PARATECH+Software+Solutions+(Pvt.)+Ltd./@31.4726997,74.3744779,17z/data=!3m1!4b1!4m5!3m4!1s0x39190674013debd3:0x589391755c4fb701!8m2!3d31.47269!4d74.3766497" target="_blank"></a> Branch Office Address:</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">869 Saint Johns Pl. Brooklyn, NY 11216</span>
                                                                </td>
                                                            </tr> -->
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">Website:</span>
                                                                </td>
                                                                <td>
                                                                    <a href="#"><span class="text-muted fw-bold d-block">{{company_info?.Website_url}}</span></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
</template>

<script>
import {ref,watch,onMounted} from 'vue'
export default {
    props:['company_info'],
}
</script>