function toggleMenu() {
    const navbarMenu = document.getElementById("navbarMenu");
    const navbarToggle = document.getElementById("navbarToggle");
    if (navbarMenu.classList.contains("show")) {
        navbarMenu.classList.remove("show");
        navbarToggle.innerHTML = "☰"; 
        navbarToggle.classList.remove("active");
    } else {
        navbarMenu.classList.add("show");
        navbarToggle.innerHTML = "✖"; 
        navbarToggle.classList.add("active"); 
    }
}