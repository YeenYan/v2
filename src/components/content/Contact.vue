<template>
  <div class="section-title" :class="elementIsAtTop ? 'active' : ''" v-if="mobile">
    <div class="section-line"></div>
    <p>send me a message!</p>
  </div>
  <div class="contact__container" id="contact" ref="sectionElement" v-if="!tyForm">
    <content-header>
      <template #title>send me a message!</template>
    </content-header>
    <div class="contact__wrapper" ref="elementToTrack">
      <p>
        Feel free to connect with me for new opportunities, collaborations, or engaging
        conversations. I look forward to hearing from you!
      </p>

      <div class="form__wrapper">
        <form>
          <div class="input__wrapper">
            <label>Your Name</label>
            <input
              type="text"
              v-model="name"
              placeholder="Enter your name"
              :disabled="loading"
            />
            <span v-if="errors.name" class="errorText">{{ errors.name }}</span>
          </div>

          <div class="input__wrapper">
            <label>Email Address</label>
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email address"
              :disabled="loading"
            />
            <span v-if="errors.email" class="errorText">{{ errors.email }}</span>
          </div>

          <div class="input__wrapper">
            <label>Your Message</label>
            <textarea
              v-model="message"
              placeholder="Hi, I think we need someone like you on our team. How soon can you hop on to discuss this?"
              :disabled="loading"
            ></textarea>
            <span v-if="errors.message" class="errorText">{{ errors.message }}</span>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <!-- <button @click.prevent="submitForm">Send</button> -->
          <div>
            <button class="btnContact" @click.prevent="submitForm" v-if="!loading">
              Say Hello!
              <span class="material-symbols-outlined wave-animation"> waving_hand </span>
            </button>
            <button class="btnContact" disabled v-if="loading">
              <span class="loader"></span>
              Loading...
            </button>
          </div>
        </form>
      </div>
    </div>
    <p class="footer">
      I designed this using Figma and personally coded it with Vue.js, utilizing Tailwind
      CSS.
    </p>
  </div>
  <!-- ============================= -->
  <!-- After submittion -->

  <div class="ty__wrapper" id="contact" ref="sectionElement" v-if="tyForm">
    <checkSign />
    <h2 ref="elementToTrack">Thank You!</h2>
    <p class="ty-msg">
      Your form has been successfully submitted. I'll get back to you as soon as possible.
    </p>
    <button class="btnOkay" @click.prevent="okay">Okay!</button>

    <p class="footer">
      I designed this using Figma and personally coded it with Vue.js, utilizing Tailwind
      CSS.
    </p>
  </div>

  <!-- ============================= -->
  <!-- ============================= -->
</template>

<script>
import axios from "axios";

import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

import checkSign from "../icons/checkSign.vue";

