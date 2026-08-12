const terminal = document.getElementById("terminal");

function print(text = "") {

    // Convert anything to string
    text = String(text);

    // Preserve line endings
    terminal.textContent += text;

    // Auto-scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
}

// Make available to serial.js
window.printToTerminal = print;

// Startup Banner
print("========================================\n");
print("      ESP32 Marauder Web Console\n");
print("========================================\n\n");
print("Waiting for connection...\n\n");

// Clear button
document.getElementById("clearBtn").addEventListener("click", () => {

    terminal.textContent = "";

});

// Send button
document.getElementById("sendBtn").addEventListener("click", sendCommand);

// Press Enter to send
document.getElementById("commandInput").addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        sendCommand();

    }

});

function sendCommand() {

    const input = document.getElementById("commandInput");

    const command = input.value.trim();

    if (command === "")
        return;

    // Echo the command in the console
    print("> " + command + "\n");

    // Send to ESP32 if connected
    if (window.sendSerial) {

        window.sendSerial(command);

    }

    input.value = "";

}