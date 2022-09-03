<template>
  <div class="home">
    <NavBar pageName = "home"/>
    <div class="container">
      <div class="row">
        <div class="col-4 mt-5 box-size" v-for="product in products" :key="product.id">

          <div class="card card-box" style="width: 18rem;">
            <div class="image-box">

              <router-link :to="{ name: 'productdetailsview', params: { product } }"><img v-bind:src="product.image" alt="Card image"></router-link>
              

            </div>
            <div class="card-body">
              <strong class="card-title text-secondary">{{ product.title }}</strong>
              <div class="row">
                <div class="col-6">
                  <h4>৳ {{ product.price }}</h4>
                </div>
                <div class="col-6">
                  <h4 class="float-right">{{ product.rate }}</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
import NavBar from './NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const apiUrl = "https://fakestoreapi.com/products";
      axios
        .get(apiUrl)
        .then((response) => {
          let apiResponse = response.data;
          this.products = [...apiResponse].map(item => ({ title: item.title, price: item.price, description: item.description, category: item.category, image: item.image, rate: item.rating.rate }));
        })
        .catch((err) => console.log(err));
    },
  },
}
</script>

<style scoped>
.box-size {
  height: 450px;
}

.card-box {
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 450px;
  width: auto;
  border-radius: 20px;
}

.image-box {

  height: 300px;
}

.image-box img {
  display: block;

  height: 100%;
  width: auto;


  margin: auto;
  transition: all 0.4s;
}

.image-box:hover img {
  transform: scale(1.2);
}
</style>
