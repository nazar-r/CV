import { Outlet } from "react-router-dom";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div className="particles-layer">
      <Particles
        options={{
          fullScreen: { enable: false }, // ⚠️ важливо
          background: { color: "transparent" },

          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            opacity: { value: 0.25 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.6 },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.15,
            },
          },

          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120 },
            },
          },
        }}
      />
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <ParticleBackground />

      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}