<template>
  <div class="spinner">
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-1.webp" alt="My Logo" />
    </div>
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-2.webp" alt="My Logo" />
    </div>
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-3.webp" alt="My Logo" />
    </div>
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-4.webp" alt="My Logo" />
    </div>
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-5.webp" alt="My Logo" />
    </div>
    <div class="logoWrapper">
      <img src="../../assets/images/myPhoto/image-6.webp" alt="My Logo" />
    </div>
    <!-- <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div> -->
  </div>
</template>

<style lang="postcss" scoped>
.spinner {
  width: 8rem;
  height: 8rem;
  --clr: #fbaf3f;
  --clr-alpha: #ffffff;
  animation: spinner 2.6s infinite ease;
  transform-style: preserve-3d;
}

.logoWrapper {
  @apply grid place-items-center;
}

.spinner > div {
  background-color: var(--clr-alpha);
  height: 100%;
  position: absolute;
  width: 100%;
  border: 3.5px solid var(--clr);
}

.spinner div:nth-of-type(1) {
  transform: translateZ(-4rem) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.spinner div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.spinner div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.spinner div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
  transform: translateZ(4rem);
}

@keyframes spinner {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}
</style>
