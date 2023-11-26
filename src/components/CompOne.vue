<template>
    <div>
      <h2>One!</h2>
        <p>This is component one.</p>
        <Teleport to="body">
          <div id="redDiv"
          @click="toggleVal = !toggleVal"
          :style="{backgroundColor: bgColor}"
          >Hello!</div>
        </Teleport>
    </div>
</template>

<script>
   export default{
    data(){
      return {
        toggleVal: true
      }
    },
    computed:{
      bgColor(){
        if(this.toggleVal){
          return 'lightpink'
        } else {
          return 'lightgreen'
        }
      }
    }
   }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
    #redDiv {
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
  
#redDiv:hover {
  cursor: pointer;
}
  </style>    