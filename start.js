const { spawn } = require("child_process");

function startBot() {
    const bot = spawn("node", ["index.js"], {
        stdio: "inherit",
        shell: true
    });

    bot.on("close", (code) => {
        console.log(`❌ Bot exited with code ${code}. Restarting...`);
        setTimeout(startBot, 3000); // restart after 3 seconds
    });

    bot.on("error", (err) => {
        console.error("⚠️ Failed to start bot:", err);
        setTimeout(startBot, 5000);
    });
}

startBot();
