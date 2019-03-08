import React, {Component} from 'react';
// import 'whatwg-fetch';
// import cookie from 'react-cookies';
// import ProductList from '../containers/ProductListView';
// import CustomForm from "./Form";
import CustomTable from "./Table";
import CustomForm from "./Form";

class Products extends Component {
    // constructor(props){
    //     super(props)
    // }
    // state = {
    //     products: [],
    // }
    //
    // loadProducts() {
    //     const endpoint = 'http://0.0.0.0:8000/api/products/'
    //     let thisComp = this
    //     let lookupOptions = {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     fetch(endpoint, lookupOptions)
    //         .then(function (response) {
    //             return response.json()
    //         }).then(function (responseData) {
    //         console.log(responseData)
    //         thisComp.setState({
    //             products: responseData
    //         })
    //     }).catch(function (error) {
    //         console.log("error", error)
    //     })
    // }
    //
    // createProduct() {
    //     const endpoint = 'http://0.0.0.0:8000/api/products/'
    //     const csrfToken = cookie.load('csrftoken')
    //     let thisComp = this
    //     let data = {
    //         "image": null,
    //         "name": "",
    //         "price": null,
    //         "trade_price": null,
    //         "amount": null,
    //         "created_date": null,
    //         "vendor_code": "",
    //         "category": null
    //     }
    //     if (csrfToken != undefined) {
    //         let lookupOptions = {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-CSRFToken': csrfToken
    //             },
    //             body: JSON.stringify(data),
    //             credentials: 'include'
    //         }
    //         fetch(endpoint, lookupOptions)
    //             .then(function (response) {
    //                 return response.json()
    //             }).then(function (responseData) {
    //             console.log(responseData)
    //         }).catch(function (error) {
    //             console.log("error", error)
    //         })
    //     }
    // }
    //
    // componentDidMount() {
    //     this.setState({
    //         products: []
    //     })
    //     this.loadProducts()
    // }

    render() {
        // const {products} = this.state
        // const csrfToken = cookie.load('csrftoken')
        const {data} = this.props
        return (
            <div>
                {data.length > 0 ? data.map((productItem, index)=>{
                    return (
                        <CustomTable product={productItem} productIndex={index}/>
                    )
                }) : <p>Не найдено ни одного продукта</p>}
            </div>
        )
    }
}


export default Products;