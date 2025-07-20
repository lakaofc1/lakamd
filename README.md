<!-- Typing SVG Header -->
<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=70&pause=1000&color=B700FB&center=true&width=1000&height=120&lines=LAKA-MD-V3.0.0" alt="Typing SVG" />
  </a>
</p>

<!-- Decorative Images -->
<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="150" />
  <img src="https://files.catbox.moe/onjpot.jpg" width="180" style="border-radius: 10px;" />
  <img src="https://i.imgur.com/LyHic3i.gif" width="150" />
</p>

<!-- Author Badge -->
<p align="center">
  <a href="https://github.com/mrlaka">
    <img title="Developer" src="https://img.shields.io/badge/Author-Mr%20Laka-FF7604?style=flat-square&logo=github" />
  </a>
</p>

<!-- WhatsApp Channel Badge -->
<div align="center">
  <a href="https://whatsapp.com/channel/0029Vb10Jv560eBfnX6Jaa3Y">
    <img src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp" />
  </a>
</div>

<!-- Visitor Count -->
<p align="center">
  <img src="https://profile-counter.glitch.me/lakaofc1/count.svg" alt="Visitor Count" />
</p>

<!-- Repo Info -->
<p align="center">
  <a href="https://github.com/mrlaka/Laka-Md-v3">
    <img src="https://img.shields.io/static/v1?label=Language&message=English&color=darkpink&style=flat-square" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=mrlaka&label=VIEWS&style=flat-square&color=blue" />
</p>

<p align="center">
  <a href="https://github.com/mrlaka/Laka-Md-v3">
    <img src="https://img.shields.io/badge/Release-v3.0.0-cyan?style=for-the-badge" />
  </a>
</p>

<hr>

## 🚀 1. Fork This Repository

Start by forking this repo to your GitHub account:

<a href="https://github.com/mrlaka/Laka-Md-v3/fork">
  <img src="https://img.shields.io/badge/FORK-LAKA,MD-blue?style=for-the-badge&logo=github" />
</a>

---

## 🔑 2. Get Session ID

> You'll need a session ID to run LAKA-MD. If the page doesn’t load, use a VPN.

<a href="https://lakaweb-6d1063b2401b.herokuapp.com/pair" target="_blank">
  <img alt="Pair Code" src="https://img.shields.io/badge/Get%20Pairing%20Code-0076D2?style=for-the-badge&logo=opencv&logoColor=black" />
</a>

---

## 🛠️ Deployment Options

### 🚀 Heroku  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/mrlaka/Laka-Md-v3)

### 🌀 Replit  
[![Deploy to Replit](https://img.shields.io/badge/Deploy%20to%20Replit-6678CC?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github.com/mrlaka/Laka-Md-v3)

### 🚉 Railway  
[![Deploy to Railway](https://img.shields.io/badge/Deploy%20to%20Railway-black?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/new/template/6KyYkk?referralCode=mrlaka)

### ☁️ Koyeb  
[![Deploy to Koyeb](https://img.shields.io/badge/Deploy%20to%20Koyeb-orange?style=for-the-badge&logo=koyeb&logoColor=white)](https://app.koyeb.com/deploy?type=git&repository=https://github.com/mrlaka/Laka-Md-v3-v3)

### 🖥 Render  
[![Deploy to Render](https://img.shields.io/badge/Deploy%20to%20Render-green?style=for-the-badge&logo=render&logoColor=white)](https://dashboard.render.com/deploy/srv-cjjm8m9k9qfdl8c2fnb0?repo=https://github.com/mrlaka/Laka-Md-v3)

---

## ⚙️ GitHub Actions - Node.js CI

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