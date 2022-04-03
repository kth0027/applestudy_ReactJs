/* eslint-disable */

// 라우터시 필수
import axios from "axios";
import React, { useEffect, useState } from "react";
// history 오브젝트 생성
import { useHistory, useParams } from 'react-router-dom';
// css styleing
import styled from "styled-components";
// css 로드
import './Detail.scss';
// import {재고context} from './App.js';

//
let 박스 = styled.div`
    padding : 20px;
    border-radius : 0.5rem;
    margin-top : 20px;
    
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.색상}
`;




// 디테일페이지 컴포넌트
function Detail(props) {
  
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState();
  let 재고 = useContext(재고context);  //근데 여기서 에러남 ㅅㄱ


  // hooks 사용
  useEffect(() => {

    //
      axios.get()


    // 2초후에 alert 창을 안보이게 해주세요
    // let 타이머 = setTimeout(()=>{

    // }, 2000)

    // return function 어쩌구(){

    // };

    // 특정state가 변경 될때 실행하여 재렌더링을 막을 수 있다. 1번만 실행
    let 타이머 = setTimeout(()=>{
      alert변경(false)
    }, 2000);
    console.log('안녕');
    
    return ()=> {clearTimeout(타이머)} // 타이머 해제
  
  }, [ ] );
  // 빈칸일 시 _ 가 변경이 될때만 usdEffect 실행
  // 제한조건에 아무것도 없을 시 1번만 실행

  useEffect(() => {

  });



  let history = useHistory();
  // let { id } = useParams(); // id 번째
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id
  });


  return (
    <div className="container">
      <박스>
        {/* <제목 색상={'red'}>Detail</제목> */}
        {/* <제목 className="red" 색상="blue">Detail</제목> */}
        <제목 className="red">Detail</제목>
      </박스>

      {inputData}
      <input onChange={(e)=>{ inputData변경(e.target.value) }} />

      {/* 조건 */}
      {
        alert === true
          ? (<div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
          : null
      }





      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          {/* <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p> */}
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          {/* 재고 */}
          <Info 재고={props.재고} />
          {/*  */}
          <button className="btn btn-danger" onClick={ ()=>{props.재고변경([9,10,12])} }>주문하기</button>
          <button className="mx-2 btn btn-outline-danger" onClick={() => {
            history.goBack() // 뒤로가기
            //   history.push('/') // 특정경로
          }} >뒤로가기</button>

        </div>
      </div>
    </div>
  )
}




// 구버전
// class Detail2 extends React.Component {
//   componentDidMount(){

//   }

//   componentWillUnmount(){

//   }
// }

// 재고 컴포넌트
function Info(props){
  return (
    <p>재고 : {props.재고[0]} </p>
  )
}


export default Detail;