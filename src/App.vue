<template>
  <div class="main_app" style="height:100%">
    <router-view></router-view>
  </div>

</template>
<script setup>
</script>
<style>
@import "./assets/css/custom.css";
.btn.btn-primary 
{
   color: #fff;
    /* border-color: #5241a1; */
    background-color: #5241a1 !important;
}
.main_app .menu-state-primary  .menu-item.hover > .main_app .menu-link:not(.disabled):not(.active), .main_app .menu-state-primary .menu-item .menu-link:hover:not(.disabled):not(.active) {
    transition: color 0.2s ease, background-color 0.2s ease;
    color: #5241a1 !important;
}

.main_app .nav-line-tabs .nav-item .nav-link.active,.main_app .nav-line-tabs .nav-item.show .nav-link,.main_app .nav-line-tabs .nav-item .nav-link:hover:not(.disabled) {
    border-bottom: 1px solid #5241a1 !important;
}

.main_app .text-active-primary.active {
    transition: color 0.2s ease, background-color 0.2s ease;
    color: #5241a1 !important;
}
.page-item.active .page-link {
    background-color: #5241a1 !important;
}

.form-check-input:checked {
    background-color: #5241a1 !important;
    border-color: #5241a1 !important;
}
a {
    /* color: #5241a1 !important; */
    text-decoration: none;
}
.menu-icon-gray-700 .menu-item .menu-link .menu-icon i, .menu-title-gray-700 .menu-item .menu-link, .menu-title-gray-700 .menu-item .menu-link .menu-title {
    color: #5e6278 !important;
}
.btn.btn-active-light-success.btn-outline:not(.btn-outline-default){
    border-color: #5241a1 !important;
}
.btn-outline-success{
   color: #5241a1 !important;
}
@media (min-width: 992px){
.header {
  flex-direction: column;
}
.header .header-menu {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
}

.main_app .btn-check:checked +.main_app .btn.btn-primary,.main_app .btn-check:active +.main_app .btn.btn-primary,.main_app .btn.btn-primary:focus:not(.btn-active),.main_app .btn.btn-primary:hover:not(.btn-active),.main_app .btn.btn-primary:active:not(.btn-active),.main_app .btn.btn-primary.active,.main_app .btn.btn-primary.show, .show >.main_app .btn.btn-primary {
    color: #FFFFFF;
    border-color: #5241a1;
    background-color: #5241a1 !important;
}

@media (max-width:580px) {
    .nav-line-tabs{
        display: flex;
        flex-direction:column;
    }
    .gy-0{
      --bs-gutter-y: 1rem !important;
    }
}
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"; */
</style>
<style lang="scss">
// @import "~bootstrap-icons/font/bootstrap-icons.css";
// @import "~apexcharts/dist/apexcharts.css";
// @import "~quill/dist/quill.snow.css";
// @import "~animate.css";
// @import "~sweetalert2/dist/sweetalert2.css";
// @import "~nouislider/distribute/nouislider.css";
// @import "~@fortawesome/fontawesome-free/css/all.min.css";
// @import "~socicon/css/socicon.css";
// @import "~line-awesome/dist/line-awesome/css/line-awesome.css";
// @import "~@yaireo/tagify/src/tagify.scss";
// @import "~dropzone/dist/dropzone.css";
// @import "~@vueform/multiselect/themes/default.css";
// @import "~prism-themes/themes/prism-shades-of-purple.css";
// @import "~element-plus/lib/theme-chalk/index.css";
 /* eslint-disable */
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import "assets/sass/plugins";
@import "assets/sass/style";
</style>