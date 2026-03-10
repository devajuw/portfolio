export const sharedViewport = {
	once: false,
	amount: 0.15,
	margin: "0px",
};

export const inViewMotionProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: sharedViewport,
};

export const fadeDown = {
	hidden: { opacity: 0, y: -24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeLeft = {
	hidden: { opacity: 0, x: -28 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeRight = {
	hidden: { opacity: 0, x: 28 },
	visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: "easeOut" } },
};

export const zoomInUp = {
	hidden: { opacity: 0, y: 28, scale: 0.96 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const flipDown = {
	hidden: { opacity: 0, rotateX: -25, y: -18, transformPerspective: 800 },
	visible: {
		opacity: 1,
		rotateX: 0,
		y: 0,
		transformPerspective: 800,
		transition: { duration: 0.75, ease: "easeOut" },
	},
};

export const flipUp = {
	hidden: { opacity: 0, rotateX: 25, y: 18, transformPerspective: 800 },
	visible: {
		opacity: 1,
		rotateX: 0,
		y: 0,
		transformPerspective: 800,
		transition: { duration: 0.75, ease: "easeOut" },
	},
};

