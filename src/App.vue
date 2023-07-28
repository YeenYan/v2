<template>
  <!-- top element -->
  <div id="info"></div>

  <!-- for the Sticky Navigation -->

  <!-- <StickyNav :class="{ stickyNav: !stick }" /> -->
  <main>
    <ProfileNav />
    <ContentContainer />
    <!-- <Navigation v-if="mobile" /> -->
  </main>

  <teleport to="body">
    <patternBG />
  </teleport>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

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
    // Navigation,
    patternBG,
  },
  data() {
    return {
      stick: false,
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["mobile", "activeContent", "activeSection"]),
  },
  created() {
    // Check whenever the screen size is changing
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    toggle() {
      this.activeContent = "#intro";
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
}
</style>
