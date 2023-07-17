<template>
  <div class="projects__container" id="projects">
    <content-header>
      <template #title>things I've built.</template>
    </content-header>

    <ul class="projects-card">
      <li v-for="tech in techs" :key="tech.title">
        <a href="#" target="_blank">
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
  </div>
</template>

<script>
import htmlIcon from "@/components/icons/tech/html.vue";
import cssIcon from "@/components/icons/tech/css.vue";
import sassIcon from "@/components/icons/tech/sass.vue";
import jsIcon from "@/components/icons/tech/js.vue";
import tailwindIcon from "@/components/icons/tech/tailwind.vue";
import firebaseIcon from "@/components/icons/tech/firebase.vue";
import vuejsIcon from "@/components/icons/tech/vuejs.vue";
import viteIcon from "@/components/icons/tech/vite.vue";

export default {
  name: "Projects",
  components: {
    htmlIcon,
    cssIcon,
    sassIcon,
    jsIcon,
    tailwindIcon,
    firebaseIcon,
    vuejsIcon,
    viteIcon,
  },
  data() {
    return {
      techs: [
        {
          image: "src/assets/images/proj-img.svg",
          title: "TakeNote App",
          type: "Side project",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.",
          techList: ["tailwindIcon", "jsIcon", "vuejsIcon", "viteIcon", "firebaseIcon"],
        },

        {
          image: "src/assets/images/proj-img.svg",
          title: "TakeNote App",
          type: "Side project",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.",
          techList: ["tailwindIcon", "jsIcon", "vuejsIcon", "viteIcon", "firebaseIcon"],
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.projects__container {
  @apply w-full h-full min-h-screen;
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
  @apply w-full;
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
    @apply flex-row items-start;
  }

  .proj-image__wrapper {
    @apply max-w-[15rem];
  }

  .proj-header .title {
    @apply text-xl;
  }

  .tech__wrapper {
    @apply bottom-[-3.5rem];
  }
}
</style>
