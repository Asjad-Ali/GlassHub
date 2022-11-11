
<template>

 <div class="modal fade show"  style="display:block;background:rgba(0,0,0,0.5);opacity:1 !important">
        <div class="modal-dialog modal-lg mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Rating</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="Close_rating_view_Model()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-12 text-center mb-10">
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star rating-size"></i>
                        </div>

                        <div class="col-md-2">
                            <label class="form-label mb-0">Comment's</label>
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control form-control-lg form-control-solid"></textarea>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" @click="Close_rating_view_Model()">Cancel</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
  import { defineEmits } from 'vue'

const emit = defineEmits(['Close_rating_view_Model'])
const Close_rating_view_Model = () => {
    emit('Close_rating_view_Model', false)
}
        
  

</script>