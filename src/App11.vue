<template>
  <h1>Input Type Color</h1>
     <form @submit.prevent="registerAnswer">
        <label>Chose a color<br>
            <input v-model="colorInp" type="color" >
        </label>
        
        <button type="submit">Submit</button>
     </form>
     <div>
            <h3>Submitted answer:</h3>
            <p id="pAnswer">{{ inpValSubmitted }}</p>
        </div>
</template>

<script>
export default{
    data(){
        return {
           colorInp: null,
           inpValSubmitted: ''
        }
    },
    methods: {
        registerAnswer(){
            if(this.colorInp){
                this.inpValSubmitted = this.colorInp;
            }
                
        }
    }
}
</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
  }
  button {
    margin: 10px;
    display: block;
  }
  #pAnswer {
    background-color: lightgreen;
    padding: 5px;
  }
</style>  