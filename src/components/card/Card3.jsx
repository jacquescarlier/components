import React, { useState, useParams } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Carousel from '../carousel/carousel';


function ClickableCardWithModal({ logements }) {
  const [modalOpen, setModalOpen] = useState(false);
 /* const [selectedItem, setSelectedItem] = useState(null);*/
  /*const { id } = useParams();*/

  const openModal = (id) => {
    /*setSelectedItem(logements.find(item => item.id === id));*/
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="card-style">
  {logements.map((logement) => (
    <div
      key={logement.id}
      className="card"
    >
      <img src={logement.cover} alt={logement.title} onClick={openModal} ></img>
      <p className="card-title">{logement.title}</p>
      <Modal open={modalOpen} onClose={closeModal}>
      <h2>{logement.title}</h2>
    <Carousel pictures={logement.pictures} title={logement.title} />
      </Modal>
    </div>
  ))}
</div>
);
}

export default ClickableCardWithModal;
