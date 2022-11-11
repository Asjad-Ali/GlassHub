<template>
  <div class="flex-lg-row-fluid ms-lg-5 ms-xl-5">
    <!--begin::Messenger-->
    <div class="card" id="kt_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header" id="kt_chat_messenger_header">
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
              >Brian Cox</a
            >
            <!--begin::Info-->
            <div class="mb-0 lh-1">
              <span
                class="badge badge-success badge-circle w-10px h-10px me-1"
              ></span>
              <span class="fs-7 fw-bold text-muted">Active</span>
            </div>
            <!--end::Info-->
          </div>
          <!--end::User-->
        </div>
        <!--end::Title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <!--end::Menu-->
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body" id="kt_chat_messenger_body">
        <!--begin::Messages-->
        <div
          class="scroll-y me-n5 pe-5 h-600px h-lg-auto"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Message(in)-->
          <div class="d-flex justify-content-start mb-0">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-start">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/img/avatars/300-6.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div class="ms-3">
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >Brian Cox</a
                  >
                  <span class="text-muted fs-7 mb-1">2 mins</span>
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
          <!--begin::Message(out)-->
          <div class="d-flex justify-content-end mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-end">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-1">
                <!--begin::Details-->
                <div class="me-3">
                  <span class="text-muted fs-7 mb-1">5 mins</span>
                  <a
                    href="#"
                    class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                    >You</a
                  >
                </div>
                <!--end::Details-->
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/img/avatars/300-5.jpg" />
                </div>
                <!--end::Avatar-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="
                  p-5
                  rounded
                  bg-light-primary
                  text-dark
                  fw-bold
                  mw-lg-400px
                  text-end
                "
                data-kt-element="message-text"
              >
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(out)-->
        
      <!--begin::Card footer-->
      <div class="card-footer pt-4" id="kt_chat_messenger_footer">
        <!--begin::Input-->
        <textarea
          class="form-control form-control-flush mb-3"
          rows="1"
          data-kt-element="input"
          placeholder="Type a message"
        ></textarea>
        <!--end::Input-->
        <!--begin:Toolbar-->
        <div class="text-right">
          <!--begin::Send-->
          <button class="btn btn-primary" type="button" data-kt-element="send">
            Send
          </button>
          <!--end::Send-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
  </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "ChatBox",
};
</script>

<style scoped>
</style>