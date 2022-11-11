<template>
       <!--Start Live Chat Modal-->
                <div class="modal fade" tabindex="-1" id="live_chat_modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="d-flex justify-content-center flex-column me-3">
                                    <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">Design786</a>
                                    <!--begin::Info-->
                                    <div class="mb-0 lh-1">
                                        <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                        <span class="fs-7 fw-bold text-muted">Active</span>
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--begin::Close-->
                                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <!--end::Close-->
                            </div>

                            <div class="modal-body p-0">
                                <div class="card" id="kt_chat_messenger">
                                    <!--begin::Card body-->
                                    <div class="card-body" id="kt_chat_messenger_body">
                                        <!--begin::Messages-->
                                        <div class="scroll-y me-n5 pe-5 max-h-350">
                                            <!--begin::Message(in)-->
                                            <div class="d-flex justify-content-start mb-5">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-column align-items-start">
                                                    <!--begin::User-->
                                                    <div class="d-flex align-items-center mb-1">
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                                        </div>
                                                        <!--end::Avatar-->
                                                        <!--begin::Details-->
                                                        <div class="ms-3">
                                                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Design786</a>
                                                            <span class="text-muted fs-7 mb-1">2 mins</span>
                                                        </div>
                                                        <!--end::Details-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::Text-->
                                                    <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                                    <!--end::Text-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Message(in)-->
                                            <!--begin::Message(out)-->
                                            <div class="d-flex justify-content-end mb-5">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-column align-items-end">
                                                    <!--begin::User-->
                                                    <div class="d-flex align-items-center mb-1">
                                                        <!--begin::Details-->
                                                        <div class="me-3">
                                                            <span class="text-muted fs-7 mb-1">5 mins</span>
                                                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                                        </div>
                                                        <!--end::Details-->
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="assets/img/avatars/300-5.jpg">
                                                        </div>
                                                        <!--end::Avatar-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::Text-->
                                                    <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                                    <!--end::Text-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Message(out)-->
                                            <!--begin::Message(in)-->
                                            <div class="d-flex justify-content-start mb-5">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-column align-items-start">
                                                    <!--begin::User-->
                                                    <div class="d-flex align-items-center mb-1">
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                                        </div>
                                                        <!--end::Avatar-->
                                                        <!--begin::Details-->
                                                        <div class="ms-3">
                                                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                            <span class="text-muted fs-7 mb-1">1 Hour</span>
                                                        </div>
                                                        <!--end::Details-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::Text-->
                                                    <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                                    <!--end::Text-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Message(in)-->
                                            <!--begin::Message(out)-->
                                            <div class="d-flex justify-content-end mb-5">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-column align-items-end">
                                                    <!--begin::User-->
                                                    <div class="d-flex align-items-center mb-1">
                                                        <!--begin::Details-->
                                                        <div class="me-3">
                                                            <span class="text-muted fs-7 mb-1">2 Hours</span>
                                                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                                        </div>
                                                        <!--end::Details-->
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="assets/img/avatars/300-5.jpg">
                                                        </div>
                                                        <!--end::Avatar-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::Text-->
                                                    <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                                    <!--end::Text-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Message(out)-->
                                            <!--begin::Message(in)-->
                                            <div class="d-flex justify-content-start mb-5">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-column align-items-start">
                                                    <!--begin::User-->
                                                    <div class="d-flex align-items-center mb-1">
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                                        </div>
                                                        <!--end::Avatar-->
                                                        <!--begin::Details-->
                                                        <div class="ms-3">
                                                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                            <span class="text-muted fs-7 mb-1">3 Hours</span>
                                                        </div>
                                                        <!--end::Details-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::Text-->
                                                    <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Proident excepteur ad velit occaecat qui minim occaecat veniam.</div>
                                                    <!--end::Text-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Message(in)-->
                                        </div>
                                        <!--end::Messages-->
                                    </div>
                                    <!--end::Card body-->
                                </div>
                            </div>

                            <div class="modal-footer">
                                <label class="form-label text-left">Type Message</label>
                                <input name="" class="mb-2 form-control form-control-lg form-control-solid">
                                <button type="button" class="btn w-100 btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Live Chat Modal-->
</template>