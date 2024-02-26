import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Carousel from '../carousel/carousel';

function ModalComponent({ logements }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (id) => {
    setSelectedItem(logements.find(logement => logement.id === id));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card-style">
      {logements.map(logement => (
        <div key={logement.id} className="card">
          <img
            src={logement.cover}
            alt="Image"
            style={{  cursor: 'pointer' }}
            onClick={() => openModal(logement.id)}
          />
          <p className="card-title">{logement.title}</p>
        </div>
      ))}
      <Modal open={modalOpen} onClose={closeModal}>
        {selectedItem && (
          <div>
            <Carousel pictures={selectedItem.pictures} title={selectedItem.title} />

            <p style={{color: 'blue', marginBottom: '20px'}}>{selectedItem.title}</p>
            <p style={{color: 'black', marginBottom: '50px'}}>{selectedItem.description}</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ModalComponent;
