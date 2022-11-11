<template>
     <div class="card" >
        <div class="card-body pt-5">
            <div class="company-details">
                <div class="overview">
                    <br>
                    <h4>Help Text</h4>
                </div>
                <div class="separator separator-dashed border-gray-300 my-8"></div>
                <div v-if="store.helpText.length" class="d-flex align-items-sm-center mb-2">
                    <p v-html="store.helpText[0].H_description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { useRegisterationStore }=require("@/store/registeration.store");

const store = useRegisterationStore()
</script>
