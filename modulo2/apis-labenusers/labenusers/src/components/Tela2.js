import axios from "axios";
import React from "react";
import App from "../App";

class Tela2 extends React.Component{

    render(){
        const renderUsuarioName = this.state.usuarios.map((usuario) => {
            return <li key={usuario.id}>{usuario.name}</li>;
            <button onClick={this.deleteUser}>Delete</button>;
          });

        return(

            <>
            {renderUsuarioName}
            </>
        )
    }




}export default Tela2;


