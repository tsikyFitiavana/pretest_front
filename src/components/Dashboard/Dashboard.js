import React from 'react';
import { Button } from "react-bootstrap";
import ListTous from './Liste/Liste'
import NewProduct from '../newProducts/ajouterProd'
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <NewProduct/>
                <ListTous/>
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