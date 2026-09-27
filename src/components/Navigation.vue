<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue';
    import { Menu } from '@lucide/vue';
    import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

    /* --- Handle Resizing --- */
    const isOpen = ref(false); 
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            isOpen.value = false;
        }
    };
    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

</script>

<template>
    <nav class="
        h-[50px] sticky top-0 z-50 flex items-center
        bg-black text-white
        opacity-40 transition-opacity duration-400 hover:opacity-100"
    >  
        <div class="container flex items-center gap-6">
            <button
                @click="isOpen = !isOpen"
                class="icon md:hidden"
            >
                <Menu />
            </button>
            <ul :class="['md:flex md:static md:gap-6 md:pb-0',
                    isOpen 
                        ? 'flex flex-col absolute w-full top-[50px] left-0 bg-black gap-y-4 pb-2'
                        : 'hidden'
                ]"
            >
                <li>
                    <a href="" class="transition-opacity duration-200 hover:opacity-80">Home</a>
                </li>
                <li>
                    <a href="" class="transition-opacity duration-200 hover:opacity-80">About</a>
                </li>
                <li>
                    <a href="" class="transition-opacity duration-200 hover:opacity-80">Skills</a>
                </li>
                <li>
                    <a href="" class="transition-opacity duration-200 hover:opacity-80">Projects</a>
                </li>
                <li>
                    <a href="" class="transition-opacity duration-200 hover:opacity-80">Contact</a>
                </li>
            </ul>
            <div class="ml-auto flex gap-6">
                <a href="https://github.com/JackMarshall97/">
                    <FontAwesomeIcon :icon="faGithub" class="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/jackmarshall97/">
                    <FontAwesomeIcon :icon="faLinkedin" class="icon"/>
                </a>
            </div> 
        </div>
    </nav>
</template>