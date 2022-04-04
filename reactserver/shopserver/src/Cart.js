import React, { useEffect, memo}  from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {


    let state = useSelector((state) => state)
    console.log(state.reducer)
    let dispatch = useDispatch();


    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // props.state.map((a, i) => {
                        state.reducer.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    {/* <td><button className="btn btn-outline-danger w-25" onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button>
                                    <button className="mx-1 btn btn-outline-danger w-25" onClick={()=>{ props.dispatch({type: '수량감소'}) }}> - </button>
                                    </td> */}

                                    <td><button className="btn btn-outline-danger w-25" onClick={() => { props.dispatch({ type: '수량증가', 데이터: a.id }) }}> + </button>
                                        <button className="mx-1 btn btn-outline-danger w-25" onClick={() => { props.dispatch({ type: '수량감소', 데이터: a.id }) }}> - </button>
                                    </td>

                                    {/* <td>
                                    <button className="btn btn-outline-danger w-25" onClick={()=>{ dispatch({type: '수량증가', 데이터 : a.id }) }}> + </button>
                                    <button className="mx-1 btn btn-outline-danger w-25" onClick={()=>{ dispatch({type: '수량감소', 데이터 : a.id}) }}> - </button>
                                    </td> */}


                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
{/* 
            <Parent 이름="존박1" 나이="20" /> */}


            {props.alert열렸니 === true
                ? (

                    <div className="my-alert2" style={ {background : 'lightgrey'} }>
                        <p>지금 구매하시면 신규 할인20%</p>
                        <button className="mt-2 btn btn-outline-success" onClick={() => { props.dispatch({ type: 'alert닫기' }) }}>닫기</button>
                    </div>
                )
                : null

            }

        </div>
    )
}

// 재렌더링 테스트
function Parent(props) {
    return (
        <div>
            <Child1 이름={props.이름} />
            <Child2 나이={props.나이} />
        </div>
    )
}
function Child1() {
    useEffect(() => { console.log('렌더링됨1') });
    return <div>1111</div>
}
// function Child2() {
//     useEffect(() => { console.log('렌더링됨2') });
//     return <div>2222</div>
// }

let Child2 = memo(function(){
    useEffect(() => { console.log('렌더링됨2') });
    return <div>2222</div>
});

// export default Cart;

function state를props화(state) {
    return {
        // state: state
        state: state.reducer,
        alert열렸니: state.reducer2
    }
}

export default connect(state를props화)(Cart);
