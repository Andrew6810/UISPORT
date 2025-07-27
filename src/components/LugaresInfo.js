const lugares = [
    {
        src: "/images/image1_Asistencia.jpeg",
        alt: "Asistencia con el Entrenador",
        titulo: "Asistencia con el Entrenador"
    },
    {
        src: "/images/image2_Zona_Cardio.jpeg",
        alt: "Zona de Cardio",
        titulo: "Zona de Cardio"
    },
    {
        src: "/images/image3_Reglamento.jpeg",
        alt: "Zona de Máquinas",
        titulo: "Zona de Máquinas"
    },
    {
        src: "/images/image4_Aire_Libre.jpeg",
        alt: "Aire Libre",
        titulo: "Aire Libre"
    },
];

function LugaresInfo() {
    return (
      <div className="sites">
        {lugares.map((lugar, idx) => (
          <div className="card-lugar" key={idx}>
            <img src={lugar.src} alt={lugar.alt}/>
            <div className="titulo-lugar">{lugar.titulo}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default LugaresInfo;
