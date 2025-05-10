import { useContext, useEffect, useState } from 'react';

import { LoginContext } from '../../../../contexts/LoginContext';
import { LocationContext } from '../../../../contexts/LocationContext';

import savedIconInactive from '../../../../assets/images/SaveButton/saved_icon.svg';
import savedIconActive from '../../../../assets/images/SaveButton/saved_icon_active.svg';
import trashIcon from '../../../../assets/images/SaveButton/trash_icon.svg';

function SaveButton() {
  const { isSavedNewsPage } = useContext(LocationContext);
  const { isLoggedIn } = useContext(LoginContext);

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

  function handleHoverButton() {
    console.log('hover');
    if (isHover === false) {
      setIsHover(true);
      return;
    }
    setIsHover(false);
  }

  async function handleNewsSaving(params) {
    try {
      setIsSaved(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleNewsDeletion(params) {
    try {
      setIsSaved(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function hendlerClickButton() {
    if (!isLoggedIn) {
      return;
    }
    if (isSaved === false) {
      handleNewsSaving();
      return;
    }
    handleNewsDeletion();
  }

  useEffect(() => {
    handleButtonImageSelection();
  }, [isSaved, isSavedNewsPage]);

  return (
    <>
      <button
        className={`save-button`}
        onClick={hendlerClickButton}
        onMouseEnter={handleHoverButton}
        onMouseLeave={handleHoverButton}
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
            {isSavedNewsPage ? 'Remover dos salvos' : 'Entre para salvar!'}
          </p>
        </div>
      )}
    </>
  );
}

export default SaveButton;
