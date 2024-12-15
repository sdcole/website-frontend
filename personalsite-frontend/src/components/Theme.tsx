import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Custom border radius
                    padding: '1vw', // Custom padding
                },
                contained: {
                    backgroundColor: 'transparent', // Make sure the background is transparent
                    color: '#C5C3C7', // Custom text color
                    '&:hover': {
                        backgroundColor: '#45A29E', // Hover effect
                    },
                },
                outlined: {
                    borderColor: '#42f5b0', // Custom border color for outlined buttons
                    color: '#C5C3C7', // Custom text color
                    '&:hover': {
                        borderColor: '#45A29E', // Hover effect for outlined buttons
                    },
                },
                text: {
                    color: '#ffffff', // Custom text button color
                    backgroundColor: 'transparent', // Make sure the background is transparent
                    '&:hover': {
                        backgroundColor: '#1f2833', // Custom hover background for text buttons
                        color: '#45A29E', // Hover text color change
                    },
                },
            },
        },
    },
    typography: {
        h2: {
            fontSize: '4rem', // Base font size for large screens
            '@media (max-width:900px)': {
                fontSize: '2.5rem', // Adjust font size for small screens
            },
            '@media (max-width:600px)': {
                fontSize: '2rem', // Adjust font size for medium screens
            },
        },
        h3: {
            fontSize: '3rem', // Base font size for large screens
            '@media (max-width:900px)': {
                fontSize: '1.5rem', // Adjust font size for small screens
            },
            '@media (max-width:600px)': {
                fontSize: '1rem', // Adjust font size for medium screens
            },
        },
        body1: {
            fontSize: '1.25rem', // Base font size for large screens
            '@media (max-width:1200px)': {
                fontSize: '1rem', // Adjust font size for medium screens
            },
            '@media (max-width:1000px)': {
                fontSize: '.9rem', // Adjust font size for medium screens
            },
            '@media (max-width:900px)': {
                fontSize: '.8rem', // Adjust font size for medium screens
            },
            '@media (max-width:800px)': {
                fontSize: '.75rem', // Adjust font size for medium screens
            },
            '@media (max-width:600px)': {
                fontSize: '.5rem', // Adjust font size for small screens
            },
            
        },
    },
});

export default Theme;
