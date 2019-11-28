<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div class="home__container">
      <player-list :playersDraft="playersDraft"
                   @playerSelected="playerSelected" />

      <slot v-if="!currentPlayer">
        <p>Selecciona un jugador para ver su ficha</p>
      </slot>

      <slot v-if="currentPlayer">
        <player-item-data :player="currentPlayer"
                          :key="currentPlayer.id"
                          @playerAddedToList="playerAddedToList" />
      </slot>

      <player-list-selected :selected="playersList"
                            :isSelectedPlayers="true" />
    </div>
  </div>
</template>

<script>
  // we can name the module as we want!
  import playerList from "../components/player-list/player-list.vue";
  import playerListSelected from "../components/player-list-selected/player-list-selected.vue";
  import playerItemData from "../components/player-list-item-data/player-list-item-data.vue";
  import { api } from '../constants/api';

  export default {
    data() {
      return {
        message: "Juguemos al Troesma",
        playersDraft: api.players,
        playersList: [],
        currentPlayer: null
      };
    },
    mounted() {
    },
    components: {
      playerList,
      playerListSelected,
      playerItemData
    },
    methods: {
      playerSelected(player) {
        this.currentPlayer = player;
      },
      playerAddedToList(player) {
        console.log(player);
        this.playersDraft = this.playersDraft.filter(playerRoster => {
          return player.id != playerRoster.id
        });

        this.playersDraft ? this.playersList.push(this.playersDraft) : null;
      }
    }
  };
</script>
<style>
  @import url("./home.css");

</style>
