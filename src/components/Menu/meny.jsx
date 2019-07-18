import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline } from "mdbreact";

export default class Menu extends Component {
    state = { modal1: false, modal2: false, modal3: false, modal4: false, modal5: false, collapseID: "", redirect: false }
    toggleCollapse = collapseID => () => this.setState(prevState => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : "" }));

toggle = nr => () => { let modalNumber = "modal" + nr; this.setState({ [modalNumber]: !this.state[modalNumber] }); }
    render() {
        return (
            <div>
                <MDBNavbar color="red" dark expand="md" style={{ marginTop: "20px" }} id="navbar">
                    <MDBNavbarBrand> <strong className="white-text">E-COM</strong> </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left> <MDBNavItem > <MDBNavLink to="#!" className="nav-header">A propos</MDBNavLink> </MDBNavItem>
                            <MDBNavItem> <MDBNavLink to="/produits" className="nav-header">Produits</MDBNavLink>
                            </MDBNavItem> <MDBNavItem> <MDBNavLink to="#!" className="nav-header">Contacts</MDBNavLink> </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/dashboard" className="nav-header" rounded onClick={this.toggle(1)}>Admin</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/signup" className="nav-header" rounded onClick={this.toggle(2)}>Inscription</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Recherche produit" aria-label="Recherche produit" />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}