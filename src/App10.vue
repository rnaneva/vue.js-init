<template>
    <p>Choose what part of this page you want to see:</p>
    <router-link class= "link" to="/animals">Animals</router-link>
    <router-link class= "link" to="/foods">Foods</router-link>

    <div>
      <router-view></router-view>
      
    </div>
  </template>


<style>
.link{
    margin: 10px;
    padding: 10px;
    background-color: black;
    color: white;
    text-decoration: none;
    
}
 a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
}

</style>