import BestProductList from "./containers/BestProductList/BestProductList";
import CategoryList from "./containers/Category/CategoryList";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

function App() {

  return (
    <div className="App">
      <Header/>
      <CategoryList/>
      <BestProductList/>
      <Footer/>
    </div>
  );
}

export default App;
