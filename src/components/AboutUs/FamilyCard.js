import React, { useState } from 'react';

import { connect } from 'react-redux';

import { english, ukrainian } from '../../language';

const FamilyCard = ({ image, bio, name, langENG  }) => {

    const [showBio, toggleBio] = useState(false);

    return (
        <div className="family-card">
            <div className="family-card__info">
                <img className={"bio-img " + (showBio && "invisible")} src={image} alt="family" onClick={() => toggleBio(!showBio)} />
                <div className={"text-container " + (showBio ? "visible" : null)}>
                    <p className="text-bio"> {bio} </p>
                    <button className="btn bio-btn" onClick={() => toggleBio(!showBio)}> {langENG ? english.btnClose : ukrainian.btnClose } </button>
                </div>
            </div>       
            <p className="family-card__name" onClick={() => toggleBio(!showBio)}> {name} </p>
        </div>  
    )
}

const mapStateToProps = (state) => ({
    langENG: state.app.eng
  })

export default connect(mapStateToProps)(FamilyCard);
