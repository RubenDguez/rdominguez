import { Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../../theme/Color';

export interface ICodingMockup {
  codingPhrases: string[];
}

export const CodingMockup = ({ codingPhrases }: ICodingMockup) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [substring, setSubstring] = useState(7);
  const [opacity, setOpacity] = useState(1);
  const color = useContext(ColorContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubstring(7);
      setOpacity(1);

      if (currentPhrase < codingPhrases.length - 1) {
        setCurrentPhrase((current) => current + 1);
      } else {
        setCurrentPhrase(0);
      }
    }, 4500);
    return () => {
      clearTimeout(timer);
    };
  }, [codingPhrases, currentPhrase]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (substring < `${codingPhrases[currentPhrase]}`.length) {
        setSubstring((prev) => prev + 1);
        setPhrase(`${codingPhrases[currentPhrase]}`.substring(0, substring));
      }
    }, 120);
    return () => {
      clearTimeout(timer);
    };
  }, [codingPhrases, currentPhrase, substring]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (opacity === 1) setOpacity(0);
      else setOpacity(1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Box sx={{ fontFamily: 'monospace' }}>
      <span>&#60;</span>
      <span style={{ color: `${color}` }}>
        <i>code</i>
      </span>
      <span>&#62;</span>
      <div
        style={{
          display: 'inline',
          backgroundColor: 'rgba(50,50,255,0.5)',
          padding: '0.3rem',
          borderRadius: '4px',
        }}
      >
        <span>{phrase}</span>
        <span
          style={{
            fontWeight: 'bolder',
            opacity: `${opacity}`,
            transition: 'ease-in-out 100ms',
            backgroundColor: 'rgba(0,255,0,0.65)',
            color: 'transparent',
            maxWidth: '3px',
            padding: 0,
            marginLeft: '4px',
          }}
        >
          |
        </span>
      </div>
      <span>&#60;/</span>
      <span style={{ color: `${color}` }}>
        <i>code</i>
      </span>
      <span>&#62;</span>
    </Box>
  );
};
