# 🐍 DEATHADDER — Marauder Web Console

A lightweight, browser-based **ESP32 Marauder Web Console** designed to provide a terminal-style interface for interacting with an ESP32 device directly from a modern web browser.

The project uses the **Web Serial API** to establish a USB serial connection with the ESP32, allowing users to send commands and monitor real-time device output through a responsive web interface.

> ⚠️ **For authorized security research, lab environments, and educational use only.**

---

## ✨ Features

* 🔌 **USB Serial Connection**

  * Connect directly to compatible ESP32 devices through the browser.
  * Uses the Web Serial API.

* 🖥️ **Real-Time Terminal**

  * Displays serial output from the connected ESP32.
  * Automatically scrolls as new data arrives.

* ⌨️ **Command Interface**

  * Enter commands directly through the web console.
  * Press `Enter` or click `SEND` to transmit commands.

* 🔗 **Connection Management**

  * Connect to an available serial device.
  * Disconnect safely when finished.
  * Displays the current connection status.

* 🧹 **Terminal Controls**

  * Clear the current terminal output.
  * View startup and connection messages.

* 💾 **Tactical Interface**

  * Dark terminal-inspired interface.
  * ESP32 device information panel.
  * Responsive layout for different screen sizes.

---

## 🖥️ Interface

The console contains four primary areas:

### 1. Connection Status

Displays whether the ESP32 is currently:

* `CONNECTED`
* `DISCONNECTED`

### 2. Control Toolbar

Provides quick access to:

* **CONNECT**
* **DISCONNECT**
* **CLEAR**
* **SAVE LOG**

### 3. Terminal

The terminal displays:

* ESP32 startup output
* Serial responses
* Commands sent from the browser
* Connection messages

### 4. Command Bar

Commands can be entered into the command input and sent directly to the ESP32.

---

## 🏗️ Project Structure

```text
marauder-web-console/
│
├── assets/
│   └── logo.png
│
├── js/
│   └── serial.js
│
├── index.html
├── script.js
├── style.css
└── README.md
```

### File Description

| File              | Purpose                          |
| ----------------- | -------------------------------- |
| `index.html`      | Main web interface               |
| `style.css`       | UI styling and responsive layout |
| `script.js`       | Terminal and command handling    |
| `js/serial.js`    | Web Serial communication         |
| `assets/logo.png` | Project logo                     |

---

## ⚙️ How It Works

The application runs entirely in the browser.

```text
┌─────────────────────┐
│      Web Browser    │
│                     │
│  DEATHADDER Console │
└──────────┬──────────┘
           │
           │ Web Serial API
           │ USB
           ▼
┌─────────────────────┐
│        ESP32        │
│                     │
│   Marauder Firmware │
└─────────────────────┘
```

When the user selects **CONNECT**, the browser requests access to an available serial device.

The application opens the connection using:

```text
Baud Rate: 115200
```

Incoming serial data is continuously read and displayed inside the terminal.

Commands entered through the command bar are transmitted to the ESP32 with a newline character.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/munavirck/marauder-web-console.git
```

### 2. Enter the Project Directory

```bash
cd marauder-web-console
```

### 3. Start a Local Web Server

For example, using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## 🌐 Browser Compatibility

The project relies on the **Web Serial API**, so use a browser that supports Web Serial.

A Chromium-based browser such as **Google Chrome** or **Microsoft Edge** is recommended.

If Web Serial is unavailable, the application displays a browser compatibility warning.

---

## 🔌 Connecting the ESP32

1. Connect the ESP32 to your computer using USB.
2. Open the Web Console.
3. Click **CONNECT**.
4. Select the ESP32 serial device.
5. The console establishes a connection at **115200 baud**.
6. Monitor the device output through the terminal.
7. Enter authorized commands through the command input.

---

## ⌨️ Command Usage

Commands can be entered using the command bar:

```text
Enter command...
```

Press:

```text
ENTER
```

or click:

```text
SEND
```

The command is transmitted to the connected ESP32.

Example:

```text
> <authorized-device-command>
```

The terminal then displays the corresponding serial output.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Browser API

* Web Serial API

### Hardware

* ESP32

### Communication

* USB Serial
* 115200 Baud

---

## 🔐 Security & Responsible Use

This project is intended for:

* Cybersecurity education
* Authorized security testing
* Personal laboratory environments
* ESP32 experimentation
* Wireless security research

Only use the console and connected security tooling against devices, networks, and systems that you own or have explicit authorization to test.

Do not use it to disrupt, intercept, impersonate, or gain unauthorized access to third-party systems.

---

## 🚧 Future Improvements

Potential improvements include:

* [ ] Serial port information display
* [ ] Automatic connection detection
* [ ] Command history
* [ ] Terminal search
* [ ] Downloadable log files
* [ ] Configurable baud rate
* [ ] Multiple terminal themes
* [ ] Command suggestions
* [ ] Keyboard shortcuts
* [ ] Connection error notifications
* [ ] Device information panel
* [ ] Web-based configuration
* [ ] Mobile-friendly controls
* [ ] Command history persistence

---

## 📸 Project Preview

Add a screenshot of the console here:

```markdown
![DEATHADDER Web Console](assets/screenshot.png)
```

---

## 👨‍💻 Author

**Munavirck**

GitHub:

https://github.com/munavirck

Project:

https://github.com/munavirck/marauder-web-console

---

## ⭐ Support

If you find this project useful for learning, experimentation, or authorized security research, consider giving the repository a ⭐ on GitHub.

---

## ⚠️ Disclaimer

This project is provided for **educational and authorized security research purposes**.

The author is not responsible for misuse, unauthorized access, disruption, or damage caused by using this software or connected security tools.

Always obtain appropriate authorization before testing systems or networks that you do not own.
