<template>
  <h2>Component</h2>
  <p>Below is a log with every time the 'activated', 'deactivated', 'mounted' or 'unmounted' hooks run.</p>
  <ol ref="olEl"></ol>
  <p>You can also see when these hooks run in the console.</p>
  </template>

  <script>
      export default {
        mounted(){
           this.logHook("mounted")
        },
        unmounted(){
            this.logHook("unmounted")
        },
        activated() {
           this.logHook("acticated")
        },
        deactivated(){
            this.logHook("deactivated")
        },
        methods: {
            logHook(hookName){
                console.log(hookName)
                const liEl = document.createElement("li");
                liEl.innerHTML = hookName;
                this.$refs.olEl.appendChild(liEl);
            }
        }
    }
     
 </script>

<style>
li {
  background-color: lightcoral;
  width: 5em;
}
</style>