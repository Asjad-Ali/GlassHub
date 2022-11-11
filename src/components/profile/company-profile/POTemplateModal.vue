<template>
  <div class="modal fade show" tabindex="-1"  style="display:block;background:rgba(0,0,0,0.5);opacity:1 !important">
    <div class="modal-dialog modal-lg mt-15">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">PO Template</h5>
         
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="close_PO_Model()">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mb-15 flex">
              <QuillEditor
                theme="snow"
                :toolbar="toolbar"
                v-model="formData.Summernote"
                class="form-control form-control-lg form-control-solid"
              />
            </div>
          </div>          
        </div>

        <div class="modal-footer">
                <button type="button" class="btn btn-light" @click="close_PO_Model()">Cancel</button>
                <button type="button" class="btn btn-primary">Add PO</button>
            </div>
      </div>
    </div>
  </div>

</template>

<script setup >
import { reactive } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { defineEmits } from 'vue'

const emit = defineEmits(['close_PO_Model']);
    
    const formData = reactive({
      Summernote: "",
    });    

    const toolbar = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
    
      ["clean"],
    ];

    const close_PO_Model= ()=>{
             emit('close_PO_Model', false)
         }
 
</script>