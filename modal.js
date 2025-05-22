// Funzione per mostrare il quadro in un modal
function showArtworkModal(imgSrc, imgAlt) {
  // Crea overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = () => document.body.removeChild(overlay);

  // Crea contenitore dell'immagine
  const modalBox = document.createElement('div');
  modalBox.className = 'modal-box';
  modalBox.onclick = (e) => e.stopPropagation();

  // Immagine
  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = imgAlt;
  img.className = 'modal-img';

  // Bottone chiudi
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = () => document.body.removeChild(overlay);

  modalBox.appendChild(closeBtn);
  modalBox.appendChild(img);
  overlay.appendChild(modalBox);
  document.body.appendChild(overlay);
}

// Aggiungi event listener ai bottoni "Dettagli"
document.querySelectorAll('.gallery-item .btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const galleryItem = btn.closest('.gallery-item');
    const img = galleryItem.querySelector('img');
    showArtworkModal(img.src, img.alt);
  });
});
