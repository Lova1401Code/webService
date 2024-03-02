<template>
  <ul class="container liste">
    <h2>Voici les listes des fruits :</h2>
    <li v-for="(fruit, index) in fruits" v-bind:key="index">
      <div class="card">
        <div class="card-body">

          {{ fruit }}
        </div>
      </div>
    </li>
    <button v-on:click="suppFilm" class="btn btn-danger mt-2"> Supprimer un fruits</button>
    <button v-on:click="suppTexte" class="btn btn-danger mt-2"> Supprimer le texte</button>
    <button v-on:click="changeTitre" class="btn btn-danger mt-2"> Modifier titre</button>
    <button v-on:click="changeTitreHeader" class="btn btn-danger mt-2"> Modifier titre header</button>
    <h4>{{soratra}}</h4>
    <p>prenom: {{ prenom }} et la taille est : {{ taille }} apres on reverse et donne {{ reversing() }}</p>
  </ul>
  <ul class="container liste">
    <li v-for="(film, index) in myArr" v-bind:key="index">
      <div class="card">
        <div class="card-body">
          Titre= {{ film.titre }} date: {{ film.date }}
        </div>
      </div>
    </li>
    <button v-on:click="suppFilm" class="btn btn-danger mt-2">Supprimer un film</button>
  </ul>
</template>
<script>
// import {bus} from '../main'
export default {
  name: "Liste",
  data() {
    return {
      fruits: ["orange", "Ananas", "banane"],
      soratra: "mandeha"
    };
  },
  props: {
    texte: {
      type: String
    },
    prenom: {
        type: String
    },
    taille: {
        type: Number,
        required: true
    },
    myArr: {
      type: Array
    }
  },
  methods: {
    reversing : function () {
        return this.prenom.split('').reverse().join('')
    },
    
      suppFilm: function () {
         this.myArr.pop()
      },
      suppTexte: function () {
        this.soratra = ""
      },
      changeTitre: function(){
        this.$emit('changertitre', 'Nouveau Titre')
      },
      changeTitreHeader: function(){
        bus.$emit('changerTitreHeader', 'Mon nouveau titre header')
      }
  },
};
</script>
<style scoped src="./liste.css"></style>
