<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="isFavourite">
        </h2>
        <p>{{ foodDesc }}</p>
     
    </div>
</template>
<script>
export default{
     // props: ['foodName','foodDesc','isFavorite']
  props: {
    foodName: {
        type: String,
        required: true
  },
    foodDesc: {
        type: String,
        required: false,
        default:  'This is the default description.',
        validator: function(value){
            if(20 < value.length && value.length < 40){
                return true;
            } else {
                return false;
            }
        }
    },
    isFavourite: {
        type: Boolean,
        required: false,
        default: false
    } 
  },
  data(){
    return {
        foodIsFavourite: this.isFavourite
    }
  },
  methods: {
    toggleFavourite(){
        this.foodIsFavourite = !this.foodIsFavourite;
    }
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