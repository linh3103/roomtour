import BestProductList from "./containers/BestProductList/BestProductList";
import CategoryList from "./containers/Category/CategoryList";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Instagram from "./containers/Insta/Instagram";

function App() {

  return (
    <div className="App">
      <Header/>
      <CategoryList/>
      <BestProductList/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
