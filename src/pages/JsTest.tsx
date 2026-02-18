import React from 'react';
import { useAppSelector } from '../store/hooks';

const isPalindrome = (x: number | string): boolean => {
  const s = x.toString();
  return s === s.split('').reverse().join('');
};

function JsTest(): JSX.Element {
  const { theme } = useAppSelector((state) => state.app);

  return (
    <div className={`JsTest ${theme}`}>
      <h1>JavaScript Test Page</h1>
      <p>{String(isPalindrome(12321))}</p>
    </div>
  );
}

export default JsTest;
