import emailjs from "@emailjs/browser";

export const sendContactEmail = async (form: HTMLFormElement) => {
  await emailjs.sendForm(
    "service_w6vf4bd",
    "template_hql9itk",
    form,
    "W7v0x-hL22zla-2r0"
  );

  await emailjs.sendForm(
    "service_w6vf4bd",
    "template_7xd0odm",
    form,
    "W7v0x-hL22zla-2r0"
  );
};