<template>
  <div id="google_translate_element"></div>
  <div id="Supplier_header" style="height: 130px; margin-top: -15px;" class="header py-5" data-kt-sticky="true" data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}">
    <!--begin::Container-->
    <div class="container-xxl flex-column flex-lg-row d-flex flex-grow-1 flex-stack my-md-3 ">
      <!--begin::Header Logo-->
      <div class="d-flex align-items-center me-5">
        <routerLink to="/dashboard">
          <img alt="Logo" :src="logo" class="h-40px h-lg-40px" />
        </routerLink>
        <!-- <div id="google_translate_element"></div> -->
      </div>
      <!--end::Header Logo-->
      <p v-if="accountType[0]?.Account_type == 2" class="d-flex fw-bolder my-1 fs-5" style="color: rgb(80 64 157)">
          Welcome To Freelancer's Dashboard 
      </p>
      <!--begin::Topbar-->
      <div  class="d-flex align-items-center flex-shrink-0 flex-wrap bg-white">
       
        <p v-if="accountType[0]?.Account_type != 2" class="d-lg-flex fw-bolder my-1 fs-5 d-none " style="color: rgb(80 64 157)">
          Switch Account Type  
        </p>
        <!--Start Admin Switcher-->
        <div v-if="accountType[0]?.Account_type != 2" class="d-flex d_switcher align-items-center ms-3 ms-lg-2 mr-10">
          <select class="
              btn
              btn-sm
              btn-outline
              btn-outline-dashed
              btn-outline-success
              btn-active-light-success
            " v-model="account" name="forma"
            @change="switch_dashboard()"
            >
            <option value="" selected="" disabled="">Switch Dashboard</option>
            <option :value="com.RegD_id" v-for="(com, index) in auth.account" :key="index">
              {{ com.Account_type_name }}
            </option>
            <!-- <option value="0" selected="">Supplier</option>
            <option value="1">Audit Firm</option>
            <option value="2">Regulator</option> -->
          </select>
        </div>
        <!--End Admin Switcher-->
       <quick-sreach></quick-sreach>
        <!--begin::Activities-->
        <div class="d-flex align-items-center ms-3 ms-lg-2">
          <!--begin::Menu- wrapper-->
          <div  @click="showheaderManu('headerNotify')" class=" btn btn-icon btn-active-light btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px position-relative menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs038.svg-->
            <span class="badge badge-light bg-danger " style="position: absolute;top: -13px;padding: 6px;color: white;left: 21px;">
            {{notifcations.notification?.total_notifications[0]?.total_notification}}</span>
            <span class="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                  d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
                  fill="black">
                </path>
                <path
                  d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z"
                  fill="black">
                </path>
              </svg>
            </span>
          
          </div>
          <HeaderNotify  id="headerNotify"  />
        </div>
        <div  class="d-flex align-items-center ms-3 ms-lg-4">
          <div @click="showheaderManu('chat')"  class="
              btn
              btn-icon
              btn-color-gray-700
              btn-active-color-primary
              btn-outline
              btn-outline-secondary
              w-30px
              h-30px
              w-lg-40px
              h-lg-40px
              position-relative
            " >
            <span class="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                  d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                  fill="black"></path>
                <path
                  d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                  fill="black"></path>
              </svg>
            </span>
            <!-- <span   class="
                bullet bullet-dot
                bg-success
                h-6px
                w-6px
                position-absolute
                translate-middle
                top-0
                start-50
                animation-blink
              "></span> -->
