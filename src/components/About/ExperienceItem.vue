<script setup lang="ts">
defineProps<{
    role: string
    company: string
    period: string
}>()
</script>

<template>
    <div class="flex-1 border border-1 border-gray-500 text-black text-left p-8 mb-4">
        <h3>{{ role }}</h3>
        <p>{{ company }}</p>
        <p>{{ period }}</p>
    </div>
</template>