export default {
  components: {
    checkSign,
  },
  data() {
    return {
      elementIsAtTop: false,
      elAnimation: false,

      loading: false,
      tyForm: false,

      name: "",
      email: "",
      message: "",
      errors: {},
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
    ...mapWritableState(useIndexStore, [
      "activeSection",
      "activeContent",
      "mobile",
      "navLists",
      "navActive",
      "projectActive",
      "contactActive",
    ]),
    expandIcon() {
      return !this.readMore ? "more" : "less";
    },
  },
  methods: {
    ...mapActions(useIndexStore, ["checkScreen"]),
    toggleReadMore() {
      this.readMore = !this.readMore;
    },

    checkIfElementAtTop() {
      const element = this.$refs.elementToTrack;
      const sectionBottom = this.$refs.sectionElement.getBoundingClientRect().bottom;

      try {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element's top is at or above the top of the viewport
          this.elementIsAtTop = rect.top <= 100;
          // console.log(rect.top);

          const contactViewportHeight = window.innerHeight + 400;
          const contactSectionHalfwayPoint = rect.top + rect.height / 2;

          // console.log(`section: ${contactSectionHalfwayPoint}`);
          // console.log(`viewport: ${contactViewportHeight}`);

          // trigger the animations
          if (contactSectionHalfwayPoint <= contactViewportHeight) {
            // alert("Top section is halfway in the browser view.")
          } else {
          }

          if (this.elementIsAtTop) {
            // Do something here
          }
          if (sectionBottom < 0) {
            this.elementIsAtTop = false;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    openGmail() {
      const isAndroid = /android/i.test(navigator.userAgent);
      const email = "markiantalan@gmail.com"; // Replace with your actual Gmail address

      if (isAndroid) {
        window.location.href = `intent://compose/?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`;
      } else {
        window.location.href = `mailto:${email}`;
      }
    },

    toggleForm() {
      this.$refs.firstForm.submit();
    },

    validateEmail(email) {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    submitForm() {
      // Clear previous errors
      this.errors = {};

      // Perform validation
      if (!this.name.trim()) {
        this.errors.name = "Name is required";
      }
      if (!this.email.trim()) {
        this.errors.email = "Email address is required";
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = "Invalid email format";
      }
      if (!this.message.trim()) {
        this.errors.message = "Message is required";
      }

      // Check if there are any errors
      if (Object.keys(this.errors).length === 0) {
        // No errors, proceed with form submission (for demonstration purposes, I'm logging the data)
        console.log("Form data:", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        // this.toggleForm();

        this.loading = true;

        axios.defaults.headers.post["Content-Type"] = "application/json";
        axios
          .post("https://formsubmit.co/ajax/5873f34fa7ff47d5cdc91dd513b5d416", {
            name: this.name,
            email: this.email,
            message: this.message,
          })
          .then((response) => {
            console.log(response);
            // alert("success");
            this.name = "";
            this.email = "";
            this.message = "";

            this.loading = false;
            this.tyForm = true;
          })
          .catch((error) => alert(error));
      }
    },

    okay() {
      this.tyForm = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
:deep(.line) {
  @apply w-[10%] !important;
}

.hidden-form {
  display: none;
}

.contact__container {
  @apply relative;
}

.contact__wrapper p {
  @apply text-base text-neutral-600 mb-[5rem];
}

/* Form */
.form__wrapper form {
  @apply grid gap-10;
}

.input__wrapper {
  @apply flex flex-col;
}

.input__wrapper label {
  @apply text-sm text-neutral-800;
}

.input__wrapper input,
.input__wrapper textarea {
  @apply text-sm text-neutral-700 px-[.4rem] py-[.625rem] mt-[.4rem] border-b-[.5px] border-neutral-800 bg-transparent outline-none focus:border-primary-500;
  transition: 0.3s;
}

.input__wrapper input::placeholder,
.input__wrapper textarea::placeholder {
  @apply text-neutral-400 font-light;
}

.errorText {
  @apply text-error-500 text-xs mt-[.4rem] italic;
}

/* Button */

.btnContact,
.btnOkay {
  @apply flex items-center justify-center gap-2 text-sm font-code font-semibold bg-primary-500 mt-[1rem] py-[.625rem] px-[1.5rem] border-[2px] border-neutral-800 rounded-full w-full max-w-[12rem];
}

.wave-animation {
  animation: wave 0.5s infinite;
}

/* Thank you properties */
.ty__wrapper {
  @apply flex flex-col items-center mt-[9rem] py-[9rem];
}

.ty__wrapper h2 {
  @apply text-[3.5rem] font-bold text-center text-primary-500 mt-[.5rem];
}

.ty-msg {
  @apply text-neutral-500 text-sm text-center max-w-[19rem] mb-[1rem];
}

.footer {
  @apply text-base text-neutral-600 w-[90%] mt-[9rem] mx-auto text-center;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(0deg) translateX(2px);
  }
}

@media (min-width: 1000px) {
  .footer {
    @apply bottom-[10%];
  }
}
</style>
