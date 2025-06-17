import { useState, useEffect } from 'react';

const Counter = ({ stopNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= stopNumber) {
          clearInterval(timer);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 1);

    return () => {
      clearInterval(timer);
    };
  }, [stopNumber]);

  return <> {count}
  </>;
};

export default Counter;
