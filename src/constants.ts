export const PHONE_MASK_OPTIONS = {
  mask: "+7 (___) ___-__-__",
  replacement: { _: /\d/ },
  showMask: false,
};

export const URL_API = `https://api.telegram.org/bot${import.meta.env.VITE_TOKEN}/sendMessage`;