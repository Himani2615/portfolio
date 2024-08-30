'use client'

import { Box } from '@chakra-ui/react';
import React from 'react';

interface HeadingProps{
  text:string;
  size?:'small'|'medium'|'large';
}


const Heading:React.FC<HeadingProps> = ({text,size='small'}) =>{
  const headingStyles={
    small:"text-lg",
    medium:"text-xl",
    large:"text-2xl",
  };

  return(
    <Box width="fit-content" >
      <h2 className={`font-bold  ${headingStyles[size]} `}>{text}</h2>
      <div className='mt-2' style={{height:'3px',backgroundColor:'#7986CB'}}>
      </div>
    </Box>
  )
}

export default Heading

