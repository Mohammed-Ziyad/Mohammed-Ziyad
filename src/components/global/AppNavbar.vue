<template>
  <!-- <v-app-bar>

</v-app-bar> -->
  <div class="nav-b w-100 fixed-top">
    <nav
      class="navbar navbar-expand-lg my-nav border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../../assets/dicon-twilight-blue-813x1024.png"
            alt="Bootstrap"
            width="30"
            height="24"
          />
        </a>
        <!-- <a class="navbar-brand" href="#"></a> -->
        <router-link class="navbar-brand" to="/#">Mohammed Ziyad</router-link>
        <!-- <img src="/assets/mylogo.jpg" alt=""> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-end" id="navbarNav">
          <ul class="navbar-nav wow bounceInDown">
            <li class="nav-item">
              <router-link class="nav-link active" to="/about-my"
                >About My</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link active" to="/services"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/protofolio"
                >Protofolio</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/expertise"
                >Expertise</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="contact">Contact</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
