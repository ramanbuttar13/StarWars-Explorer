import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Loader.components";
import LoaderImage from '../../static/loader.gif'

const Loader = () => {
	return (
		<Wrapper>
			<img src={LoaderImage} alt="loader"/>
		</Wrapper>
	);
};

export default Loader;
