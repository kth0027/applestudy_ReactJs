// eslint warning 무시하기
/* eslint-disable */

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
// import name from './data';
import Data from './data';
import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';



function App() {

  // 신발데이터 : 데이터 바인딩하기
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">

      {/* 네브바 */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
              <Nav.Link><Link to="/detail">상세페이지</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Switch>
        <Route exact path="/">
          {/* 점보트론 */}
          {/* 부트스트랩5버전은 점보트론이 없다. */}

          <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              asperiores ea consectetur animi cum exercitationem, iusto ut nisi
              ducimus mollitia labore sint. Odit tempora obcaecati iusto a totam id
              illo.
            </p>
            <p>
              <button className="btn btn-outline-info" variant="primary">
                Learn more
              </button>
            </p>
          </div>

          {/* 상품  */}
          <div className="container productbox">
            <div className="row">
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} />
                })
              }

              {/* <Card shoes={shoes[0]} />
          <Card shoes={shoes[1]} />
          <Card shoes={shoes[2]} /> */}
              {/* <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt=""
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content} & {shoes[1].price} </p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg

"
              alt=""
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content} & {shoes[1].price} </p>
          </div> */}
            </div>
          </div>
        </Route>

        {/* 상품명마다 반복 */}
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        {/* :파라미터 */}
        <Route path="/:id">
          <div>아무거나 적었을 시 보여주삼</div>
        </Route>

      </Switch>

      {/* <Route path="/어쩌구" component={Card} ></Route> 
      
      <Route path="/어쩌구" component={Modal} ></Route>  */}

    </div>
  );
}


// 상품 카드컴포넌트
function Card(props) {
  return (
    <div className="col-md-4">
      {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="100%" />
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="100%" /> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />

      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price} </p>
    </div>

  )
}




export default App;
