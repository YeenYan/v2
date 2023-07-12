<template>
  <div class="info__container" id="intro">
    <div class="image__wrapper">
      <img src="../../assets/images/intro-myImage.svg" alt="My intro image" />
    </div>

    <p class="intro-text">
      Hi, my name is Mark Ian, and I have a passion for creating things that come alive on
      the internet. From design to coding, I enjoy the entire process of bringing ideas to
      life online.
    </p>

    <!-- Rotating CTA -->
    <div class="circle">
      <div class="CTAbtn">let's talk</div>
      <div class="text-rotate">
        <img src="../../assets/images/text-circle.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",

  methods: {},
};
</script>

<style lang="postcss" scoped>
.snap-toTop {
  transform: translateY(0px);
}

.info__container {
  @apply flex flex-col items-center justify-center gap-10 w-full h-full min-h-screen my-[5rem] mx-auto;
}

.image__wrapper {
  @apply w-full max-w-[35rem];
}

.intro-text {
  @apply text-sm sm:text-base md:text-lg w-full;
}

/**********************************************
**** Rotating CTA Properties
**********************************************/
.circle {
  @apply relative flex justify-center items-center w-[10rem] h-[10rem] rounded-full mt-[2.75rem];
}

.CTAbtn {
  @apply absolute grid place-items-center w-[5.75rem] h-[5.75rem] text-base font-code text-center text-shades-white bg-neutral-800 rounded-full;
}

.text-rotate {
  animation: rotateText 10s linear infinite;
}

@keyframes rotateText {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 650px) {
  .intro-text {
    @apply max-w-[32rem];
  }
}

@media (min-width: 1000px) {
  .intro-text {
    @apply max-w-full;
  }
}
</style>
