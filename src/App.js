export const has = (obj, path) => typeof get(obj, path) !== 'undefined';

export const get = (obj, path) => path.split('.').reduce(
	(accumulator, cur, ind, arr) => {
		if (typeof accumulator === 'undefined') {
			return undefined;
		}

		if (accumulator === null) {
			return undefined;
		}

		if (typeof accumulator[cur] === 'undefined') {
			return undefined;
		}

		if (accumulator[cur] === null) {
			if (arr.length === ind + 1) {
				return null;
			}

			return undefined;
		}

		return accumulator[cur];
	},
	obj
);
