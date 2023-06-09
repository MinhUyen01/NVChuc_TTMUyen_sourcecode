import React from "react";
import { Link } from "react-router-dom";
export default function Address() {
    return (
        <>
            {/**breadcrumbs  */}
            {/** end breadcrumbs  */}

            <div className="container" style={{maxWidth: "75%"}}>
                <div className="mb-2 p-2 border d-flex justify-content-center align-items-center" style={{cursor: "pointer"}}>
                    <i style={{ fontSize: 15, color: "#888888" }} className="mr-2 fa-solid fa-plus"></i>
                    <span style={{color: "#00BBA6", fontWeight: 600, fontSize: 18 }}>Thêm địa chỉ mới</span>
                </div>
                <div className="border" style={{padding: 20}}>
                    <div className="d-flex justify-content-between">
                        <span style={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: 16,
                        }}>Trần Thị Minh Uyên</span>
                        <input
                            type="button"
                            value="Chỉnh sửa"
                            className="btn btn-small btn-link col-md-2"
                            style={{fontStyle: "normal",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: 16, color: "#00BBA6", border: "none" }}
                        />
                    </div>
                    <span style={{  fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: 15}}>Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng</span>
                    <br />
                    <span style={{fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: 15}}>Điện thoại: 0967177830</span>
                    <br />
                    <br />
                    <button
                        className="btn btn-lg btn-outline-light text-align-center"
                        type="button"
                        style={{fontStyle: "normal",
                        height: 38,
                        width: 185,
                        padding: "5px",
                            fontWeight: 600,
                            fontSize: 16, borderColor: "#00BBA6", color: "#00BBA6" }}
                    >
                        Địa chỉ mặc định
                    </button>
                </div>
                <div className="border" style={{padding: 20}}>
                <div className="d-flex justify-content-between">
                        <span style={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: 16,
                        }}>Trần Thị Minh Uyên</span>
                        <div className="d-flex col-4 justify-content-between">
                            
                            <input
                                type="button"
                                value="Xoá"
                                className="btn btn-small btn-link col-6"
                                style={{fontStyle: "normal",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: 16, color: "#00BBA6", border: "none" }}
                            />
                            <input
                                type="button"
                                value="Chỉnh sửa"
                                className="btn btn-small btn-link col-6 p-0"
                                style={{fontStyle: "normal",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: 16, color: "#00BBA6", border: "none" }}
                            />
                        </div>
                    </div>
                    <span style={{  fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: 15}}>Địa chỉ: Đường Mai Đăng Chơn, Phường Hòa Quý, Quận Ngũ Hành Sơn, Đà Nẵng</span>
                    <br />
                    <span style={{fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: 15}}>Điện thoại: 0967177830</span>
                    <br />
                    <br />
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn btn-outline-light text-align-center"
                            style={{ cursor:"pointer", height: 38, width: 225, padding: 5, borderColor: "#E1E1E1", color: "#333333", fontSize: 16, fontWeight: 500 }}
                        >
                            Đặt làm địa chỉ mặc định
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
