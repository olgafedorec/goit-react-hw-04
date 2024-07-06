import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ image: { alt_description, urls: { regular } }, onClose }) {
    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <img src={regular} alt={alt_description} />
        </Modal>
    );
}
