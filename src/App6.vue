<template>
    <div>
        <button @click="fetchData">Fetch data</button>
        <div v-if="randomMammal">
            <h2>{{ randomMammal.name }}</h2>
            <p>Max kg: {{ randomMammal.maxWeight }}</p>
            </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            randomMammal: null
        };
    },
    methods:{
       async fetchData(){
        const response = await fetch("file.json");
        const data = await response.json();
        const randIndex = Math.floor(Math.random()*data.results.length)
        this.randomMammal = data.results[randIndex]
       }
    }
    
};
</script>