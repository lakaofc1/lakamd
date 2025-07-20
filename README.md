<!-- 🌀 Typing SVG Title -->
<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=65&duration=4000&pause=1000&color=8E05C2&center=true&width=1000&height=100&lines=💥+LAKA-MD+V3.0.0+💥" alt="Typing SVG" />
  </a>
</p>

<!-- ✨ Decorative GIF & Poster -->
<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="130" />
  <img src="https://files.catbox.moe/onjpot.jpg" width="180" style="border-radius: 12px; box-shadow: 0 0 15px #B700FB;" />
  <img src="https://i.imgur.com/LyHic3i.gif" width="130" />
</p>

<!-- 👤 Developer Badge -->
<p align="center">
  <a href="https://github.com/lakaofc1">
    <img title="Developer" src="https://img.shields.io/badge/Author-lakaofc1-FF7604?style=flat-square&logo=github" />
  </a>
</p>

<!-- 📱 WhatsApp Channel -->
<p align="center">
  <a href="https://whatsapp.com/channel/0029Vb10Jv560eBfnX6Jaa3Y">
    <img src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp" />
  </a>
</p>

<!-- 👁 Visitor Counter -->
<p align="center">
  <img src="https://profile-counter.glitch.me/lakamd/count.svg" alt="Visitor Count" />
</p>

<!-- ℹ️ Info Badges -->
<p align="center">
  <a href="https://github.com/lakaofc1/lakamd">
    <img src="https://img.shields.io/badge/Language-English-darkpink?style=flat-square" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=lakaofc1&label=Profile+Views&style=flat-square&color=blue" />
</p>

<p align="center">
  <a href="https://github.com/lakaofc1/lakamd">
    <img src="https://img.shields.io/badge/Release-v3.0.0-8E05C2?style=for-the-badge&logo=github" />
  </a>
</p>

---

## 🛠️ How to Start

### 🔁 Fork the Repository

Click below to fork this repo to your GitHub:

<a href="https://github.com/lakaofc1/lakamd/fork">
  <img src="https://img.shields.io/badge/FORK-LAKA,MD-blue?style=for-the-badge&logo=github" />
</a>

---

### 🔑 Get Your Session ID

> Need session ID to run the bot. Use VPN if the site doesn't load.

<a href="https://lakaweb-6d1063b2401b.herokuapp.com/pair" target="_blank">
  <img alt="Get Pairing Code" src="https://img.shields.io/badge/Get%20Pairing%20Code-0076D2?style=for-the-badge&logo=opencv&logoColor=white" />
</a>

---

## ⚡ Deploy Instantly

### 🟣 Heroku  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/lakaofc1/lakamd)

### 🌀 Replit  
[![Replit](https://img.shields.io/badge/Deploy%20to%20Replit-100000?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github.com/lakaofc1/lakamd)

### ⚡ Railway  
[![Railway](https://img.shields.io/badge/Deploy%20to%20Railway-000000?style=for-the-badge&logo=railway)](https://railway.app/new/template/6KyYkk?referralCode=lakaofc1)

### ☁️ Koyeb  
[![Koyeb](https://img.shields.io/badge/Deploy%20to%20Koyeb-orange?style=for-the-badge&logo=koyeb&logoColor=white)](https://app.koyeb.com/deploy?type=git&repository=https://github.com/lakaofc1/lakamd)

### 🟢 Render  
[![Render](https://img.shields.io/badge/Deploy%20to%20Render-green?style=for-the-badge&logo=render&logoColor=white)](https://dashboard.render.com/deploy/srv-cjjm8m9k9qfdl8c2fnb0?repo=https://github.com/lakaofc1/lakamd)

---

## ✅ GitHub Actions CI

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm start