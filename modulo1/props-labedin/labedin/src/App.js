import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGrtOvNmzHKMQ/profile-displayphoto-shrink_800_800/0/1639169229528?e=2147483647&v=beta&t=JQj3_wnPW_XsPEpVD3g9S4XH0LWV4d-iGGm287s9c78"
          nome="Rodrigo Vieira"
          descricao="Oi, eu sou o Rodrigo Vieira. Formado em Administração pela Puc Minas. 
          Possuo um perfil lógico e inovador.
          Ao trabalhar com Startups e marketing digital me deparei com o mundo da programação e me apaixonei pela matéria, hoje estou cursando na Labenu o curso Fullstack web onde aprendemos tanto front quanto o back-end.
          "
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/51/51506.png?w=740&t=st=1647972497~exp=1647973097~hmac=9fe1328f07c733295b51aa6ed8afa5353e172faf55b6cfde9bb1df8ebc70d777"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://cdn.icon-icons.com/icons2/2131/PNG/512/email_mesasge_envelope_icon_131541.png"
        descricao="rodrigo.v.santos89@gmail.com"
      />

      <CardPequeno
        imagem="https://cdn.icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149107.png"
        descricao="Avenida de Pruneridge, 19111 - Cupertino, CA 95014"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQF7tvJeV83o4w/company-logo_200_200/0/1607447537419?e=1655942400&v=beta&t=pP7IpbQuNPDuYxG0QNjCnBlupRcWHYXM0zm1_-09a3w"
          nome="M3 Lending"
          descricao="Consultor financeiro"
        />

        <CardGrande
          imagem="data:image/png;base64,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"
          nome="Spetim"
          descricao="Empreendedor"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
