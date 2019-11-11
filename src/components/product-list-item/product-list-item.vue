<template>
  <div class="product-list-item">
    <b-card
      :title="productName"
      :img-src="productImg"
      :img-alt="productName"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>{{ productDescription }}</b-card-text>

      <b-button href="#" variant="primary">Buy</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productImg: this.productItemImg,
      productDescription: this.productItemDescription,
      productName: this.productItemName
    };
  },
  props: {
    productItemName: String,
    productItemImg: String,
    productItemDescription: String
  }
};
</script>
<style>
@import url("./product-list-item.css");
</style>
