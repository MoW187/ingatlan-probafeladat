<template>
  <div class="col-lg-12">
    <div class="d-block d-lg-grid columns">
      <div class="column1"><img class="image1" :src="image" /></div>
      <div class="d-none d-lg-block column2"><img class="image2" :src="image" /></div>
      <div class="d-none d-lg-flex column3">
        <img class="image3" :src="image" />
        <img class="image4" :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: ['image']
}
</script>

<style lang="scss" scoped>
.columns {
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;

  .column1, .column2 {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .column3 {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      width: 100%;
      max-height: calc(50% - 10px);
      object-fit: cover;
    }
  }
}
</style>
