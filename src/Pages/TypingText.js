import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const text = `Dynamic and driven MERN Stack Developer with hands-on experience, 
  I am always eager to learn and adapt to new technologies. 
  My enthusiasm for innovation and continuous improvement 
  fuels my drive to deliver efficient and impactful solutions.`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <p style={{ fontFamily: 'monospace', fontSize: '16px', whiteSpace: 'pre-wrap' }}>
      {displayedText}
    </p>
  );
};

export default TypingAnimation;
