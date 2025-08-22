import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
    if(!isOpen) return null;
    return (
        <div className={styles.backdrop}>
        <div className={styles.modal}>
            {children}
            <button className={styles.close} onClick={onClose}>
            ✕
            </button>
        </div>
        </div>
    );
}

export default Modal
