<template>
  <div class="cover-img-container">
    <img :src="coverImg">
  </div>

  <div class="product-card-container">
    <store-item-card
        v-for="product in mainStore.productArray"
        :key="product"

        :price="getRandomInt(50000)"
        :productName="product.title || 'Eladásra kínálom'"
    ></store-item-card>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/mainStore.js";
import StoreItemCard from "@/components/StoreItemCard.vue";
import {onMounted} from "vue";

const mainStore = useMainStore()

defineProps({
  coverImg: {type: String, default:'../../public/amazon_cover.jpg'},
})

const detectWrapAndGetLastRow = (className) => {

  let wrappedItems = []
  let prevItem = {}
  let currItem = {}
  let currentRow = []
  let rowLengths = []
  const items = document.getElementsByClassName(className)

  for (let i = 0; i < items.length; i++) {
    currItem = items[i].getBoundingClientRect()
    if (prevItem && prevItem.top < currItem.top) {
      wrappedItems.push(items[i])

      rowLengths.push(currentRow.length)
      currentRow = [items[i]]
    }
    else{
      currentRow.push(items[i])
    }
    prevItem = currItem
  }

  rowLengths.push(currentRow.length)
  if (rowLengths.length > 1){ //több mint 1 sorunk van
    if (rowLengths[rowLengths.length-1] < rowLengths[0]){ //az utolsó sorban kevesebb elem van mint a max hely
      return currentRow //be kell állítani a 'flex-grow'-t
    }
    return [] //nem kell változtatni
  }
  return currentRow //csak egy sorunk van és azt meg kell változtatni
}

onMounted(()=>{
  const lastRow = detectWrapAndGetLastRow('flex-container-element')
  const defaultWidth = document.getElementsByClassName('flex-container-element')[0].getBoundingClientRect().width
  if (lastRow.length > 0){
    for (let i = 0; i < lastRow.length; i++) {
      lastRow[i].style.width = `${defaultWidth}px`
      lastRow[i].className = "wrapped"
    }
  }
})

const getRandomInt = (max)=>{
  return Math.floor(Math.random() * max);
}

</script>

<style scoped>
.wrapped{
  flex-grow: 0;
  display: flex;
  justify-content: center;
}

.product-card-container{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  position: absolute;
  z-index: 20; /* Make sure the main content is above the image */
  //padding: var(--xlg) var(--xlg) var(--md) var(--xlg);
  margin-top: 270px;
}
@media only screen and (max-width: 1200px) {
  .product-card-container{
    padding: var(--xlg) var(--md) var(--md) var(--md);
  }
}
@media only screen and (min-width: 1200px) {
  .product-card-container{
    padding: var(--xlg) 100px var(--md) 100px;
  }
}


.cover-img-container{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
img{
  //position: absolute;
  //top: 0;
  //left: 0;
  //width: 100%;

  z-index: 2;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover; /* Maintain aspect ratio */
}
</style>
