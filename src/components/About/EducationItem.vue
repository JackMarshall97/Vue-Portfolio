<script setup lang="ts">
defineProps<{
    qualification: string
    institution: string
    period: string
}>()
import Hero from '../../assets/hero.png';
</script>

<template>
    <div class="flex flex-1 border border-1 border-gray-500 text-white text-left p-8 mb-4">
        <div class="flex-1">
            <h2>{{ qualification }}</h2>
            <p>{{ institution }}</p>
            <p>{{ period }}</p>
        </div>
        <div class="flex-1">
            <img :src="Hero" class="h-100 w-100"/>
        </div>
    </div>
</template>