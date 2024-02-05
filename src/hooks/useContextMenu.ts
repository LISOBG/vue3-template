import { onMounted, onUnmounted, ref } from "vue";

export default function useContextMenu(containerRef: any) {
  const x = ref(0);
  const y = ref(0);
  const showMenu = ref(false);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showMenu.value = true;
    x.value = e.clientX;
    y.value = e.clientY;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };
  onMounted(() => {
    console.log(containerRef);
    const div = containerRef.value as HTMLElement;

    div.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("contextmenu", closeMenu, true);
    window.addEventListener("click", closeMenu, true);
  });
  onUnmounted(() => {
    const div = containerRef.value as HTMLElement;
    div && div.removeEventListener("contextmenu", handleContextMenu);
    window.removeEventListener("contextmenu", closeMenu);
    window.removeEventListener("click", closeMenu);
  });
  return {
    x,
    y,
    showMenu
  };
}
