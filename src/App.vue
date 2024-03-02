<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Contenu from './components/Contenu.vue'
import Headera from './components/Header.vue'
import Menu from './components/Menu.vue'

</script>

<template>
  <header>
    <!-- <contenu></contenu> -->
    <Headera></Headera>
    <div class="wrapper">
    <Menu></Menu>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

 <RouterView/>
</template>

<style scoped>
header {font-family: "Roboto", sans-serif}

</style>
