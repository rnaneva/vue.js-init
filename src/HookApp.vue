<template>
<h1>The 'activated' and 'deactivated' Lifecycle Hooks</h1>
  <p>In this example for the 'activated' and 'deactivated' hooks we also see when and if the 'mounted' and 'unmounted' hooks are run.</p>
  <button @click="this.activeComp = !this.activeComp">Include component</button>
  <div>
     <KeepAlive>
      <hook-comp v-if="activeComp"></hook-comp>
    </KeepAlive>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeComp: false
    }
  }
}
</script>



<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
    background-color: lightgreen;
  }
</style>