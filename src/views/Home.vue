<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    {{ animalsCount }}
    {{ getAllCats.length }}
    <button
      class="btn btn-primary"
      @click="togglePetForm"
    >Add New Pet</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Animal:" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.animal" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          v-model="formData.age"
          placeholder="Enter age"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        animal: null
      }
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats"])
  },
  components: {},
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { animal, age, name } = this.formData;
      const payload = {
        animal,
        pet: {
          name,
          age
        }
      };
      this.addPet(payload);

      this.formData = {
        name: "",
        age: 0,
        animal: null
      };
    }
  }
};
</script>

<style lang="stylus"></style>