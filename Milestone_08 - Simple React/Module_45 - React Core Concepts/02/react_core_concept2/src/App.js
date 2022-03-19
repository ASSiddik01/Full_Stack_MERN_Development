
import './App.css';

function App() {
  const products = [
    { name: "Laptop", price: "45000" },
    { name: "Mobile", price: "15000" },
    { name: "Camera", price: "25000" },
    { name: "Watch", price: "5000" }
    
  ]
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop" price='450000'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='price'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
