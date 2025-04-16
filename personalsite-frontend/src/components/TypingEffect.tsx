import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const TypingEffect = () => {
  const initialText = 'Console.WriteLine("Hello World!");';
  const finalText = '//Saebastion Cole';

  const [displayText, setDisplayText] = useState('');
  const [step, setStep] = useState<'typing' | 'deleting' | 'final'>('typing');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;


    if (step === 'typing' && index < initialText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + initialText[index]);
        setIndex(index + 1);
      }, 50);
    } else if (step === 'typing' && index === initialText.length) {
      timeout = setTimeout(() => {
        setStep('deleting');
        setIndex(initialText.length);
      }, 1000);
    } else if (step === 'deleting' && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 30);
    } else if (step === 'deleting' && index === 0) {
      timeout = setTimeout(() => {
        setStep('final');
        setIndex(0);
      }, 300);
    } else if (step === 'final' && index < finalText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + finalText[index]);
        setIndex(index + 1);
      }, 75);
    }

    return () => clearTimeout(timeout);
  }, [index, step]);

  return (
    <Typography variant="h5" fontFamily="'Source Code Pro', monospace">
      {displayText}
      <span className="blinking-cursor">|</span>
    </Typography>
  );
};
export default TypingEffect;
