<template>
  <li
    class="player-list-item"
    :class="{sold: playerData.marketStatus}"
    @click="addPlayer(playerData)"
  >
    <div class="player-list-item__container">
      <div class="player-list-item__name">{{ playerData.namePlayer }}</div>
      <div class="player-list-item__position">{{ playerData.positionPlayer }}</div>
      <div class="player-list-item__price">{{ playerData.pricePlayer }}</div>
      <div class="player-list-item__picture">{{ playerData.picPlayer }}</div>
      <div class="player-list-item__country">{{ playerData.countryPlayer }}</div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      playerData: {
        idPlayer: this.player.id,
        namePlayer: this.player.name,
        positionPlayer: this.player.position,
        pricePlayer: this.player.price,
        marketStatus: this.player.market,
        picPlayer: this.player.pic,
        countryPlayer: this.player.countryId
      }
    };
  },
  mounted() {
  },
  methods: {
    addPlayer(player) {
      this.$emit("playerSelected", player);
      console.log('EMITTING from Child Component (Player List Item)', player);
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
