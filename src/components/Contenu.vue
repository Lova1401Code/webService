<template>
  <div class="alert alert-success h2">
    <h2 class="alert alert-success">{{ txt }}</h2>
    <liste v-on:changertitre="changemt($event)" :myArr="myArr" :prenom="prenom.prenom" :taille="prenom.taille" :texte="txt"></liste>
    
  </div>
</template>
<script>
import Liste from "./Liste.vue";
export default {
  name: "Contenu",
  data() {
    return {
      txt: "manandrana composant",
      prenom: {
        prenom: "Lova",
        taille: 8,
      },
      myArr: [
        {titre: "Andrebabe", date: 2009},
        {titre: "Malok'ila", date: 2010},
        {titre: "i neniko", date: 2016}
      ]
    };
  },
  methods: {
    changemt: function (nvTitre){
          this.txt = nvTitre
      }
  },
  components: {
    liste: Liste,
  },
};
</script>
<style>
.h2{
  margin-top: 100px!important;
}
</style>
