module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                nav: '880px',
                home: '1200px',
            },
            animation: {
                delay: 'delay 0.8s infinite ease-in-out',
                midToTop: 'midToTop 0.8s ease-in-out',
                midToBottom: 'midToBottom 0.8s ease-in-out',
            },
            keyframes: {
                delay: {
                    '0%, 40%, 100%': { transform: 'scaleY(0.05)' },
                    '20%': { transform: 'scaleY(1.0)' },
                },
                midToTop: {
                    '0%': { bottom: '50%' },
                    '100%': { bottom: '100%' },
                },
                midToBottom: {
                    '0%': { top: '50%' },
                    '100%': { top: '100%' },
                },
            },
            backgroundImage: {
                'bg-light': "url('images/bg-light.png')",
                'bg-dark': "url('images/bg-dark.png')",
            },
        },
    },
    plugins: [],
};
