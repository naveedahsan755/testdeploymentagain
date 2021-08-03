module.exports = {
    purge: [
        // This is not present inside the default configuration
        // but it's good to build your production application
        // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
        './pages/**/*.js',
    ],
    darkMode: false,
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}