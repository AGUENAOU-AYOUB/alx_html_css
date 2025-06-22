let hideMenu = function (icon) {
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("fa-bars");
    document.querySelector('.hideonmobile').classList.toggle('mobile-open');
}
