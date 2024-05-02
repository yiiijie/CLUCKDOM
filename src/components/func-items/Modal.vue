<script setup>
const props = defineProps({
  show: Boolean,
  buttonText: String
});
const emits = defineEmits(['close']);
const handleClose = () => {
  emits('close');
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal_mask">
      <div class="modal_container">
        <div class="modal_content">
          <slot></slot>
          <button class="close_btn" @click="handleClose">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
div.modal_mask {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}

div.modal_container {
  max-width: 550px;
  width: 32%;
  margin: auto;
  padding: 35px 0;
  border-radius: 30px;
  background-color: $normalColor;
  box-shadow: 0px 5px 25px rgb(77, 76, 76, 0.3);
  transition: 0.2s;

  @include large_tablets {
      width: 45%;
  }
  @include tablets {
      width: 60%;
  }
  @include large_phones {
      width: 80%;
  }

}

button.close_btn {
  @include paragraph;
  display: block;
  margin: auto;
  cursor: pointer;
  padding: 6px 50px;
  border-radius: 100px;
  background-color: $normalBtnColor;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal_container,
.modal-leave-to .modal_container {
  transform: scale(1.1);
}
</style>

