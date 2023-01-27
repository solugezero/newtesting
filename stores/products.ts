import { defineStore } from "pinia";
import {ProductStatePinia} from "~~/interfaces/product"
import { Product } from "~~/interfaces/product";
import { products } from "@/constants/data";

export const useProducts = defineStore("products", {
  state: (): ProductStatePinia => ({
    products: []
  }),
  actions: {
    fetchProducts() {
      this.products = products;
    },
    getProductById(id: string): Product {
      if(!id) return {} as any
      return products.filter((x: Product) => x?.id === id)[0]
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    }
  }
  
});
