<template>
  <div class="stickyNav__container">
    <a href="#info" @click.capture="logoToggle">
      <div class="stickyNav__wrapper">
        <div class="image__container">
          <img src="@/components/icons/myLogo_black.svg" alt="My Logo" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import useIndexStore from "@/store/index";

export default {
  name: "StickyNav",
  data() {
    return {
      activeClass: false,
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["activeContent", "activeSection"]),
    displayActiveSection() {
      if (this.activeSection === "about") {
        this.delayActiveClass();
        return "about me.";
      }
      if (this.activeSection === "career") {
        this.delayActiveClass();
        return "career path.";
      }
      if (this.activeSection === "projects") {
        this.delayActiveClass();
        return "things I've built.";
      }
      if (this.activeSection === "contact") {
        this.delayActiveClass();
        return "send me a message!";
      }
    },
  },
  methods: {
    logoToggle() {
      this.activeContent = false;
      // alert("toggle");
    },
    delayActiveClass() {
      this.activeClass = false;
      setTimeout(() => {
        this.activeClass = true;
      }, 300);
    },
  },
};
</script>

<style lang="postcss" scoped>
.stickyNav__container {
  @apply sticky top-[-3px] w-full bg-shades-white z-50 py-[.8rem];
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.08);
  transition: 1s;
}

.stickyNav__wrapper {
  @apply w-[85%] mx-auto;
}

.stickyNav__container > div a {
  @apply z-[99999];
}

.image__container {
  @apply relative left-0 w-full max-w-[5rem] cursor-pointer;
}
</style>
