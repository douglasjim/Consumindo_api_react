import React,{ useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';



  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="danger" light expand="md">
          <NavbarBrand href="/">News</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Eventos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/douglasjim?tab=repositories">My GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Douglas S&C</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Header;