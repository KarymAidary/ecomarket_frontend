import {Table} from 'antd';
import {Resizable} from 'react-resizable';
import React, {Component} from 'react'

const ResizeableTitle = (props) => {
    const {onResize, width, ...restProps} = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable width={width} height={0} onResize={onResize}>
            <th {...restProps} />
        </Resizable>
    );
};

class CustomTable extends Component {
    state = {
        columns: [{
            title: 'Номер',
            dataIndex: 'number',
            width: 200,
        },{
            title: 'Картинка',
            dataIndex: 'image',
            width: 200,
        },{
            title: 'Категория',
            dataIndex: 'category',
            width: 200,
        },{
            title: 'Ариткул',
            dataIndex: 'vendorCode',
            width: 200,
        },{
            title: 'Имя',
            dataIndex: 'name',
            width: 200,
        }, {
            title: 'Цена',
            dataIndex: 'price',
            width: 100,
        }, {
            title: 'Количество',
            dataIndex: 'amount',
            width: 100,
        }, {
            title: 'Оптовая цена',
            dataIndex: 'tradePrice',
            width: 100,
        }, {
            title: 'Action',
            key: 'action',
            render: () => (
                <a href="javascript:;">Delete</a>
            ),
        }],
    };

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };


    handleResize = index => (e, {size}) => {
        this.setState(({columns}) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    };

    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        const {product} = this.props
        const {productIndex} = this.props
        console.log(product)
        return (
            <div>
                <Table
                    bordered
                    components={this.components}
                    columns={columns}
                    dataSource={[{
                        key: productIndex,
                        name: product.name,
                        amount: product.amount,
                        price: product.price,
                        tradePrice: product.trade_price,
                        vendorCode: product.vendor_code,
                        category: product.category,
                        image: product.image,
                        number: productIndex
                    }]}
                />
            </div>
        );
    }
}

export default CustomTable;
