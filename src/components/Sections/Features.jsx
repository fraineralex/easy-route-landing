import React from "react";
import styled from "styled-components";
// Components
import FeatureBox from "../Elements/FeaturesBox";
import FullButton from "../Buttons/FullButton";
// Assets
import FeatureImg1 from "../../assets/img/dashboard.jpg";
import FeatureImg2 from "../../assets/img/routes.jpg";
import FeatureImg3 from "../../assets/img/loan.jpg";
import AddImage2 from "../../assets/img/cloud.jpg";

export default function features() {
  return (
    <Wrapper id="features">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Algunas Funcionalidades que Ofrecemos</h1>
            <p className="font13">
              A continuación te mostraremos algunas de las funcionalidades más interesantes de nuestra
              <br />
              consultora de Odoo.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeatureBox
                img={FeatureImg1}
                title="Análisis de datos"
                text="Te brindaremos un dashboard donde se resumen todas las métricas importantes de tu empresa
                 con sus respectivos filtros para que puedas enterarte de todo con un solo vistazo."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeatureBox
                img={FeatureImg2}
                title="Eventos del día"
                text="Tendrás un tablero donde se indicará cuales son los eventos del día, cuales son la tareas del equipo,
                 cuales son los eventos importantes, etc."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeatureBox
                img={FeatureImg3}
                title="Gestión de nomina"
                text="Habrá un apartado donde se podrá visualizar la gestión de nomina de los empleados,
                  con sus respectivos pagos, descuentos, etc."
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Cargar más" />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Asociándote con nosotros pondrás</h4>
              <h2 className="font30 extraBold">Mantener tus datos en la nube</h2>
              <p className="font12">
                Nosotros nos encargaremos de almacenar tu información en una base de datos en la nube
                 con tecnología y seguridad de vanguardia para garantizar nuestro compromiso.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Comenzar" />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contáctanos" border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
