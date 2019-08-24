import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const Teste = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    const body = document.body;
    let varScroll;
    setCurrentImage(index);
    setViewerIsOpen(true);


     if(!body.classList.contains('teste-open')) {
        varScroll = window.scrollY;
        body.style.top = '-' + varScroll + 'px';
        body.dataset.y = varScroll;
        body.classList.add('teste-open');
      } else {
        body.classList.remove('teste-open');
        body.style.top = 0;
        window.scrollTo(0, body.dataset.y);
      }

  }, []);

  const closeLightbox = () => {
    const body = document.body;

    setCurrentImage(0);
    setViewerIsOpen(false);

    if(body.classList.contains('teste-open')) {
        body.classList.remove('teste-open');
        body.style.top = 0;
        window.scrollTo(0, body.dataset.y);
    }
}

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Teste;

