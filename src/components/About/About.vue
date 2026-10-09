<script setup lang="ts">
import { education, experience } from '../../data/about';
import EducationItem from './EducationItem.vue';
import ExperienceItem from './ExperienceItem.vue';
</script>

<template>
    <div class="section bg-zinc-300 text-black">
        <div class="container">
            <h1 class="heading">About</h1>
            <p>Learn more about my background and experience.</p>
            <div>
                <h2 class="subheading">Education</h2>
                <div class="mt-4 flex flex-col md:flex-row gap-4">
                    <EducationItem 
                        v-for="item in education"
                        v-bind="item"
                    />
                </div>
            </div>

            <div>
                <h2 class="subheading">Experience</h2>
                <div class="flex gap-6">
                    <ExperienceItem 
                        v-for="item in experience"
                        v-bind="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>