import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        openMenu: false,
        modalOpen: false,
        imageSRC: '',
        imageId: '',
        ukr: true,
        eng: false,
        showBio: false
    }

    // ----------- Change lang
    setENG = () => {
      this.setState({
        eng: true,
        ukr: false
      })
    }

    setUKR = () => {
      this.setState({
        ukr: true,
        eng: false
      })
    }


    // ----------- Open Menu
    handleMenu = () => {
        this.setState({
            openMenu: ! this.state.openMenu
        })
    }

    closeMenu = () => {
      this.setState({
          openMenu: false
      })
  }

    // ----------- Open Photo Modal Window
    handleModal = (id, photo) => {
      console.log(`current id is: ${id}, image path is: ${photo}`)
      this.setState({
        modalOpen: !this.state.modalOpen,
        imageSRC: photo,
        imageId: id
      })
    }

    // ----------- Navigation between images
    nextImage = (id, imageSRC) => {
      console.log(`current image id is: ${id} amd image path is: ${imageSRC}`)
      this.setState({
        imageId: id + 1
      })
    }

    // ----------- Toggle Bio in About Section
    toggleBio = () => {
      this.setState({
        showBio: ! this.state.showBio
      })
    }

  render() {
    return (
      <ProductContext.Provider value = {{
          ...this.state,
          handleMenu: this.handleMenu,
          handleModal: this.handleModal,
          nextImage: this.nextImage,
          closeMenu: this.closeMenu,
          setENG: this.setENG,
          setUKR: this.setUKR,
          toggleBio: this.toggleBio
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};