<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3 back-button-container">
        <button class="btn btn-lg back-button" @click="this.$router.go(-1)">
          <span class="icon-arrow"></span> <span class="d-none d-lg-block">Vissza</span>
        </button>
      </div>
      <div class="col-12 col-lg-9 d-none d-lg-block">
        <page-title title="Részletek" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <Images :image="ad.image" />
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <DetailsPanel
            :id="ad.id"
            :address="ad.address"
            :price="ad.price"
            :currency="ad.currency"
            :date="ad.date"
            :description="ad.description"
            :contact="ad.contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import json from '../../listings.json';
import Images from "@/components/Images";
import DetailsPanel from "@/components/DetailsPanel";

export default {
  name: "Details",
  components: { DetailsPanel, PageTitle, Images },
  data() {
    return {
      ads: json.ads,
      ad: {
        id: 0,
        address: '',
        price: 0,
        currency: '',
        date: '',
        description: '',
        image: '',
        contact: {
          email: '',
          parsedPhoneNumbers: []
        }
      }
    }
  },
  created() {
    const id = this.$route.params.id;
    this.ads.forEach(item => {
      if(parseInt(item.adId) === parseInt(id)) {
        this.ad.id = item.adId;
        this.ad.address = item.address;
        this.ad.price = item.price;
        this.ad.currency = item.currency;
        this.ad.date = item.uploadDate;
        this.ad.description = item.description;
        this.ad.image = item.image;
        this.ad.contact.email = item.contact.email;
        this.ad.contact.parsedPhoneNumbers = item.contact.parsedPhoneNumbers;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.back-button-container {
  position: relative;

  .back-button {
    display: flex;
    align-items: center;
    background: #EBECFA;
    padding: 18px 24px;

    position: fixed;
    top: 52px;
    left: 16px;

    @media(min-width: 992px) {
      position: relative;
      top: 0;
      left: 0;
    }

    .icon-arrow {
      display: block;
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.791 11.005H7.621l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41l-4.88-4.88h11.17c.55 0 1-.45 1-1s-.45-1-1-1Z' fill='%23323EC8'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}
</style>
