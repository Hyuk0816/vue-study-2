<script setup>
  const title = "hello, <br> I'm Kim Jae Hyuk"
</script>

<template>
  <section class="title">
    <div class="container">
      <div class="detail row border">
        <figure class="col-md-6">
          <img src="../assets/images/title.png" alt="title">
        </figure>
        <div class="text col-md-6 border">
          <h2 v-html="title"></h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
figure {
  img{
    width: 100%;
  }
}
</style>