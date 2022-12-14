import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TopMenu from '../../components/Menu/TopMenu';
import {openToggle, closeToggle, openSearch, closeSearch, openSearchmb, closeSearchmb} from './search'
const Header = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/top_menu"
        }).then(res => setMenu(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div className="header-pc">
                <div className="header">
                    <a href="/#" target="">
                        <img src="./images/top_logo.png" alt="" />
                    </a>
                </div>
                <div className="nav-header">
                    <div className="container nav">
                        <div className="nav-left">
                            <ul>
                                <li style={{ marginTop: 8 }}>
                                    <a href="/#" target="">
                                        <img src="./images/pc_logo.png" alt="" />
                                    </a>
                                </li>

                                {
                                    menu && menu.map(item => <TopMenu key={item.banner_seq} topMenu={item} />)
                                }

                            </ul>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <div className="form-search-pc">
                                        <form acction="">
                                            <input
                                                type="text"
                                                className="input-search-pc"
                                                name="search"
                                                placeholde=""
                                            />
                                            <button type="button" className="icon-search" />
                                        </form>
                                    </div>
                                </li>
                                <li>
                                    <a href="/#" target="">
                                        ????????????
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" target="">
                                        ?????????
                                    </a>
                                </li>
                            </ul>
                            <button
                            type="button"
                            className="btn-search-tablet icon-search"
                            onClick={()=> openSearch()}
                        />
                            <div id="myOverlay" className="overlay">
                                <span
                                    className="closebtn"
                                    onClick={()=> closeSearch()}
                                    title="Close Overlay"
                                >
                                    ??
                                </span>
                                <div className="overlay-content">
                                    <form action="/action_page.php">
                                        <input type="text" placeholder="Search.." name="search" />
                                        <button type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header mb */}
            <div className="header-mb">
                <div id="top-mb" className="top-nav-mb">
                    <div className="logo-mb">
                        <img src="images/pc_logo.png" alt="" />
                    </div>
                    <div className="btn-toggle">
                        <button id="open-toggle" type="button" className="toggle-open icon-toggle" onClick={() => openToggle()}></button>
                    </div>
                    <div className="icon-right-top">
                        <button type="button" className="icon-search-mb" onClick={() => openSearchmb()}></button>
                        <button type="button" className="icon-cart-mb"></button>
                    </div>
                    <div id="toggle-search" className="overlay">
                        <span className="closebtn" onClick={()=> closeSearchmb()} title="Close Overlay">??</span>
                        <div className="overlay-content">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit" ></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="nav-mb" className="nav-mb">
                    <ul>
                        {
                            menu && menu.map(item => <TopMenu key={item.banner_seq} topMenu={item} />)
                        }
                    </ul>
                </div>
                <div id="div-toggle-mb" className="toggle-mb">

                    <span className="close-toggle" onClick={()=> closeToggle()}>x</span>
                    <div className="toggle-top">
                        <div className="logo">
                            <img src="images/pc_logo.png" alt="" />
                        </div>
                        <div className="icon-app">
                            <p className="txt">??? ????????????</p>
                            <button type="button" className="icon-android"></button>
                            <button type="button" className="icon-ios"></button>
                        </div>
                    </div>
                    <div className="btn-login-toggle">
                        <button type="button" className="btn-toggle-group btn-login-mb">?????????</button>
                        <button type="button" className="btn-toggle-group btn-sign-mb">????????????</button>
                    </div>
                    <div className="icon-service-mb">
                        <ul>
                            <li className="icon-cart-toggle"><a href="/#">????????????</a></li>
                            <li className="icon-deliver"><a href="/#">??????/??????</a></li>
                            <li className="icon-user"><a href="/#">???????????????</a></li>
                            <li className="icon-cs"><a href="/#">????????????</a></li>
                        </ul>
                    </div>
                    <div className="cate-toggle">
                        <ul>
                            <li className="icon-sale"><a href="/#">SALE</a></li>
                            <li className="icon-pet"><a href="/#">PET</a></li>
                            <li className="icon-concept"><a href="/#">?????????</a></li>
                            <li className="icon-new"><a href="/#">?????????</a></li>
                            <li className="icon-best"><a href="/#">?????????</a></li>
                        </ul>
                    </div>
                    <div className="list-icon-cate-mb">
                        <h4>????????????</h4>
                        <ul>
                            <li><a href="/#"><img src="images/bed1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/kids1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/cutton1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/lug1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/kitchen1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/mattress1.png" alt="" /></a>
                                <p>????????????</p>
                            </li>
                            <li><a href="/#"><img src="images/homedeco1.png" alt="" /></a>
                                <p>?????????</p>
                            </li>
                            <li><a href="/#"><img src="images/p1.png" alt="" /></a>
                                <p>???</p>
                            </li>
                            <li><a href="/#"><img src="images/bath1.png" alt="" /></a>
                                <p>??????</p>
                            </li>
                            <li><a href="/#"><img src="images/Backgroundcopy1.png" alt="" /></a>
                                <p>????????????</p>
                            </li>
                        </ul>
                    </div>
                    <div className="list-icon-bottom-mb">
                        <ul>
                            <li className="icon-special"><a href="/#">?????????</a></li>
                            <li className="icon-community"><a href="/#">????????????</a></li>
                            <li className="icon-push"><a href="/#">????????????</a></li>
                            <li className="icon-setting"><a href="/#">????????????</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
