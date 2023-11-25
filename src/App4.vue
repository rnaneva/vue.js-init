<template>
    <h1>Scoped Slots</h1>
    <p>App.vue controls how the array from the scoped slot is rendered.</p>
    <slot-comp v-slot="food">
        <h2>{{ food.foodName }}</h2>
    </slot-comp>
  </template>
  
  <script></script>
  
  <style>
    #app {
      width: 300px;
    }
    h2 {
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
    }
  </style>     