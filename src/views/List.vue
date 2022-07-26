<template>
  <div class="col-3 d-none d-lg-block section">
    <NavMenu />
  </div>

  <div class="col-12 col-lg-9">
    <PageTitle title="Lista" :count="ads.length" />

    <Ad
        v-for="(item) in ads" :key="item.id"
        :item="item"
        class="ad"
    />
  </div>
</template>

<script>
import json from '../../listings.json';
import PageTitle from "@/components/PageTitle";
import NavMenu from "@/components/NavMenu";
import Ad from "@/components/Ad";

export default {
  name: "List",
  components: { NavMenu, PageTitle, Ad },
  data() {
    return {
      ads: json.ads
    }
  }
}
</script>

<style lang="scss" scoped>
.ad {
  margin-bottom: 20px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  height: auto;

  @media(min-width: 992px) {
    height: 180px;
  }
}
</style>
