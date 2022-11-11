<template>

    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <!--begin::Container-->
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <!--begin::Row-->
                        <div class="card">
                            <!--begin::Card body-->
                            <div class="card-body">
                                <!--begin::Layout-->
                                <div class="d-flex flex-column flex-xl-row p-0">
                                    <!--begin::Content-->
                                    <div class="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
                                        <!--begin::Ticket view-->
                                        <div class="mb-0">
                                            <!--begin::Heading-->
                                            <!--end::Heading-->
                                            <!--begin::Details-->
                                            <div class="mb-15">
                                                <div class="row mb-10">
                                                    <div class="col-md-12">
                                                        <a @click="router.go(-1)" class="fa fa-arrow-left cursor-pointer"></a>
                                                    </div>
                                                </div>


                                                <div class="row mb-7">
                                                    <!--begin::Col-->
                                                    <!--end::Col-->
                                                    <!--begin::Col-->
                                                    <div class="col-md-3 fv-row mb-3">
                                                        <label class="fs-6 fw-bold mb-2">Assign To</label>
                                                        <select class="form-select form-select-solid"
                                                            data-control="select2" data-hide-search="true"
                                                            data-placeholder="Assign to" name="user">
                                                            <option value="1" selected>Karina Clark</option>
                                                            <option value="2">Robert Doe</option>
                                                            <option value="3">Niel Owen</option>
                                                            <option value="4">Olivia Wild</option>
                                                            <option value="5">Sean Bean</option>
                                                        </select>
                                                    </div>
                                                    <!--end::Col-->
                                                    <!--begin::Col-->
                                                    <div class="col-sm-3 fv-row mb-3">
                                                        <label class="fs-6 fw-bold mb-2">Status</label>
                                                        <select class="form-select form-select-solid"
                                                            data-control="select2" data-placeholder="Status"
                                                            data-hide-search="true">
                                                            <option value="1" selected>Open</option>
                                                            <option value="2">Pending</option>
                                                            <option value="3">Resolved</option>
                                                            <option value="3">Closed</option>
                                                        </select>
                                                    </div>
                                                    <!--end::Col-->
                                                    <!--begin::Col-->
                                                    <div class="col-sm-3 fv-row mb-3">
                                                        <label class="fs-6 fw-bold mb-2">Priority</label>
                                                        <select class="form-select form-select-solid"
                                                            data-control="select2" data-placeholder="Open"
                                                            data-hide-search="true">
                                                            <option value="1" selected >Low</option>
                                                            <option value="2">Medium</option>
                                                            <option value="3">High</option>
                                                            <option value="3">Urgent</option>
                                                        </select>
                                                    </div>
                                                    <!--end::Col-->
                                                </div>
                                                <!--end::Row-->
                                                <!--begin::Input group-->
                                                <div class="mb-0">
                                                    <textarea
                                                        class="form-control form-control-solid placeholder-gray-600 fw-bolder fs-4 ps-9 pt-7"
                                                        rows="6" name="message"
                                                        placeholder="Share Your Knowledge"></textarea>
                                                    <!--begin::Submit-->
                                                    <button type="submit"
                                                        class="btn btn-primary mt-n20 mb-20 position-relative float-end me-7">Send</button>
                                                    <!--end::Submit-->
                                                </div>
                                                <!--end::Input group-->
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Comments-->
                                            <div class="mb-15">
                                                <!--begin::Comment-->
                                                <div class="mb-9">
                                                    <!--begin::Card-->
                                                    <div class="card card-bordered w-100">
                                                        <!--begin::Body-->
                                                        <div class="card-body">
                                                            <!--begin::Wrapper-->
                                                            <div class="w-100 d-flex flex-stack mb-8">
                                                                <!--begin::Container-->
                                                                <div class="d-flex align-items-center f">
                                                                    <!--begin::Author-->
                                                                    <div class="symbol symbol-50px me-5">
                                                                        <div
                                                                            class="symbol-label fs-1 fw-bolder bg-light-success text-success">
                                                                            S</div>
                                                                    </div>
                                                                    <!--end::Author-->
                                                                    <!--begin::Info-->
                                                                    <div
                                                                        class="d-flex flex-column fw-bold fs-5 text-gray-600 text-dark">
                                                                        <!--begin::Text-->
                                                                        <div class="d-flex align-items-center">
                                                                            <!--begin::Username-->
                                                                            <a href="../../demo13/dist/pages/profile/overview.html"
                                                                                class="text-gray-800 fw-bolder text-hover-primary fs-5 me-3">Sandra
                                                                                Piquet</a>
                                                                            <!--end::Username-->
                                                                            <span class="m-0"></span>
                                                                        </div>
                                                                        <!--end::Text-->
                                                                        <!--begin::Date-->
                                                                        <span class="text-muted fw-bold fs-6">2 Days
                                                                            ago</span>
                                                                        <!--end::Date-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                </div>
                                                                <!--end::Container-->
                                                                <!--begin::Actions-->
                                                                <div class="m-0">
                                                                    <button
                                                                        class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bolder">Reply</button>
                                                                </div>
                                                                <!--end::Actions-->
                                                            </div>
                                                            <!--end::Wrapper-->
                                                            <!--begin::Desc-->
                                                            <p class="fw-normal fs-5 text-gray-700 m-0">I run a team of
                                                                20 product managers, developers, QA and UX Previously we
                                                                designed everything ourselves.</p>
                                                            <!--end::Desc-->
                                                        </div>
                                                        <!--end::Body-->
                                                    </div>
                                                    <!--end::Card-->
                                                </div>
                                                <!--end::Comment-->
                                                <!--begin::Comment-->
                                                <div class="mb-9">
                                                    <!--begin::Card-->
                                                    <div class="card card-bordered w-100">
                                                        <!--begin::Body-->
                                                        <div class="card-body">
                                                            <!--begin::Wrapper-->
                                                            <div class="w-100 d-flex flex-stack mb-8">
                                                                <!--begin::Container-->
                                                                <div class="d-flex align-items-center f">
                                                                    <!--begin::Author-->
                                                                    <div class="symbol symbol-50px me-5">
                                                                        <div
                                                                            class="symbol-label fs-1 fw-bolder bg-light-info text-info">
                                                                            B</div>
                                                                    </div>
                                                                    <!--end::Author-->
                                                                    <!--begin::Info-->
                                                                    <div
                                                                        class="d-flex flex-column fw-bold fs-5 text-gray-600 text-dark">
                                                                        <!--begin::Text-->
                                                                        <div class="d-flex align-items-center">
                                                                            <!--begin::Username-->
                                                                            <a href="../../demo13/dist/pages/profile/overview.html"
                                                                                class="text-gray-800 fw-bolder text-hover-primary fs-5 me-3">Bob
                                                                                Clarcson</a>
                                                                            <!--end::Username-->
                                                                            <span
                                                                                class="badge badge-light-danger">Author</span>
                                                                        </div>
                                                                        <!--end::Text-->
                                                                        <!--begin::Date-->
                                                                        <span class="text-muted fw-bold fs-6">4 Days
                                                                            ago</span>
                                                                        <!--end::Date-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                </div>
                                                                <!--end::Container-->
                                                                <!--begin::Actions-->
                                                                <div class="m-0">
                                                                    <button
                                                                        class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bolder">Reply</button>
                                                                </div>
                                                                <!--end::Actions-->
                                                            </div>
                                                            <!--end::Wrapper-->
                                                            <!--begin::Desc-->
                                                            <p class="fw-normal fs-5 text-gray-700 m-0">I run a team of
                                                                20 product managers, developers, QA and UX Previously we
                                                                designed everything ourselves.</p>
                                                            <!--end::Desc-->
                                                        </div>
                                                        <!--end::Body-->
                                                    </div>
                                                    <!--end::Card-->
                                                </div>
                                                <!--end::Comment-->
                                                <!--begin::Comment-->
                                                <div class="ms-9 mb-9">
                                                    <!--begin::Card-->
                                                    <div class="card card-bordered w-100">
                                                        <!--begin::Body-->
                                                        <div class="card-body">
                                                            <!--begin::Wrapper-->
                                                            <div class="w-100 d-flex flex-stack mb-8">
                                                                <!--begin::Container-->
                                                                <div class="d-flex align-items-center f">
                                                                    <!--begin::Author-->
                                                                    <div class="symbol symbol-50px me-5">
                                                                        <img src="assets/media/avatars/150-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <!--end::Author-->
                                                                    <!--begin::Info-->
                                                                    <div
                                                                        class="d-flex flex-column fw-bold fs-5 text-gray-600 text-dark">
                                                                        <!--begin::Text-->
                                                                        <div class="d-flex align-items-center">
                                                                            <!--begin::Username-->
                                                                            <a href="../../demo13/dist/pages/profile/overview.html"
                                                                                class="text-gray-800 fw-bolder text-hover-primary fs-5 me-3">Matthew</a>
                                                                            <!--end::Username-->
                                                                            <span class="m-0"></span>
                                                                        </div>
                                                                        <!--end::Text-->
                                                                        <!--begin::Date-->
                                                                        <span class="text-muted fw-bold fs-6">3 Days
                                                                            ago</span>
                                                                        <!--end::Date-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                </div>
                                                                <!--end::Container-->
                                                                <!--begin::Actions-->
                                                                <div class="m-0">
                                                                    <button
                                                                        class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bolder">Reply</button>
                                                                </div>
                                                                <!--end::Actions-->
                                                            </div>
                                                            <!--end::Wrapper-->
                                                            <!--begin::Desc-->
                                                            <p class="fw-normal fs-5 text-gray-700 m-0">I run a team of
                                                                20 product managers, developers, QA and UX Previously we
                                                                designed everything ourselves.</p>
                                                            <!--end::Desc-->
                                                        </div>
                                                        <!--end::Body-->
                                                    </div>
                                                    <!--end::Card-->
                                                </div>
                                                <!--end::Comment-->
                                                <!--begin::Comment-->
                                                <div class="overflow-hidden position-relative card-rounded">
                                                    <!--begin::Ribbon-->
                                                    <div class="ribbon ribbon-triangle ribbon-top-start border-success">
                                                        <!--begin::Ribbon icon-->
                                                        <div class="ribbon-icon mt-n5 ms-n6">
                                                            <i class="bi bi-check2 fs-2 text-white"></i>
                                                        </div>
                                                        <!--end::Ribbon icon-->
                                                    </div>
                                                    <!--end::Ribbon-->
                                                    <!--begin::Card-->
                                                    <div class="card card-bordered w-100">
                                                        <!--begin::Body-->
                                                        <div class="card-body">
                                                            <!--begin::Wrapper-->
                                                            <div class="w-100 d-flex flex-stack mb-8">
                                                                <!--begin::Container-->
                                                                <div class="d-flex align-items-center f">
                                                                    <!--begin::Author-->
                                                                    <div class="symbol symbol-50px me-5">
                                                                        <div
                                                                            class="symbol-label fs-1 fw-bolder bg-light-primary text-primary">
                                                                            B</div>
                                                                    </div>
                                                                    <!--end::Author-->
                                                                    <!--begin::Info-->
                                                                    <div
                                                                        class="d-flex flex-column fw-bold fs-5 text-gray-600 text-dark">
                                                                        <!--begin::Text-->
                                                                        <div class="d-flex align-items-center">
                                                                            <!--begin::Username-->
                                                                            <a href="../../demo13/dist/pages/profile/overview.html"
                                                                                class="text-gray-800 fw-bolder text-hover-primary fs-5 me-3">Boris</a>
                                                                            <!--end::Username-->
                                                                            <span class="m-0"></span>
                                                                        </div>
                                                                        <!--end::Text-->
                                                                        <!--begin::Date-->
                                                                        <span class="text-muted fw-bold fs-6">6 Days
                                                                            ago</span>
                                                                        <!--end::Date-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                </div>
                                                                <!--end::Container-->
                                                                <!--begin::Actions-->
                                                                <div class="m-0">
                                                                    <!--begin::Menu-->
                                                                    <button @click="showManu('action')" type="button" 
                                                                        class="btn btn-sm btn-icon btn-active-light-primary"
                                                                        data-kt-menu-trigger="click"
                                                                        data-kt-menu-overflow="true"
                                                                        data-kt-menu-placement="top-end">
                                                                        <!--begin::Svg Icon | path: icons/duotune/general/gen052.svg-->
                                                                        <span class="svg-icon svg-icon-1">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none">
                                                                                <rect x="10" y="10" width="4" height="4"
                                                                                    rx="2" fill="black" />
                                                                                <rect x="17" y="10" width="4" height="4"
                                                                                    rx="2" fill="black" />
                                                                                <rect x="3" y="10" width="4" height="4"
                                                                                    rx="2" fill="black" />
                                                                            </svg>
                                                                        </span>
                                                                        <!--end::Svg Icon-->
                                                                    </button>
                                                                    <!--begin::Menu 2-->
                                                                    <div id="action"  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                                                                        data-kt-menu="true">
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3">
                                                                            <div
                                                                                class="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                                                                Quick Actions</div>
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                        <!--begin::Menu separator-->
                                                                        <div class="separator mb-3 opacity-75"></div>
                                                                        <!--end::Menu separator-->
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3">
                                                                            <a href="#" class="menu-link px-3">New
                                                                                Ticket</a>
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3">
                                                                            <a href="#" class="menu-link px-3">New
                                                                                Customer</a>
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3"
                                                                            data-kt-menu-trigger="hover"
                                                                            data-kt-menu-placement="right-start">
                                                                            <!--begin::Menu item-->
                                                                            <a href="#" class="menu-link px-3">
                                                                                <span class="menu-title">New
                                                                                    Group</span>
                                                                                <span class="menu-arrow"></span>
                                                                            </a>
                                                                            <!--end::Menu item-->
                                                                            <!--begin::Menu sub-->
                                                                            <div
                                                                                class="menu-sub menu-sub-dropdown w-175px py-4">
                                                                                <!--begin::Menu item-->
                                                                                <div class="menu-item px-3">
                                                                                    <a href="#"
                                                                                        class="menu-link px-3">Admin
                                                                                        Group</a>
                                                                                </div>
                                                                                <!--end::Menu item-->
                                                                                <!--begin::Menu item-->
                                                                                <div class="menu-item px-3">
                                                                                    <a href="#"
                                                                                        class="menu-link px-3">Staff
                                                                                        Group</a>
                                                                                </div>
                                                                                <!--end::Menu item-->
                                                                                <!--begin::Menu item-->
                                                                                <div class="menu-item px-3">
                                                                                    <a href="#"
                                                                                        class="menu-link px-3">Member
                                                                                        Group</a>
                                                                                </div>
                                                                                <!--end::Menu item-->
                                                                            </div>
                                                                            <!--end::Menu sub-->
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3">
                                                                            <a href="#" class="menu-link px-3">New
                                                                                Contact</a>
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                        <!--begin::Menu separator-->
                                                                        <div class="separator mt-3 opacity-75"></div>
                                                                        <!--end::Menu separator-->
                                                                        <!--begin::Menu item-->
                                                                        <div class="menu-item px-3">
                                                                            <div class="menu-content px-3 py-3">
                                                                                <a class="btn btn-primary btn-sm px-4"
                                                                                    href="#">Generate Reports</a>
                                                                            </div>
                                                                        </div>
                                                                        <!--end::Menu item-->
                                                                    </div>
                                                                    <!--end::Menu 2-->
                                                                    <!--end::Menu-->
                                                                </div>
                                                                <!--end::Actions-->
                                                            </div>
                                                            <!--end::Wrapper-->
                                                            <!--begin::Desc-->
                                                            <p class="fw-normal fs-5 text-gray-700 m-0">I run a team of
                                                                20 product managers, developers, QA and UX Previously we
                                                                designed everything ourselves.</p>
                                                            <!--end::Desc-->
                                                        </div>
                                                        <!--end::Body-->
                                                    </div>
                                                    <!--end::Card-->
                                                </div>
                                                <!--end::Comment-->
                                            </div>
                                            <!--end::Comments-->
                                            <!--begin::Pagination-->
                                            <ul class="pagination">
                                                <li class="page-item previous disabled">
                                                    <a href="#" class="page-link">
                                                        <i class="previous"></i>
                                                    </a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">1</a>
                                                </li>
                                                <li class="page-item active">
                                                    <a href="#" class="page-link">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">3</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">4</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">5</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">6</a>
                                                </li>
                                                <li class="page-item next">
                                                    <a href="#" class="page-link">
                                                        <i class="next"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <!--end::Pagination-->
                                        </div>
                                        <!--end::Ticket view-->
                                    </div>
                                    <!--end::Content-->
                                    <!--begin::Sidebar-->
                                    <div class="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
                                        <!--begin::Search-->
                                        <div class="position-relative mb-15">
                                            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                            <span
                                                class="svg-icon svg-icon-1 svg-icon-primary position-absolute top-50 translate-middle ms-9">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546"
                                                        height="2" rx="1" transform="rotate(45 17.0365 15.1223)"
                                                        fill="black" />
                                                    <path
                                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                        fill="black" />
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                            <input type="text"
                                                class="form-control form-control-lg form-control-solid ps-14"
                                                name="search" value="" placeholder="Search" />
                                        </div>
                                        <!--end::Search-->
                                        <!--begin::More channels-->
                                        <div class="card-rounded bg-primary bg-opacity-5 p-10 mb-10">
                                            <!--begin::Title-->
                                            <h2 class="text-dark fw-bolder mb-11">Audit Request</h2>
                                            <!--end::Title-->
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center mb-5">
                                                <div class="d-flex flex-column">
                                                    <h5 class="text-gray-800 fw-bolder">TKID</h5>
                                                    <p>3423 </p>

                                                </div>
                                                <!--end::Info-->
                                            </div>
                                            <div class="d-flex align-items-center mb-5">
                                                <div class="d-flex flex-column">
                                                    <h5 class="text-gray-800 fw-bolder">Name</h5>
                                                    <p>Design786 </p>

                                                </div>
                                                <!--end::Info-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center mb-5">
                                                <div class="d-flex flex-column">
                                                    <h5 class="text-gray-800 fw-bolder">Date</h5>
                                                    <p>02/02/2022 </p>

                                                </div>
                                                <!--end::Info-->
                                            </div>

                                        </div>
                                        <div class="card-rounded bg-primary bg-opacity-5 p-10 mb-10">
                                            <!--begin::Title-->
                                            <!--end::Title-->
                                            <!--begin::Item-->
                                            <div class="chat_or_message_with_supplier mb-5">
                                                <h5 class="text-gray-800 fw-bolder">Live Chat</h5>
                                                <a href="#" @click="Show_Chat_Model()"><i
                                                        class="far fa-comment-dots"></i></a>
                                               <router-link to="chat"> <a href="#" target="_blank"><i
                                                        class="fas fa-envelope-open-text"></i></a></router-link>
                                                <!--end::Info-->
                                            </div>
                                            <div class=" mb-5">

                                                <h5 class="text-gray-800 fw-bolder">RFQ</h5>
                                                <span class=" me-2 mb-2" @click="Show_audit_rfq_view_Model()" style="color:blue">RFQ View</span>


                                                <!--end::Info-->
                                            </div>
                                            <div class="mb-5">
                                                <h5 class="text-gray-800 fw-bolder">Quotation</h5>
                                                <span class=" me-2 mb-2" @click="Show_audit_quotation_view_Model()" style="color:blue">Quotation
                                                    View</span>
                                                <!--end::Info-->
                                            </div>
                                            <div class="d-flex align-items-center mb-5">

                                                <h5 class="text-gray-800 fw-bolder">Qutotion Status</h5>
                                                <select name="" class="form-select form-select-sm form-select-solid"
                                                    data-control="select1" data-placeholder="Select..."
                                                    data-allow-clear="true" data-hide-search="true">
                                                    <option>Select...</option>
                                                    <option value="1">Pending</option>
                                                    <option value="1">Accepted</option>
                                                    <option value="5">Rejected</option>
                                                </select>
                                                <!--end::Info-->
                                            </div>
                                            <div class=" mb-5">
                                                <h5 class="text-gray-800 fw-bolder">Audit PO </h5>
                                                <span class=" me-2 mb-2" @click="Show_audit_po_view_Model()"  style="color:blue">PO View</span>
                                                <!--end::Info-->
                                            </div>

                                            <!--end::Item-->
                                            <!--begin::Item-->

                                            <div class="d-flex align-items-center mb-5">
                                                <h5 class="text-gray-800 fw-bolder">PO Status</h5>
                                                <select name="" class="form-select form-select-sm form-select-solid"
                                                    data-control="select1" data-placeholder="Select..."
                                                    data-allow-clear="true" data-hide-search="true">
                                                    <option>Select...</option>
                                                    <option value="1">Pending</option>
                                                    <option value="1">Accepted</option>
                                                    <option value="5">Rejected</option>
                                                </select>
                                                <!--end::Info-->
                                            </div>

                                        </div>
                                        <!--end::More channels-->
                                        <!--begin::Documentations-->
                                        <!--end::Documentations-->
                                    </div>
                                    <!--end::Sidebar-->
                                </div>
                                <!--end::Layout-->
                            </div>
                            <!--end::Card body-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <teleport to="body">
                            
         <ChatModal  v-if="open_Chat_model"  @Close_Chat_Model="Close_Chat_Model" />
         <RFQView  v-if="open_audit_rfq_view_model"  @Close_audit_rfq_view_Model="Close_audit_rfq_view_Model" />
         <AuditQuotationview  v-if="open_audit_quotation_view_model"  @Close_audit_quotation_view_Model="Close_audit_quotation_view_Model" />
         <POView  v-if="open_audit_po_view_model"  @Close_audit_po_view_Model="Close_audit_po_view_Model" />
         
                        
   </teleport>

