import React from 'react';
import TopNav from './TopNav';
import styled from 'styled-components';
import { useState } from 'react';
// STYLES -->
const TopHeader = styled.header`
  color: white;
  padding: 2rem 4rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  min-height: 70px;
  margin: 2rem 2rem 0 2rem;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
  /* position: relative; */
`;
// <-- STYLES

const Header = () => {
  return (
    <TopHeader>
      <TopNav />
    </TopHeader>
  );
};

export default Header;
