<template>
   <h1>Transition with Dynamic Components</h1>
  <p>The Transition component wraps around the dynamic component so that the switching can be animated.</p>
  <button @click="toggleValue = !toggleValue">Switch component</button>
  <Transition mode="out-in">
   <component :is="activeComp"></component>
     </Transition>
</template>

<script>
 export default {
    data() {
        return {
            toggleValue:true
        }
    },
    computed:{
        activeComp(){
            if(this.toggleValue){
                return 'comp-one'
            } else {
                return 'comp-two'
            }
        }
    }
 }
</script>

<style >
  .v-enter-active {
    animation: slideIn 0.5s;
  }
  

  @keyframes slideIn {
    from {
        translate: -200px 0;
        opacity:0;
    } to {
        translate: 0 0;
        opacity: 1;
  }
}
  .v-leave-active {
    animation: slideOut 00.5s;
  }

  @keyframes slideOut {
    from{
        translate: 0 0;
        opacity: 1;
    } to {
        translate: -200px 0;
        opacity:0;
    }
  }

  #app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
  }
</style>           