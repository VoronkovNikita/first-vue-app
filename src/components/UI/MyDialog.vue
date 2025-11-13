<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:show'],
  methods:{
    hideDialog() {
      this.$emit('update:show', false);
    }
    }

}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom : 0;
  right : 0;
  left : 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.dialog__content{

  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 100px;
  max-width: 500px;
  width: 90%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20%;

}
</style>