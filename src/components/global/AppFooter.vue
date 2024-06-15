<template>
  <!-- Start Footer -->
  <footer>
    <h3>This Template Created By Mohammed Ziyad</h3>
    <div class="icons">
      <a
        href="https://www.facebook.com/"
        title="Facebook"
        target="_blank"
        class="facebook"
      >
        <i>
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </i>
      </a>

      <a
        href="https://github.com/Mohammed-Ziyad"
        title="Github"
        target="_blank"
        class="github"
      >
        <i>
          <font-awesome-icon icon="fa-brands fa-github" />
        </i>
      </a>

      <a
        href="https://www.linkedin.com/in/mohammedziyad8990"
        title="Linkedin"
        target="_blank"
        class="linkedin"
      >
        <i>
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </i>
      </a>
    </div>
  </footer>
  <!-- End Footer -->
  <section style="height: 10em"></section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
/* Start Footer */

/* Start Footer */

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background-color: hsl(0, 0%, 20%);
  font-family: "Open Sans", sans-serif;
  margin-top:3rem ;
}

footer h3 {
  margin: 10px 0 0;
  color: white;
}

footer .icons {
  display: flex;
  margin: 15px auto 30px;
}

footer a {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;
  text-decoration: none;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 50%;
  display: block;
  width: 0;
  height: 0;
  border-radius: 100%;
  transition: 0.3s;
}

footer a:hover::after {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  margin-left: calc(-50% - 1px);
}

footer a.facebook {
  color: #3b5999;
}

footer a.facebook::after {
  background: #3b5999;
}

footer a.github {
  color: #6e5494;
}

footer a.github::after {
  background: #6e5494;
}

footer a.linkedin {
  color: #0077b5;
}

footer a.linkedin::after {
  background: #0077b5;
}

footer a:hover {
  color: #fff;
}

footer i {
  font-size: 25px;
  position: relative;
  z-index: 1;
  transition: 0.3s;
}

/* End Footer */

/* End Footer */
</style>