</template>

<script setup>
import ChatModal from '@/components/Modal/ChatModel.vue';
import RFQView from '@/components/audit/AuditRFQView.vue';
import AuditQuotationview from '@/components/audit/audit-firm/QuotationView.vue';
import POView from '@/components/audit/audit-firm/Modal/AuditPOView.vue';
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const open_Chat_model = ref(false)
const open_audit_rfq_view_model = ref(false)
const open_audit_quotation_view_model = ref(false)
const open_audit_po_view_model = ref(false)

const Show_Chat_Model = () => {
     open_Chat_model.value = true
    }

    const Close_Chat_Model =(event)=>{
     open_Chat_model.value=event
    }

    const Show_audit_rfq_view_Model = () => {
     open_audit_rfq_view_model.value = true
    }

    const Close_audit_rfq_view_Model =(event)=>{
     open_audit_rfq_view_model.value=event
    }

    const Show_audit_quotation_view_Model = () => {
     open_audit_quotation_view_model.value = true
    }

    const Close_audit_quotation_view_Model =(event)=>{
     open_audit_quotation_view_model.value=event
    }
    const Show_audit_po_view_Model = () => {
     open_audit_po_view_model.value = true
    }

    const Close_audit_po_view_Model =(event)=>{
     open_audit_po_view_model.value=event
    }

    const showManu =(e)=>{
setTimeout(()=>{
let ele = document.getElementById(e)
ele.classList.add('showmanu')
},) 
}

document.onclick = function(){
    let submenuele = document.getElementById('headermanu')
    submenuele.classList.remove('showmanu')

    let action = document.getElementById('action')
    action.classList.remove('showmanu')


}

</script>
