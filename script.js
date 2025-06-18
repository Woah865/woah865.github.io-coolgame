let playerHP = 100;
let enemyHP = 100;
const playerHPDisplay = document.getElementById("player-hp");
const enemyHPDisplay = document.getElementById("enemy-hp");
const message = document.getElementById("message");
const attackBtn = document.getElementById("attack-btn");

attackBtn.addEventListener("click", () => {
    if (playerHP <= 0 || enemyHP <= 0) return;

    // Player attacks
    const playerDmg = Math.floor(Math.random() * 20) + 5;
    enemyHP = Math.max(0, enemyHP - playerDmg);
    enemyHPDisplay.textContent = `HP: ${enemyHP}`;
    message.textContent = `Pikachu uses Thunderbolt! Deals ${playerDmg} damage!`;

    if (enemyHP === 0) {
        message.textContent += " 🔥 Charmander fainted! You win!";
        attackBtn.disabled = true;
        return;
    }

    // Enemy attacks after delay
    setTimeout(() => {
        const enemyDmg = Math.floor(Math.random() * 15) + 5;
        playerHP = Math.max(0, playerHP - enemyDmg);
        playerHPDisplay.textContent = `HP: ${playerHP}`;
        message.textContent += `\nCharmander attacks back! Deals ${enemyDmg} damage!`;

        if (playerHP === 0) {
            message.textContent += " ⚰️ Pikachu fainted! You lose!";
            attackBtn.disabled = true;
        }
    }, 800);
});
