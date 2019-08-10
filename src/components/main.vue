<template>
  <div class="container pt-6">
    <div class="row align-items-center justify-content-between o-hidden">
      <div class="col-md-6 order-sm-2 mb-5 mb-sm-0">
        <img src="../assets/img/main.svg" alt="Image">
      </div>
      <div class="col-md-6 pr-xl-5 order-sm-1">
        <vue-typed-js
          :strings="['everyone', 'employees', 'support teams', 'lawyers', 'entrepreneurs', 'bankers', 'researchers', 'doctors']"
          :typeSpeed="70"
          :backSpeed="30"
          :backDelay="2000"
          :loop="true"
        >
          <h1 class="display-4">
            Reading machines for
            <span class="typing"></span>
          </h1>
        </vue-typed-js>
        <p
          class="lead"
        >Build your own question answering system. Ease access to your internal information. Help others search efficiently.</p>
        <a href="https://github.com/cdqa-suite/cdQA" class="btn btn-lg btn-primary mb-2">
          <svg class="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub icon</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            ></path>
          </svg>
          <span>View on Github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style>
</style>