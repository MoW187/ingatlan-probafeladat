<template>
  <div class="col-12 col-lg-9">
    <PageTitle title="Lista" :count="ads.length" />
  </div>

  <div v-for="(item) in ads" :key="item.id">{{item}}</div>
</template>

<script>
import json from '../../listings.json';
import PageTitle from "@/components/PageTitle";

export default {
  name: "List",
  components: { PageTitle },
  data() {
    return {
      ads: json.ads
    }
  }
}
</script>

<style scoped>

</style>
