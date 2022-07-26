<template>
  <div class="section d-flex justify-content-between">
    <div class="panel panel-1">
      <h2>{{address}}</h2>
      <span class="price">{{new Intl.NumberFormat('hu-HU').format(price)}} {{currency}}</span>
      <span class="date">{{date}}</span>
    </div>
    <div class="favourite-container">
      <FavouriteButton :id="id" />
    </div>
    <div class="description">{{description}}</div>
    <div class="contact-container">
      <button class="btn btn-primary btn-lg" data-bs-target="#contactModal" data-bs-toggle="modal"> Bootstrap modal </button>
    </div>
  </div>

  <div class="modal" id="contactModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Kapcsolat</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul>
            <li><a :href="'mailto:'+contact.email">{{contact.email}}</a></li>
            <li v-for="(phone, index) in contact.parsedPhoneNumbers" :key="index"><a :href="'tel:'+phone">{{phone}}</a></li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Bezár</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteButton from "@/components/FavouriteButton";

export default {
  name: "DetailsPanel",
  components: { FavouriteButton },
  props: ['id', 'address', 'price', 'currency', 'date', 'description', 'contact'],
  data() {
    return {
      showContact: false
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding: 20px;
  background: #fff;
  border-radius: 16px;
  flex-wrap: wrap;

  .panel-1 {
    h2 {
      margin-bottom: 4px !important;

      @media(min-width: 992px) {
        margin-bottom: 16px !important;
      }
    }

    span {
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;

      &.price {
        margin-bottom: 12px !important;

        @media(min-width: 992px) {
          margin-bottom: 62px !important;
        }
      }
    }

    .date {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 19px !important;

      @media(min-width: 992px) {
        margin-bottom: 41px !important;
      }

      &::before {
        width: 18px;
        height: 18px;
        display: block;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.25 3h-.75v-.75a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75V3H6v-.75a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75V3h-.75c-.833 0-1.493.675-1.493 1.5L2.25 15a1.5 1.5 0 0 0 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5V4.5c0-.825-.675-1.5-1.5-1.5Zm0 11.25c0 .412-.338.75-.75.75h-9a.752.752 0 0 1-.75-.75v-7.5h10.5v7.5Zm-7.5-4.5v-1.5h-1.5v1.5h1.5Zm1.5-1.5h1.5v1.5h-1.5v-1.5Zm4.5 1.5v-1.5h-1.5v1.5h1.5Z' fill='%23191919'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
  }

  .description {
    margin-bottom: 40px;
    flex-basis: 100%;
    width: 100%;
    min-height: 146px;
    background: #FFFFFF;
    padding: 16px 0 0 16px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .contact-container {
    width: 100%;
    display: flex;
    justify-content: end;
  }
}

.modal {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
