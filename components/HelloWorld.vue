<script setup lang="ts">
    import {ref} from 'vue'

    const msg = ref('HELLO WORLD')

</script>

<template>
    <div class="flex justify-center align-center w-full h-screen" data-cy="helloWorldComp">

        <p class="text-3xl text-green-500 underline" data-cy="helloWorldText">UNIT TESTING WITH TAILWIND WORKS. CONGRATS</p>

    </div>

</template>