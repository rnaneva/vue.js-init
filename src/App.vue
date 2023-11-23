<template>
  <h1>Food</h1>
  <p>Components created with v-for based on an array.</p>
  <button @click="removeItem">Remove item</button>
 <div id="wrapper">
  <food-item 
  v-for="x in foods"
  :key="x.name"
  :food-name="x.name"
  :food-desc="x.desc"
  :is-favourite="x.favourite" />
 </div>
</template>

<script>
export default{
  data(){
    return {
      foods: [
        { name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favourite: true},
        { name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favourite: false},
        { name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favourite: false},
        { name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favourite: true},
        { name: 'Cake',  
          desc: 'Cake is something sweet that tastes good.',
          favourite: false}
        ]
    };
   
  },
  methods:{
    removeItem(){
      this.foods.splice(1,1)
    }
    }
}
</script>

<style>
 #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

</style>