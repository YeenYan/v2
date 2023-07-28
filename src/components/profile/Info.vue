<template>
  <header>
    <div class="navigation__container">
      <a href="#intro">
        <div class="image__container" @click.capture="logoToggle">
          <img src="@/components/icons/myLogo_black.svg" alt="My Logo" />
        </div>
      </a>
      <!-- navigation -->
      <nav class="navigation__wrapper" v-if="!mobile">
        <div class="line">
          <div class="progress" :style="{ height: progressBar }"></div>
        </div>
        <ul class="nav__wrapper">
          <li
            class="nav-list"
            v-for="navList in navLists"
            :key="navList.title"
            @click.capture="
              toggleActiveNav(navList, navList.progressBar, navList.content)
            "
            :class="{ active: navList.active }"
          >
            <div class="icon__wrapper">
              <div class="point" :class="{ active: navList.pointActive }"></div>
              <span class="material-symbols-outlined"> {{ navList.icon }} </span>
            </div>
            <a :href="navActive" class="nav-anchor">
              <p>{{ navList.text }}</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="me__container" ref="myElement">
      <h1>Mark Ian Reyes</h1>
      <h3>Web Developer, UI/UX & Graphic Designer</h3>
      <p>
        I craft captivating online experience, magically transforming ideas into
        mesmerizing digital realities.
      </p>
    </div>
  </header>

  <!-- Social Links -->
  <div class="links__container">
    <div class="social__wrapper">
      <a href="https://github.com/YeenYan" target="_blank">
        <github class="social-icons" />
      </a>
      <a href="https://www.linkedin.com/in/mark-ian-reyes/" target="_blank">
        <linkedin class="social-icons" />
      </a>
      <a href="https://codepen.io/YeenYan" target="_blank">
        <codepen class="social-icons" />
      </a>
      <a href="https://www.behance.net/MarkIanCreative" target="_blank">
        <behance class="social-icons" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100070147221810" target="_blank">
        <facebook class="social-icons" />
      </a>
      <a href="https://www.instagram.com/yeenyan07/" target="_blank">
        <instagram class="social-icons" />
      </a>
    </div>

    <div class="resume__wrapper">
      <div class="resume-line"></div>
      <a href="../../../public/resume.pdf" target="_blank"
        >Resume <span class="material-symbols-outlined"> open_in_new </span></a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import github from "@/components/icons/social/github.vue";
import linkedin from "@/components/icons/social/linkedin.vue";
import codepen from "@/components/icons/social/codepen.vue";
import behance from "@/components/icons/social/behance.vue";
import facebook from "@/components/icons/social/facebook.vue";
import instagram from "@/components/icons/social/instagram.vue";

