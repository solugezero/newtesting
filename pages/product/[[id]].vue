<template>
  <div class="index-page content-box">
    <OrganismsProduct v-bind="dtoProduct.dataProduct" />
    <MoleculesProductDescription
      v-bind="dtoProduct.productDescription"
      class="mt-60"
    />
    <OrganismsReviews v-bind="dtoProduct.productReviews" class="mt-60" />
    <OrganismsSimilar v-bind="dtoProduct.productSimilar" class="mt-60" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { useProducts } from "@/stores/products";
const { getProductById } = useProducts();
const currentId: any = useRoute().params.id;
const currentProduct = getProductById(currentId);
const dtoProduct = computed((): any => {
  return {
    dataProduct: {
      productPreview: {
        title: currentProduct.title,
        img: currentProduct.img, 
      },
      previewData: {
        price: currentProduct.price,
        owner: currentProduct.owner,
        newprice: currentProduct.newprice,
        productType:{
          type: currentProduct.type,
          subtype: currentProduct.subtype,
        }
      },
    },

    productDescription: {
      description: currentProduct.description,
    },

    productReviews: {
      reviews: currentProduct.reviews,
    },

    productSimilar: {
      products: currentProduct.similar,
    },
  };
});
</script>

<style scoped lang="scss"></style>
