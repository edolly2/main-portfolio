import { CgClose, CgMenuGridO } from 'react-icons/cg';
import { useEffect, useState } from 'react';

import React from 'react';
import styled from 'styled-components';

// STYLES -->
const TopNavBar = styled.nav`
  color: white;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TopNavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

const TopNavListItem = styled.li``;

const TopNavBarSm = styled.nav`
  display: none;
  height: 100%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const TopNavMenuSm = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  /* top: 9vw; */
  flex-direction: column;
  /* gap: 3vw; */
  width: 30%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TopNavListSm = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2vw;
  align-items: center;
  border-top: 2px solid white;
`;

const TopNavListItemSm = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5vw 0;
  :hover {
    cursor: pointer;
    background-color: green;
  }
`;

// <-- STYLES

const TopNav = (props) => {
  const [hamMenuActive, setHamMenuActive] = useState(false);
  const whichIcon = !hamMenuActive ? (
    <CgMenuGridO
      className='icons'
      onClick={() => {
        setHamMenuActive(!hamMenuActive);
      }}
    />
  ) : (
    <CgClose
      className='icons'
      onClick={() => {
        setHamMenuActive(!hamMenuActive);
      }}
    />
  );
  return (
    <>
      <TopNavBar>
        <TopNavList style={{ marginRight: 'auto' }}>
          <TopNavListItem>Home</TopNavListItem>
          <TopNavListItem>Bio</TopNavListItem>
          <TopNavListItem>Skills</TopNavListItem>
          <TopNavListItem>Projects</TopNavListItem>
          <TopNavListItem>Contact</TopNavListItem>
        </TopNavList>
        <div>LOGO</div>

        <TopNavList style={{ marginLeft: 'auto' }}>
          <TopNavListItem style={{ marginRight: '20px' }}>Blog</TopNavListItem>
          <TopNavListItem>Resources</TopNavListItem>
        </TopNavList>
      </TopNavBar>
      <TopNavBarSm>{whichIcon}</TopNavBarSm>
      <TopNavMenuSm
        style={{
          display: hamMenuActive ? 'flex' : 'none',
        }}
      >
        <div className='logo-sm'>LOGO</div>
        <TopNavListSm>
          <TopNavListItemSm>Home</TopNavListItemSm>
          <TopNavListItemSm>Bio</TopNavListItemSm>
          <TopNavListItemSm>Skills</TopNavListItemSm>
          <TopNavListItemSm>Projects</TopNavListItemSm>
          <TopNavListItemSm>Contact</TopNavListItemSm>
        </TopNavListSm>
        <TopNavListSm>
          <TopNavListItemSm>Blog</TopNavListItemSm>
          <TopNavListItemSm>Resources</TopNavListItemSm>
        </TopNavListSm>
      </TopNavMenuSm>
    </>
  );
};

export default TopNav;
