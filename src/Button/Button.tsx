import React, {ComponentPropsWithoutRef, FC, ReactNode} from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

export enum EButtonSize {
	XS = "XS",
	MD = "MD"
}

export enum EButtonTheme {
	PRIMARY = "PRIMARY",
	SECONDARY = "SECONDARY",
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	size: EButtonSize;
	theme?: EButtonTheme;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, size, theme= EButtonTheme.PRIMARY, ...props}) => {
	const { className } = props;
	const themeClassname = theme === EButtonTheme.PRIMARY ? styles.theme_primary
		:  theme === EButtonTheme.SECONDARY ? styles.theme_secondary
		: "";

	const sizeClassname = size === EButtonSize.XS ? styles.size_xs
		:  size === EButtonSize.MD ? styles.size_md
		: "";

	return (
		<button {...props}
				className={cx(className || "", styles.theme, themeClassname, styles.size, sizeClassname)}
		>
			{children}
		</button>
	);
};

export default Button;
