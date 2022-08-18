import React from 'react';

const Instagram = () => {
    return (
        <div className="insta">
            <div className="row">
                <div className="title-insta">
                    <p>인스타그램</p>
                    <h3>INSTA</h3>
                    <a href="#" className="icon-arrow">전체보기</a>
                </div>
                <div className="img-insta">
                    {/*gird-insta-pc*/}
                    <div className="gird-insta">
                        <div className="item">
                            <a href="#"><img src="images/img-8.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-11.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-9.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-10.png" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-9.png" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-8.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-10.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-9.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-11.png" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-9.png" /></a>
                        </div>
                    </div>
                    {/*gird-insta-mb*/}
                    <div className="gird-insta-mb">
                        <div className="item">
                            <a href="#"><img src="images/img-8.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-11.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-9.png" alt /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-10.png" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-12.png" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-13.png" /></a>
                        </div>
                    </div>
                    <div className="btn-arrow">
                        <button type="button" className="icon-insta">icon-arrow</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Instagram;
