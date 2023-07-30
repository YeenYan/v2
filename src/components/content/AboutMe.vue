<template>
  <div class="section-title" :class="elementIsAtTop ? 'active' : ''" v-if="mobile">
    <div class="section-line"></div>
    <p>about me.</p>
  </div>
  <div class="about__container" id="about" ref="sectionElement">
    <content-header>
      <template #title>about me.</template>
    </content-header>

    <div class="about-content__wrapper" ref="elementToTrack">
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
          present, I have developed my
          <span class="creative-side"
            ><a href="https://www.behance.net/MarkIanCreative" target="_blank"
              >creative side</a
            ></span
          >
          while working as a graphic designer for over three years. With an impeccable eye
          for design and a knack for coding, I specialize in transforming ideas into
          captivating online experiences.
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
          ones, and playing strategic games
          to practice and sharpen my analytical thinking.
        </p>
      </transition>
    </div>

    <p class="continue-text" @click.prevent="toggleReadMore">
      Continue Reading
      <span class="material-symbols-outlined"> expand_{{ expandIcon }} </span>
    </p>

    <div class="image__wrapper">
      <img src="../../assets/images/MyImage-2.webp" alt="My intro image" />
    </div>

    <Skills />
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import Skills from "./Skills.vue";

export default {
  name: "AboutMe",
  emits: ["about-trigger"],
  components: {
    Skills,
  },
  data() {
    return {
      readMore: false,
      elementIsAtTop: false,
      elAnimation: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.checkIfElementAtTop);
  },
  mounted() {
    window.addEventListener("scroll", this.checkIfElementAtTop);
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  created() {
    window.removeEventListener("scroll", this.checkIfElementAtTop);
    // Check whenever the screen size is changing
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkIfElementAtTop);
    window.removeEventListener("resize", this.checkScreen);
  },
  computed: {
    ...mapWritableState(useIndexStore, ["activeSection", "activeContent", "mobile"]),
    expandIcon() {
      return !this.readMore ? "more" : "less";
    },
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen", "toggleActiveNavStore"]),
    toggleReadMore() {
      this.readMore = !this.readMore;
    },

    triggerAboutTrigger() {
      this.$emit("about-trigger");
    },

    checkIfElementAtTop() {
      const element = this.$refs.elementToTrack;
      const sectionBottom = this.$refs.sectionElement.getBoundingClientRect().bottom;

      try {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element's top is at or above the top of the viewport
          this.elementIsAtTop = rect.top <= 0;
          // console.log(rect.top);

          // console.log(this.navLists[0].text);

          const aboutViewportHeight = window.innerHeight + 200;
          const aboutSectionHalfwayPoint = rect.top + rect.height / 2;

          // console.log(`section: ${aboutSectionHalfwayPoint}`);
          // console.log(`viewport: ${aboutViewportHeight}`);

          // trigger the animations
          if (aboutSectionHalfwayPoint <= aboutViewportHeight) {
            // console.log("Top section is halfway in the browser view.");
            this.triggerAboutTrigger();

            // console.log(this.navLists);
          } else if (aboutSectionHalfwayPoint > aboutViewportHeight) {
          }

          if (this.elementIsAtTop) {
            // Do something here
            // console.log("=====top=======");
          }
          if (sectionBottom < 0) {
            this.elementIsAtTop = false;
          }
        }
      } catch (error) {
        // console.log(error);
      }
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

.creative-side {
  @apply cursor-pointer font-bold hover:text-primary-500;
  transition: 0.3s;
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
  @apply w-full max-w-[32rem] mx-auto mt-[3.8rem];
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
