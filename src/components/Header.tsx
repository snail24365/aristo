import { css } from '@emotion/react';

export default function Header() {
  return (
    <div
      css={{
        color: 'darkorchid',
        backgroundColor: 'lightgray',
      }}>
      <ul css={{ display: 'flex', justifyContent: 'center', padding: '1rem', gap: '1rem' }}>
        <li>Q&A</li>
        <li>자유게시판</li>
      </ul>
    </div>
  );
}
