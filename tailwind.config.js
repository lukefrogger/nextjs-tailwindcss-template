const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#04386E",
					dark: "#032140",
				},
				highlight: "#FFAC2F",
			},
			fontFamily: {
				sans: ["Nunito", ...fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
