import { useState } from 'react';
import { Tienda, Second, Titulo,Tercero,Cuarto,Are1,Are2,Czco1,Czco2,Czco3} from './components/Tienda';
import './App.css';

function App() {
  const [filtro, setFiltro] = useState('todos');

  return (
    <>
      <Titulo />

      <div className="filtro" >
        <select
          id="distrito"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="cusco">Cusco</option>
          <option value="lima">Lima</option>
          <option value="arequipa">Arequipa</option>
        </select>
      </div>

      {filtro === 'lima' ? (
        <>
          <Tienda />
          <Second />
          <Tercero />
          <Cuarto  />
        </>
      ) : null}
      {filtro === 'arequipa' ?(
        <>
        <Are1/>
        <Are2/>
        </>
      ) : null}
      {filtro === 'cusco' ?(
        <>
        <Czco1/>
        <Czco2/>
        <Czco3/>
        </>
      ) : null}

    </>
  );
}

export default App;
