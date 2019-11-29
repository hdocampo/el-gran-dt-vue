<template>
  <div class="home">
    <div class="home__container">
      <div class="home__header">
        <div class="home__logo">
          <img src="../assets/images/logo.png" 
            :alt="title"
            class="home__logo-image"
          />
        </div>
        <div class="home__model">
          <label>Nombra a tu equipo</label>
          <input type="text" v-model="teamName"
            placeholder="Elige un nombre para tu equipo"
            class="home__model-input"
          />

          <label>Ingresa tu presupuesto</label>
          <input type="number" v-model="teamBudget"
            placeholder="¿Cuánto quieres gastar?"
            class="home__model-input"
          />
        </div>
        
        <div class="home__team">
          <h4>Nombre Elegido</h4>
          <span>{{ teamName }}</span>

          <h4>Presupuesto</h4>
          <span>{{ teamBudget }}</span>
        </div>
      </div>
      <div class="home__player-selection">
        <player-list :playersDraft="playersDraft"
                     @playerSelected="playerSelected" />
  
        <slot v-if="!currentPlayer">
          <p>Selecciona un jugador para ver su ficha</p>
        </slot>
  
        <slot v-if="currentPlayer">
          <player-item-data :player="currentPlayer"
                            :key="currentPlayer.id"
                            :spent="moneySpent"
                            :budget="teamBudget"
                            @playerAddedToList="playerAddedToList" />
        </slot>
  
        <player-list-selected :selected="playersList"
                              :isSelectedPlayers="true" />
      </div>
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
        title: "El Gran DT",
        playersDraft: api.players,
        playersList: [],
        currentPlayer: null,
        teamName: '',
        teamBudget: 5000,
        totalSpent: 0
      };
    },
    mounted() {
    },
    components: {
      playerList,
      playerListSelected,
      playerItemData
    },
    computed: {
      moneySpent() {
        return this.totalSpent;
      }
    },
    methods: {
      playerSelected(player) {
        this.currentPlayer = player;
      },
      playerAddedToList(player) {
        const playerSelectedItem = this.playersDraft.find(playerRoster => {
          return player.id === playerRoster.id
        });

        const playersRemaining = this.playersDraft.filter(playerRoster => {
          return player.id !== playerRoster.id
        });

        playerSelectedItem ? this.playersList.push(playerSelectedItem) : null;
        this.playersDraft = playersRemaining;
        this.currentPlayer = null;
        this.totalSpent += player.price;
      }
    }
  };
</script>
<style lang="scss" scoped>
    @import './home.scss'
  </style>
  