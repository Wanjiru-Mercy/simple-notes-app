/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "white"
                    }
                }
            },
            animation: {
                typing: "typing 5s steps(20) infinite alternate, blink .7s infinite"
            },
            colors: {
                'custom-color': '#FDF5E6',
                'accent-color': '#5F7A8C',
                'hover-color': '#496172',
                'text-color': '#595959',
                'bg-2': '#F6F6F6',
                'rose': '#FF6F61',
                'pastel-red': '#FFC1A1',
                'pastel-orange': '#FFD8A8',
                'pastel-yellow': '#FDFD97',
                'pastel-green': '#A1FFC1',
                'pastel-blue': '#A1E3FF',
                'pastel-indigo': '#B5A1FF',
                'pastel-violet': '#FFA1FF',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
