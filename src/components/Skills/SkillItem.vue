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
    <div class="col-span-12 sm:col-span-6 lg:col-span-4 p-6 bg-white rounded-xl">
        <div class="flex flex-col justify-center items-center">
            <FontAwesomeIcon v-if="faIcon" :icon="faIcon" class="icon-lg mr-2" :style="{ color: colour }"/>
            <h3 class="item-heading pt-2">{{ title }}</h3> 
        </div>
        <p class="text-black pt-2">{{ description }}</p>
    </div>
</template>