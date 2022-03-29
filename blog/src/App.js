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

      <div className="list">
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
      </div>

      {/* 반복문 위한 map 사용 */}

      {
        글제목.map(function (글) {
          return (
            <div className="list">
              <h3>{글} <span onClick={() => { 따봉변경(따봉 + 1) }} style={{ cursor: 'pointer' }}> 👍 </span> {따봉} </h3>
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

      {
        modal === true ? <Modal 글제목={글제목}></Modal> : null
      }

      {/* 열고 닫기 */}
      <button onClick={() => { modal변경(!modal) }}>모달창 열고 닫는 버튼</button>

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>제목 {props.글제목[1]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;


