<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div class="home__container">
      <player-list 
        :data="{api}"
        @playerSelected="playerSelected"
      />
      
      <player-list-selected
        :selected="playersSelected"
      />
    </div>
  </div>
</template>

<script>
// we can name the module as we want!
import playerList from "../components/player-list/player-list.vue";
import playerListSelected from "../components/player-list-selected/player-list-selected.vue";
import { api } from '../constants/api';

export default {
  data() {
    return {
      message: "A armar el cuadro!",
      api: api,
      playersSelected: []
    };
  },
  components: {
    playerList,
    playerListSelected
  },
  methods: {
    playerSelected(player) {
      console.log('Arriving to parent Component (Home)', player);
    }
  }
};
</script>
<style>
  @import url("./home.css");
</style>