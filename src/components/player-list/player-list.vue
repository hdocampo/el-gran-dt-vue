<template>
  <div class="product-list">
    <ul v-if="dataPlayers">
      <h3>Disponibles</h3>
      <player-item
        v-for="player in dataPlayers"
        :key="player.id"
        :name="player.name"
        :position="player.position"
        :price="player.price"
        :market="player.inMarket"
        :pic="player.pic"
        :country="player.countryId"
      />
    </ul>
  </div>
</template>
<script>
import playerItem from "../player-list-item/player-list-item.vue";

export default {
  data() {
    return {
      dataPlayers: this.data.api.players
    };
  },
  components: {
    playerItem
  },
  mounted() {
    console.log(this.data.api);
  },
  props: {
    data: Object
  }
};
</script>
<style>
@import url("./player-list.css");
</style>
