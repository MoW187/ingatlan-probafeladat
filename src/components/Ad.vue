<template>
  <div class="d-flex flex-column flex-lg-row ad">
    <div class="panel panel-1" :style="{ backgroundImage: `url('${item.image}')` }" />
    <div class="panel panel-2 d-flex">
      <div class="address-bar">
        <h3><router-link class="link" :to="'/reszletek/'+item.adId">{{item.address}}</router-link></h3>
        <span>{{new Intl.NumberFormat('hu-HU').format(item.price)}} {{item.currency}}</span>
      </div>
      <div class="favourite-container">
        <FavouriteButton :id="item.adId" />
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteButton from "@/components/FavouriteButton";
export default {
  name: "Ad",
  components: {FavouriteButton},
  props: ['item']
}

/*
adId, address, price, image, currency, uploadDate, description, status, contact(email, parsedPhoneNumbers[])
 */
</script>

<style lang="scss" scoped>
.ad {
  gap: 20px;

  .panel {
    &.panel-1 {
      width: 100%;
      min-height: 140px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      @media(min-width: 992px) {
        width: 30%;
        height: 100%;
      }
    }

    &.panel-2 {
      width: 100%;
      padding: 20px;

      h3 {
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 16px !important;
      }

      span {
        font-weight: 500;
        font-size: 24px;
        line-height: 16px;
      }
    }

    .address-bar {
      width: 90%;

      .link {
        text-decoration: none;
        color: #191919;
      }
    }

    .favourite-container {
      width: 10%;
    }
  }
}
</style>
