import React from "react";
import { useState, useEffect } from "react";
import styles from "./Animation.module.scss";
import cn from "classnames";

export function Slide(props) {
	return (
		<Animation name={`slide-${props.direction}`} {...props} />
	);
}

function Animation(props) {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<>
			{React.Children.map(props.children, child =>
				React.cloneElement(child, {
					...child.props,
					className: cn(child.props.className, styles[`${props.name}`], {
						[styles.in]: loaded
					})
				})
			)}
		</>
	);
}