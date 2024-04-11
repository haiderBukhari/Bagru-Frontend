import star from '../images/star.svg';
function Reviews(){
    return(
        <div class="reviews-main">
            <div class="common-container">
                <div class="reviews-main-wrapper same-wrapper">
                    <div class="title-main">
                        <h2>Reviews</h2>
                        <div class="ins-data">
                            <div class="avrg-rating">
                                <p>Average Rating</p>
                                <div class="ratess">
                                    <h2>0</h2>
                                    <div class="title-common">
                                        <ul>
                                            <li><img class="star-img" src={star} alt="star"></img></li>
                                            <li><img class="star-img" src={star} alt="star"></img></li>
                                            <li><img class="star-img" src={star} alt="star"></img></li>
                                            <li><img class="star-img" src={star} alt="star"></img></li>
                                            <li><img class="star-img" src={star} alt="star"></img></li>
                                        </ul>
                                    </div>
                                    <p>0 rating</p>
                                </div>
                            </div>
                            <div class="detail-rating avrg-rating">
                                <p>Detailed Rating</p>
                                <div class="ratess">
                                    <div class="rating-bar">
                                        <span>5</span>
                                        <span class="rating-progress"></span>
                                        <span>0%</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>5</span>
                                        <span class="rating-progress"></span>
                                        <span>0%</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>5</span>
                                        <span class="rating-progress"></span>
                                        <span>0%</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>5</span>
                                        <span class="rating-progress"></span>
                                        <span>0%</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>5</span>
                                        <span class="rating-progress"></span>
                                        <span>0%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;