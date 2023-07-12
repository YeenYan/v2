<template>
  <div class="stickyNav__container">
    <div>
      <a href="#info">
        <div class="image__container" @click.capture="logoToggle">
          <img src="@/components/icons/myLogo_black.svg" alt="My Logo" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import useIndexStore from "@/store/index";

export default {
  name: "StickyNav",
  computed: {
    ...mapWritableState(useIndexStore, ["activeContent"]),
  },
  methods: {
    logoToggle() {
      this.activeContent = false;
      // alert(this.activeContent);
    },
  },
};
</script>

<style lang="postcss" scoped>
.stickyNav__container {
  @apply sticky top-[-3px] w-full bg-shades-white z-50 py-[.8rem];
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
}

.stickyNav__container > div {
  @apply w-[85%] mx-auto;
}

.image__container {
  @apply relative left-0 w-full max-w-[5rem] cursor-pointer;
}
</style>
