/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		base: false,
	},
}
