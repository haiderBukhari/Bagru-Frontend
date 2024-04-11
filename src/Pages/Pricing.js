// import check from "../images/check-solid.svg";
import check from "../images/check-solid.svg";
function Pricing() {
    return (
        <div class="pricing">
            <div class="common-container">
                <div class="pricing-wrapper">
                    <h2 className="common-heading">Choose your Pricing Plan</h2>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link active"
                                id="pills-monthly-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-monthly"
                                type="button"
                                role="tab"
                                aria-controls="pills-monthly"
                                aria-selected="true"
                            >
                                Monthly
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="pills-year-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-year"
                                type="button"
                                role="tab"
                                aria-controls="pills-year"
                                aria-selected="false"
                            >
                                Yearly
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="pills-monthly"
                            role="tabpanel"
                            aria-labelledby="pills-monthly-tab"
                        >
                            <div className="payment-subs">
                                <div className="subs-main">
                                    <div>
                                        <h2>Premium</h2>
                                        <p>Go all in one</p>
                                        <h3>
                                            180<sup>NIS</sup><span> /month</span>
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <img src={check} alt="check" />2 Course
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            For 1 month
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            Subject Videos
                                        </li>
                                    </ul>
                                    <button className="view-all">Choose Plan</button>
                                </div>
                                <div className="subs-main">
                                    <div>
                                        <h2>Basic</h2>
                                        <p>Starter</p>
                                        <h3>
                                            89<sup>NIS</sup><span> /month</span>
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <img src={check} alt="check" />1 Course
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            For 1 month
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            Subject Videos
                                        </li>
                                    </ul>
                                    <button className="view-all">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-year"
                            role="tabpanel"
                            aria-labelledby="pills-year-tab"
                        >
                            <div className="payment-subs">
                                <div className="subs-main">
                                    <div>
                                        <h2>Premium</h2>
                                        <p>Go all in one</p>
                                        <h3>
                                            900<sup>NIS</sup><span> /Year</span>
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <img src={check} alt="check" />2 Course
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            For 1 year
                                        </li>
                                        <li>
                                            <img src={check} alt="check" />
                                            Subject Videos
                                        </li>
                                    </ul>
                                    <button className="view-all">Choose Plan</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;