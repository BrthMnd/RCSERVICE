import {
  OffersAside,
  PropertyAside,
  ContenedorAside,
  ServiceAside,
  ProvidersAside
  
} from "./aside_templates";
export function Aside() {
  return (
    <>
      <ContenedorAside>
        <PropertyAside />

        <OffersAside />

        <ServiceAside />

        <ProvidersAside/>
        
      </ContenedorAside>
    </>
  );
}
