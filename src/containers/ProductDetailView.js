import React from 'react';
import axios from 'axios';


import {Card, Button} from 'antd';
import CustomForm from "../components/Form";

class ProductDetail extends React.Component {

    state = {
        product: {}
    }

    componentDidMount() {
        const productID = this.props.match.params.productID;
        axios.get(`http://0.0.0.0:8000/api/products/${productID}`)
            .then(res => {
                this.setState({
                    product: res.data
                });
            })
    }

    handleDelete() {
        const productID = this.props.match.params.productID;
        axios.delete(`http://0.0.0.0:8000/api/products/${productID}`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push('/');
                    this.forceUpdate();
                }
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.product.name}>
                    <p>{this.state.product.name}</p>
                    <p>{this.state.product.price}</p>
                </Card>
                <CustomForm requestType="put" productID={this.props.match.params.productID} btnText="Обновить"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Удалить</Button>
                </form>
            </div>

        )
    }
}

export default ProductDetail;