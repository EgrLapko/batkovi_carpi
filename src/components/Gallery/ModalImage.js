import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';

export default class ModalImage extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, imageSRC, handleModal, imageId, eng } = value;
                    return (
                        <div className={"modal-container " + (modalOpen ? "visible" : '')}>
                            <div className="modal-image-container">
                                <img src={imageSRC} id={imageId} alt=""/>
                            </div>   
                            <button className="btn modal-close-btn" onClick={handleModal}>{eng ? english.btnClose : ukrainian.btnClose}</button> 
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
