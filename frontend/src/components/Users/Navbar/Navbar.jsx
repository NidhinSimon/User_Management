import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

const UserNavbar = () => {
  const location = useLocation();

  return (
    <Navbar position="static" className="bg-blue-300 border drop-shadow-lg">
      <NavbarBrand>
        <p className="font-bold text-inherit">Nidhin Simon</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={location.pathname === '/'}>
          <Link to="/" color="foreground">
            Users
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/userAdd'}>
          <Link to="/userAdd" color="foreground">
            Add Users
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default UserNavbar;
