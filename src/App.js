import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import BootstrapDinamik from "./components/10-Bootstrap/bootstrap-dinamik";
import Icon from "./components/11-Icons/icon";
import Events from "./components/12-Events/events";
import Shop from "./components/13-Products/shop";
import State from "./components/14-UseState/state";
import Stateless from "./components/14-UseState/stateless";
import Counter from "./components/15-Counter/counter";
import Progres from "./components/15-Counter/progres";
import Birthday from "./components/16-Birthday/birthday";
import UseEffect from "./components/17-UseEffect/useEffect";
import CountryFilter from "./components/18-Country-filter/country-filter";
import Scroll from "./components/19-UseRef/scroll";
import UserCards from "./components/20-Feach-users/user-cards";
import Countries from "./components/21-Axios-Countries/countries";
import ParentComp from "./components/22-Child-to-Parent/parent-comp";
import ToDoApp from "./components/23-TodoApp/toDoApp";
import Form1 from "./components/24-Form/form1";
import Form2 from "./components/24-Form/form2";
import Form3 from "./components/24-Form/form3";
import Form4 from "./components/24-Form/form4";
import Form5 from "./components/24-Form/form5";
import Header from "./components/00-Home/header/header";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-Home/menu/menu";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Row>
          <Col xs={12} md={8} lg={9}>
            <Menu />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Routes>
              <Route path="/hello" element={<Hello />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
              <Route path="/jsx6" element={<Jsx6 />} />
              <Route path="/style1" element={<Style1 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
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
      {/*  <ProfieCard
        avatar="hzn.jpg"
        name="Fatma Çimen"
        location="Turkey, Yozgat"
        shot="3"
        followers="52879"
        following="45"
      /> */}
      {/* <BootstrapDinamik /> */}
      {/* <Icon /> */}
      {/* <Events /> */}
      {/* <Shop /> */}
      {/* <Stateless /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Progres /> */}
      {/* <Birthday /> */}
      {/* <UseEffect /> */}
      {/* <CountryFilter /> */}
      {/* <Scroll /> */}
      {/*  <UserCards /> */}
      {/* <Countries /> */}
      {/* <ParentComp /> */}
      {/* <ToDoApp /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Form3 /> */}
      {/*  <Form4 /> */}
      {/* <Form5 /> */}
    </BrowserRouter>
  );
}

export default App;
