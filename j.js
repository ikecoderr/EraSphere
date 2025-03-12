// Sorulara tıklama olayını dinle



document.querySelectorAll(".sidebar button").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target"); // Hangi cevap seçildi
      const targetElement = document.getElementById(targetId);
  
      // Eski highlight sınıfını temizle
      document.querySelectorAll(".highlight").forEach(el => {
        el.classList.remove("highlight");
      });
  
      // Seçilen cevabı parlat ve altını çiz
      targetElement.classList.add("highlight");
  
      // Seçilen cevaba kaydır
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  