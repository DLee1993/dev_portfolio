/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                csBlack: "hsl(30, 3%, 12%)",
                csWhite: "hsl(0, 0%, 94%)",
                csGrey: "hsl(0,0,65)",
                csAccent: "hsl(40,78,61)",
            },
            fontFamily: {
                Manrope: ["Manrope", "sans-serif"],
            },
            fontSize: {
                sm: "var(--font-size-sm)",
                base: "var(--font-size-base)",
                lg: "var(--font-size-lg)",
                xl: "var(--font-size-xl)",
                "2xl": "var(--font-size-2xl)",
                "3xl": "var(--font-size-3xl)",
                "4xl": "var(--font-size-4xl)",
                "5xl": "var(--font-size-5xl)",
            },
        },
    },
    plugins: [],
};
