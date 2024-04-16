<template>
  <div style="margin-left: 270px; margin-top: 40px">
    <div class="row">
      <div class="col-md-2"><p></p></div>
      <div class="col-md-8 w3-padding w3-container w3-card-4">
        <h2 class="w3-text-cyan">Modification d'article</h2>
        <div class="row">
          <div class="col-md-6">
            <p>Vous pouvez modifier l'article ici.</p>
          </div>
          <div class="col-md-6">
            <img
              :src="getImageUrl(formData.image)"
              alt="image"
              style="
                width: 200px;
                height: 200px;
                border-radius: 10%;
                margin-left: 20%;
              "
            />
          </div>
        </div>
        <form
          @submit.prevent="submitForm"
          style="padding-top: 10px"
          enctype="multipart/form-data"
        >
          <p>
            <label class="w3-text-cyan"><b>Titre</b></label>
            <input
              v-model="formData.title"
              class="w3-input w3-border"
              name="first"
              type="text"
            />
          </p>
          <p>
            <label class="w3-text-cyan"><b>Contenu</b></label>
            <input
              v-model="formData.content"
              class="w3-input w3-border"
              name="last"
              type="text"
            />
          </p>
          <p>
            <label class="w3-text-cyan"><b>Enregistrer votre image</b></label>
            <input
              class="w3-input w3-border"
              name="image"
              type="file"
              @change="fileUploid"
            />
          </p>
          <p>
            <button v-on:click="editerArticle(idA)" class="w3-btn w3-cyan">
              Modifier
            </button>
          </p>
        </form>
      </div>
      <div class="col-md-2"><p></p></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "modifForm",
  methods: {
    getImageUrl(image) {
      return "http://127.0.0.1:8000/storage/" + image;
    },
    editerArticle: function (id) {
      console.log(this.formData);
      axios
        .post(
          "http://127.0.0.1:8000/api/article/" + id + "/modifier",
          this.formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((response) => {
          alert(response.data.message);
          console.log("Insertion réussie !", response.data);
          this.$router.push("/affiche");
        })
        .catch((error) => {
          console.error("Erreur de modification :", error.response.data);
        });
    },
    fileUploid(event) {
      this.formData.image = event.target.files[0];
      // if (files) {
      //   // this.formData.image = files;
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.urlImage = e.target.result;
      //     console.log(this.urlImage);
      //   };
      // } else {
      //   this.urlImage = "";
      // }
    },
    affichageArticle: function () {
      axios
        .get("http://127.0.0.1:8000/api/article/" + this.idA + "/show")
        .then((response) => {
          // Traiter la réponse
          this.formData.title = response.data.article.titre;
          this.formData.content = response.data.article.description;
          this.formData.image = response.data.article.image;
          console.log("Utilisateurs récupérés :", response.data.article.titre);
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
      idA: this.$route.params.id,
      urlImage: "",
      formData: {
        title: "",
        content: "",
        image: null,
      },
    };
  },
  mounted() {
    this.affichageArticle();
  },
};
</script>
<script></script>