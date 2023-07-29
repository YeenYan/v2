<template>
  <div class="section-title" :class="elementIsAtTop ? 'active' : ''" v-if="mobile">
    <div class="section-line"></div>
    <p>things I've built.</p>
  </div>
  <div class="projects__container" id="projects" ref="sectionElement">
    <content-header>
      <template #title>things I've built.</template>
    </content-header>

    <ul class="projects-card" ref="elementToTrack">
      <li v-for="tech in limitedTechs" :key="tech.title">
        <a :href="tech.techLink" target="_blank">
          <div class="proj-image__wrapper">
            <img :src="tech.image" alt="proj-img" />
          </div>

          <div class="proj-content__wrapper">
            <div class="proj-header">
              <p class="title">
                {{ tech.title }}
                <span class="material-symbols-outlined"> north_east </span>
              </p>
              <p class="type">{{ tech.type }}</p>
            </div>

            <p class="proj-desc">
              {{ tech.desc }}
            </p>

            <div class="tech__wrapper">
              <ul>
                <li v-for="list in tech.techList" :key="list">
                  <component :is="list" />
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <button class="btnShow" @click.prevent="toggleShowMore">
      Show {{ !toggleShow ? "More" : "Less" }}
    </button>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import TakeNoteSS from "@/assets/images/project/TakeNoteSS.png";
import Portfolio from "@/assets/images/project/Portfolio.png";
import BusinessListing from "@/assets/images/project/BusinessListingSS.png";
import lucky9Game from "@/assets/images/project/lucky9Game.png";
import SpaceTourism from "@/assets/images/project/SpaceTourism.png";
import GuessMyNumber from "@/assets/images/project/GuessMyNumber.png";
import Mapty from "@/assets/images/project/Mapty.png";

import htmlIcon from "@/components/icons/tech/html.vue";
import cssIcon from "@/components/icons/tech/css.vue";
import sassIcon from "@/components/icons/tech/sass.vue";
import jsIcon from "@/components/icons/tech/js.vue";
import tailwindIcon from "@/components/icons/tech/tailwind.vue";
import firebaseIcon from "@/components/icons/tech/firebase.vue";
import vuejsIcon from "@/components/icons/tech/vuejs.vue";
import viteIcon from "@/components/icons/tech/vite.vue";
import figmaIcon from "@/components/icons/tech/figma.vue";
import netlifyIcon from "@/components/icons/tech/netlify.vue";
import githubIcon from "@/components/icons/social/github.vue";

