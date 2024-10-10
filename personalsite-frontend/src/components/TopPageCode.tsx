import React from 'react';
import { Typography } from '@mui/material';



const TopPageCode = () => {

  return (
    <div className='code-container'>
                <div className='code-line1'>
                    <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                        class <span className='secondary-code'>Program </span>&#123;
                    </Typography>
                </div>
                <div className='code-line2'>
                    <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                        static void <span className='secondary-code'>Main</span>&#40;string&#91;&#93; args&#41; &#123;
                    </Typography>
                </div>
            </div>
  );
};

export default TopPageCode;