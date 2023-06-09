import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product1 from "../../assets/img/product/pr1.png";

import {dataProduct} from '../../data/product';
export default function AllOrder() {
    const navigate = useNavigate();
    const handleDetails = useCallback((e) => {
        e.preventDefault();
        navigate("/user/order-details");
    }, []);
    return (
        <>
            <div className="search-container mt-2">
                <div className="input-group">
                    <div
                        className="input-group-prepend"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 0px 6px 12px",
                        }}
                    >
                        <i style={{ fontSize: 18 }} className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm đơn hàng theo 'Mã đơn hàng' hoặc 'Tên sản phẩm'"
                        style={{}}
                    />
                </div>
            </div>
            <div className="container-successful mt-2">
                <div className="icon-car">
                    {/* <span> */}
                    <i className="fa-solid fa-car-side" style={{color: "#018576"}}></i>
                    {/* </span> */}
                </div>
                <div className="text-successful">
                    <p className="text">Giao hàng và trả hàng thành công</p>
                </div>
            </div>

            <div className="container-product" style={{paddingBottom: 50}}>
                <div className="content">
                    {Array.from({length: 2}).map((_,idx) => (
                        <div key={idx} className="product-item" style={{ padding: 10, borderBottom: "1px solid #DDDDDD" }}>
                            <div className="product-detail">
                                <div className="product-left">
                                    <div className="product-img">
                                        <img src={dataProduct[idx].img} alt="product img1" />
                                    </div>
                                    <div className="info-product">
                                        <div className="text-title">
                                            <p className="prod_name">{dataProduct[idx].name}</p>
                                        </div>
                                        <div className="text-type-size prod_desc">
                                            <p style={{fontSize: 15, fontWeight: 500, color: "#666"}}>Phân loại: Trắng, Size M</p>
                                        </div>
                                        <div className="text-number-product prod_desc">
                                            <p style={{fontSize: 15, fontWeight: 500, color: "#666"}}>Số lượng: 1</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-right product-price d-flex col-6">
                                    <div className="old_price">
                                        <p style={{fontSize: 14, fontWeight: 500, color: "#333"}}>{dataProduct[idx].oldPrice}</p>
                                    </div>
                                    <div className="price">
                                        <p style={{fontSize: 18, fontWeight: 600, color: "#333"}}>{dataProduct[idx].price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                    {/* <div className="product-item" style={{ padding: 10, borderBottom: "1px solid #DDDDDD" }}>
                        <div className="product-detail">
                            <div className="product-left">
                                <div className="product-img">
                                    <img src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product">
                                    <div className="text-title">
                                        <p>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="text-number-product">
                                        <p>Số lượng: 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-right product-price">
                                <div className="old_price">
                                    <p>238.000đ</p>
                                </div>
                                <div className="price">
                                    <p>115.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="order-options">
                        <div className="common-option">
                            <div className="order-total d-flex justify-content-end align-item-center">
                                <div className="order-total-title">
                                    <label style={{ margin: 0, fontSize: 15, fontWeight: 500, color: "#333" }}>Tổng tiền:</label>
                                </div>
                                <div className="order-total-price">
                                    <span className="vlaue-summary">243.000đ</span>
                                </div>
                            </div>
                            <div className="btn-option d-flex justify-content-end" style={{ gap: 10 }}>
                                <button
                                    onClick={(e) => handleDetails(e)}
                                    type="submit"
                                    className="btn btn-active-greyish"
                                    style={{ height: 38, width: 190, justifyContent: "center", alignItems: "center", display: "flex", fontSize: 16, fontWeight: 600, color: "#666" }}
                                >
                                    <a href="">Xem Chi Tiết</a>
                                </button>

                                <button
                                    // disabled="disabled"
                                    className="btn btn-active-darkgreen"
                                    style={{ height: 38, width: 190, justifyContent: "center", alignItems: "center", display: "flex", fontSize: 16, fontWeight: 600 }}
                                >
                                    Đánh Giá
                                </button>
                                <button
                                    // disabled="disabled"
                                    className="btn btn-active-darkgreen"
                                    style={{ height: 38, width: 190, justifyContent: "center", alignItems: "center", display: "flex", fontSize: 16, fontWeight: 600 }}
                                >
                                    Thuê Lại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
