<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p> {{ foodDesc }}</p>
        <button v-on:click="toggeFavourite">Favourite</button>
        
    </div>
</template>
<script>
export default{
   
  props:['foodName', 'foodDesc', 'isFavourite'],
  data(){
    return{
       foodIsFavorite:this.isFavourite
    }
  },
  methods: {
       toggeFavourite(){
          this.foodIsFavorite = !this.foodIsFavorite
        },
    
  }
}
</script>
<style>
 #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
  img{  
    height:1.5em;
    float: right;
  }
  </style>