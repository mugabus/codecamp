const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
        <p>Items in cart: {props.items}</p>
      </div>
    );
  };
  
  // Change code below this line
  ShoppingCart.defaultProps = {
    items: 0
  };
  