/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#212936",
                secondary: "#652CD1",
                accentBg: "#121826",
                whiteText: "#E5E7EB",
                accentText: "#4D5562",
                labelText: "#A1A1A9",
                buttonColour: "linear-gradient(#845EEE, #652CD1)",
                error: "#FF4D4D",
                errorBg: "#42323b",
                radioBg: "#394150",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
