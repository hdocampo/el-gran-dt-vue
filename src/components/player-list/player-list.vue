<template>
  <div class="product-list">
    <h3>Disponibles</h3>
    <ul v-if="dataPlayers">
      <player-item
        v-for="player in updatedPlayers"
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
      dataPlayers: this.playersDraft
    };
  },
  mounted() {
    console.log("Vue Instance mounted!!");
  },
  computed: {
    updatedPlayers: function() {
      return this.playersDraft;
    }
  },
  components: {
    playerItem
  },
  methods: {
    playerSelected(player) {
      console.log("SCALING for middle component (team list)", player);
      this.$emit("playerSelected", player);
    }
  },
  props: {
    playersDraft: Array
  }
};
</script>
<style>
@import url("./player-list.css");
</style>
