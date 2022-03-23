import { reactive, ref } from "vue";

export const lightBox = reactive({ isOpen: false });
export const imageNumber = ref(1);

export const openLightBox = (number: number) => {
  imageNumber.value = number;
  lightBox.isOpen = true;
};

export const closeLightBox = () => (lightBox.isOpen = false);
