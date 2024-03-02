<template>
<div style="margin-left:270px; margin-top:50px">
<div class="w3-container">
  <h2>Appel à une API symfony</h2>
  <p>Vous pouvez <em>Voir ici</em> tous les listes des articles:</p>

  <table class="w3-table w3-cyan">
    <tr>
      <th>Nom</th>
      <th>Prénoms</th>
      <th>Points</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Lova</td>
      <td>RAmih</td>
      <td>50</td>
      <td>
        <div>
            <button class="w3-button w3-red">Supprimer</button>
            <button class="w3-button w3-teal">Modifier</button>
        </div>
        </td>
    </tr>
    <tr>
      <td>Lova</td>
      <td>RAmih</td>
      <td>50</td>
      <td>
        <div>
            <button class="w3-button w3-red">Supprimer</button>
            <button class="w3-button w3-teal">Modifier</button>
        </div>
        </td>
    </tr>
    <tr>
      <td>Lova</td>
      <td>RAmih</td>
      <td>50</td>
      <td>
        <div>
            <button class="w3-button w3-red">Supprimer</button>
            <button class="w3-button w3-teal">Modifier</button>
        </div>
        </td>
    </tr>
  </table>
</div>
</div>
    

</template>
<script>
    import axios from 'axios'
    export default {
        name: 'Affichage',
        mounted() {
            
        },
    }
</script>
<style></style>