/* eslint-disable */

// 라우터시 필수
import React, { useState } from "react";
// history 오브젝트 생성
import { useHistory, useParams } from 'react-router-dom';
// css styleing
import styled from "styled-components";
// css 로드
import './Detail.scss';

//
let 박스 = styled.div`
    padding : 20px;
    border : 1px solid #000;
    border-radius : 0.5rem;
    margin-top : 20px;
    
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.색상}
`;



// 디테일페이지 컴포넌트
function Detail(props) {


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
          <button className="btn btn-danger">주문하기</button>
          <button className="mx-2 btn btn-outline-danger" onClick={() => {
            history.goBack() // 뒤로가기
            //   history.push('/') // 특정경로
          }} >뒤로가기</button>

        </div>
      </div>
    </div>
  )
}

export default Detail;