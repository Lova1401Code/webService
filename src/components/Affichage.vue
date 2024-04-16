<template>
  <div style="margin-left: 270px; margin-top: 50px">
    <div class="w3-container">
      <h2>Appel à une API symfony</h2>
      <p>Vous pouvez <em>Voir ici</em> tous les listes des articles:</p>

      <table class="w3-table w3-light-blue w3-padding">
        <thead>
          <tr class="w3-teal">
            <th>image</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.profiles.length > 0">
          <tr class="" v-for="article in profiles" :key="article.id">
            <td>
              <img
                :src="getImageUrl(article.image)"
                alt="image"
                style="width: 80px; height: 80px; border-radius: 50%"
              />
            </td>
            <td>{{ article.titre }}</td>
            <td>{{ article.description }}</td>
            <td>
              <div>
                <button
                  v-on:click="deleteArticle(article.id, article.titre)"
                  class="w3-button w3-red"
                >
                  Supprimer
                </button>
                <button
                  v-on:click="goLire(article.id)"
                  class="w3-button w3-cyan"
                >
                  Lire
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td class="w3-white" colspan="4">téléchargment du contenu...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Affichage",
  methods: {
    getImageUrl(imageName) {
      return "http://127.0.0.1:8000/storage/" + imageName;
    },
    goLire: function (articleid) {
      this.$router.push("/showArticle/" + articleid + "/edit");
    },
    deleteArticle: function (articleid, articleTitre) {
      if (confirm("voullez vous vraiment supprimé l'article " + articleTitre)) {
        axios
          .delete("http://127.0.0.1:8000/api/article/" + articleid + "/delete")
          .then((response) => {
            alert(response.data.message);
            this.getArticle();
          });
      }
    },
    getArticle: function () {
      axios
        .get("http://127.0.0.1:8000/api/article")
        .then((response) => {
          // Traiter la réponse
          this.profiles = response.data.article;
          console.log("Utilisateurs récupérés :", this.profiles);
        })
        .catch((error) => {
          // Gérer les erreurs
          console.error(
            "Erreur lors de la récupération des utilisateurs :",
            error
          );
        });
    },
  },
  data() {
    return {
      profiles: [],
    };
  },
  mounted() {
    this.getArticle();
  },
};
</script>
<style></style>