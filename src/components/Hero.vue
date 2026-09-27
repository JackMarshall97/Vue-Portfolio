<script setup lang="ts">
    import hero from "../assets/hero.jpg";
    import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
    <div class="h-[calc(100vh-50px)] container-fill md:py-8">
        <div 
            class="h-full flex flex-col md:flex-row md:mx-auto 
                    border rounded-3xl border-gray-700 md:p-2"
        >
            <div class="flex flex-col md:basis-3/5 justify-center text-white text-left p-8">
                <h1 class="uppercase">Jack Marshall</h1>
                <div class="flex gap-8 mb-6">
                    <div class="text-xl">
                        <FontAwesomeIcon :icon="faBriefcase" class="text-blue-400 mr-2"/> 
                        <span>Web Developer</span>
                    </div>
                    <div class="text-xl">
                        <FontAwesomeIcon :icon="faLocationDot" class="text-red-400 mr-2"/> 
                        <span>Northern Rivers, NSW</span>
                    </div>
                </div>
                <hr class="text-gray-700"><br>
                <p class="text-2xl font-bold pb-2">Welcome to my personal website!</p>
                <p class="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec sapien tincidLorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="relative md:basis-2/5 aspect-square">
                <div class="absolute inset-0 bg-black/20 md:rounded-r-3xl"></div>
                <img :src="hero" class="w-full h-full object-cover md:rounded-r-3xl" alt="A picture of Jack Marshall" />
            </div>
        </div>
    </div>
</template>