const userLanguage = navigator.language || navigator.userLanguage;
if (userLanguage.startsWith("pl")) {
    window.location.href = "./pl/index.html";
} else {
    window.location.href = "./en/index.html";
}