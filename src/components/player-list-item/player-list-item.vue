<template>
  <li class="player-list-item"
    v-bind:class="{sold: marketStatus}"
  >
    <div class="player-list-item__container">
      <div class="player-list-item__name">
        {{ namePlayer }}
      </div>
      <div class="player-list-item__position">
        {{ positionPlayer }}
      </div>
      <div class="player-list-item__price">{{ pricePlayer }}</div>
      <div class="player-list-item__picture">{{ picPlayer }}</div>
      <div class="player-list-item__country">
        {{ countryPlayer }}
      </div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      idPlayer: this.id,
      namePlayer: this.name,
      positionPlayer: this.position,
      pricePlayer: this.price,
      marketStatus: this.market,
      picPlayer: this.pic,
      countryPlayer: this.country
    };
  },
  props: {
    id: Number,
    name: String,
    position: Array,
    price: Number,
    market: Boolean,
    pic: String,
    country: Number
  }
};
</script>
<style>
@import url("./player-list-item.css");
</style>
