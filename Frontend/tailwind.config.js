/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            body: ['"ObelixPro"'],
        },
        extend: {
            colors: {
                primary: '#2efff8',
                secondary: '#6fff68',
                lsecondary: '#55ece5',
                origin: '#04e7ce',
                strongBlue: '#0107c9',
                pressed: ' #00E1FF',
            },
            screens: {
                xs: '425px',
            },
        },
    },
    plugins: [],
};
