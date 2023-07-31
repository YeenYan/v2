<template>
  <div class="logo-loader"></div>
</template>

<style lang="postcss" scoped>
.logo-loader {
  width: 100px;
  height: 46px;
  position: relative;
  border-bottom: 5px solid #1e293b;
  border-top: 5px solid #1e293b;
  box-sizing: border-box;
}

.logo-loader:before,
.logo-loader:after {
  content: "";
  position: absolute;
  left: 0;
  top: -20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fbaf3f;
  border: 5px solid #1e293b;
  box-sizing: border-box;
  animation: slide_391 1s infinite ease-in-out alternate;
}

.logo-loader:after {
  top: 20px;
  animation-direction: alternate-reverse;
}

@keyframes slide_391 {
  0%,
  20% {
    transform: translateX(70px);
  }

  80%,
  100% {
    transform: translateX(-1px);
  }
}
</style>
