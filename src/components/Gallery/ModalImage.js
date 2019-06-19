import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';

export default class ModalImage extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, imageSRC, handleModal, nextImage, imageId} = value;
                    return (
                        <div className={"modal-container " + (modalOpen ? "visible" : '')}>
                            <button className="btn move-btn">Тільки назад</button>
                            <div className="modal-image-container">
                                <img src={imageSRC} id={imageId} alt=""/>
                            </div>   
                            <button className="btn modal-close-btn" onClick={handleModal}>Закрити</button> 
                            <button className="btn move-btn" onClick={() => nextImage(imageId, imageSRC)}>Тільки вперед</button>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
