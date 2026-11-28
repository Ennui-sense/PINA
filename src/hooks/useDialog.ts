import { useEffect, useRef } from "react";

// Keep the native dialog focus trap and Escape handling, but choose the initial
// focus and distinguish keyboard navigation from a pointer-opened dialog.
export const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const pointerOpenedRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    let clearReturnedFocus = () => {};
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") pointerOpenedRef.current = false;
    };
    const handleClose = () => {
      clearReturnedFocus();
      const target = returnFocusRef.current;
      if (!target?.isConnected) return;

      if (pointerOpenedRef.current) {
        target.dataset.dialogReturnFocus = "";
        const handleNavigation = (event: KeyboardEvent) => {
          if (!["Escape", "Shift", "Control", "Alt", "Meta"].includes(event.key)) {
            clearReturnedFocus();
          }
        };
        clearReturnedFocus = () => {
          delete target.dataset.dialogReturnFocus;
          target.removeEventListener("blur", clearReturnedFocus);
          document.removeEventListener("keydown", handleNavigation, true);
        };
        target.addEventListener("blur", clearReturnedFocus);
        document.addEventListener("keydown", handleNavigation, true);
      }

      target.focus({ preventScroll: true });
    };

    dialog.addEventListener("keydown", handleKeyDown);
    dialog.addEventListener("close", handleClose);
    return () => {
      clearReturnedFocus();
      dialog.removeEventListener("keydown", handleKeyDown);
      dialog.removeEventListener("close", handleClose);
    };
  }, []);

  const openDialog = (returnFocusTo: HTMLElement | null, fromPointer = false) => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    returnFocusRef.current = returnFocusTo;
    pointerOpenedRef.current = fromPointer;
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-dialog-initial-focus]")
      ?.focus({ preventScroll: true });
  };

  const closeDialog = () => dialogRef.current?.close();

  return { dialogRef, openDialog, closeDialog };
};
