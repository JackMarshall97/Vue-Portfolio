<script setup lang="ts">
    import hero from "../assets/hero.jpg";
    import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
    <div class="h-[calc(100vh-50px)] relative overflow-hidden text-white">
        
        <img :src="hero" class="w-full h-full object-cover" alt="A picture of Jack Marshall" />
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="md:absolute md:top-2/3 md:left-[50px]">
            <h1 class="">Jack Marshall</h1>
            <div class="flex gap-4">
                <div class="text-xl">
                    <FontAwesomeIcon :icon="faBriefcase" class="text-blue-400 mr-2"/> 
                    <span>Web Developer</span>
                </div>
                <div class="text-xl">
                    <FontAwesomeIcon :icon="faLocationDot" class="text-red-400 mr-2"/> 
                    <span>Northern Rivers, NSW</span>
                </div>
            </div>
        </div>
            

    </div>
</template>