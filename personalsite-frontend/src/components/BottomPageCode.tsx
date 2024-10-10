import React from 'react';
import { Typography } from '@mui/material';



const BottomPageCode = () => {

  return (
    <div className='code-container'>
                <div className='code-line2'>
                    <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                        &#125;
                    </Typography>
                </div>
                <div className='code-line1'>
                    <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                        &#125;<span className='blinking-cursor'></span>
                    </Typography>
                </div>
            </div>
  );
};

export default BottomPageCode;
