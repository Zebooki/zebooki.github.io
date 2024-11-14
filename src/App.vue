<script setup>
import {ref} from 'vue'

const count = ref(0)

</script>

<template>
    <!-- Output Render -->
    <div>
        
      <button class="entrance" @click="count++">
        Enter {{ count }}
      </button>
        
    </div>
</template>

<style>
    /* CSS Styling */
    .entrance{
      width: fill;
      font-size: xx-large;
      background-color: transparent;
      border: 0px;
      text-shadow: 
    0 0 7px #000000,
    0 0 10px #2a2a2a,
    0 0 21px #8c8c8c,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;;
      color: rgb(255, 255, 255);
      cursor: pointer;
    }

    body{
        background-color: gray;
    }
</style>