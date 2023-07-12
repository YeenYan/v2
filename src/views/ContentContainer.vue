<template>
  <section>
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </section>
</template>

<script>
import Intro from "@/components/content/Intro.vue";
import About from "@/components/content/AboutMe.vue";
import Experience from "@/components/content/Experience.vue";
import Projects from "@/components/content/Projects.vue";
import Contact from "@/components/content/Contact.vue";

export default {
  name: "ContentContainer",
  components: {
    Intro,
    About,
    Experience,
    Projects,
    Contact,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply w-full h-fit mx-auto;
}
</style>
