const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
          currentInput = "";
          display.textContent = "0";
        } else if (value === "←") {
          currentInput = currentInput.slice(0, -1);
          display.textContent = currentInput || "0";
        } else if (value === "=") {
          try {
            currentInput = currentInput.replace(/x/g, "*").replace(/÷/g, "/");
            const result = eval(currentInput);
            display.textContent = result;
            currentInput = result.toString();
          } catch {
            display.textContent = "Error";
            currentInput = "";
          }
        } else {
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });