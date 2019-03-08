import React, {Component} from 'react';
import axios from 'axios';
import Products from "../components/Products";
import CustomForm from "../components/Form";


class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://0.0.0.0:8000/api/products/')
            .then(res => {
                this.setState({
                    products: res.data
                });
            })
    }

    render() {

        return (
            <div>
                <Products data={this.state.products}/>
                <CustomForm
                    requestType="post"
                    article={null}
                    btnText="Создать"
                />
            </div>
        )
    }
}

export default ProductList;