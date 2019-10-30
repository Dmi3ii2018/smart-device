const headerButton = document.getElementById('header-button');
console.dir(headerButton);

if(headerButton && document.documentElement.clientWidth < 768) {
  headerButton.textContent = "бесплатная консультация";
};
