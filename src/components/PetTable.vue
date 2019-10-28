<template>
  <div>
    <h1>{{ animal }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${animal}/${data.index}`">{{ data.value}}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    animal: String,
    pets: Array
  },
  data() {
    return {};
  }
};
</script>