export default {
  name: "Info",
  components: {
    github,
    linkedin,
    codepen,
    behance,
    facebook,
    instagram,
  },
  data() {
    return {
      progressBar: null,
      navActive: "",
      navLists: [
        {
          icon: "face_6",
          text: "About",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 10px)",
          content: "#about",
        },
        {
          icon: "business_center",
          text: "Experience",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 60px)",
          content: "#experience",
        },
        {
          icon: "laptop_mac",
          text: "Projects",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 100px)",
          content: "#projects",
        },
        {
          icon: "mail",
          text: "Contact",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 160px)",
          content: "#contact",
        },
      ],
    };
  },
  computed: {
    ...mapState(useIndexStore, ["mobile"]),
  },
  created() {
    // Check whenever the screen size is changing
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    logoToggle() {
      this.progressBar = "calc(0% + 0px)";
      this.navLists.forEach((navList) => {
        navList.active = false;
        navList.pointActive = false;
      });
    },
    // this will toggle only one item on the list
    toggleActiveNav(clickedNav, bar, content) {
      this.navLists.forEach((navList) => {
        navList.active = navList === clickedNav;
        this.progressBar = bar;
      });

      this.navActive = content;

      if (clickedNav.text === "About") {
        this.navLists.forEach((navList) => {
          navList.pointActive = false;
        });
        return;
      }

      if (clickedNav.text === "Experience") {
        this.navLists[0].pointActive = true;
        return;
      }

      if (clickedNav.text === "Projects") {
        this.navLists[0].pointActive = true;
        this.navLists[1].pointActive = true;
        return;
      }

      if (clickedNav.text === "Contact") {
        this.navLists[0].pointActive = true;
        this.navLists[1].pointActive = true;
        this.navLists[2].pointActive = true;
        return;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
/**********************************************
**** Header Properties
**********************************************/

header {
  @apply relative top-[2rem] flex h-full min-h-screen;
}
/* pb-[5.7rem] pt-[2rem]*/

/**********************************************
**** Navigation Properties
**********************************************/

.navigation__container {
  @apply relative h-full w-full;
}

.image__container {
  @apply relative left-0 w-full max-w-[5rem] cursor-pointer;
}

.navigation__wrapper {
  @apply absolute top-0 h-[90%] mt-[2.5rem];
}

.line {
  @apply absolute h-full w-[.2rem] ml-[.2rem] rounded-full;
  background: linear-gradient(0deg, rgba(71, 85, 105, 0) 15%, #cbd5e1 100%);
}

.progress {
  @apply w-full bg-neutral-800 rounded-full;
  height: calc(0% + 0px);
  /* height: calc(40% + 60px); */
  /* height: calc(40% + 100px); */
  /* height: calc(40% + 150px); */
  transition: 1s;
}

.nav__wrapper {
  @apply absolute top-[40%];
}

.nav-list {
  @apply flex items-center gap-4 mb-[30px] cursor-pointer;
}

.icon__wrapper {
  @apply relative flex justify-center items-center;
}

/* for the icons when active */
.nav-list .icon__wrapper span {
  @apply absolute text-[1.5rem] p-[.7rem] bg-primary-500 outline outline-[.15rem] outline-neutral-800 rounded-full;
  transform: scale(0);
  transition: 0.5s;
}

.point {
  @apply w-[.6rem] h-[.6rem] bg-neutral-300 rounded-full;
  transition: 0.5s;
}

.point.active {
  @apply bg-neutral-800;
}

.nav-list p {
  @apply text-sm text-neutral-400;
  transition: 0.5s;
}

/* When active */
.nav-list.active .icon__wrapper span {
  transform: scale(1);
}

.nav-list.active p {
  @apply text-[1rem] text-neutral-800 font-semibold ml-[1rem];
}

/**********************************************
**** My Info Properties
**********************************************/

.me__container {
  @apply absolute top-[5rem] ml-0;
}

.me__container h1,
.me__container h3 {
  @apply text-neutral-800;
}

.me__container h1 {
  @apply text-[2.3rem] sm:text-[2.8rem] md:text-[3.3rem] font-bold;
}

.me__container h3 {
  @apply text-lg sm:text-[1.18rem] md:text-xl font-medium min-w-[90%];
}

.me__container p {
  @apply text-sm sm:text-[.9rem] md:text-base text-neutral-600 w-full max-w-[25rem] mt-[.8rem];
}

/**********************************************
**** Social Links & Resume Properties
**********************************************/

.social__wrapper {
  @apply absolute bottom-[15%] flex gap-5 mb-[5.5rem];
}

.social-icons {
  @apply w-[1.56rem] fill-neutral-400 hover:scale-125 cursor-pointer;
  transition: 0.3s ease-in-out;
}

.resume__wrapper {
  @apply absolute bottom-[15%] left-[-40%] flex items-center gap-2 w-full mb-[1.5rem];
}

.resume__wrapper > a {
  @apply flex items-center justify-center gap-2 bg-primary-500 text-neutral-800 font-medium font-code w-full px-[1rem] py-2.5 rounded-full border-[2px] border-neutral-800  max-w-[10rem];
  /* max-w-[8.75rem] */
}

.resume__wrapper > a span {
  @apply text-[1.3rem] font-medium;
}

.resume-line {
  @apply h-0.5 w-full bg-neutral-300 max-w-[27rem];
}

/**********************************************
**** Media Queries
**********************************************/
@media (min-width: 1000px) {
  header {
    @apply top-0 pt-[2rem];
  }

  .image__container {
    @apply left-[-1rem];
  }

  .me__container {
    @apply mt-[.8rem] ml-[1.3rem];
  }

  .social__wrapper {
    @apply bottom-0 flex gap-5 mb-[6rem];
  }

  .resume__wrapper {
    @apply mb-0 bottom-0 left-[-23.5%] gap-5 mb-[2rem];
  }
}
</style>
