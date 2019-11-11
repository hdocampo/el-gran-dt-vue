<template>
  <div id="app" class="container">
    <header-app 
      :link-list="routes"
    />
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-app></footer-app>
  </div>
</template>

<script src="./App.js"></script>

<style>
  @import url('./App.css');
</style>
