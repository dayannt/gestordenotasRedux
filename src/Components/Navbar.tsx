import { useSelector } from "react-redux";
import type { RootState } from "../types/storeType";

export const Navbar = () => {
  const notas = useSelector((state: RootState) => state.reducerNotas.misNotas);
  const total = notas.length;
  const ultima = notas[notas.length - 1];

  return (
    <nav>
      <p>Total de notas: {total}</p>
      {ultima && <p>Última nota: {ultima.titulo}</p>}
    </nav>
  );
};