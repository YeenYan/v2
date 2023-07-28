<template>
  <div class="info__container" id="intro" ref="sectionElement">
    <div class="image__wrapper" ref="elementToTrack">
      <img src="../../assets/images/intro-myImage.svg" alt="My intro image" />
    </div>

    <p class="intro-text gen-contentText">
      Hi, my name is Mark Ian, and I have a passion for creating things that come alive on
      the internet. From design to coding, I enjoy the entire process of bringing ideas to
      life online.
    </p>

    <!-- Rotating CTA -->
    <div class="circle" @click.prevent="openGmail">
      <div class="CTAbtn">let's talk</div>
      <div class="text-rotate">
        <img src="../../assets/images/text-circle.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

export default {
  name: "Intro",
  emits: ["intro-trigger"],
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
    openGmail() {
      const isAndroid = /android/i.test(navigator.userAgent);
      const email = "markiantalan@gmail.com"; // Replace with your actual Gmail address

      if (isAndroid) {
        window.location.href = `intent://compose/?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`;
      } else {
        window.location.href = `mailto:${email}`;
      }
    },

    triggerIntroTrigger() {
      this.$emit("intro-trigger");
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
            this.triggerIntroTrigger();

            // console.log(this.navLists);
          } else if (aboutSectionHalfwayPoint > aboutViewportHeight) {
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
.snap-toTop {
  transform: translateY(0px);
}

.info__container {
  @apply flex flex-col items-center justify-center gap-10 w-full mx-auto;
}

.image__wrapper {
  @apply w-full max-w-[35rem];
}

.intro-text {
  @apply w-full;
}

/**********************************************
**** Rotating CTA Properties
**********************************************/
.circle {
  @apply relative flex justify-center items-center w-[10rem] h-[10rem] rounded-full mt-[2.75rem] cursor-pointer;
}

.circle:hover .CTAbtn {
  transform: scale(1.2);
}

.CTAbtn {
  @apply absolute grid place-items-center w-[5.75rem] h-[5.75rem] text-base font-code text-center text-shades-white bg-neutral-800 rounded-full;
  transition: 0.5s;
}

.text-rotate {
  animation: rotateText 10s linear infinite;
}

@keyframes rotateText {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 650px) {
  .intro-text {
    @apply max-w-[32rem];
  }
}

@media (min-width: 1000px) {
  .intro-text {
    @apply max-w-full;
  }
}
</style>
