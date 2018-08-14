import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './CustomNavbar.css';

export class CustomNavbar extends Component 
{
	render() 
	{
		return (
			<div>
				<Navbar default collapseOnSelect>
			        <Navbar.Header>
			          <Navbar.Brand>
			            <Link to="/">Crick-O-pedia</Link>
			          </Navbar.Brand>
			          <Navbar.Toggle />
			        </Navbar.Header>
			        <Navbar.Collapse>
			          <Nav pullRight>
			            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
			              Home
			            </NavItem>
			            <NavItem eventKey={2} componentClass={Link} href="/livematches" to="/livematches">
			              Live Matches
			            </NavItem>
			          </Nav>
			        </Navbar.Collapse>
			    </Navbar>
			</div>
		);
	}
}

export default CustomNavbar;