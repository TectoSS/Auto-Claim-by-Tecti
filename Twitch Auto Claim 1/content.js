function startAutoClaim() {

    function claimBonus() {
        const button = document.querySelector('button[aria-label="Получить бонус"], button[aria-label="Claim Bonus"]');
        if (button) {
            button.click();
            console.log("Bonus claimed!");
        }
    }

    setInterval(() => {
        browser.storage.local.get("enabled").then(result => {
            if (result.enabled) {
                claimBonus();
            }
        });
    }, 2000);

    const observer = new MutationObserver(() => {
        browser.storage.local.get("enabled").then(result => {
            if (result.enabled) {
                claimBonus();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

startAutoClaim();