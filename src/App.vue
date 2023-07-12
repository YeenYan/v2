<template>
  <main>
    <!-- <a :href="activeContent">Intro</a> -->
    <ProfileNav />
    <ContentContainer />
    <Navigation v-if="mobile" @active-content="toggle" />
  </main>

  <teleport to="body">
    <patternBG />
  </teleport>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import ProfileNav from "@/views/ProfileNav.vue";
import ContentContainer from "@/views/ContentContainer.vue";
import Navigation from "@/components/profile/Navigation.vue";

// For Body Background SVG image
import patternBG from "./components/TopographyBG.vue";

export default {
  name: "App",
  components: {
    ProfileNav,
    ContentContainer,
    Navigation,
    patternBG,
  },
  data() {
    return {
      // mobile: false,
      // windowWidth: null,
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["mobile", "activeContent"]),
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
      // return "#intro";
      // alert(this.activeContent);
    },
    // checkScreen() {
    //   this.windowWidth = window.innerWidth;
    //   if (this.windowWidth < 1000) {
    //     this.mobile = true;
    //     return;
    //   }
    //   this.mobile = false;
    // },
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap");

/* * {
  @apply outline-1 outline-red-500 outline;
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

main {
  @apply w-[85%] mx-auto min-h-screen;
}

@media (min-width: 1000px) {
  main {
    @apply grid grid-cols-2 max-w-[72rem] mx-auto min-h-screen;
  }
}
</style>
