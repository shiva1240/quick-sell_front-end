import { useEffect, useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";


function Modal({ openModal, closeModal, children, position,componentRef }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (openModal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [openModal]);

  const handleOutsideClick = (e) => {
    if (componentRef.current && !componentRef.current.contains(e.target)) {
      dialogRef.current?.close();
      console.log("yayyyy")
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

 

  return (
    <>
      <dialog
        ref={dialogRef}
        onCancel={closeModal}
        style={{
          marginLeft: 0,
          marginTop: 40,
          width:100,
          height:100,
          left: position.x,
          right: position.y,
        }}
      >
        <div></div>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
}

export default Modal;
