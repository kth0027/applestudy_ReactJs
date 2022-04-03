import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{ props.state[0].name }</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </Table>
        </div>
    )
}

// export default Cart;

function state를props화(state) {
    return {
        state : state
    }
}

export default connect(state를props화)(Cart);
