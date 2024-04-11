import logo from "../images/logo.svg";
import search from "../images/search.svg";
import drop from "../images/drop.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../env";

function Header() {
	const auth = JSON.parse(localStorage.getItem("auth"));

	const handleLogout = async () => {
		try {
			await axios.get(API_URL + "/register/logout", {
				headers: {
					Authorization: "Bearer " + auth,
				},
			});
		} catch (error) {
			// Handle login error
			console.log(error);
		}
		localStorage.removeItem("auth");
		alert("Logout successful");
		window.location.href = "/login";
	};

	return (
		<div class="header">
			<div class="common-container">
				<div class="header-wrapper">
					<div class="logo">
						<a href="#">
							<img src={logo}></img>
						</a>
					</div>
					<div class="links">
						<ul>
							<li>
								<Link to="/">الرئيسية</Link>
							</li>
							<li>
								<Link to="/courses">دوراتنا</Link>
								{/* <img src={drop} class="drop"></img> */}
							</li>
							{/* <li><a href="#">About Us</a></li> */}
							{/* <li><a href="#">How it Works</a></li> */}
							<li>
								<a href="/contact">تواصل معنا</a>
							</li>
							{/* <li><a href="#">Pricing</a></li> */}
						</ul>
						<div class="login-side">
							{auth ? (
								<>
									<a href="#">
										<span onClick={handleLogout}>Logout</span>
									</a>
								</>
							) : (
								<>
									<a href="#">
										<Link to="/register">Register</Link>
									</a>
									<span></span>
									<a href="#">
										<Link to="/login">Login</Link>
									</a>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
