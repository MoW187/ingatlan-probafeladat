<template>
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item" :class="{ active: currentRouteName === 'List' }">
      <router-link class="list" to="/">Lista</router-link>
    </li>
    <li class="nav-item" :class="{ active: currentRouteName === 'Favourites' }">
      <router-link class="favourites" to="/kedvencek">Kedvencek</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavMenu",
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-nav {
  padding: 20px 0;

  @media(min-width: 992px) {
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 20px rgba(50, 62, 200, 0.1);
    border-radius: 16px;
  }

  .nav-item {
    padding: 20px 0;

    &.active {
      @media(min-width: 992px) {
        background: #EBECFA;
      }
    }

    @media(min-width: 992px) {
      padding: 17px 23px;
      border-radius: 16px;
    }

    a {
      text-decoration: none;
      font-weight: 700;

      @media(min-width: 992px) {
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        gap: 17px;

        &::before {
          width: 24px;
          height: 24px;
          display: block;
          content: '';
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        &.list {
          &::before {
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1ZM4 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1ZM4 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1ZM8 13h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1ZM8 17h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1ZM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1Z' fill='%23323EC8'/%3E%3C/svg%3E");
          }
        }

        &.favourites {
          &::before {
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m12 17.52 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.88l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5Z' fill='%23323EC8'/%3E%3C/svg%3E");
          }
        }
      }
    }
  }
}
</style>
