<template v-if="currentPlayer">
  <div class="player-list-item-data__container">
    <div class="player-list-item-data__card">
      <div class="player-list-item-data__picture-container">
        <div class="player-list-item-data__picture"
          :style="{ backgroundImage: `url(${playerImg})` }"
        >
        </div>
      </div>
      <div class="player-list-item-data__info">
        <h6 class="player-list-item-data__title">
          Información del Jugador
          <span class="player-list-item-data__icon">
            <font-awesome-icon icon="chart-bar" />
          </span>
        </h6>
        <div class="player-list-item-data__name">
          {{ currentPlayer.name }}
        </div>
        <div class="player-list-item-data__pos-price">
          <div class="player-list-item__position">
            {{ playerPositions }}
          </div>
          <div class="player-list-item-data__price">
            {{ currentPlayer.price }}
          </div>
        </div>
        <div class="player-list-item-data__add">
          <button 
            class="player-list-item-data__button"
            :disabled="!isAffordable"
            :class="{ 'player-list-item-data__button--disabled': !isAffordable }"
            @click="addPlayerToList(currentPlayer)">
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
        totalSpent: this.spent
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
        return this.currentPlayer.position;
      },
      isAffordable: function () {
        return this.totalSpent + this.currentPlayer.price <= this.budget;
      },
      disableButton: function() {
        return { opacity: 0.5 }
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
      },
      spent: Number,
      budget: Number
    }
  };
</script>
<style lang="scss"
       scoped>
  @import "./player-list-item-data.scss";

</style>
