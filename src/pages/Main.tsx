import React from 'react';
import Header from './../components/Header';

export default function Main() {
  return (
    <div>
      <Header></Header>
      <div>
        <textarea>description for mathematics</textarea>
        <div css={{ backgroundColor: '#bbbbbb', width: 250, height: 250 }}>description에 대한 사진</div>
      </div>
    </div>
  );
}
