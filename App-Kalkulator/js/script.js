const layar = document.querySelector(".screen");
const papanKalkulator = document.querySelector(".calculator-body");

papanKalkulator.addEventListener("click", function (event) {
    if (event.target.tagName !== "INPUT") return;

    if (event.target.classList.contains("action-clear")) {
      layar.innerText = "";
      return;
    }
    
    if (event.target.classList.contains("action-backspace")) {
      layar.innerText = layar.innerText.toString().slice(0, -1);
      return;
    }
    
    if (event.target.classList.contains("action-evaluate")) {
      try {
        layar.innerText = eval(layar.innerText);
      } catch (err) {
        layar.innerText = "Error";
      }
      return;
    }

    if (event.target.classList.contains("sin")) {
        layar.innerText = Math.sin((layar.innerText) * (Math.PI / 180)); 
        var hasil = parseFloat(layar.innerText);
        layar.innerText = hasil.toFixed(1);
        return;
    }

    if (event.target.classList.contains("cos")) {
        layar.innerText = Math.cos((layar.innerText) * (Math.PI / 180)); 
        var hasil = parseFloat(layar.innerText);
        layar.innerText = hasil.toFixed(1);
        return;
    }

    if (event.target.classList.contains("tan")) {
        layar.innerText = Math.tan((layar.innerText) * (Math.PI / 180)); 
        var hasil = parseFloat(layar.innerText);
        layar.innerText = hasil.toFixed(1);
        return;
    }

    if (event.target.classList.contains("p")) {
        layar.innerText = layar.innerText / 100
        return;
    }

    if (event.target.classList.contains("l")) {
        layar.innerText = Math.log(layar.innerText)
        return;
    }
    
    
    layar.innerText += event.target.value;
  });