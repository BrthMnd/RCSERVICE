import { useSelector } from "react-redux";
import {
  OffersAside,
  PropertyAside,
  ContenedorAside,
  ServiceAside,
  // ProvidersAside,
  UserAside,
} from "./aside_templates";
// import { NavLink } from "react-router-dom";
export function Aside() {
  const role = useSelector((state) => state.user.role);
  return (
    <>
      <ContenedorAside>
        {role == "Employed" && (
          <>
            <PropertyAside />
            <ServiceAside />
            {/* <ProvidersAside /> */}
            <UserAside />
            <OffersAside />
          </>
        )}
      </ContenedorAside>
    </>
  );
}
