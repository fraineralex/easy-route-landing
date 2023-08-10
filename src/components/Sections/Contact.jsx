import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contáctanos</h1>
            <p className="font13">
              Escríbenos y resolveremos cualquier duda o inquietud para que
              comencemos
              <br />a trabajar lo antes posible.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form
                id="form"
                action="mailto:frainerdeveloper@gmail.com"
                method="GET"
              >
                <label className="font13">Nombre:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold input"
                />
                <label className="font13">Correo:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold input"
                />
                <label className="font13">Cuestión:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold input"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Enviar mensaje"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </SumbitWrapper>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  .input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