</div>
       <div id="chat" class="
              menu menu-sub menu-sub-dropdown menu-column
              w-350px w-lg-375px
            " data-kt-menu="true" style="
              z-index: 105;
              position: fixed;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-210px, 65px);
            " data-popper-placement="bottom-end">
            <div class="container topnotificationbar">
              <div class="row heading">
                <div class="col-md-12">
                  <span class="
                      notification_title
                      fs-4
                      fw-bolder
                      text-gray-900 text-hover-primary
                      me-1
                      mb-2
                      lh-1
                    ">Do you need some help?</span>
                </div>
              </div>
            </div>
            <ul class="head_notification_alerts_list">
              <li>
                <a hre="#" class="active cursor-pointer">
                  <div class="flex-lg-row-fluid ms-lg-5 ms-xl-5">
                    <div class="card" id="kt_chat_messenger">
                      <div class="card-footer pt-4" id="kt_chat_messenger_footer">
                        <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input"
                          placeholder="Type a message"></textarea>
                        <div class="text-right">
                          <button class="btn btn-primary" type="button" data-kt-element="send">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>


 </div>

          
        <div @click="showheaderManu('helpSection')" class="d-flex align-items-center ms-3 ms-lg-2">
          <div class="
              btn
              btn-icon
              btn-active-light
              btn-active-color-primary
              btn-outline
              btn-outline-secondary
              w-30px
              h-30px
              w-lg-40px
              h-lg-40px
              position-relative
              menu-dropdown
            " data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <span class="fa fa-question-circle" style="font-size: 24px"> </span>
          </div>
          <div id="helpSection" class="
              menu menu-sub menu-sub-dropdown menu-column
              w-350px w-lg-375px
            " data-kt-menu="true" style="
              z-index: 105;
              position: fixed;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-210px, 65px);
            " data-popper-placement="bottom-end">
            <div class="container topnotificationbar">
              <div class="row heading">
                <div class="col-md-12">
                  <span class="
                      notification_title
                      fs-4
                      fw-bolder
                      text-gray-900 text-hover-primary
                      me-1
                      mb-2
                      lh-1
                    ">Do you need some help?</span>
                </div>
              </div>
            </div>
            <ul class="head_notification_alerts_list">
              <li>
                <a hre="#" class="active cursor-pointer">
                  <div class="flex-lg-row-fluid ms-lg-5 ms-xl-5">
                    <div class="card" id="kt_chat_messenger">
                      <div class="card-footer pt-4" id="kt_chat_messenger_footer">
                        <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input"
                          placeholder="Type a message"></textarea>
                        <div class="text-right">
                          <button class="btn btn-primary" type="button" data-kt-element="send">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex align-items-center ms-3 ms-lg-4 " style="position: relative;">
          <div @click="showheaderManu('headermanu')" class="
              btn
              btn-icon
              btn-color-gray-700
              btn-active-color-primary
              btn-outline
              btn-outline-secondary
              w-30px
              h-30px
              w-lg-40px
              h-lg-40px
            " data-kt-menu-trigger="hover" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <!--begin::Svg Icon | path: icons/duotune/communication/com013.svg-->
            <span class="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                  fill="black"></path>
                <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black"></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::User icon-->
          <!--begin::User account menu-->
          <div class="
              menu
              menu-sub
              menu-sub-dropdown
              menu-column
              menu-rounded
              menu-gray-800
              menu-state-bg
              menu-state-primary
              fw-bold
              py-4
              fs-6
              w-275px
            " data-kt-menu="true" id="headermanu">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <div  class="menu-content d-flex align-items-center px-3">
                <!--begin::Avatar-->
                <div class="symbol symbol-50px me-5">
                  <img alt="Logo" :src="profileStore.user_detail.user_image" />
                </div>
                <!--end::Avatar-->
                <!--begin::Username-->
                <div class="d-flex flex-column">
                  <div class="fw-bolder d-flex align-items-center fs-5">
                    {{auth.user?.User_fullname}}
                  </div>
                  <span>{{auth.user.User_email}}</span>
                </div>
                <!--end::Username-->
              </div>
            </div>

            <!--end::Menu item-->
            <!--begin::Menu separator-->
            <div class="separator my-2"></div>
            <!--end::Menu separator-->
            <!-- <div class="menu-item px-5">
              <router-link :to="'/user-list'"
                ><a class="menu-link px-5">User Access</a></router-link
              >
            </div> -->
            <template v-for="(manu,index) in header_manu " :key="index">
            <!--begin::Menu item-->
            <template v-if="manu.Menue_name == 'Profile'  || manu.Menue_name=='Settings' || manu.Menue_name == 'User Access'">
            <div class="menu-item px-5">
              <router-link :to="'/'+manu.Menue_location"
                ><a class="menu-link  header_menu px-5">{{ manu.Menue_label }}</a></router-link
              >
            </div>
            <!--end::Menu item-->
            </template>
            </template>
            <!--end::Menu item-->
            <!--begin::Menu separator-->
            <div class="separator my-2"></div>
            <!--end::Menu separator-->
            <!--begin::Menu item-->
            <div class="menu-item px-5">
              <button @click="auth.logout()" class="bg-transparent border-0 py-0 menu-link px-5">
                Sign Out
              </button>
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::User account menu-->
          <!--end::Menu wrapper-->
        </div>

        <div class="d-flex align-items-center ms-3 ms-lg-4 " style="position: relative;" id="language" v-if="Nlang != 'en'">
          <div @click="showheaderManu('lange')"  class="
              btn
              btn-icon
              btn-color-gray-700
              btn-active-color-primary
              btn-outline
              btn-outline-secondary
              w-30px
              h-30px
              w-lg-40px
              h-lg-40px
            " data-kt-menu-trigger="hover" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <span class="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16"> 
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/> 
            </svg>
            </span>  
          </div>
        
          <div class="
              language
              menu
              menu-sub
              menu-sub-dropdown
              menu-column
              menu-rounded
              menu-gray-800
              menu-state-bg
              menu-state-primary
              fw-bold
              py-4
              fs-6
              w-275px
            " data-kt-menu="true" id="lange">
           
           
            <div class="menu-item px-5">
              <button style="width: 100%; z-index: 1 !important;background: transparent !important;" @click="changeLangunge()" :class="lang == 'en'?'activeL':''" class="bg-transparent border-0 py-0 menu-link px-5">
                English
              </button>
            </div>
            <div class="separator my-2"></div>
            <div class="menu-item px-5">
              <button style="width: 100%; z-index: 1 !important;background: transparent !important;"  @click="clearLangunge()" :class="lang != 'en'?'activeL':''" class="bg-transparent border-0 py-0 menu-link px-5">
                {{languageNames.of(Nlang)}}
              </button>
            </div>
            
          </div>
        
        </div>
        <!--end::User -->
        <!--begin::Heaeder menu toggle-->
        <!-- <div class="lang" v-if="Nlang != 'en'"><span  >English</span>  <span :class="lang != 'en'?'activeL':''" @click="clearLangunge()">{{languageNames.of(Nlang)}}</span></div> -->
        <div class="
            d-lg-none
            btn
            btn-icon
            btn-active-color-primary
            btn-outline
            btn-outline-secondary
            w-30px
            h-30px
            w-lg-40px
            h-lg-40px
            ms-3
            kt_header_menu_toggle
          " id="kt_header_menu_toggle"  @click="toggleSideBar()">
          <span class="svg-icon svg-icon-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                fill="black"></path>
              <path opacity="0.3"
                d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                fill="black"></path>
            </svg>
          </span>
          <!--end::Svg Icon-->
        </div>
        <!--end::Heaeder menu toggle-->
      
      </div>
      <!-- <div  class="d-flex align-items-center flex-shrink-0" >
          <p class="d-flex fw-bolder my-1 fs-5" style="color: rgb(80 64 157)">
          Welcome To Freelancer's Dashboard
        </p>
      </div> -->
     
     
      <!--end::Topbar-->
    </div>
    <!--end::Container-->
    <!--begin::Separator-->
    <div class="separator my-1"></div>
    <!--end::Separator-->
    <!--begin::Container-->
    <div class="
        header-menu-container
        container-xxl
        d-flex
        flex-stack
        h-lg-75px
        w-100
      " id="kt_header_nav">
      <!--begin::Menu wrapper-->
      <div class="header-menu flex-column flex-lg-row" id="header-menu" data-kt-drawer="true" data-kt-drawer-name="header-menu"
        data-kt-drawer-activate="{default: true, lg:false}" data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px':'250px'}" data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
        <!--begin::Menu-->
        <div class="
            menu
            menu-lg-rounded
            menu-column
            menu-lg-row
            menu-state-bg
            menu-title-gray-700
            menu-state-icon-primary
            menu-state-bullet-primary
            menu-arrow-gray-400
            fw-bold
            my-5 my-lg-0
            align-items-stretch
            flex-grow-1
          " id="#kt_header_menu" data-kt-menu="true">
          <!-- <router-link to="audit_request">
            <p>Audit Request</p>
          </router-link>
          <p>--</p>

          <router-link to="audit_in_process">
            <p>In Process</p>
          </router-link>
          <p>--</p>
          <router-link to="audit_cancelled">
            <p>Cancelled</p>
          </router-link>
           <p>--</p>
          <router-link to="audit_completed">
            <p>Completed</p>
          </router-link> -->

          <template v-for="(manu, index) in header_manu" :key="index">
            <div class="menu-item me-lg-1" v-if="manu.Menue_name == 'Dashboard'">
              <div class="menu-item here">
                <router-link :to="'/' + manu.Menue_location"><a class="menu-link dashbord py-3"  style="background-color: #5241a1 !important;">
                    Dashboard
                  </a></router-link>
              </div>
            </div>
          </template>
          <template v-for="(manu, index) in header_manu" :key="index">
            <div v-if="
              manu.Menue_name != 'Dashboard' &&
              manu.Menue_location != '#' &&
              manu.Isparent == true &&
              manu.Menue_name != 'Profile' &&
              manu.Menue_name != 'User Access' &&
              manu.Menue_name != 'Settings'
            ">
              <div class="menu-item me-lg-1" >
                <div class="menu-item">
                  <router-link :to="'/' + manu.Menue_location">
                    <a class="menu-link py-3">
                 {{ manu.Menue_label }}
                    </a>
                  </router-link>
                </div>
              </div>
            </div>
            <template v-if="
              manu.Menue_name != 'Dashboard' &&
              manu.Menue_name != 'Profile' &&
              manu.Menue_name != 'User Access' &&
              manu.Menue_name != 'Settings' &&
              manu.Isparent == true &&
              manu.Menue_location == '#'
            ">
              <div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"
                class="menu-item menu-lg-down-accordion me-lg-1">
                <span class="menu-link py-3"  >
                 {{ manu.Menue_label }}
                  <span class="menu-arrow d-lg-none"></span>
                </span>
                <div  style="padding: 0px !important;"  class="
                    menu-sub
                    menu-sub-lg-down-accordion
                    menu-sub-lg-dropdown
                    menu-rounded-0
                    py-lg-4
                    w-lg-225px
                  ">
                
                  <template v-for="(sub_manu, sindex) in header_manu" :key="sindex">
                     <template  v-if="manu.Menue_id == sub_manu.Top_menue_id">
                        <div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item herdermenu-lg-down-accordion">
                       <router-link :to="'/' + sub_manu.Menue_location">
                        <span class="menu-link py-3">
                        {{sub_manu.Menue_label}}
                        </span>
                          </router-link>
                     
                     <div  style="padding:0px !important" class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                      <template v-for="(sub_manu2, index) in header_manu" :key="index">
                            <template  v-if="sub_manu.Menue_id == sub_manu2.Top_menue_id">
                               <div class="menu-item">
                                 <span class="menu-link py-3">
                                  <router-link :to="'/' + sub_manu2.Menue_location"> <span class="menu-title">
                                     {{sub_manu2.Menue_label}}
                                  </span> </router-link>
                                 </span>
                               </div>
                             
                            </template>
                      </template>
                       </div>
                     </div>
                   </template>
                  </template>
                </div>
              </div>
            </template>
          </template>
          <!--end::Menu-->
        </div>

        <!--end::Menu wrapper-->
        <div class="flex-shrink-0 p-4 p-lg-0 me-lg-2">
          <div class="
              btn
              btn-sm
              btn-outline
              btn-outline-dashed
              btn-outline-success
              btn-active-light-success
              menu
              menu-lg-rounded
              menu-column
              menu-lg-row
              menu-state-bg
              menu-title-gray-700
              menu-state-icon-primary
              menu-state-bullet-primary
              menu-arrow-gray-400
              fw-bold
              my-5 my-lg-0
              align-items-stretch
              flex-grow-1
            " id="#kt_header_menu" data-kt-menu="true">
            <div data-kt-menu-trigger="hover" data-kt-menu-placement="bottom-start"
              class="menu-item menu-lg-down-accordion me-lg-1">
              <span class="menu-link py-3">
                Quick Links
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <div class="
                  menu-sub
                  menu-sub-lg-down-accordion
                  menu-sub-lg-dropdown
                  menu-rounded-0
                  quick_link
                  py-lg-4
                  w-lg-225px
                ">
                 <template v-for="(qmanu, index) in header_manu" :key="index">
                   <template  v-if="qmanu.quick_link">
                <div class="menu-item">
                  <router-link :to="'/' + qmanu.Menue_location">
                  <a class="menu-link py-3" >
                    <span class="menu-title">{{qmanu.Menue_label}}</span>
                  </a>
                  </router-link>
                </div>
                   </template>
                <!-- <template  v-if="qmanu.quick_link && qmanu.Isparent == true && qmanu.Menue_location == '#'">
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
                  class="menu-item submenu-lg-down-accordion">
                  <span class="menu-link py-3">
                    <span class="menu-title">{{qmanu.Menue_label}}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div class="
                      menu-sub
                      menu-sub-lg-down-accordion
                      menu-sub-lg-dropdown
                      menu-active-bg
                      py-lg-4
                      w-lg-225px
                    ">
                     <template v-for="(sub_manu2, index) in header_manu" :key="index">
                    <template  v-if="qmanu.Menue_id == sub_manu2.Top_menue_id">
                      <div class="menu-item">
                       <router-link :to="'/' + sub_manu2.Menue_location">
                       <a class="menu-link py-3" >
                        <span class="menu-title">{{sub_manu2.Menue_label}}</span>
                       </a>
                       </router-link>
                     </div>
                    </template>
                    </template>
                  </div>
                </div>
                </template> -->
                 </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Container-->
    </div>
  </div>

