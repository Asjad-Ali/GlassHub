<template>
    <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6148502d50939">
        <!--begin::Header-->
        <div class="px-7 py-5">
            <div class="fs-5 text-dark fw-bolder">Filter Options</div>
        </div>
        <!--end::Header-->
        <!--begin::Menu separator-->
        <div class="separator border-gray-200"></div>
        <!--end::Menu separator-->
        <!--begin::Form-->
        <div class="px-7 py-5">
            <!--begin::Input group-->
            <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-bold">Status:</label>
                <!--end::Label-->
                <!--begin::Input-->
                <div>
                    <select v-model="id" class="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_6148502d50939" data-allow-clear="true">
                        <option selected value="" disabled>Select One</option>
                        <option value="1">Whitelist</option>
                        <option value="2">Graylist</option>
                        <option value="3">Block</option>
                    </select>
                </div>
            </div>
            <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-bold">Notifications:</label>
                <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                    <label class="form-check-label">Enabled</label>
                </div>
                <!--end::Switch-->
            </div>
            <div class="d-flex justify-content-end">
                <button @click="FilterMenuHide" type="button" class="btn btn-sm btn-light btn-active-light-primary me-2" >Cancel</button>
                <button @click="submit" type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
            </div>
            <!--end::Actions-->
        </div>
        <!--end::Form-->
    </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['filterList']);
const id = ref("")
const submit = () => {
    emit('filterList', id.value )
}
const FilterMenuHide = () =>{
    let filter = document.getElementById('FilterMenu')
    filter.classList.remove('showFilter')
}

</script>