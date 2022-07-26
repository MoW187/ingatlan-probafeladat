<template>
  <div class="d-flex flex-column flex-lg-row ad">
    <div class="panel panel-1" :style="{ backgroundImage: `url('${item.image}')` }" />
    <div class="panel panel-2 d-flex">
      <div class="address-bar">
        <h3>{{item.address}}</h3>
        <span>{{new Intl.NumberFormat('hu-HU').format(item.price)}} {{item.currency}}</span>
      </div>
      <div class="favourite-container">
        <button class="favourite-button" :class="{active: $store.state.favourites.includes(item.adId)}" @click="addFavourite"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ad",
  props: ['item'],
  methods: {
    addFavourite() {
      this.$store.commit('addFavourites', this.item.adId);
      console.log(this.$store.state.favourites);
    }
  }
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
    }

    .favourite-container {
      width: 10%;

      .favourite-button {
        width: 40px;
        height: 40px;
        background: #FFFFFF;
        border: 0;
        box-shadow: 0 0 10px rgba(50, 62, 200, 0.2);
        border-radius: 8px;
        padding: 0;

        &::after {
          width: 100%;
          height: 100%;
          display: block;
          content: '';
          background-image: url("data:image/svg+xml,%3Csvg width='32' height='33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m9.206 26.94-.002-.002a.255.255 0 0 1-.11-.184c-.02-.117-.015-.334.1-.68v-.001l2.138-6.33.237-.701-.601-.432-5.449-3.91-.005-.003c-.299-.212-.432-.385-.484-.49-.037-.075-.038-.119-.014-.188l.002-.004a.255.255 0 0 1 .14-.162c.102-.054.308-.116.673-.112h.004l6.67.053.737.005.224-.701L15.5 6.725c.12-.366.246-.551.33-.635.061-.06.102-.074.173-.074.073 0 .117.016.178.076.084.082.21.265.322.625l.002.005 2.034 6.376.224.701.736-.005 6.671-.053h.004c.365-.004.57.058.67.112.076.04.113.083.142.168.023.067.022.113-.016.19-.05.104-.183.276-.48.486l-.004.003-5.449 3.91-.601.432.237.7 2.138 6.33v.003c.115.345.12.562.1.679a.255.255 0 0 1-.11.184l-.002.002c-.056.042-.09.052-.168.04-.116-.018-.327-.095-.643-.324l-.002-.002-5.391-3.959-.592-.434-.592.434-5.391 3.96-.002.001c-.316.229-.526.306-.643.324-.077.012-.112.002-.168-.04Z' stroke='%23B2B2B2' stroke-width='2'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        &.active {
          &::after {
            background-image: url("data:image/svg+xml,%3Csvg width='32' height='33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.604 27.738c.558.421 1.233.284 2.002-.274l5.396-3.963 5.396 3.963c.77.558 1.444.695 2.002.274.548-.411.654-1.096.359-1.982l-2.14-6.333 5.449-3.91c.759-.538 1.085-1.16.864-1.813-.221-.653-.833-.97-1.77-.959l-6.672.053-2.034-6.376c-.284-.907-.769-1.402-1.454-1.402-.685 0-1.16.495-1.454 1.402l-2.034 6.376-6.671-.053c-.938-.01-1.55.306-1.77.949-.233.664.105 1.285.863 1.823l5.449 3.91-2.14 6.334c-.295.885-.19 1.57.359 1.98Z' fill='%23FFB300'/%3E%3C/svg%3E");
          }
        }
      }
    }
  }
}
</style>
