<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="input"
</template>

<script>
export default {
  name: "my-input",
  props:{
    modelValue: {
      type: [String, Number],
      default: ''
}
  },
  /*methods:{
    updateInput(event){
      this.$emit("update:modelValue")
    }
  }*/
  emits: ['update:modelValue']  // ДОБАВИТЬ эту строку
}
</script>

<style scoped>
.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>