
<template>
    
    <h1>Example 1</h1>
    <p>Write something and it will be repeated below</p>
    <input ref="inputEl" @input="getRefs" placeholder="Write something...">
    <p ref="pEl" ></p>

    <h1>Example 2</h1>
    <p>Click the button to reveal the 3rd list element stored as an array element in the $refs object.</p> 
    <button @click="getValue">Get the 3rd list element</button><br>
    <ul>
      <li v-for="x in liTexts" ref="liEl">{{ x }}</li>
    </ul>
    <pre>{{ thirdEl }}</pre>
  </template>
  
  <script>
  export default{
    data(){
          return{
            thirdEl: '',
            liTexts:  ['Apple','Banana','Kiwi','Tomato','Lichi']
          }
        },
      methods:{
          getRefs(){
            this.$refs.pEl.innerHTML = this.$refs.inputEl.value
          },
          getValue(){
            this.thirdEl = this.$refs.liEl[2].innerHTML;
            
          }
      }
  };
  </script>
  
  <style>
  #pEl {
    background-color: lightgreen;
    display: inline-block;
  }
  </style>   