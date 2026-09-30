<script setup lang="ts">
import { frontend, backend } from '../../data/skills';
import SkillItem from './SkillItem.vue';
</script>

<template>
    <div class="my-8 container">
        <h1 class="heading">Skills</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="mt-8">
            <h2 class="text-center md:text-left border-b pb-4 mb-4">Frontend Development</h2>
            <div class="grid grid-cols-12 gap-6">
                <SkillItem 
                    v-for="item in frontend"
                    v-bind="item"
                />
            </div>
        </div>
        <div class="mt-8">
            <h2 class="text-left border-b pb-4 mb-4">Backend Development</h2>
            <div class="grid grid-cols-12 gap-6">
                <SkillItem 
                    v-for="item in backend"
                    v-bind="item"
                />
            </div>
        </div>
    
    </div>
</template>
