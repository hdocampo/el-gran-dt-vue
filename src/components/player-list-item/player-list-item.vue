<template>
  <li
    class="player-list-item"
    :class="{sold: playerData.marketStatus}"
    @click="addPlayer(playerData)"
  >
    <div class="player-list-item__container">
      <div class="player-list-item__name">{{ playerData.name }}</div>
      <div class="player-list-item__position">{{ playerData.position }}</div>
      <div class="player-list-item__price">{{ playerData.price }}</div>
      <div class="player-list-item__picture">{{ playerData.pic }}</div>
      <div class="player-list-item__country">{{ playerData.countryId }}</div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      playerData: {
        idPlayer: this.player.id,
        name: this.player.name,
        position: this.player.position,
        price: this.player.price,
        marketStatus: this.player.market,
        pic: this.player.pic,
        countryId: this.player.countryId
      }
    };
  },
  mounted() {
    // console.log(this.playerData)
  },
  updated() {
    console.log('updated')
  },
  methods: {
    addPlayer(player) {
      this.$emit("playerSelected", player);
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
