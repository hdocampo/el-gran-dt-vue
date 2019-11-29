<template>
  <div class="players__selected">
    <h3>Elegidos</h3>
    <div v-show="!playersSelected">
      <p>No hay jugadores seleccionados</p>
      <div>Selecciona del panel izquierdo!</div>
    </div>
    <div v-show="playersSelected">
        <ul
          class="players__list"
          :class="{'players__list-selected': playersSelected}"
        >
          <player-item 
            v-for="player in playersSelected" 
            :player="player" 
            :key="player.id"
          />
      </ul>
    </div>
  </div>
</template>

<script>
import playerItem from "../player-list-item/player-list-item.vue";

export default {
  data() {
    return {
      playersSelected: this.selected
    };
  },
  components: {
    playerItem
  },
  props: {
    selected: Array
  },
  computed: {
    selectedPlayer: function() {
      return this.playersSelected.length;
    }
  }
};
</script>

<style lang="scss" scoped>
    @import './../player-list/player-list.scss'
</style>