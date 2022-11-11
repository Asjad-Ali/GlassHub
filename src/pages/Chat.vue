<template>
  <div class="bg-lg messages_inbox">
    <div class="container-xxl post pt-20 pb-20" id="kt_post">
      <!--begin::Layout-->
      <div class="d-flex flex-column flex-lg-row">
        <!--begin::Sidebar-->
        <ChatList />
        <!--end::Sidebar-->
        <!--begin::Content-->
        <ChatBox />
        <!--end::Content-->
      </div>
      <!--end::Layout-->
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import ChatBox from "@/components/chat/ChatBox.vue";
import ChatList from "@/components/chat/ChatList.vue";
export default {
  name: "ChatPage",
  components: {
    ChatBox,
    ChatList,
  },
};
</script>

<style scoped>
</style>