import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
const Setup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { slug } = useParams();
    const navigate = useNavigate();

    const [setup, setSetup] = useState(false);
    const [avatar, setAvatar] = useState(false);

    const nameRef = useRef(null);

    useEffect(() => {
        if (slug === "personal") {
            if (setup) {
                nameRef.current.disabled = false;
            } else {
                nameRef.current.disabled = true;
            }
        }
    }, [setup, slug]);
    return (
        <div className="setUp">
            <div className="setUp_navbar">
                <div
                    onClick={() => {
                        console.log("Here");
                        navigate("/settings/personal");
                    }}
                    className={`setUp_navbar_items ${
                        slug === "personal" ? "active" : ""
                    }`}
                >
                    <i
                        style={{ marginRight: "0.5rem", color: "#FF751F" }}
                        className="fa-solid fa-user"
                    ></i>{" "}
                    Cài đặt tài khoản
                </div>
                <div
                    onClick={() => {
                        navigate("/settings/payment");
                    }}
                    className={`setUp_navbar_items ${
                        slug === "payment" ? "active" : ""
                    }`}
                >
                    <i
                        style={{
                            marginRight: "0.5rem",
                            color: "#FF751F",
                            marginTop: "0.2rem",
                        }}
                        className="fa-solid fa-money-bill"
                    ></i>
                    Thông tin thanh toán
                </div>
            </div>
            {slug === "personal" && (
                <div className="setUp_wrap">
                    <div className="setUp_title">
                        <h2>Thông tin cá nhân</h2>
                    </div>
                    <div className="setUp_name">
                        <div className="setUp_name_navbar">
                            <div className="setUp_name_navbar-title">
                                <span>Họ tên</span>
                            </div>
                            <input
                                ref={nameRef}
                                className="setUp_name_input"
                                type="text"
                                defaultValue={"Minh Quang"}
                                disabled
                            />
                        </div>
                        {!setup ? (
                            <div className="setUp_button">
                                <button
                                    onClick={() => {
                                        setSetup(true);
                                    }}
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                        ) : (
                            <div className="setUp_button">
                                <button
                                    onClick={() => {
                                        setSetup(false);
                                    }}
                                    style={{
                                        marginRight: "1rem",
                                        border: "0.1rem solid #FF751F",
                                        color: "#FF751F",
                                    }}
                                >
                                    Lưu
                                </button>
                                <button
                                    onClick={() => {
                                        setSetup(false);
                                    }}
                                >
                                    Xóa
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="setUp_name">
                        <div className="setUp_name_navbar">
                            <div className="setUp_name_navbar-title">
                                <span>Avatar</span>
                            </div>
                            <div className="setUp_name_recommend">
                                Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG
                                hoặc GIF.
                            </div>
                        </div>
                        <div
                            style={{ cursor: "pointer" }}
                            className="setUp_avatar"
                        >
                            <img
                                onClick={() => {
                                    setAvatar(true);
                                }}
                                src="https://files.fullstack.edu.vn/f8-prod/user_photos/271297/6382d3ddc74f9.jpg"
                                alt="Ảnh đại diện"
                            />
                            {avatar && (
                                <div className="setUp_avatar_upload">
                                    <label htmlFor="avatarImg">
                                        <i className="fa-solid fa-image"></i>
                                    </label>
                                    <input id="avatarImg" type="file" hidden />
                                </div>
                            )}
                        </div>
                        {!avatar ? (
                            <div className="setUp_button">
                                <button
                                    onClick={() => {
                                        setAvatar(true);
                                    }}
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                        ) : (
                            <div className="setUp_button">
                                <button
                                    onClick={() => {
                                        setAvatar(false);
                                    }}
                                    style={{
                                        marginRight: "1rem",
                                        border: "0.1rem solid #FF751F",
                                        color: "#FF751F",
                                    }}
                                >
                                    Lưu
                                </button>
                                <button
                                    onClick={() => {
                                        setAvatar(false);
                                    }}
                                >
                                    Xóa
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="setUp_name">
                        <div className="setUp_name_navbar">
                            <div className="setUp_name_navbar-title">
                                <span>Email</span>
                            </div>
                            <input
                                className="setUp_name_input"
                                type="text"
                                defaultValue={"quangminhnguyen265@gmail.com"}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="setUp_name">
                        <div className="setUp_name_navbar">
                            <div className="setUp_name_navbar-title">
                                <span>UserID</span>
                            </div>
                            <input
                                className="setUp_name_input"
                                type="text"
                                defaultValue={"#123123"}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            )}
            {slug === "payment" && (
                <div className="setUp_payment">
                    <div className="setUp_title">
                        <h2>Hóa đơn</h2>
                    </div>
                    <div className="setUp_payment_table">
                        <div className="setUp_payment_head">
                            <div className="setUp_payment_head_1">Hóa đơn</div>
                            <div className="setUp_payment_head_2">Ngày tạo</div>
                            <div className="setUp_payment_head_3">Số tiền</div>
                            <div className="setUp_payment_head_4">Nội dung</div>
                        </div>
                        <div className="setUp_payment_body">
                            <div className="setUp_payment_body_1">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    to="/"
                                >
                                    1990
                                </Link>
                            </div>
                            <div className="setUp_payment_body_2">
                                12/09/2002
                            </div>
                            <div className="setUp_payment_body_3">$120</div>
                            <div className="setUp_payment_body_4">
                                Trả tiền mua khóa học
                                <Link to="/"> Css, Html</Link>
                                hoặc các khóa học tượng tự như thế
                            </div>
                        </div>
                        <div className="setUp_payment_body">
                            <div className="setUp_payment_body_1">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    to="/"
                                >
                                    1990
                                </Link>
                            </div>
                            <div className="setUp_payment_body_2">
                                12/09/2002
                            </div>
                            <div className="setUp_payment_body_3">$120</div>
                            <div className="setUp_payment_body_4">
                                Trả tiền mua khóa học
                                <Link to="/"> Css, Html</Link>
                                hoặc các khóa học tượng tự như thế
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Setup;