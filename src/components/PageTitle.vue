<template>
  <div class="section page-title">
    <h2>{{title}}</h2>
    <span v-if="count">{{count}} db</span>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ['title', 'count']
}
</script>

<style lang="scss" scoped>
  .page-title {
    background: #FFFFFF;
    padding: 14px 30px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }

    span {
      color: #666666;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
    }
  }
</style>
