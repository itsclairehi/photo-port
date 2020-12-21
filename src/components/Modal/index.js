import React from "react";

function Modal({onClose, currentPhoto}) {
    //recieves currentPhoto as a prop from PhotoList component at line 121, which is initialized as the getter in a useState hook at 109. its original properties come from the photos array at line 9.  it is then destructured from 'props' here
    //each key is destructured further from currentPhoto to be used in return statement.
//the onClose prop contains the toggleModal function from photoList, which toggles the state of the Modal (if state is true it's rendered)
    const {name, category, description, index}=currentPhoto

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal;