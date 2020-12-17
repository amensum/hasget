export const has = (obj, path) => path.split('.').every(
	current => {
		obj = obj[current];
		return typeof obj !== 'undefined' && obj !== null;
	}
);

export const get = (obj, path) => path.split('.').reduce(
	(accumulator, current) => {
		return typeof accumulator === 'undefined' || accumulator === null ? accumulator : accumulator[current];
	},
	obj
);
