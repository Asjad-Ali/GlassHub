<template>
     <div class="card">
        <div class="card-body pt-5">
            <div class="company-details">
                <div class="overview">
                    <br>
                    <h4>{{helpText[0]?.H_title}}</h4>
                </div>
                <div class="separator separator-dashed border-gray-300 my-8"></div>
                <div v-if="helpText?.length" class="d-flex align-items-sm-center mb-2">
                    <p v-html="helpText[0].H_description"></p>
                </div>
                <div v-else class="text-muted text-center">
                    Help Text Not Found
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {toRefs, defineProps} from 'vue';

const props = defineProps({
  helpText: {
    type: Array,
    required: true
  }
})
const { helpText } = toRefs(props);
</script>
