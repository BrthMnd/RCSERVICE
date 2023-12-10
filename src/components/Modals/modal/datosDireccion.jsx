import { useState, useEffect } from "react";

const useComunasData = () => {
  const [comunasData, setComunasData] = useState({ medellin: [], bello: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = {
          medellinData: [
            {
              nombre: "Popular",
              barrios: [
                "Popular 1-2",
                "Santo Domingo Sabio Nº 1",
                "Santo Domingo Sabio Nº 2",
                "Popular, Granizal",
                "Moscú Nº 2",
                "Villa Guadalupe",
                "San Pablo",
                "Aldea Pablo VI",
                "La Esperanza Nº 2",
                "El Compromiso",
                "La Avanzada",
                "Carpinelo",
              ],
            },
            {
              nombre: "Santa Cruz",
              barrios: [
                "La Isla",
                "El Playón de Los Comuneros",
                "Pablo VI",
                "La Frontera",
                "La Francia",
                "Andalucía",
                "Villa del Socorro",
                "Villa Niza",
                "Moscú Nº 1",
                "Santa Cruz",
                "La Rosa",
              ],
            },
            {
              nombre: "Manrique",
              barrios: [
                "La Salle",
                "Las Granjas",
                "Campo Valdes Nº 2",
                "Santa Inés",
                "El Raizal",
                "El Pomar",
                "Manrique Central Nº 2",
                "Manrique Oriental",
                "Versalles Nº 1",
                "Versalles Nº 2",
                "La Cruz",
                "La Honda",
                "Oriente",
                "Maria Cano – Carambolas",
                "San José La Cima Nº 1",
                "San José La Cima Nº 2",
              ],
            },
            {
              nombre: "Aranjuez",
              barrios: [
                "Aranjuez",
                "Berlín",
                "San Isidro",
                "Palermo",
                "Bermejal - Los Álamos",
                "Moravia",
                "Sevilla",
                "San Pedro",
                "Manrique Central Nº 1",
                "Campo Valdes Nº 1",
                "Las Esmeraldas",
                "La Piñuela",
                "Brasilia",
                "Miranda",
              ],
            },
            {
              nombre: "Castilla",
              barrios: [
                "Castilla",
                "Toscaza",
                "Las Brisas",
                "Florencia",
                "Tejelo",
                "Boyacá",
                "Héctor Abad Gómez",
                "Belalcazar",
                "Girardot",
                "Tricentenario",
                "Castilla",
                "Francisco Antonio Zea",
                "Alfonso López",
                "Caribe",
                "El Progreso",
              ],
            },
            {
              nombre: "Doce de Octubre",
              barrios: [
                "Santander",
                "Doce de Octubre Nº 1",
                "Doce de Octubre Nº 2",
                "Pedregal",
                "La Esperanza",
                "San Martín de Porres",
                "Kennedy",
                "Picacho",
                "Picachito",
                "Mirador del Doce",
                "Progreso Nº 2",
                "El Triunfo",
              ],
            },
            {
              nombre: "Robledo",
              barrios: [
                "Cerro El Volador",
                "San Germán",
                "Barrio Facultad de Minas",
                "La Pilarica",
                "Bosques de San Pablo",
                "Altamira",
                "Córdoba",
                "López de Mesa",
                "El Diamante",
                "Aures Nº 1",
                "Aures Nº 2",
                "Bello Horizonte",
                "Villa Flora",
                "Palenque",
                "Robledo",
                "Cucaracho",
                "Fuente Clara",
                "Santa Margarita",
                "Olaya Herrera",
                "Pajarito",
                "Monteclaro",
                "Nueva Villa de La Iguaná",
              ],
            },
            {
              nombre: "Villa Hermosa",
              barrios: [
                "Villa Hermosa",
                "La Mansión",
                "San Miguel",
                "La Ladera",
                "Batallón Girardot",
                "Llanaditas",
                "Los Mangos",
                "Enciso",
                "Sucre",
                "El Pinal",
                "Trece de Noviembre",
                "La Libertad",
                "Villatina",
                "San Antonio",
                "Las Estancias",
                "Villa Turbay",
                "La Sierra (Santa Lucía - Las Estancias)",
                "Villa Lilliam",
                "Esfuerzos de Paz N°1",
                "Esfuerzos de Paz N°2",
              ],
            },
            {
              nombre: "Buenos Aires",
              barrios: [
                "Juan Pablo II",
                "Barrios de Jesús",
                "Bomboná Nº 2",
                "Los Cerros El Vergel",
                "Alejandro Echevarria",
                "Barrio Caicedo",
                "Buenos Aires",
                "Miraflores",
                "Cataluña",
                "La Milagrosa",
                "Gerona",
                "El Salvador",
                "Loreto",
                "Asomadera Nº 1",
                "Asomadera Nº 2",
                "Asomadera Nº 3",
                "Ocho de Marzo",
              ],
            },
            {
              nombre: "La Candelaria",
              barrios: [
                "Prado",
                "Jesús Nazareno",
                "El Chagualo",
                "Estación Villa",
                "San Benito",
                "Guayaquil",
                "Corazón de Jesús",
                "Calle Nueva",
                "Perpetuo Socorro",
                "Barrio Colón",
                "Las Palmas",
                "Bomboná Nº 1",
                "Boston",
                "Los Ángeles",
                "Villa Nueva",
                "La Candelaria",
                "San Diego",
              ],
            },
            {
              nombre: "Laureles - Estadio",
              barrios: [
                "Carlos E. Restrepo",
                "Suramericana",
                "Naranjal",
                "San Joaquín",
                "Los Conquistadores",
                "Bolivariana",
                "Laureles",
                "Las Acacias",
                "La Castellana",
                "Lorena",
                "El Velódromo",
                "Estadio",
                "Los Colores",
                "Cuarta Brigada",
                "Florida Nueva",
              ],
            },
            {
              nombre: "La América",
              barrios: [
                "Ferrini",
                "Calasanz",
                "Los Pinos",
                "La América",
                "La Floresta",
                "Santa Lucía",
                "El Danubio",
                "Campo Alegre",
                "Santa Mónica",
                "Barrio Cristóbal",
                "Simón Bolívar",
                "Santa Teresita",
                "Calasanz Parte Alta",
              ],
            },
            {
              nombre: "San Javier",
              barrios: [
                "El Pesebre",
                "Blanquizal",
                "Santa Rosa de Lima",
                "Los Alcázares",
                "Metropolitano",
                "La Pradera",
                "Juan XIII - La Quiebra",
                "San Javier Nº 1",
                "San Javier Nº 2",
                "Veinte de Julio",
                "Belencito",
                "Betania",
                "El Corazón",
                "Las Independencias",
                "Nuevos Conquistadores",
                "El Salado",
                "Eduardo Santos",
                "Antonio Nariño",
                "El Socorro",
                "La Gabriela",
              ],
            },
            {
              nombre: "El Poblado",
              barrios: [
                "Barrio Colombia",
                "Simesa",
                "Villa Carlota",
                "Castropol",
                "Lalinde",
                "Las Lomas Nº 1",
                "Las Lomas Nº 2",
                "Altos del Poblado",
                "El Tesoro",
                "Los Naranjos",
                "Los Balsos Nº 1",
                "San Lucas",
                "El Diamante Nº 2",
                "El Castillo",
                "Los Balsos Nº 2",
                "Alejandría",
                "La Florida",
                "El Poblado",
                "Manila",
                "Astorga",
                "Patio Bonito",
                "La Aguacatala",
                "Santa Maria de Los Ángeles",
              ],
            },
            {
              nombre: "Guayabal",
              barrios: [
                "Tenche",
                "Trinidad",
                "Santa Fe",
                "Shellmar",
                "Parque Juan Pablo II",
                "Campo Amor",
                "Noel",
                "Cristo Rey",
                "Guayabal",
                "La Colina",
              ],
            },
            {
              nombre: "Belén",
              barrios: [
                "Fátima",
                "Rosales",
                "Belén",
                "Granada",
                "San Bernardo",
                "Las Playas",
                "Diego Echevarría",
                "La Mota",
                "La Hondonada",
                "El Rincón",
                "La Loma de Los Bernal",
                "La Gloria",
                "Altavista",
                "La Palma",
                "Los Alpes",
                "Las Violetas",
                "Las Mercedes",
                "Nueva Villa de Aburrá",
                "Miravalle",
                "El Nogal - Los Almendros",
                "Cerro Nutibara",
              ],
            },
          ],

          // Información de Bello
          belloData: [
            {
              nombre: "Comuna 1 - París",
              barrios: [
                "Asentamiento de Hecho Girasoles",
                "Asentamiento de Hecho Nueva Jerusalén",
                "Los Sauces",
                "El Cafetal",
                "La Pradera",
                "La Esmeralda",
                "París",
                "La Maruchenga",
                "José Antonio Galán",
                "Salvador Allende",
              ],
            },
            {
              nombre: "Comuna 2 - La Madera",
              barrios: [
                "Barrio Nuevo",
                "La Cabañita",
                "La Cabaña",
                "La Madera",
                "La Florida",
                "Gran Avenida",
                "San José Obrero. Incluye Zona Industrial #1",
              ],
            },
            {
              nombre: "Comuna 3 - Santa Ana",
              barrios: [
                "Villas de Occidente",
                "Molinares",
                "San Simón",
                "Amazonía",
                "Santa Ana",
                "Los Búcaros",
                "Serramonte",
                "Salento",
              ],
            },
            {
              nombre: "Comuna 4 - Suárez",
              barrios: [
                "Suárez",
                "Puerto Bello",
                "Rincón Santos",
                "Central",
                "Espíritu Santo",
                "Centro",
                "Pérez",
                "Nazareth",
                "La Meseta",
                "El Rosario",
                "Andalucía",
                "López de Mesa",
                "El Cairo",
                "La Milagrosa",
                "El Congolo",
                "Las Granjas",
                "Prado",
                "Mánchester",
                "La Estación. Incluye Zona Industrial #3",
              ],
            },
            {
              nombre: "Comuna 5 - La Cumbre",
              barrios: [
                "Altavista",
                "El Carmelo",
                "Hato Viejo",
                "El Porvenir",
                "Briceño",
                "Buenos Aires",
                "El Paraíso",
                "Riachuelos",
                "Valadares",
                "El Trapiche",
                "Aralias",
                "Urapanes",
                "La Primavera",
                "Villa María",
                "Villas de Comfenalco",
              ],
            },
            {
              nombre: "Comuna 6 - Bellavista",
              barrios: [
                "Bellavista",
                "El Ducado",
                "Girasoles",
                "La Aldea",
                "La Selva",
                "Las Araucarias (etapas I y II)",
                "Los Alpes",
                "Pachelly",
                "Playa Rica",
                "San Gabriel",
                "San Martín",
                "Vereda Tierradentro (Zona urbana)",
                "Villas del Sol",
                "Villa Linda (incluye urbanización Girasoles)",
              ],
            },
            {
              nombre: "Comuna 7 - Altos de Niquía",
              barrios: [
                "Altos de Quitasol",
                "Altos de Niquía",
                "Asentamiento de Hecho El Tanque",
                "Bifamiliares",
                "El Mirador",
                "La Selva",
                "Los Ángeles",
              ],
            },
            {
              nombre: "Comuna 8 - Niquía",
              barrios: [
                "Ciudad Niquía",
                "Ciudadela del Norte",
                "Hermosa Provincia",
                "Panamericano",
                "Terranova (Incluye las urbanizaciones Laureles de Terranova, San Francisco I, II y III, Santa Isabel I y II, Senderos de San Jacinto, Carmel, Cerro Claro, Cerro Azul, Cerro Verde, San Basilio, Nogales de Terranova, Rosales de Terranova, Camino de los Vientos I, Torrenova, y Mi Mundo)",
              ],
            },
            {
              nombre: "Comuna 9 - Guasimalito",
              barrios: [
                "La Navarra",
                "El Trébol",
                "Guasimalito. Incluye Zona Industrial #5",
              ],
            },
            {
              nombre: "Comuna 10 - Fontidueño",
              barrios: [
                "Fontidueño",
                "La Mina",
                "Alcalá",
                "Los Ciruelos",
                "Estación Primera",
                "Las Vegas",
                "La Camila",
                "Cinco Estrellas",
                "Marco Fidel Suárez, incluye Zona Industrial # 6",
              ],
            },
            {
              nombre: "Comuna 11 - Zamora o Acevedo",
              barrios: [
                "La Gabriela",
                "Belvedere",
                "Acevedo",
                "Zamora",
                "Santa Rita",
                "Zona Industrial # 7",
              ],
            },
            {
              nombre: "Comuna 12 - Croacia - El Pinar",
              barrios: ["Altos de Oriente", "El Pinar"],
            },
          ],
        };
        setComunasData(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { comunasData, isLoading };
};

export default useComunasData;
