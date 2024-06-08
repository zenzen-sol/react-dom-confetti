import { confetti } from "dom-confetti";
import type React from "react";
import { useEffect, useRef } from "react";

type ConfettiConfig = {
	angle?: number;
	spread?: number;
	width?: string;
	height?: string;
	duration?: number;
	dragFriction?: number;
	stagger?: number;
	startVelocity?: number;
	elementCount?: number;
	decay?: number;
	colors?: string[];
	random?: () => number;
};

type ConfettiProps = {
	active: boolean;
	config?: ConfettiConfig;
	className?: string;
	style?: React.CSSProperties;
};

const Confetti = (props: ConfettiProps) => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (props.active) {
			confetti(containerRef.current, props.config);
		}
	}, [props.active, props.config]);

	return (
		<div
			className={props.className}
			style={
				props.style || {
					position: "relative",
				}
			}
			ref={containerRef}
		/>
	);
};

export default Confetti;
