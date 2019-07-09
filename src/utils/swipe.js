import { useState, useEffect } from "react";

export function useSwipeOn(element, breakpoint) {
	const [dragging, setDragging] = useState(false);
	const [cursor, setCursor] = useState({ start: 0, offset: 0 });

	const onTouchStart = e => {
		const pageY = e.touches[0].screenY;

		setCursor({
			start: pageY - element.current.offsetTop,
			offset: pageY - element.current.offsetTop
		});

		setDragging(true);
	};

	const onTouchMove = e => {
		const pageY = e.touches[0].screenY;

		setCursor(prev => ({
			...prev,
			offset: pageY - element.current.offsetTop
		}));
	};

	const onTouchEnd = () => {
		setDragging(false);
		setCursor({
			start: 0,
			offset: 0,
		})
	};

	useEffect(() => {
		const el = element.current;
		el.addEventListener("touchstart", onTouchStart, false);
		el.addEventListener("touchmove", onTouchMove, false);
		el.addEventListener("touchend", onTouchEnd, false);

		return () => {
			el.removeEventListener("touchstart", onTouchStart);
			el.removeEventListener("touchmove", onTouchMove);
			el.removeEventListener("touchend", onTouchEnd);
		};
	}, [element]);

	return {
		...cursor,
		dragging,
		res: cursor.offset - cursor.start
	};
}
