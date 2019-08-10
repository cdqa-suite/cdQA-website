<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Why></Why>
    <Suite></Suite>
    <Features></Features>
    <HowItWorks></HowItWorks>
    <Demo></Demo>
    <AboutUs></AboutUs>
    <Sponsors></Sponsors>
    <!-- <UserReviews></UserReviews> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import Why from "./components/why.vue";
import Features from "./components/features.vue";
import Suite from "./components/suite.vue";
import HowItWorks from "./components/how-it-works.vue";
import Demo from "./components/demo.vue";
import Sponsors from "./components/sponsors.vue";
import AboutUs from "./components/about-us.vue";
// import UserReviews from "./components/user-reviews.vue";
import Footer from "./components/footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Why,
    Features,
    HowItWorks,
    Suite,
    Demo,
    AboutUs,
    Sponsors,
    // UserReviews,
    Footer
  },
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
};
</script>

<style>
@import "./assets/css/theme.css";
section {
  padding: 3rem 0;
}
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}
</style>