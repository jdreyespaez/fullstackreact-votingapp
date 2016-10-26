const ProductList = React.createClass({
  render: function () {
    return (
      <div className='ui items'>
        <Product />
      </div>
    );
  },
});
// El segundo componente:
const Product = React.createClass({
  render: function () {
    return (<div className='item'>
        <div className='image'>
          <img src='images/nobels/2016Hart&Holstrom.png' />
        </div>
        <div className='middle aligned content'>
            <div className='description'>
              <a>2016 | Oliver Hart y Bengt Holmström</a>
              <p>La Academia Sueca galardonó con el Nobel de Economía de forma conjunta a Hart y Holmström "por su contribución en la teoría de contratos".</p>
            </div>
            <div className='extra'>
              <span>Agregado por:</span>
              <img
                className='ui avatar image'
                src ='images/avatars/daniel.jpg'
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
