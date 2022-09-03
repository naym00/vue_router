<template>

    <div class="productdetailsview">
        <NavBar pageName="productdetailsview" />
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <img v-bind:src="product.image" alt="Product image" style="margin:auto;">
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="row mt-5">
                        <div class="col-md-6 col-sm-12">
                            <h3 style="text-align: left;">Rating(Review {{ product.rate }}) </h3>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <h3 style="text-align: left;" v-html="rateStr"></h3>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 col-sm-12">
                            <strong class="card-title text-secondary">
                                <h4 style="text-align: left;">{{ product.title }}</h4>
                            </strong>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-5">
                            <h2 class="text-secondary" style="text-align: left;">Unit Price:</h2>
                        </div>
                        <div class="col-7">
                            <strong class="card-title text-secondary">
                                <h2 style="text-align: left;">৳ {{ product.price }}</h2>
                            </strong>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <p style="text-align: justify;">{{ product.description }}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3">
                            <strong style="text-align: left;">
                                <h5>Size:</h5>
                            </strong>
                        </div>
                        <div class="col-9">
                            <div class="form-check form-check-inline">
                                <input v-model="productSize" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="S">
                                <label class="form-check-label" for="inlineRadio1">S</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="productSize" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="M">
                                <label class="form-check-label" for="inlineRadio2">M</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="productSize" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                    value="L">
                                <label class="form-check-label" for="inlineRadio3">L</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="productSize" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                                    value="XL">
                                <label class="form-check-label" for="inlineRadio4">XL</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="productSize" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                                    value="XXL">
                                <label class="form-check-label" for="inlineRadio5">XXL</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-5" style="text-align: left;">
                            <strong><h3>Price: </h3></strong>
                        </div>
                        <div class="col-7" style="text-align: left;">
                            <h3>৳{{totalPrice}}</h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-1">
                            <button v-on:click="decrement" type="button" class="btn btn-dark">-</button>
                        </div>
                        <div class="col-2">
                            <h4>{{quantity}}</h4>
                        </div>
                        <div class="col-1">
                            <button v-on:click="increment" type="button" class="btn btn-dark">+</button>
                        </div>
                        <div class="col-8">
                            <button v-on:click="addToCart" type="button" class="btn btn-info">ADD TO CART</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>
  
  <script>
import NavBar from './NavBar.vue'
export default {
    /*
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        "price": 109.95, 
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
        "category": "men's clothing", 
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        "rate": 3.9
    */
    props: ['product'],
    components: {
        NavBar,
    },
    data() {
        return {
            rateStr: '',
            quantity: 1,
            totalPrice: 0,
            productSize: '',
            
        }
    },
    methods: {
        rating() {
            this.rateStr = '';
            let stars = parseInt(Math.round(this.product.rate));
            for (let i = 1; i <= stars; i++) {
                this.rateStr += '<span class="fa fa-star checked"></span>';
            }
        },
        sendPageName() {
            this.$emit("pageName", 'productdetailsview');
            console.log('Called!');
        },
        increment(){
            this.quantity++;
            this.calculatePrice();
        },
        decrement(){
            if(this.quantity>1){
                this.quantity--;
                this.calculatePrice();
            }
        },
        calculatePrice(){
            this.totalPrice = (this.product.price*this.quantity).toFixed(2);
        },
        addToCart(){
            if(this.productSize.localeCompare('')===0){
                alert("Product Size is missing!");
            }
            else{
                if(confirm(`Title: ${this.product.title}\nPrice: ${this.totalPrice}\nSize: ${this.productSize}`)){
                    this.$router.push({ name: 'home' });
                }
            }
        }
    },
    mounted() {
        this.sendPageName();
        this.rating();
        this.calculatePrice();
    }


}
</script>

  <style>
  .productdetailsview {
      margin: auto;
  }
  
  img {
      height: 600px;
      width: auto;
  }
  
  input {
      background-color: aqua;
      border: 2px solid black;
      width: 100%;
      height: 40px;
      font-size: 30px;
      border-radius: 10px;
  }
  </style>
  