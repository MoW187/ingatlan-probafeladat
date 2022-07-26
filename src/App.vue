<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html, body {
  font-family: 'Red Hat Display', sans-serif;
}

#app {
  background: #FAFBFF;
  color: #191919;
  font-family: 'Red Hat Display', sans-serif;

  .section {
    margin: 10px 0;
  }

  h1, h2, h3 {
    margin-bottom: 0;
  }
}
</style>
