import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

interface Props {
    showHomeAnimation: boolean;
    setShowHomeAnimation: (show: boolean) => void;
  }

const TypingEffect = ({showHomeAnimation, setShowHomeAnimation}: Props) => {
  const initialText = 'Console.WriteLine("Hello World!");';
  const finalText = '//Saebastion Cole';

  const [displayText, setDisplayText] = useState('');
  const [step, setStep] = useState<'typing' | 'deleting' | 'final'>('typing');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!showHomeAnimation) {
      setDisplayText(finalText)
    }
    else {
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
    } else if (step === 'final' && index === finalText.length) {
      // Animation finished, only run once
      setShowHomeAnimation(false);
    }
    }
    

    return () => clearTimeout(timeout);
  }, [index, step, showHomeAnimation, setShowHomeAnimation]);

  if (!showHomeAnimation && displayText === '') return null;

  return (
    <div style={{ width: '100%' }}>
      <Typography variant="h5" fontFamily="'Source Code Pro', monospace">
        {displayText}
        <span className="blinking-cursor">|</span>
      </Typography>
    </div>
  );
};
export default TypingEffect;
