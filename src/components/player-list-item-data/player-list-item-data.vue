<template v-if="currentPlayer">
  <div class="player-list-item-data__container">
    <div class="player-list-item-data__card">
      <div class="player-list-item-data__picture-container">
        <div class="player-list-item-data__picture">
          <img :src="playerImg"
               :alt="currentPlayer.name"
               class="player-list-item-data__image" />
        </div>
      </div>
      <div class="player-list-item-data__info">
        <h6 class="player-list-item-data__title">Información del Jugador</h6>
        <div class="player-list-item-data__name">
          <font-awesome-icon icon="id-card" />
          {{ currentPlayer.name }}
        </div>
        <div class="player-list-item-data__pos-price">
          <div class="player-list-item__position">
            <font-awesome-icon icon="futbol" />
            {{ playerPositions }}
          </div>
          <div class="player-list-item-data__price">
            <font-awesome-icon icon="coins" />
            {{ currentPlayer.price }}
          </div>
        </div>
        <div class="player-list-item-data__add">
          <button @click="addPlayerToList(currentPlayer)">
            Agregar
            <font-awesome-icon icon="chevron-circle-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        playerImg: require("../../assets/images/" + this.player.pic),
      };
    },
    mounted() {
      console.log("Mounted player list DATA item");
    },
    methods: {
      addPlayerToList(player) {
        this.$emit("playerAddedToList", player);
      }
    },
    computed: {
      currentPlayer: function () {
        return this.player;
      },
      playerPositions: function () {
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
<style lang="scss"
       scoped>
  @import "./player-list-item-data.scss";

</style>
