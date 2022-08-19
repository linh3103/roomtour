import { React } from 'react';

const BestProductItem = (props) => {

    const { product_nm, sale_price, fee_rate, file_nm } = props.product;

    return (
        <>
            {
                props.mode == "PC" ? 
                (
                <div className="col-4 ">
                    <div className="col-img-bottom">
                        <p className="label">6컬러</p>
                        <a href="#"><img src={`https://www.amante.co.kr/uploads/product/`+file_nm} alt="" /></a>
                        <div className="caption-infor">
                            <a href="#">
                                <p className="txt">{product_nm}</p>
                            </a>
                            <div className="space-hr">
                                <hr />
                            </div>
                            <p className="price">
                                <span>{sale_price}원</span>
                                <span className="percent-sale">{fee_rate}%</span>
                                <a href="#"><span className="icon-arrow">arrow</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                ) :
                (
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
                )
            }
        </>
    );
};

export default BestProductItem;
