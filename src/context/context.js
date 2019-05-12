import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        openMenu: false
    }

    // ----------- Open Menu func
    handleMenu = () => {
        this.setState({
            openMenu: ! this.state.openMenu
        })
    }

  render() {
    return (
      <ProductContext.Provider value = {{
          ...this.state,
          handleMenu: this.handleMenu
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};