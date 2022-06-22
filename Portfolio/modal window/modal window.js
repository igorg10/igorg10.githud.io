const card = document.querySelector(".environment")
const modal = document.querySelector(".modal_card")
const btnOpen = document.querySelector(".btn_open")
const btnClose = document.querySelector(".btn_close")

btnOpen.onclick = () => {
  card.style.display = "block"
  btnClose.addEventListener("click", close)
  card.addEventListener("click", close2)

  function close() {
    modal.classList.add("slideInDown")
    animation()
    btnClose.removeEventListener("click", close)
  }

  function close2(event) {
    if (event.target === card) {
      modal.classList.add("slideInDown")
      animation()
      card.removeEventListener("click", close2)
    }
  }
}

function animation() {
  setTimeout(() => {
    card.style.display = "none"
    modal.classList.remove("slideInDown")
  }, 300)
}