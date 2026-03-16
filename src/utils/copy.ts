export const copyText = (id: string) => {
  const copyTextEl = document.getElementById(id);

  if (copyTextEl) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Select the text field
    (copyTextEl as any).select();
    (copyTextEl as any).setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText((copyTextEl as any).value);
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }
};
