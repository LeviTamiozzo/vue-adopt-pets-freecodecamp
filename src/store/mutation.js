export default {
  appendPet: (state, {
    animal,
    pet
  }) => {
    state[animal].push(pet)
  }
}