export default {
  name: "Projects",
  emits: ["proj-trigger"],
  components: {
    htmlIcon,
    cssIcon,
    sassIcon,
    jsIcon,
    tailwindIcon,
    firebaseIcon,
    vuejsIcon,
    viteIcon,
    figmaIcon,
    githubIcon,
    netlifyIcon,
  },
  data() {
    return {
      elementIsAtTop: false,
      elAnimation: false,
      toggleShow: false,
      maxVisibleItems: 4,
      techs: [
        {
          image: TakeNoteSS,
          title: "TakeNote App",
          type: "Side project",
          desc:
            "A website for seamless note-taking, empowering users to capture thoughts and ideas across all devices.",
          techList: ["tailwindIcon", "jsIcon", "vuejsIcon", "viteIcon", "firebaseIcon"],
          techLink: "https://takenote-app.netlify.app/",
        },

        {
          image: Portfolio,
          title: "Personal Website V2",
          type: "Side project",
          desc:
            "The second iteration of my personal website is designed using Figma and built with Vue.js and Tailwind CSS.",
          techList: ["figmaIcon", "tailwindIcon", "jsIcon", "vuejsIcon", "viteIcon"],
          techLink: "#",
        },

        {
          image: BusinessListing,
          title: "Business Listing",
          type: "Learning project",
          desc:
            "A simple website designed to enhance my skills using Tailwind CSS and ensure responsiveness. Hosted on Github Pages",
          techList: ["htmlIcon", "tailwindIcon", "githubIcon"],
          techLink: "https://yeenyan.github.io/Business_and_Directory_Listing/",
        },
        {
          image: lucky9Game,
          title: "Lucky9 Card Game V1",
          type: "Side project",
          desc:
            "A playful and fun website inspired by the actual Lucky9 card game, built using Sass & JavaScript, and hosted on Netlify.",
          techList: ["figmaIcon", "htmlIcon", "sassIcon", "jsIcon", "netlifyIcon"],
          techLink: "https://lucky9cardgame.netlify.app/",
        },
        {
          image: SpaceTourism,
          title: "Space Tourism",
          type: "Learning project",
          desc:
            "A website that offers captivating views and insights into different planets and the astronaut experience.",
          techList: ["htmlIcon", "sassIcon", "jsIcon", "githubIcon"],
          techLink: "https://yeenyan.github.io/Space-Tourism/",
        },
        {
          image: GuessMyNumber,
          title: "Guess My Number",
          type: "Side project",
          desc:
            "A simple website that provides interactive enjoyment through a number-guessing game, built with Sass & JavaScript, and hosted on GitHub Pages.",
          techList: ["figmaIcon", "htmlIcon", "sassIcon", "jsIcon", "githubIcon"],
          techLink: "https://yeenyan.github.io/GuessMyNumber/",
        },
        {
          image: Mapty,
          title: "Mapty App",
          type: "Learning project",
          desc:
            "This straightforward website utilizes Geolocation and third-party libraries, enabling users to mark locations based on their activities.",
          techList: ["htmlIcon", "cssIcon", "jsIcon", "githubIcon"],
          techLink: "https://yeenyan.github.io/GuessMyNumber/",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkIfElementAtTop);
  },
  created() {
    // Check whenever the screen size is changing
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkIfElementAtTop);
  },
  computed: {
    ...mapWritableState(useIndexStore, ["activeSection", "activeContent", "mobile"]),
    limitedTechs() {
      return this.techs.slice(0, this.maxVisibleItems);
    },
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    toggleShowMore() {
      this.toggleShow = !this.toggleShow;
      if (this.toggleShow) {
        this.maxVisibleItems = this.techs.length; // Show all items
      } else {
        this.maxVisibleItems = 4; // Show only four items
      }
    },

    triggerProjTrigger() {
      this.$emit("proj-trigger");
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

          const projViewportHeight = window.innerHeight + 500;
          const projSectionHalfwayPoint = rect.top + rect.height / 2;

          console.log(`section: ${projSectionHalfwayPoint}`);
          console.log(`viewport: ${projViewportHeight}`);

          // trigger the animations
          if (projSectionHalfwayPoint <= projViewportHeight) {
            // console.log("Top section is halfway in the browser view.");
            this.triggerProjTrigger();
          } else if (projSectionHalfwayPoint > projViewportHeight) {
          }

          if (this.elementIsAtTop) {
            // Do something here
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
.projects__container {
  @apply grid place-items-center w-full;
}

:deep(.line) {
  @apply w-[10%] !important;
}

.projects-card {
  @apply grid gap-14;
}

.projects-card li {
  @apply bg-shades-white w-full p-[1.25rem] pb-[3rem] rounded-lg cursor-pointer outline outline-[.01rem] outline-neutral-200;
}

.projects-card li,
.projects-card li .title span,
.projects-card li .tech__wrapper ul li {
  transition: 0.5s;
}

.projects-card li:hover {
  transform: translateX(1px) translateY(-1px);
  box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.06);
}

.projects-card li:hover .title span {
  transform: translateX(0.4rem) translateY(-0.4rem);
}

.projects-card li:hover .tech__wrapper ul li {
  box-shadow: -2px 4px 2px 1px rgba(0, 0, 0, 0.06);
}

.projects-card li a {
  @apply flex flex-col gap-7 items-center relative;
}

.proj-image__wrapper {
  @apply w-full outline outline-[1px] outline-neutral-200;
}

.proj-image__wrapper img {
  @apply w-full;
}

.proj-header .title {
  @apply flex items-center gap-3;
}

.proj-header .title,
.proj-header .title span {
  @apply text-lg font-semibold text-neutral-800;
}

.proj-header .type {
  @apply text-sm text-neutral-600;
}

.proj-desc {
  @apply text-sm text-neutral-600 mt-[1.125rem];
}

.btnShow {
  @apply flex items-center justify-center gap-2 text-sm text-neutral-600 font-code font-semibold bg-transparent mt-[1rem] py-[.625rem] px-[1.5rem] border-[1px] border-neutral-600 rounded-full w-full max-w-[12rem] mt-[4rem]
  hover:bg-neutral-100;
  transition: 0.5s;
}

/**********************************************
**** Tech I used Properties
**********************************************/

.tech__wrapper {
  @apply absolute bottom-[-4.5rem];
  /* bottom-[-4.5rem] */
  /* @apply mt-[2rem]; */
}

.tech__wrapper ul {
  @apply flex items-center gap-2;
}

.tech__wrapper ul li {
  @apply grid place-items-center bg-shades-white w-[45px] h-[45px] p-[.6rem] rounded-full outline outline-[.01rem] outline-neutral-300;
}

@media (min-width: 580px) {
  .projects-card {
    @apply pb-[2rem];
  }

  .projects-card li a {
    /* @apply flex-row items-start; */
    @apply grid gap-7 items-start;
    grid-template-columns: 1fr 2fr;
  }

  .proj-image__wrapper {
    @apply max-w-[15rem];
  }

  .proj-header .title {
    @apply text-xl;
  }

  .tech__wrapper {
    @apply bottom-[-4.3rem];
  }
}
</style>
