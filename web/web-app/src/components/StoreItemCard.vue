<template>
  <div class="flex-container-element">
    <div class="s-card " style="margin: var(--sm)">
      <div class="card-grid">
        <h2 class="card-title">{{ productName }}</h2>
        <div class="image-container">
          <img :src="imageSrc" :alt="productName" class="card-image" />
        </div>

        <div class="card-footer">
          <span class="card-price">{{ price }} Ft</span>
          <button class="fab" @click="handlePurchase">Buy</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
defineProps({
  productName: {type: String, default:'Termék'},
  price: {type: Number, default: 0},
  imageSrc: {type: String, default: 'https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_SX466_.jpg'},
})



const handlePurchase = ()=>{
  console.log('Buying..')
}
</script>

<style scoped>
.s-card{
  width: 210px;
  height: 350px;
}
.flex-container-element{
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.card-grid{
  overflow: hidden;
  max-width: 300px;
  margin: 0 auto;
}
.card-title {
  font-size: 1.5em;
  margin: 0;
  padding: 16px;
}

.image-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  gap: 10px;
  overflow: hidden;
}

.card-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}
img{
  border-radius: 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.card-price {
  font-size: 1.2em;
}

.fab {
  background-color: #ff4081;
  border: none;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

</style>
