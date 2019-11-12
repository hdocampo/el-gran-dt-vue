<template>
  <div class="product-list">
    <ul v-if="dataPlayers">
      <h3>Disponibles</h3>
      <player-item
        v-for="player in dataPlayers"
        :player="player"
        :key="player.id"
        @playerSelected="playerSelected"
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
  methods: {
    playerSelected(player) {
      console.log('SCALING for middle component (team list)', player);
      this.$emit("playerSelected", player);
    }
  },
  mounted() {
    console.log('Vue Instance mounted!!');
  },
  props: {
    data: Object
  }
};
</script>
<style>
@import url("./player-list.css");
</style>
