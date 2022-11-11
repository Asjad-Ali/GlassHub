<template>
        <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
            <div class="modal-dialog modal-lg modal-lg mt-20">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">View Quotation</h5>
                        <div  @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div v-if="document" class="modal-body">
                        <embed :src="document" frameborder="0" width="100%" height="500px">
                    </div>
                    <div class="modal-footer">
                        <button type="button"  @click="CloseModel" class="btn btn-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits } from "vue"

const props = defineProps({
    document: String
})

const document = toRefs(props)
console.log("ddddddddddddddd",props.document)
const emit = defineEmits(['closeFileViewModal'])
const CloseModel = () => {
    emit('closeFileViewModal', false)
}
</script>

<style>

</style>