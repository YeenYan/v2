<template>
  <!-- Container for the left side content -->
  <section>
    <Info />
  </section>
</template>

<script>
import Info from "@/components/profile/Info.vue";

export default {
  name: "ProfileNav",
  components: {
    Info,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply relative w-full h-screen min-h-screen mx-auto;
}

@media (min-width: 1000px) {
  section {
    @apply sticky top-0 w-full relative h-screen min-h-screen;
    /* bg-neutral-200 */
  }
}
</style>
