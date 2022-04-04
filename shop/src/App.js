// eslint warning 무시하기
/* eslint-disable */
import "./App.css";
import React, {useState, useContext, lazy, Suspense} from 'react';
// import name from './data';
import Data from "./data.js";
// import Detail from "./Detail.js";
let Detail = lazy( ()=>{ return import('./Detail.js') } );
// axios
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

// Car page
import Cart from './Cart';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// context api
// export let 재고context = React.createContext();



function App() {
  // 신발데이터 : 데이터 바인딩하기
  let [shoes, shoes변경] = useState(Data);

  // 재고 표시 및 변경
  let [재고, 재고변경] = useState([10, 11, 12]);


  return (
    <div className="App">
      {/* 네브바 */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {/* link 안의 link 오류남 */}
              {/* <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/detail">상세페이지</Link>
              </Nav.Link> */}

              {/* 해결 */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">상세페이지</ Nav.Link>


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
              ducimus mollitia labore sint. Odit tempora obcaecati iusto a totam
              id illo.
            </p>
            <p>
              <button className="btn btn-outline-info" variant="primary">
                Learn more
              </button>
            </p>
          </div>

          {/* 상품  */}
          <div className="container productbox">


          {/* <재고context.Provider value={재고}> */}

            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i}  />;
              })}

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
            {/* </재고context.Provider> */}



            <button className="btn btn-primary my-3" onClick={() => {

              axios.post('서버URL', { id: 'codingapple', pw: 123 }).then();

              //  로딩중

              {/* 서버에 get 요청 */ }
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  //  로딩중 지움
                  // console.log('성공했어요')
                  console.log('result.data');
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(() => {
                  //  로딩중 지움
                  console.log('실패')
                })

            }}>더보기</button>



          </div>
        </Route>

        {/* <재고context.Provider value={재고}> */}

        {/* 상품명마다 반복 */}
        <Route path="/detail/:id">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </Suspense>
        </Route>
        {/* </재고context.Provider> */}



        <Route path="/cart">
          <Cart></Cart>
        </Route>



        {/* :파라미터 */}
        <Route path="/:id">
          <div>아무거나 적었을 시 보여주삼</div>
        </Route>
      </Switch>

      {/* <Route path="/어쩌구" component={Card} ></Route> 
      
      <Route path="/어쩌구" component={Modal} ></Route>  */}
    </div >
  );
}

// 상품 카드컴포넌트
function Card(props) {

  // let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={ ()=>{ history.push('/detail/' + props.shoes.id) } }>

      {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="100%" />
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="100%" /> */}
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />

      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}{" "}
      </p>
      {/* <Test></Test> */}
      {/* <div>{재고[props.i]}</div> */}

    </div>

  );
}

// function Test(){
//   let 재고 = useContext(재고context);
//   return <p>{재고[0]}</p>
// }




export default App;
