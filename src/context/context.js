import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        openMenu: false,
        modalOpen: false,
        imageSRC: '',
        imageId: '',
        ukr: true,
        eng: false
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

  render() {
    return (
      <ProductContext.Provider value = {{
          ...this.state,
          handleMenu: this.handleMenu,
          handleModal: this.handleModal,
          closeMenu: this.closeMenu,
          setENG: this.setENG,
          setUKR: this.setUKR
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};