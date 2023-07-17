<template>
  <!-- top element -->
  <div id="info"></div>

  <!-- for the Sticky Navigation -->
  <StickyNav :class="{ stickyNav: !stick }" v-if="mobile" />

  <main>
    <ProfileNav />
    <ContentContainer ref="myElement" />
    <Navigation v-if="mobile" />
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
import Navigation from "@/components/profile/Navigation.vue";

// For Body Background SVG image
import patternBG from "./components/TopographyBG.vue";

export default {
  name: "App",
  components: {
    StickyNav,
    ProfileNav,
    ContentContainer,
    Navigation,
    patternBG,
  },
  data() {
    return {
      stick: false,
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
  mounted() {
    // Add scroll event listener to the window or a specific container
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // Remove scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    toggle() {
      this.activeContent = "#intro";
    },

    handleScroll() {
      try {
        const element = this.$refs.myElement.$el;
        const rect = element.getBoundingClientRect(); // Get the position and size of the element

        // Access the properties of the rect object
        const top = rect.top; // Top position relative to the viewport

        // Perform actions based on the element's position during scrolling
        // For example, update data properties, trigger animations, etc.
        this.doSomethingWhileScrolling(top);
      } catch (error) {
        console.log(`CHECK THIS!!!!!! ${error}`);
      }
    },
    doSomethingWhileScrolling(top) {
      top < 0 ? (this.stick = true) : (this.stick = false);
    },
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

.stickyNav {
  transform: translateY(-6rem);
}

.hide {
  @apply absolute;
}

main {
  @apply relative w-[85%] mx-auto min-h-screen;
}

.gen-contentText {
  @apply text-sm text-neutral-800 sm:text-base;
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
