import BestProductList from './containers/BestProductList';
import CategoryList from './containers/Category/CategoryList';
import Header from './containers/Header';
function App() {

  return (
    <div className="App">
      <Header/>
      <CategoryList/>
      <BestProductList/>
    </div>
  );
}

export default App;
