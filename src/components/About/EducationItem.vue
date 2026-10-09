<script setup lang="ts">
defineProps<{
    qualification: string
    institution: string
    period: string
}>()
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="flex flex-1 border border-1 border-gray-500 text-black text-left px-4 py-8 mb-4">
        <FontAwesomeIcon :icon="faGraduationCap" class="icon-lg mr-4"/>
        <div class="flex-1">
            <h3>{{ qualification }}</h3>
            <p>{{ institution }}</p>
            <p>{{ period }}</p>
        </div>
    </div>
</template>