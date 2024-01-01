import React, { useRef, useEffect } from 'react';

function Popup({ images, onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='popup-overlay'>
      <div ref={popupRef} className='popup-content'>
        <span className='close-button' onClick={onClose}>
          &times;
        </span>
        <div className='popup-image-container'>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Project ${index + 1}`} className='popup-image' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;