<teleport to="body">
<div class="drawer-overlay" v-if="drawer_overlay"></div>
</teleport>

</template>

<script>
import {profile} from '@/store/profile'
import HeaderNotify from "@/layouts/header/HeaderNotify.vue";
import { useAuthStore } from "@/store/auth";
import {notification} from '@/store/notifcations'
import QuickSreach from './QuickSreach'
import { Account } from "@/store/SwitchAccount";
import { ref, onMounted, computed } from "vue";
import {useRouter} from 'vue-router'
export default {
  components: {
    HeaderNotify,
    QuickSreach
  },

  setup() {
    const drawer_overlay = ref(false)
    const profileStore = profile()
    const logo = ref( process.env.VUE_APP_COMPANY_LOGO)
    const switch_account = Account()
    const auth = useAuthStore();
    const notifcations = notification();
    const account = ref(null);
    const accountType = ref([])
    const router = useRouter()
    const lang = ref('')
    const Nlang = ref(navigator.language.substring(0,2))
    const header_manu = computed(()=>{
      return auth.header_manu
    }) 
  const  switch_dashboard =()=>{
     switch_account.Account_Id = account.value;
      sa_detail();
      router.push({path:'/dashboard'})
      location.reload();
  }
   


   const  toggleSideBar =()=>{
     drawer_overlay.value=true
     var ele = document.getElementById('header-menu')
     ele.classList.add('shownav')
    }
  
     const  removeSideBar =()=>{
     drawer_overlay.value=false
     var ele = document.getElementById('header-menu')
     ele.classList.remove('shownav')
    }


     const sa_detail=()=>{
      switch_account.Account_detail =auth.account?.filter( (data) => { return data.RegD_id==switch_account.Account_Id});
      localStorage.setItem('switch_account',JSON.stringify(switch_account.Account_detail))
      switch_account.User_role=auth.UserRole?.filter( (data) => { return data.RegD_id==switch_account.Account_Id});  
      // profileStore.getSetting(); 
    }

     document.onclick = function(e){
         if(!e.target.className.includes('kt_header_menu_toggle')){
          removeSideBar()
         }
          
        let manuLink =document.getElementsByClassName('menu-link')
         for(let m of manuLink){
            m.style.backgroundColor=""
          }
     

        let ele =document.getElementsByClassName('show')
         for(let x of ele){
            x.classList.remove('show')
         }

        let subele =document.getElementsByClassName('showsub')
         for(let y of subele){
           y.classList.remove('showsub')
         }

         let submenuele = document.getElementById('headermanu')
         submenuele.classList.remove('showheadermanu')

          let helpSection = document.getElementById('helpSection')
         helpSection.classList.remove('showheadermanu')
        
         let chat = document.getElementById('chat')
         chat.classList.remove('showheadermanu')
         
         if(Nlang.value !='en'){
          let lange = document.getElementById('lange')
         lange.classList.remove('showheadermanu')
         }
        


         let notification = document.getElementById('headerNotify')
         notification.classList.remove('showheadermanu')
        if(e.target.nextSibling.className.includes('show')){
           
         }
         if(e.target.className.includes('menu-link')){
          toggleSideBar()
          e.target.style.backgroundColor="rgba(245, 248, 250, .8)"
          let  element =e.target.nextSibling 
          element.classList.add('show')
         }  
       }
     
     const showheaderManu =(e)=>{
      setTimeout(()=>{
        removeSideBar()
       let ele = document.getElementById(e)
       ele.classList.add('showheadermanu')
      }) 
     }

const changeLangunge =()=>{
  localStorage.setItem('lang','en')
  location.reload();
  
}

const  clearLangunge=()=>{
  localStorage.removeItem('lang')
  location.reload()
}
      function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          let expires = "expires="+ d.toUTCString();
          document.cookie = 'googtrans' +'=; Path=/;  Domain=' + '.glasshub.ai' +  '; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure' 
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
        }

     function googleTranslateElementInit(lang) {
            setCookie('googtrans', `/en/${lang}`,1);
             new google.translate.TranslateElement({
             pageLanguage: 'en'
           }, 'google_translate_element');
        }
        
        const languageNames = new Intl.DisplayNames(['en'], {
         type: 'language'
        });





onMounted(()=>{
          accountType.value=auth.account?.filter( (data) => { return data.RegD_id==auth.user.RegD_id});
          account.value=switch_account.Account_detail[0].RegD_id
          switch_account.Account_Id = account.value;
          sa_detail()
          auth.Manu();
          profileStore.GetUser();
          profileStore.getSetting();
          if(!localStorage.getItem('lang') || navigator.language.substring(0,2) == 'en')
          {
            lang.value = navigator.language.substring(0,2)
            googleTranslateElementInit(lang.value)
          }else{
            lang.value  = localStorage.getItem('lang')  
            googleTranslateElementInit(lang.value) 
          }
      })


    return {
      logo,
      auth,
      account,
      header_manu,
      switch_account,
      accountType,
      showheaderManu,
      profileStore,
      switch_dashboard,
      notifcations,
      toggleSideBar,
      drawer_overlay,
      changeLangunge,
      clearLangunge,
      lang,
      Nlang,
      languageNames
    }
  }
};
</script>


