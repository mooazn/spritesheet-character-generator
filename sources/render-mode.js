// js/render-mode.js

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("character-canvas");
    const ctx = canvas.getContext("2d");
  
    const urlParams = new URLSearchParams(window.location.search);
    const config = {};
  
    for (const [key, value] of urlParams.entries()) {
      config[key] = decodeURIComponent(value);
    }
  
    const avatar = new Avatar(config);
    avatar.render(ctx);
  });
  