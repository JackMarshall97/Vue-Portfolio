<script setup lang="ts">

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
defineProps<{
    title: string
    faIcon?: IconDefinition
    description?: string
    colour?: string
}>()
</script>

<template>
    <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 p-4 rounded-lg">
        <div class="flex flex-col justify-center items-center">
            <FontAwesomeIcon v-if="faIcon" :icon="faIcon" class="icon-lg mr-2" :style="{ color: colour }"/>
            <h2 class="text-white">{{ title }}</h2> 
        </div>
        <p class="text-white">{{ description }}</p>
    </div>
</template>