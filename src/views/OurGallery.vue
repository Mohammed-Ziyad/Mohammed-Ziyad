<template>
  <!-- Gallery -->
  <div class="galleries" id="galleries">
    <div><h1 class="">Gallery</h1></div>
    <div class="galleries-img">
      <!--  -->
      <div
        class="card-side rollIn"
        v-for="(gallery, index) in galleries"
        :key="index"
      >
        <div class="card-side-inner">
          <div class="card-side-front images-box">
            <img class="" :src="gallery.img" alt="" />
            <!-- <p>Front Side</p> -->
          </div>
          <div class="card-side-back">
            <p>
              {{ gallery.des }}
            </p>
          </div>
        </div>
        <div class="contents">
          <button class="btn-gallery" @click="navigateToLink(gallery.link)">
            Visit
            <span></span>
          </button>
        </div>
      </div>
      <!--  -->

      <!-- <img class=" " src="../assets/img/ang3.png" alt=""> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      galleries: [
        {
          title: "My Profile",
          des: "My profile: I worked on it using the Vue JS framework. It contains an introduction about me and displays my skills and experiences in the web.",
          img: "images/Gallery/p1.png",
          link: "images/Gallery/p1.png",
        },
        {
          title: "My Profile",
          des: "A special project for web developers created using Vue js",
          img: "images/Gallery/p3.png",
          link: "https://mohammed-ziyad.github.io/Web-designer/#/",
        },
        {
          title: "E-Commerce",
          des: "E-Commerce: I created it using the  Angular framework, which is an online store that works smoothly to display different products",
          img: "images/Gallery/p4.png",
          link: "https://github.com/Mohammed-Ziyad/For-You",
        },
        {
          title: "The Bequest Project",
          des: "The Bequest Project: One of the projects that I did while working at Smart Mind Company, and my task was to design interfaces using the Angular framework and display data coming from the API.",
          img: "images/Gallery/p6.png",
          link: "https://wasia-app.web.app/stakeholders/beneficiaries",
        },
        {
          title: "The Bequest Project",
          des: "The Bequest Project: One of the projects that I did while working at Smart Mind Company, and my task was to design interfaces using the Angular framework and display data coming from the API.",
          img: "images/Gallery/p5.png",
          link: "https://wasia-app.web.app/document-managment/file-manager",
        },
        {
          title: "My Profile",
          des: "A website without a framework written using JavaScript that works smoothly and is responsive on all screens and browsers",
          img: "images/Gallery/p9.png",
          link: "",
        },
      ],
    };
  },
  methods: {
    navigateToLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style scoped lang="scss">
.galleries {
  /* display: flex; */
  min-height: 80vh;
  /* background-image: url('../img/home-img.jpg'); */
  background-size: cover;
  text-align: center;
  background-position: fixed;

  padding: 0 80px;
  inset: 0;
  h1 {
    color: #fff;
    border-bottom: solid crimson;
    display: inline-block;
    margin: 30px;
  }
  .galleries-img {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    //   flex-wrap: wrap;
    //   width: 100%;
    //  height: 5em;
    img {
      //   border-radius: 50%;
      border: solid #fff;
      border-radius: 10px;
      height: 11rem;
      width: 22rem;
      /* margin-right: 20px; */
      /* margin-bottom: 20px; */
      /* margin-top: 12em; */
      //   width: 16em;
      // height: 16em;
      object-fit: cover;
    }
  }
}
.card-side {
  // width: 7em;
  min-height: 30vh;
  overflow: hidden;
  text-align: center;
  //   display: flex;
  align-items: center;
  margin-bottom: 33px;
}
.card-side-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.card-side:hover .card-side-inner {
  transform: rotateY(180deg);
}
.card-side-front,
.card-side-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-side-front {
  /* background-color: #6A2C70; */
  color: #fff;
  //   display: grid;
  align-items: center;
  text-align: center;
  /* border: 10px solid #6A2C70; */
  /* border-radius: 10px; */
  justify-content: center;
  /* font-size: 20px; */
}

.card-side-back {
  color: #fff;
  //   display: flex;
  align-items: center;
  /* border: 10px solid #F08A5D; */
  /* border-radius: 10px; */
  justify-content: center;
  font-size: 15px;
  transform: rotateY(180deg);
}
.images-box {
  //   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 10px;
  img {
    max-width: 100%;
    // padding: 1px;
    //   background-color: crimson;
    // border: 1px solid crimson;
    cursor: pointer;
  }
}
.contents {
  display: flex;
  justify-content: center;
  margin-top: 12rem;
  .btn-gallery {
    border: none;
    display: block;
    position: absolute;
    padding: 0.3em 2.4em;
    font-size: 14px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    //   color: royalblue;
    z-index: 3;
    font-family: inherit;
    font-weight: 500;
    border-radius: 10px;
  }

  .btn-gallery span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    //   background: transparent;
    z-index: -1;
    border: 2px solid #fff;
    border-radius: 10px;
  }

  .btn-gallery span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
    border-radius: 10px;
  }

  .btn-gallery:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: royalblue;
    border-radius: 10px;
  }

  .btn-gallery:hover {
    color: white;
    border-radius: 10px;
  }

  button:active span::before {
    background: #2751cd;
    border-radius: 10px;
  }
}
</style>
