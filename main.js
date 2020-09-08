var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastrey ',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    selectedVariant: 0,
    altText: 'A pair of socks',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    onSale: false,
    details: ["80% cotton","20% polyester","Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0,
      }
    ],
    cart: 0,
  },
  methods:{
    addToCart(){
      this.cart +=1
    },
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
    },
  },
  computed:{
    title(){
      return this.brand+''+this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
  }
})
