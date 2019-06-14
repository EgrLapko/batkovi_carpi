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

    // ----------- Open Photo Modal Window
    handleModal = (id, photo) => {
      this.setState({
        modalOpen: !this.state.modalOpen,
        imageSRC: photo,
        imageId: id
      }, console.log(`id is: ${this.state.imageId}, image path is: ${this.state.imageSRC}`))
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
          nextImage: this.nextImage
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};