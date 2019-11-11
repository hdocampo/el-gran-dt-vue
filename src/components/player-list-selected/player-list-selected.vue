<template>
  <div class="player-list-selected">
    <div v-if="!playersSelected.length">
      <p>No hay jugadores seleccionados</p>
      <div>Selecciona del panel izquierdo!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playersSelected: this.selected
    };
  },
  props: {
    selected: Array
  }
};
</script>

<style lang="scss" scoped>
</style>