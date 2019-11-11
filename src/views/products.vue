<template>
  <div class="products">
    <h1>Products</h1>
    <div class="products__spinner">
      <b-spinner 
        v-if="loading"
        label="Loading..."></b-spinner>
    </div>
    <product-list
      v-if="productsLoaded"
      :list-data="productsLoaded"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import productList from "../components/product-list/product-list.vue";

  export default {
    data() {
      return {
        productsLoaded: false,
        apiCallError: false,
        loading: true
      }
    },
    components: {
      productList
    },
    mounted() {
      axios
      .get('http://demo2120866.mockable.io/app-vue-products')
      .then(response => {
        console.log(response)
        this.productsLoaded = response.data.products;
      })
      .catch(error => {
        console.log(error)
        this.apiCallError = true;
      })
      .finally(() => this.loading = false)
    }
  }
</script>
<style>
  @import url('./products.css');
</style>
