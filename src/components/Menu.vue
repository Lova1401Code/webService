<template>
  <nav
    class="w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card"
    style="z-index: 3; width: 250px"
    id="mySidebar"
  >
    <a class="w3-bar-item w3-button w3-border-bottom w3-large" href="#"
      ><img :src="logo" style="width: 80%"
    /></a>
    <a
      class="w3-bar-item w3-button w3-hide-large w3-large"
      href="javascript:void(0)"
      onclick="w3_close()"
      >Close <i class="fa fa-remove"></i
    ></a>
    <a
      ><RouterLink class="w3-bar-item w3-button w3-teal" to="/"
        >Home</RouterLink
      ></a
    >
    <a
      ><RouterLink class="w3-bar-item w3-button w3-teal" to="/affiche"
        >Tous les listes</RouterLink
      ></a
    >
    <a
      ><RouterLink class="w3-bar-item w3-button w3-teal" to="/articleForm"
        >Créer un article</RouterLink
      ></a
    >
    <a
      ><RouterLink class="w3-bar-item w3-button w3-teal" to="/convert"
        >api convertion</RouterLink
      ></a
    >
    <!-- <a class="w3-bar-item w3-button" href="#">Link 2</a>
        <a class="w3-bar-item w3-button" href="#">Link 3</a>
        <a class="w3-bar-item w3-button" href="#">Link 4</a>
        <a class="w3-bar-item w3-button" href="#">Link 5</a> -->
  </nav>
</template>
<script>
export default {
  data() {
    return {
      logo: "/logo.png", // Chemin de l'image
    };
  },
};
</script>
<style></style>