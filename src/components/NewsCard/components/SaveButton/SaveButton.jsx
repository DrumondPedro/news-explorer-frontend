import { useContext, useEffect, useState } from 'react';

import { LocationContext } from '../../../../contexts/LocationContext';

import savedIconInactive from '../../../../assets/images/SaveButton/saved_icon.svg';
import savedIconActive from '../../../../assets/images/SaveButton/saved_icon_active.svg';
import trashIcon from '../../../../assets/images/SaveButton/trash_icon.svg';

function SaveButton() {
  const { isSavedNewsPage } = useContext(LocationContext);
  // console.log(isSavedNewsPage); problema

  const [buttonImage, setButtonImage] = useState(savedIconInactive);
  const [isSaved, setIsSaved] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleButtonImageSelection() {
    if (isSaved && isSavedNewsPage) {
      setButtonImage(trashIcon);
      return;
    }
    if (isSaved) {
      setButtonImage(savedIconActive);
      return;
    }
    setButtonImage(savedIconInactive);
  }

  const handleHoverImage = () => {
    if (isHover === false) {
      setIsHover(true);
      return;
    }
    setIsHover(false);
  };

  const hendlerClickImage = () => {
    if (isSaved === false) {
      setIsSaved(true);
      return;
    }
    setIsSaved(false);
  };

  useEffect(() => {
    handleButtonImageSelection();
  }, [isSaved, isSavedNewsPage]);

  // isSavedNewsPage esta no useEffect pq ele vem primeiro como false

  return (
    <>
      <button
        className={`save-button`}
        onClick={hendlerClickImage}
        onMouseEnter={handleHoverImage}
        onMouseLeave={handleHoverImage}
      >
        <img
          className={`save-button__image`}
          src={buttonImage}
          alt='Imagem de uma badeira minimalista'
        />
      </button>
      {isHover && (
        <div className='save-button__poup'>
          <p className='save-button__poup-text'>
            {isSavedNewsPage ? 'Remover dos salvos' : 'Entre para salvar!'}{' '}
          </p>
        </div>
      )}
    </>
  );
}

export default SaveButton;
