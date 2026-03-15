<template>
  <div class="travel-container">
    <h1>Welcome to Travel Log</h1>
    <p>Loading your adventures...</p>
    <p><i>(Or just loading my desire to be on vacation)</i></p>
    <div class="plane-animation">
      ✈️
    </div>
    <div class="scenery">
      🐢 🌴🌴🌴
    </div>
    <p>Actual travel status: Walking from the bed to the fridge.</p>
  </div>
</template>

<style scoped>
.travel-container {
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
}

.plane-animation {
  font-size: 50px;
  display: inline-block;
  animation: fly 3s linear infinite;
}

.scenery {
  font-size: 50px;
}

@keyframes fly {
  0% {
    transform: translateX(-150px) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(-20px);
  }
  100% {
    transform: translateX(150px) translateY(0);
  }
}
</style>
