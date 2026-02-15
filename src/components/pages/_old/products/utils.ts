export const goToForm = () => {
  const element = document.getElementById("contact_form");
  //you can do it by jquery. no matter
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}