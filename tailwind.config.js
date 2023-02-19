/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		base: false,
	},
}
