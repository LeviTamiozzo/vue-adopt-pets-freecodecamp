<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.animal }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["dogs", "cats"])
  },
  mounted() {
    const animal = this[this.$route.params.animal][this.$route.params.id];
    this.animal = animal;
  }
};
</script>