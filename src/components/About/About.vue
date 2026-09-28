<script setup lang="ts">
import { education, experience } from '../../data/about';
import EducationItem from './EducationItem.vue';
import ExperienceItem from './ExperienceItem.vue';
</script>

<template>
    <div class="container border-b border-gray-700">
        <h1>About</h1>

        <div>
            <h2>Education</h2><hr class="mb-4">
            <div class="flex gap-4">
                <EducationItem 
                    v-for="item in education"
                    v-bind="item"
                />
            </div>
        </div>

        <div>
            <h2>Experience</h2><hr class="mb-4">
            <div class="flex gap-6">
                <ExperienceItem 
                    v-for="item in experience"
                    v-bind="item"
                />
            </div>
        </div>

    </div>
</template>