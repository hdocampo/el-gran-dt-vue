<template>
  <li
    class="player-list-item"
    v-if="currentPlayer"
    @click="addPlayer(currentPlayer)"
  >
    <div class="player-list-item__container">
      <div class="row player-list-item__data">
        <div class="player-list-item__position col-lg-2">
          {{ playerPositions }}
        </div>        
        <div class="player-list-item__picture col-lg-2">
          <img :src="playerImg" :alt="currentPlayer.name"
            class="player-list-item__image" />
        </div>        
        <div class="player-list-item__name col-lg-5">
          {{ currentPlayer.name }}
        </div>
        <div class="player-list-item__price  col-lg-3">
          $ {{ currentPlayer.price }}
        </div>
      </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      playerImg: require("../../assets/images/" + this.player.pic),
      playerToDisplay: null
    };
  },
  mounted() {
    
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
      return this.currentPlayer.position;
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
