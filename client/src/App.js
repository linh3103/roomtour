import BestProductList from "./containers/ProductLists/BestProductList";
import CategoryList from "./containers/Category/CategoryList";
import Display from "./containers/Display/Display";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Instagram from "./containers/Insta/Instagram";
import RoomTourReviews from "./containers/ReviewLists/RoomTourReviewList";

function App() {

  return (
    <div className="App">
      <Header/>
      <CategoryList/>
      <BestProductList/>
      <RoomTourReviews/>
      <Display/> 
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
