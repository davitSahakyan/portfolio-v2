"use client"
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ProgressCircle.css'
import { useEffect, useState } from "react";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number, text: string },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >{`${props.text ? props.text   : props.value + '%'}`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({startValue, endValue, finalTextShown}: {startValue: number, endValue: number, finalTextShown: string}) {
    const [progress, setProgress] = useState(startValue);

    useEffect(() => {
        const timer = setInterval(() => {
          
          setProgress((prevProgress) => (prevProgress >= endValue ? endValue : prevProgress + 10));
        }, 30);
        return () => {
          clearInterval(timer);
        };
      }, [endValue]);

  return <CircularProgressWithLabel value={progress} text={finalTextShown}/>;
}