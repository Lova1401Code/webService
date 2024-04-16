<template>
  <div style="margin-left: 270px; margin-top: 80px">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-6">
          <div class="w3-container w3-cyan">
            <p class="w3-text-white">
              vous pouvez convertir votre argent ici, ariary en dollard ou en
              euro
            </p>
          </div>

          <form
            @submit.prevent="convertCurrency"
            class="w3-container w3-margin"
          >
            <p>
              <label>Money Ariary</label>
              <input v-model="amount" class="w3-input" type="text" />
            </p>
            <p>
              <select
                v-model="selectedCurrency"
                class="w3-select"
                name="option"
              >
                <option value="" disabled selected>TARGET</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </p>
            <p>
              <button type="submit" class="w3-button w3-cyan w3-hover-teal">
                Convertir
              </button>
            </p>
          </form>
          <div
            class="w3-cyan w3-panel w3-padding w3-card-4"
            v-if="conversionResult"
          >
            <p>
              Convertion de votre Money :
              {{ conversionResult.converted_amount }}
              {{ conversionResult.currencyTo }}
            </p>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "convert",
  data() {
    return {
      amount: "",
      selectedCurrency: "",
      conversionResult: null,
    };
  },
  methods: {
    convertCurrency() {
      axios
        .post("http://127.0.0.1:8000/api/convertion", {
          amount: this.amount,
          moneyTo: this.selectedCurrency,
        })
        .then((response) => {
          console.log(response.data);
          this.conversionResult = response.data;
        })
        .catch((error) => {
          console.error("Erreur lors de la convetion", error);
        });
    },
  },
};
</script>
<style></style>