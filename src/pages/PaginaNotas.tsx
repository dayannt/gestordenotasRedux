import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNota, borrarNota } from "../Store/Slice/sliceNotas";
import type { RootState } from "../types/storeType";

export const PaginaNotas = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const dispatch = useDispatch();
  const notas = useSelector((state: RootState) => state.reducerNotas.misNotas);

  const handleAgregar = (e: any) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;
    dispatch(crearNota({ id: Date.now(), titulo, descripcion }));
    setTitulo("");
    setDescripcion("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button onClick={(e) => handleAgregar(e)}>Agregar nota</button>
      </form>

      <section>
        {notas.map((nota) => (
          <div key={nota.id}>
            <h2>{nota.titulo}</h2>
            <p>{nota.descripcion}</p>
            <button onClick={() => dispatch(borrarNota(nota.id))}>
              Eliminar
            </button>
          </div>
        ))}
      </section>
    </>
  );
};