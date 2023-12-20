import { Button } from '@mui/material';
import React from 'react';




const BasicButton = ({borderRadius, width, backgroundColor, children,...rest  }) => {
  return (
    <>
     <Button
      variant="contained"
      sx={{
        borderRadius: borderRadius || '3em', // Set default border radius if not provided
        width: width ||'90px', // Set default width if not provided
        backgroundColor: backgroundColor || 'rgba(255, 255, 255, 0.3)', // Set default background color if not provided
        backdropFilter: 'blur(30px)', // Adding a blur effect
        border: '1px solid #000',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change background color on hover
        },
      }}
      {...rest}
    >
      {children}
    </Button>
    </>
  );
};

export default BasicButton;
