import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';
import photos from './photos';

export default class ModalImage extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, imageSRC, handleModal, imageId, eng, changeModalImage } = value;
                    return (
                        <div className={"modal-container " + (modalOpen ? "visible" : '')}>
                            <div className="modal-image-container">
                                <img src={imageSRC} id={imageId} alt=""/>
                            </div>   
                            <button className="btn modal-close-btn" onClick={handleModal}>{eng ? english.btnClose : ukrainian.btnClose}</button> 
                            <div className="thumbnails-container">
                                {photos.map(item => {
                                    return (
                                        <img key={item.id }src={item.photo} alt="" onClick={() => changeModalImage(item.id, item.photo)} />
                                    )      
                                })}
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
