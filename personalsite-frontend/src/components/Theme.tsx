import { createTheme } from '@mui/material/styles';

/*
*   Theme
*   Theme is the setup for MUI materials.
*   This file dictates how the MUI materials layout for the entire site is setup
*
*/
const Theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Custom border radius
                    padding: '10px 20px', // Custom padding
                },
                contained: {
                    backgroundColor: 'transparent', // Make sure the background is transparent
                    color: '#C5C3C7', // Custom text color
                    '&:hover': {
                        backgroundColor: '#38d197', // Hover effect
                    },
                },
                outlined: {
                    borderColor: '#42f5b0', // Custom border color for outlined buttons
                    color: '#C5C3C7', // Custom text color
                    '&:hover': {
                        borderColor: '#38d197', // Hover effect for outlined buttons
                    },
                },
                text: {
                    color: '#ffffff', // Custom text button color
                    backgroundColor: 'transparent', // Make sure the background is transparent
                    '&:hover': {
                        backgroundColor: '#1f2833', // Custom hover background for text buttons
                        color: '#42f5b0', // Hover text color change
                    },
                },
            },
        },
    },
});

export default Theme;
