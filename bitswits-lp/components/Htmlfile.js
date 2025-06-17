// components/HTMLFileComponent.js

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Htmlfile = () => {

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('/myhtmlfile.html');
        const text = await response.text();
        setHtmlContent(text);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Htmlfile;
