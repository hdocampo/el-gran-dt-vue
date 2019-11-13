<template>
  <li
    class="player-list-item"
    :class="{sold: currentPlayer.market}"
    @click="addPlayer(currentPlayer)"
  >
    <div class="player-list-item__container">
      <div class="player-list-item__name">{{ currentPlayer.name }}</div>
      <div class="player-list-item__position">{{ currentPlayer.position }}</div>
      <div class="player-list-item__price">{{ currentPlayer.price }}</div>
      <div class="player-list-item__picture">{{ currentPlayer.pic }}</div>
      <div class="player-list-item__country">{{ currentPlayer.countryId }}</div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log("Mounted player list item");
  },
  methods: {
    addPlayer(player) {
      this.$emit("playerSelected", player);
    }
  },
  computed: {
    currentPlayer: function() {
      return this.player;
    }
  },
  props: {
    player: {
      id: Number,
      name: String,
      position: Array,
      price: Number,
      market: Boolean,
      pic: String,
      country: Number,
      market: Boolean
    }
  }
};
</script>
<style>
@import url("./player-list-item.css");
</style>
