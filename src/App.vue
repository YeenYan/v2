<template>
  <!-- top element -->
  <div id="info"></div>

  <div class="logoLoader" v-if="loading">
    <LogoLoader />
  </div>

  <!-- transitions -->
  <div class="transition__wrapper" v-if="!loading && transitionAnim">
    <div class="yellowRect"></div>
    <div class="grayRect"></div>
  </div>

  <main v-if="!transitionAnim">
    <ProfileNav />
    <ContentContainer />
  </main>

  <teleport to="body">
    <patternBG />
  </teleport>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import LogoLoader from "@/components/loader/LogoLoader2.vue";

import StickyNav from "@/components/StickyNav.vue";
import ProfileNav from "@/views/ProfileNav.vue";
import ContentContainer from "@/views/ContentContainer.vue";
// import Navigation from "@/components/profile/Navigation.vue";

// For Body Background SVG image
import patternBG from "./components/TopographyBG.vue";

export default {
  name: "App",
  components: {
    StickyNav,
    ProfileNav,
    ContentContainer,
    LogoLoader,
    // Navigation,
    patternBG,
  },
  data() {
    return {
      stick: false,
      loading: false,
      transitionAnim: true,
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["mobile", "activeContent", "activeSection"]),
  },
  created() {
    // this.loading = true;
    // Check whenever the screen size is changing
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    this.loading = true;
    this.startTimer();
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    toggle() {
      this.activeContent = "#intro";
    },
    startTimer() {
      setTimeout(() => {
        this.loading = false;
        // this.transitionAnim = true;
        this.afterTransition();
      }, 3000); // Timer set to 1 second (1000 milliseconds)
    },
    afterTransition() {
      setTimeout(() => {
        this.transitionAnim = false;
      }, 1000); // Timer set to 1 second (1000 milliseconds)
    },
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap");
/*
* {
  @apply outline-1 outline-red-500 outline;
} */

/* .stickNav {
  @apply z-[9999] bg-primary-500;
} */

.guide {
  @apply outline-1 outline-red-500 outline;
}

html {
  scroll-behavior: smooth;
}

/* Scrollbar Styles */
html {
  scrollbar-width: thin;
  scrollbar-color: #fbaf3f;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #fbaf3f;
  border: #fbaf3f;
  border-radius: 10px;
}

body {
  @apply w-full min-h-full overflow-x-hidden font-inter;
}

/* .stickyNav {
  transform: translateY(-6rem);
} */

.hide {
  @apply absolute;
}

main {
  @apply relative w-[85%] mx-auto min-h-screen;
}

.logoLoader {
  @apply grid place-items-center w-full h-full min-h-screen;
}

.gen-contentText {
  @apply text-sm text-neutral-800 sm:text-base;
}

.about__container,
.exp__container,
.projects__container,
.contact__container,
.ty__wrapper {
  @apply h-full min-h-screen py-[3rem] my-[5rem];
}

@media (min-width: 1000px) {
  .about__container,
  .exp__container,
  .projects__container,
  .contact__container,
  .ty__wrapper {
    @apply py-[2.2rem];
  }
}

/* ======================================== */
/* ======================================== */

.section-title {
  @apply fixed top-0 right-[-1.5rem] flex justify-end items-center gap-2 z-50 bg-shades-white py-[.5rem] px-[2rem] rounded-full;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateX(-5rem);
  transition: 0.5s;
}

.section-line {
  @apply bg-primary-500 h-[.5rem] w-[2rem] rounded-full;
}

.section-title p {
  @apply font-code text-neutral-800 font-medium;
}

.section-title.active {
  opacity: 1;
  transform: translateX(0);
}

.loader {
  border: 2px solid #1e293b;
  border-left-color: transparent;
  border-radius: 50%;
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.yellowRect {
  @apply absolute top-0 w-screen h-screen bg-primary-500 z-[999];
  transform: translateX(-20rem);
  animation: yellowRectAnim 1.5s ease-in-out;
}

.grayRect {
  @apply absolute top-0 w-screen h-screen bg-neutral-700 z-[999];
  transform: translateX(-20rem);
  animation: grayRectAnim 1.9s ease-in-out;
}

@keyframes yellowRectAnim {
  0% {
    transform: translateX(-40rem);
  }
  100% {
    transform: translateX(100rem);
  }
}

@keyframes grayRectAnim {
  0% {
    transform: translateX(-40rem);
  }
  100% {
    transform: translateX(100rem);
  }
}

@media (min-width: 1000px) {
  main {
    @apply grid grid-cols-2 max-w-[72rem] mx-auto min-h-screen;
    grid-template-areas: "info content";
  }

  main section:first-child {
    @apply fixed;
  }

  /* Content Section */
  main section:last-child {
    @apply relative right-0 justify-self-end;
    grid-area: content;
  }

  .yellowRect {
    transform: translateX(-100rem);
    animation: yellowRectAnim 1.5s ease-in-out;
  }

  .grayRect {
    transform: translateX(-100rem);
    animation: grayRectAnim 1.8s ease-in-out;
  }

  @keyframes yellowRectAnim {
    0% {
      transform: translateX(-100rem);
    }
    100% {
      transform: translateX(100rem);
    }
  }

  @keyframes grayRectAnim {
    0% {
      transform: translateX(-100rem);
    }
    100% {
      transform: translateX(100rem);
    }
  }
}
</style>
