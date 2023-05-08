const hasOwn = {}.hasOwnProperty;

const classNames = (...classnames: string[]): string => {
	let classes = [];

	for (let i = 0; i < classNames.length; i++) {
		let arg = classnames[i];
		if (!arg) continue;

		let argType = typeof arg;

		if (argType === "string" || argType === "number") {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			if (arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			}
		} else if (argType === "object") {
			if (
				arg.toString !== Object.prototype.toString &&
				!arg.toString.toString().includes("[native code]")
			) {
				classes.push(arg.toString());
				continue;
			}

			for (let key of arg) {
				// @ts-ignore
                // TODO: fix ts-ignore
                if (hasOwn.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(" ");
};

export default classNames;