<style scoped>
  .language{
    position: absolute;
    top: 44px;
    right:0px
  }
.lang{
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.lang>span{
    cursor: pointer;
    font-weight: bold;
  }
  .activeL{
    color: #5241a1;
    position: relative;
  
}
 .activeL::before{
  position: absolute;
    left: -12px;
    top: 63%;
    height: 34%;
    width: 2px;
    background-color: #5241a1;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}
.activeL::after {
   position: absolute;
    left: -12px;
    bottom: 0;
    height: 2px;
    width: 17px;
    background-color: #336699;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}
.Supplier_header .dashbord:hover{
  background-color: #5241a1 !important;
}
.btn.btn-active-light-success.btn-outline:not(.btn-outline-default) {
    border-color: #5241a1 !important;
}
.menu-state-bg .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) {
    transition: color .2s ease,background-color .2s ease !important;
    background-color: rgba(245,248,250,.8) !important;
}
.showsub{
    padding: 10px !important;
    position: absolute;
    display: block;
    left: 100%;
}
.show{
  display: block;
  position: absolute;
  top:45px;
  max-height: 400px;
  min-height: 0px;
}
.quick_link{
  overflow: auto;
}
.showheadermanu{
  display: block;
  position: absolute;
  top:50px;
  right: 0px;
}
.menu-item {
  position: relative;
}
.menu-title-gray-700 .menu-item  .dashbord {
  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: rgb(82 65 161) !important;
  color: #fff !important;
}
.submenu-lg-down-accordion:hover .menu-sub-lg-down-accordion{
   display:block;
   position:absolute;
   top:0px;
   right:100%
}
.herdermenu-lg-down-accordion:hover .menu-sub-lg-down-accordion{
  display: block;
  position:absolute;
   top:0px;
   left:100%
}

@media (max-width:992px){
  #Supplier_header{
       flex-direction: column;
       z-index: 115 !important;
  }
  .show{
  display: block;
  position: relative;
  top:0px;
  max-height: 400px;
  min-height: 0px;
}
.menu-link{
      width: 100%;
    display: inline-flex;
    justify-content: space-between;
}
.shownav{
    display: block !important;
    background: #fff;
    width: 210px;
    margin-top: -4px;
}
}
/* .menu-item:hover  .menu-sub{
  display: flex !important;
  padding: 0px !important;
  z-index: 105;
  position: absolute;
  inset: 0px auto auto 0px;
  top: 40px;
    transform: translate3d(463px, 89px, 0px);
} */
@media (max-width:380px) {
  .input-group{
  order:5;
  margin-left: 8px;
  margin-top: 6px;
}
#Supplier_header{
  height: 147px !important;
}
.input-group input{
    height: 32px !important;
}
.showheadermanu{
      position:absolute !important;
      transform: translate(0px, 146px) !important;
}
#headermanu{
  transform: translate(0px, 30px) !important;
}
}
.container-xxl {
  padding:0px 0px !important;
}

@media(max-width:640px){
  
.Supplier_header >div
{
  margin: 0px !important;
}

}
</style>
<style>
  .dashbord font {
    z-index:1 !important
  }
  /* .dashbord:hover font {
    z-index:-1 !important
  } */
  font{
      z-index: -1;
}
.drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    z-index: 109;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-animation: animation-drawer-fade-in 0.3s ease-in-out 1;
    animation: animation-drawer-fade-in 0.3s ease-in-out 1;
}
@media(min-width:992px){
  .drawer-overlay{
     display: none !important;
  }
}
</style>
