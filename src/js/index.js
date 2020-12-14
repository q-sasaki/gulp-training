import './click'
import './sample.jsx'

const target = document.getElementById("root")

target.addEventListener("mouseenter", () => {
  target.style.color = "green"
})

target.addEventListener('mouseleave', () => {
  target.style.color = "red"
})