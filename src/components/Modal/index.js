import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.css';

const Modal = ({
  title,
  text,
  actionButtons,
  modalDismiss,
  children,
}) => {
  return createPortal(
  <div
    className={styles.modalContainer}
    onClick={modalDismiss}
  >
    <div
      className={styles.modalContent}
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.modalTitle}>
        {title}
      </div>
      <div className={styles.modalBody}>
        <Fragment>
          {children}
        </Fragment>
        <Fragment>
          {text}
        </Fragment>
      </div>
      <div className={styles.modalButtons}>
        {actionButtons}
      </div>
    </div>
  </div>,
  document.getElementById('modal')
  );
};

export default Modal;
