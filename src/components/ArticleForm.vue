<template>
  <div style="margin-left: 270px; margin-top: 150px">
    <div class="row">
      <div class="col-md-2"><p></p></div>
      <div class="col-md-8">
        <form
          @submit.prevent="submitForm"
          class="w3-container w3-card-4"
          style="padding-top: 30px"
          enctype="multipart/form-data"
        >
          <h2 class="w3-text-cyan">Création d'article</h2>
          <p>Vous pouvez crée votre article ici.</p>
          <p>
            <label class="w3-text-cyan"><b>Titre</b></label>
            <input
              v-model="formData.nom"
              class="w3-input w3-border"
              name="first"
              type="text"
            />
          </p>
          <p>
            <label class="w3-text-cyan"><b>Description</b></label>
            <input
              v-model="formData.prenom"
              class="w3-input w3-border"
              name="last"
              type="text"
            />
          </p>
          <p>
            <label class="w3-text-cyan"><b>Enregistrer votre image</b></label>
            <input
              class="w3-input w3-border"
              name="last"
              type="file"
              @change="fileUploid"
            />
          </p>
          <p>
            <button type="submit" class="w3-btn w3-cyan">Enregistrer</button>
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
  name: "articleForm",
  data() {
    return {
      formData: {
        nom: "",
        prenom: "",
        image: null,
      },
    };
  },
  methods: {
    async submitForm() {
      // Envoyer une requête POST à l'API Symfony avec les données du formulaire
      axios
        .post("http://127.0.0.1:8000/api/product/add", this.formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          alert(response.data.message);
          console.log("Insertion réussie !", response.data);
          this.$router.push("/affiche");
        })
        .catch((error) => {
          console.log(this.formData);
          console.error("Erreur lors de l'insertion :", error);
        });
    },
    fileUploid(event) {
      this.formData.image = event.target.files[0];
    },
  },
};
</script>
<script></script>