import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestros Precios</h1>
            <p className="font13">
              Tenemos los precios más competitivos de la industría con una intachable etica de trabajo
              <br />
               y una excelente relación precio calidad
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="basic"
                price="$19,99/mes"
                title="Básico"
                text="Este plan básico es ideal para empresas nuevas con pocos clientes y empleados."
                offers={[
                  { name: "Gestión básica de préstamos", cheked: true },
                  { name: "Cálculos de tasas de interés", cheked: true },
                  { name: "Plazos de pago", cheked: true },
                  { name: "Base de datos: 5 GB/año", cheked: true },
                  { name: "2 Cores, 4 GB RAM, 127 GB (SDD)", cheked: true },
                  { name: "Herramientas de informes y análisis", cheked: false },
                  { name: "Integración con otros sistemas", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="intermediate"
                price="$69,99/mes"
                title="Intermedio"
                text="Ideal para empresas en crecimiento que buscan llevar sus métodos al siguiente nivel."
                offers={[
                  { name: "Todas las características del plan anterior", cheked: true },
                  { name: "Herramientas de informes y análisis", cheked: true },
                  { name: "Integración con otros sistemas", cheked: true },
                  { name: "Mayor capacidad de personalización", cheked: true },
                  { name: "Base de datos: 100 GB/año", cheked: true },
                  { name: "8 vCores, 12 GB RAM, 500 GB (SDD)", cheked: true },
                  { name: "Automatización de procesos", cheked: false }
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="premium"
                price="$199,99/mes"
                title="Avanzado"
                text="Ideal para empresas grandes que buscan facilitar tareas mientras ahorran recursos."
                offers={[
                  { name: "Todas las características del plan anterior", cheked: true },
                  { name: "Automatización de procesos", cheked: true },
                  { name: "Herramientas de análisis avanzadas", cheked: true },
                  { name: "API para integraciones personalizadas", cheked: true },
                  { name: "Soporte prioritario", cheked: true },
                  { name: "Base de datos: Ilimitada", cheked: true },
                  { name: "32 vCores, 32 GB RAM, 2 TB (NVMe)", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




