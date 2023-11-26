<template>
     <h1>Food</h1>
     <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
     <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
     <div id="divComp">
        <component :is="activeComp"></component>
     </div>
</template>

<script>
export default{
    data(){
        return{
            activeComp: 'food-about',
            foods: [
             { name: 'Pizza', imgUrl: '/img_pizza.svg' },
             { name: 'Apple', imgUrl: '/img_apple.svg' },
             { name: 'Cake', imgUrl: '/img_cake.svg' },
             { name: 'Fish', imgUrl: '/img_fish.svg' },
             { name: 'Rice', imgUrl: '/img_rice.svg' }
            ]
        }
    },
    provide(){
        return {
           foods: this.foods     
        }
    }
}
</script>