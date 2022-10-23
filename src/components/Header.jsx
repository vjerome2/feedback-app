import PropTypes from "prop-types";

const Header = ({ text}) => {
	return (
		<header>
			<div className="container">
				<h2>{text}</h2>
				
			</div>
		</header>
	);
};

Header.PropType = {
	text: PropTypes.string.isRequired,
};

Header.defaultProps = {
    text: "Feedback UI"
};

export default Header;
