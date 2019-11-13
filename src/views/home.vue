<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div class="home__container">
      <player-list 
        :playersDraft="playersDraft"
        @playerSelected="playerSelected"
      />
      
      <player-list-selected
        :selected="playersList"
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
      message: "Juguemos al Troesma",
      playersDraft: api.players,
      playersList: []
    };
  },
  mounted(){
  },
  components: {
    playerList,
    playerListSelected
  },
  methods: {
    playerSelected(player) {
      this.playersList.push(player);
      this.playersDraft = this.playersDraft.filter(playerRoster => {
        return player.id != playerRoster.id
      })
    }
  }
};
</script>
<style>
  @import url("./home.css");
</style>