<template>
  <div class="drawer">
    <v-navigation-drawer temporary v-model="drawer" location="right">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique id
        soluta impedit voluptates quasi! Libero facere atque quasi quaerat
        labore, iusto reprehenderit ducimus deserunt suscipit eos amet,
        dignissimos voluptas non.
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
