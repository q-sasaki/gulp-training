const target = document.getElementById("root")

target.addEventListener("mouseenter", function() {
  target.style.color = "green";
})

target.addEventListener('mouseleave', () => {
  target.style.color = "red";
});