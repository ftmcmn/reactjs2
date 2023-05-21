import Hello from "./components/01-Hello.js/hello";
import Jsx4 from "./components/03-Jsx/jsx4";
import Jsx5 from "./components/03-Jsx/jsx5";
import Jsx6 from "./components/03-Jsx/jsx6";
import Style1 from "./components/04-Styles/style1";
import Style2 from "./components/04-Styles/style2";
import Style3 from "./components/04-Styles/style3";
import Style4 from "./components/04-Styles/style4";
import Clock1 from "./components/05-DijitalSaat/colck1/clock1";
import Clock2 from "./components/05-DijitalSaat/colck2/clock2";
import Gretings from "./components/06_Props/gretings";
import Products from "./components/07-Props2/products";
import Gallery from "./components/08-Image/gallery";
import Image from "./components/08-Image/image";
import ProfieCard from "./components/09-ProfileCard/profile-card";

function App() {
  return (
    <>
      {/*  <Hello /> */}
      {/* <Jsx5 /> */}
      {/*   <Jsx6 /> */}
      {/* <Style1 /> */}
      {/* <Style2 /> */}
      {/*  <Style3 /> */}
      {/* <Style4 /> */}
      {/* <Clock1 /> */}
      {/* <Gretings /> */}
      {/* <Products /> */}
      {/* <Clock2 textColor="yellow" bgColor="blue" /> */}
      {/* <Image /> */}
      {/* <Gallery /> */}
      <ProfieCard
        avatar="hzn.jpg"
        name="Fatma Çimen"
        location="Turkey, Yozgat"
        shot="3"
        followers="52879"
        following="45"
      />
    </>
  );
}

export default App;
