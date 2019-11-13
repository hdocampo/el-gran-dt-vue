<template>
  <div class="players">
    <!-- <b-spinner 
        v-if="loading"
        label="Loading..."></b-spinner> -->
    <h3>Disponibles</h3>
    <ul v-if="dataPlayers"
      class="players__list"
    >
      <player-item
        v-for="player in updatedPlayers"
        :player="player"
        :key="player.id"
        @playerSelected="playerSelected"
        class="players__list-item"
      />
    </ul>
  </div>
</template>
<script>
import playerItem from "../player-list-item/player-list-item.vue";

export default {
  data() {
    return {
      dataPlayers: this.playersDraft,
      loading: true
    };
  },
  mounted() {
    console.log("Vue Instance mounted!!");
  },
  computed: {
    updatedPlayers: function() {
      return this.playersDraft;
    }
  },
  components: {
    playerItem
  },
  methods: {
    playerSelected(player) {
      this.$emit("playerSelected", player);
    }
  },
  props: {
    playersDraft: Array
  }
};
</script>
<style lang="scss" scoped>
  @import './player-list.scss'
</style>
