const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassActiveAll();
    panel.classList.add('active')
  });
});

function removeClassActiveAll(){
    panels.forEach((panel) => {
          panel.classList.remove('active');
      });
}