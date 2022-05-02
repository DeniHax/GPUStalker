import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import styles from "./NavBar.module.css";

export const NavBar = () => {


    return (
        <Navbar bg="dark" variant = "dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">GPU Stalker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link className = {styles.links} href="/">Home</Nav.Link>
                        <NavDropdown title="Manufacturers" id="collasible-nav-dropdown">
                            <LinkContainer to={`/ASUS`}>
                                <NavDropdown.Item>
                                    ASUS
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/EVGA`}>
                                <NavDropdown.Item>
                                    EVGA
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/GIGABYTE`}>
                                <NavDropdown.Item>
                                    GIGABYTE
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/MSI`}>
                                <NavDropdown.Item>
                                    MSI
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/NVIDIA`}>
                                <NavDropdown.Item>
                                    NVIDIA
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/PNY`}>
                                <NavDropdown.Item>
                                    PNY
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={`/XFX`}>
                                <NavDropdown.Item>
                                    XFX
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};