<template>
  <div style="margin-left: 270px; margin-top: 150px">
    <div class="w3-container row">
      <div class="col-md-2"><p></p></div>
      <div class="col-md-8 w3-container">
        <div class="w3-card-4">
          <div
            class="card-body"
            style="padding-top: 20px; padding-left: 20px; padding-bottom: 20px"
          >
            <h4>Détails sur l'article</h4>
            <hr />
            <br />
            <div class="row">
              <div class="col-md-6">
                <img
                  :src="'http://127.0.0.1:8000/storage/' + image"
                  alt="image"
                  style="width: 200px; height: 200px"
                />
              </div>
              <div class="col-md-6">
                <h5>Titre:</h5>
                <p>{{ title }}</p>

                <h5>Conténus:</h5>
                <p>{{ content }}</p>

                <br />
                <br />
                <button v-on:click="modif(id)" class="w3-button w3-teal">
                  Modifier
                </button>
                <button class="w3-button w3-red">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"><p></p></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "show",
  methods: {
    modif: function (ida) {
      this.$router.push("/modifArticle/" + ida);
    },
    lireArticle(articleId) {
      axios
        .get("http://127.0.0.1:8000/api/article/" + articleId + "/show")
        .then((response) => {
          // Traiter la réponse
          console.log("Utilisateurs récupérés :" + response.data.article);
          this.title = response.data.article.titre;
          this.content = response.data.article.description;
          this.image = response.data.article.image;
        })
        .catch((error) => {
          // Gérer les erreurs
          console.log(this.content);
          console.error(
            "Erreur lors de la récupération des utilisateurs :",
            error
          );
        });
    },
  },
  data() {
    return {
      title: "",
      image: "",
      content: "",
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.lireArticle(this.id);
  },
};
</script>