import React from 'react';
import TopNav from './TopNav';
import styled from 'styled-components';
import { useState } from 'react';
// STYLES -->
const TopHeader = styled.header`
  color: white;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  min-height: 70px;
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
