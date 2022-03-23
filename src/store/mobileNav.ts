import { reactive } from "vue";

export const mobileNav = reactive({ isOpen: false });

export const openMobileNav = () => (mobileNav.isOpen = true);

export const closeMobileNav = () => (mobileNav.isOpen = false);
