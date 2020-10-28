/**
 * 
 */

export function getInitials(name) {
	if (name instanceof String) throw Error;
	let re = /(^[A-z])|((?<= )[A-z])/g;
	return name.match(re).join('');
}