document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  //Remove the Open Class from all Panels
  const close = () => {
    panels.forEach((p) => {
      p.classList.remove("open");
      const message = p.querySelectorAll("p");
      message[0].style.transform = "translateY(-100%)";
      message[2].style.transform = "translateY(+100%)";
    });
  };

  //
  const showp = (panel) => {
    const message = panel.querySelectorAll("p");
    message[0].style.transform = "translateY(0%)";
    message[2].style.transform = "translateY(0%)";
  };

  //Loop Through Panels add Event Handlers when click, call Close and handlePisition funtion
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      if (!panel.classList.contains("open")) {
        close();
        showp(panel);
        panel.classList.add("open");
      } else {
        close();
      }
    });
  });
});
