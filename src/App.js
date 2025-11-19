import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
      <>
          <header className="header pata-header">
            <img 
              src={process.env.PUBLIC_URL + "/logo.png"} 
              alt="Logo" 
              className="logo" 
            />
            <h1>Acerca de P.A.T.A</h1>
            <p className="desc">
              P.A.T.A (Plataforma de Asistencia y Transporte Accesible) es más que una herramienta tecnológica; es una forma distinta de mirar el transporte público. Nace de una necesidad real: poder moverse por la ciudad sin sentir que cada trayecto es un desafío.
              <br></br> <br></br>
              Utiliza sistemas como códigos QR, información en tiempo real y apoyo visual y auditivo, pero lo verdaderamente importante es cómo todo eso se traduce en tranquilidad. En saber dónde estás, qué ruta tomar o cuánto falta para llegar, sin adivinar o depender de otros.
              <br></br> <br></br>
              Su propósito es claro: reducir barreras y abrir puertas. Que cualquier persona sin importar sus limitaciones físicas o experiencia con la tecnología pueda desplazarse con autonomía, confianza… y un poco más de dignidad.
              <br></br> <br></br>
              Y es que moverse por la ciudad no debería ser un privilegio. Debería sentirse como lo que es: un derecho cotidiano, tan simple como subir al bus y saber que todo está bajo control.
              <br></br> <br></br>
              Por eso los invitamos a ser parte de este proyecto que busca marcar un antes y un después en la forma en que personas con discapacidades y adultos mayores acceden al transporte público.
              Estamos seguros de que nuestro granito de arena puede cambiar la vida de muchos…
            </p>
          </header>

          <section className="ultimate-section">
            <div className="ultimate-logo-box">
              <img 
                src={process.env.PUBLIC_URL + "/team_logo.png"} 
                alt="Team Logo" 
                className="ultimate-logo"
              />
            </div>


            <div className="grid">
              {team.map((m) => (
                <TeamCard key={m.id} member={m} onClick={() => setSelected(m)} />
              ))}
            </div>
          </section>

          {selected && (
            <TeamModal 
              member={selected} 
              onClose={() => setSelected(null)} 
            />
          )}
      </>
    );
    }

export default App;
