<template>
  <div class="aboutMy">
    <div class="container-flui">
      <div class="rwo">
        <div class="des-home mt-15" dir="ltr">
          <h1 class="overview font-weight-bold">Front-End Web devloper</h1>

          <div>
            <p
              class="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              I am a front-end web developer with extensive experience in modern
              web technologies,
            </p>
            <p
              class="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              specializing in two frameworks, Angular and Vue js.
            </p>
            <p
              class="wow fadeInUp"
              data-wow-duration="2.5s"
              data-wow-delay="0.5s"
            >
              Have the ability to use programming languages such as JavaScript,
              Typescript, CSS, and HTML.
            </p>
            <p
              class="wow fadeInUp"
              data-wow-duration="2.5s"
              data-wow-delay="0.5s"
            >
              In addition, my familiarity with popular design tools such as
              Bootstrap and Tailwind CSS helps me provide an outstanding user
              experience.
            </p>
          </div>

          <!-- <section class="flex justify-center items-center"></section> -->

          <!-- <a href="">Register with us </a> -->
        </div>
        <div class="text-center w-100">
          <div class="example example--2">
            <span class="scroll-icon">
              <span class="scroll-icon__dot"></span>
            </span>
          </div>
        </div>
        <div class="skills" id="skills">
          <div><h1 class="">Skills</h1></div>
          <div class="skills-img">
            <!--  -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/ang.webp" alt="" />
                  <!-- <p>Front Side</p> -->
                </div>
                <div class="card-side-back">
                  <p>Angular</p>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/vue.webp" alt="" />
                </div>
                <div class="card-side-back">
                  <p>Vue js</p>
                </div>
              </div>
            </div>
            <!--  JavaScript-->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/js.webp" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <!-- TypeScript -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img
                    class=""
                    src="images/img-skills/typscript.webp"
                    alt="jh"
                  />
                </div>
                <div class="card-side-back">
                  <p>TypeScript</p>
                </div>
              </div>
            </div>

            <!-- CSS  -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/css.png" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>CSS</p>
                </div>
              </div>
            </div>

            <!-- HTML -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/html5.webp" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>HTML</p>
                </div>
              </div>
            </div>

            <!-- bootstrap -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img
                    class=""
                    src="images/img-skills/bootstrap-logo.webp"
                    alt="jh"
                  />
                </div>
                <div class="card-side-back">
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>

            <!-- Taiwilnd -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/tw.webp" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>Taiwilnd</p>
                </div>
              </div>
            </div>

            <!-- Github  -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/github1.jpeg" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>Github</p>
                </div>
              </div>
            </div>

            <!-- Git -->
            <div class="card-side wow rollIn">
              <div class="card-side-inner">
                <div class="card-side-front">
                  <img class="" src="images/img-skills/git2.webp" alt="jh" />
                </div>
                <div class="card-side-back">
                  <p>Git</p>
                </div>
              </div>
            </div>
            <!-- <img class=" " src="images/ang3.png" alt=""> -->
          </div>
        </div>
        <OurGallery />
      </div>
    </div>
  </div>
</template>
<script>
import OurGallery from "./OurGallery.vue";
export default {
  components: {
    OurGallery,
  },
};
</script>
<style scoped>
.skills {
  /* display: flex; */
  min-height: 80vh;
  /* background-image: url('../img/home-img.jpg'); */
  background-size: cover;
  text-align: center;
  background-position: fixed;

  padding: 0 80px;
  inset: 0;
}

.skills h1 {
  color: #fff;
  border-bottom: solid crimson;
  display: inline-block;
  margin: 30px;
}

.skills .skills-img {
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  flex-wrap: wrap;
  width: 100%;
  /* height: 6em; */
}
.card-side {
  width: 7em;
  min-height: 130px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;

  /* margin-left: 100px; */
}
.skills .skills-img img {
  border-radius: 50%;
  border: solid #fff;
  /* margin-right: 20px; */
  /* margin-bottom: 20px; */
  /* margin-top: 12em; */
  width: 6em;
  height: 6em;
  object-fit: cover;
}

.aboutMy {
  color: #fff;
}
.aboutMy h1 {
  color: #fff;
  /* font-weight: bold; */
  /* font-size:5rem; */
  border-bottom: solid crimson;
  display: inline-block;
}
.aboutMy .des-home {
}

.card-side-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  /* background-color:#6A2C70; */
}

.card-side:hover .card-side-inner {
  transform: rotateY(180deg);
}

.card-side-front,
.card-side-back {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color:#6A2C70; */
  backface-visibility: hidden;
}

.card-side-front {
  /* background-color: #6A2C70; */
  color: #fff;
  display: flex;
  align-items: center;
  /* border: 10px solid #6A2C70; */
  /* border-radius: 10px; */
  justify-content: center;
  /* font-size: 20px; */
}

.card-side-back {
  color: #fff;
  display: flex;
  align-items: center;
  /* border: 10px solid #F08A5D; */
  /* border-radius: 10px; */
  justify-content: center;
  font-size: 20px;
  transform: rotateY(180deg);
}

/* // Example 2 */
@keyframes scroll_2 {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  75% {
    transform: translateY(0.75em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

.scroll-icon__dot {
  display: block;
  position: absolute;
  left: 50%;
  background: #fff;
  height: 0.5em;
  width: 0.5em;
  top: 0.6em;
  margin-left: -0.25em;
  border-radius: 50%;
  transform-origin: top center;
  backface-visibility: hidden;
  animation: scroll_2 1.5s ease-out infinite;
}

/* // General icon style */
.scroll-icon {
  display: block;
  position: relative;
  height: 3em;
  width: 1.5em;
  border: 0.1em solid #fff;
  border-radius: 1em;
}

/* // Page style */

.page-wrap {
  display: flex;
  height: 100vh;
}

.example {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
