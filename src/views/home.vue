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
          <label class="home__title">Nombra a tu equipo</label>
          <input type="text" v-model="teamName"
            placeholder="Elige un nombre para tu equipo"
            class="home__model-input"
          />

          <label class="home__title">Ingresa tu presupuesto</label>
          <input type="number" v-model="teamBudget"
            placeholder="¿Cuánto quieres gastar?"
            class="home__model-input"
          />
        </div>
        
        <div class="home__team">
          <div class="home__team-group-container">
            <h4 class="home__title">Nombre Elegido</h4>
            <span class="home__display-data-model">{{ teamName ? teamName : 'Equipo sin nombre' }}</span>
          </div>

          <div class="home__team-group-container">
            <h4 class="home__title">Presupuesto</h4>
            <span class="home__display-data-model">{{ teamBudget ? `$ ${teamBudget}` : 'Necesitas presupuesto' }}</span>
          </div>
        </div>
      </div>
      <div class="home__player-selection">
        <player-list :playersDraft="playersDraft"
                     @playerSelected="playerSelected" />
        
        <slot>
          <p v-if="!currentPlayer"
            class="home__player-text">
            Selecciona un jugador para ver su ficha</p>
          <player-item-data v-if="currentPlayer"
                            :player="currentPlayer"
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
  