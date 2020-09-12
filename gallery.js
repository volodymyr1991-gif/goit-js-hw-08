import gallerySrc from "./gallery-items.js";

const galleryUl = document.querySelector(".js-gallery");
const btnRef = document.querySelector("button[data-action=close-lightbox]");
const openModal = document.querySelector(".lightbox");
const modalImgRef = document.querySelector(".lightbox__image");

const divContentRef = document.querySelector(".lightbox__content");

galleryUl.addEventListener("click", onOpenModal);
btnRef.addEventListener("click", onCloseModal);

divContentRef.addEventListener("click", divOffModal);

const createGallery = (images) => {
  const galleryLi = document.createElement("li");
  galleryLi.classList.add("gallery__item");
  const galleryLinc = document.createElement("a");
  galleryLinc.classList.add("gallery__linc");
  galleryLinc.setAttribute("href", "#");
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.setAttribute("src", images.preview);
  galleryImg.setAttribute("alt", images.description);
  galleryImg.setAttribute("data-source", images.original);
  galleryLinc.appendChild(galleryImg);
  galleryLi.appendChild(galleryLinc);

  return galleryLi;
};

const container = gallerySrc.map((image) => createGallery(image));

galleryUl.append(...container);

function onOpenModal(event) {
  window.addEventListener("keydown", onPressEscape);
  if (event.target.nodeName !== "IMG") {
    return console.log("object");
  }
  const dataUrlImg = event.target.dataset.source;
  console.log(dataUrlImg);

  openModal.classList.add("is-open");
  modalImgRef.src = dataUrlImg;
}

function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  openModal.classList.remove("is-open");
  modalImgRef.src = "";
}

function divOffModal(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
