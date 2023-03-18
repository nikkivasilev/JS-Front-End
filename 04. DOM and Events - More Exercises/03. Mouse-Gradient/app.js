function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const result = document.getElementById("result");
  
    gradient.addEventListener("mousemove", event => {
      const rect = gradient.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = Math.floor(offsetX / rect.width * 100);
      result.textContent = `${percentage}%`;
    });
  
    gradient.addEventListener("mouseleave", () => {
      result.textContent = "";
    });
  }