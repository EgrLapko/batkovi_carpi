import React, { Component } from 'react';
import { ProductConsumer } from '../../context/context';
import { english, ukrainian } from '../../language';

export default class FamilyCard extends Component {
    state = {
        showBio: false,
    }

    toggleBio = () => {
        this.setState({
            showBio: ! this.state.showBio
        })
    }

    render() {
        const { image, bio, name } = this.props;
        const {showBio} = this.state;
        return (
            <ProductConsumer>
                {value => {
                    const {eng} = value;
                    return (
                        <div className="family-card">
                            <div className="card-image-info-container">
                                <img className={"bio-img " + (showBio ? "invisible" : null)} src={image} alt="family" onClick={this.toggleBio} />
                                <div className={"bio-text-container " + (showBio ? "bio-visible" : null)}>
                                    <p className="card-bio"> {bio} </p>
                                    <button className="btn bio-btn" onClick={this.toggleBio}> {eng ? english.btnClose : ukrainian.btnClose } </button>
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