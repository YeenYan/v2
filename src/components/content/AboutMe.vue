<template>
  <div class="about__container" id="about">
    <content-header>
      <template #title>about me.</template>
    </content-header>

    <div class="about-content__wrapper">
      <!-- first paragraph -->
      <div>
        <p class="gen-contentText">
          It all started back in college in 2015 when I ran my first
        </p>
        <div class="c-content">
          <p class="c-code">
            <span>4</span><span>Console</span>.<span>WriteLine</span>(<span
              >"Hello, World!"</span
            >);
          </p>
          <p>//Coding adventure awaits!</p>
        </div>
        <p class="gen-contentText">
          It turned out that I enjoyed coding and solving complex problems. Jumping to the
          present, I have developed my creative side while working as a graphic designer
          for over three years. With an impeccable eye for design and a knack for coding,
          I specialize in transforming ideas into captivating online experiences.
        </p>
      </div>

      <!-- second paragraph -->
      <transition name="show">
        <p class="gen-contentText" v-if="readMore">
          My ultimate goal is to create remarkable digital solutions that leave a lasting
          impact. Currently, I am focusing my energy on enhancing and expanding my coding
          expertise, ranging from frontend to backend development.
        </p>
      </transition>

      <!-- third paragraph -->
      <transition name="show">
        <p class="gen-contentText" v-if="readMore">
          When I'm not immersed in coding, you'll find me spending time with my loved
          ones, engaging in workouts to stay physically fit, and playing strategic games
          to practice and sharpen my analytical thinking.
        </p>
      </transition>
    </div>

    <p class="continue-text" @click.prevent="toggleReadMore">
      Continue Reading
      <span class="material-symbols-outlined"> expand_{{ expandIcon }} </span>
    </p>

    <div class="image__wrapper">
      <img src="../../assets/images/intro-myImage.svg" alt="My intro image" />
    </div>

    <Skills />
  </div>
</template>

<script>
import Skills from "./Skills.vue";

export default {
  name: "AboutMe",
  components: {
    Skills,
  },
  data() {
    return {
      readMore: false,
    };
  },
  computed: {
    expandIcon() {
      return !this.readMore ? "more" : "less";
    },
  },
  methods: {
    toggleReadMore() {
      this.readMore = !this.readMore;
    },
  },
};
</script>

<style lang="postcss" scoped>
.about__container {
  transition: all 1s;
}

.about-content__wrapper {
  @apply grid gap-5;
}

/* .about-content__wrapper > p {
  transition: 1s;
} */

.show-enter-active,
.show-leave-active {
  transition: all 0.2s;
}

.show-enter-from,
.show-leave-to {
  /* transform: translateY(-1rem); */
  opacity: 0;
}

.c-content {
  @apply font-code text-xs text-shades-white bg-[#1E1E1E] pl-[.5rem] py-[1rem] rounded-md my-[.5rem];
}

.c-content .c-code span:nth-child(1) {
  @apply text-[#3196BA] mr-[1rem];
}

.c-content .c-code span:nth-child(2) {
  @apply text-[#48C2AC];
}

.c-content .c-code span:nth-child(3) {
  @apply text-[#EDED91];
}

.c-content .c-code span:nth-child(4) {
  @apply text-[#D78F67];
}

.c-content p:last-child {
  @apply text-[#57A74A] ml-[1.5rem] mt-[.1rem];
}

.continue-text {
  @apply flex items-center text-sm italic text-primary-500 mt-[1rem] cursor-pointer;
}

.continue-text span {
  @apply text-[1.2rem] pt-[.09rem] ml-[.3rem];
}

/**********************************************
**** Image Properties
**********************************************/
.image__wrapper {
  @apply w-full max-w-[25rem] mx-auto mt-[3.8rem];
}

@media (min-width: 575px) {
  .c-content {
    @apply flex gap-2;
  }

  .c-content p:last-child {
    @apply m-0;
  }
}
</style>
