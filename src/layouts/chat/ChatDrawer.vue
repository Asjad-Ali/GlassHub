<template>
  <div
    id="kt_drawer_chat"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
    <!--begin::Messenger-->
    <div class="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::User-->
          <div class="d-flex justify-content-center flex-column me-3">
            <a
              href="#"
              class="
                fs-4
                fw-bolder
                text-gray-900 text-hover-primary
                me-1
                mb-2
                lh-1
              "
              >Messages</a
            >
          </div>
          <div
            class="
              d-flex
              justify-content-center
              flex-column
              me-3
              topviewallmessage_btn
            "
          >
            <routerLink to="/chat" class="btn btn-xs btn-primary"
              >View All In Inbox</routerLink
            >
          </div>
          <!--end::User-->
        </div>
        <!--end::Title-->
        <div class="card-toolbar">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-light-primary"
            id="kt_drawer_chat_close"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="black"
                ></rect>
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="black"
                ></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body" id="kt_drawer_chat_messenger_body">
        <!--begin::Messages-->
        <div
          class="scroll-y me-n5 pe-5"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
          data-kt-scroll-offset="0px"
        >
          <!--begin::Message(in)-->
          <div class="d-flex justify-content-start mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-start">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-2">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/img/avatars/300-1.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div class="ms-3">
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >Abraham Jhonson</a
                  >
                  <span class="text-muted fs-7 mb-1">2 mins ago</span>
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="
                  p-5
                  rounded
                  bg-light-info
                  text-dark
                  fw-bold
                  mw-lg-400px
                  text-start
                "
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(in)-->
          <div class="d-flex justify-content-start mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-start">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-2">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/img/avatars/300-2.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div class="ms-3">
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >Jaquline Fernandez</a
                  >
                  <span class="text-muted fs-7 mb-1">25 mins ago</span>
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="
                  p-5
                  rounded
                  bg-light-info
                  text-dark
                  fw-bold
                  mw-lg-400px
                  text-start
                "
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(in)-->
          <div class="d-flex justify-content-start mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-start">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-2">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/img/avatars/300-3.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div class="ms-3">
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >Birline Tilo</a
                  >
                  <span class="text-muted fs-7 mb-1">36 mins ago</span>
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="
                  p-5
                  rounded
                  bg-light-info
                  text-dark
                  fw-bold
                  mw-lg-400px
                  text-start
                "
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(in)-->
          <div class="d-flex justify-content-start mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-start">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-2">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/img/avatars/300-4.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div class="ms-3">
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >Lora Mike</a
                  >
                  <span class="text-muted fs-7 mb-1">22 mins ago</span>
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="
                  p-5
                  rounded
                  bg-light-info
                  text-dark
                  fw-bold
                  mw-lg-400px
                  text-start
                "
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?
              </div>
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
    <!--end::Messenger-->
  </div>
</template>

<script>
export default {
  name: "ChatDrawer",
};
</script>

<style lang="scss" scoped>
</style>