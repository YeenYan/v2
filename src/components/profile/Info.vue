<template>
  <header>
    <!-- <div class="image__container">
      <img src="@/components/icons/myLogo_black.svg" alt="My Logo" />
    </div> -->

    <div class="navigation__container">
      <div class="image__container" @click.prevent="logoToggle">
        <img src="@/components/icons/myLogo_black.svg" alt="My Logo" />
      </div>
      <!-- navigation -->
      <nav class="navigation__wrapper">
        <div class="line">
          <div class="progress" :style="{ height: progressBar }"></div>
        </div>
        <ul class="nav__wrapper">
          <li
            class="nav-list"
            v-for="navList in navLists"
            :key="navList.title"
            @click.prevent="toggleActiveNav(navList, navList.progressBar)"
            :class="{ active: navList.active }"
          >
            <div class="icon__wrapper">
              <div class="point" :class="{ active: navList.pointActive }"></div>
              <span class="material-symbols-outlined"> {{ navList.icon }} </span>
            </div>
            <p>{{ navList.text }}</p>
          </li>
        </ul>
      </nav>
    </div>

    <div class="me__container">
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
      <github class="social-icons" />
      <linkedin class="social-icons" />
      <codepen class="social-icons" />
      <behance class="social-icons" />
      <facebook class="social-icons" />
      <instagram class="social-icons" />
    </div>

    <div class="resume__wrapper">
      <div class="resume-line"></div>
      <a href="../../../public/resume.pdf" target="_blank">Resume</a>
    </div>
  </div>
</template>

<script>
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
      navLists: [
        {
          icon: "face_6",
          text: "About",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 10px)",
        },
        {
          icon: "business_center",
          text: "Experience",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 60px)",
        },
        {
          icon: "laptop_mac",
          text: "Projects",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 100px)",
        },
        {
          icon: "mail",
          text: "Contact",
          active: false,
          pointActive: false,
          progressBar: "calc(40% + 160px)",
        },
      ],
    };
  },
  methods: {
    logoToggle() {
      this.progressBar = "calc(0% + 0px)";
      this.navLists.forEach((navList) => {
        navList.active = false;
        navList.pointActive = false;
      });
    },
    // this will toggle only one item on the list
    toggleActiveNav(clickedNav, bar) {
      this.navLists.forEach((navList) => {
        navList.active = navList === clickedNav;
        this.progressBar = bar;
      });

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
  @apply relative flex h-full min-h-screen pt-[2rem];
}
/* pb-[5.7rem] */

/**********************************************
**** Navigation Properties
**********************************************/

.navigation__container {
  @apply relative h-full;
}

.image__container {
  @apply relative left-[-1rem] w-full max-w-[5rem] cursor-pointer;
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
  @apply absolute top-[5rem] ml-[1.3rem];
}

.me__container h1,
.me__container h3 {
  @apply text-neutral-800;
}

.me__container h1 {
  @apply text-[2.3rem] font-bold;
}

.me__container h3 {
  @apply text-lg font-medium min-w-[90%];
}

.me__container p {
  @apply text-base text-neutral-600 w-full max-w-[25rem] mt-[.8rem];
}

/* H1 support */
@supports (font-size: clamp(2.3rem, 5vw, 3.3rem)) {
  .me__container h1 {
    font-size: clamp(2.3rem, 5vw, 3.3rem);
  }
}

/* H3 support */
@supports (font-size: clamp(1.125rem, 5vw, 1.25rem)) {
  .me__container h3 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
  }
}

/* p support */
@supports (font-size: clamp(0.875rem, 5vw, 1rem)) {
  .me__container p {
    font-size: clamp(0.875rem, 5vw, 1rem);
  }
}

/**********************************************
**** Social Links & Resume Properties
**********************************************/

.social__wrapper {
  @apply absolute bottom-[15%] flex gap-5 mb-[5.5rem];
}

.social-icons {
  @apply w-[1.56rem] fill-neutral-400 hover:scale-110 cursor-pointer;
  transition: 0.3s ease-in-out;
}

.resume__wrapper {
  @apply absolute bottom-[15%] left-[-50%] flex items-center gap-2 w-full mb-[1.5rem];
}

.resume__wrapper > a {
  @apply grid place-content-center bg-primary-500 text-neutral-800 font-medium w-full max-w-[8.75rem] px-2.5 py-2.5 rounded-full;
}

.resume-line {
  @apply h-0.5 w-full bg-neutral-300 max-w-[27rem];
}

/**********************************************
**** Media Queries
**********************************************/
@media (min-width: 1000px) {
  .me__container {
    @apply mt-[.8rem];
  }

  .social__wrapper {
    @apply bottom-0 flex gap-5 mb-[6rem];
  }

  .resume__wrapper {
    @apply mb-0 bottom-0 left-[-58%] gap-5 mb-[2rem];
  }
}
</style>
