import { useState, useEffect } from "react";

export function useSwipeOn(element, listener) {
	const [dragging, setDragging] = useState(false);
	const [cursor, setCursor] = useState({ start: 0, offset: 0 });

	const onTouchStart = e => {
		const pageY = e.touches[0].screenY;

		setCursor({
			start: pageY,
			offset: pageY
		});

		setDragging(true);
	};

	const onTouchMove = e => {
		const pageY = e.touches[0].screenY;

		setCursor(prev => ({
			...prev,
			offset: pageY
		}));
	};

	const onTouchEnd = () => {
		setDragging(false);
		setCursor({
			start: 0,
			offset: 0
		});
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

export function useGestures(el, listener, threshold = 0) {
	const { dragging, res } = useSwipeOn(el);

	if (dragging) {
		if (listener.onSwipeUp && res + threshold < 0) listener.onSwipeUp();

		if (listener.onSwipeDown && res - threshold > 0) listener.onSwipeDown();
	}

	return [res, dragging];
}
