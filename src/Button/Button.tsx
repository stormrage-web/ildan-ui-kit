import React, { FC, ReactNode } from "react";
import classNames from "../shared/utils/classnames";
import styles from "./Button.module.scss";

export enum EButtonSize {
	XS = "XS",
	MD = "MD"
}

export enum EButtonTheme {
	PRIMARY = "PRIMARY",
	SECONDARY = "SECONDARY",
}

export interface ButtonProps {
	size: EButtonSize;
	theme?: EButtonTheme;
	children: ReactNode;
	props: HTMLButtonElement;
}

const Button: FC<ButtonProps> = ({ children, size, theme= EButtonTheme.PRIMARY, ...props}) => {
	const { className } = props.props;
	const themeClassname = theme === EButtonTheme.PRIMARY ? styles.theme_primary
		:  theme === EButtonTheme.SECONDARY ? styles.theme_secondary
		: "";

	const sizeClassname = size === EButtonSize.XS ? styles.size_xs
		:  size === EButtonSize.MD ? styles.size_md
		: "";

	return (
		<button {...props}
				// className={classNames(className, styles.theme, themeClassname, styles.size, sizeClassname)}
		>
			{children}
		</button>
	);
};

export default Button;
