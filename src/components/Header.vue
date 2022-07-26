<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container container-fluid d-block d-lg-none">
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      />
      <div class="collapse navbar-collapse" id="navContent">
        <NavMenu />
      </div>
    </div>
  </nav>
</template>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "Header",
  components: { NavMenu }
}
</script>

<style lang="scss" scoped>
nav {
  background: #FFFFFF;
  padding: 23px 25px;

  .navbar-toggler {
    display: block;
    width: 30px;
    height: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 2.5c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1H1Zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Z' fill='%23323EC8'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

</style>
