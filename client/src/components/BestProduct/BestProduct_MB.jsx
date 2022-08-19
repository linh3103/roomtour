import {React} from 'react';

const BestProductMB = (props) => {
    const {product_nm, sale_price, fee_rate, file_nm } = props.product;

    return (
        <div className="col-6">
            <p className="label">6컬러</p>
            <a href="#"><img src={`https://www.amante.co.kr/uploads/product/`+file_nm} alt =""/></a>
            <div className="caption-infor">
                <a href="#">
                    <p className="txt">{product_nm}</p>
                </a>
                <p className="price">
                    <span>{sale_price}원</span>
                    <span className="percent-sale">{fee_rate}%</span>
                </p>
            </div>
        </div>
    );
};

export default BestProductMB;
