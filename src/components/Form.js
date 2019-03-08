import React from "react";
import {Form, Input, Button} from "antd";

import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = async (event, requestType, productID) => {

        const name = event.target.elements.name.value;
        const amount = event.target.elements.amount.value;
        // const image = event.target.elements.imag.value;
        const image = null;
        const price = event.target.elements.price.value;
        const tradePrice = event.target.elements.tradePrice.value;
        const vendorCode = event.target.elements.vendorCode.value;
        // const category = event.target.elements.category.value;
        const category = 22;

        switch (requestType) {
            case 'post':
                return axios.post('http://0.0.0.0:8000/api/products/', {
                    image: image,
                    amount: amount,
                    category: category,
                    name: name,
                    price: price,
                    trade_price: tradePrice,
                    vendor_code: vendorCode,
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            case 'put':
                return axios.put(`http://0.0.0.0:8000/api/products/${productID}/`, {
                    image: image,
                    amount: amount,
                    category: category,
                    name: name,
                    price: price,
                    trade_price: tradePrice,
                    vendor_code: vendorCode,
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
        }
    };

    render() {
        return (
            <div>
                <Form
                    onSubmit={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.productID,
                        )
                    }
                >
                    <FormItem label="Имя">
                        <Input name="name"/>
                    </FormItem>
                    <FormItem label="Количество">
                        <Input name="amount"/>
                    </FormItem>
                    <FormItem label="Цена">
                        <Input name="price"/>
                    </FormItem>
                    <FormItem label="Оптовая цена">
                        <Input name="tradePrice"/>
                    </FormItem>
                    <FormItem label="Артикул">
                        <Input name="vendorCode"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            {this.props.btnText}
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default CustomForm;