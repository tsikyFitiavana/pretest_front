import React from 'react';
import { Button } from "react-bootstrap";
import ListTous from './Liste/Liste'
import NewProduct from '../newProducts/ajouterProd'
import API from '../../utils/API';
import Modal from 'react-awesome-modal';

export class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.disconnect.bind(this);
        this.state = {
            visible : false
        }
    }
    
    
    openModal() {
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    send = event => {
        API.isAuth();
        console.log(localStorage.getItem('token'))
    }
    render() {
        return(
            <div className="Dashboard">
                <section>
                <button className="btn btn-warning btn-lg" type="button" onClick={() => this.openModal()}>New Produit</button>
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="450"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >   
                <NewProduct/>
                <br/><br/><br/>
                <p>Fermer apres avoir publier</p>
                    <div>
                        <a className="btn btn-danger" onClick={() => this.closeModal()}>Fermer</a>
                    </div>
                </Modal>
            </section>
                <h1>Dashboard</h1>
                <ListTous/>
                <Button
                onClick={this.send}
                block
                bsSize="large"
                type="submit"
                >
                Profil
                </Button>
                <Button
                onClick={this.disconnect}
                block
                bsSize="large"
                type="submit"
                >
                Se déconnecter
                </Button>
            </div>
        )
    }
}