import React from "react";
import cn from "classnames";
import styles from "./List.module.scss";

export const List = React.forwardRef(({ className, children, ...props }, ref) => {
	const classes = cn(styles.root, className);

	return (
		<section ref={ref} className={classes} {...props}>
			<ul className={styles.list}>{children}</ul>
		</section>
	);
});
