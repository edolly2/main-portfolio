import '../assets/typography/typography.css';

import { CgClose, CgMenuGridO } from 'react-icons/cg';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
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

const TopNavListItem = styled.li`
  padding: 0 4px;
  :hover {
    cursor: pointer;
    color: rgb(75, 161, 197);
    background-color: rgba(176, 32, 73, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 4px;
  }
`;

const TopNavBarSm = styled.div`
  display: none;
  height: 100%;
  position: relative;
  align-items: center;
  /* justify-content: center; */
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 2px solid rgba(158, 158, 158, 0.09);
  border-bottom: 2px solid rgba(58, 58, 58, 0.09);
  box-shadow: 5px 20px 20px black;
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
    color: rgb(75, 161, 197);
    background-color: rgba(176, 32, 73, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 4px;
  }
`;

const TitleSm = styled.h1`
  text-align: center;
  width: 100%;
  margin-left: auto;
  font-family: 'Monday Routines';
  text-shadow: 2px 2px 2px black, -2px 2px 2px black, 2px -2px 2px black,
    1px 2px 2px black, 2px 1px 2px black, -1px 2px 2px black, 2px -1px 2px black,
    1px -2px 2px black, -2px 1px 2px black, -1px -2px 2px black,
    -2px -1px 2px black, 1px 1px 2px black, -1px -1px 2px black,
    -1px 1px 2px black, 1px -1px 2px black, 0px 2px 2px black, 2px 0px 2px black,
    -2px 0px 2px black, 0px -2px 2px black, 0px 1px 2px black, 1px 0px 2px black,
    0px -1px 2px black, -1px 0px 2px black, 0px 0px 2px black,
    6px 6px 6px rgba(176, 32, 73, 0.5), -6px 6px 6px rgba(176, 32, 73, 0.5),
    6px -6px 6px rgba(176, 32, 73, 0.5), 1px 6px 6px rgba(176, 32, 73, 0.5),
    6px 1px 6px rgba(176, 32, 73, 0.5), -1px 6px 6px rgba(176, 32, 73, 0.5),
    6px -1px 6px rgba(176, 32, 73, 0.5), 1px -6px 6px rgba(176, 32, 73, 0.5),
    -6px 1px 6px rgba(176, 32, 73, 0.5), -1px -6px 6px rgba(176, 32, 73, 0.5),
    -6px -1px 6px rgba(176, 32, 73, 0.5), 1px 1px 6px rgba(176, 32, 73, 0.5),
    -1px -1px 6px rgba(176, 32, 73, 0.5), -1px 1px 6px rgba(176, 32, 73, 0.5),
    1px -1px 6px rgba(176, 32, 73, 0.5), 0px 6px 6px rgba(176, 32, 73, 0.5),
    6px 0px 6px rgba(176, 32, 73, 0.5), -6px 0px 6px rgba(176, 32, 73, 0.5),
    0px -6px 6px rgba(176, 32, 73, 0.5), 0px 1px 6px rgba(176, 32, 73, 0.5),
    1px 0px 6px rgba(176, 32, 73, 0.5), 0px -1px 6px rgba(176, 32, 73, 0.5),
    -1px 0px 6px rgba(176, 32, 73, 0.5), 0px 0px 6px rgba(176, 32, 73, 0.5),
    5px 5px 10px black;
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

  // const windowSize = () => {
  //   if (window.innerWidth >= 768) {
  //     setHamMenuActive(!hamMenuActive);
  //   }
  // };
  // windowSize();
  return (
    <>
      <TopNavBar>
        <TopNavList style={{ marginRight: 'auto' }}>
          <TopNavListItem>
            <Link className='link' to='/'>
              Home
            </Link>
          </TopNavListItem>
          <TopNavListItem>
            <Link className='link' to='/bio'>
              Bio
            </Link>
          </TopNavListItem>
          <TopNavListItem>
            <Link className='link' to='/skills'>
              Skills
            </Link>
          </TopNavListItem>
          <TopNavListItem>
            <Link className='link' to='/projects'>
              Projects
            </Link>
          </TopNavListItem>
          <TopNavListItem>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </TopNavListItem>
        </TopNavList>
        <div className='logo-lg-container'>
          <Link className='link' to='/'>
            <img className='logo-lg' src={Logo} alt='logo' />
          </Link>
        </div>

        <TopNavList style={{ marginLeft: 'auto' }}>
          <TopNavListItem>
            <Link className='link' to='/blog'>
              Blog
            </Link>
          </TopNavListItem>
          <TopNavListItem>
            <Link className='link' to='/resources'>
              Resources
            </Link>
          </TopNavListItem>
          <TopNavListItem>Website</TopNavListItem>
        </TopNavList>
      </TopNavBar>
      <TopNavBarSm>
        {whichIcon}
        <TitleSm>Eric Dollinger</TitleSm>
      </TopNavBarSm>
      <TopNavMenuSm
        style={{
          display: hamMenuActive ? 'flex' : 'none',
        }}
      >
        <div className='logo-sm-container'>
          <img className='logo-sm' src={Logo} alt='logo' />
        </div>
        <TopNavListSm>
          <TopNavListItemSm>
            <Link className='link' exact to='/'>
              Home
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>
            <Link className='link' to='/bio'>
              Bio
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>
            <Link className='link' to='/skills'>
              Skills
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>
            <Link className='link' to='/projects'>
              Projects
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </TopNavListItemSm>
        </TopNavListSm>
        <TopNavListSm>
          <TopNavListItemSm>
            <Link className='link' to='/blog'>
              Blog
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>
            <Link className='link' to='/resources'>
              Resources
            </Link>
          </TopNavListItemSm>
          <TopNavListItemSm>Website</TopNavListItemSm>
        </TopNavListSm>
      </TopNavMenuSm>
    </>
  );
};

export default TopNav;
