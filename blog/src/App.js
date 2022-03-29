/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // (참고) ES6 destructing 문법
  // var a, b = [10, 100];

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  let [글제목2, 글제목변경2] = useState('남자 코트 추천2');

  let posts = '강남 고기 맛집';
  // document.getElementById().innerHTML = '';

  // function 함수() {
  //   return 100
  // }

  // 따봉 누를 시 클릭함수
  let [따봉, 따봉변경] = useState(0);

  // 버튼 누를시 여자코트추천 변경
  // function 제목바꾸기(){
  //   var newArray = [...글제목]; // 복사본 생성
  //   newArray[0] = '여자코드 추천';
  //   // 글제목변경(['여자코트 추천,' ,'강남 우동맞십', '파이썬독학']);
  //       글제목변경(newArray);
  // }

  // UI 만들기
  let [modal, modal변경] = useState(false);


  // map
  // var 어레이 = [2, 3, 4];

  // // var 뉴어레이 = 어레이.map(function(a){
  // 어레이.map(function (a) {
  //   return a * 2
  // })

  // for 반복문
  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이
  }

  // 
  let [누른제목, 누른제목변경] = useState(0);

  // 인풋 변수받기
  let [입력값, 입력값변경] = useState(''); // 저장공간





  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'blue', fontSize: '30px' }}>개발 BLOG</div>
      </div>

      {/* 기초문법
      <img src={logo} alt="" />
      <h4>{posts}</h4>
      <h4>{함수()}</h4> */}

      {/* <div className="list">
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> */}

      {/* <button  onClick={제목바꾸기} style={ {cursor : 'pointer', marginTop : '10px'} }>추천</button> */}

      {/* <div className="list">
        <h3>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }} style={{ cursor: 'pointer' }}> 👍 </span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>


      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>


      <div className="list">
        <h3 onClick={() => { modal변경(true) }}>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div> */}

      {/* 반복문 위한 map 사용 */}

      {
        글제목.map(function (글, i) {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { 누른제목변경(i) }}>{글}
                <span onClick={() => { 따봉변경(따봉 + 1) }} style={{ cursor: 'pointer' }}> 👍 </span>
                {따봉} </h3>
              <p>2월 18일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {/* for 반복문 */}

      {/* {
        반복된UI()
      } */}

      {/* 모달창 */}

      {/* 
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}


      {/* 모달 컴포넌트 */}
      {/* <Modal></Modal> */}
      {/* if 조건으로 ui 동작부여 */}


      {/*  */}
      {/* <button onClick={() => { 누른제목변경(0) }}>버튼1</button>
      <button onClick={() => { 누른제목변경(1) }}>버튼2</button>
      <button onClick={() => { 누른제목변경(2) }}>버튼3</button> */}

      {/* 인풋 받기 */}
      {/* 무언가 입력 될 때 안의 함수 실행 */}
            {/* <input type="text" onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}

            <div className="publish">
              <input onChange={ (e)=>{입력값변경(e.target.value)} } type="text" />
              <button onClick={ ()=>{
                // 글제목변경( [입력값,'남자 코트 추천', '강남 우동 맛집', '파이썬 독학'] )

                var arrayCopy = [...글제목];
                arrayCopy.unshift(입력값);
                
                글제목변경( arrayCopy );
              } }>저장</button>
            </div>

      {/* 열고 닫기 */}
      <button onClick={() => { modal변경(!modal) }}>모달창 열고 닫는 버튼</button>
            
            <Profile/>

      
      {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      {/* <h2>제목 {props.글제목[1]}</h2> */}
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      
    </div>
  )
}

// React Class 문법 (구버전) : 컴포넌트 만드는방법
class Profile extends React.Component {
  constructor(){
    super();
    // state
    this.state = {name : 'Kim'}
  }

  changeName(){
    this.setState({name : 'Hong'})
  }

  // changeName = () => {
  //   this.setState({name : 'Hong'})
  // }

  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다</p>
        {/* <button onClick={ ()=>{ this.setState( {name : 'Park' } ) } }>버튼</button> */}
        <button onClick={ this.changeName.bind(this) }>버튼</button>
        {/* <button onClick={ this.changeName }>버튼</button> */}
      </div>
    )
 
  }
}

export default App;



