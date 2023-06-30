import React from "react";
import styled from "styled-components";
// Components
import WeBox from "../Elements/WeBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function we() {
  return (
    <Wrapper id="we">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">¿Por qué EasyRoute?</h1>
            <p className="font13">
              En EasyRoute, nos enorgullece ofrecer soluciones de vanguardia en la gestión de rutas de préstamos.
              <br />
               Nuestra empresa se destaca por su compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="ENFOCADOS EN TU ÉXITO"
                text="Nuestra pasión es impulsar el éxito de las empresas de rutas de préstamos. A pesar de ser una empresa nueva, nos comprometemos a brindarte soluciones innovadoras para potenciar tu triunfo en el sector."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="SOLUCIONES A MEDIDA"
                text="Entendemos que cada empresa es única. Nos especializamos en implementar nuestro software personalizado, adaptado a tus procesos y requisitos específicos."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="TECNOLOGÍA VANGUARDISTA"
                text="Estamos a la vanguardia de la tecnología en la gestión de rutas de préstamos. Implementamos soluciones innovadoras basadas en las últimas tecnologías para optimizar tus operaciones."
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="ENFOQUE EN LA CALIDAD"
                text="La calidad es uno de nuestros pilares fundamentales en EasyRoute. Nos esforzamos por ofrecerte soluciones de software de alta calidad que superen tus expectativas y necesidades."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="APOYO Y SOPORTE"
                text="No nos limitamos a implementar el software y desaparecer. Nuestro compromiso va más allá. Brindamos un soporte continuo y estamos aquí para garantizar que obtengas el máximo valor de nuestra solución."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <WeBox
                title="RESPALDO EN LA NUBE"
                text="Comprendemos la importancia de la seguridad y disponibilidad de tus datos. Por eso, ofrecemos un sólido respaldo en la nube para proteger y recuperar tu información crítica."
              />
            </div>
          </div>
          <div className="row flexCenter" style={{padding: 30}}>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;