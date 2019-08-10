<template>
  <section id="demo">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-xl-7 col-lg-9">
          <h2 class="display-4 mx-xl-6">Try it live 🕹</h2>
          <p class="lead">
            Play with our demo on the
            <a
              href="https://group.bnpparibas/en/all-news"
            >BNP Paribas Newsroom dataset</a> composed of 3675 articles that are published on the official BNP Paribas website.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <CdqaUI
        api_endpoint_cpu="https://sasekoi.com:80/api"
        api_endpoint_gpu="https://sasekoi.com:8080/api"
        :queries_examples="['What are the activities of BNP Paribas?',
      'Who are the clients of BNP Paribas?',
      'What is the number of employees in the BNP Paribas group?',
      'How many countries covers BNP Paribas?',
      'What are the domestic markets of BNP Paribas?',
      'What is BNP Paribas Personal Finance?',
      'Who is Jean-Laurent Bonnafé?',
      'Who is Laurent David?']"
      ></CdqaUI>
    </div>
  </section>
</template>

<script>
export default {
  name: "Demo"
};
</script>

<style>
</style>