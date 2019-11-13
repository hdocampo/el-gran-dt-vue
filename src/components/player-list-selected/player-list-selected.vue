<template>
  <div class="player-list-selected">
    <h3>Elegidos</h3>
    <div v-if="!selectedPlayer">
      <p>No hay jugadores seleccionados</p>
      <div>Selecciona del panel izquierdo!</div>
    </div>
    <div v-if="selectedPlayer">
      <ul>
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
</style>