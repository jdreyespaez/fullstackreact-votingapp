const ProductList = React.createClass({
  render: function () {
    const product = Data[0];
    return (
      <div className='ui items'>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
        />
      </div>
    );
  },
});
// El segundo componente:
const Product = React.createClass({
  render: function () {
    return (<div className='item'>
        <div className='image'>
          <img src={this.props.product_image_url} />
        </div>
        <div className='middle aligned content'>
            <div className='header'>
              <a>
                <i className='large caret up icon'></i>
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
              </a>
            </div>
            <div className='extra'>
              <span>Agregado por:</span>
              <img
                className='ui avatar image'
                src ={this.props.submitter_avatar_url}
              />
            </div>
        </div>
      </div>
    );
  },
});

//Vamos a renderizar el componente en algún nodo del DOM.
ReactDOM.render(
  <ProductList/>,
  document.getElementById('content')
);
