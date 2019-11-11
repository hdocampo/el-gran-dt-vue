<template>
  <div class="product-list">
    <product-item 
        v-for="product in productList"
        :key="product.id"
        :product-item-description="product.description"
        :product-item-img="product.img"
        :product-item-name="product.name"
    />
  </div>
</template>
<script>
import productItem from "../product-list-item/product-list-item.vue";

export default {
  data() {
    return {
      productList: this.listData
    };
  },
  components: {
      productItem
  },
  props: {
      listData: Array
  }
};
</script>
<style>
    @import url('./product-list.css');
</style>
