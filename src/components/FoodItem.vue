<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="isFavorite">
        </h2>
        <p> {{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
        
    </div>
</template>
<script>
export default{
    data() {
      return {
        foodIsFavorite: this.isFavorite
      }
    },
  props:['foodName', 'foodDesc', 'isFavorite'],
  emits: ['toggle-favorite'],
  methods: {
       toggleFavorite(){
         this.$emit('toggle-favorite', this.foodName);
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