<template>
  <li
    class="player-list-item"
    @click="addPlayer(currentPlayer)"
  >
    <div class="player-list-item__container">
      <div class="player-list-item__position">
        <font-awesome-icon icon="futbol" />
        {{ playerPositions }}
      </div>        
      <div class="player-list-item__picture">
        <img :src="playerImg" :alt="currentPlayer.name" class="player-list-item__image" />
      </div>        
      <div class="player-list-item__name">
        <font-awesome-icon icon="id-card" />
        {{ currentPlayer.name }}
      </div>
      <div class="player-list-item__price">
        <font-awesome-icon icon="coins" />
        {{ currentPlayer.price }}
      </div>
      <!-- <div class="player-list-item__country">
        <font-awesome-icon icon="flag" />
        {{ currentPlayer.countryId }}
      </div> -->
      </div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      playerImg: require("../../assets/images/" + this.player.pic)
    };
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
    },
    playerPositions: function() {
      return this.currentPlayer.position.join(", ");
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
<style lang="scss" scoped>
@import "./player-list-item.scss";
</style>
