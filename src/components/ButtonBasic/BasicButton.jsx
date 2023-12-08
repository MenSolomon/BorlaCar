import { Button } from '@mui/material';
import React from 'react';

const BasicButton = ({ innerhtml, onClick, startIcon, type, endIcon, sx }) => {
  return (
    <>
      <Button   
        variant="contained"
        onClick={onClick}
        startIcon={startIcon}
        type={type}
        endIcon={endIcon}
        sx={{
          backgroundColor: '#fff', // Set the background color to #fff
          borderRadius: '8px', // Set the border-radius to 8px (you can adjust the value)
        }}
      >
        {innerhtml}
      </Button>
    </>
  );
};

export default BasicButton;
