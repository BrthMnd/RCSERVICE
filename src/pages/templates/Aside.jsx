import {
  OffersAside,
  PropertyAside,
  ContenedorAside,
  ServiceAside,
  ProvidersAside
  
} from "./aside_templates";
export function Aside({logged}) {
  return (
    <>
      <ContenedorAside logged={logged}>
        <PropertyAside />

        <OffersAside />

        <ServiceAside />

        <ProvidersAside/>
        
      </ContenedorAside>
    </>
  );
}
