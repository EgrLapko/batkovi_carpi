import React, { Component } from 'react';
import { ProductConsumer } from '../../context/context';

export default class FamilyCard extends Component {
    render() {

        const { name, image, bio } = this.props;

        return (
            <ProductConsumer>
                {value => {
                    const {showBio, toggleBio} = value;
                    return (
                        <div className="family-card">
                            <div className="card-image-info-container">
                                <img className={"bio-img " + (showBio ? "invisible" : null)} src={image} alt="family" onClick={toggleBio} />
                                <div className="bio-text-container">
                                    <p className="card-bio"> {bio} </p>
                                    <button className="btn bio-btn" onClick={toggleBio}>Close</button>
                                </div>
                            </div>       
                            <p className="family-card-name"> {name} </p>
                        </div>
                    )
                }}
            </ProductConsumer>          
        )
    }
}
