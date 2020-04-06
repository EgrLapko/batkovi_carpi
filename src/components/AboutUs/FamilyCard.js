import React, { useState } from 'react';
import { ProductConsumer } from '../../context/context';
import { english, ukrainian } from '../../language';

const FamilyCard = ({ image, bio, name  }) => {

    const [showBio, toggleBio] = useState(false);

    return (
        <ProductConsumer>
            {value => {
                const {eng} = value;
                return (
                    <div className="family-card">
                        <div className="family-card__info">
                            <img className={"bio-img " + (showBio && "invisible")} src={image} alt="family" onClick={() => toggleBio(!showBio)} />
                            <div className={"text-container " + (showBio ? "visible" : null)}>
                                <p className="text-bio"> {bio} </p>
                                <button className="btn bio-btn" onClick={() => toggleBio(!showBio)}> {eng ? english.btnClose : ukrainian.btnClose } </button>
                            </div>
                        </div>       
                        <p className="family-card__name" onClick={() => toggleBio(!showBio)}> {name} </p>
                    </div>
                )
            }}               
        </ProductConsumer>
    )
}

export default FamilyCard;
