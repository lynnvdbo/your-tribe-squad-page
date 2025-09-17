  document.addEventListener("DOMContentLoaded", function () {
    const zoekbalk = document.getElementById("mijnZoekbalk");
    const profielen = document.querySelectorAll(".photolist");

    zoekbalk.addEventListener("input", function () {
      const zoekTerm = zoekbalk.value.toLowerCase();

      profielen.forEach(function (profiel) {
        const naamElement = profiel.querySelector(".name");
        const naam = naamElement.textContent.toLowerCase();

        // Alleen tonen als de naam BEGINT met de zoekterm
        if (naam.startsWith(zoekTerm)) {
          profiel.style.display = "block";
        } else {
          profiel.style.display = "none";
        }
      });
    });
  });