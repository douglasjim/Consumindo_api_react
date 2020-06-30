import React from 'react';
import api from './api';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Spinner } from 'reactstrap';



class Apk extends React.Component{
    state = {
        filmes: [],
      }
    
      async componentDidMount(){
        const response = await api.get('');
        //console.log(response.data); //usamos isso para printar oque tem na api utilizando o console
        this.setState({filmes: response.data}); //aqui estamos dizendo que filmes esta recebendo os dados da constante que criamos aqui em cima
    
      }
    
      render(){
    
        const {results} = this.state.filmes; //const {results} = this.state;
    
        if (!results || results.lenght <= 0){
          return <div><Spinner color="danger" /></div>
        }
    
        return(
          <div> 
            <h1 style={{marginLeft:"70px",color:"white"}}>Atores</h1>
            {console.log(results)}
            {/* results[0].name */}
            {results.map(filme => (
                <Card key={filme} style={{background:"black",width:"300px",color:"white",marginLeft:"50px"}} >
                <CardBody>
                    <CardTitle>Name: {filme.name}</CardTitle>
                    <CardSubtitle>Altura: {filme.height}</CardSubtitle>
                    <CardText>Sexo: {filme.gender}</CardText>
                </CardBody>
                </Card>
            ))} 
             {/* <h1>Listar unico</h1>
             {results.map((filme,index) => {
               if (index === 0){
                 return (
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle>Name: {filme.name}</CardTitle>
                                <CardSubtitle>Altura: {filme.height}</CardSubtitle>
                                <Button>Sexo: {filme.gender}</Button>
                            </CardBody>
                        </Card>
                    </div>
                 )
               }
             })} */}
          </div>
        );
      }
    }

export default Apk;