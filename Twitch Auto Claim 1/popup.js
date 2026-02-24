const toggle = document.getElementById("toggle");
const donate = document.getElementById("donate");

// Загружаем состояние
browser.storage.local.get("enabled").then(result => {
    toggle.checked = result.enabled;
});

// Переключение
toggle.addEventListener("change", () => {
    browser.storage.local.set({ enabled: toggle.checked });
});

// Донат
donate.addEventListener("click", () => {
    browser.tabs.create({
        url: "https://www.donationalerts.com/r/tecto_ss"
    });
});