let port;
let reader;
let writer;

const connectBtn = document.getElementById("connectBtn");
const disconnectBtn = document.getElementById("disconnectBtn");

connectBtn.onclick = connectSerial;
disconnectBtn.onclick = disconnectSerial;

async function connectSerial() {

    if (!("serial" in navigator)) {

        alert("Your browser doesn't support Web Serial.");

        return;
    }

    try {

        port = await navigator.serial.requestPort();

        await port.open({
            baudRate: 115200
        });

        writer = port.writable.getWriter();

        document.getElementById("status").innerText = "Connected";
        document.getElementById("status").style.color = "#00ff88";

        printToTerminal("");
        printToTerminal("Connected to ESP32");
        printToTerminal("");

        readLoop();

    } catch (err) {

        console.error(err);

    }

}

async function readLoop() {

    while (port.readable) {

        reader = port.readable.getReader();

        const decoder = new TextDecoder();

        try {

            while (true) {

                const { value, done } = await reader.read();

                if (done)
                    break;

                if (value)
                    printToTerminal(decoder.decode(value));

            }

        } catch (err) {

            console.error(err);

        } finally {

            reader.releaseLock();

        }

    }

}

window.sendSerial = async function(command) {

    if (!writer)
        return;

    const encoder = new TextEncoder();

    await writer.write(
        encoder.encode(command + "\n")
    );

    printToTerminal("> " + command);

}

async function disconnectSerial() {

    try {

        if (reader) {

            await reader.cancel();
            reader.releaseLock();

        }

        if (writer) {

            writer.releaseLock();

        }

        if (port)
            await port.close();

        document.getElementById("status").innerText = "Disconnected";
        document.getElementById("status").style.color = "red";

        printToTerminal("");
        printToTerminal("Disconnected");

    } catch (err) {

        console.error(err);

    }

}