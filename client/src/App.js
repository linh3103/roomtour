import MiddleBanner from "./components/Banners/MiddleBanner";
import BestProductList from "./containers/ProductLists/BestProductList";
import CategoryList from "./containers/Category/CategoryList";
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
      <MiddleBanner/>
      <RoomTourReviews/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
