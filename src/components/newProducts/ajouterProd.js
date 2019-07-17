import React from 'react';


class NewProduct extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         nom: '',
         prix:'',
         description:'',
         image:''
    
        };
        this.onChange = this.onChange.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
    
    
    
    
      onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    
    
    
      handleUploadImage(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.append('image', this.uploadInput.files[0]);
        data.append('nom',this.state.nom);
        data.append('prix',this.state.prix);
        data.append('description',this.state.description)
    
        fetch('http://localhost:8080/user/produit', {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ image: `http://localhost:8080/user/produit/${body.image}` });
            console.log('ity ilay body.image',body.image);
            
          });
        });
      }
    

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <label>Nom:</label>
                <input type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    name="nom" /><br></br>
                <label>prix:</label>
                <input type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    name="prix" /><br></br>
                <label>description:</label>
                <input type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    name="description" /><br></br>

                <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />

                <button>Ajouter</button>
            </form>
        );
    }
}

export default NewProduct;
