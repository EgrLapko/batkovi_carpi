import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        openMenu: false,
        modalOpen: false,
        imageSRC: '',
        imageId: ''
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

  render() {
    return (
      <ProductContext.Provider value = {{
          ...this.state,
          handleMenu: this.handleMenu,
          handleModal: this.handleModal,
          nextImage: this.nextImage,
          closeMenu: this.closeMenu
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};