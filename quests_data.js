const quests = [
  {
    "id": "shooting-cans",
    "nombre": "1. Disparando a las latas (Shooting Cans)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 1,
    "descripcion": "Primera misión de Prapor en Ground Zero. Quiere que inspecciones dos posiciones defensivas con armas pesadas y limpies un poco la zona para comprobar tu puntería.",
    "objetivos": [
      "Localizar la ametralladora Utyos en Ground Zero.",
      "Localizar el lanzagranadas automático AGS en Ground Zero.",
      "Eliminar 5 objetivos (Scavs o PMC) en Ground Zero."
    ],
    "recompensas": [
      "1 600 EXP.",
      "+0.01 reputación con Prapor.",
      "13 000 rublos (más con Centro de inteligencia).",
      "1× Mosin 7.62x54R (Infantry).",
      "3× pack de munición 7.62x54mm R FMJ (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 2927,
      "y": 4788.222389221191
    }
  },
  {
    "id": "debut",
    "nombre": "2. Debut (Debut)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 1,
    "descripcion": "Prapor quiere que le demuestres que puedes encargarte de la chusma de Tarkov. Mata algunos Scavs y consígueles unas escopetas MP-133 como prueba.",
    "objetivos": [
      "Eliminar 5 Scavs en cualquier localización.",
      "Obtener 2× escopetas MP-133 12ga (no hace falta que sean Encontrado en incursión).",
      "Entregar 2× escopetas MP-133 12ga a Prapor."
    ],
    "recompensas": [
      "1 700 EXP.",
      "+0.02 reputación con Prapor.",
      "+0.01 reputación con Jaeger.",
      "15 000 rublos (más con Centro de inteligencia).",
      "1× PP-91 Kedr 9x18PM.",
      "2× pack de munición 9x18mm PM BZhT gzh (50 balas).",
      "Desbloquea compra del AKS-74UB 5.45x39 en Prapor LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "shooting-cans"
    ],
    "position": {
      "x": 3176,
      "y": 4788.222389221191
    }
  },
  {
    "id": "luxurious-life",
    "nombre": "3. Vida lujosa (Luxurious Life)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 1,
    "descripcion": "Tras Debut, Prapor quiere que le consigas una botella de vino rara en el centro de la ciudad para congraciarse con un coleccionista importante.",
    "objetivos": [
      "Localizar la licorería en Ground Zero (ASAP Winery).",
      "Localizar y obtener la botella de vino en la tienda (Bottle of Le Jean wine, Encontrado en incursión).",
      "Entregar la botella de vino a Prapor."
    ],
    "recompensas": [
      "1 750 EXP.",
      "+0.01 reputación con Prapor.",
      "14 000 rublos (más con Centro de inteligencia).",
      "1× Molot VPO-136 Vepr-KM 7.62x39.",
      "5× pack de munición 7.62x39mm FMJ (20 balas).",
      "3× cargador AK 7.62x39 30 balas (issued '55 o posterior)."
    ],
    "youtube": "",
    "prereqIds": [
      "debut"
    ],
    "position": {
      "x": 3360,
      "y": 4788.222389221191
    }
  },
  {
    "id": "properties-all-around",
    "nombre": "4. Propiedades por todas partes (Properties All Around)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 22,
    "descripcion": "Prapor sospecha que el registro de propiedades de la ciudad contiene información jugosa sobre las operaciones de TerraGroup. Quiere que encuentres y extraigas esos documentos.",
    "objetivos": [
      "Localizar el fondo de bienes raíces (real estate fund) en Streets of Tarkov.",
      "Localizar y obtener el documento de transacciones inmobiliarias de Tarkov (Cadastral registry records, Encontrado en incursión).",
      "Entregar la información obtenida a Prapor."
    ],
    "recompensas": [
      "11 600 EXP.",
      "+0.02 reputación con Prapor.",
      "80 000 rublos (más con Centro de inteligencia).",
      "1× subfusil SR-2M Veresk 9x21.",
      "3× cargador SR-2M 9x21 de 30 balas.",
      "4× pack de munición 9x21mm PS gzh (30 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "glory-to-cpsu-part-2"
    ],
    "position": {
      "x": 5545,
      "y": 4613.444580078125
    }
  },
  {
    "id": "search-mission",
    "nombre": "5. Misión de búsqueda (Search Mission)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 5,
    "descripcion": "Un convoy de Prapor ha desaparecido en Woods y hay indicios de un campamento USEC cercano. Quiere que investigues qué ha pasado.",
    "objetivos": [
      "Localizar el convoy desaparecido de Prapor en Woods.",
      "Localizar el campamento temporal USEC en Woods.",
      "Sobrevivir y extraer de Woods en la misma incursión."
    ],
    "recompensas": [
      "2 800 EXP.",
      "+0.02 reputación con Prapor.",
      "22 000 rublos (más con Centro de inteligencia).",
      "1× brújula EYE MK.2.",
      "1× mapa de Woods.",
      "Desbloquea compra del chaleco NPP KlASS Kora-Kulon (EMR) en Prapor LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "debut"
    ],
    "position": {
      "x": 3360,
      "y": 4693.444580078125
    }
  },
  {
    "id": "background-check",
    "nombre": "6. Verificación de antecedentes (Background Check)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 2,
    "descripcion": "Prapor quiere que recuperes el reloj de bolsillo de su camarada Arseny. Sabe que está en el área de construcción de Customs, dentro del camión cisterna o en su dormitorio.",
    "objetivos": [
      "Obtener el reloj de bolsillo de bronce con cadena en Customs.",
      "(Opcional) Obtener la llave del camión cisterna (Construction equipment key).",
      "Entregar el reloj de bolsillo de bronce a Prapor."
    ],
    "recompensas": [
      "1 800 EXP.",
      "+0.03 reputación con Prapor.",
      "15 000 rublos (más con Centro de inteligencia).",
      "1× fusil semiautomático Simonov SKS 7.62x39.",
      "3× pack de munición 7.62x39mm FMJ (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "luxurious-life"
    ],
    "position": {
      "x": 3570,
      "y": 4788.222389221191
    }
  },
  {
    "id": "shootout-picnic",
    "nombre": "7. Picnic a tiro limpio (Shootout Picnic)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 3,
    "descripcion": "Prapor tiene contactos que necesitan limpiar la zona del aserradero en Woods. Quiere que elimines a los Scavs que controlan el área.",
    "objetivos": [
      "Eliminar 15 Scavs en Woods."
    ],
    "recompensas": [
      "2 000 EXP.",
      "+0.03 reputación con Prapor.",
      "+0.01 reputación con Jaeger.",
      "20 000 rublos (más con Centro de inteligencia).",
      "1× fusil de asalto AKS-74UN 5.45x39.",
      "3× cargador AK-74 6L20 5.45x39 de 30 balas.",
      "3× pack de munición 5.45x39mm PP gs (30 balas).",
      "Desbloquea compra de pistola Lebedev PL-15 9x19 en Prapor LL1.",
      "Desbloquea compra de chaleco acorazado 6B5-16 Zh-86 Uley (Khaki) en Prapor LL2.",
      "Desbloquea el estilo de diana Duck para el campo de tiro de la Escondite."
    ],
    "youtube": "",
    "prereqIds": [
      "background-check"
    ],
    "position": {
      "x": 3799,
      "y": 4788.222389221191
    }
  },
  {
    "id": "delivery-from-the-past",
    "nombre": "8. Entrega desde el pasado (Delivery From the Past)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 5,
    "descripcion": "Prapor te encarga mover un maletín con documentos sensibles: debes recogerlo en Customs y esconderlo en Factory, y salir con vida.",
    "objetivos": [
      "Obtener la carpeta segura en la oficina del director de Tarcone, en el almacén rojo del terminal de Customs.",
      "Esconder el paquete en la sala de descanso del 2.º piso cerca de la puerta 3 en Factory.",
      "Sobrevivir y extraer de Factory."
    ],
    "recompensas": [
      "4 000 EXP.",
      "+0.03 reputación con Prapor.",
      "20 000 rublos (más con Centro de inteligencia).",
      "1× escopeta semiautomática Saiga-12K ver.10 12ga.",
      "4× cargador SOK-12 Sb.5 de 5 balas 12ga.",
      "2× pack de munición 12/70 8.5 mm Magnum buckshot (25 balas).",
      "Desbloquea compra de munición 5.45x39mm FMJ en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "background-check"
    ],
    "position": {
      "x": 3803,
      "y": 4693.444580078125
    }
  },
  {
    "id": "bp-depot",
    "nombre": "9. Depósito BP (BP Depot)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 5,
    "descripcion": "Prapor quiere localizar reservas de combustible en Customs. Te da balizas MS2000 para marcar las cisternas de carburante en puntos clave del mapa.",
    "objetivos": [
      "Marcar la primera cisterna de combustible en Customs con una baliza MS2000.",
      "Marcar la segunda cisterna de combustible en Customs con una baliza MS2000.",
      "Marcar la tercera cisterna de combustible en Customs con una baliza MS2000.",
      "Marcar la cuarta cisterna de combustible en Customs con una baliza MS2000.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "2 800 EXP.",
      "30 000 rublos.",
      "+0.03 reputación con Prapor.",
      "-0.01 reputación con Jaeger.",
      "2× bidón de plástico de combustible.",
      "Desbloquea compra del subfusil PP-9 Klin 9x18mm PMM en Prapor LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "delivery-from-the-past"
    ],
    "position": {
      "x": 4023,
      "y": 4693.444580078125
    }
  },
  {
    "id": "the-bunker-part-1",
    "nombre": "10. El búnker – Parte 1 (The Bunker – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 10,
    "descripcion": "Prapor ha oído rumores sobre un complejo de búnkeres bajo la base militar (Reserve) con una sala de control operativa. Quiere que verifiques el lugar.",
    "objetivos": [
      "Encontrar el búnker subterráneo en la base militar (Reserve).",
      "Localizar la sala de control dentro del búnker subterráneo.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "5 700 EXP.",
      "20 000 rublos.",
      "+0.03 reputación con Prapor.",
      "1× subfusil SR-2M Veresk 9x21.",
      "80× munición 9x21mm BT gzh.",
      "3× cargador 9x21mm de 20 balas para SR-2M.",
      "Desbloquea compra de munición 9x21mm PS gzh en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "bp-depot"
    ],
    "position": {
      "x": 4240,
      "y": 4693.444580078125
    }
  },
  {
    "id": "the-bunker-part-2",
    "nombre": "11. El búnker – Parte 2 (The Bunker – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 15,
    "descripcion": "Segunda parte de la investigación del búnker en Reserve. Prapor quiere que localices todas las puertas herméticas clave del complejo subterráneo.",
    "objetivos": [
      "Localizar la puerta hermética que lleva al hospital (White Bishop) en Reserve.",
      "Localizar una de las dos puertas herméticas que llevan al edificio de la academia (Black Bishop) en Reserve.",
      "Localizar una de las dos puertas herméticas que llevan al barracón nº1 (Black Pawn) en Reserve.",
      "Localizar una de las dos puertas herméticas que llevan al barracón nº2 (White Pawn) en Reserve.",
      "Localizar la puerta hermética que lleva al edificio del centro de control aéreo (King) en Reserve.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "9 200 EXP.",
      "+0.03 reputación con Prapor.",
      "25 000 rublos (más con Centro de inteligencia).",
      "1× fusil de asalto Kalashnikov AKS-74UB 5.45x39.",
      "120× munición 5.45x39mm BS gs.",
      "1× guardamanos AK CAA RS47.",
      "1× culata/tubo AK-74M CAA AKTS AK74."
    ],
    "youtube": "",
    "prereqIds": [
      "the-bunker-part-1"
    ],
    "position": {
      "x": 4454,
      "y": 4693.444580078125
    }
  },
  {
    "id": "bad-rep-evidence",
    "nombre": "12. Mala reputación bien ganada (Bad Rep Evidence)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 6,
    "descripcion": "Un capataz de Polikhim ocultó una carpeta con pruebas comprometedoras. Prapor quiere que la recuperes del barracón portátil de Customs.",
    "objetivos": [
      "Obtener la carpeta segura 0031 en el barracón portátil de Customs.",
      "(Opcional) Conseguir acceso a la sala bloqueada del pasillo de oficinas del 3.er piso en Factory.",
      "(Opcional) Obtener la llave del barracón portátil (Portable bunkhouse key).",
      "Entregar la carpeta segura 0031 a Prapor.",
      "Sobrevivir y extraer de Customs."
    ],
    "recompensas": [
      "4 100 EXP.",
      "+0.03 reputación con Prapor.",
      "35 000 rublos (más con Centro de inteligencia).",
      "1× subfusil PP-91-01 Kedr-B 9x18PM.",
      "3× cargador PP-91 Kedr 9x18PM de 30 balas.",
      "3× pack de munición 9x18mm PM PS gs PPO (50 balas).",
      "Desbloquea compra de mira BelOMO PSO-1M2-1 4x24 en Prapor LL2.",
      "Desbloquea compra de casco SSSh-94 SFERA-S en Prapor LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "bp-depot"
    ],
    "position": {
      "x": 4240,
      "y": 4774.444580078125
    }
  },
  {
    "id": "ice-cream-cones",
    "nombre": "13. Conos de helado (Ice Cream Cones)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 9,
    "descripcion": "Prapor necesita cargadores de tambor 6L31 para AK-74. Quiere que encuentres algunos en incursión y se los entregues.",
    "objetivos": [
      "Encontrar en incursión 3× cargadores AK-74 5.45x39 6L31 de 60 balas.",
      "(Opcional) Encontrar la llave del búnker en la habitación del empleado de TerraGroup en Dorms.",
      "(Opcional) Localizar el búnker correcto en Woods.",
      "Entregar 3× cargadores 6L31 de 60 balas a Prapor."
    ],
    "recompensas": [
      "5 200 EXP.",
      "+0.02 reputación con Prapor.",
      "17 000 rublos.",
      "1× ametralladora ligera RPK-16 5.45x39.",
      "200× munición 5.45x39mm PP gs.",
      "Desbloquea trueque de cargador 6L31 de 60 balas para AK-74 en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "bad-rep-evidence"
    ],
    "position": {
      "x": 4454,
      "y": 4774.444580078125
    }
  },
  {
    "id": "no-place-for-renegades",
    "nombre": "14. No hay lugar para renegados (No Place for Renegades)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 17,
    "descripcion": "Los Raiders han tomado el búnker de mando en Reserve. Prapor quiere que los ‘desalojes’ personalmente.",
    "objetivos": [
      "Eliminar 5 Raiders en el búnker de mando de Reserve."
    ],
    "recompensas": [
      "15 300 EXP.",
      "+0.03 reputación con Prapor.",
      "40 000 rublos.",
      "1× fusil de asalto Kalashnikov AK-103 7.62x39.",
      "3× cargador AK-103 7.62x39 de 30 balas.",
      "150× munición 7.62x39mm PS gzh.",
      "Desbloquea compra del supresor AKS-74U PBS-4 5.45x39 en Prapor LL3.",
      "Desbloquea compra del supresor Hexagon 12K 12ga en Skier LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "the-bunker-part-2"
    ],
    "position": {
      "x": 4670,
      "y": 4693.444580078125
    }
  },
  {
    "id": "documents",
    "nombre": "15. Documentos (Documents)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 10,
    "descripcion": "Prapor quiere tres carpetas con documentos militares del búnker de mando de Reserve. Hay distintos puntos de aparición alrededor del puesto de mando.",
    "objetivos": [
      "Obtener los Documentos militares nº1 en Reserve (Encontrado en incursión).",
      "Obtener los Documentos militares nº2 en Reserve (Encontrado en incursión).",
      "Obtener los Documentos militares nº3 en Reserve (Encontrado en incursión).",
      "Entregar los primeros documentos a Prapor.",
      "Entregar los segundos documentos a Prapor.",
      "Entregar los terceros documentos a Prapor."
    ],
    "recompensas": [
      "7 800 EXP.",
      "+0.04 reputación con Prapor.",
      "45 000 rublos.",
      "1× visor de visión nocturna NSPU-M 3.5x para riel cola de milano.",
      "1× linterna Zenit Klesch-2P con láser.",
      "1× supresor AKM PBS-1 7.62x39."
    ],
    "youtube": "",
    "prereqIds": [
      "no-place-for-renegades"
    ],
    "position": {
      "x": 4891,
      "y": 4613.444580078125
    }
  },
  {
    "id": "postman-pat-part-1",
    "nombre": "16. Cartero Pat – Parte 1 (Postman Pat – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 10,
    "descripcion": "Un mensajero de Prapor llevaba una carta importante y no llegó a su destino. El cuerpo está en Factory, en un búnker marcado con el número 1986. Prapor quiere que recuperes la carta y la entregues a la persona adecuada.",
    "objetivos": [
      "Obtener la carta en el cuerpo del mensajero en Factory.",
      "Sobrevivir y extraer de Factory.",
      "Entregar la carta a la Terapeuta (Therapist)."
    ],
    "recompensas": [
      "7 800 EXP.",
      "+0.04 reputación con Prapor.",
      "45 000 rublos (más con Centro de inteligencia).",
      "1× visor de visión nocturna NSPU-M 3.5x (cola de milano).",
      "1× linterna Zenit Klesch-2P con láser.",
      "1× supresor AKM PBS-1 7.62x39.",
      "Desbloquea el estilo de suelo «English herringbone» en la Escondite."
    ],
    "youtube": "",
    "prereqIds": [
      "ice-cream-cones"
    ],
    "position": {
      "x": 4670,
      "y": 4774.444580078125
    }
  },
  {
    "id": "shaking-up-the-teller",
    "nombre": "17. Sacudiendo al cajero (Shaking Up the Teller)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 0,
    "descripcion": "Un encargado de tiendas guardaba algo muy valioso en los dormitorios de Customs. Prapor sabe que tenía la habitación 214, pero el verdadero almacén es la 203. Hay que conseguir el objeto de valor y llevárselo.",
    "objetivos": [
      "Obtener el objeto valioso en la habitación 203 de los dormitorios de tres plantas en Customs.",
      "(Opcional) Conseguir acceso a la habitación 214 de los dormitorios.",
      "Entregar el objeto valioso a Prapor."
    ],
    "recompensas": [
      "5 900 EXP.",
      "+0.02 reputación con Prapor.",
      "75 000 rublos (más con Centro de inteligencia).",
      "1× contador Geiger-Müller.",
      "Desbloquea compra del supresor AKS-74U PBS-4 5.45x39 en Prapor LL3.",
      "Desbloquea compra del supresor Hexagon 12K 12ga en Skier LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "ice-cream-cones"
    ],
    "position": {
      "x": 4670,
      "y": 4856.7779541015625
    }
  },
  {
    "id": "the-punisher-part-1",
    "nombre": "18. El Castigador – Parte 1 (The Punisher – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 17,
    "descripcion": "Las costas de Shoreline están llenas de bandas que molestan a los contactos de Prapor. Quiere que limpies la zona usando únicamente armas de la serie AKM, para que todo el mundo sepa quién ha hecho el trabajo.",
    "objetivos": [
      "Eliminar 15 Scavs en Shoreline usando un arma de la serie AKM."
    ],
    "recompensas": [
      "10 200 EXP.",
      "+0.02 reputación con Prapor.",
      "40 000 rublos (más con Centro de inteligencia).",
      "1× chaleco acorazado 6B43 Zabralo-Sh 6A (EMR).",
      "Desbloquea compra del fusil de francotirador SV-98 7.62x54R en Prapor LL3.",
      "Desbloquea compra de munición 7.62x39mm PS gzh en Prapor LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "shaking-up-the-teller"
    ],
    "position": {
      "x": 4891,
      "y": 4862.555847167969
    }
  },
  {
    "id": "the-punisher-part-2",
    "nombre": "19. El Castigador – Parte 2 (The Punisher – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 18,
    "descripcion": "Prapor quiere seguir con la limpieza, esta vez en Reserve. Tendrás que usar un arma silenciada y, de paso, recoger una serie de máscaras inferiores como prueba.",
    "objetivos": [
      "Eliminar 12 Scavs en Reserve usando un arma con supresor.",
      "Encontrar en incursión 7× Lower half-mask.",
      "Entregar 7× Lower half-mask a Prapor."
    ],
    "recompensas": [
      "13 100 EXP.",
      "+0.03 reputación con Prapor.",
      "50 000 rublos (más con Centro de inteligencia).",
      "1× fusil de asalto Kalashnikov AK-104 7.62x39.",
      "2× cable militar (Military cable)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-1"
    ],
    "position": {
      "x": 5106,
      "y": 4862.555847167969
    }
  },
  {
    "id": "the-punisher-part-3",
    "nombre": "20. El Castigador – Parte 3 (The Punisher – Part 3)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 19,
    "descripcion": "La siguiente fase del Castigador se centra en Customs. Prapor quiere una masacre con fusiles de la familia AKS-74U, para acabar con los Scavs que se mueven por la zona.",
    "objetivos": [
      "Eliminar 25 Scavs en Customs usando un fusil de asalto de la serie AKS-74U."
    ],
    "recompensas": [
      "11 700 EXP.",
      "+0.04 reputación con Prapor.",
      "+0.02 reputación con Skier.",
      "2 500 dólares.",
      "1× fusil de cerrojo Lobaev Arms DVL-10 7.62x51 (versión Urbana).",
      "Desbloquea el crafteo de munición 5.45x39mm PP gs en Banco de trabajo nivel 2."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-2"
    ],
    "position": {
      "x": 5327,
      "y": 4862.555847167969
    }
  },
  {
    "id": "the-punisher-part-4",
    "nombre": "21. El Castigador – Parte 4 (The Punisher – Part 4)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 20,
    "descripcion": "Cuarta parte de la cadena El Castigador. En el Faro, Prapor quiere que límpies Scavs con escopeta de calibre 12 y, de paso, montes un espectáculo contra los PMC disfrazado de Scav.",
    "objetivos": [
      "Eliminar 10 Scavs usando una escopeta de calibre 12 en Lighthouse.",
      "Eliminar 10 PMC en Lighthouse llevando cualquier pasamontañas (balaclava) y un chaleco Scav (Scav Vest).",
      "Encontrar en incursión 5× cuchillos Bars A-2607 95Kh18.",
      "Entregar 5× cuchillos Bars A-2607 95Kh18 a Prapor."
    ],
    "recompensas": [
      "18 000 EXP.",
      "+0.03 reputación con Prapor.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "1× fusil de asalto Colt M4A1 5.56×45 (variante SOPMOD II)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-3"
    ],
    "position": {
      "x": 5545,
      "y": 4862.555847167969
    }
  },
  {
    "id": "the-punisher-part-5",
    "nombre": "22. El Castigador – Parte 5 (The Punisher – Part 5)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 20,
    "descripcion": "Quinta fase de El Castigador. Toca demostrar que sabes conseguir y usar armas occidentales y soviéticas, y rematar PMC con armadura ligera.",
    "objetivos": [
      "Encontrar en incursión 1× fusil de asalto de la familia AK-74 (AK-74 / AK-74M / AK-74N / AKS-74).",
      "Entregar 1× fusil de asalto AK-74 a Prapor.",
      "Encontrar en incursión 1× fusil de asalto Colt M4A1.",
      "Entregar 1× Colt M4A1 a Prapor.",
      "Encontrar en incursión 2× pistolas PM 9×18 (cualquier variante).",
      "Entregar 2× pistolas PM 9×18 a Prapor.",
      "Eliminar 10 PMC llevando chaleco PACA y casco 6B47 (cualquier variante válida)."
    ],
    "recompensas": [
      "18 200 EXP.",
      "+0.03 reputación con Prapor.",
      "5 000 dólares (5 250 / 5 750 con Centro de inteligencia).",
      "1× estuche para pistola (Pistol case).",
      "1× estuche de documentos (Documents case).",
      "6× pack de munición 7.62×39mm BP gzh (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-4"
    ],
    "position": {
      "x": 5761,
      "y": 4862.555847167969
    }
  },
  {
    "id": "the-punisher-part-6",
    "nombre": "23. El Castigador – Parte 6 (The Punisher – Part 6)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 21,
    "descripcion": "Última parte de El Castigador. Prapor quiere un baño de sangre PMC con el SVD y una colección de chapas de USEC y BEAR como trofeos.",
    "objetivos": [
      "Eliminar 15 PMC usando un fusil de tirador SVD (cualquier mapa excepto Factory).",
      "Encontrar en incursión 7× chapas de BEAR.",
      "Entregar 7× chapas de BEAR a Prapor.",
      "Encontrar en incursión 7× chapas de USEC.",
      "Entregar 7× chapas de USEC a Prapor."
    ],
    "recompensas": [
      "19 400 EXP.",
      "+0.04 reputación con Prapor.",
      "+0.05 reputación con Therapist.",
      "+0.01 reputación con Skier.",
      "250 000 rublos (262 500 / 287 500 con Centro de inteligencia).",
      "1× contenedor seguro Epsilon.",
      "Desbloquea compra de munición 7.62×54mm R PS gzh en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-5"
    ],
    "position": {
      "x": 5984,
      "y": 4862.555847167969
    }
  },
  {
    "id": "anesthesia",
    "nombre": "24. Anestesia (Anesthesia)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 21,
    "descripcion": "Ha aparecido un médico apodado Sanitar en Shoreline. Vende medicinas y hace operaciones en la calle. Prapor quiere localizar sus puntos de venta marcando tres puestos médicos improvisados.",
    "objetivos": [
      "Marcar el primer puesto de intercambio médico con un marcador MS2000 en Shoreline.",
      "Marcar el segundo puesto de intercambio médico con un marcador MS2000 en Shoreline.",
      "Marcar el tercer puesto de intercambio médico con un marcador MS2000 en Shoreline.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "18 100 EXP.",
      "+0.04 reputación con Prapor.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "1× fusil de asalto especial AS VAL 9×39.",
      "5× pack de munición 9×39mm SPP gs (20 balas).",
      "5× pack de munición 9×39mm SP-6 gs (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "shaking-up-the-teller"
    ],
    "position": {
      "x": 4891,
      "y": 4953.7779541015625
    }
  },
  {
    "id": "grenadier",
    "nombre": "25. Granadero (Grenadier)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Prapor quiere ver si sabes usar granadas sin volarte a ti mismo ni a tus aliados. Tienes que eliminar PMC usando únicamente granadas.",
    "objetivos": [
      "Eliminar 5 PMC usando granadas (cualquier tipo de granada cuenta para los asesinatos)."
    ],
    "recompensas": [
      "18 000 EXP.",
      "+0.02 reputación con Prapor.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "10× munición 12.7×55mm PS12B (10 balas).",
      "5× granada de mano F-1.",
      "5× granada artesanal VOG-17 Khattabka.",
      "5× granada artesanal VOG-25 Khattabka.",
      "2× granada de mano RGN.",
      "Desbloquea el crafteo de granada artesanal VOG-17 Khattabka en Banco de trabajo nivel 2."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 3215,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-1",
    "nombre": "26. Banco de pruebas – Parte 1 (Test Drive – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Primera parte de la cadena Banco de pruebas: Prapor quiere que pruebes un fusil M1A occidental bien equipado, eliminando objetivos a larga distancia para evaluar el arma.",
    "objetivos": [
      "Eliminar 5 PMC a más de 60 metros usando un fusil M1A con supresor Hybrid 46 y visor Schmidt & Bender PM II 1–8×24."
    ],
    "recompensas": [
      "18 200 EXP.",
      "+0.02 reputación con Prapor.",
      "1× fusil de precisión especial VSS Vintorez 9×39.",
      "6× pack de munición 9×39mm PAB-9 gs (20 balas).",
      "2× cargador VSS/VAL 9×39 de 30 balas.",
      "Desbloquea el crafteo de munición 9×39mm PAB-9 gs en Banco de trabajo (nivel medio/alto, según versión)."
    ],
    "youtube": "",
    "prereqIds": [
      "grenadier"
    ],
    "position": {
      "x": 3429,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-2",
    "nombre": "27. Banco de pruebas – Parte 2 (Test Drive – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Segunda prueba de Banco de pruebas: ahora Prapor quiere datos de combate urbano con un SR-2M Veresk, limpiando PMC en zonas muy transitadas de la ciudad.",
    "objetivos": [
      "Eliminar 20 PMC usando un subfusil SR-2M Veresk con supresor y mira réflex KP-SR2 en Calles de Tarkov, Ground Zero o Interchange."
    ],
    "recompensas": [
      "28 000 EXP.",
      "+0.02 reputación con Prapor.",
      "300 000 rublos.",
      "1× fusil de asalto ASh-12 12.7×55.",
      "3× cargador ASh-12 12.7×55 de 20 balas.",
      "6× pack de munición 12.7×55mm PS12B (10 balas).",
      "3× cadena dorada (Golden neck chain).",
      "Desbloquea la compra de munición 9×21mm BT gzh en Prapor LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "test-drive-part-1"
    ],
    "position": {
      "x": 3645,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-3",
    "nombre": "28. Banco de pruebas – Parte 3 (Test Drive – Part 3)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Tercera fase de Banco de pruebas: Prapor quiere ver cómo rindes con un AK-12 muy modificado eliminando PMC en mapas abiertos e industriales.",
    "objetivos": [
      "Eliminar 20 PMC usando un fusil AK-12 con supresor y visor Valday PS-320 1/6× en Lighthouse, Customs o Reserve."
    ],
    "recompensas": [
      "35 300 EXP.",
      "+0.02 reputación con Prapor.",
      "400 000 rublos.",
      "1× ametralladora ligera RPK-16 5.45×39.",
      "4× cargador AK-74 5.45×39 6L31 de 60 balas.",
      "8× pack de munición 5.45×39mm 7N40 (30 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "test-drive-part-2"
    ],
    "position": {
      "x": 3866,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-4",
    "nombre": "29. Banco de pruebas – Parte 4 (Test Drive – Part 4)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Cuarta parte del banco de pruebas: esta vez Prapor quiere estadísticas de una RPDN equipada con visor 1P78-1, abusando del arma contra todo lo que se mueva.",
    "objetivos": [
      "Eliminar 30 objetivos (cualquier tipo) usando una RPDN con visor 1P78-1 en Shoreline, Interchange o Woods."
    ],
    "recompensas": [
      "40 000 EXP.",
      "+0.02 reputación con Prapor.",
      "460 000 rublos.",
      "1× fusil automático Tokarev AVT-40 7.62×54R.",
      "3× pack de munición 7.62×54mm R SNB gzh (20 balas).",
      "2× cargador AVT-40 7.62×54R de 15 balas."
    ],
    "youtube": "",
    "prereqIds": [
      "test-drive-part-3"
    ],
    "position": {
      "x": 4082,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-5",
    "nombre": "30. Banco de pruebas – Parte 5 (Test Drive – Part 5)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Última prueba de Banco de pruebas antes de la Parte 6: Prapor quiere que exprimas una UZI PRO muy concreta reventando objetivos en Factory.",
    "objetivos": [
      "Eliminar 50 objetivos (cualquier tipo) usando una UZI PRO con cañón de 240 mm, culata SBR y mira réflex BOSS Xe en Factory."
    ],
    "recompensas": [
      "50 000 EXP.",
      "+0.02 reputación con Prapor.",
      "500 000 rublos.",
      "1× fusil de asalto especial AS VAL 9×39.",
      "3× cargador VSS/VAL 9×39 de 30 balas.",
      "6× pack de munición 9×39mm BP (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "test-drive-part-4"
    ],
    "position": {
      "x": 4297,
      "y": 4982
    }
  },
  {
    "id": "test-drive-part-6",
    "nombre": "31. Banco de pruebas – Parte 6 (Test Drive – Part 6)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 40,
    "descripcion": "Prapor ha conseguido un fusil muy poco común, el Aklys Defense Velociraptor .300 BLK. Quiere que lo pruebes en combate real en Customs para ver de qué es capaz.",
    "objetivos": [
      "Eliminar 50 objetivos (PMC, Scavs u otros) en Customs usando un Aklys Defense Velociraptor."
    ],
    "recompensas": [
      "65 000 EXP.",
      "Reputación con Prapor +0,02.",
      "65 000 rublos (68 250 / 74 750 con Centro de inteligencia).",
      "2× chaleco antibalas BNTI Zhuk (EMR)."
    ],
    "youtube": "",
    "prereqIds": [
      "test-drive-part-5"
    ],
    "position": {
      "x": 4520,
      "y": 4982
    }
  },
  {
    "id": "perfect-mediator",
    "nombre": "32. Intermediario perfecto (Perfect Mediator)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 35,
    "descripcion": "Prapor necesita a alguien de total confianza que pueda moverse entre todos los comerciantes sin levantar sospechas. Para ello quiere que ganes al máximo su lealtad.",
    "objetivos": [
      "Alcanza nivel 4 de lealtad con Ragman.",
      "Alcanza nivel 4 de lealtad con Skier.",
      "Alcanza nivel 4 de lealtad con Mechanic.",
      "Alcanza nivel 4 de lealtad con Peacekeeper.",
      "Alcanza nivel 4 de lealtad con Prapor.",
      "Alcanza nivel 4 de lealtad con Therapist.",
      "Alcanza nivel 4 de lealtad con Jaeger."
    ],
    "recompensas": [
      "20 900 EXP.",
      "Reputación con Prapor +0,02.",
      "55 000 rublos (57 750 / 63 250 con Centro de inteligencia).",
      "1× contenedor de armas T H I C C.",
      "Desbloquea compra del fusil de asalto compacto SR-3M 9x39 en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "shaking-up-the-teller"
    ],
    "position": {
      "x": 4891,
      "y": 4774.444580078125
    }
  },
  {
    "id": "belka-and-strelka",
    "nombre": "33. Belka y Strelka (Belka and Strelka)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 5,
    "descripcion": "Prapor quiere comprobar una nueva ruta de extracción controlada por gente del ferrocarril en Customs. Te pide que señales la zona con una bengala verde y salgas vivo por Railroad Passage.",
    "objetivos": [
      "Sobrevive y extrae de Customs por la salida Railroad Passage, activando la extracción con una bengala verde dentro de la zona de señal."
    ],
    "recompensas": [
      "8 200 EXP.",
      "Reputación con Prapor +0,01.",
      "44 000 rublos (46 200 / 50 600 con Centro de inteligencia).",
      "5× granada de mano RGD-5."
    ],
    "youtube": "",
    "prereqIds": [
      "bp-depot"
    ],
    "position": {
      "x": 4240,
      "y": 4613.444580078125
    }
  },
  {
    "id": "polikhim-hobo",
    "nombre": "34. Vagabundo de Polikhim (Polikhim’s Wanderer / Polikhim Hobo)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 10,
    "descripcion": "Prapor conoce al antiguo subjefe de seguridad de Polikhim, ahora un vagabundo que vivía cerca de las vías. Para decirte dónde encontrarlo, quiere que limpies Customs de Scavs.",
    "objetivos": [
      "Eliminar 25 Scavs en Customs."
    ],
    "recompensas": [
      "5 900 EXP.",
      "Reputación con Prapor +0,02.",
      "Reputación con Jaeger +0,01.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "3× granada de mano F-1.",
      "3× granada de mano RGD-5.",
      "1× granada aturdidora Zarya."
    ],
    "youtube": "",
    "prereqIds": [
      "chemical-part-1"
    ],
    "position": {
      "x": 2618,
      "y": 2280
    }
  },
  {
    "id": "regulated-materials",
    "nombre": "35. Material reglamentado (Regulated Materials)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 25,
    "descripcion": "Un cliente extranjero de alto nivel ha pedido material militar muy específico: una pesada batería soviética y varios proyectiles OFZ. Prapor quiere que te infiltras en zonas militares para conseguirlos.",
    "objetivos": [
      "Encontrar en incursión 1× batería militar 6-STEN-140-M.",
      "Entregar la batería militar 6-STEN-140-M a Prapor.",
      "Encontrar en incursión 5× proyectil OFZ 30x165mm.",
      "Entregar los 5 proyectiles OFZ 30x165mm a Prapor."
    ],
    "recompensas": [
      "14 800 EXP.",
      "Reputación con Prapor +0,02.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "10× caja de 10 balas 12.7x55mm PS12B (10 pcs).",
      "Desbloquea trueque por el fusil de asalto ASh-12 12.7x55 en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "polikhim-hobo"
    ],
    "position": {
      "x": 2847,
      "y": 2280
    }
  },
  {
    "id": "big-customer",
    "nombre": "36. Gran cliente (Big Customer)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 22,
    "descripcion": "Prapor quiere que te ocupes personalmente del camión que transportaba los químicos del trato con Skier. Debes localizar el vehículo en Customs, marcarlo y salir con vida. Esta misión forma parte de la rama de decisiones de la cadena 'Chemical'.",
    "objetivos": [
      "Localizar el camión que transportaba los químicos en Customs.",
      "Marcar el vehículo con un marcador MS2000.",
      "Sobrevivir y extraer de Customs tras colocar el marcador."
    ],
    "recompensas": [
      "8 100 EXP.",
      "+0.03 reputación con Prapor.",
      "200 000 rublos (210 000 / 220 000 con Centro de inteligencia).",
      "2× caja de munición (Ammunition case).",
      "1× chaleco antibalas 6B2 (Flora)."
    ],
    "youtube": "",
    "prereqIds": [
      "chemical-part-4"
    ],
    "position": {
      "x": 2991,
      "y": 1534
    }
  },
  {
    "id": "no-offence",
    "nombre": "37. Sin rencores (No Offence)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 27,
    "descripcion": "Si en la cadena de los químicos no apoyaste a Prapor, éste ha perdido confianza en ti. No es de guardar rencor, pero quiere que le hagas un favor para arreglar la situación: conseguirle granadas M67 de fabricación extranjera para su cliente.",
    "objetivos": [
      "Obtener 10 granadas M67 (no es necesario que sean encontradas en incursión).",
      "Entregar las 10 granadas M67 a Prapor."
    ],
    "recompensas": [
      "+0.25 reputación con Prapor. // Actualmente esta quest solo otorga reputación, sin EXP ni rublos adicionales."
    ],
    "youtube": "",
    "prereqIds": [
      "out-of-curiosity"
    ],
    "position": {
      "x": 3257,
      "y": 1493
    }
  },
  {
    "id": "capturing-outposts",
    "nombre": "38. Captura de avanzadas (Capturing Outposts)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 42,
    "descripcion": "Varios puestos fortificados de Scavs han sido capturados por otros PMC y están llenos de botín. Prapor quiere que limpies esas avanzadas para que sus hombres puedan saquear sin oposición. Tendrás que eliminar PMC en tres bases concretas.",
    "objetivos": [
      "Eliminar 8 PMC en la base de Scavs del sitio de construcción fortificado en Customs.",
      "Eliminar 8 PMC en la base médica EMERCOM reconvertida en base de Scavs en Woods.",
      "Eliminar 8 PMC en la estación termal (Health Resort) en Shoreline."
    ],
    "recompensas": [
      "69 999 EXP.",
      "+1.5 niveles de habilidad de Explosivos arrojadizos (Throwables).",
      "1× fusil de asalto ASh-12 12.7×55.",
      "1× brazalete RFARMY (RFARMY armband). // Recompensas basadas en datos actuales; han variado en parches anteriores."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-6"
    ],
    "position": {
      "x": 6207,
      "y": 4827.555847167969
    }
  },
  {
    "id": "intimidator",
    "nombre": "39. Matón (Intimidator / Bully)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 45,
    "descripcion": "Los Scavs se han vuelto demasiado agresivos y están entorpeciendo las rutas de los mensajeros de Prapor. Quiere darles una lección ejemplar: que el simple sonido de los disparos les haga entrar en pánico. Tu misión es eliminar Scavs únicamente con tiros a la cabeza.",
    "objetivos": [
      "Eliminar 40 Scavs con disparos a la cabeza (en cualquier mapa)."
    ],
    "recompensas": [
      "84 000 EXP.",
      "+3 niveles de habilidad Tiro rápido (Aim Drills).",
      "+3 niveles de habilidad Fusiles de asalto (Assault Rifles).",
      "Desbloquea la fabricación de munición 7.62×39mm BP gzh en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-6"
    ],
    "position": {
      "x": 6207,
      "y": 4903.7779541015625
    }
  },
  {
    "id": "escort",
    "nombre": "40. Escoltas (Escort / Escorts)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 60,
    "descripcion": "Prapor tiene una gran cantidad de pedidos y no puede permitirse perder a sus equipos de recolección. Quiere que 'escoltes' sus rutas de saqueo presionando a los ex-PMC locales para que no se atrevan a tocar a sus hombres. Debes eliminar PMC en prácticamente todos los mapas, en una cadena de incursiones donde no puedes morir ni abandonar mal.",
    "objetivos": [
      "No morir, no irte MIA ni extraer con estado 'Run Through' mientras la tarea esté activa (cualquier muerte o fallo reinicia el progreso de la cadena).",
      "Eliminar 4 PMC en Factory diurno.",
      "Eliminar 4 PMC en Customs.",
      "Eliminar 4 PMC en Shoreline.",
      "Eliminar 4 PMC en Reserve (Base militar).",
      "Eliminar 4 PMC en Woods.",
      "Eliminar 4 PMC en Interchange.",
      "Eliminar 4 PMC en The Lab.",
      "Eliminar 4 PMC en Ground Zero."
    ],
    "recompensas": [
      "177 000 EXP.",
      "+5 niveles de habilidad Arma cuerpo a cuerpo (Melee).",
      "+5 niveles de habilidad Pistolas.",
      "+5 niveles de habilidad Fuerza (Strength).",
      "1× chaleco antibalas 6B43 6A Zabralo-Sh (Digital Flora).",
      "1× casco Rys-T.",
      "1× visor balístico para casco Rys-T.",
      "Desbloquea la fabricación del casco Rys-T en el módulo de Baño (Lavatory) nivel 3 del escondite."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-6"
    ],
    "position": {
      "x": 6207,
      "y": 4750.444580078125
    }
  },
  {
    "id": "easy-job-part-1",
    "nombre": "41. Trabajo silencioso – Parte 1 (Easy Job – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 18,
    "descripcion": "Primera parte de la cadena Trabajo silencioso: Prapor quiere que localices un helicóptero militar MI-8 en la planta de tratamiento de agua de Lighthouse, lo marques con un MS2000 y salgas con vida para que sus hombres puedan saquear la zona más tarde.",
    "objetivos": [
      "Localizar el helicóptero en la planta de tratamiento de agua en Lighthouse.",
      "Marcar el helicóptero con un marcador MS2000 en Lighthouse.",
      "Sobrevivir y extraer de Lighthouse tras colocar el marcador."
    ],
    "recompensas": [
      "15 000 EXP.",
      "+0.02 reputación con Prapor.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "1× mochila de incursión 6Sh118 (EMR).",
      "1× fusil de asalto Kalashnikov AK-12 5.45×39."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-2"
    ],
    "position": {
      "x": 5322,
      "y": 4774.444580078125
    }
  },
  {
    "id": "easy-job-part-2",
    "nombre": "42. Trabajo silencioso – Parte 2 (Easy Job – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 18,
    "descripcion": "Segunda parte de Trabajo silencioso: tras marcar el helicóptero, Prapor quiere que asegures el perímetro eliminando a todos los hostiles que se acerquen a la zona del aparato en la planta de tratamiento de Lighthouse.",
    "objetivos": [
      "Eliminar 20 enemigos (Rogues, Scavs o PMC) en el área de la planta de tratamiento de agua en Lighthouse alrededor del helicóptero (solo cuentan las bajas dentro de la zona marcada)."
    ],
    "recompensas": [
      "18 000 EXP.",
      "+0.02 reputación con Prapor.",
      "155 000 rublos (162 750 / 178 250 con Centro de inteligencia).",
      "1× cargador de tambor Molot de 75 balas 7.62×39 para AK (desbloqueado para compra/trueque)."
    ],
    "youtube": "",
    "prereqIds": [
      "easy-job-part-1"
    ],
    "position": {
      "x": 5545,
      "y": 4693.444580078125
    }
  },
  {
    "id": "our-own-land",
    "nombre": "43. Nuestra propia tierra (Our Own Land)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 30,
    "descripcion": "Prapor quiere echar a los USEC de Lighthouse y recuperar 'nuestra propia tierra'. Esta misión solo está disponible para PMC BEAR: deberás cazar USEC en todo el territorio del mapa y entregar sus chapas como prueba.",
    "objetivos": [
      "Eliminar 20 PMC USEC en Lighthouse.",
      "Entregar 20 chapas de identificación de USEC encontradas en incursión a Prapor."
    ],
    "recompensas": [
      "22 000 EXP.",
      "+0.02 reputación con Prapor.",
      "300 000 rublos (más con Centro de inteligencia).",
      "23× munición 23×75mm Zvezda (Flashbang) para KS-23M.",
      "3× escopeta de corredera TOZ KS-23M 23×75mm."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-5"
    ],
    "position": {
      "x": 5984,
      "y": 4774.444580078125
    }
  },
  {
    "id": "reconnaissance",
    "nombre": "44. Reconocimiento (Reconnaissance / Acknowledgement)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 18,
    "descripcion": "Prapor necesita información detallada sobre las defensas de los Rogues en Lighthouse. Quiere que te infiltras en la planta de tratamiento de agua, subas a los tejados de los edificios de oficinas y hagas reconocimiento de sus posiciones de armas pesadas, todo en una sola incursión.",
    "objetivos": [
      "Hacer reconocimiento del tejado del primer edificio de la planta de tratamiento de agua en Lighthouse.",
      "Hacer reconocimiento del tejado del segundo edificio de la planta de tratamiento de agua en Lighthouse.",
      "Hacer reconocimiento del tejado del tercer edificio de la planta de tratamiento de agua en Lighthouse.",
      "Sobrevivir y extraer de Lighthouse tras completar el reconocimiento."
    ],
    "recompensas": [
      "18 000 EXP.",
      "+0.03 reputación con Prapor.",
      "155 000 rublos (162 750 / 178 250 con Centro de inteligencia).",
      "1× chaleco antibalas NPP KlASS Korund-VM (negro).",
      "1× gafas NPP KlASS Condor.",
      "Desbloquea el trueque por placas balísticas Korund-VM (frontal) en Prapor LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "easy-job-part-1"
    ],
    "position": {
      "x": 5545,
      "y": 4774.444580078125
    }
  },
  {
    "id": "you-have-mail",
    "nombre": "45. Tienes correo (You Have Mail)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 10,
    "descripcion": "Prapor te pide un favor personal: antes de que todo se fuera al infierno en Tarkov envió una carta certificada. Ahora quiere que entres en la oficina de correos de Calles de Tarkov, encuentres ese correo registrado y se lo traigas sano y salvo.",
    "objetivos": [
      "Obtener el correo certificado (Registered letter) en Calles de Tarkov.",
      "Entregar la carta a Prapor."
    ],
    "recompensas": [
      "4 800 EXP.",
      "+0.02 reputación con Prapor.",
      "28 000 rublos (29 400 / 32 200 con Centro de inteligencia).",
      "1× casco 6B47 Ratnik-BSh (Olive Drab).",
      "1× pack de munición 5.45×39mm BP gs (30 balas).",
      "Desbloquea la compra de munición 9×18mm PM SP7 gzh en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "postman-pat-part-1"
    ],
    "position": {
      "x": 4891,
      "y": 4693.444580078125
    }
  },
  {
    "id": "glory-to-cpsu-part-1",
    "nombre": "46. Gloria al PCUS – Parte 1 (Glory to the CPSU – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 15,
    "descripcion": "Primera parte de la cadena \"Gloria al PCUS\": Prapor está preocupado por su viejo amigo Oleg, un capitán retirado que vivía en las Calles de Tarkov. Quiere que localices su apartamento y compruebes qué ha sido de él.",
    "objetivos": [
      "Localizar el apartamento del amigo de Prapor en Calles de Tarkov.",
      "Sobrevivir y extraer de Calles de Tarkov tras localizar el apartamento."
    ],
    "recompensas": [
      "7 300 EXP.",
      "Reputación con Prapor +0.02.",
      "42 000 rublos (44 100 / 48 300 con Centro de inteligencia).",
      "2× botella de vodka Tarkovskaya."
    ],
    "youtube": "",
    "prereqIds": [
      "you-have-mail"
    ],
    "position": {
      "x": 5107,
      "y": 4693.444580078125
    }
  },
  {
    "id": "glory-to-cpsu-part-2",
    "nombre": "47. Gloria al PCUS – Parte 2 (Glory to the CPSU – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 22,
    "descripcion": "Segunda parte de \"Gloria al PCUS\": no hay rastro de Oleg en su apartamento. Prapor recuerda que su amigo encontró un nuevo trabajo relacionado con temática soviética, y te envía a investigar su lugar de trabajo para averiguar qué le ocurrió.",
    "objetivos": [
      "Localizar el lugar de trabajo del amigo de Prapor en Calles de Tarkov.",
      "Obtener información sobre el destino del amigo de Prapor.",
      "Sobrevivir y extraer de Calles de Tarkov.",
      "Entregar los datos encontrados a Prapor."
    ],
    "recompensas": [
      "10 100 EXP.",
      "Reputación con Prapor +0.01.",
      "50 000 rublos (52 350 / 57 725 con Centro de inteligencia).",
      "1× fusil Tokarev SVT-40 7.62×54R.",
      "2× cargador SVT-40 7.62×54R de 10 balas.",
      "2× pack de munición 7.62×54mm R PS gzh (20 balas).",
      "Desbloquea el trueque por el fusil automático Tokarev AVT-40 7.62×54R en Prapor LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "glory-to-cpsu-part-1"
    ],
    "position": {
      "x": 5322,
      "y": 4693.444580078125
    }
  },
  {
    "id": "best-job-in-the-world",
    "nombre": "48. El mejor trabajo del mundo (Best Job in the World)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 25,
    "descripcion": "Prapor quiere limpiar varias bandas de merodeadores a larga distancia, pero no piensa arriesgar a sus hombres. Ese \"mejor trabajo del mundo\" te toca a ti: eliminar enemigos a más de 100 metros usando fusiles de la serie AK-74.",
    "objetivos": [
      "Eliminar 30 enemigos (cualquier tipo) a más de 100 metros usando armas de la serie AK-74 (AK-74, AK-74M, AK-74N, AKS-74, AKS-74N, SAG AK)."
    ],
    "recompensas": [
      "15 400 EXP.",
      "Reputación con Prapor +0.03.",
      "Desbloquea el trueque por el lanzagranadas GP-25 Kostyor 40mm bajo cañón en Prapor LL3.",
      "Desbloquea la compra de granadas 40mm VOG-25 en Prapor LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "kings-of-the-rooftops",
      "the-punisher-part-6"
    ],
    "position": {
      "x": 6207,
      "y": 4983.444580078125
    }
  },
  {
    "id": "kings-of-the-rooftops",
    "nombre": "49. Reyes de los tejados (Kings of the Rooftops)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 22,
    "descripcion": "En Calles de Tarkov, varios francotiradores se han adueñado de las azoteas y están cazando a los mensajeros de Prapor como conejos. Quiere que limpies esos tejados eliminando a los francos y salgas vivo de allí.",
    "objetivos": [
      "Eliminar 10 francotiradores (sniper Scavs) en las azoteas de Calles de Tarkov.",
      "Sobrevivir y extraer de Calles de Tarkov."
    ],
    "recompensas": [
      "14 700 EXP.",
      "Reputación con Prapor +0.02.",
      "77 000 rublos (80 850 / 88 550 con Centro de inteligencia)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-4"
    ],
    "position": {
      "x": 5761,
      "y": 4953.7779541015625
    }
  },
  {
    "id": "green-corridor",
    "nombre": "50. Corredor verde (Green Corridor)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 20,
    "descripcion": "Un convoy con carga muy importante debía cruzar la ciudad por un \"corredor verde\" pactado, pero algo salió mal y desapareció. Esta misión solo está disponible para PMC BEAR: Prapor quiere que localices el convoy, determines el punto de emboscada y sobrevivas para informarle.",
    "objetivos": [
      "Localizar el convoy de carga en Calles de Tarkov.",
      "Determinar el lugar de la emboscada en Calles de Tarkov.",
      "Sobrevivir y extraer de Calles de Tarkov."
    ],
    "recompensas": [
      "10 400 EXP.",
      "Reputación con Prapor +0.02.",
      "62 000 rublos (65 100 / 71 300 con Centro de inteligencia).",
      "1× subfusil SR-2M Veresk 9×21.",
      "3× cargador SR-2M 9×21 de 20 balas.",
      "80× munición 9×21mm P gzh."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-7"
    ],
    "position": {
      "x": 3775,
      "y": 3333
    }
  },
  {
    "id": "gendarmerie-security-guard",
    "nombre": "51. Gendarmería – Guardia de seguridad (Gendarmerie – Security Guard)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 21,
    "descripcion": "Primera misión de la mini-cadena «Gendarmería». Prapor quiere que limpies de escoria el edificio Stylobate cerca del centro comercial Klimov en Calles de Tarkov, actuando como su propio cuerpo de seguridad. Solo pistolas, disparos limpios y sin hacer preguntas.",
    "objetivos": [
      "Eliminar 15 objetivos cualesquiera en el edificio Stylobate usando pistolas en Streets of Tarkov."
    ],
    "recompensas": [
      "21 500 EXP.",
      "+0.02 reputación con Prapor.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "1× subfusil SR-2M Veresk 9×21.",
      "4× cargador SR-2M 9×21 de 30 balas.",
      "5× pack de munición 9×21mm PS gzh (30 balas).",
      "Desbloquea trueque por pistola Serdyukov SR-1MP Gyurza 9×21 (variante Tactical 2) en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "the-punisher-part-6"
    ],
    "position": {
      "x": 6207,
      "y": 4671.444580078125
    }
  },
  {
    "id": "gendarmerie-tickets-please",
    "nombre": "52. Gendarmería – Billetes, por favor (Gendarmerie – Tickets, s’il vous plaît)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 21,
    "descripcion": "Segunda misión de la cadena «Gendarmería». Esta vez Prapor quiere el cine Rodina completamente bajo control. Te manda a ‘pasar lista’ entre los saqueadores del cine usando solo subfusiles.",
    "objetivos": [
      "Eliminar 25 objetivos cualesquiera en el cine Rodina usando subfusiles (SMG) en Streets of Tarkov."
    ],
    "recompensas": [
      "22 600 EXP.",
      "+0.03 reputación con Prapor.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "2× fusil de asalto Kalashnikov AK-103 7.62×39.",
      "4× cargador AK-103 7.62×39 de 30 balas.",
      "9× pack de munición 7.62×39mm PP gzh (20 balas).",
      "Desbloquea trueque por subfusil SR-2M Veresk 9×21 (variante FSB) en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gendarmerie-security-guard"
    ],
    "position": {
      "x": 6427,
      "y": 4671.444580078125
    }
  },
  {
    "id": "gendarmerie-district-patrol",
    "nombre": "53. Gendarmería – Ronda de barrio (Gendarmerie – District Patrol / Ronde de quartier)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 21,
    "descripcion": "Última misión (por ahora) de la división de gendarmería de Prapor. Toca asegurar el complejo de apartamentos Cardinal en Streets of Tarkov, haciendo limpieza a fondo del vecindario con fusiles de asalto o carabinas.",
    "objetivos": [
      "Eliminar 30 objetivos cualesquiera en el complejo de apartamentos Cardinal usando fusiles de asalto o carabinas de asalto en Streets of Tarkov."
    ],
    "recompensas": [
      "25 000 EXP.",
      "+0.04 reputación con Prapor.",
      "185 000 rublos (194 250 / 212 750 con Centro de inteligencia).",
      "16× botella de vodka Tarkovskaya.",
      "1× chaleco antibalas BNTI Zhuk (EMR).",
      "Desbloquea trueque por fusil de asalto Kalashnikov AK-12 5.45×39 en Prapor LL4.",
      "Desbloquea crafteo de munición 5.45×39mm BP gs en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "gendarmerie-tickets-please"
    ],
    "position": {
      "x": 6655,
      "y": 4671.444580078125
    }
  },
  {
    "id": "the-good-old-days-part-1",
    "nombre": "54. Los viejos tiempos – Parte 1 (The Good Old Days – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 27,
    "descripcion": "Misión exclusiva para propietarios de la edición Edge of Darkness. Prapor quiere rememorar la vieja META de Factory: Colt M4A1, chaleco 6B43 y casco Kiver-M. Tu tarea es recrear aquel ‘kit clásico’ y demostrar que sigue siendo letal.",
    "objetivos": [
      "Eliminar 10 operativos de PMC en Factory usando un Colt M4A1 mientras llevas un chaleco antibalas 6B43 y un casco Kiver-M."
    ],
    "recompensas": [
      "76 000 EXP.",
      "+0.03 reputación con Prapor.",
      "256 000 rublos.",
      "1× fusil Springfield Armory M1A 7.62×51 (versión 2k18 NY).",
      "2× cargador 7.62×51 de 20 balas para M1A.",
      "3× caja de munición 7.62×51mm M62 Tracer (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "shooting-cans"
    ],
    "position": {
      "x": 3143,
      "y": 4693.444580078125
    }
  },
  {
    "id": "the-good-old-days-part-2",
    "nombre": "55. Los viejos tiempos – Parte 2 (The Good Old Days – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": 27,
    "descripcion": "Segunda misión exclusiva Edge of Darkness en la mini-cadena de «Los viejos tiempos». Tras completar Airmail, Prapor quiere que pruebes en combate la TT-33 dorada, repitiendo otra ‘configuración legendaria’ a su manera.",
    "objetivos": [
      "Eliminar 10 objetivos cualesquiera usando la pistola TT-33 dorada (Golden TT-33)."
    ],
    "recompensas": [
      "62 400 EXP.",
      "+0.03 reputación con Prapor.",
      "226 000 rublos.",
      "2× estuche de munición (Ammunition case)."
    ],
    "youtube": "",
    "prereqIds": [
      "airmail"
    ],
    "position": {
      "x": 3734,
      "y": 2492.7778091430664
    }
  },
  {
    "id": "spectator",
    "nombre": "56. Espectador (Spectator)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": null,
    "descripcion": "Prapor quiere montar un pequeño sistema de vigilancia para saber qué pasa en Tarkov en todo momento. Te pide que coloques varias cámaras Wi-Fi en puntos elevados y transitados de diferentes mapas para que pueda ‘verlo todo’ a distancia.",
    "objetivos": [
      "Instalar una cámara Wi-Fi en la cornisa de la montaña en Bosque (Woods).",
      "Instalar una cámara Wi-Fi en la torre del embarcadero en Costa (Shoreline).",
      "Instalar una cámara Wi-Fi en el pasillo de oficinas de Fábrica (Factory)."
    ],
    "recompensas": [
      "74 000 EXP.",
      "+0.02 reputación con Prapor.",
      "202 000 rublos.",
      "5× botella de cerveza Pevko Light.",
      "5× botella de vodka Tarkovskaya."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 3828,
      "y": 5137
    }
  },
  {
    "id": "hell-on-earth-part-1",
    "nombre": "57. Infierno en la Tierra – Parte 1 (Hell on Earth – Part 1)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": null,
    "descripcion": "Prapor ha oído hablar de un videojuego en el que se dispara a demonios con una escopeta de cañones recortados y quiere un arma igual para hacer un regalo… y quizá para uso propio. Te encarga que prepares un MP-43-1C con un aspecto “infernal” siguiendo sus especificaciones.",
    "objetivos": [
      "Modificar 1× fusil superpuesto MP-43-1C calibre 12 para que cumpla las especificaciones de Prapor (cañón recortado y configuración solicitada).",
      "Entregar 1× MP-43-1C calibre 12 modificado a Prapor."
    ],
    "recompensas": [
      "15 600 EXP.",
      "+0.01 reputación con Prapor.",
      "35 700 rublos.",
      "2× chaleco antibalas NPP KlASS Kora-Kulon (Digital Flora)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-good-old-days-part-1"
    ],
    "position": {
      "x": 3360,
      "y": 4613.444580078125
    }
  },
  {
    "id": "hell-on-earth-part-2",
    "nombre": "58. Infierno en la Tierra – Parte 2 (Hell on Earth – Part 2)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": null,
    "descripcion": "Después de preparar la escopeta, Prapor quiere que la pongas a prueba contra ‘los demonios’ de Tarkov: los sectarios. Debes usar el mismo MP-43-1C para limpiar a varios de estos objetivos encapuchados.",
    "objetivos": [
      "Eliminar 3 sectarios (hombres encapuchados) usando un fusil superpuesto MP-43-1C calibre 12 (cualquier configuración es válida)."
    ],
    "recompensas": [
      "98 000 EXP.",
      "324 000 rublos.",
      "+0.03 reputación con Prapor.",
      "3× granada de mano artesanal VOG-25 Khattabka.",
      "3× granada de mano RGN.",
      "3× granada de mano RGO."
    ],
    "youtube": "",
    "prereqIds": [
      "hell-on-earth-part-1"
    ],
    "position": {
      "x": 3574,
      "y": 4613.444580078125
    }
  },
  {
    "id": "owner",
    "nombre": "59. Propietario (Owner)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": null,
    "descripcion": "Misión avanzada de Prapor relacionada con el propietario de ciertos bienes/documentos en Tarkov. De momento sólo se ha añadido la cabecera de la misión en esta página; los detalles exactos de localización del objeto de misión están pendientes de documentar.",
    "objetivos": [
      "Completar los objetivos de la misión “Propietario” en el juego (localizar y extraer con el objeto de misión específico).",
      "Entregar el objeto de misión de “Propietario” a Prapor."
    ],
    "recompensas": [
      "Recompensas exactas (EXP, rublos, reputación y objetos) pendientes de documentar aquí. Consulta la wiki de Escape from Tarkov hasta que se actualice esta entrada."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 3590,
      "y": 5137
    }
  },
  {
    "id": "special-communications",
    "nombre": "60. Comunicaciones especiales (Special Communications)",
    "trader": "Prapor",
    "traderColor": "prapor",
    "nivel": null,
    "descripcion": "Prapor necesita acceder a comunicaciones especiales y equipo relacionado para seguirle la pista a lo que ocurre en Tarkov. Esta misión implica localizar y/o entregar equipos de comunicación específicos, pero los detalles finos todavía no se han volcado en esta página.",
    "objetivos": [
      "Completar los objetivos de la misión “Comunicaciones especiales” tal y como aparecen en el juego (localizar, extraer y/o entregar el equipo de comunicaciones requerido)."
    ],
    "recompensas": [
      "Recompensas exactas (EXP, rublos, reputación con Prapor y objetos de comunicación/militares) pendientes de documentar aquí. Consulta la wiki de Escape from Tarkov hasta que se actualice esta entrada."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 3353,
      "y": 5137
    }
  },
  {
    "id": "saving-the-mole",
    "nombre": "1. Salvando al topo (Saving the Mole)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Primera misión de Mechanic en Ground Zero. Quiere que investigues qué ocurrió con un científico de TerraGroup acusado de filtrar datos y con el grupo USEC enviado para ‘silenciarlo’. Tu objetivo es seguir el rastro en el complejo de TerraGroup, localizar el despacho del científico y extraer su disco duro con información sensible.",
    "objetivos": [
      "Acceder al despacho del científico de laboratorio en Ground Zero (TerraGroup).",
      "Localizar (opcional) al grupo USEC en el aparcamiento del complejo de TerraGroup.",
      "Localizar (opcional) el cuerpo del científico en el complejo de TerraGroup.",
      "Localizar y obtener el disco duro del científico en su despacho.",
      "Sobrevivir y extraer de la incursión con el disco duro y entregarlo a Mechanic."
    ],
    "recompensas": [
      "3 800 EXP.",
      "+0.01 reputación con Mechanic.",
      "15 000 rublos (15 750 / 17 250 con Centro de inteligencia).",
      "2× tubo de soldadura en frío Poxeram.",
      "2× piezas metálicas de repuesto."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 2157,
      "y": 7001.778076171875
    }
  },
  {
    "id": "gunsmith-part-1",
    "nombre": "2. Armero – Parte 1 (Gunsmith - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 2,
    "descripcion": "Mechanic quiere comprobar si entiendes lo básico de la modificación de armas. Te pide preparar una escopeta MP-133 con ciertas características mínimas de ergonomía, retroceso, capacidad y accesorios (mira y dispositivo táctico), para usarla como modelo de referencia en futuros encargos.",
    "objetivos": [
      "Modificar una escopeta MP-133 para que cumpla las especificaciones de Mechanic (ergonomía suficiente, retroceso limitado, al menos 6 huecos de capacidad en cargador/tubo, una mira instalada y un dispositivo táctico).",
      "Entregar la MP-133 modificada a Mechanic."
    ],
    "recompensas": [
      "800 EXP.",
      "+0.01 reputación con Mechanic.",
      "10 000 rublos (10 500 / 11 500 con Centro de inteligencia).",
      "1× tuerca.",
      "1× tornillos (bolts).",
      "1× pack de munición 12/70 makeshift .50 BMG slug (25 balas).",
      "Desbloquea compra del bloque de gas AR-15 Windham Weaponry Rail Gas Block en Mechanic LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "saving-the-mole"
    ],
    "position": {
      "x": 2360,
      "y": 7001.778076171875
    }
  },
  {
    "id": "gunsmith-part-2",
    "nombre": "3. Armero – Parte 2 (Gunsmith - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 5,
    "descripcion": "Continuación de la cadena Armero. Mechanic quiere un AKS-74U compacto, con guardamanos Zenit B-11, cargador ampliado y buenas estadísticas de control y ergonomía. El arma debe cumplir unas especificaciones mínimas de tamaño máximo en la cuadrícula, ergonomía, retroceso y alcance de puntería.",
    "objetivos": [
      "Modificar un AKS-74U para que cumpla las especificaciones de Mechanic (guardamanos Zenit B-11, cargador de alta capacidad, tamaño máximo de 6 huecos, ergonomía alta, bajo retroceso y alcance de puntería suficiente).",
      "Entregar el AKS-74U modificado a Mechanic."
    ],
    "recompensas": [
      "2 000 EXP.",
      "+0.01 reputación con Mechanic.",
      "15 000 rublos (15 750 / 17 250 con Centro de inteligencia).",
      "2× condensadores.",
      "2× rollos de cable (bundle of wires).",
      "2× bombilla.",
      "Desbloquea compra del guardamanos de polímero de la serie AK-100 en Prapor LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-1"
    ],
    "position": {
      "x": 2597,
      "y": 7001.778076171875
    }
  },
  {
    "id": "gunsmith-part-3",
    "nombre": "4. Armero – Parte 3 (Gunsmith - Part 3)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 7,
    "descripcion": "El siguiente encargo de Mechanic consiste en preparar un subfusil MP5 configurado según sus requisitos, normalmente en una variante silenciosa orientada al combate cercano pero estable y manejable. Deberás ajustar el arma para que cumpla con unos valores concretos de ergonomía, retroceso y accesorios.",
    "objetivos": [
      "Modificar un MP5 para que cumpla las especificaciones de Mechanic (configuración tipo SD/silenciada, buena ergonomía, poco retroceso y accesorios adecuados).",
      "Entregar el MP5 modificado a Mechanic."
    ],
    "recompensas": [
      "2 800 EXP.",
      "+0.01 reputación con Mechanic.",
      "250 dólares (263 / 288 con Centro de inteligencia).",
      "2× visor prismático SwampFox Trihawk 3×30.",
      "2× empuñadura delantera Magpul RVG (FDE).",
      "Desbloquea trueque por pistola Glock 17 9×19 (variante Tac 3) en Mechanic LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-1"
    ],
    "position": {
      "x": 2597,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-4",
    "nombre": "5. Armero – Parte 4 (Gunsmith - Part 4)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 9,
    "descripcion": "Mechanic recibe un pedido de un cliente cazador: quiere un fusil Simonov OP-SKS modernizado, con silenciador, cargador de alta capacidad y buenos valores de ergonomía y control. Tu trabajo es preparar un OP-SKS que encaje en estas especificaciones y entregárselo completo.",
    "objetivos": [
      "Modificar un OP-SKS para que cumpla las especificaciones de Mechanic (silenciador instalado, cargador de al menos 20 balas, peso máximo, ergonomía mínima, retroceso máximo y alcance de puntería suficiente).",
      "Entregar el OP-SKS modificado a Mechanic."
    ],
    "recompensas": [
      "3 600 EXP.",
      "+0.01 reputación con Mechanic.",
      "25 000 rublos (26 250 / 28 750 con Centro de inteligencia).",
      "2× pólvora \"Kite\".",
      "1× batería de coche.",
      "1× motor eléctrico.",
      "Desbloquea compra del subfusil PP-19-01 Vityaz 9×19 (variante Zenit) en Ref LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-2",
      "gunsmith-part-3"
    ],
    "position": {
      "x": 2828,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-5",
    "nombre": "6. Armero – Parte 5 (Gunsmith - Part 5)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 10,
    "descripcion": "Quinta parte de la cadena Armero. Mechanic quiere un Remington Model 870 modernizado: guardamanos Magpul MOE, empuñadura táctica, dispositivo táctico y buenas estadísticas de ergonomía y retroceso. Básicamente, una escopeta táctica ligera y cómoda para combate cercano.",
    "objetivos": [
      "Modificar un Remington Model 870 para que cumpla las especificaciones de Mechanic.",
      "Entregar el Remington Model 870 modificado a Mechanic."
    ],
    "recompensas": [
      "4 100 EXP.",
      "+0.01 reputación con Mechanic.",
      "300 dólares (315 / 345 con Centro de inteligencia).",
      "3× piezas de arma.",
      "Desbloquea el trueque por la caja de munición (Ammunition case) en Mechanic LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-4"
    ],
    "position": {
      "x": 3055,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-6",
    "nombre": "7. Armero – Parte 6 (Gunsmith - Part 6)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 14,
    "descripcion": "Sexta parte de Armero. Mechanic quiere un AKM configurado para ser cómodo y controlable: empuñadura delantera Fortis Shift, silenciador y cargador Magpul de 30 balas, con buena ergonomía, poco retroceso y un alcance de puntería elevado.",
    "objetivos": [
      "Modificar un AKM para que cumpla las especificaciones de Mechanic (Fortis Shift, silenciador, cargador Magpul, requisitos de ergonomía/retroceso/alcance).",
      "Entregar el AKM modificado a Mechanic."
    ],
    "recompensas": [
      "5 800 EXP.",
      "+0.01 reputación con Mechanic.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "2× bolsa de tornillos.",
      "2× relé de control de fase.",
      "3× caja de munición 7.62×39mm BP gzh (20 balas).",
      "Desbloquea el trueque por el tope anti-retroceso GP-25 para AK en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-5"
    ],
    "position": {
      "x": 3272,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-7",
    "nombre": "8. Armero – Parte 7 (Gunsmith - Part 7)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 15,
    "descripcion": "Séptima parte de Armero. Hay un encargo para un M4A1 muy completo: necesita silenciador, cargador de 60 balas, buena ergonomía, poco retroceso, peso contenido y un alcance de puntería largo. Un ‘arma de la democracia’ ajustada al milímetro.",
    "objetivos": [
      "Modificar un M4A1 para que cumpla las especificaciones de Mechanic (silenciador, cargador de 60, requisitos de ergonomía/retroceso/peso/alcance).",
      "Entregar el M4A1 modificado a Mechanic."
    ],
    "recompensas": [
      "6 300 EXP.",
      "+0.01 reputación con Mechanic.",
      "500 dólares (525 / 575 con Centro de inteligencia).",
      "1× alicates Elite.",
      "1× taladro eléctrico.",
      "Desbloquea la compra del bloque de gas AR-15 Daniel Defense MK12 Low Profile en Mechanic LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-6"
    ],
    "position": {
      "x": 3486,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-8",
    "nombre": "9. Armero – Parte 8 (Gunsmith - Part 8)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 17,
    "descripcion": "Octava parte de Armero. Mechanic tiene un pedido muy concreto: un AKS-74N prácticamente completo con piezas Zenit. Ergonomía muy alta, poco retroceso y arma compacta, montando B-30 + B-31S, cubierta B-33, empuñadura RK-0, empuñadura de pistola RK-3, culata PT-3, Klesch-2IKS, freno DTK-1 y cargador AK-12.",
    "objetivos": [
      "Modificar un AKS-74N para que cumpla las especificaciones de Mechanic (configuración completa con piezas Zenit y requisitos de tamaño/ergonomía/retroceso).",
      "Entregar el AKS-74N modificado a Mechanic."
    ],
    "recompensas": [
      "8 600 EXP.",
      "+0.02 reputación con Mechanic.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "2× guardamanos táctico CAA XRSU47SU para AKS-74U.",
      "2× freno de boca JMac Customs RRD-4C multi-calibre.",
      "2× caja de munición 5.45×39mm BS gs (30 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-7"
    ],
    "position": {
      "x": 3699,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-9",
    "nombre": "10. Armero – Parte 9 (Gunsmith - Part 9)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 19,
    "descripcion": "Novena parte de Armero. Esta vez el encargo es para un verdadero entusiasta: una pistola SIG P226R con corredera Stainless Elite, empuñadura de madera Stainless Elite, cargador ampliado y linterna, con ergonomía altísima y retroceso contenido.",
    "objetivos": [
      "Modificar una P226R para que cumpla las especificaciones de Mechanic (corredera y empuñadura Stainless Elite, cargador extendido, dispositivo táctico y requisitos de ergonomía/retroceso).",
      "Entregar la P226R modificada a Mechanic."
    ],
    "recompensas": [
      "9 800 EXP.",
      "+0.02 reputación con Mechanic.",
      "300 euros (315 / 345 con Centro de inteligencia).",
      "2× pólvora \"Hawk\".",
      "Desbloquea la compra del fusil de asalto Colt M4A1 5.56×45 (variante SOPMOD I) en Mechanic LL3.",
      "Desbloquea la compra de munición 5.7×28mm R37.F en Mechanic LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-8"
    ],
    "position": {
      "x": 3906,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-10",
    "nombre": "11. Armero – Parte 10 (Gunsmith - Part 10)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 19,
    "descripcion": "Décima parte de la cadena Armero. Mechanic quiere que montes un fusil DVL-10 Saboteur silenciado y muy manejable, cumpliendo unos requisitos concretos de ergonomía, retroceso, alcance de puntería y tamaño total del arma.",
    "objetivos": [
      "Modificar un fusil DVL-10 Saboteur para que cumpla las especificaciones de Mechanic (silenciado, valores mínimos de ergonomía, retroceso y alcance de puntería, tamaño máximo del arma).",
      "Entregar el DVL-10 modificado a Mechanic."
    ],
    "recompensas": [
      "10 500 EXP.",
      "+0.02 reputación con Mechanic.",
      "65 000 rublos (68 250 / 74 750 con Centro de inteligencia).",
      "1× contenedor de objetos Gamma (Gamma container)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-9"
    ],
    "position": {
      "x": 4103,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-11",
    "nombre": "12. Armero – Parte 11 (Gunsmith - Part 11)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 20,
    "descripcion": "Undécima parte de Armero. El encargo ahora es un fusil Kalashnikov RPK-16 preparado para fuego de apoyo: buena ergonomía, poco retroceso, cargador de alta capacidad y visor adecuado para distancias medias.",
    "objetivos": [
      "Modificar un RPK-16 para que cumpla las especificaciones de Mechanic (cargador de alta capacidad, requisitos de ergonomía, retroceso, alcance de puntería y tamaño).",
      "Entregar el RPK-16 modificado a Mechanic."
    ],
    "recompensas": [
      "11 000 EXP.",
      "+0.02 reputación con Mechanic.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "1× caja de armas mediana (Weapon case)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-10"
    ],
    "position": {
      "x": 4309,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-12",
    "nombre": "13. Armero – Parte 12 (Gunsmith - Part 12)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 21,
    "descripcion": "Duodécima parte de Armero. Mechanic quiere comprobar qué tal te manejas con fusiles occidentales de alta gama: hay que preparar un M1A táctico con buenas estadísticas globales y varios accesorios específicos.",
    "objetivos": [
      "Modificar un Springfield Armory M1A para que cumpla las especificaciones de Mechanic (culata táctica, cargador de alta capacidad y los requisitos de ergonomía, retroceso, alcance de puntería y tamaño).",
      "Entregar el M1A modificado a Mechanic."
    ],
    "recompensas": [
      "12 000 EXP.",
      "+0.02 reputación con Mechanic.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "1× caja de armas THICC (T H I C C Weapon case)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-11"
    ],
    "position": {
      "x": 4528,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-13",
    "nombre": "14. Armero – Parte 13 (Gunsmith - Part 13)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 23,
    "descripcion": "Decimotercera parte de Armero. Esta vez Mechanic pide un fusil de francotirador SVDS preparado para tiro de precisión a larga distancia, con silenciador, visor óptico potente y estadísticas altas de precisión y control.",
    "objetivos": [
      "Modificar un SVDS para que cumpla las especificaciones de Mechanic (silenciado, visor óptico de alta potencia y requisitos de ergonomía, retroceso, alcance de puntería y tamaño).",
      "Entregar el SVDS modificado a Mechanic."
    ],
    "recompensas": [
      "12 800 EXP.",
      "+0.02 reputación con Mechanic.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "1× caja de armas THICC (T H I C C Weapon case)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-12"
    ],
    "position": {
      "x": 4744,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-14",
    "nombre": "15. Armero – Parte 14 (Gunsmith - Part 14)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 25,
    "descripcion": "Decimocuarta parte de la cadena Armero. El encargo final de este tramo es un fusil de francotirador Remington Model 700 configurado para tiro muy preciso: silenciador, visor de alta gama, ergonómico y con retroceso bien controlado.",
    "objetivos": [
      "Modificar un Remington Model 700 para que cumpla las especificaciones de Mechanic (silenciado, visor de alta gama y requisitos de ergonomía, retroceso, alcance de puntería y tamaño).",
      "Entregar el Model 700 modificado a Mechanic."
    ],
    "recompensas": [
      "13 500 EXP.",
      "+0.02 reputación con Mechanic.",
      "130 000 rublos (136 500 / 149 500 con Centro de inteligencia).",
      "1× caja de armas THICC (T H I C C Weapon case)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-13"
    ],
    "position": {
      "x": 4954,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-15",
    "nombre": "16. Armero – Parte 15 (Gunsmith - Part 15)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 29,
    "descripcion": "Decimoquinta parte de la cadena Armero. Mechanic quiere que prepares un AS VAL muy específico: culata GL-SHOCK, dispositivo táctico AN/PEQ-15, visor nocturno NSPU-M y cargador de 30 balas, manteniendo buena ergonomía y poco retroceso.",
    "objetivos": [
      "Modificar un AS VAL para que cumpla las especificaciones de Mechanic (culata GL-SHOCK, AN/PEQ-15, visor NSPU-M, cargador de 30 balas, ergonomía ≥ 33 y suma de retroceso ≤ 220).",
      "Entregar el AS VAL modificado a Mechanic."
    ],
    "recompensas": [
      "19 400 EXP.",
      "+0.02 reputación con Mechanic.",
      "1× llave de reja interior de Kiba Arms (Kiba Arms inner grate door key).",
      "1× manómetro (Pressure gauge).",
      "Desbloquea la compra del montaje VSS/VAL TOZ 6P29M en Jaeger LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-14"
    ],
    "position": {
      "x": 5152,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-16",
    "nombre": "17. Armero – Parte 16 (Gunsmith - Part 16)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 30,
    "descripcion": "Decimosexta parte de Armero. Mechanic tiene un encargo para un francotirador BEAR: un DVL-10 con visor de largo alcance y dispositivo láser, con bajo retroceso, buena ergonomía, alcance de puntería extremo y peso contenido.",
    "objetivos": [
      "Modificar un DVL-10 para que cumpla las especificaciones de Mechanic (ergonomía ≥ 40, suma de retroceso ≤ 450, alcance de puntería ≥ 2000 m, peso ≤ 6.7 kg, con visor y dispositivo táctico).",
      "Entregar el DVL-10 modificado a Mechanic."
    ],
    "recompensas": [
      "20 400 EXP.",
      "+0.03 reputación con Mechanic.",
      "200 000 rublos (210 000 / 230 000 con Centro de inteligencia).",
      "2× bolsa de tornillos (Pack of screws).",
      "1× taladro eléctrico (Electric drill).",
      "1× bidón de combustible metálico (Metal fuel tank).",
      "Desbloquea la compra del fusil Lone Star TX-15 DML 5.56×45 en Skier LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-15"
    ],
    "position": {
      "x": 5358,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-17",
    "nombre": "18. Armero – Parte 17 (Gunsmith - Part 17)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 31,
    "descripcion": "Decimoséptima parte de Armero. Mechanic quiere un AK-102 ‘de vitrina’: freno Ferfrans CRD, empuñadura táctica Magpul AFG en verde OD, linterna Klesch-2U, buffer tube de RPK-16 y cargador Circle 10, manteniendo el arma muy ergonómica y controlable.",
    "objetivos": [
      "Modificar un AK-102 para que cumpla las especificaciones de Mechanic (Ferfrans CRD, Magpul AFG OD, Klesch-2U, buffer tube de RPK-16 y cargador Circle 10; ergonomía ≥ 68, suma de retroceso ≤ 300, alcance de puntería ≥ 800 m y tamaño ≤ 8 casillas).",
      "Entregar el AK-102 modificado a Mechanic."
    ],
    "recompensas": [
      "21 400 EXP.",
      "+0.03 reputación con Mechanic.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia).",
      "4× bujía (Spark plug).",
      "2× batería GreenBat de litio (GreenBat lithium battery).",
      "Desbloquea la compra de la empuñadura Magpul AFG (Olive Drab) en Mechanic LL3.",
      "Desbloquea la compra de la culata/empuñadura AR-15 Hera Arms CQR en Mechanic LL4.",
      "Desbloquea la compra del adaptador de boca AK CNC Warrior 5.56×45 en Mechanic LL3.",
      "Desbloquea la compra de la culata/empuñadura AKM/AK-74 Hera Arms CQR47 en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-16"
    ],
    "position": {
      "x": 5570,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-18",
    "nombre": "19. Armero – Parte 18 (Gunsmith - Part 18)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 33,
    "descripcion": "Decimoctava parte de Armero. Ahora el encargo es un AKMN ‘Magpul edition’: guardamanos, culata y empuñadura Magpul en negro, cargador PMAG, freno Rotor 43, empuñadura táctica Magpul AFG M-LOK y visor híbrido EOTech HHS-1, todo ello con buen control y ergonomía.",
    "objetivos": [
      "Modificar un AKMN para que cumpla las especificaciones de Mechanic (piezas Magpul negras indicadas, freno Rotor 43, empuñadura táctica Magpul M-LOK AFG, visor EOTech HHS-1, ergonomía ≥ 45, suma de retroceso ≤ 350, peso ≤ 5 kg y alcance de puntería ≥ 500 m).",
      "Entregar el AKMN modificado a Mechanic."
    ],
    "recompensas": [
      "23 100 EXP.",
      "+0.03 reputación con Mechanic.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "1× visor EOTech Vudu 1–6×24 30 mm.",
      "1× supresor Hexagon Wafflemaker 5.45×39 para AK-74.",
      "1× freno de boca Hexagon Reactor 5.45×39 para AK.",
      "Desbloquea la compra de la linterna táctica Steiner LAS/TAC 2 en Mechanic LL3.",
      "Desbloquea la compra del adaptador de boca AKM 7.62×39 Kiba Arms .308 en Mechanic LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-17"
    ],
    "position": {
      "x": 5778,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-19",
    "nombre": "20. Armero – Parte 19 (Gunsmith - Part 19)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 36,
    "descripcion": "Decimonovena parte de Armero. Quest con temporizador: se desbloquea 21 horas después de la Parte 18. Mechanic necesita un SVDS con chasis SAG MK1, culata Magpul UBR GEN2 negra, empuñadura Magpul MOE negra, visor March Tactical 3–24×42 y supresor, manteniendo el retroceso bajo control.",
    "objetivos": [
      "Modificar un SVDS para que cumpla las especificaciones de Mechanic (chasis SAG MK1, culata Magpul UBR GEN2 negra, empuñadura Magpul MOE negra, visor March Tactical 3–24×42, supresor, ergonomía ≥ 15 y suma de retroceso ≤ 500).",
      "Entregar el SVDS modificado a Mechanic."
    ],
    "recompensas": [
      "25 500 EXP.",
      "+0.03 reputación con Mechanic.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "1× llave de carraca (Ratchet wrench).",
      "1× cortacables Bulbex (Bulbex cable cutter).",
      "Desbloquea la compra de la empuñadura AK Custom Arms AGS-74 PRO + Sniper Kit en Skier LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-18"
    ],
    "position": {
      "x": 5983,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-20",
    "nombre": "21. Armero – Parte 20 (Gunsmith - Part 20)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Vigésima parte de la cadena Armero. Mechanic tiene un encargo para un M1A muy específico: un fusil táctico de 7,62×51 con buena ergonomía, retroceso contenido y varios accesorios de gama alta orientados a tiro medio-largo. Debes montar un M1A que cumpla unas estadísticas mínimas y una combinación concreta de piezas.",
    "objetivos": [
      "Modificar un M1A para que cumpla las especificaciones de Mechanic (ergonomía mínima, retroceso máximo, peso y longitud dentro de los límites, así como un conjunto concreto de accesorios tácticos).",
      "Entregar el M1A modificado a Mechanic."
    ],
    "recompensas": [
      "26 600 EXP.",
      "+0.03 reputación con Mechanic.",
      "500 euros (525 / 575 con Centro de inteligencia).",
      "Varios accesorios Hera Arms CQR (culata/empuñadura y empuñadura delantera).",
      "Desbloquea compras/trueques de mods avanzados para fusiles 7,62×51 (por ejemplo, freno de boca KAC QDC y culatín de goma Magpul para culatas MOE Carbine)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-19"
    ],
    "position": {
      "x": 6191,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-21",
    "nombre": "22. Armero – Parte 21 (Gunsmith - Part 21)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 38,
    "descripcion": "Parte 21 de Armero y una de las más peculiares: Mechanic te pide DOS armas distintas en el mismo encargo. Debes preparar un fusil de cerrojo Remington Model 700 orientado a tiro de precisión y una pistola M1911 configurada para combate táctico, ambas cumpliendo requisitos concretos de ergonomía, retroceso, peso, durabilidad y alcance de puntería.",
    "objetivos": [
      "Modificar un fusil Remington Model 700 para que cumpla las especificaciones de Mechanic (configuración de francotirador, buena ergonomía, poco retroceso, peso limitado y alcance de puntería elevado).",
      "Modificar una pistola M1911 para que cumpla las especificaciones de Mechanic (mejoras tácticas, visor adecuado y requisitos mínimos de ergonomía y control).",
      "Entregar el Model 700 y la M1911 modificados a Mechanic."
    ],
    "recompensas": [
      "EXP elevada (más de 27 000 EXP).",
      "Aumento de reputación con Mechanic.",
      "Cantidad notable de euros.",
      "Varios accesorios de alta gama para fusiles de cerrojo y armas cortas (miras, culatas, piezas tácticas)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-20"
    ],
    "position": {
      "x": 6403,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-22",
    "nombre": "23. Armero – Parte 22 (Gunsmith - Part 22)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 39,
    "descripcion": "Parte 22 de Armero. Quest muy cara: Mechanic quiere un M4A1 con mira térmica Trijicon REAP-IR y configuración casi end-game. El arma debe cumplir requisitos muy estrictos de ergonomía, retroceso, peso, longitud y alcance de puntería, convirtiéndola en una plataforma polivalente de alto nivel.",
    "objetivos": [
      "Modificar un M4A1 para que cumpla las especificaciones de Mechanic (mira térmica REAP-IR, ergonomía elevada, retroceso por debajo de cierto umbral, peso limitado, alcance de puntería alto y configuración general ajustada al encargo).",
      "Entregar el M4A1 modificado a Mechanic."
    ],
    "recompensas": [
      "EXP muy alta (más de 28 000 EXP).",
      "Aumento de reputación con Mechanic.",
      "Gran cantidad de euros.",
      "Varios accesorios y mods avanzados para AR-15/M4 (guardamanos, frenos de boca/supresores, monturas y similares)."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-21"
    ],
    "position": {
      "x": 6614,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-23",
    "nombre": "24. Armero – Parte 23 (Gunsmith - Part 23)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Parte 23 de Armero. Mechanic quiere un fusil CMMG Mk47 Mutant extremadamente customizado. Debes montar un Mk47 con piezas muy concretas (culata, guardamanos, empuñaduras, cargador de tambor, freno de boca, visor holográfico, etc.) y cumplir unos valores mínimos de ergonomía y control de retroceso.",
    "objetivos": [
      "Modificar un CMMG Mk47 Mutant para que cumpla las especificaciones de Mechanic (conjunto muy concreto de piezas, ergonomía mínima, retroceso máximo, peso y longitud dentro de los límites, más visor y dispositivo táctico adecuados).",
      "Entregar el Mk47 Mutant modificado a Mechanic."
    ],
    "recompensas": [
      "Alrededor de 29 500 EXP.",
      "+0.03 reputación con Mechanic.",
      "1 500 euros (con bonus según Centro de inteligencia).",
      "Mira térmica SIG ECHO y otros mods de alto nivel para plataformas 7,62.",
      "Desbloquea compras/trueques de piezas específicas para el Mk47 en Mechanic."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-22"
    ],
    "position": {
      "x": 6828,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-24",
    "nombre": "25. Armero – Parte 24 (Gunsmith - Part 24)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Parte 24 de Armero. Mechanic te encarga un KAC SR-25 con kit muy específico: silenciador KAC PRS/QDC, culata Magpul PRS GEN3, empuñadura HK Ergo PSG-1, foregrip Stark SE-5, dispositivo táctico DBAL-PL, micro-red dot FastFire a 45° y mira térmica FLIR RS-32, todo ello manteniendo el arma por debajo de 6 kg y con ergonomía mínima 25.",
    "objetivos": [
      "Modificar un KAC SR-25 para que cumpla las especificaciones de Mechanic (silenciador KAC PRS/QDC, foregrip Stark SE-5, culata PRS GEN3, empuñadura PSG-1, DBAL-PL, FastFire 3 en montura a 45°, cargador de 10 balas y mira térmica FLIR RS-32, además de ergonomía ≥ 25 y peso ≤ 6 kg).",
      "Entregar el KAC SR-25 modificado a Mechanic."
    ],
    "recompensas": [
      "31 250 EXP.",
      "+0.03 reputación con Mechanic.",
      "1 500 euros (1 575 / 1 725 con Centro de inteligencia).",
      "3× llaves inglesas de tubo (Pipe grip wrench).",
      "2× filtros FP-100.",
      "Desbloquea compra del foregrip Stark SE-5 (negro y FDE) en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-23"
    ],
    "position": {
      "x": 7040,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-part-25",
    "nombre": "26. Armero – Parte 25 (Gunsmith - Part 25)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Última parte de la cadena Armero. Mechanic ha recibido un encargo irreal: quiere una PKP con kit completo de Zenitco y visor USP-1 \"Tyulpan\". El arma debe cumplir requisitos estrictos de ergonomía y retroceso, con caja de 100 balas y al menos un dispositivo táctico.",
    "objetivos": [
      "Modificar una ametralladora PKP para que cumpla las especificaciones de Mechanic (60 de durabilidad, ergonomía ≥ 11, retroceso ≤ 950, guardamanos Zenit B-50, culata Zenit PT-2 \"Klassika\", freno de boca Zenit DTK-1P 7,62x54R, visor NPZ USP-1 Tyulpan 4×, caja de 100 balas y cualquier dispositivo táctico).",
      "Entregar la PKP modificada a Mechanic."
    ],
    "recompensas": [
      "35 000 EXP.",
      "+0,04 reputación con Mechanic.",
      "5× Bitcoin físico.",
      "1× caja de armas (Weapon case).",
      "Desbloquea trueque por tarjeta de acceso Laboratorio TerraGroup (Negra) en Mechanic LL4.",
      "Desbloquea trueque por ametralladora Kalashnikov PKM 7,62x54R en Mechanic LL4.",
      "Desbloquea el logro “Jack of All Trades”."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-24"
    ],
    "position": {
      "x": 7256,
      "y": 6918.778076171875
    }
  },
  {
    "id": "gunsmith-old-friends-request",
    "nombre": "27. Armero – Encargo del viejo amigo (Gunsmith - Old Friend's Request)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 17,
    "descripcion": "Encargo especial para un viejo amigo de Mechanic. Necesita tres armas muy concretas: una PP-19-01 Vityaz con kit Zenit completo y silenciador, un fusil de francotirador T-5000M configurado según sus requisitos y una Glock 17 táctica con cañón roscado y cargador extendido.",
    "objetivos": [
      "Modificar una PP-19-01 Vityaz para que cumpla las especificaciones de Mechanic (ergonomía > 57, cargador de ≥ 30 balas, visor Aimpoint Micro T-1 con alza, empuñadura delantera Zenit RK-6, empuñadura de pistola AK Zenit RK-3, culata AK Zenit PT-3 \"Klassika\", dispositivo AN/PEQ-15, linterna Zenit Klesch-2P y supresor PP-19-01 estándar).",
      "Modificar un fusil de francotirador T-5000M para que cumpla las especificaciones de Mechanic (configuración de largo alcance según requisitos de la misión).",
      "Modificar una pistola Glock 17 para que cumpla las especificaciones de Mechanic (cañón Double Diamond con protector de rosca, funda de goma Pachmayr Grip Glove, linterna Klesch-2P y cargador extendido de 21 balas).",
      "Entregar la PP-19-01, el T-5000M y la Glock 17 modificados a Mechanic."
    ],
    "recompensas": [
      "21 930 EXP.",
      "+0,04 reputación con Mechanic.",
      "160 000 rublos (168 000 / 184 000 con Centro de inteligencia).",
      "Desbloquea compra del maletín de placas balísticas (Ballistic plate case) en Mechanic LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-7"
    ],
    "position": {
      "x": 3699,
      "y": 7001.778076171875
    }
  },
  {
    "id": "farming-part-1",
    "nombre": "28. Agricultura – Parte 1 (Farming - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Inicio de la cadena Agricultura. Mechanic quiere montar una granja de bitcoins y necesita que restaures parte de la infraestructura eléctrica de Fábrica. Te pide reparar dos paneles de control usando juegos de herramientas, siguiendo las luces rojas de emergencia.",
    "objetivos": [
      "Reparar el primer panel de control con un Game set de herramientas (Toolset) en Factory.",
      "Reparar el segundo panel de control con un Game set de herramientas (Toolset) en Factory."
    ],
    "recompensas": [
      "6 600 EXP.",
      "+0,02 reputación con Mechanic.",
      "25 000 rublos (26 250 / 28 750 con Centro de inteligencia).",
      "2× bombilla.",
      "2× hélice de radiador."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-1"
    ],
    "position": {
      "x": 2597,
      "y": 7093.778076171875
    }
  },
  {
    "id": "farming-part-2",
    "nombre": "29. Agricultura – Parte 2 (Farming - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Segunda parte de Agricultura. Mechanic ya tiene la base de la granja, pero necesita cableado y componentes electrónicos para seguir ampliando la capacidad. Te encarga reunir cables de alimentación, enchufes en T y placas base para montar nuevos racks.",
    "objetivos": [
      "Encontrar en incursión 2× cable de alimentación (Power cord).",
      "Encontrar en incursión 4× enchufe en forma de T (T-Shaped plug).",
      "Encontrar en incursión 2× placa de circuito impreso (Printed circuit board).",
      "Entregar 2× cable de alimentación a Mechanic.",
      "Entregar 4× enchufe en forma de T a Mechanic.",
      "Entregar 2× placa de circuito impreso a Mechanic."
    ],
    "recompensas": [
      "5 500 EXP.",
      "+0,02 reputación con Mechanic.",
      "15 000 rublos (15 750 / 17 250 con Centro de inteligencia).",
      "1× fusil de asalto ASh-12 12,7x55.",
      "1× lente NIXXOR."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-1"
    ],
    "position": {
      "x": 2816,
      "y": 7184.778076171875
    }
  },
  {
    "id": "farming-part-3",
    "nombre": "30. Agricultura – Parte 3 (Farming - Part 3)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 14,
    "descripcion": "Tercera parte de Agricultura. Un pedido de varios kits de GPU quedó retenido en Aduanas cuando empezó el caos. Mechanic quiere que localices el almacén de mercancía incautada, encuentres el paquete de tarjetas gráficas y salgas con él con vida.",
    "objetivos": [
      "Localizar el almacén de mercancía incautada en Customs.",
      "Obtener el paquete de tarjetas gráficas (Package of graphics cards) en el almacén incautado.",
      "Sobrevivir y extraer de la incursión con el paquete de tarjetas gráficas.",
      "Entregar el paquete de tarjetas gráficas a Mechanic."
    ],
    "recompensas": [
      "6 500 EXP.",
      "+0,02 reputación con Mechanic.",
      "20 000 rublos (21 000 / 23 000 con Centro de inteligencia).",
      "1× lector UHF RFID (UHF RFID Reader)."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-2"
    ],
    "position": {
      "x": 3055,
      "y": 7184.778076171875
    }
  },
  {
    "id": "farming-part-4",
    "nombre": "31. Agricultura – Parte 4 (Farming - Part 4)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 14,
    "descripcion": "Cuarta parte de la cadena Agricultura. Mechanic ya tiene la infraestructura básica de la granja de bitcoins, pero ahora quiere ampliar la capacidad y necesita un buen lote de tarjetas gráficas y ventiladores de CPU encontrados en incursión.",
    "objetivos": [
      "Encontrar en incursión 3× tarjeta gráfica (Graphics card).",
      "Encontrar en incursión 15× ventilador de CPU (CPU fan).",
      "Entregar 3× tarjeta gráfica a Mechanic.",
      "Entregar 15× ventilador de CPU a Mechanic."
    ],
    "recompensas": [
      "8 000 EXP.",
      "+3 niveles de habilidad de Atención.",
      "+0.02 reputación con Mechanic.",
      "1× estuche para pistolas (Pistol case).",
      "2× Bitcoin físico.",
      "4× consola portátil Tetriz.",
      "1× pistola Glock 17 9×19 (variante Viper)."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-3"
    ],
    "position": {
      "x": 3272,
      "y": 7184.778076171875
    }
  },
  {
    "id": "signal-part-1",
    "nombre": "32. Señales – Parte 1 (Signal - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Primera misión de la cadena Señales en Costa (Shoreline). Mechanic ha detectado interferencias raras en el espectro de radio. Quiere que localices dos fuentes de señal en antenas distintas y salgas vivo para que pueda analizar los datos.",
    "objetivos": [
      "Localizar la primera fuente de señal en Shoreline.",
      "Localizar la segunda fuente de señal en Shoreline.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "6 700 EXP.",
      "+0.02 reputación con Mechanic.",
      "10 000 rublos (10 500 / 11 500 con Centro de inteligencia).",
      "3× tambor Glock 9×19 SGM Tactical de 50 balas."
    ],
    "youtube": "",
    "prereqIds": [
      "gunsmith-part-2"
    ],
    "position": {
      "x": 2828,
      "y": 7001.778076171875
    }
  },
  {
    "id": "signal-part-2",
    "nombre": "33. Señales – Parte 2 (Signal - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Segunda parte de Señales. Para seguir analizando las interferencias, Mechanic necesita un montón de chatarra electrónica: CPUs de PC, baterías recargables, placas base y smartphones GPhone rotos, todos encontrados en incursión.",
    "objetivos": [
      "Encontrar en incursión 3× CPU de PC (PC CPU).",
      "Entregar 3× CPU de PC a Mechanic.",
      "Encontrar en incursión 3× batería recargable (Rechargeable battery).",
      "Entregar 3× batería recargable a Mechanic.",
      "Encontrar en incursión 3× placa de circuito impreso (Printed circuit board).",
      "Entregar 3× placa de circuito impreso a Mechanic.",
      "Encontrar en incursión 3× smartphone GPhone roto (Broken GPhone).",
      "Entregar 3× smartphone GPhone roto a Mechanic."
    ],
    "recompensas": [
      "6 700 EXP.",
      "+0.02 reputación con Mechanic.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia)."
    ],
    "youtube": "",
    "prereqIds": [
      "signal-part-1"
    ],
    "position": {
      "x": 3055,
      "y": 7001.778076171875
    }
  },
  {
    "id": "signal-part-3",
    "nombre": "34. Señales – Parte 3 (Signal - Part 3)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 15,
    "descripcion": "Tercera parte de Señales. Mechanic ha preparado inhibidores de señal (Signal Jammers) y quiere que los instales en varias antenas de Shoreline para neutralizar el origen de las interferencias. Después de colocar cada inhibidor tendrás que sobrevivir unos segundos.",
    "objetivos": [
      "Colocar el primer inhibidor de señal (Signal Jammer) en el lugar especificado en Shoreline.",
      "Colocar el segundo inhibidor de señal (Signal Jammer) en el lugar especificado en Shoreline.",
      "Colocar el tercer inhibidor de señal (Signal Jammer) en el lugar especificado en Shoreline.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "8 500 EXP.",
      "+0.02 reputación con Mechanic.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "1× escopeta Benelli M3 Super 90 12ga.",
      "3× pack de munición 12/70 8.5mm Magnum buckshot (25 balas).",
      "Desbloquea la compra del objeto «Signal Jammer» en Mechanic LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "signal-part-2"
    ],
    "position": {
      "x": 3274,
      "y": 7001.778076171875
    }
  },
  {
    "id": "signal-part-4",
    "nombre": "35. Señales – Parte 4 (Signal - Part 4)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 15,
    "descripcion": "Última misión de la cadena Señales. Mechanic quiere comprobar tu capacidad para memorizar y procesar información, así que te pide que mejores tu habilidad de Atención hasta un cierto nivel antes de continuar con sus planes.",
    "objetivos": [
      "Alcanzar el nivel 8 de la habilidad Atención (Attention)."
    ],
    "recompensas": [
      "8 600 EXP.",
      "+0.01 reputación con Mechanic.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "1× visor Vortex Razor HD Gen.2 1–6×24 30 mm."
    ],
    "youtube": "",
    "prereqIds": [
      "signal-part-3"
    ],
    "position": {
      "x": 3486,
      "y": 7001.778076171875
    }
  },
  {
    "id": "bad-habit",
    "nombre": "36. Malos hábitos (Bad Habit)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Mechanic quiere cableado y equipos funcionando durante horas, y eso significa largas sesiones de trabajo… con cigarrillos. Te pide que consigas varias marcas distintas de tabaco, todas encontradas en incursión, para no depender de comerciantes ni material húmedo o quemado.",
    "objetivos": [
      "Encontrar en incursión 5× paquetes de cigarrillos Malboro.",
      "Encontrar en incursión 5× paquetes de cigarrillos Strike.",
      "Encontrar en incursión 5× paquetes de cigarrillos Wilston.",
      "Entregar 5× paquetes de cigarrillos Malboro a Mechanic.",
      "Entregar 5× paquetes de cigarrillos Strike a Mechanic.",
      "Entregar 5× paquetes de cigarrillos Wilston a Mechanic."
    ],
    "recompensas": [
      "6 700 EXP.",
      "Reputación con Mechanic +0,02.",
      "300 euros (315 / 345 con Centro de inteligencia).",
      "1× pistola ametralladora Glock 18C 9×19.",
      "6× pack de munición 9×19mm Green Tracer (50 balas).",
      "Desbloquea trueque por botella de OLOLO Multivitamins en Terapeuta LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-2"
    ],
    "position": {
      "x": 3035,
      "y": 7288.778076171875
    }
  },
  {
    "id": "scout",
    "nombre": "37. Explorador (Scout)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Mechanic quiere saber qué salidas de Fábrica siguen operativas para aprovechar las instalaciones. Te envía a reconocer todas las extracciones de PMC en Factory, y salir vivo tras haberlas localizado todas.",
    "objetivos": [
      "Localizar la primera extracción de PMC en Factory.",
      "Localizar la segunda extracción de PMC en Factory.",
      "Localizar la tercera extracción de PMC en Factory.",
      "Localizar la cuarta extracción de PMC en Factory.",
      "Sobrevivir y extraer de Factory tras localizar todas las salidas."
    ],
    "recompensas": [
      "6 800 EXP.",
      "Reputación con Mechanic +0,02.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "1× llave de salida de emergencia de Factory."
    ],
    "youtube": "",
    "prereqIds": [
      "signal-part-2"
    ],
    "position": {
      "x": 3274,
      "y": 6812.55615234375
    }
  },
  {
    "id": "insider",
    "nombre": "38. Confidente (Insider)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 12,
    "descripcion": "Mechanic confía en ti, pero quiere comprobar si eres capaz de ganarte también a la gente ‘seria’. Te pide que mejores tu relación con Prapor hasta lealtad 3; si Pavel Yegorovich confía en ti, Mechanic podrá establecer una buena ruta de suministro de pólvora.",
    "objetivos": [
      "Alcanzar el nivel 3 de lealtad con Prapor."
    ],
    "recompensas": [
      "6 700 EXP.",
      "Reputación con Mechanic +0,02.",
      "800 euros (840 / 920 con Centro de inteligencia).",
      "2× supresor SilencerCo Osprey 9 9×19."
    ],
    "youtube": "",
    "prereqIds": [
      "signal-part-1",
      "gunsmith-part-3"
    ],
    "position": {
      "x": 3055,
      "y": 6817.778076171875
    }
  },
  {
    "id": "import",
    "nombre": "39. Importación (Import)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 35,
    "descripcion": "Mechanic ha descubierto hardware de procedencia extranjera: un lector RFID fijo y un módulo de almacenamiento muy poco común. Sospecha que vienen de algún almacén secreto o de un envío que se coló por el bloqueo. Quiere que consigas ambos dispositivos, encontrados en incursión.",
    "objetivos": [
      "Encontrar en incursión 1× lector fijo UHF RFID (UHF RFID Fixed Reader).",
      "Encontrar en incursión 1× módulo de almacenamiento VPX Flash.",
      "Entregar 1× lector fijo UHF RFID a Mechanic.",
      "Entregar 1× módulo VPX Flash Storage a Mechanic."
    ],
    "recompensas": [
      "29 000 EXP.",
      "Reputación con Mechanic +0,03.",
      "Reputación con Jaeger −0,01.",
      "85 000 rublos (89 250 / 97 750 con Centro de inteligencia).",
      "2× Bitcoin físico.",
      "1× módulo térmico militar Iridium.",
      "1× visor térmico Trijicon REAP-IR.",
      "Desbloquea compra de munición 4.6×30mm FMJ SX en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-4"
    ],
    "position": {
      "x": 3486,
      "y": 7184.778076171875
    }
  },
  {
    "id": "fertilizers",
    "nombre": "40. Fertilizantes (Fertilizers)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 30,
    "descripcion": "La granja de bitcoins de Mechanic empieza a dar problemas: bloqueos, cuelgues y errores varios. Cree que puede estabilizarla mejorando parte del cableado y la electrónica, así que te pide lotes de cables y condensadores nuevos, encontrados en incursión.",
    "objetivos": [
      "Encontrar en incursión 5× mazo de cables (Bundle of wires).",
      "Encontrar en incursión 5× condensadores (Capacitors).",
      "Entregar 5× mazo de cables a Mechanic.",
      "Entregar 5× condensadores a Mechanic."
    ],
    "recompensas": [
      "17 200 EXP.",
      "Reputación con Mechanic +0,02.",
      "65 000 rublos (68 250 / 74 750 con Centro de inteligencia).",
      "2× Bitcoin físico.",
      "Desbloquea compra de la pistola HK USP .45 ACP (versión Match) en Mechanic LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-4"
    ],
    "position": {
      "x": 3486,
      "y": 7097.778076171875
    }
  },
  {
    "id": "back-door",
    "nombre": "46. Puerta trasera (Back Door)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 14,
    "descripcion": "Mechanic quiere comprobar si eres capaz de encontrar rutas de escape poco habituales en Reserva. Sabe que existe una extracción oculta alimentada por un generador, pero normalmente está apagada. Tu tarea es localizar ese punto de salida secreto y demostrar que puedes usarlo para salir con vida.",
    "objetivos": [
      "Localizar la extracción oculta sin alimentar (salida D-2) en Reserve.",
      "Activar la alimentación y extraer de la incursión por la salida oculta obteniendo el estado «Superviviente»."
    ],
    "recompensas": [
      "Recompensas pendientes de documentar con precisión (XP, rublos, reputación con Mechanic y posibles objetos)."
    ],
    "youtube": "",
    "prereqIds": [
      "scout"
    ],
    "position": {
      "x": 3903,
      "y": 6690
    }
  },
  {
    "id": "calibration",
    "nombre": "47. Calibración (Calibration)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 47,
    "descripcion": "Mechanic necesita datos reales para afinar el apuntado de varias armas. Quiere que utilices tu fusil favorito para eliminar objetivos humanos bien entrenados a larga distancia, y que todas las bajas sean desde más de 100 metros, de forma que pueda usar tus ‘mediciones’ para calibrar sus tablas balísticas.",
    "objetivos": [
      "Eliminar 20 operativos PMC a más de 100 metros de distancia (en cualquier mapa)."
    ],
    "recompensas": [
      "93 000 EXP.",
      "+1 nivel de habilidad Percepción.",
      "1× brazalete (Kiba Arms armband).",
      "5× bote de termita.",
      "Desbloquea la compra de munición 5.45×39mm 7N40 en Prapor LL4.",
      "Desbloquea el trueque por casco antibalas Altyn (verde oliva) en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "chemistry-closet"
    ],
    "position": {
      "x": 4348,
      "y": 7374.778076171875
    }
  },
  {
    "id": "the-courier",
    "nombre": "48. El mensajero (The Courier)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 52,
    "descripcion": "Un cliente importante de Mechanic quiere dos visores térmicos REAP-IR entregados en puntos muy concretos de Aduanas, sin contacto directo. Tu trabajo es hacer de mensajero: llevar los térmicos en la mochila (no en el contenedor seguro) y ocultarlos en los lugares indicados, sin que nadie te vuele la cabeza en el intento.",
    "objetivos": [
      "Ocultar un visor térmico Trijicon REAP-IR en la base de la grúa amarilla de la obra en Customs.",
      "Ocultar un visor térmico Trijicon REAP-IR detrás de los contenedores de basura en la gasolinera ‘nueva’ de Customs."
    ],
    "recompensas": [
      "115 000 EXP.",
      "+1 nivel de habilidad Fabricación (Crafting).",
      "+1 nivel de habilidad Intelecto.",
      "1× fusil de tirador SWORD International Mk-18 .338 LM."
    ],
    "youtube": "",
    "prereqIds": [
      "calibration"
    ],
    "position": {
      "x": 4559,
      "y": 7374.778076171875
    }
  },
  {
    "id": "corporate-secrets",
    "nombre": "49. Secretos corporativos (Corporate Secrets)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 17,
    "descripcion": "Mechanic sospecha que en el complejo industrial de Lighthouse hay documentación sensible sobre el funcionamiento de las estaciones de bombeo y el sistema de agua. Esa información puede valer oro para quien controle la infraestructura de la región, así que te manda a infiltrarte en dos edificios distintos para recuperar los informes técnicos.",
    "objetivos": [
      "Encontrar los datos sobre el funcionamiento de la bomba de agua en Lighthouse.",
      "Entregar los datos sobre el funcionamiento de la bomba de agua a Mechanic.",
      "Encontrar los datos sobre el funcionamiento de la estación de bombeo en Lighthouse.",
      "Entregar los datos sobre el funcionamiento de la estación de bombeo a Mechanic."
    ],
    "recompensas": [
      "Recompensas pendientes de documentar con precisión (XP, rublos, reputación con Mechanic y posibles objetos)."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 998,
      "y": 6979
    }
  },
  {
    "id": "energy-crisis",
    "nombre": "50. Crisis energética (Energy Crisis)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 25,
    "descripcion": "Mantener en marcha la granja de bitcoins y el resto de ‘experimentos’ de Mechanic exige una cantidad absurda de combustible. Su proveedor habitual ha desaparecido, pero en el cabo de Lighthouse todavía quedan depósitos y camiones cisterna medio llenos. Quiere que los localices y los marques con balizas MS2000 para que su gente pueda venir a vaciarlos después.",
    "objetivos": [
      "Encontrar y marcar el grupo de depósitos de combustible con un marcador MS2000 en Lighthouse.",
      "Encontrar y marcar el primer camión cisterna con un marcador MS2000 en Lighthouse.",
      "Encontrar y marcar el segundo camión cisterna con un marcador MS2000 en Lighthouse.",
      "Encontrar y marcar el tercer camión cisterna con un marcador MS2000 en Lighthouse."
    ],
    "recompensas": [
      "13 000 EXP.",
      "Reputación con Mechanic +0,02.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "Desbloquea la compra del fusil de asalto FN SCAR-L 5.56×45 (variante Contract Wars) en Ref LL3.",
      "Desbloquea la compra del freno de boca Tromix Monster Claw 12ga en Mechanic LL3.",
      "Desbloquea la compra de la placa balística Granit 4 (Frontal) en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "farming-part-4"
    ],
    "position": {
      "x": 3486,
      "y": 7268.778076171875
    }
  },
  {
    "id": "broadcast-part-1",
    "nombre": "51. Emisión – Parte 1 (Broadcast - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 15,
    "descripcion": "Inicio de la cadena Emisión. Mechanic ha detectado señales de radio extrañas asociadas a los sectarios. Necesita que investigues el origen de esas emisiones en Costas (Shoreline), localizando su campamento ritual y registrando la zona.",
    "objetivos": [
      "Localizar el campamento de los sectarios en el bosque cerca del Health Resort en Shoreline.",
      "Inspeccionar la zona del campamento (altar) para recopilar datos.",
      "Sobrevivir y extraer de Shoreline tras investigar el campamento."
    ],
    "recompensas": [
      "7 500 EXP.",
      "Reputación con Mechanic +0.02.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia).",
      "2× analizador portátil de señales (Signal Jammer)."
    ],
    "youtube": "",
    "prereqIds": [
      "chemistry-closet"
    ],
    "position": {
      "x": 523,
      "y": 6773
    }
  },
  {
    "id": "broadcast-part-2",
    "nombre": "52. Emisión – Parte 2 (Broadcast - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 15,
    "descripcion": "Segunda parte de Emisión. Tras analizar los datos del campamento, Mechanic quiere que confirmes si los sectarios han usado otros puntos de ritual. Te envía a inspeccionar varias ubicaciones con marcas de símbolos y restos de sangre en diferentes mapas.",
    "objetivos": [
      "Localizar e inspeccionar el lugar de ritual en Customs.",
      "Localizar e inspeccionar el lugar de ritual en Woods.",
      "Localizar e inspeccionar el lugar de ritual en Shoreline (distinto del de la Parte 1).",
      "Sobrevivir y extraer de cualquiera de las incursiones tras inspeccionar todas las zonas."
    ],
    "recompensas": [
      "10 000 EXP.",
      "Reputación con Mechanic +0.02.",
      "45 000 rublos (47 250 / 51 750 con Centro de inteligencia).",
      "1× pistola automática HK USP .45 (táctica).",
      "3× pack de munición .45 ACP AP (25 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "broadcast-part-1"
    ],
    "position": {
      "x": 756,
      "y": 6773
    }
  },
  {
    "id": "surveillance",
    "nombre": "53. Vigilancia (Surveillance)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 20,
    "descripcion": "Mechanic quiere montar un sistema de vigilancia improvisado en zonas clave para seguir la pista a los sectarios y a otros grupos. Te pide que coloques cámaras Wi-Fi en puntos elevados y expuestos en varios mapas.",
    "objetivos": [
      "Instalar una cámara Wi-Fi en el tejado de un edificio en Customs.",
      "Instalar una cámara Wi-Fi en un punto elevado de Woods.",
      "Instalar una cámara Wi-Fi en un punto elevado de Shoreline.",
      "Sobrevivir y extraer tras instalar todas las cámaras."
    ],
    "recompensas": [
      "18 000 EXP.",
      "Reputación con Mechanic +0.03.",
      "60 000 rublos (63 000 / 69 000 con Centro de inteligencia).",
      "3× cámara Wi-Fi (Camera kit) para futuras misiones.",
      "1× contenedor de objetos Beta (Beta container)."
    ],
    "youtube": "",
    "prereqIds": [
      "broadcast-part-2"
    ],
    "position": {
      "x": 998,
      "y": 6773
    }
  },
  {
    "id": "watching-you",
    "nombre": "54. Observándote (Watching You)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 20,
    "descripcion": "Con las cámaras ya instaladas, Mechanic quiere ‘calibrar’ su sistema de vigilancia comparando las rutas de tus incursiones con los datos que recibe. Te encarga que completes varias incursiones sin usar escondites seguros ni extracciones demasiado evidentes.",
    "objetivos": [
      "Extraer 3 veces de Customs sin usar extracciones pagadas ni especiales (como Dorms V-Ex o ZB-013).",
      "Extraer 3 veces de Woods sin usar la extracción de acantilado (Cliff Descent).",
      "Extraer 3 veces de Shoreline sin usar la extracción del barco (Pier Boat)."
    ],
    "recompensas": [
      "19 000 EXP.",
      "Reputación con Mechanic +0.03.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia).",
      "2× Bitcoin físico.",
      "1× contenedor de documentos (Document case)."
    ],
    "youtube": "",
    "prereqIds": [
      "surveillance"
    ],
    "position": {
      "x": 1231,
      "y": 6861
    }
  },
  {
    "id": "network-provider-part-1",
    "nombre": "55. Proveedor de red – Parte 1 (Network Provider - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 25,
    "descripcion": "Inicio de la cadena Proveedor de red. Mechanic quiere acceso estable a las redes que aún funcionan en Tarkov. Para ello necesita que tomes el control de varios puntos de infraestructura de comunicaciones empezando por Calles de Tarkov.",
    "objetivos": [
      "Localizar el nodo principal de comunicaciones en Calles de Tarkov.",
      "Instalar un repetidor de red de Mechanic en el nodo encontrado.",
      "Sobrevivir y extraer de Streets of Tarkov tras instalar el repetidor."
    ],
    "recompensas": [
      "20 000 EXP.",
      "Reputación con Mechanic +0.03.",
      "95 000 rublos (99 750 / 109 250 con Centro de inteligencia).",
      "1× visor térmico AGM Global Vision Rattler TS25-384.",
      "Desbloquea la misión Proveedor de red – Parte 2."
    ],
    "youtube": "",
    "prereqIds": [
      "energy-crisis"
    ],
    "position": {
      "x": 3699,
      "y": 7268.778076171875
    }
  },
  {
    "id": "network-provider-part-2",
    "nombre": "56. Proveedor de red – Parte 2 (Network Provider - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 25,
    "descripcion": "Segunda parte de Proveedor de red. Mechanic quiere redundancia en sus enlaces, así que te pide que instales equipos adicionales en otros puntos críticos de la infraestructura de comunicaciones de Tarkov.",
    "objetivos": [
      "Instalar un equipo de red de Mechanic en el emplazamiento indicado en Calles de Tarkov.",
      "Instalar un equipo de red de Mechanic en el emplazamiento indicado en Costa (Shoreline).",
      "Instalar un equipo de red de Mechanic en el emplazamiento indicado en Faro (Lighthouse).",
      "Sobrevivir y extraer de cualquiera de las incursiones tras instalar todos los equipos."
    ],
    "recompensas": [
      "21 500 EXP.",
      "Reputación con Mechanic +0,03.",
      "105 000 rublos (110 250 / 120 750 con Centro de inteligencia).",
      "1× contenedor de objetos Epsilon.",
      "Desbloquea misiones posteriores de la cadena de comunicaciones de Mechanic."
    ],
    "youtube": "",
    "prereqIds": [
      "network-provider-part-1"
    ],
    "position": {
      "x": 3922,
      "y": 7268.778076171875
    }
  },
  {
    "id": "assessment-part-1",
    "nombre": "57. Evaluación – Parte 1 (Assessment - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 30,
    "descripcion": "Primera parte de Evaluación. Mechanic quiere estadísticas realistas sobre tu rendimiento en combate con armas de largo alcance. Toca eliminar objetivos bien armados en mapas abiertos usando fusiles de tirador o fusiles de francotirador.",
    "objetivos": [
      "Eliminar 20 operativos PMC usando fusiles de tirador (DMR) o fusiles de francotirador (SR) en Woods, Shoreline, Lighthouse o Reserve."
    ],
    "recompensas": [
      "26 000 EXP.",
      "Reputación con Mechanic +0,03.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "1× fusil de tirador Knight's Armament SR-25 7.62×51.",
      "4× cargador SR-25 7.62×51 de 20 balas.",
      "2× caja de munición 7.62×51mm M61 (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "psycho-sniper"
    ],
    "position": {
      "x": 2521,
      "y": 7386.778076171875
    }
  },
  {
    "id": "assessment-part-2",
    "nombre": "58. Evaluación – Parte 2 (Assessment - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 30,
    "descripcion": "Segunda parte de Evaluación. Después de tus resultados con tirador y francotirador, Mechanic quiere datos usando fusiles de asalto y carabinas, pero manteniendo distancias medias-largas para comparar patrones de dispersión.",
    "objetivos": [
      "Eliminar 30 operativos PMC usando fusiles de asalto o carabinas en Customs, Interchange, Streets of Tarkov o Ground Zero a una distancia superior a 60 metros."
    ],
    "recompensas": [
      "28 500 EXP.",
      "Reputación con Mechanic +0,03.",
      "135 000 rublos (141 750 / 155 250 con Centro de inteligencia).",
      "1× fusil de asalto HK416A5 5.56×45.",
      "4× cargador HK STANAG de 40 balas.",
      "3× caja de munición 5.56×45mm M995 (30 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "assessment-part-1"
    ],
    "position": {
      "x": 2762,
      "y": 7386.778076171875
    }
  },
  {
    "id": "assessment-part-3",
    "nombre": "59. Evaluación – Parte 3 (Assessment - Part 3)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 30,
    "descripcion": "Tercera parte de Evaluación. Mechanic quiere cerrar el círculo midiendo tu rendimiento con armas de corto alcance: escopetas y subfusiles, en espacios cerrados y combates rápidos.",
    "objetivos": [
      "Eliminar 30 operativos PMC usando escopetas o subfusiles en Factory, Labs o los interiores de Streets of Tarkov (zonas de edificios cerrados)."
    ],
    "recompensas": [
      "30 000 EXP.",
      "Reputación con Mechanic +0,03.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "1× escopeta semiautomática Benelli M4 Super 90 12ga.",
      "1× subfusil HK MP7A2 4.6×30.",
      "4× cargador MP7 de 40 balas.",
      "4× caja de munición 4.6×30mm AP SX (40 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "assessment-part-2"
    ],
    "position": {
      "x": 3035,
      "y": 7386.778076171875
    }
  },
  {
    "id": "key-to-the-tower",
    "nombre": "60. Llave de la torre (Key to the Tower)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 35,
    "descripcion": "Mechanic quiere acceso a un punto de observación privilegiado sobre Calles de Tarkov: la torre de control de un edificio de oficinas. Para ello necesita que recuperes una llave especial custodiada por fuerzas de seguridad privadas en la zona.",
    "objetivos": [
      "Localizar y obtener la «Llave de la torre» en Calles de Tarkov (zona de seguridad privada).",
      "Sobrevivir y extraer de Streets of Tarkov con la llave en tu inventario.",
      "Entregar la Llave de la torre a Mechanic."
    ],
    "recompensas": [
      "24 000 EXP.",
      "Reputación con Mechanic +0,03.",
      "95 000 rublos (99 750 / 109 250 con Centro de inteligencia).",
      "1× llave de oficina de torre (permite acceso permanente al punto de observación).",
      "1× visor de alta gama (p. ej. Vortex Razor HD o March Tactical; depende de versión/parche)."
    ],
    "youtube": "",
    "prereqIds": [
      "network-provider-part-2"
    ],
    "position": {
      "x": 4137,
      "y": 7268.778076171875
    }
  },
  {
    "id": "knock-knock",
    "nombre": "61. Toc, toc (Knock-Knock)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Mechanic te da un transmisor de radio digital para comprobar si Lightkeeper sigue activo en el cabo de Lighthouse. Tu tarea es acercarte al inicio del puente que lleva a la península del faro y verificar que el transmisor funciona, saliendo vivo de la incursión.",
    "objetivos": [
      "Comprobar si el transmisor de radio funciona cerca de la península del faro en Lighthouse.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "31 300 EXP.",
      "+0.01 reputación con Mechanic.",
      "+0.01 reputación con Lightkeeper."
    ],
    "youtube": "",
    "prereqIds": [
      "key-to-the-tower"
    ],
    "position": {
      "x": 4348,
      "y": 7268.778076171875
    }
  },
  {
    "id": "getting-acquainted",
    "nombre": "62. Haciendo contactos (Getting Acquainted)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "El transmisor de Mechanic necesita ser reprogramado para trabajar con el equipo de Lightkeeper. Primero tendrás que encontrar una unidad de memoria especial en Lighthouse, usarla para reflashear el transmisor y luego presentarte en el propio edificio del faro.",
    "objetivos": [
      "Obtener la memoria V3 Flash drive en Lighthouse.",
      "Reflashear el transmisor de radio usando la V3 Flash drive.",
      "Entregar la V3 Flash drive a Mechanic.",
      "Visitar el edificio del faro en Lighthouse."
    ],
    "recompensas": [
      "32 000 EXP.",
      "+0.01 reputación con Mechanic."
    ],
    "youtube": "",
    "prereqIds": [
      "knock-knock"
    ],
    "position": {
      "x": 4569,
      "y": 7268.778076171875
    }
  },
  {
    "id": "the-door",
    "nombre": "63. La puerta (The Door)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "En Calles de Tarkov hay una puerta fuertemente protegida que interfiere con las comunicaciones de Lightkeeper. Mechanic necesita que localices la fuente de esa interferencia en el edificio Klimova 16A, instales cámaras Wi-Fi para vigilar la puerta y la caja de escaleras, y salgas con vida para poder analizar la señal.",
    "objetivos": [
      "Localizar la causa de la interferencia de señal en Streets of Tarkov.",
      "Instalar una cámara Wi-Fi para vigilar la puerta en Klimova 16A.",
      "Instalar una cámara Wi-Fi para vigilar el hueco de escaleras en Klimova 16A.",
      "Sobrevivir y extraer de Streets of Tarkov."
    ],
    "recompensas": [
      "30 200 EXP.",
      "+0.01 reputación con Mechanic.",
      "500 euros (525 / 575 con Centro de inteligencia).",
      "1× llave oxidada ensangrentada (Rusted bloody key).",
      "1× pistola Beretta M9A3 9×19.",
      "1× escopeta Remington Model 870 12ga."
    ],
    "youtube": "",
    "prereqIds": [
      "steady-signal"
    ],
    "position": {
      "x": 4348,
      "y": 7184.778076171875
    }
  },
  {
    "id": "developers-secrets-part-1",
    "nombre": "64. Secretos de desarrollador – Parte 1 (Developer's Secrets - Part 1)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": 23,
    "descripcion": "Antes del colapso, una pequeña empresa de software en Streets of Tarkov sacaba productos sorprendentemente buenos en muy poco tiempo. Mechanic sospecha que tenían algún ‘truco’ oculto y quiere que encuentres su oficina, descubras el secreto de su éxito y salgas con vida.",
    "objetivos": [
      "Localizar la oficina de la empresa de software en Streets of Tarkov.",
      "Descubrir el secreto del éxito de la empresa (investigar la sala de negociaciones).",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "23 000 EXP.",
      "+0.02 reputación con Mechanic.",
      "130 000 rublos (136 500 / 149 500 con Centro de inteligencia).",
      "1× CPU de PC.",
      "1× ventilador de CPU.",
      "1× alicates Elite.",
      "1× punzón (Awl)."
    ],
    "youtube": "",
    "prereqIds": [
      "surveillance"
    ],
    "position": {
      "x": 1231,
      "y": 6773
    }
  },
  {
    "id": "developers-secrets-part-2",
    "nombre": "65. Secretos de desarrollador – Parte 2 (Developer's Secrets - Part 2)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Tras ver la ‘sala de tortura’ de la empresa, Mechanic sabe que no todo puede sostenerse solo con presión. Los empleados debían tener también alguna forma de relajarse y mantener alta la moral. Quiere que sigas investigando en Streets of Tarkov para descubrir qué usaban realmente como válvula de escape.",
    "objetivos": [
      "Descubrir el secreto de la alta moral de los empleados de la empresa en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "25 400 EXP.",
      "+0.02 reputación con Mechanic.",
      "174 000 rublos (182 700 / 200 100 con Centro de inteligencia).",
      "1× manómetro (Pressure gauge).",
      "3× tubo de silicona."
    ],
    "youtube": "",
    "prereqIds": [
      "developers-secrets-part-1"
    ],
    "position": {
      "x": 1460,
      "y": 6773
    }
  },
  {
    "id": "steady-signal",
    "nombre": "66. Señal estable (Steady Signal)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Antes de investigar directamente la puerta de Klimova 16A, Mechanic quiere estabilizar las comunicaciones con Lightkeeper. Te encarga registrar varios puntos de Streets of Tarkov donde la señal se corta o se distorsiona, usando su analizador para encontrar una ‘señal limpia’ que pueda utilizar como referencia.",
    "objetivos": [
      "Localizar al menos tres puntos de interferencia de señal en Calles de Tarkov con el dispositivo de Mechanic.",
      "Registrar una zona con señal estable en Calles de Tarkov usando el analizador.",
      "Sobrevivir y extraer de Calles de Tarkov después de completar las mediciones."
    ],
    "recompensas": [
      "EXP y rublos (cantidad exacta pendiente de documentar con precisión).",
      "+0.01 reputación con Mechanic.",
      "Varios consumibles electrónicos (por ejemplo, cables, condensadores, placas de circuito) relacionados con el escondite.",
      "Desbloquea la misión «La puerta (The Door)»."
    ],
    "youtube": "",
    "prereqIds": [
      "network-provider-part-2"
    ],
    "position": {
      "x": 4137,
      "y": 7184.778076171875
    }
  },
  {
    "id": "make-amends-buyout",
    "nombre": "67. Enmiendas – Rescate (Make Amends - Buyout)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Primera parte de la cadena Enmiendas. Mechanic quiere arreglar ciertos ‘malentendidos’ con gente importante del cabo de Lighthouse. Para empezar, alguien debe pagar una deuda pendiente para que las negociaciones puedan seguir adelante, y ese alguien eres tú.",
    "objetivos": [
      "Reunir y entregar a Mechanic la suma de dinero o artículos de valor que se piden en la misión (tal y como aparezca en el juego).",
      "Completar el pago de la deuda para iniciar las Enmiendas con los contactos de Lighthouse."
    ],
    "recompensas": [
      "EXP (cantidad exacta pendiente de documentar).",
      "Reputación con Mechanic (pequeño aumento).",
      "Ligero aumento de reputación con Lightkeeper o desbloqueo de sus siguientes tareas (según parche)."
    ],
    "youtube": "",
    "prereqIds": [
      "getting-acquainted"
    ],
    "position": {
      "x": 4794,
      "y": 7268.778076171875
    }
  },
  {
    "id": "make-amends-equipment",
    "nombre": "68. Enmiendas – Equipo (Make Amends - Equipment)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Segunda parte de Enmiendas. Después de arreglar la deuda inicial, los contactos de Mechanic exigen equipo específico para seguir tratando con él. Tendrás que reunir y entregar material táctico y armas de alta calidad para demostrar que eres un socio fiable.",
    "objetivos": [
      "Reunir y entregar el equipo de combate solicitado en la descripción de la misión (armas, chalecos, cascos, etc., tal y como aparezca en el juego)."
    ],
    "recompensas": [
      "EXP (cantidad exacta pendiente de documentar).",
      "Rublos o divisas extranjeras (dólares/euros).",
      "Pequeño aumento adicional de reputación con Mechanic.",
      "Progreso dentro de la cadena Enmiendas, desbloqueando la parte de Seguridad."
    ],
    "youtube": "",
    "prereqIds": [
      "make-amends-buyout"
    ],
    "position": {
      "x": 5020,
      "y": 7268.778076171875
    }
  },
  {
    "id": "make-amends-security",
    "nombre": "69. Enmiendas – Seguridad (Make Amends - Security)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Tercera misión de Enmiendas. Ahora el problema ya no es el dinero ni el equipo, sino la seguridad. Los contactos de Mechanic quieren saber si puedes mantener limpias ciertas rutas y zonas de paso en Lighthouse y alrededores, eliminando amenazas que puedan interferir con sus negocios.",
    "objetivos": [
      "Eliminar un número determinado de enemigos (Scavs, Rogues o PMC) en las zonas indicadas por la misión (principalmente en Lighthouse).",
      "Cumplir cualquier condición extra que indique la misión (por ejemplo, no morir durante la cadena de bajas)."
    ],
    "recompensas": [
      "EXP (cantidad exacta pendiente de documentar).",
      "Reputación con Mechanic + posible reputación con Lightkeeper.",
      "Rublos y/o equipamiento táctico de alta calidad como pago por los ‘servicios de seguridad’."
    ],
    "youtube": "",
    "prereqIds": [
      "make-amends-equipment"
    ],
    "position": {
      "x": 5240,
      "y": 7268.778076171875
    }
  },
  {
    "id": "make-amends-sweep-up",
    "nombre": "70. Enmiendas – Barrido (Make Amends - Sweep Up)",
    "trader": "Mechanic",
    "traderColor": "mechanic",
    "nivel": null,
    "descripcion": "Cuarta parte de Enmiendas. Tras asegurar el área, toca hacer un barrido final: limpiar restos, eliminar testigos indeseados y asegurarse de que nadie pueda relacionar ciertas operaciones con los clientes de Mechanic en Lighthouse.",
    "objetivos": [
      "Completar los objetivos de limpieza marcados en la misión (por ejemplo, eliminar objetivos concretos, limpiar zonas específicas o asegurar puntos clave en Lighthouse/Streets, según se indique en el juego)."
    ],
    "recompensas": [
      "EXP (cantidad exacta pendiente de documentar).",
      "Incremento de reputación con Mechanic.",
      "Incremento de reputación con Lightkeeper o desbloqueo de nuevas opciones de comercio con él.",
      "Progreso hacia las partes finales de la cadena Enmiendas (Software y Cuarentena, y la misión «Enmiendas» principal)."
    ],
    "youtube": "",
    "prereqIds": [
      "make-amends-security"
    ],
    "position": {
      "x": 5464,
      "y": 7268.778076171875
    }
  },
  {
    "id": "acquaintance",
    "nombre": "1. Conociéndonos (Acquaintance)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Primera misión de Jaeger: te pide que le consigas provisiones básicas para comprobar que sabes buscar comida Encontrado en incursión.",
    "objetivos": [
      "Encontrar 3× packs de ración Iskra (Encontrado en incursión).",
      "Encontrar 2× packs de noodles instantáneos (Encontrado en incursión).",
      "Encontrar 2× latas de estofado de ternera grande (Encontrado en incursión).",
      "Entregar 3× packs de ración Iskra a Jaeger.",
      "Entregar 2× packs de noodles instantáneos a Jaeger.",
      "Entregar 2× latas de estofado de ternera grande a Jaeger."
    ],
    "recompensas": [
      "3 900 EXP.",
      "+0.01 reputación con Jaeger.",
      "50 000 rublos (más con Centro de inteligencia).",
      "1× mechero SurvL Survivor."
    ],
    "youtube": "",
    "prereqIds": [],
    "position": {
      "x": 486,
      "y": 5153
    }
  },
  {
    "id": "survivalist-unprotected-but-dangerous",
    "nombre": "2. El camino del superviviente – Desprotegido pero peligroso (The Survivalist Path - Unprotected but Dangerous)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que practiques moverte sin chaleco ni armadura de cuerpo, eliminando Scavs en Woods sin protección balística.",
    "objetivos": [
      "Eliminar 5 Scavs en Woods sin llevar ninguna armadura de cuerpo (chaleco antibalas ni chaleco portaplacas)."
    ],
    "recompensas": [
      "5 600 EXP.",
      "+0.02 reputación con Jaeger.",
      "35 000 rublos (más con Centro de inteligencia).",
      "1× fusil de asalto Kalashnikov AKMSN 7.62x39.",
      "10× pack de munición 7.62x39mm FMJ (20 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "acquaintance"
    ],
    "position": {
      "x": 733,
      "y": 5153
    }
  },
  {
    "id": "survivalist-thrifty",
    "nombre": "3. El camino del superviviente – Ahorrador (The Survivalist Path - Thrifty)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger te pide preparar dos pequeños puntos de descanso en Woods, dejando comida y agua en los búnkeres ZB-016 y ZB-014.",
    "objetivos": [
      "Ocultar 1× pack de ración Iskra en el búnker ZB-016 de Woods.",
      "Ocultar 1× botella de agua (0.6L) en el búnker ZB-016 de Woods.",
      "Ocultar 1× pack de ración Iskra en el búnker ZB-014 de Woods.",
      "Ocultar 1× botella de agua (0.6L) en el búnker ZB-014 de Woods."
    ],
    "recompensas": [
      "4 700 EXP.",
      "+0.01 reputación con Jaeger.",
      "22 000 rublos (más con Centro de inteligencia).",
      "2× relé de control de fase.",
      "1× bidón de combustible metálico.",
      "Desbloquea compra del pack de ración Iskra en Jaeger LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-unprotected-but-dangerous"
    ],
    "position": {
      "x": 958,
      "y": 5153
    }
  },
  {
    "id": "survivalist-zhivchik",
    "nombre": "4. El camino del superviviente – Zhivchik (The Survivalist Path - Zhivchik)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere comprobar cuánto tiempo puedes aguantar completamente deshidratado y aun así extraer con vida.",
    "objetivos": [
      "Sobrevivir 5 minutos sufriendo deshidratación completa (en cualquier mapa excepto Factory).",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "5 700 EXP.",
      "+0.02 reputación con Jaeger.",
      "30 000 rublos (más con Centro de inteligencia).",
      "2× botella de agua Aquamari con filtro.",
      "2× filtro de agua."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-thrifty"
    ],
    "position": {
      "x": 1183,
      "y": 5071
    }
  },
  {
    "id": "survivalist-wounded-beast",
    "nombre": "5. El camino del superviviente – Bestia herida (The Survivalist Path - Wounded Beast)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que aprendas a pelear incluso estando herido: elimina Scavs mientras sufres el efecto de dolor.",
    "objetivos": [
      "Eliminar 3 Scavs mientras sufres el efecto de dolor."
    ],
    "recompensas": [
      "5 800 EXP.",
      "+1 nivel de habilidad Resistencia al estrés.",
      "+0.02 reputación con Jaeger.",
      "65 000 rublos (más con Centro de inteligencia).",
      "Desbloquea compra de la Benelli M3 Super 90 12ga (escopeta de modo dual) en Jaeger LL2.",
      "Desbloquea el estilo de diana \"Bear Hideout\" para el campo de tiro del escondite."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-zhivchik"
    ],
    "position": {
      "x": 1408,
      "y": 5071
    }
  },
  {
    "id": "survivalist-tough-guy",
    "nombre": "6. El camino del superviviente – Tipo duro (The Survivalist Path - Tough Guy)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que aprendas a pelear sin depender de curaciones. Mata Scavs en Woods en una sola incursión sin usar medicina.",
    "objetivos": [
      "Eliminar 3 Scavs en una sola incursión en Woods sin usar ningún tipo de medicina (curaciones, analgésicos, estimulantes, etc.)."
    ],
    "recompensas": [
      "+7 000 EXP",
      "+1 nivel de habilidad Percepción.",
      "+0.02 reputación con Jaeger.",
      "40 000 rublos (más con Centro de inteligencia).",
      "1× kit quirúrgico CMS.",
      "3× montón de medicinas (Pile of meds)."
    ],
    "youtube": "https://www.youtube.com/watch?v=3C9VVFVEvVQ",
    "prereqIds": [
      "survivalist-wounded-beast"
    ],
    "position": {
      "x": 1643,
      "y": 5153
    }
  },
  {
    "id": "survivalist-cold-blooded",
    "nombre": "7. El camino del superviviente – Sangre fría (The Survivalist Path - Cold Blooded)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Demuestra a Jaeger que puedes mantener la puntería incluso con temblor en las manos: mata PMC con disparos a la cabeza mientras sufres temblor.",
    "objetivos": [
      "Eliminar 2 PMC con disparos a la cabeza mientras sufres el efecto de temblor (tremor)."
    ],
    "recompensas": [
      "+5 900 EXP",
      "+1 nivel de habilidad Resistencia al estrés.",
      "+0.02 reputación con Jaeger.",
      "75 000 rublos (más con Centro de inteligencia)."
    ],
    "youtube": "https://www.youtube.com/watch?v=QKodZFpuGP4",
    "prereqIds": [
      "survivalist-wounded-beast"
    ],
    "position": {
      "x": 1643,
      "y": 5071
    }
  },
  {
    "id": "survivalist-junkie",
    "nombre": "8. El camino del superviviente – Yonqui (The Survivalist Path - Junkie)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que aprendas a usar estimulantes en combate. Debes eliminar Scavs en Woods mientras estás bajo el efecto de cualquier estimulante.",
    "objetivos": [
      "Eliminar 15 Scavs en Woods mientras estás bajo el efecto de cualquier estimulante."
    ],
    "recompensas": [
      "+5 900 EXP",
      "+2 niveles de habilidad Metabolismo.",
      "+0.02 reputación con Jaeger.",
      "30 000 rublos (más con Centro de inteligencia).",
      "6× pack de munición 12/70 RIP (5 balas).",
      "4× pack de munición 5.56x45mm Warmageddon (20 balas).",
      "1× pack de munición 5.45x39mm BT gs (120 balas)."
    ],
    "youtube": "https://www.youtube.com/watch?v=v6nInqwKTp4",
    "prereqIds": [
      "survivalist-combat-medic"
    ],
    "position": {
      "x": 2383,
      "y": 5235
    }
  },
  {
    "id": "survivalist-eagle-owl",
    "nombre": "9. El camino del superviviente – Búho real (The Survivalist Path - Eagle-Owl)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere entrenar tus capacidades de caza nocturna: elimina Scavs de noche sin usar visión nocturna ni térmicas.",
    "objetivos": [
      "Eliminar 6 Scavs entre las 21:00 y las 04:00 sin usar visores de visión nocturna ni visores térmicos (en cualquier mapa excepto Factory)."
    ],
    "recompensas": [
      "+5 900 EXP",
      "+0.5 nivel de habilidad Percepción.",
      "+0.02 reputación con Jaeger.",
      "40 000 rublos (más con Centro de inteligencia).",
      "3× visor de visión nocturna Armasight Vulcan MG 3.5x Bravo."
    ],
    "youtube": "https://www.youtube.com/watch?v=30FcLErduyw",
    "prereqIds": [
      "survivalist-tough-guy"
    ],
    "position": {
      "x": 1880,
      "y": 5235
    }
  },
  {
    "id": "survivalist-combat-medic",
    "nombre": "10. El camino del superviviente – Médico de combate (The Survivalist Path - Combat Medic)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Para Jaeger, un buen cazador también sabe sobrevivir a las heridas. Debes entrenar tu personaje hasta alcanzar un nivel mínimo de Vitalidad.",
    "objetivos": [
      "Alcanzar el nivel 5 de la habilidad Vitalidad."
    ],
    "recompensas": [
      "+5 900 EXP",
      "+2 niveles de habilidad Cirugía.",
      "+0.02 reputación con Jaeger.",
      "50 000 rublos (más con Centro de inteligencia)."
    ],
    "youtube": "https://www.youtube.com/watch?v=3mF7_AVRx9g",
    "prereqIds": [
      "survivalist-eagle-owl"
    ],
    "position": {
      "x": 2124,
      "y": 5235
    }
  },
  {
    "id": "huntsman-secured-perimeter",
    "nombre": "11. El camino del cazador – Perímetro asegurado (The Huntsman Path - Secured Perimeter)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que limpies la zona de oficinas de Factory eliminando operadores PMC allí. Importante: actualmente no progresa en Factory nocturno.",
    "objetivos": [
      "Eliminar 6 PMC en la zona de oficinas (cualquier planta) de Factory."
    ],
    "recompensas": [
      "+9 800 EXP.",
      "+0.02 reputación con Jaeger.",
      "37 000 rublos (38 850 / 42 550 con Centro de inteligencia).",
      "2× alicate de alta calidad Pliers Elite.",
      "1× juego de herramientas Toolset.",
      "2× tenaza de corte Nippers.",
      "2× manguera corrugada."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-tough-guy",
      "tarkov-shooter-part-3"
    ],
    "position": {
      "x": 1880,
      "y": 5432.111328125
    }
  },
  {
    "id": "huntsman-trophy",
    "nombre": "12. El camino del cazador – Trofeo (The Huntsman Path - Trophy)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que des caza a Reshala en Customs y le traigas como trofeo su pistola TT dorada.",
    "objetivos": [
      "Eliminar a Reshala.",
      "Encontrar 1× pistola TT dorada de Reshala (Encontrado en incursión).",
      "Entregar 1× pistola TT dorada de Reshala a Jaeger."
    ],
    "recompensas": [
      "+15 300 EXP.",
      "+0.02 reputación con Jaeger.",
      "90 000 rublos (94 500 / 103 500 con Centro de inteligencia).",
      "1× maletín para cargadores (Magazine case).",
      "3× cadena de oro.",
      "2× calavera de oro.",
      "1× reloj de pulsera Roler Submariner dorado."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-secured-perimeter"
    ],
    "position": {
      "x": 2383,
      "y": 5534.111328125
    }
  },
  {
    "id": "huntsman-forest-cleaning",
    "nombre": "13. El camino del cazador – Limpieza del bosque (The Huntsman Path - Forest Cleaning)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que sigas limpiando Tarkov de escoria: elimina Scavs en cualquier mapa.",
    "objetivos": [
      "Eliminar 30 Scavs en cualquier localización del territorio de Tarkov."
    ],
    "recompensas": [
      "+5 900 EXP.",
      "+0.02 reputación con Jaeger.",
      "55 000 rublos (57 750 / 63 250 con Centro de inteligencia).",
      "1× escopeta de corredera TOZ KS-23M 23x75mm.",
      "3× pack de munición 23x75mm \"Barrikada\" (5 balas)."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-secured-perimeter"
    ],
    "position": {
      "x": 508,
      "y": 5967.778076171875
    }
  },
  {
    "id": "huntsman-controller",
    "nombre": "14. El camino del cazador – Controlador (The Huntsman Path - Controller)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que aprendas a controlar al enemigo cegándolo o aturdiéndolo: elimina PMC mientras están bajo efecto de aturdimiento.",
    "objetivos": [
      "Eliminar 2 PMC mientras sufren el efecto de aturdimiento (stun)."
    ],
    "recompensas": [
      "+7 200 EXP.",
      "+0.02 reputación con Jaeger.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "1× visor NcSTAR ADO P4 Sniper 3-9x42."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 1388,
      "y": 6303.778076171875
    }
  },
  {
    "id": "huntsman-sellout",
    "nombre": "15. El camino del cazador – Venderse (The Huntsman Path - Sellout)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 32,
    "descripcion": "Jaeger te encarga eliminar a Killa en Interchange y traerle su casco Maska-1SCh como prueba del encargo.",
    "objetivos": [
      "Eliminar a Killa.",
      "Encontrar 1× casco antibalas Maska-1SCh (edición Killa) en incursión.",
      "Entregar 1× casco antibalas Maska-1SCh (edición Killa) a Jaeger."
    ],
    "recompensas": [
      "+20 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "3× carpeta de inteligencia.",
      "1× llave de caja registradora IDEA.",
      "1× llave de caja registradora OLI.",
      "1× llave de caja registradora Goshan.",
      "Desbloquea el trueque del RPK-16 5.45x39 en Prapor LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "sales-night",
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 2263,
      "y": 6015.3333740234375
    }
  },
  {
    "id": "huntsman-crooked-cop",
    "nombre": "16. El camino del cazador – Poli corrupto (The Huntsman Path - Crooked Cop)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 23,
    "descripcion": "Jaeger quiere que limpies las calles de Tarkov de escoria con placa: un ex-policía llamado Kollontay y su escolta en la academia del MVD.",
    "objetivos": [
      "Localizar y neutralizar a Kollontay en Streets of Tarkov o Ground Zero (nivel 21+).",
      "Eliminar a 4 guardias de Kollontay.",
      "Entregar 1× porra policial PR-Taran de Kollontay (Encontrado en incursión) a Jaeger."
    ],
    "recompensas": [
      "+36 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "150 000 rublos (157 500 / 172 500 con Centro de inteligencia).",
      "1× carpeta de inteligencia.",
      "5× moneda GP.",
      "1× fusil de francotirador de cerrojo Accuracy International AXMC .338 LM."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-administrator"
    ],
    "position": {
      "x": 1625,
      "y": 6303.778076171875
    }
  },
  {
    "id": "huntsman-woods-keeper",
    "nombre": "17. El camino del cazador – Guardián del bosque (The Huntsman Path - Woods Keeper)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 13,
    "descripcion": "Para Jaeger, Shturman es una infección en su reserva. Quiere que lo elimines en el aserradero de Woods y le entregues la llave de su alijo.",
    "objetivos": [
      "Eliminar a Shturman en Woods.",
      "Encontrar 1× llave del alijo de Shturman (Shturman's stash key) en incursión.",
      "Entregar 1× llave del alijo de Shturman a Jaeger."
    ],
    "recompensas": [
      "+18 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "4× pólvora \"Hawk\".",
      "1× módulo de almacenamiento VPX.",
      "3× tarjeta de acceso TerraGroup Labs.",
      "Desbloquea la compra del Remington Model 700 7.62x51 (variantes ARCH y AICS) en Jaeger LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-secured-perimeter"
    ],
    "position": {
      "x": 2124,
      "y": 5332
    }
  },
  {
    "id": "huntsman-justice",
    "nombre": "18. El camino del cazador – Justicia (The Huntsman Path - Justice)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Algunos de los antiguos hombres de Reshala siguen merodeando por Customs con uniforme de policía. Jaeger quiere que ajustes cuentas con ellos.",
    "objetivos": [
      "Eliminar 3 Scavs vestidos con uniforme de policía (los escoltas de Reshala) en Customs."
    ],
    "recompensas": [
      "+12 300 EXP.",
      "+0.02 reputación con Jaeger.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia).",
      "3× bidón de combustible de campaña.",
      "2× bombona de propano (5L).",
      "1× WD-40 (400 ml)."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-secured-perimeter"
    ],
    "position": {
      "x": 2124,
      "y": 5432.111328125
    }
  },
  {
    "id": "huntsman-evil-watchman",
    "nombre": "19. El camino del cazador – Vigilante malvado (The Huntsman Path - Evil Watchman)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Jaeger quiere que liberes los dormitorios de Customs de mercenarios: toca limpiar la zona de Dorms de operadores PMC.",
    "objetivos": [
      "Eliminar 5 PMC en la zona de Dorms (dormitorios) de Customs."
    ],
    "recompensas": [
      "+10 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "2× carpeta de inteligencia.",
      "2× unidad flash segura (Secure Flash drive)."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 1388,
      "y": 6198.778076171875
    }
  },
  {
    "id": "huntsman-eraser-part-1",
    "nombre": "20. El camino del cazador – Borrador – Parte 1 (The Huntsman Path - Eraser - Part 1)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "Jaeger tiene un encargo especial: eliminar a Glukhar y su banda en la base militar de Reserve para cortar su negocio con los almacenes militares.",
    "objetivos": [
      "Localizar y eliminar a Glukhar en Reserve."
    ],
    "recompensas": [
      "+18 300 EXP.",
      "+0.02 reputación con Jaeger.",
      "200 000 rublos (210 000 / 230 000 con Centro de inteligencia).",
      "5 000 dólares (5 250 / 5 750 con Centro de inteligencia).",
      "1× maletín de armas (Weapon case)."
    ],
    "youtube": "",
    "prereqIds": [
      "pest-control"
    ],
    "position": {
      "x": 2064,
      "y": 5746.778076171875
    }
  },
  {
    "id": "huntsman-eraser-part-2",
    "nombre": "21. The Huntsman Path - Eraser - Part 2",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que reduzcas la amenaza de los Raiders que han aparecido en zonas militares y en el laboratorio.",
    "objetivos": [
      "Eliminar 6 Raiders (Scav Raiders) en The Lab o en Reserve."
    ],
    "recompensas": [
      "+22 500 EXP",
      "+0.04 reputación con Jaeger.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia nivel 1 / 2).",
      "1× mira térmica FLIR RS-32 2.25-9x 35mm 60Hz.",
      "Desbloquea el trueque de la cámara térmica MP-155 Ultima en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-eraser-part-1",
      "huntsman-secured-perimeter"
    ],
    "position": {
      "x": 2360,
      "y": 5696.778076171875
    }
  },
  {
    "id": "huntsman-sadist",
    "nombre": "22. The Huntsman Path - Sadist",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que mates a Sanitar en Shoreline en lugar de ayudar a Therapist con \"Colleagues - Part 3\".",
    "objetivos": [
      "Eliminar a Sanitar en Shoreline."
    ],
    "recompensas": [
      "+16 300 EXP",
      "+0.02 reputación con Jaeger.",
      "115 000 rublos (120 750 / 132 250 con Centro de inteligencia nivel 1 / 2).",
      "1× mira térmica Trijicon REAP-IR.",
      "4× paquetes de 25 cartuchos 12/70 AP-20 (100 balas en total).",
      "2× botiquín quirúrgico Surv12."
    ],
    "youtube": "",
    "prereqIds": [
      "colleagues-part-2",
      "rigged-game",
      "chemistry-closet"
    ],
    "position": {
      "x": 5322,
      "y": 4953.7779541015625
    }
  },
  {
    "id": "ambulance",
    "nombre": "23. Ambulance",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 25,
    "descripcion": "Jaeger vive en el bosque y necesita mejor equipo médico para salvar a los heridos que encuentra.",
    "objetivos": [
      "Encontrar 1 Portable defibrillator en incursión.",
      "Encontrar 2 CMS surgical kits en incursión.",
      "Entregar 1 Portable defibrillator a Jaeger.",
      "Entregar 2 CMS surgical kits a Jaeger."
    ],
    "recompensas": [
      "+14 800 EXP",
      "+1 nivel de habilidad Vitality.",
      "+0.02 reputación con Jaeger.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia nivel 1 / 2).",
      "3× botiquín Grizzly.",
      "3× bálsamo Golden Star.",
      "Desbloquea la compra del botiquín quirúrgico Surv12 en Jaeger LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "shady-business"
    ],
    "position": {
      "x": 959,
      "y": 4903.7779541015625
    }
  },
  {
    "id": "shady-business",
    "nombre": "24. Shady Business",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "Jaeger sospecha de Skier y quiere saber qué está tramando con unas memorias USB encriptadas.",
    "objetivos": [
      "Encontrar 3 Secure Flash drives en incursión.",
      "Entregar 3 Secure Flash drives a Jaeger."
    ],
    "recompensas": [
      "+11 400 EXP",
      "+0.02 reputación con Jaeger.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia nivel 1 / 2).",
      "1× SSD drive."
    ],
    "youtube": "",
    "prereqIds": [
      "whats-on-the-flash-drive",
      "acquaintance"
    ],
    "position": {
      "x": 733,
      "y": 4903.7779541015625
    }
  },
  {
    "id": "nostalgia",
    "nombre": "25. Nostalgia",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 28,
    "descripcion": "Jaeger te pide que recuperes su álbum de fotos del Health Resort de Shoreline, un recuerdo importante de antes del conflicto.",
    "objetivos": [
      "Localizar la habitación de Jaeger en el Health Resort (ala oeste, habitación 303) en Shoreline.",
      "Obtener el Photo album de Jaeger.",
      "Entregar el Photo album a Jaeger."
    ],
    "recompensas": [
      "+16 800 EXP",
      "+0.02 reputación con Jaeger.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia nivel 1 / 2).",
      "1× Documents case.",
      "1× HEP station storage room key."
    ],
    "youtube": "",
    "prereqIds": [
      "courtesy-visit"
    ],
    "position": {
      "x": 2124,
      "y": 5153
    }
  },
  {
    "id": "fishing-place",
    "nombre": "26. Fishing Place",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 25,
    "descripcion": "Jaeger necesita tarjetas de acceso para una supuesta laboratorio de TerraGroup. Quiere que encuentres keycards nuevas dentro de incursión.",
    "objetivos": [
      "Encontrar 2× TerraGroup Labs access keycard en incursión.",
      "Entregar 2× TerraGroup Labs access keycard a Jaeger."
    ],
    "recompensas": [
      "+18 000 EXP",
      "+0.02 reputación con Jaeger.",
      "40 000 rublos (42 000 / 46 000 con Centro de inteligencia).",
      "1× Remington Model 700 7.62x51 (variante AAC SD).",
      "1× chaleco antibalas FORT Redut-M."
    ],
    "youtube": "",
    "prereqIds": [
      "nostalgia"
    ],
    "position": {
      "x": 2383,
      "y": 5071
    }
  },
  {
    "id": "courtesy-visit",
    "nombre": "27. Courtesy Visit",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "Jaeger quiere que compruebes qué fue de sus viejos conocidos en la aldea inundada de Shoreline, visitando sus casas y saliendo con vida.",
    "objetivos": [
      "Localizar la casa del presidente (chairman) en la aldea abandonada de Shoreline.",
      "Localizar la casa del pescador en la aldea abandonada de Shoreline.",
      "Localizar la casa del sacerdote en la aldea abandonada de Shoreline.",
      "Sobrevivir y extraer de Shoreline con estado de salida \"Superviviente\"."
    ],
    "recompensas": [
      "+11 800 EXP",
      "+0.03 reputación con Jaeger. // Ojo: algunas fuentes indican que puede ser +0.02 tras cambios de rep globales.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia).",
      "5× Emelya rye croutons.",
      "5× Pack of milk."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-tough-guy"
    ],
    "position": {
      "x": 1880,
      "y": 5153
    }
  },
  {
    "id": "hunting-trip",
    "nombre": "28. Hunting Trip",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 33,
    "descripcion": "Jaeger quiere probar un montaje de Remington M700 en condiciones reales: debes eliminar a Shturman con un disparo preciso a la cabeza desde larga distancia.",
    "objetivos": [
      "Eliminar a Shturman con un disparo a la cabeza desde más de 75 metros usando un M700 con la mira especificada por la misión."
    ],
    "recompensas": [
      "+15 000 EXP",
      "+0.02 reputación con Jaeger.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "1× VPX Flash Storage Module.",
      "1× Iridium military thermal vision module.",
      "1× Phased array element.",
      "Desbloquea la compra del Accuracy International AXMC .338 LM en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-woods-keeper"
    ],
    "position": {
      "x": 2383,
      "y": 5332
    }
  },
  {
    "id": "reserve-quest",
    "nombre": "29. Reserve",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "Jaeger ha oído que en la base militar de Reserve aún quedan almacenes de comida. Quiere que localices el almacén de víveres subterráneo y salgas vivo.",
    "objetivos": [
      "Localizar el almacén de comida en Reserve (almacén subterráneo marcado con la letra \"Д\").",
      "Sobrevivir y extraer de Reserve."
    ],
    "recompensas": [
      "+11 800 EXP",
      "+0.02 reputación con Jaeger.",
      "16 000 rublos (16 800 / 18 400 con Centro de inteligencia).",
      "3× Pack of nails.",
      "3× Pack of screws.",
      "1× Silicone tube.",
      "2× Broken LCD."
    ],
    "youtube": "",
    "prereqIds": [
      "delicious-sausage"
    ],
    "position": {
      "x": 1583,
      "y": 5746.778076171875
    }
  },
  {
    "id": "tarkov-shooter-part-1",
    "nombre": "30. The Tarkov Shooter - Part 1",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Primera prueba de la cadena The Tarkov Shooter: Jaeger quiere comprobar tu puntería con fusiles de cerrojo usando únicamente miras abiertas a media distancia.",
    "objetivos": [
      "Eliminar 5 Scavs a más de 40 metros usando un fusil de cerrojo (bolt-action rifle) con miras abiertas (sin visor ni punto rojo)."
    ],
    "recompensas": [
      "+12 300 EXP",
      "+0.02 reputación con Jaeger.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "2× visor PU 3.5x.",
      "2× montura de anillo PU 3.5x.",
      "2× montura Mosin Rifle Kochetov."
    ],
    "youtube": "",
    "prereqIds": [
      "acquaintance"
    ],
    "position": {
      "x": 733,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-2",
    "nombre": "31. El tirador de Tarkov – Parte 2 (The Tarkov Shooter – Part 2)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Segunda prueba de tirador: Jaeger (y su amigo «Sniper») quieren ver si puedes colocar disparos precisos a las piernas y a la cabeza a más de 40 metros con un fusil de cerrojo.",
    "objetivos": [
      "Impactar 3 veces en las piernas de cualquier objetivo desde más de 40 metros usando un fusil de cerrojo.",
      "Impactar 2 veces en la cabeza de cualquier objetivo desde más de 40 metros usando un fusil de cerrojo."
    ],
    "recompensas": [
      "+12 400 EXP.",
      "+0.02 reputación con Jaeger.",
      "65 000 rublos (68 250 / 74 750 con Centro de inteligencia).",
      "1× Mosin Rifle AIM Sports MNG rail mount.",
      "2× chaleco de caza Umka M33-SET1 hunter vest (Olive Drab).",
      "Desbloquea la compra del Mosin Rifle AIM Sports MNG rail mount en Jaeger LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-1"
    ],
    "position": {
      "x": 958,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-3",
    "nombre": "32. El tirador de Tarkov – Parte 3 (The Tarkov Shooter – Part 3)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Tercera prueba: Jaeger quiere que demuestres que puedes manejar un fusil de cerrojo a corta distancia, rematando operadores PMC casi cuerpo a cuerpo.",
    "objetivos": [
      "Eliminar 3 PMC desde menos de 25 metros usando un fusil de cerrojo."
    ],
    "recompensas": [
      "+10 500 EXP.",
      "+0.02 reputación con Jaeger.",
      "70 000 rublos (73 500 / 80 500 con Centro de inteligencia).",
      "1× freno de boca Mosin Rifle Tacfire Tanker Style 7,62×54R.",
      "1× culata/almohadilla Mosin Rifle AIM Sports Recoil Pad.",
      "1× sombrero Kinda Cowboy.",
      "1× pasamontañas Cold Fear (Cold Fear infrared balaclava).",
      "Desbloquea compra del freno Mosin Rifle Tacfire Tanker Style 7,62×54R en Jaeger LL2.",
      "Desbloquea compra de la culata Mosin Rifle AIM Sports Recoil Pad en Jaeger LL2.",
      "Desbloquea el crafteo de munición .366 TKM AP-M en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-2"
    ],
    "position": {
      "x": 1183,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-4",
    "nombre": "33. El tirador de Tarkov – Parte 4 (The Tarkov Shooter – Part 4)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Cuarta etapa: Jaeger quiere que mejores tu maestría general con fusiles de tirador. No se trata de bajas concretas, sino de subir tu habilidad.",
    "objetivos": [
      "Alcanzar nivel 3 en la habilidad Fusiles de tirador (Sniper Rifles)."
    ],
    "recompensas": [
      "+11 800 EXP.",
      "+0.02 reputación con Jaeger.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia).",
      "1× Mosin Rifle AIM Sports Tri-Rail mount.",
      "1× empuñadura/stock Mosin Rifle Tacfire pistol grip.",
      "Desbloquea compra del Mosin Rifle AIM Sports Tri-Rail mount en Jaeger LL2.",
      "Desbloquea compra del Mosin Rifle Tacfire pistol grip en Jaeger LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-3"
    ],
    "position": {
      "x": 1401,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-5",
    "nombre": "34. El tirador de Tarkov – Parte 5 (The Tarkov Shooter – Part 5)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Quinta prueba nocturna: Jaeger quiere ver cómo te manejas cazando scavs en Customs por la noche usando solo un fusil de cerrojo.",
    "objetivos": [
      "Eliminar 8 Scavs en Customs usando un fusil de cerrojo entre las 21:00 y las 05:00."
    ],
    "recompensas": [
      "+13 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia).",
      "1× Mosin Rifle Texas Precision Products 7,62×54R muzzle brake.",
      "1× gafas de visión nocturna PNV-10T.",
      "Desbloquea compra del Mosin Rifle Texas Precision Products 7,62×54R muzzle brake en Jaeger LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-4"
    ],
    "position": {
      "x": 1648,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-6",
    "nombre": "35. El tirador de Tarkov – Parte 6 (The Tarkov Shooter – Part 6)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Sexta prueba: Jaeger quiere que acabes con los francotiradores Scav empleando, de nuevo, un fusil de cerrojo. Objetivo: limpiar los tejados.",
    "objetivos": [
      "Eliminar 5 Sniper Scavs usando un fusil de cerrojo."
    ],
    "recompensas": [
      "+13 100 EXP.",
      "+0.02 reputación con Jaeger.",
      "85 000 rublos (89 250 / 97 750 con Centro de inteligencia).",
      "1× culata Mosin Rifle ATI Monte Carlo stock.",
      "1× gorro de lana ski hat with holes for eyes.",
      "Desbloquea compra de la culata Mosin Rifle ATI Monte Carlo stock en Jaeger LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-5"
    ],
    "position": {
      "x": 1880,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-7",
    "nombre": "36. El tirador de Tarkov – Parte 7 (The Tarkov Shooter – Part 7)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Séptima prueba de tirador: elimina operadores PMC a media distancia con un fusil de cerrojo silenciado.",
    "objetivos": [
      "Eliminar 5 PMC desde al menos 45 metros usando un fusil de cerrojo con supresor (bolt-action rifle silenciado)."
    ],
    "recompensas": [
      "+13 300 EXP.",
      "+0.02 reputación con Jaeger.",
      "85 000 rublos (89 250 / 97 750 con Centro de inteligencia).",
      "1× freno de boca Mosin Rifle Witt Machine 7.62x54R.",
      "1× supresor Mosin Rifle Bramit 7.62x54R.",
      "Desbloquea compra del freno Mosin Rifle Witt Machine 7.62x54R en Jaeger LL3.",
      "Desbloquea crafteo de 7.62x54mm R BT gzh en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-6"
    ],
    "position": {
      "x": 2124,
      "y": 4982
    }
  },
  {
    "id": "tarkov-shooter-part-8",
    "nombre": "37. El tirador de Tarkov – Parte 8 (The Tarkov Shooter – Part 8)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": null,
    "descripcion": "Última prueba de la cadena The Tarkov Shooter: headshots con fusil de cerrojo sin morir en toda la incursión.",
    "objetivos": [
      "Eliminar 3 PMC con disparos a la cabeza usando un fusil de cerrojo sin morir en la incursión."
    ],
    "recompensas": [
      "+30 000 EXP.",
      "+3 niveles de habilidad Fusiles de cerrojo (Bolt-action rifles).",
      "+0.01 reputación con Jaeger.",
      "400 000 rublos (420 000 / 460 000 con Centro de inteligencia).",
      "1× Mosin 7.62x54R (Sniper) (variante Archangel).",
      "1× unidad flash militar (Military flash drive).",
      "Desbloquea compra del chasis Mosin Rifle ProMag Archangel OPFOR PRS en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "tarkov-shooter-part-7"
    ],
    "position": {
      "x": 2383,
      "y": 4982
    }
  },
  {
    "id": "pest-control",
    "nombre": "38. Control de plagas (Pest Control)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 10,
    "descripcion": "Jaeger quiere que limpies de saqueadores los barracones principales de la base de Reserve.",
    "objetivos": [
      "Eliminar 10 Scavs dentro de los barracones principales en Reserve (edificios de peón blanco y negro, zona de dormitorios/barracks)."
    ],
    "recompensas": [
      "+7 400 EXP.",
      "+0.02 reputación con Jaeger.",
      "20 000 rublos (21 000 / 23 000 con Centro de inteligencia).",
      "2× spray anti cucarachas PAID AntiRoach.",
      "6× pólvora \"Eagle\".",
      "4× caja de clavos (Pack of nails).",
      "2× lata de termita."
    ],
    "youtube": "",
    "prereqIds": [
      "reserve-quest"
    ],
    "position": {
      "x": 1818,
      "y": 5746.778076171875
    }
  },
  {
    "id": "swift-one",
    "nombre": "39. Swift One",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 50,
    "descripcion": "Jaeger quiere que demuestres que la mejor armadura es no dejarte ver: elimina PMC en Woods sin llevar armadura ni casco.",
    "objetivos": [
      "Eliminar 15 PMC en Woods sin usar ningún chaleco antibalas, chaleco portaplacas ni casco (ni casco con armadura facial)."
    ],
    "recompensas": [
      "+107 000 EXP.",
      "+1 nivel de habilidad Resistencia (Endurance).",
      "+1 nivel de habilidad Resistencia al estrés.",
      "1× brazalete Armband (Train Hard).",
      "2× pack de munición .338 Lapua Magnum AP (20 balas por pack).",
      "5× pack de munición 7.62x39mm MAI AP (20 balas por pack)."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-sadist",
      "colleagues-part-3"
    ],
    "position": {
      "x": 5545,
      "y": 4953.7779541015625
    }
  },
  {
    "id": "huntsman-relentless",
    "nombre": "40. El camino del cazador – Implacable (The Huntsman Path - Relentless)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 65,
    "descripcion": "Quest final de jefes de Jaeger: debes eliminar a TODOS los bosses principales en una sola vida, sin morir ni abandonar la incursión.",
    "objetivos": [
      "No morir ni abandonar la incursión mientras la tarea esté activa (no puedes terminar con estado KIA, Left the Action, MIA o Ran Through).",
      "Eliminar a Tagilla.",
      "Eliminar a Killa.",
      "Eliminar a Reshala.",
      "Eliminar a Shturman.",
      "Eliminar a Glukhar.",
      "Eliminar a Sanitar."
    ],
    "recompensas": [
      "+280 000 EXP.",
      "+2 niveles de habilidad Fabricación (Crafting).",
      "+1 nivel de habilidad Inmunidad.",
      "1× visor térmico FLIR RS-32 2.25-9x 35mm 60Hz.",
      "5× bidón de combustible de campaña (Expeditionary fuel tank).",
      "20× moneda GP."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-trophy",
      "huntsman-woods-keeper",
      "huntsman-eraser-part-1",
      "huntsman-sellout",
      "huntsman-factory-chief",
      "huntsman-sadist",
      "colleagues-part-3"
    ],
    "position": {
      "x": 3400,
      "y": 5800.111328125
    }
  },
  {
    "id": "huntsman-factory-chief",
    "nombre": "41. El camino del cazador – Jefe de fábrica (The Huntsman Path - Factory Chief)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que elimines a Tagilla en Factory y le traigas su gorra BOSS como prueba.",
    "objetivos": [
      "Eliminar a Tagilla en Factory.",
      "Encontrar 1× BOSS cap en incursión.",
      "Entregar 1× BOSS cap a Jaeger."
    ],
    "recompensas": [
      "+16 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "700 000 rublos (735 000 / 805 000 con Centro de inteligencia).",
      "1× llave Factory emergency exit key."
    ],
    "youtube": "https://www.youtube.com/watch?v=zpOXRTb6Y6g",
    "prereqIds": [
      "scout",
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 2597,
      "y": 6141.666748046875
    }
  },
  {
    "id": "hunter",
    "nombre": "42. Cazador (Hunter)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que caces repetidamente a Shturman en Woods para ganarte un arma de caza de élite.",
    "objetivos": [
      "Eliminar a Shturman 20 veces."
    ],
    "recompensas": [
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "1× maletín de armas (Weapon case).",
      "1× Chain with Prokill medallion.",
      "Desbloquea la compra del fusil SWORD International Mk-18 .338 LM en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-woods-keeper"
    ],
    "position": {
      "x": 2383,
      "y": 5432.111328125
    }
  },
  {
    "id": "the-hermit",
    "nombre": "43. El ermitaño (The Hermit)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "Jaeger te pide que busques a un viejo amigo suyo que vive aislado en Lighthouse y le traigas un mensaje.",
    "objetivos": [
      "Localizar el refugio del amigo de Jaeger en Lighthouse.",
      "Encontrar y obtener el mensaje (Sealed letter) para Jaeger.",
      "Entregar el mensaje a Jaeger."
    ],
    "recompensas": [
      "+12 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "55 000 rublos (57 750 / 63 250 con Centro de inteligencia)."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-tough-guy"
    ],
    "position": {
      "x": 1880,
      "y": 5332
    }
  },
  {
    "id": "huntsman-outcasts",
    "nombre": "44. El camino del cazador – Forasteros (The Huntsman Path - Outcasts)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 0,
    "descripcion": "Jaeger quiere que elimines a los Renegados USEC (Rogues) que controlan la zona industrial de Lighthouse.",
    "objetivos": [
      "Eliminar 10 Rogues en Lighthouse."
    ],
    "recompensas": [
      "+9 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "110 000 rublos (115 500 / 126 500 con Centro de inteligencia).",
      "Desbloquea el crafteo de la munición 12/70 AP-20 en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 1404,
      "y": 5940
    }
  },
  {
    "id": "stray-dogs",
    "nombre": "45. Perros callejeros (Stray Dogs)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 35,
    "descripcion": "Jaeger quiere que des caza a los renegados conocidos como los Goons: Knight, Big Pipe y Birdeye.",
    "objetivos": [
      "Localizar y eliminar a Knight.",
      "Localizar y eliminar a Big Pipe.",
      "Localizar y eliminar a Birdeye."
    ],
    "recompensas": [
      "+35 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "250 000 rublos (262 500 / 287 500 con Centro de inteligencia).",
      "1× bolsa organizadora S I C C.",
      "1× fusil de tirador SWORD International Mk-18 .338 LM.",
      "2× cargador Mk-18 .338 LM de 10 balas.",
      "1× pack de munición .338 Lapua Magnum FMJ (20 balas)."
    ],
    "youtube": "https://www.youtube.com/watch?v=rbBXB9zrT7Q",
    "prereqIds": [
      "huntsman-trophy",
      "huntsman-sellout",
      "huntsman-woods-keeper"
    ],
    "position": {
      "x": 3400,
      "y": 5942.111328125
    }
  },
  {
    "id": "the-delicious-sausage",
    "nombre": "46. La salchicha deliciosa (The Delicious Sausage)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 5,
    "descripcion": "Jaeger quiere que revises varias tiendas de comida en Streets of Tarkov y, de paso, le consigas una salchicha Salty Dog encontrada en incursión.",
    "objetivos": [
      "Explorar la tienda Shestyorochka en la calle Nikitskaya en Streets of Tarkov.",
      "Explorar la tienda Sparja en la avenida Primorsky en Streets of Tarkov.",
      "Explorar la tienda Sparja del hotel Pinewood en Streets of Tarkov.",
      "Explorar la tienda Goshan en el complejo Concordia en Streets of Tarkov.",
      "Entregar 1× Salty Dog beef sausage en estado Encontrado en incursión a Jaeger."
    ],
    "recompensas": [
      "+2 600 EXP.",
      "+0.01 reputación con Jaeger.",
      "10 000 rublos (10 500 / 11 500 con Centro de inteligencia).",
      "2× tornillos (Bolts).",
      "2× tuercas (Screw nuts).",
      "1× manguera corrugada (Corrugated hose)."
    ],
    "youtube": "",
    "prereqIds": [
      "survivalist-thrifty"
    ],
    "position": {
      "x": 1183,
      "y": 5153
    }
  },
  {
    "id": "cease-fire",
    "nombre": "47. ¡Alto el fuego! (Cease Fire!)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 10,
    "descripcion": "Jaeger quiere comprobar un rumor: si lanzas una bengala verde en Klimov Street, los francotiradores cesan el fuego y te dejan extraer.",
    "objetivos": [
      "Sobrevivir y extraer de Streets of Tarkov por la extracción Klimov Street."
    ],
    "recompensas": [
      "+5 600 EXP.",
      "+0.02 reputación con Jaeger.",
      "27 000 rublos (28 350 / 31 050 con Centro de inteligencia).",
      "1× pistola de señales ZiD SP-81 26x75.",
      "3× cartucho de bengala 26x75mm (verde)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-delicious-sausage"
    ],
    "position": {
      "x": 1408,
      "y": 5235
    }
  },
  {
    "id": "broadcast-part-3",
    "nombre": "48. Transmisión – Parte 3 (Broadcast - Part 3)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 20,
    "descripcion": "La investigación de las grabaciones continúa: Jaeger quiere que encuentres la casa del \"banquete sangriento\" que aparece en una de las cintas.",
    "objetivos": [
      "Localizar el lugar de la emisión sangrienta dentro de la casa vieja en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+10 800 EXP.",
      "+0.02 reputación con Jaeger.",
      "68 000 rublos (71 400 / 78 200 con Centro de inteligencia).",
      "Desbloquea el trueque del botiquín quirúrgico Surv12 en Jaeger LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "broadcast-part-2"
    ],
    "position": {
      "x": 1139,
      "y": 6501
    }
  },
  {
    "id": "broadcast-part-4",
    "nombre": "49. Transmisión – Parte 4 (Broadcast - Part 4)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 27,
    "descripcion": "Jaeger sospecha de un punto de reunión de los sectarios en Streets of Tarkov. Quiere que localices su sala de encuentro marcada.",
    "objetivos": [
      "Localizar el lugar de reunión de los sectarios en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+22 600 EXP.",
      "+0.03 reputación con Jaeger.",
      "94 000 rublos (98 700 / 108 100 con Centro de inteligencia).",
      "2× bidón de combustible de campaña (Expeditionary fuel tank).",
      "Desbloquea la compra de la munición .45 ACP RIP en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "broadcast-part-3"
    ],
    "position": {
      "x": 1388,
      "y": 6501
    }
  },
  {
    "id": "huntsman-administrator",
    "nombre": "50. El camino del cazador – Administrador (The Huntsman Path - Administrator)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 23,
    "descripcion": "Jaeger quiere que limpies el hotel Pinewood de saqueadores y señales el área disparando una bengala amarilla en el patio.",
    "objetivos": [
      "Eliminar 20 objetivos (Scavs o PMC) en el hotel Pinewood en Streets of Tarkov.",
      "Disparar una bengala de señal amarilla en el patio del hotel Pinewood."
    ],
    "recompensas": [
      "+15 600 EXP.",
      "+0.02 reputación con Jaeger.",
      "81 000 rublos (85 050 / 93 150 con Centro de inteligencia).",
      "1× fusil de francotirador de cerrojo Remington Model 700 7.62x51."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 1388,
      "y": 6399
    }
  },
  {
    "id": "slaughterhouse",
    "nombre": "51. Matadero (Slaughterhouse)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 40,
    "descripcion": "Jaeger quiere comprobar si eres capaz de limpiar todas las localizaciones cuerpo a cuerpo. Toca matar Scavs solo con armas cuerpo a cuerpo en todos los mapas.",
    "objetivos": [
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Factory (solo incursiones diurnas).",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Streets of Tarkov.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Lighthouse.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Woods.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Shoreline.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Interchange.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Customs.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Reserve.",
      "Eliminar 10 Scavs usando armas cuerpo a cuerpo en Ground Zero."
    ],
    "recompensas": [
      "+34 700 EXP.",
      "+0.03 reputación con Jaeger.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "Desbloquea el trueque del hacha táctica SOG Voodoo Hawk en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-administrator",
      "broadcast-part-4"
    ],
    "position": {
      "x": 1625,
      "y": 6399
    }
  },
  {
    "id": "huntsman-big-game",
    "nombre": "52. El camino del cazador – Caza mayor (The Huntsman Path - Big Game)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 17,
    "descripcion": "Jaeger quiere que des caza a los nuevos jefes urbanos. Tienes que eliminar a Kaban, Basmach y Gus, además de sus guardias en el concesionario.",
    "objetivos": [
      "Localizar y eliminar a Kaban en Streets of Tarkov.",
      "Localizar y eliminar a Basmach.",
      "Localizar y eliminar a Gus.",
      "Eliminar 5 guardias de Kaban en el concesionario de coches de Streets of Tarkov."
    ],
    "recompensas": [
      "+33 000 EXP.",
      "+0.02 reputación con Jaeger.",
      "250 000 rublos (262 500 / 287 500 con Centro de inteligencia).",
      "1× batería militar 6-STEN-140-M.",
      "5× placa de circuito militar (Military circuit board).",
      "Desbloquea el trueque de la mira térmica Armasight Zeus-Pro 640 2-8x50 30Hz en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "huntsman-forest-cleaning"
    ],
    "position": {
      "x": 1388,
      "y": 6105.666748046875
    }
  },
  {
    "id": "broadcast-part-5",
    "nombre": "53. Transmisión – Parte 5 (Broadcast - Part 5)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 27,
    "descripcion": "Jaeger ha localizado al sacerdote sectario responsable de las emisiones. Tienes que encontrarlo, eliminarlo y completar el ritual inverso en Streets of Tarkov.",
    "objetivos": [
      "Localizar y eliminar a Priest (sacerdote sectario).",
      "Localizar el lugar del ritual en la calle Chekannaya en Streets of Tarkov.",
      "Ocultar (stash) un Cultist knife en el lugar del ritual.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+24 000 EXP.",
      "+0.03 reputación con Jaeger.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "2× carabina Molot Arms VPO-101 Vepr-Hunter 7.62x51.",
      "2× pack de munición 7.62x51 mm M61 (20 balas).",
      "Desbloquea el trueque de la mira térmica Armasight Zeus-Pro 640 2-8x50 30Hz en Jaeger LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "broadcast-part-4"
    ],
    "position": {
      "x": 1625,
      "y": 6493
    }
  },
  {
    "id": "thirsty-hounds",
    "nombre": "54. Sedientos – Sabuesos (Thirsty - Hounds)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 15,
    "descripcion": "Los sabuesos de Sanitar patrullan la costa de noche buscando algo. Jaeger quiere que los espantes eliminando Scavs en Shoreline durante la noche.",
    "objetivos": [
      "Eliminar 12 Scavs en Shoreline entre las 22:00 y las 07:00."
    ],
    "recompensas": [
      "+8 500 EXP.",
      "+0.01 reputación con Jaeger.",
      "3× pack de munición 12/70 RIP (5 cartuchos por pack)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-delicious-sausage"
    ],
    "position": {
      "x": 1408,
      "y": 5153
    }
  },
  {
    "id": "every-hunter-knows-this",
    "nombre": "55. Todo cazador lo sabe (Every Hunter Knows This)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Continuación de las pruebas con trampas: Jaeger quiere que encuentres buenos puntos para instalar tripwires en Factory y Customs.",
    "objetivos": [
      "Localizar un buen sitio para instalar un tripwire en Factory.",
      "Localizar un buen sitio para instalar un tripwire en Customs."
    ],
    "recompensas": [
      "+5 800 EXP.",
      "+0.01 reputación con Jaeger.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "Desbloquea la compra del Tripwire installation kit en Jaeger LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "rough-tarkov"
    ],
    "position": {
      "x": 958,
      "y": 5235
    }
  },
  {
    "id": "rough-tarkov",
    "nombre": "56. Rough Tarkov",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Jaeger quiere que reconozcas zonas especialmente peligrosas de Tarkov: un campo de minas en Woods y una trampa con Claymore en Ground Zero.",
    "objetivos": [
      "Localizar el área fuertemente minada en Woods.",
      "Localizar la mina Claymore en Ground Zero.",
      "Sobrevivir y extraer de ambas incursiones tras visitar las zonas indicadas."
    ],
    "recompensas": [
      "+7 100 EXP.",
      "+0.01 reputación con Jaeger.",
      "34 000 rublos.",
      "1× kit de instalación de cable trampa (Tripwire installation kit).",
      "Desbloquea la compra del kit de instalación de cable trampa en Jaeger."
    ],
    "youtube": "",
    "prereqIds": [
      "acquaintance"
    ],
    "position": {
      "x": 733,
      "y": 5235
    }
  },
  {
    "id": "dragnet",
    "nombre": "57. Dragnet",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 15,
    "descripcion": "Jaeger ha localizado un almacén secreto de TerraGroup en Factory donde se esconde un contenedor químico muy peligroso. Quiere que lo recuperes antes de que lo haga nadie más.",
    "objetivos": [
      "Localizar el almacén TerraGroup en Factory (TerraGroup warehouse).",
      "Localizar y obtener el contenedor químico (Chemical container).",
      "Entregar el contenedor químico a Jaeger."
    ],
    "recompensas": [
      "+17 300 EXP.",
      "+0.02 reputación con Jaeger.",
      "90 000 rublos (94 500 / 103 500 con Centro de inteligencia).",
      "1× fusil Springfield Armory M1A 7.62×51.",
      "3× cargadores M14 7.62×51 de 30 balas.",
      "6× paquetes de munición 7.62×51 mm M62 Tracer (20 balas c/u)."
    ],
    "youtube": "",
    "prereqIds": [
      "one-less-loose-end",
      "a-healthy-alternative"
    ],
    "position": {
      "x": 2895,
      "y": 3518
    }
  },
  {
    "id": "claustrophobia",
    "nombre": "58. Claustrofobia (Claustrophobia)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Jaeger quiere información sobre los viejos sótanos de Streets of Tarkov y, de paso, que demuestres que puedes pelear en espacios muy cerrados.",
    "objetivos": [
      "Localizar los viejos sótanos en Streets of Tarkov.",
      "Eliminar 10 enemigos (Scavs o PMC) en los viejos sótanos o en los pasillos directamente conectados a ellos."
    ],
    "recompensas": [
      "+13 700 EXP.",
      "+0.02 reputación con Jaeger.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "2× estimulante SJ9 Tigr.",
      "2× estimulante Propital."
    ],
    "youtube": "",
    "prereqIds": [
      "the-huntsman-path-forest-cleaning"
    ],
    "position": {
      "x": 486,
      "y": 5513.111328125
    }
  },
  {
    "id": "foresters-duty",
    "nombre": "59. Deber del guardabosques (Forester's Duty)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 28,
    "descripcion": "Jaeger, el viejo guardabosques, quiere que limpies a fondo Woods eliminando operadores PMC bien armados en la zona del aserradero y alrededores.",
    "objetivos": [
      "Eliminar 20 operadores PMC en Woods en la zona del aserradero o en sus alrededores inmediatos."
    ],
    "recompensas": [
      "+17 400 EXP.",
      "+0.03 reputación con Jaeger.",
      "74 000 rublos (77 700 / 85 100 con Centro de inteligencia).",
      "1× fusil de asalto Ars Arma A-18 5.56×45.",
      "1× casco Altyn (con visor).",
      "60× cartuchos 7.62×39 mm PP."
    ],
    "youtube": "",
    "prereqIds": [
      "nostalgia"
    ],
    "position": {
      "x": 2383,
      "y": 5153
    }
  },
  {
    "id": "work-smarter",
    "nombre": "60. Trabaja con cabeza (Work Smarter)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Jaeger quiere que conozcas bien las rutas de extracción ocultas de Customs para que siempre tengas un plan B a la hora de abandonar una incursión.",
    "objetivos": [
      "Localizar una de las extracciones secretas de Customs (Smugglers’ Boat o Smugglers’ Bunker ZB-1012).",
      "Opcional: obtener el objeto especial necesario para extraer por una de esas salidas.",
      "Sobrevivir y extraer de la incursión una vez hayas localizado la extracción secreta."
    ],
    "recompensas": [
      "+6 600 EXP.",
      "+0.01 reputación con Jaeger.",
      "32 000 rublos (33 600 / 36 800 con Centro de inteligencia).",
      "2× kit quirúrgico CMS."
    ],
    "youtube": "",
    "prereqIds": [
      "acquaintance"
    ],
    "position": {
      "x": 733,
      "y": 5071
    }
  },
  {
    "id": "rite-of-passage",
    "nombre": "61. Rito de iniciación (Rite of Passage)",
    "trader": "Jaeger",
    "traderColor": "jaeger",
    "nivel": 2,
    "descripcion": "Para Jaeger, Ground Zero es el lugar perfecto para que un cazador demuestre que está preparado para Tarkov. Quiere que pruebes tu valía contra otros PMCs allí.",
    "objetivos": [
      "Eliminar 5 operadores PMC en Ground Zero."
    ],
    "recompensas": [
      "+10 200 EXP.",
      "+0.02 reputación con Jaeger.",
      "48 000 rublos (50 400 / 55 200 con Centro de inteligencia).",
      "1× casco táctico (generalmente de gama media-alta).",
      "Munición adicional de rifle o fusil de asalto (según versión actual del parche)."
    ],
    "youtube": "",
    "prereqIds": [
      "work-smarter"
    ],
    "position": {
      "x": 958,
      "y": 5071
    }
  },
  {
    "id": "fishing-gear",
    "nombre": "1. Equipo de pesca (Fishing Gear)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 10,
    "descripcion": "Primera misión de Peacekeeper tras «Amigo del Oeste – Parte 2». Te presenta como contacto de la ONU y te pide dejar un fusil SV-98 y una multiherramienta en una barca escondida junto al espigón en Shoreline.",
    "objetivos": [
      "Localizar la barca oculta junto al espigón (breakwater) en Shoreline.",
      "Esconder el fusil de francotirador SV-98 en la barca.",
      "Esconder la multiherramienta (Leatherman Multitool) en la barca.",
      "Sobrevivir y extraer de Shoreline después de colocar ambos objetos."
    ],
    "recompensas": [
      "+4 800 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "700 dólares (735 / 805 con Centro de inteligencia).",
      "1× casco UNTAR (UNTAR helmet).",
      "Desbloquea compra del visor SIG Sauer ROMEO4 reflex en Peacekeeper LL2.",
      "Desbloquea compra del fusil de asalto Colt M16A1 5.56x45 en Peacekeeper LL2.",
      "Desbloquea trueque por el fusil Springfield Armory M1A 7.62x51 en Peacekeeper LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "friend-from-the-west-2"
    ],
    "position": {
      "x": 1040,
      "y": 3381
    }
  },
  {
    "id": "tigr-safari",
    "nombre": "2. Safari Tigr (Tigr Safari)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 10,
    "descripcion": "Peacekeeper quiere recuperar equipamiento de los vehículos blindados Tigr abandonados de la misión UNTAR en Customs. Debes localizarlos y marcarlos con balizas MS2000 para que su gente los vacíe más tarde.",
    "objetivos": [
      "Marcar el primer vehículo Tigr con un marcador MS2000 en Customs.",
      "Marcar el segundo vehículo Tigr con un marcador MS2000 en Customs.",
      "Marcar el tercer vehículo Tigr con un marcador MS2000 en Customs."
    ],
    "recompensas": [
      "+5 900 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia).",
      "1× chaleco portaequipo Direct Action Thunderbolt (Shadow Grey).",
      "2× granada de mano M67.",
      "Desbloquea compra del subfusil B&T MP9 9x19 en Peacekeeper LL1.",
      "Desbloquea compra de munición 5.56x45mm FMJ en Peacekeeper LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "fishing-gear"
    ],
    "position": {
      "x": 1265,
      "y": 3381
    }
  },
  {
    "id": "scrap-metal",
    "nombre": "3. Chatarra (Scrap Metal)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 10,
    "descripcion": "En Shoreline han quedado varios carros de combate T-90 abandonados. Peacekeeper quiere que los marques con balizas para que sus técnicos puedan desmontar sus sistemas ópticos y electrónicos.",
    "objetivos": [
      "Marcar el primer carro T-90 con un marcador MS2000 en Shoreline.",
      "Marcar el segundo carro T-90 con un marcador MS2000 en Shoreline.",
      "Marcar el tercer carro T-90 con un marcador MS2000 en Shoreline.",
      "Sobrevivir y extraer de Shoreline."
    ],
    "recompensas": [
      "+5 900 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia).",
      "1× subfusil HK MP5 9x19 (Navy 3 Round Burst).",
      "3× paquete de munición 9x19mm Pst gzh (50 balas).",
      "Desbloquea compra del HK MP5 SD 9x19 en Peacekeeper LL2.",
      "Desbloquea compra de munición 5.7x28mm SS197SR en Peacekeeper LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "tigr-safari"
    ],
    "position": {
      "x": 1473,
      "y": 3381
    }
  },
  {
    "id": "eagle-eye",
    "nombre": "4. Ojo de águila (Eagle Eye)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 11,
    "descripcion": "Peacekeeper ha perdido contacto con dos UAV de reconocimiento que se estrellaron en Shoreline. Necesita que localices los restos y recuperes los discos SAS con los datos grabados.",
    "objetivos": [
      "Localizar el primer lugar de impacto del UAV en Shoreline.",
      "Obtener el disco SAS del primer dron estrellado (encontrado en incursión).",
      "Entregar el primer disco SAS a Peacekeeper.",
      "Localizar el segundo lugar de impacto del UAV en Shoreline.",
      "Obtener el disco SAS del segundo dron estrellado (encontrado en incursión).",
      "Entregar el segundo disco SAS a Peacekeeper."
    ],
    "recompensas": [
      "+6 600 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia).",
      "1× visor ELCAN SpecterDR 1x/4x Dual Role (FDE).",
      "1× visor Leupold Mark 4 HAMR.",
      "Desbloquea compra del subfusil SIG MPX 9x19 en Peacekeeper LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "scrap-metal"
    ],
    "position": {
      "x": 1691,
      "y": 3381
    }
  },
  {
    "id": "humanitarian-supplies",
    "nombre": "5. Suministros humanitarios (Humanitarian Supplies)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 11,
    "descripcion": "Un convoy de la ONU fue atacado en Shoreline y varios camiones Ural con cajas marcadas como ayuda humanitaria quedaron abandonados. Peacekeeper quiere que marques los camiones, juntes raciones MRE como ‘pruebas’ y castigues a los asaltantes vestido con uniforme de la ONU.",
    "objetivos": [
      "Localizar el primer camión UN atacado en Shoreline (objetivo opcional de registro).",
      "Marcar el primer camión con un marcador MS2000.",
      "Localizar el segundo camión UN atacado en Shoreline (objetivo opcional de registro).",
      "Marcar el segundo camión con un marcador MS2000.",
      "Obtener 5× raciones MRE (MRE ration pack).",
      "Entregar 5× raciones MRE a Peacekeeper.",
      "Eliminar 10 Scavs en Shoreline llevando uniforme UN (chaleco MF-UNTAR y casco UN/UNTAR helmet).",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+11 500 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "800 dólares (840 / 920 con Centro de inteligencia).",
      "2× Weapon parts (piezas de arma).",
      "Desbloquea compra de munición 5.56x45mm Warmageddon en Peacekeeper LL2.",
      "Desbloquea compra del supresor Hexagon AK-74 5.45x39 en Skier LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "eagle-eye"
    ],
    "position": {
      "x": 1915,
      "y": 3381
    }
  },
  {
    "id": "the-cult-part-1",
    "nombre": "6. El culto – Parte 1 (The Cult - Part 1)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Tras investigar los camiones de ayuda de la ONU, Peacekeeper pierde contacto con uno de sus informadores en la aldea vieja de Shoreline. Lo último que supo de él es que estaba siguiendo unas luces extrañas y voces entre las chozas del pantano. Tu trabajo es encontrar qué ha pasado con ese informador o, al menos, con lo que quede de él.",
    "objetivos": [
      "Localizar al informador desaparecido en Shoreline (zona de la aldea vieja / pantano).",
      "Sobrevivir y extraer de la incursión después de haberlo encontrado."
    ],
    "recompensas": [
      "+6 200 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "700 dólares (735 / 805 con Centro de inteligencia).",
      "3× Golden neck chain (cadenas de oro)."
    ],
    "youtube": "",
    "prereqIds": [
      "humanitarian-supplies"
    ],
    "position": {
      "x": 2144,
      "y": 3333
    }
  },
  {
    "id": "the-cult-part-2",
    "nombre": "7. El culto – Parte 2 (The Cult - Part 2)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Lo que encuentras en la aldea confirma que hay una secta operando en Tarkov, con altares de sacrificio donde ofrecen armas a sus ‘dioses’. Peacekeeper quiere localizar todos esos lugares de culto repartidos por Customs, Woods y Shoreline para seguir sus movimientos. Tu papel es marcar cada altar con balizas MS2000.",
    "objetivos": [
      "Localizar y marcar con un marcador MS2000 el primer lugar de ritual en Woods.",
      "Localizar y marcar con un marcador MS2000 el lugar de ritual en Customs (habitación marcada de dormitorios).",
      "Localizar y marcar con un marcador MS2000 el segundo lugar de ritual en Woods.",
      "Localizar y marcar con un marcador MS2000 el lugar de ritual en Shoreline (habitación de los cerdos en el resort)."
    ],
    "recompensas": [
      "+7 500 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "850 dólares (893 / 978 con Centro de inteligencia).",
      "1× fusil de tirador Knight's Armament Company SR-25 7.62x51."
    ],
    "youtube": "",
    "prereqIds": [
      "the-cult-part-1"
    ],
    "position": {
      "x": 2425,
      "y": 3333
    }
  },
  {
    "id": "spa-tour-part-1",
    "nombre": "8. Tour de spa – Parte 1 (Spa Tour - Part 1)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Peacekeeper quiere ‘limpiar’ el balneario Azure Coast de la presencia de Scavs que saquean el resort. La idea es mandar un mensaje contundente usando escopetas de calibre 12: el balneario está cerrado para ellos, por las buenas o por las malas.",
    "objetivos": [
      "Eliminar 7 Scavs de un disparo a la cabeza usando una escopeta de calibre 12 en Shoreline."
    ],
    "recompensas": [
      "+7 400 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "950 dólares (998 / 1 093 con Centro de inteligencia).",
      "1× subfusil SIG MPX 9x19 silenciado.",
      "3× cargador de 30 balas para MPX 9x19.",
      "5× paquete de munición 9x19mm RIP (20 balas cada uno).",
      "1× llave Health Resort west wing room 306 key."
    ],
    "youtube": "",
    "prereqIds": [
      "humanitarian-supplies"
    ],
    "position": {
      "x": 2144,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-2",
    "nombre": "9. Tour de spa – Parte 2 (Spa Tour - Part 2)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Una vez asegurada la zona contra los Scavs, toca preparar la ‘recogida’ de material del helicóptero estrellado en el helipuerto del resort. Peacekeeper quiere que marques tanto el helicóptero como la ruta segura para acceder con vehículo.",
    "objetivos": [
      "Marcar el helicóptero del Health Resort con un marcador MS2000 en Shoreline.",
      "Marcar la ruta segura hasta el helicóptero con un marcador MS2000 en Shoreline.",
      "Sobrevivir y extraer de la localización después de colocar ambos marcadores."
    ],
    "recompensas": [
      "+6 300 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia).",
      "1× Bitcoin físico.",
      "Desbloquea compra de granada de mano M67 en Peacekeeper LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-1"
    ],
    "position": {
      "x": 2425,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-3",
    "nombre": "10. Tour de spa – Parte 3 (Spa Tour - Part 3)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Para continuar los trabajos en el resort, los equipos de Peacekeeper necesitan productos de limpieza y material técnico en buen estado. No se fía de los revendedores, así que te pide que consigas tú mismo todos los ítems directamente de raid o mediante crafteo marcado como ‘encontrado en incursión’.",
    "objetivos": [
      "Encontrar en incursión 1× WD-40 (100ml) o WD-40 (400ml).",
      "Entregar 1× WD-40 (100ml) o WD-40 (400ml) a Peacekeeper.",
      "Encontrar en incursión 2× limpiacristales Clin.",
      "Entregar 2× limpiacristales Clin a Peacekeeper.",
      "Encontrar en incursión 2× manguera corrugada (Corrugated hose).",
      "Entregar 2× manguera corrugada a Peacekeeper.",
      "Encontrar en incursión 2× Ox bleach.",
      "Entregar 2× Ox bleach a Peacekeeper."
    ],
    "recompensas": [
      "+7 600 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "800 dólares (840 / 920 con Centro de inteligencia).",
      "1× subfusil TDI KRISS Vector Gen.2 9x19 (algunas fuentes mencionan 2×, pero la wiki en inglés lista 1×; compruébalo in-game por si hay cambios de parche).",
      "5× granada de mano M67.",
      "4× cargador Glock 9x19 ‘Big Stick’ de 33 balas.",
      "2× Toolset (juego de herramientas)."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-2"
    ],
    "position": {
      "x": 2664,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-4",
    "nombre": "11. Tour de spa – Parte 4 (Spa Tour - Part 4)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Peacekeeper se da cuenta de que han pasado por alto algo básico: la alimentación eléctrica del resort. Quiere que localices las salas donde aún quedan generadores funcionales en las alas este y oeste del balneario Azure Coast, para planificar cómo aprovecharlos en sus operaciones.",
    "objetivos": [
      "Localizar los generadores en la ala este del Health Resort en Shoreline.",
      "Localizar los generadores en la ala oeste del Health Resort en Shoreline.",
      "Sobrevivir y extraer de la incursión tras haber encontrado ambas salas en la misma raid."
    ],
    "recompensas": [
      "+7 700 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 100 dólares (1 155 / 1 265 con Centro de inteligencia).",
      "1× batería de coche (Car Battery)."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-3"
    ],
    "position": {
      "x": 2895,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-5",
    "nombre": "12. Tour de spa – Parte 5 (Spa Tour - Part 5)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Los hombres de Peacekeeper han localizado varias habitaciones muy interesantes en el resort, pero están cerradas. Saben que una unidad USEC guardaba la llave en un búnker de hormigón al noroeste del complejo, y te encarga ir a recuperarla.",
    "objetivos": [
      "Obtener la llave de las dependencias cerradas del Sanatorio en Shoreline (Key to the closed premises of the Sanatorium).",
      "Entregar la llave de las dependencias cerradas del Sanatorio a Peacekeeper."
    ],
    "recompensas": [
      "+6 500 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "980 dólares (1 029 / 1 127 con Centro de inteligencia).",
      "1× llave RB-AO (RB-AO key)."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-4"
    ],
    "position": {
      "x": 3115,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-6",
    "nombre": "13. Tour de spa – Parte 6 (Spa Tour - Part 6)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Antes de confiarte una operación más delicada en el resort, Peacekeeper quiere que ‘demuestres lealtad’ apoyando financieramente el negocio. Básicamente es una prueba de confianza: entregarle una cantidad considerable de dólares para sus planes en Shoreline.",
    "objetivos": [
      "Entregar 8 000 dólares (USD) a Peacekeeper."
    ],
    "recompensas": [
      "+9 500 EXP.",
      "+0.04 reputación con Peacekeeper."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-5"
    ],
    "position": {
      "x": 3335,
      "y": 3422
    }
  },
  {
    "id": "spa-tour-part-7",
    "nombre": "14. Tour de spa – Parte 7 (Spa Tour - Part 7)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Peacekeeper quiere convertir ciertas estancias del resort en un centro de producción de ‘compuestos’ para sus socios. Tu papel es hacerles llegar los suministros necesarios: analgésicos fuertes, productos químicos y material técnico voluminoso, todo marcado como encontrado en incursión.",
    "objetivos": [
      "Encontrar en incursión 4× inyectores de morfina (Morphine injector).",
      "Entregar 4× inyectores de morfina a Peacekeeper.",
      "Encontrar en incursión 2× limpiador alcalino para intercambiadores de calor (Alkaline cleaner for heat exchangers).",
      "Entregar 2× limpiadores alcalinos para intercambiadores de calor a Peacekeeper.",
      "Encontrar en incursión 2× mangueras corrugadas (Corrugated hose).",
      "Entregar 2× mangueras corrugadas a Peacekeeper.",
      "Encontrar en incursión 2× bombonas de propano de 5L (5L propane tank).",
      "Entregar 2× bombonas de propano de 5L a Peacekeeper."
    ],
    "recompensas": [
      "+9 700 EXP.",
      "+0.04 reputación con Peacekeeper.",
      "−0.01 reputación con Jaeger.",
      "1× llave RB-ST (RB-ST key).",
      "Desbloquea compra del casco Crye Precision AirFrame (Tan) en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-6"
    ],
    "position": {
      "x": 3555,
      "y": 3422
    }
  },
  {
    "id": "cargo-x-part-1",
    "nombre": "15. Carga X – Parte 1 (Cargo X - Part 1)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Tras los trabajos en Shoreline, Peacekeeper quiere seguir la pista de un cargamento de TerraGroup que intentaron mover por el túnel de la costa y acabó almacenado temporalmente en algún lugar. Sabe que en el resort había un centro de coordinación con ordenadores en la tercera planta del ala este, y te manda allí a buscar datos sobre ese envío.",
    "objetivos": [
      "Obtener los datos en la sala de ordenadores del ala este del Health Resort en Shoreline.",
      "Entregar los datos recuperados a Peacekeeper."
    ],
    "recompensas": [
      "+8 200 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "700 dólares (735 / 805 con Centro de inteligencia).",
      "2× pistola Colt M45A1 .45 ACP.",
      "6× cargador Wilson Combat de 7 balas para M1911A1 .45 ACP.",
      "1× estuche para pistolas (Pistol case)."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-7"
    ],
    "position": {
      "x": 3775,
      "y": 3422
    }
  },
  {
    "id": "cargo-x-part-2",
    "nombre": "16. Carga X – Parte 2 (Cargo X - Part 2)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Tras recuperar los primeros datos del envío de TerraGroup, Peacekeeper te manda de nuevo al resort. Sabe que parte de la carga estaba asociada a depósitos o ‘reservorios’ en la zona del balneario y quiere que encuentres cualquier información sobre esa segunda parte del cargamento.",
    "objetivos": [
      "Localizar la sala con depósitos/bidones (reservoirs) en el Health Resort de Shoreline (ala este, habitación 108).",
      "Obtener la información relacionada con la segunda parte de la carga (carpeta segura de misión).",
      "Entregar la información recuperada a Peacekeeper."
    ],
    "recompensas": [
      "+8 300 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "850 dólares (893 / 978 con Centro de inteligencia).",
      "1× fusil de asalto Colt M4A1 5.56x45.",
      "3× cargador AR-15 Magpul PMAG 30 GEN M3 5.56x45 de 30 balas.",
      "Desbloquea compra del supresor KAC QDSS NT-4 5.56x45 (negro) en Peacekeeper LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "cargo-x-part-1"
    ],
    "position": {
      "x": 3995,
      "y": 3422
    }
  },
  {
    "id": "cargo-x-part-3",
    "nombre": "17. Carga X – Parte 3 (Cargo X - Part 3)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 12,
    "descripcion": "Los documentos de la Parte 2 hablan de un compartimento sellado en el sótano del resort donde se almacenó físicamente la carga de TerraGroup. Peacekeeper quiere que localices ese cargamento oculto en las instalaciones del balneario.",
    "objetivos": [
      "Localizar el cargamento oculto de TerraGroup dentro del Health Resort en Shoreline (zona de la piscina en el sótano del ala oeste, agujero en la pared).",
      "Sobrevivir y extraer de la localización tras encontrar el cargamento."
    ],
    "recompensas": [
      "+8 400 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia).",
      "1× subfusil HK MP7A1 4.6x30."
    ],
    "youtube": "",
    "prereqIds": [
      "cargo-x-part-2"
    ],
    "position": {
      "x": 4215,
      "y": 3422
    }
  },
  {
    "id": "wet-job-part-1",
    "nombre": "18. Trabajo mojado – Parte 1 (Wet Job - Part 1)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Los Scavs y otros grupos están saboteando el equipo meteorológico y las antenas de comunicación de la ONU en Shoreline. Peacekeeper quiere que les ‘explique’ quién manda en la zona, eliminando vándalos mientras usas fusiles de asalto estándar de sus unidades, todos con supresor.",
    "objetivos": [
      "Eliminar 10 Scavs en Shoreline usando una M4A1, ADAR o TX-15 con supresor equipado."
    ],
    "recompensas": [
      "+11 400 EXP.",
      "+0.04 reputación con Peacekeeper.",
      "1 100 dólares (1 155 / 1 265 con Centro de inteligencia).",
      "2× cassette de cinta magnética segura (Secure magnetic tape cassette).",
      "Desbloquea crafteo de .300 Blackout M62 Tracer en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-7"
    ],
    "position": {
      "x": 3775,
      "y": 3518
    }
  },
  {
    "id": "wet-job-part-2",
    "nombre": "19. Trabajo mojado – Parte 2 (Wet Job - Part 2)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "El siguiente paso de la operación de limpieza consiste en asegurar una pequeña vivienda de pescadores en la isla de Shoreline (Scav Island). Peacekeeper sospecha que la usan para movimientos discretos por mar, así que quiere que la localices y la marques para vigilancia permanente.",
    "objetivos": [
      "Localizar la vivienda de pescadores en la isla de Shoreline (Scav Island).",
      "Marcar la mesa de pesca con un marcador MS2000.",
      "Sobrevivir y extraer de la localización después de colocar el marcador."
    ],
    "recompensas": [
      "+9 700 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 300 dólares (1 365 / 1 495 con Centro de inteligencia).",
      "1× mochila Eberlestock F5 Switchblade (Dry Earth).",
      "Desbloquea trueque por cargador AR-15 Magpul PMAG D-60 5.56x45 de 60 balas en Peacekeeper LL4.",
      "Desbloquea compra del casco MSA ACH TC-2001 MICH Series (Olive Drab) en Peacekeeper LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-1"
    ],
    "position": {
      "x": 3995,
      "y": 3518
    }
  },
  {
    "id": "wet-job-part-3",
    "nombre": "20. Trabajo mojado – Parte 3 (Wet Job - Part 3)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Las investigaciones de Peacekeeper apuntan a un tal Artyom, implicado en los negocios turbios alrededor de la costa. Se cree que su coche sigue aparcado en la carretera principal de Shoreline. Tu misión es localizar el vehículo, confirmar sus datos y salir con vida para reportarlos.",
    "objetivos": [
      "Localizar el coche de Artyom en Shoreline (turismo amarillo aparcado en la carretera costera principal).",
      "Sobrevivir y extraer de la localización después de haber localizado el coche."
    ],
    "recompensas": [
      "+8 200 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 500 dólares (1 575 / 1 725 con Centro de inteligencia).",
      "1× visor NcSTAR ADO P4 Sniper 3-9x42.",
      "Desbloquea compra del fusil de asalto HK 416A5 5.56x45 en Peacekeeper LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-2"
    ],
    "position": {
      "x": 4207,
      "y": 3518
    }
  },
  {
    "id": "wet-job-part-4",
    "nombre": "21. Trabajo mojado – Parte 4 (Wet Job - Part 4)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Peacekeeper ha rastreado a Artyom en las bases de datos de la ONU y sospecha que vivía en el sanatorio Azure Coast con algún tipo de relación con TerraGroup. Para seguir tirando del hilo, necesita el listado de inquilinos del resort, que debería estar en la oficina de administración si aún sigue en pie.",
    "objetivos": [
      "Obtener la lista de inquilinos del resort en Shoreline (oficina de administración del Health Resort).",
      "Entregar la lista de inquilinos a Peacekeeper."
    ],
    "recompensas": [
      "+8 300 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 700 dólares (1 785 / 1 955 con Centro de inteligencia).",
      "1× mapa del Health Resort de Shoreline.",
      "Desbloquea la compra del fusil de asalto Desert Tech MDR 7.62×51 en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-3"
    ],
    "position": {
      "x": 4439,
      "y": 3518
    }
  },
  {
    "id": "wet-job-part-5",
    "nombre": "22. Trabajo mojado – Parte 5 (Wet Job - Part 5)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Con los documentos obtenidos, Peacekeeper descubre que Artyom estaba alojado y trabajaba en la habitación 328 del sanatorio. Si queda alguna pista de sus actividades, estará allí. Tu misión es entrar en la habitación, encontrar la información de su ‘trabajo’ y llevársela a Peacekeeper.",
    "objetivos": [
      "Obtener información sobre el trabajo de Artyom en Shoreline (disco duro en la habitación 328 del ala este del Health Resort).",
      "Entregar la información a Peacekeeper."
    ],
    "recompensas": [
      "+8 400 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 700 dólares (1 785 / 1 955 con Centro de inteligencia).",
      "1× chaleco antibalas HighCom Trooper TFO (MultiCam).",
      "Desbloquea la compra del fusil de tirador Remington R11 RSASS 7.62×51 en Peacekeeper LL4.",
      "Desbloquea la compra del botiquín táctico AFAK en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-4"
    ],
    "position": {
      "x": 4674,
      "y": 3619
    }
  },
  {
    "id": "wet-job-part-6",
    "nombre": "23. Trabajo mojado – Parte 6 (Wet Job - Part 6)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Después de todo lo ocurrido en la costa, Peacekeeper quiere estar seguro de que dominas el combate de precisión a larga distancia. A cambio de un entrenamiento intensivo con rifles de cerrojo, te promete acceso a munición y equipo de francotirador de alto nivel.",
    "objetivos": [
      "Alcanzar nivel 7 en la habilidad de Rifles de cerrojo (Bolt-action Rifles)."
    ],
    "recompensas": [
      "+8 500 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "3 500 dólares (3 675 / 4 025 con Centro de inteligencia).",
      "1× fusil de cerrojo Lobaev Arms DVL-10 7.62×51 (Saboteur).",
      "3× pack de munición 7.62×51 mm M61 (20 balas cada uno).",
      "Desbloquea trueque por el lanzagranadas FN40GL Mk2 de 40 mm en Peacekeeper LL4.",
      "Desbloquea el crafteo de 7.62×51 mm M61 en el Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-5"
    ],
    "position": {
      "x": 4933,
      "y": 3619
    }
  },
  {
    "id": "the-guide",
    "nombre": "24. El guía (The Guide)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 40,
    "descripcion": "Algunos ‘clientes serios’ que son nuevos en Tarkov necesitan un guía profesional que los lleve por toda la ciudad sin hacer preguntas. Peacekeeper quiere comprobar que estás a la altura: tienes que demostrar que puedes sobrevivir en todos los mapas principales de Tarkov, uno tras otro, sin morir.",
    "objetivos": [
      "Sobrevivir y extraer de Woods con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Customs con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Interchange con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Shoreline con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Factory con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de The Lab con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Reserve con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Lighthouse con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Streets of Tarkov con el estado de salida «Superviviente».",
      "Sobrevivir y extraer de Ground Zero con el estado de salida «Superviviente»."
    ],
    "recompensas": [
      "+42 600 EXP.",
      "+0.04 reputación con Peacekeeper.",
      "25 000 dólares (26 250 / 28 750 con Centro de inteligencia).",
      "1× mira híbrida EOTech HHS-1 (Tan).",
      "1× placa de casco Ops-Core SLAAP (Tan).",
      "3× upper AR-15 Vltor MUR-1S 5.56×45.",
      "Desbloquea la compra de la EOTech HHS-1 (Tan) en Peacekeeper LL3.",
      "Desbloquea la compra de la placa Ops-Core SLAAP (Tan) en Peacekeeper LL4.",
      "Desbloquea la compra del upper Vltor MUR-1S 5.56×45 en Peacekeeper LL4.",
      "Desbloquea el crafteo de 4.6×30 mm AP SX en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-6"
    ],
    "position": {
      "x": 5169,
      "y": 3619
    }
  },
  {
    "id": "peacekeeping-mission",
    "nombre": "25. Misión de mantenimiento de la paz (Peacekeeping Mission)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "La prensa está acusando a los ‘cascos azules’ de no hacer su trabajo en Tarkov. Para acallar las críticas y justificar la financiación, Peacekeeper necesita resultados visibles: limpieza masiva de Scavs bajo bandera de la ONU, con equipo estándar de la misión.",
    "objetivos": [
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Woods.",
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Customs.",
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Interchange.",
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Shoreline.",
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Streets of Tarkov.",
      "Eliminar 12 Scavs llevando uniforme de la ONU (casco UN, chaleco MF-UNTAR y fusil M4A1) en Ground Zero."
    ],
    "recompensas": [
      "+25 500 EXP.",
      "+0.04 reputación con Peacekeeper.",
      "1× fusil de cerrojo Remington Model 700 7.62×51 (AAC SD).",
      "2× pack de munición 7.62×51 mm M61 (20 balas cada uno).",
      "2× gafas de visión nocturna L3Harris GPNVG-18.",
      "Desbloquea un trueque por la placa balística Cult Locust en Skier LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "lend-lease-part-2"
    ],
    "position": {
      "x": 3094,
      "y": 3796
    }
  },
  {
    "id": "lend-lease-part-2",
    "nombre": "26. Arrendamiento de equipo - Parte 2 (Lend-Lease - Part 2)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 30,
    "descripcion": "Peacekeeper quiere sacar de Tarkov cierto hardware militar de alta gama antes de que caiga en manos equivocadas. Concretamente, te encarga recuperar procesadores Virtex y un transmisor COFDM originales, encontrados en incursión, sin recurrir a revendedores. Es una misión de ‘loot de alto valor’: poca cantidad de objetos, pero extremadamente raros y caros. El objetivo real es asegurar para sus clientes el control sobre esta tecnología de comunicaciones.",
    "objetivos": [
      "Encontrar en incursión 2 procesadores programables Virtex.",
      "Encontrar en incursión 1 transmisor inalámbrico militar COFDM.",
      "Entregar a Peacekeeper los 2 procesadores Virtex encontrados en incursión.",
      "Entregar a Peacekeeper el transmisor COFDM encontrado en incursión.",
      "Sobrevivir y extraer en las incursiones donde recojas el hardware (si mueres, los objetos no contarán)."
    ],
    "recompensas": [
      "+21.000 EXP aproximadamente.",
      "Reputación con Peacekeeper +0,04.",
      "Unos 2.000 dólares (ligeramente más si tienes Centro de Inteligencia en el escondite: ~2.100 / ~2.300).",
      "2× fusil de asalto HK 416A5 5,56x45.",
      "2× cargador tambor AR-15 Magpul PMAG D-60 de 60 balas.",
      "2× cargador AR-15 SureFire MAG5-60 de 60 balas.",
      "3× packs de 100 balas de 5,56x45 mm M995.",
      "El progreso de esta misión es requisito para avanzar hacia «Peacekeeping Mission» y el Kappa."
    ],
    "youtube": "",
    "prereqIds": [
      "lend-lease-part-1"
    ],
    "position": {
      "x": 2861,
      "y": 3796
    }
  },
  {
    "id": "mentor",
    "nombre": "27. Mentor (Mentor)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "Peacekeeper te ofrece acceso a un francotirador retirado que ahora entrena tiradores a cambio de mucho dinero. El trato es simple: pagas una suma enorme en euros y, a cambio, recibes formación intensiva con fusiles de cerrojo. Es una misión puramente de ‘inversión en skills’: no hay objetivos de combate ni de recolección, sólo una gran entrega de dinero a cambio de niveles de habilidad.",
    "objetivos": [
      "Entregar a Peacekeeper 50.000 euros (no hace falta que estén encontrados en incursión).",
      "Asegurarte de tenerlos convertidos previamente desde rublos/dólares si no los tienes en efectivo."
    ],
    "recompensas": [
      "+3 niveles en la habilidad «Fusiles de cerrojo» (Bolt-action Rifles skill).",
      "Progreso permanente en el manejo de sniper de cerrojo para todas tus partidas futuras.",
      "No otorga reputación ni dinero: es literalmente pagar por adiestramiento."
    ],
    "youtube": "",
    "prereqIds": [
      "wet-job-part-5"
    ],
    "position": {
      "x": 4933,
      "y": 3518
    }
  },
  {
    "id": "samples",
    "nombre": "28. Muestras (Samples)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "Se ha detectado la circulación de nuevos estimulantes extremadamente potentes, vinculados al traficante Sanitar. Peacekeeper quiere varios ejemplares sellados de estos inyectores para vender los resultados de ‘ensayo clínico’ a sus contactos. La misión consiste en reunir una colección completa de estimulantes raros, todos encontrados en incursión, lo que normalmente implica combinar crafteos, drops de jefes y rutas de loot muy específicas.",
    "objetivos": [
      "Encontrar en incursión 1 inyector estimulante M.U.L.E.",
      "Entregar a Peacekeeper el inyector M.U.L.E. encontrado en incursión.",
      "Encontrar en incursión 1 inyector «Obdolbos cocktail».",
      "Entregar a Peacekeeper el «Obdolbos cocktail» encontrado en incursión.",
      "Encontrar en incursión 1 inyector Meldonin.",
      "Entregar a Peacekeeper el inyector Meldonin encontrado en incursión.",
      "Encontrar en incursión 1 inyector AHF1-M.",
      "Entregar a Peacekeeper el inyector AHF1-M encontrado en incursión.",
      "Encontrar en incursión 1 inyector P22 (Product 22).",
      "Entregar a Peacekeeper el inyector P22 encontrado en incursión.",
      "Encontrar en incursión 1 inyector L1 (Norepinephrine).",
      "Entregar a Peacekeeper el inyector L1 encontrado en incursión.",
      "Encontrar en incursión 1 inyector 3-(b-TG).",
      "Entregar a Peacekeeper el inyector 3-(b-TG) encontrado en incursión.",
      "Sobrevivir y extraer siempre que lleves alguno de estos inyectores; si mueres, tendrás que volver a conseguirlo en incursión."
    ],
    "recompensas": [
      "+15.300 EXP aproximadamente.",
      "Reputación con Peacekeeper +0,04.",
      "Alrededor de 4.000 dólares (unos 4.200 / 4.600 con Centro de Inteligencia nivel 1 / 2).",
      "1× contenedor «Ammunition case».",
      "1× fusil DS Arms SA58 7,62x51 (variante BEL).",
      "Desbloquea la compra del visor facial balístico Ops-Core FAST multi-hit en Peacekeeper LL4.",
      "Desbloquea la compra del casco balístico Team Wendy EXFIL (negro) en Peacekeeper LL4.",
      "Completar esta misión es necesario para acceder a «TerraGroup Employee» y seguir la trama de Sanitar/TerraGroup."
    ],
    "youtube": "",
    "prereqIds": [
      "anesthesia",
      "fishing-gear"
    ],
    "position": {
      "x": 2449,
      "y": 3899.3333740234375
    }
  },
  {
    "id": "terragroup-employee",
    "nombre": "29. Empleado de TerraGroup (TerraGroup Employee)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 23,
    "descripcion": "Tras analizar las drogas de «Muestras», Mechanic confirma que Sanitar trabajaba para TerraGroup y que tenía acceso directo a sus instalaciones. Peacekeeper quiere pruebas sólidas, así que te envía a Laboratorio (The Lab) a localizar el puesto de trabajo de Sanitar, robar su información y extraer con ella. Es una misión centrada en infiltración en The Lab: requiere llave de acceso a su sala y una extracción limpia con el pendrive.",
    "objetivos": [
      "Localizar el puesto de trabajo de Sanitar en The Lab (su sala privada).",
      "Obtener la información sobre el trabajo de Sanitar (pendrive específico que sólo aparece con la misión activa).",
      "Extraer con vida de The Lab llevando ese pendrive en tu inventario de misión.",
      "Entregar a Peacekeeper el pendrive marcado con cinta azul para que pueda analizar los datos."
    ],
    "recompensas": [
      "+17.000 EXP aproximadamente.",
      "Reputación con Peacekeeper +0,04.",
      "Unos 5.000 dólares (aprox. 5.250 / 5.750 con Centro de Inteligencia nivel 1 / 2).",
      "4× fusil Desert Tech MDR 7,62x51.",
      "3× cargador AR-10 PMAG 20 SR-LR GEN M3 (20 balas).",
      "4× packs de 20 balas de 7,62x51 mm M80.",
      "Desbloquea la compra del buffer hidráulico Mesa Tactical Crosshair para tubo de culata en Peacekeeper LL4.",
      "Esta misión es requisito para el Kappa y cierra parte del arco argumental de Sanitar/TerraGroup."
    ],
    "youtube": "",
    "prereqIds": [
      "samples"
    ],
    "position": {
      "x": 2674,
      "y": 3899.3333740234375
    }
  },
  {
    "id": "revision-reserve",
    "nombre": "30. Revisión – Reserve (Revision - Reserve)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Como parte del mandato ‘pacificador’, se pide a Peacekeeper evaluar el potencial militar de la base de Reserve. Tu tarea es localizar varios blindados (BMP-2, LAV III y un T-90) repartidos por la base y marcar la mayoría con bengalas MS2000 para que los cascos azules puedan monitorizarlos y, llegado el caso, neutralizarlos. Es una misión de exploración y marcado de objetivos, con énfasis en recorrer prácticamente todo Reserve.",
    "objetivos": [
      "Localizar y registrar el primer BMP-2 en Reserve.",
      "Marcar el primer BMP-2 con un marcador MS2000.",
      "Localizar y registrar el segundo BMP-2 en Reserve.",
      "Marcar el segundo BMP-2 con un marcador MS2000.",
      "Localizar y registrar el tercer BMP-2 en Reserve (en sala cerrada, requiere llave RB-ST).",
      "Marcar el tercer BMP-2 con un marcador MS2000.",
      "Localizar y registrar el cuarto BMP-2 en Reserve.",
      "Marcar el cuarto BMP-2 con un marcador MS2000.",
      "Localizar y registrar el primer LAV III en Reserve.",
      "Marcar el primer LAV III con un marcador MS2000.",
      "Localizar y registrar el segundo LAV III en Reserve (sólo inspección, sin marcador).",
      "Localizar y registrar el carro de combate T-90 en Reserve.",
      "Llevar suficientes marcadores MS2000 a la incursión (se consumen al colocarlos)."
    ],
    "recompensas": [
      "+7.300 EXP aproximadamente.",
      "Reputación con Peacekeeper +0,03.",
      "Alrededor de 800 dólares (sube a ~840 / ~920 con Centro de Inteligencia nivel 1 / 2).",
      "15× packs de 20 balas de 5,56x45 mm Warmageddon (Warmage).",
      "Progreso necesario para continuar hacia «Classified Technologies» y otras misiones de revisión de vehículos."
    ],
    "youtube": "",
    "prereqIds": [
      "humanitarian-supplies"
    ],
    "position": {
      "x": 2144,
      "y": 3604
    }
  },
  {
    "id": "revision-lighthouse",
    "nombre": "31. Revisión – Lighthouse (Revision - Lighthouse)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "Tras evaluar Reserve, Peacekeeper quiere un informe similar sobre el potencial militar de Lighthouse. Le interesan cuatro vehículos pesados (dos BRDM y dos Stryker) en la zona de la base USEC y la carretera principal. Tu trabajo es localizarlos y marcarlos con bengalas MS2000 para que sus técnicos puedan ‘destriparlos’ más tarde con calma.",
    "objetivos": [
      "Localizar y marcar el primer BRDM con un marcador MS2000 en Lighthouse.",
      "Localizar y marcar el segundo BRDM con un marcador MS2000 en Lighthouse.",
      "Localizar y marcar el primer Stryker con un marcador MS2000 en Lighthouse.",
      "Localizar y marcar el segundo Stryker con un marcador MS2000 en Lighthouse."
    ],
    "recompensas": [
      "+7 800 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "850 dólares (893 / 978 con Centro de inteligencia).",
      "Desbloquea la compra de la pistola FN Five-seveN MK2 5.7x28 (FDE) en Peacekeeper LL2.",
      "Desbloquea la compra de la munición 7.62x51 mm M80 en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "revision-reserve"
    ],
    "position": {
      "x": 2425,
      "y": 3705
    }
  },
  {
    "id": "the-cleaner",
    "nombre": "32. El limpiador (The Cleaner)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 45,
    "descripcion": "Los antiguos PMC reconvertidos en Raiders de Reserve están interfiriendo con la evacuación de material valioso. Los clientes occidentales de Peacekeeper quieren que alguien ‘limpie’ la base para poder operar con menos sobresaltos. Tu misión es sencilla en papel pero dura en práctica: reducir drásticamente el número de Raiders.",
    "objetivos": [
      "Eliminar 40 Raiders (Scav Raiders) en Reserve."
    ],
    "recompensas": [
      "+84 000 EXP.",
      "+1 nivel de habilidad en Fusiles de tirador designado (DMR).",
      "+2 niveles de habilidad en Subfusiles.",
      "+2 niveles de habilidad en Fusiles de asalto.",
      "3 000 euros (3 150 / 3 450 con Centro de inteligencia).",
      "Desbloquea el crafteo de munición .300 Blackout AP en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "the-guide"
    ],
    "position": {
      "x": 5393,
      "y": 3619
    }
  },
  {
    "id": "classified-technologies",
    "nombre": "33. Tecnologías clasificadas (Classified Technologies)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 14,
    "descripcion": "Entre los documentos de inteligencia aparece una referencia a un panel de control del carro T-90M almacenado en Reserve. Es equipo extremadamente sensible y valioso. Peacekeeper quiere que lo recuperes discretamente del taller subterráneo de la base, donde probablemente aún siga oculto.",
    "objetivos": [
      "Obtener el paquete con el panel de control del comandante del T-90M en Reserve.",
      "Entregar el paquete con el panel de control del T-90M a Peacekeeper."
    ],
    "recompensas": [
      "+7 200 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "800 dólares (840 / 920 con Centro de inteligencia).",
      "2× pack de munición 5.7x28 mm R37.F (50 balas cada uno).",
      "2× pack de munición 5.7x28 mm R37.X (50 balas cada uno)."
    ],
    "youtube": "",
    "prereqIds": [
      "revision-reserve"
    ],
    "position": {
      "x": 2425,
      "y": 3796
    }
  },
  {
    "id": "special-equipment",
    "nombre": "34. Equipo especial (Special Equipment)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 60,
    "descripcion": "Algunos contactos de alto nivel de Peacekeeper necesitan un lote enorme de electrónica militar de gama alta: módulos de memoria, lectores RFID, procesadores Virtex, transmisores COFDM y memorias especiales de TerraGroup. No basta con un par de piezas: quieren suministro para rato, todo encontrado en incursión. Es una misión puramente de farmeo y crafteo endgame.",
    "objetivos": [
      "Encontrar en incursión 5× VPX Flash Storage Module.",
      "Encontrar en incursión 5× UHF RFID Reader.",
      "Encontrar en incursión 5× procesador programable Virtex.",
      "Encontrar en incursión 5× transmisor inalámbrico militar COFDM.",
      "Encontrar en incursión 4× Military flash drive.",
      "Entregar a Peacekeeper 5× VPX Flash Storage Module.",
      "Entregar a Peacekeeper 5× UHF RFID Reader.",
      "Entregar a Peacekeeper 5× procesador Virtex.",
      "Entregar a Peacekeeper 5× transmisor COFDM.",
      "Entregar a Peacekeeper 4× Military flash drive."
    ],
    "recompensas": [
      "+177 000 EXP.",
      "1× Weapon case.",
      "7× tarjeta de acceso TerraGroup Labs (TerraGroup Labs access keycard).",
      "4× módulo de visión térmica militar Iridium.",
      "Desbloquea un trueque por el contenedor T H I C C item case en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "trophies"
    ],
    "position": {
      "x": 3564,
      "y": 3796
    }
  },
  {
    "id": "cargo-x-part-4",
    "nombre": "35. Carga X – Parte 4 (Cargo X - Part 4)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "Los datos de Shoreline apuntan a que parte de la carga de TerraGroup fue desviada a la zona del cabo Dalniy, en Lighthouse. Peacekeeper quiere pruebas físicas de que ese envío llegó realmente a la costa: localizar el contenedor en la playa, marcarlo y salir con vida para confirmar su posición.",
    "objetivos": [
      "Localizar la carga de TerraGroup en Lighthouse (zona de la costa arenosa cerca del túnel colapsado).",
      "Marcar la carga de TerraGroup con un marcador MS2000 en Lighthouse.",
      "Sobrevivir y extraer de Lighthouse después de marcar la carga."
    ],
    "recompensas": [
      "+8 600 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "800 dólares (840 / 920 con Centro de inteligencia).",
      "Desbloquea la compra del casco Ops-Core FAST MT Super High Cut (Urban Tan) en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "cargo-x-part-3"
    ],
    "position": {
      "x": 4439,
      "y": 3422
    }
  },
  {
    "id": "insomnia",
    "nombre": "36. Insomnio (Insomnia)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": null,
    "descripcion": "Peacekeeper quiere que limpies a los PMCs que operan de noche: tus ‘colegas’ que salen sólo en oscuridad y están interfiriendo con sus reuniones y negocios. La misión consiste en farmear kills nocturnas durante una franja horaria concreta. Es requisito para el contenedor Kappa y está pensada claramente para late game.",
    "objetivos": [
      "Eliminar 25 operadores PMC entre las 21:00 y las 06:00 hora in-raid.",
      "No cuentan las bajas en Factory ni en The Lab (el resto de mapas sí). :contentReference[oaicite:1]{index=1}",
      "Sobrevivir y extraer de las incursiones en las que consigas los kills (si mueres, las bajas de esa raid no se suman)."
    ],
    "recompensas": [
      "+18 200 EXP. :contentReference[oaicite:2]{index=2}",
      "Reputación con Peacekeeper +0,01. :contentReference[oaicite:3]{index=3}",
      "1 000 dólares (1 050 con Centro de Inteligencia nivel 1, 1 150 con nivel 2). :contentReference[oaicite:4]{index=4}",
      "2× gafas de visión nocturna L3Harris GPNVG-18. :contentReference[oaicite:5]{index=5}",
      "1× casco Ops-Core FAST MT Super High Cut (Black).",
      "2× visores faciales balísticos multi-hit Ops-Core FAST.",
      "Desbloquea el trueque por placa balística SAPI nivel III+ en Peacekeeper LL4. :contentReference[oaicite:6]{index=6}"
    ],
    "youtube": "",
    "prereqIds": [
      "cargo-x-part-4"
    ],
    "position": {
      "x": 4674,
      "y": 3518
    }
  },
  {
    "id": "counteraction",
    "nombre": "37. Contramedidas (Counteraction)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 30,
    "descripcion": "Quest exclusiva para USEC donde Peacekeeper te pide ‘equilibrar’ la presencia de BEAR en Lighthouse. En la práctica es una cacería larga de BEARs en el mapa y entrega de sus chapas encontradas en incursión. No es requisito para Kappa, pero sí una misión muy de late game.",
    "objetivos": [
      "Eliminar 20 operadores PMC BEAR en Lighthouse. :contentReference[oaicite:8]{index=8}",
      "Reunir 20 chapas BEAR PMC encontradas en incursión (Found in Raid) en Lighthouse (pueden ser de esos mismos kills u otros, mientras sean BEAR y FiR). :contentReference[oaicite:9]{index=9}",
      "Entregar las 20 chapas BEAR a Peacekeeper.",
      "La misión sólo se puede aceptar siendo USEC; los BEAR no tienen acceso a esta quest. :contentReference[oaicite:10]{index=10}"
    ],
    "recompensas": [
      "+22 000 EXP. :contentReference[oaicite:11]{index=11}",
      "Reputación con Peacekeeper +0,03.",
      "2 300 dólares (2 415 con Centro de Inteligencia nivel 1, 2 645 con nivel 2). :contentReference[oaicite:12]{index=12}",
      "1× SSD drive.",
      "1× carpeta de Inteligencia (Intelligence folder).",
      "1× mapas topográficos (Topographic survey maps).",
      "Desbloquea la compra de la munición 23×75 mm Zvezda (flashbang) en Skier LL4. :contentReference[oaicite:13]{index=13}"
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-3"
    ],
    "position": {
      "x": 2895,
      "y": 3333
    }
  },
  {
    "id": "overpopulation",
    "nombre": "38. Superpoblación (Overpopulation)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 15,
    "descripcion": "Peacekeeper quiere recuperar material valioso de la antigua base USEC en la zona del chalet de Lighthouse (Cape Dalniy), pero ahora está infestada de Scavs. Tu trabajo es ‘vaciar’ el área para que sus hombres puedan trabajar tranquilos. Es una quest de eliminación focalizada alrededor del chalet.",
    "objetivos": [
      "Eliminar 12 Scavs alrededor de la zona del chalet en Lighthouse (área de la mansión/chalet de Cape Dalniy). :contentReference[oaicite:16]{index=16}",
      "Asegurarte de que las bajas cuentan dentro del área de misión (si sales demasiado de la zona, los kills no suman).",
      "Sobrevivir y extraer de las incursiones en las que consigas los kills."
    ],
    "recompensas": [
      "+12 000 EXP (valor actual en la tabla general de quests; algunas fuentes antiguas aún muestran 8 500). :contentReference[oaicite:17]{index=17}",
      "Reputación con Peacekeeper +0,02.",
      "1 100 dólares (1 155 con Centro de Inteligencia nivel 1, 1 265 con nivel 2). :contentReference[oaicite:18]{index=18}",
      "Desbloquea el trueque por el fusil DS Arms SA58 7.62×51 (variante AUT) en Peacekeeper LL2. :contentReference[oaicite:19]{index=19}"
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-1"
    ],
    "position": {
      "x": 2425,
      "y": 3518
    }
  },
  {
    "id": "trophies",
    "nombre": "39. Trofeos (Trophies)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 55,
    "descripcion": "Quest de final de progresión donde Peacekeeper te encarga eliminar grupos de PMCs muy experimentados. A efectos prácticos es una misión de farmeo de chapas de alto nivel (50+) tanto de BEAR como de USEC, todas con estado ‘Found in Raid’. No es necesaria para Kappa, pero desbloquea la quest ‘Special Equipment’.",
    "objetivos": [
      "Encontrar en incursión 20 chapas BEAR PMC de nivel 50 o superior. :contentReference[oaicite:22]{index=22}",
      "Encontrar en incursión 20 chapas USEC PMC de nivel 50 o superior.",
      "Entregar a Peacekeeper las 20 chapas BEAR y las 20 chapas USEC (todas con estado Found in Raid).",
      "Se desbloquea después de la quest de Jaeger «The Huntsman Path – Forest Cleaning». :contentReference[oaicite:23]{index=23}"
    ],
    "recompensas": [
      "+137 000 EXP. :contentReference[oaicite:24]{index=24}",
      "4× Contenedor de munición (Ammunition case).",
      "1× brazalete Armband (UNTAR).",
      "1× lanzagranadas FN40GL Mk2 de 40 mm.",
      "10× granadas 40×46 mm M433 (HEDP)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-huntsman-path-forest-cleaning"
    ],
    "position": {
      "x": 3322,
      "y": 3796
    }
  },
  {
    "id": "revision-streets-of-tarkov",
    "nombre": "40. Revisión – Streets of Tarkov (Revision – Streets of Tarkov)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 17,
    "descripcion": "Continuación de la cadena «Revision»: Peacekeeper quiere localizar y marcar vehículos blindados (LAV III y Stryker) que han quedado abandonados en las calles de Tarkov. Es una misión de marcaje con MS2000 en varios vehículos en Streets of Tarkov y una extracción con vida.",
    "objetivos": [
      "Localizar y marcar el primer LAV III con un MS2000 Marker en Streets of Tarkov. :contentReference[oaicite:26]{index=26}",
      "Localizar y marcar el Stryker con un MS2000 Marker en Streets of Tarkov.",
      "Localizar y marcar el segundo LAV III con un MS2000 Marker en Streets of Tarkov.",
      "Sobrevivir y extraer de Streets of Tarkov después de colocar los tres marcadores."
    ],
    "recompensas": [
      "+8 600 EXP.",
      "Reputación con Peacekeeper +0,02.",
      "450 dólares (472 con Centro de Inteligencia nivel 1, 518 con nivel 2). :contentReference[oaicite:27]{index=27}",
      "Desbloquea la compra del fusil FN SCAR-L 5.56×45 (FDE, variante CQC) en Peacekeeper LL2. :contentReference[oaicite:28]{index=28}",
      "Desbloquea también el casco Galvion Caiman Hybrid (Grey) en Peacekeeper LL2. :contentReference[oaicite:29]{index=29}"
    ],
    "youtube": "",
    "prereqIds": [
      "revision-reserve"
    ],
    "position": {
      "x": 2425,
      "y": 3604
    }
  },
  {
    "id": "road-closed",
    "nombre": "41. Carretera cortada (Road Closed)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 20,
    "descripcion": "Tras un gran tiroteo en la ciudad, un convoy con cargamento crítico ha sido emboscado en Streets of Tarkov. Peacekeeper quiere que verifiques que la carga sigue en su sitio y que localices la zona exacta de la emboscada. Es una misión sólo para USEC, centrada en exploración y reconocimiento cerca del concesionario LexOs.",
    "objetivos": [
      "Localizar el convoy de carga en Streets of Tarkov.",
      "Determinar el punto de emboscada en Streets of Tarkov.",
      "Sobrevivir y extraer de la incursión tras investigar la zona."
    ],
    "recompensas": [
      "+10 500 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "62 300 rublos (65 415 / 71 645 con Centro de inteligencia nivel 1 / 2).",
      "1× subfusil HK MP7A1 4.6x30.",
      "3× cargador HK MP7 4.6x30 de 20 balas.",
      "2× paquete de munición 4.6x30mm Action SX (40 balas cada uno)."
    ],
    "youtube": "",
    "prereqIds": [
      "spa-tour-part-7"
    ],
    "position": {
      "x": 3775,
      "y": 3604
    }
  },
  {
    "id": "worst-job-in-the-world",
    "nombre": "42. El peor trabajo del mundo (Worst Job in the World)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 25,
    "descripcion": "La ONU quiere resultados ‘medibles’ en la lucha contra saqueadores y criminales en Tarkov. Peacekeeper te encarga una tarea poco agradecida: demostrar superioridad de fuego a larga distancia eliminando enemigos muy lejos, usando sólo fusiles basados en plataforma AR-15 (M4A1, ADAR, TX-15, etc.).",
    "objetivos": [
      "Eliminar 30 enemigos (cualquier tipo: Scavs, Raiders, PMCs, jefes…) a más de 100 metros usando armas de plataforma AR-15."
    ],
    "recompensas": [
      "+15 400 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "Desbloquea trueque por el lanzagranadas bajo cañón M203 de 40 mm en Peacekeeper LL3.",
      "Desbloquea compra de la granada 40×46 mm M386 (HE) en Peacekeeper LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "revision-streets-of-tarkov",
      "wet-job-part-5"
    ],
    "position": {
      "x": 4933,
      "y": 3718
    }
  },
  {
    "id": "your-car-needs-a-service",
    "nombre": "43. Tu coche necesita mantenimiento (Your Car Needs a Service)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 35,
    "descripcion": "Una empresa estuvo lavando dinero a través del concesionario de coches LexOs en Streets of Tarkov. Peacekeeper quiere cualquier prueba digital de esas operaciones para usarla como palanca en futuras negociaciones. Te da la llave de la oficina del director, pero tendrás que encontrar tú mismo la forma de acceder a la sección cerrada del concesionario.",
    "objetivos": [
      "Obtener el dispositivo de almacenamiento digital (Secure Flash drive) de la oficina del director del concesionario en Streets of Tarkov.",
      "Entregar el dispositivo de almacenamiento digital a Peacekeeper."
    ],
    "recompensas": [
      "+31 400 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 000 dólares (1 050 / 1 150 con Centro de inteligencia nivel 1 / 2).",
      "Desbloquea el crafteo de munición 5.56x45mm M855A1 en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "cargo-x-part-4"
    ],
    "position": {
      "x": 4674,
      "y": 3422
    }
  },
  {
    "id": "one-less-loose-end",
    "nombre": "44. Un cabo suelto menos (One Less Loose End)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 15,
    "descripcion": "Quest de elección múltiple compartida con Terapeuta. Debes recuperar un diario de laboratorio de TerraGroup en Factory y decidir a quién dárselo. Si eliges a Peacekeeper (en vez de a Terapeuta, que ofrece «Una alternativa saludable»), deberás llevar el diario hasta un escondite en el aserradero viejo de Woods.",
    "objetivos": [
      "Localizar y obtener el diario de laboratorio (lab journal) en Factory.",
      "Ocultar el diario en el aserradero viejo de Woods, en la casa con transformadores.",
      "Completar la entrega sin morir en la incursión en la que escondes el diario."
    ],
    "recompensas": [
      "+15 000 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 200 dólares (1 260 / 1 380 con Centro de inteligencia nivel 1 / 2).",
      "1× pistola Magnum Research Desert Eagle Mk XIX .50 AE.",
      "3× cargador Desert Eagle .50 AE de 7 balas.",
      "28× munición .50 AE Copper Solid."
    ],
    "youtube": "",
    "prereqIds": [
      "overpopulation"
    ],
    "position": {
      "x": 2646,
      "y": 3518
    }
  },
  {
    "id": "new-day-new-paths",
    "nombre": "45. Nuevo día, nuevos caminos (New Day, New Paths)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 17,
    "descripcion": "Peacekeeper necesita una ruta segura por el centro de la ciudad para mover mercancía entre la sede de TerraGroup y el cine Rodina. Tus hombres han oído hablar de un antiguo ‘canal de Suez’ usado por USEC para conectar barrios aislados. Tu tarea es reconocer ese paso empezando en Ground Zero y enlazando con Streets of Tarkov mediante el nuevo sistema de tránsito.",
    "objetivos": [
      "Explorar la intersección de Mira Ave y el paso elevado en Ground Zero (en una misma incursión).",
      "Localizar el pasaje que lleva a Streets of Tarkov en Ground Zero (en esa misma incursión).",
      "Usar el tránsito de Ground Zero hacia Streets of Tarkov en esa misma incursión."
    ],
    "recompensas": [
      "+11 800 EXP.",
      "+0.02 reputación con Peacekeeper.",
      "900 dólares (945 / 1 035 con Centro de inteligencia nivel 1 / 2).",
      "1× Secure Flash drive.",
      "1× SAS drive.",
      "1× SSD drive."
    ],
    "youtube": "",
    "prereqIds": [
      "revision-streets-of-tarkov"
    ],
    "position": {
      "x": 2646,
      "y": 3705
    }
  },
  {
    "id": "seizing-the-initiative",
    "nombre": "46. Tomar la iniciativa (Seizing the Initiative)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 11,
    "descripcion": "Peacekeeper ha detectado que algunos operadores están usando un nuevo tránsito desde la terminal de Customs hacia la costa de Shoreline. Necesita confirmar qué está pasando allí y comprobar si ese paso puede servir para sus propios intereses. Tu trabajo es probar el tránsito y demostrar que puedes usarlo para llegar a la costa y extraer con vida.",
    "objetivos": [
      "Usar el tránsito desde Customs hacia Shoreline (bus del ‘Sniper Roadblock’).",
      "Sobrevivir y extraer de Shoreline en esa misma incursión."
    ],
    "recompensas": [
      "+6 300 EXP.",
      "+0.01 reputación con Peacekeeper.",
      "600 dólares (630 / 690 con Centro de inteligencia nivel 1 / 2).",
      "1× casco Galvion Caiman Hybrid (Grey)."
    ],
    "youtube": "",
    "prereqIds": [
      "humanitarian-supplies"
    ],
    "position": {
      "x": 2144,
      "y": 3518
    }
  },
  {
    "id": "confidential-info",
    "nombre": "47. Información confidencial (Confidential Info)",
    "trader": "Peacekeeper",
    "traderColor": "peacekeeper",
    "nivel": 15,
    "descripcion": "Tras tus incursiones en The Labyrinth, Peacekeeper quiere asegurarse de que cierta información de TerraGroup no acaba en manos equivocadas. Necesita que recuperes un módulo de almacenamiento especial del área del prototipo de arma y, de paso, que sabotees el taller de montaje plantando una granada. Es una misión de alto riesgo dentro de Labyrinth: entrar, recuperar el módulo, plantar el explosivo y salir vivo.",
    "objetivos": [
      "Localizar y obtener el módulo de almacenamiento especial dentro de The Labyrinth (zona del arma prototipo).",
      "Colocar una granada de fragmentación en el taller de montaje dentro de The Labyrinth.",
      "Entregar el módulo de información recuperado a Peacekeeper."
    ],
    "recompensas": [
      "+17 600 EXP.",
      "+0.03 reputación con Peacekeeper.",
      "1 600 dólares (1 680 / 1 840 con Centro de inteligencia nivel 1 / 2).",
      "1× VPX Flash Storage Module.",
      "2× SSD drive.",
      "2× SAS drive.",
      "1× póster «Final Moment»."
    ],
    "youtube": "",
    "prereqIds": [
      "offensive-reconnaissance"
    ],
    "position": {
      "x": 2646,
      "y": 3796
    }
  },
  {
    "id": "shortage",
    "nombre": "Escasez (Shortage)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 1,
    "descripcion": "Reúne botiquines Salewa para compensar la falta de material médico.",
    "objetivos": [
      "Encontrar 3 botiquines Salewa EN RAID.",
      "Entregar los 3 botiquines a Terapeuta."
    ],
    "recompensas": [
      "≈2.000 EXP.",
      "+0.03 reputación con Terapeuta.",
      "Rublos y consumibles médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=I25w3xEVihk",
    "prereqIds": [],
    "position": {
      "x": 160,
      "y": 704
    }
  },
  {
    "id": "sanitary-standards-1",
    "nombre": "Normas sanitarias – Parte 1",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 4,
    "descripcion": "Investiga la calidad del equipamiento de laboratorio encontrando un analizador de gas.",
    "objetivos": [
      "Encontrar 1 analizador de gas EN RAID.",
      "Entregar el analizador a Terapeuta."
    ],
    "recompensas": [
      "≈2.200 EXP.",
      "+0.03 reputación con Terapeuta.",
      "Rublos y botiquines."
    ],
    "youtube": "https://www.youtube.com/watch?v=YyuMPprq30I",
    "prereqIds": [
      "shortage"
    ],
    "position": {
      "x": 400,
      "y": 704
    }
  },
  {
    "id": "sanitary-standards-2",
    "nombre": "Normas sanitarias – Parte 2",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 8,
    "descripcion": "Terapeuta necesita más analizadores de gas para completar sus pruebas.",
    "objetivos": [
      "Encontrar 2 analizadores de gas EN RAID.",
      "Entregar los 2 analizadores a Terapeuta."
    ],
    "recompensas": [
      "EXP.",
      "+0.03 reputación con Terapeuta.",
      "Inyector Propital y rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=uuCT87cquOU",
    "prereqIds": [
      "sanitary-standards-1"
    ],
    "position": {
      "x": 620,
      "y": 705
    }
  },
  {
    "id": "painkiller",
    "nombre": "Analgésico (Painkiller)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 8,
    "descripcion": "Reúne morfinas para que Terapeuta las use como analgésicos.",
    "objetivos": [
      "Encontrar 4 inyectores de morfina EN RAID.",
      "Entregar las 4 morfinas a Terapeuta."
    ],
    "recompensas": [
      "≈3.900 EXP.",
      "+0.03 reputación con Terapeuta.",
      "Rublos y analgésicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=doz63fuXODM",
    "prereqIds": [
      "sanitary-standards-2"
    ],
    "position": {
      "x": 839,
      "y": 705
    }
  },
  {
    "id": "pharmacist",
    "nombre": "Farmacéutico (Pharmacist)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 10,
    "descripcion": "Recupera un maletín médico de los dormitorios de Customs.",
    "objetivos": [
      "Obtener el maletín con el dispositivo en Dorms 114 (Customs).",
      "Entregar el maletín a Terapeuta."
    ],
    "recompensas": [
      "≈5.600 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Llave y suministros médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=jGMqDnMcMhk",
    "prereqIds": [
      "painkiller"
    ],
    "position": {
      "x": 1056,
      "y": 705
    }
  },
  {
    "id": "operation-aquarius-1",
    "nombre": "Operación Acuario – Parte 1",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 6,
    "descripcion": "Localiza un alijo de agua potable escondido en Dorms de Customs.",
    "objetivos": [
      "Localizar el agua escondida en Dorms (hab. 206, edificio de 2 pisos).",
      "Sobrevivir y extraer de Customs."
    ],
    "recompensas": [
      "≈3.300 EXP.",
      "+0.03 reputación con Terapeuta.",
      "Botellas de agua y filtro."
    ],
    "youtube": "https://www.youtube.com/watch?v=byv53HHW9Tw",
    "prereqIds": [
      "shortage"
    ],
    "position": {
      "x": 400,
      "y": 784
    }
  },
  {
    "id": "operation-aquarius-2",
    "nombre": "Operación Acuario – Parte 2",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 6,
    "descripcion": "Vengar el negocio del agua eliminando scavs en Customs.",
    "objetivos": [
      "Eliminar 15 scavs en Customs."
    ],
    "recompensas": [
      "≈3.400 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Rublos y equipo médico."
    ],
    "youtube": "https://www.youtube.com/watch?v=kF7ek_eJuq0",
    "prereqIds": [
      "operation-aquarius-1"
    ],
    "position": {
      "x": 620,
      "y": 784
    }
  },
  {
    "id": "supply-plans",
    "nombre": "Planes de suministro (Supply Plans)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 13,
    "descripcion": "Encuentra una carpeta con planes de suministro en el aserradero de Woods.",
    "objetivos": [
      "Obtener la carpeta segura 0052 en la cabaña de Woods.",
      "Sobrevivir y extraer.",
      "Entregar la carpeta a Terapeuta."
    ],
    "recompensas": [
      "≈7.500 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Rublos y kit quirúrgico CMS."
    ],
    "youtube": "https://www.youtube.com/watch?v=ReyBNwisl7M",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1679,
      "y": 824
    }
  },
  {
    "id": "general-wares",
    "nombre": "Mercancías generales (General Wares)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 10,
    "descripcion": "Terapeuta quiere una reserva de comida enlatada (tushonka).",
    "objetivos": [
      "Encontrar 15 latas pequeñas de estofado de ternera EN RAID.",
      "Entregar las 15 latas a Terapeuta."
    ],
    "recompensas": [
      "EXP.",
      "+0.03–0.04 reputación con Terapeuta.",
      "Comida y rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=9Paz4g6sIV4",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1679,
      "y": 905
    }
  },
  {
    "id": "car-repair",
    "nombre": "Reparación de coche (Car Repair)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 13,
    "descripcion": "Reúne baterías de coche y bujías para poner vehículos en marcha.",
    "objetivos": [
      "Encontrar 4 baterías de coche EN RAID.",
      "Encontrar 8 bujías EN RAID.",
      "Entregar las 4 baterías y las 8 bujías."
    ],
    "recompensas": [
      "≈6.900 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Grizzly, inyectores y dólares."
    ],
    "youtube": "https://www.youtube.com/watch?v=jsrYsNOe6us",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1679,
      "y": 987
    }
  },
  {
    "id": "health-care-privacy-1",
    "nombre": "Privacidad sanitaria – Parte 1",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 20,
    "descripcion": "Marca ambulancias abandonadas en Shoreline para recuperar material médico.",
    "objetivos": [
      "Marcar 3 ambulancias con marcadores MS2000 en Shoreline.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "≈4.800 EXP.",
      "+0.03 reputación con Terapeuta.",
      "IFAK y rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=3zXZWRqQYd8",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1291,
      "y": 1116
    }
  },
  {
    "id": "health-care-privacy-2",
    "nombre": "Privacidad sanitaria – Parte 2",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 20,
    "descripcion": "Busca documentos de TerraGroup en el Resort de Shoreline.",
    "objetivos": [
      "Registrar la hab. 306 del Resort y obtener la información.",
      "Entregar la información a Terapeuta.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "≈5.900 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Rublos y vendajes."
    ],
    "youtube": "https://www.youtube.com/watch?v=3nmtEwPXwzc",
    "prereqIds": [
      "health-care-privacy-1"
    ],
    "position": {
      "x": 1496,
      "y": 1116
    }
  },
  {
    "id": "health-care-privacy-3",
    "nombre": "Privacidad sanitaria – Parte 3",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 20,
    "descripcion": "Investiga una furgoneta del director médico en Woods y toma una muestra de sangre.",
    "objetivos": [
      "Localizar la furgoneta del director médico en Woods.",
      "Tomar la muestra de sangre.",
      "Entregar la muestra a Terapeuta."
    ],
    "recompensas": [
      "≈7.200 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Rublos y botiquín."
    ],
    "youtube": "https://www.youtube.com/watch?v=yzEuUYCWm4c",
    "prereqIds": [
      "health-care-privacy-2"
    ],
    "position": {
      "x": 1701,
      "y": 1116
    }
  },
  {
    "id": "health-care-privacy-4",
    "nombre": "Privacidad sanitaria – Parte 4",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Demuestra buena condición física alcanzando un nivel concreto de la habilidad de Salud.",
    "objetivos": [
      "Alcanzar nivel 4 de la habilidad de Salud."
    ],
    "recompensas": [
      "≈6.000 EXP.",
      "+0.04 reputación con Terapeuta.",
      "2× Grizzly y solución salina."
    ],
    "youtube": "https://www.youtube.com/watch?v=D1MpryHxJwM",
    "prereqIds": [
      "health-care-privacy-3"
    ],
    "position": {
      "x": 1909,
      "y": 1116
    }
  },
  {
    "id": "health-care-privacy-5",
    "nombre": "Privacidad sanitaria – Parte 5",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 20,
    "descripcion": "Entrega pólvora Kite en un punto muerto de Factory durante raids nocturnas.",
    "objetivos": [
      "Encontrar 3 pólvoras \"Kite\" EN RAID.",
      "Ocultar las 3 Kite en el punto designado de Factory (noche).",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "≈7.300 EXP.",
      "+0.04 reputación con Terapeuta.",
      "1× Medicine case y rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=dZMgz3KR1A0",
    "prereqIds": [
      "health-care-privacy-4"
    ],
    "position": {
      "x": 2140,
      "y": 1135
    }
  },
  {
    "id": "health-care-privacy-6",
    "nombre": "Privacidad sanitaria – Parte 6",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 20,
    "descripcion": "Recoge otra muestra de sangre de un trabajador muerto en Factory.",
    "objetivos": [
      "Localizar el cadáver cerca de la carpa médica en Factory.",
      "Tomar la muestra de sangre.",
      "Entregar la muestra a Terapeuta."
    ],
    "recompensas": [
      "≈9.300 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Botiquín avanzado y consumibles."
    ],
    "youtube": "https://www.youtube.com/watch?v=_ZM9d_01hy0",
    "prereqIds": [
      "health-care-privacy-5"
    ],
    "position": {
      "x": 2380,
      "y": 1071
    }
  },
  {
    "id": "postman-pat-2",
    "nombre": "Cartero Pat – Parte 2",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 10,
    "descripcion": "Recibe de Terapeuta la carta sellada que obtuviste para Prapor y entrégasela a ella para su análisis.",
    "objetivos": [
      "Obtener la carta sellada de Prapor (Postman Pat – Parte 1).",
      "Entregar la carta sellada a Terapeuta."
    ],
    "recompensas": [
      "≈3.500 EXP.",
      "+0.02 reputación con Terapeuta.",
      "Rublos y desbloqueo de compra de Salewa."
    ],
    "youtube": "https://www.youtube.com/watch?v=rDDK3MyNJIU",
    "prereqIds": [
      "postman-pat-1"
    ],
    "position": {
      "x": 388,
      "y": 1116
    }
  },
  {
    "id": "out-of-curiosity",
    "nombre": "Por curiosidad (Out of Curiosity)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 27,
    "descripcion": "Tras investigar el camión químico en Customs, puedes entregar la información a Terapeuta.",
    "objetivos": [
      "Marcar el camión químico en Customs (de la cadena Chemical Part 4).",
      "Sobrevivir y extraer.",
      "Entregar la información a Terapeuta."
    ],
    "recompensas": [
      "≈7.700 EXP.",
      "+0.04 reputación con Terapeuta.",
      "≈170.000 rublos.",
      "1× Injector case."
    ],
    "youtube": "https://www.youtube.com/watch?v=gp5GRXcWXH4",
    "prereqIds": [
      "chemical-part-4"
    ],
    "position": {
      "x": 2127,
      "y": 1321
    }
  },
  {
    "id": "trust-regain",
    "nombre": "Recuperar la confianza (Trust Regain)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Entrega varias llaves valiosas para recuperar la confianza de Terapeuta si la traicionaste en la cadena química.",
    "objetivos": [
      "Entregar 1× llave Dorm room 303.",
      "Entregar 1× llave ZB-014.",
      "Entregar 1× Customs military checkpoint key.",
      "Entregar 1× llave Gas station storage room."
    ],
    "recompensas": [
      "+0.25 reputación con Terapeuta.",
      "Recuperas acceso completo a sus servicios."
    ],
    "youtube": "https://www.youtube.com/watch?v=wvzAfFJQILA",
    "prereqIds": [
      "out-of-curiosity"
    ],
    "position": {
      "x": 2372,
      "y": 1321
    }
  },
  {
    "id": "athlete",
    "nombre": "Atleta (Athlete)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 30,
    "descripcion": "Una de las misiones finales: exige nivel alto en la habilidad de Salud.",
    "objetivos": [
      "Alcanzar nivel 10 en la habilidad de Salud."
    ],
    "recompensas": [
      "≈21.900 EXP.",
      "+0.04 reputación con Terapeuta.",
      "Rublos y estimulantes ETG."
    ],
    "youtube": "https://www.youtube.com/watch?v=99V27IXswB0",
    "prereqIds": [
      "health-care-privacy-4"
    ],
    "position": {
      "x": 2140,
      "y": 986
    }
  },
  {
    "id": "decontamination-service",
    "nombre": "Servicio de descontaminación (Decontamination Service)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Limpia Customs eliminando scavs mientras llevas equipo de protección.",
    "objetivos": [
      "Entrar en Customs con el equipo de protección indicado.",
      "Eliminar el número requerido de scavs en Customs.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "Mucha EXP.",
      "Reputación con Terapeuta.",
      "Rublos y equipo."
    ],
    "youtube": "https://www.youtube.com/watch?v=p-V2Af5PgMY",
    "prereqIds": [
      "health-care-privacy-5"
    ],
    "position": {
      "x": 2380,
      "y": 1156
    }
  },
  {
    "id": "private-clinic",
    "nombre": "Clínica privada (Private Clinic)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 35,
    "descripcion": "Terapeuta quiere montar su propia clínica y necesita un LEDX y un oftalmoscopio EN RAID.",
    "objetivos": [
      "Encontrar 1× LEDX EN RAID.",
      "Encontrar 1× Oftalmoscopio EN RAID.",
      "Entregar ambos objetos a Terapeuta."
    ],
    "recompensas": [
      "≈30.600 EXP.",
      "+0.05 reputación con Terapeuta.",
      "≈130.000 rublos.",
      "1× T H I C C Item Case.",
      "1× llave Spa East Wing 306."
    ],
    "youtube": "https://www.youtube.com/watch?v=Rwc25GsrgJ8",
    "prereqIds": [
      "health-care-privacy-4"
    ],
    "position": {
      "x": 2140,
      "y": 1225
    }
  },
  {
    "id": "an-apple-a-day",
    "nombre": "Una manzana al día… (An Apple a Day Keeps the (Doctor Away))",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Otra misión de progreso: subir aún más la habilidad de Salud.",
    "objetivos": [
      "Alcanzar el nivel de habilidad de Salud requerido por la misión.",
      "Curarte, usar botiquines y cirugía para ganar experiencia de Salud."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Terapeuta.",
      "Rublos y consumibles."
    ],
    "youtube": "https://www.youtube.com/watch?v=J262SXDP1Xg",
    "prereqIds": [
      "health-care-privacy-4"
    ],
    "position": {
      "x": 2140,
      "y": 1066
    }
  },
  {
    "id": "colleagues-1",
    "nombre": "Colegas – Parte 1",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Un grupo de médicos de Terapeuta desapareció en Shoreline.",
    "objetivos": [
      "Localizar al primer grupo de colegas en el Resort.",
      "Localizar el segundo en el muelle.",
      "Localizar el tercero en Cottages.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Terapeuta.",
      "Rublos y suministros médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=9kpauKjwDj8",
    "prereqIds": [
      "general-wares"
    ],
    "position": {
      "x": 1912,
      "y": 905
    }
  },
  {
    "id": "colleagues-2",
    "nombre": "Colegas – Parte 2",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Recupera el kit de cirugía y el oftalmoscopio de Sanitar.",
    "objetivos": [
      "Obtener el kit de cirugía de Sanitar.",
      "Obtener el oftalmoscopio de Sanitar.",
      "Entregar ambos objetos a Terapeuta."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Terapeuta.",
      "Rublos y suministros de alto nivel."
    ],
    "youtube": "https://www.youtube.com/watch?v=BNyQCSuKUw0",
    "prereqIds": [
      "colleagues-1"
    ],
    "position": {
      "x": 2142,
      "y": 905
    }
  },
  {
    "id": "colleagues-3",
    "nombre": "Colegas – Parte 3",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Misión de elección: mantener vivo a Sanitar a cambio de tarjetas de Labs e inyectores.",
    "objetivos": [
      "No matar a Sanitar mientras la misión esté activa.",
      "Encontrar 10× tarjetas de Labs EN RAID.",
      "Encontrar 1× AHF1-M EN RAID.",
      "Encontrar 1× 3-(b-TG) EN RAID.",
      "Entregar tarjetas e inyectores a Terapeuta."
    ],
    "recompensas": [
      "Mucha EXP.",
      "Reputación con Terapeuta y Fence.",
      "Rublos, Medicine case y tarjeta negra de Labs."
    ],
    "youtube": "https://www.youtube.com/watch?v=xcRTB67APyg",
    "prereqIds": [
      "colleagues-2"
    ],
    "position": {
      "x": 2355,
      "y": 905
    }
  },
  {
    "id": "disease-history",
    "nombre": "Historia clínica (Disease History)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 15,
    "descripcion": "Terapeuta necesita historiales médicos del hospital de Reserve (White Bishop).",
    "objetivos": [
      "Obtener el historial médico n.º 1 en White Bishop.",
      "Obtener el historial médico n.º 2.",
      "Entregar ambos historiales."
    ],
    "recompensas": [
      "≈7.200 EXP.",
      "+0.03 reputación con Terapeuta.",
      "Rublos, Grizzly, Ibuprofeno y CALOK-B."
    ],
    "youtube": "https://www.youtube.com/watch?v=rL_Uxi8NLxA",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1438,
      "y": 705
    }
  },
  {
    "id": "crisis",
    "nombre": "Crisis (Crisis)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 48,
    "descripcion": "Una de las últimas misiones: gran lote de equipamiento médico de alta gama.",
    "objetivos": [
      "Encontrar 3× desfibrilador portátil EN RAID.",
      "Encontrar 3× oftalmoscopio EN RAID.",
      "Encontrar 2× LEDX EN RAID.",
      "Encontrar 20× Piles of meds EN RAID.",
      "Encontrar 10× vitaminas OLOLO EN RAID.",
      "Entregar todo a Terapeuta."
    ],
    "recompensas": [
      "Muchísima EXP.",
      "Gran subida de reputación.",
      "Muchos rublos y kits médicos top."
    ],
    "youtube": "https://www.youtube.com/watch?v=w9ppjtzr5PY&t=1526s",
    "prereqIds": [
      "private-clinic"
    ],
    "position": {
      "x": 2380,
      "y": 1232
    }
  },
  {
    "id": "seaside-vacation",
    "nombre": "Vacaciones en la costa (Seaside Vacation)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Un informador de Terapeuta desapareció en Lighthouse; encuentra su maletín.",
    "objetivos": [
      "Localizar el maletín del informador en la zona de costa de Lighthouse.",
      "Recoger el maletín EN RAID.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Terapeuta.",
      "Rublos y suministros."
    ],
    "youtube": "https://www.youtube.com/watch?v=vc0sm6pJlnk",
    "prereqIds": [
      "disease-history"
    ],
    "position": {
      "x": 1679,
      "y": 739
    }
  },
  {
    "id": "lost-contact",
    "nombre": "Contacto perdido (Lost Contact)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "descripcion": "Otro grupo de contacto ha dejado de responder en Lighthouse.",
    "objetivos": [
      "Investigar la zona de chalets de Lighthouse según marque la misión.",
      "Encontrar evidencias del grupo desaparecido.",
      "Sobrevivir y extraer."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Terapeuta.",
      "Rublos y objetos médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=Ix_MVHZCGp0",
    "prereqIds": [
      "seaside-vacation"
    ],
    "position": {
      "x": 1909,
      "y": 739
    }
  },
  {
    "id": "drug-trafficking",
    "nombre": "Tráfico de drogas\n(Drug Trafficking)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": null,
    "descripcion": "Localiza el laboratorio oculto de drogas en Lighthouse y coloca una cámara WI-FI para que Terapeuta pueda investigar la zona.",
    "objetivos": [
      "Localizar el laboratorio de drogas oculto en Lighthouse.",
      "Colocar una cámara WI-FI en el laboratorio.",
      "Sobrevivir y extraer de la incursión."
    ],
    "recompensas": [
      "+7.500 EXP aprox.",
      "+0.03 de reputación con Terapeuta",
      "≈45.000 rublos",
      "1× Propital",
      "1× ETG-change",
      "1× Zagustin"
    ],
    "youtube": "https://www.youtube.com/watch?v=yDbZy_9vWac",
    "prereqIds": [
      "lost-contact"
    ],
    "position": {
      "x": 2142,
      "y": 739
    }
  },
  {
    "id": "population-census",
    "nombre": "Censo de población\n(Population Census)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 12,
    "descripcion": "Encuentra el diario con el listado de residentes en las Rutas de Tarkov para que Terapeuta pueda estimar cuánta gente ha desaparecido.",
    "objetivos": [
      "Obtener el diario con los datos de los residentes en Streets of Tarkov.",
      "Entregar el diario a Terapeuta."
    ],
    "recompensas": [
      "+6.900 EXP aprox.",
      "+0.02 de reputación con Terapeuta",
      "≈35.000 rublos",
      "2× Botiquín Salewa",
      "2× Herramientas médicas"
    ],
    "youtube": "https://www.youtube.com/watch?v=8Nnq32OcY0Y",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1438,
      "y": 627
    }
  },
  {
    "id": "dangerous-road",
    "nombre": "Carretera peligrosa\n(Dangerous Road)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 15,
    "descripcion": "Acompaña a un conductor que evacúa gente de la ciudad y protégelo durante el trayecto usando la extracción de taxi de Primorsky.",
    "objetivos": [
      "Sobrevivir y extraer en Streets of Tarkov por la extracción \"Primorsky Ave Taxi V-Ex\"."
    ],
    "recompensas": [
      "+7.800 EXP aprox.",
      "+0.01 de reputación con Terapeuta",
      "≈45.000 rublos",
      "2× Férula de aluminio",
      "2× Aplicador hemostático CALOK-B"
    ],
    "youtube": "https://www.youtube.com/watch?v=PL1s4FjpX0E",
    "prereqIds": [
      "kind-of-sabotage",
      "supply-plans"
    ],
    "position": {
      "x": 1912,
      "y": 824
    }
  },
  {
    "id": "urban-medicine",
    "nombre": "Medicina urbana\n(Urban Medicine)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 17,
    "descripcion": "Localiza un laboratorio químico en Streets of Tarkov, recupera el contenedor con muestras de fármacos y entrégaselo a Terapeuta.",
    "objetivos": [
      "Localizar el laboratorio químico en Streets of Tarkov.",
      "Obtener el contenedor con las muestras de droga.",
      "Entregar el contenedor a Terapeuta."
    ],
    "recompensas": [
      "+10.200 EXP aprox.",
      "+0.02 de reputación con Terapeuta",
      "≈51.000 rublos",
      "2× Inyector de adrenalina",
      "1× Inyector hemostático Zagustin"
    ],
    "youtube": "https://www.youtube.com/watch?v=HiE2ncBFzW0",
    "prereqIds": [
      "population-census"
    ],
    "position": {
      "x": 1679,
      "y": 569
    }
  },
  {
    "id": "pets-wont-need-it-1",
    "nombre": "Las mascotas no lo necesitarán – Parte 1\n(Pets Won't Need It – Part 1)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 12,
    "descripcion": "Explora una clínica veterinaria y la consulta de un técnico de rayos X en Streets of Tarkov; Terapeuta espera encontrar fármacos aprovechables.",
    "objetivos": [
      "Localizar y reconocer la clínica veterinaria en Streets of Tarkov.",
      "Localizar y reconocer la sala del técnico de rayos X en Streets of Tarkov.",
      "Sobrevivir y extraer de la incursión."
    ],
    "recompensas": [
      "+8.100 EXP aprox.",
      "+0.01 de reputación con Terapeuta",
      "≈43.000 rublos",
      "4× Inyector de adrenalina",
      "2× Bolsa de sangre médica",
      "2× Botella de suero salino"
    ],
    "youtube": "https://www.youtube.com/watch?v=j7hPT8EFq3M",
    "prereqIds": [
      "population-census"
    ],
    "position": {
      "x": 1679,
      "y": 651
    }
  },
  {
    "id": "pets-wont-need-it-2",
    "nombre": "Las mascotas no lo necesitarán – Parte 2\n(Pets Won't Need It – Part 2)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": null,
    "descripcion": "Revisa tres farmacias distintas en Streets of Tarkov y sobrevive a la incursión para informar a Terapeuta del estado de las existencias.",
    "objetivos": [
      "Localizar la primera farmacia en Primorsky Ave (Streets of Tarkov).",
      "Localizar la segunda farmacia en Primorsky Ave (Streets of Tarkov).",
      "Localizar la tercera farmacia en el complejo Cardinal (Streets of Tarkov).",
      "Sobrevivir y extraer de la incursión."
    ],
    "recompensas": [
      "+9.000 EXP aprox.",
      "+0.02 de reputación con Terapeuta",
      "≈55.000 rublos",
      "4× Jeringa desechable",
      "4× Montón de medicinas",
      "2× Inyector de morfina",
      "2× Inyector L1 (Norepinephrine)"
    ],
    "youtube": "https://www.youtube.com/watch?v=lIaeVmuEWk8",
    "prereqIds": [
      "pets-wont-need-it-1"
    ],
    "position": {
      "x": 1909,
      "y": 651
    }
  },
  {
    "id": "ambulances-again",
    "nombre": "De nuevo las ambulancias\n(Ambulances Again)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 17,
    "descripcion": "Recupera el smartphone del paramédico de una ambulancia en Streets of Tarkov y extrae usando de nuevo el taxi de Primorsky.",
    "objetivos": [
      "Localizar y obtener el smartphone del paramédico en Streets of Tarkov.",
      "Extraer de Streets of Tarkov por la extracción \"Primorsky Ave Taxi V-Ex\".",
      "Entregar el smartphone a Terapeuta."
    ],
    "recompensas": [
      "+12.000 EXP aprox.",
      "+0.01 de reputación con Terapeuta",
      "≈100.000 rublos",
      "2× Botiquín Grizzly",
      "2× Kit quirúrgico Surv12",
      "Desbloquea trueque de Propital en Terapeuta LL2"
    ],
    "youtube": "https://www.youtube.com/watch?v=HDfvfMVu7cA",
    "prereqIds": [
      "urban-medicine"
    ],
    "position": {
      "x": 1909,
      "y": 569
    }
  },
  {
    "id": "first-in-line",
    "nombre": "El primero en la cola\n(First in Line)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 1,
    "descripcion": "Misión de historia: básicamente te presenta a Terapeuta y te pone al frente para recibir tratamiento y trabajos futuros.",
    "objetivos": [
      "Hablar con Terapeuta.",
      "Completar los pasos de introducción que indique el diálogo (según versión del juego)."
    ],
    "recompensas": [
      "EXP inicial.",
      "Pequeño aumento de reputación con Terapeuta.",
      "Suministros médicos básicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=CB4oTaqFL1w",
    "prereqIds": [],
    "position": {
      "x": 160,
      "y": 1097
    }
  },
  {
    "id": "quality-standard",
    "nombre": "Estándar de calidad\n(Quality Standard)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": 27,
    "descripcion": "Encuentra en The Lab una versión especial del LEDX Skin Transilluminator (versión USA) y entrégasela a Terapeuta.",
    "objetivos": [
      "Localizar y obtener el LEDX especial (US Version) en The Lab.",
      "Entregar el LEDX especial a Terapeuta."
    ],
    "recompensas": [
      "+42.000 EXP aprox.",
      "+0.02 de reputación con Terapeuta",
      "≈164.000 rublos",
      "5× Inyector Propital",
      "5× Inyector eTG-change"
    ],
    "youtube": "https://www.youtube.com/watch?v=G8w12UW2uy8",
    "prereqIds": [
      "the-good-times-1"
    ],
    "position": {
      "x": 1438,
      "y": 1277
    }
  },
  {
    "id": "thirsty-echo",
    "nombre": "Sediento – Eco\n(Thirsty – Echo)",
    "trader": "Terapeuta",
    "traderColor": "therapist",
    "nivel": null,
    "descripcion": "Investiga a un tal \"Thirsty\" en Shoreline, localiza su escondite, recoge la información y entrégasela a Terapeuta.",
    "objetivos": [
      "Localizar cualquier pista sobre Thirsty en Shoreline.",
      "Obtener la información en el escondite de Thirsty (diario u otros documentos).",
      "Entregar la información encontrada a Terapeuta."
    ],
    "recompensas": [
      "+11.200 EXP aprox.",
      "+0.03 de reputación con Terapeuta",
      "≈180.000 rublos",
      "4× Botella de agua Aquamari",
      "2× Inyector M.U.L.E."
    ],
    "youtube": "https://www.youtube.com/watch?v=9dQaETHsEx4",
    "prereqIds": [
      "thirsty-delivery"
    ],
    "position": {
      "x": 3104,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "burning-rubber",
    "nombre": "1. Caucho ardiendo (Burning Rubber)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 1,
    "descripcion": "Misión inicial de Skier en Ground Zero: probar la extracción de vehículo de pago.",
    "objetivos": [
      "Usar la extracción de vehículo de pago en Ground Zero."
    ],
    "recompensas": [
      "+1 900 EXP",
      "+0.01 reputación con Skier",
      "12 000 Rublos (aprox.)"
    ],
    "youtube": "https://www.youtube.com/watch?v=w0W1l_yOYOo",
    "prereqIds": [],
    "position": {
      "x": 160,
      "y": 1348
    }
  },
  {
    "id": "supplier",
    "nombre": "2. Proveedor (Supplier)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 5,
    "descripcion": "Skier quiere equipar a sus hombres con chalecos ligeros y escopetas económicas.",
    "objetivos": [
      "Encontrar EN RAID 1 chaleco antibalas BNTI Module-3M.",
      "Encontrar EN RAID 1 escopeta TOZ-106.",
      "Entregar ambos objetos a Skier."
    ],
    "recompensas": [
      "≈3 300 EXP",
      "+0.05 reputación con Skier",
      "Rublos y armas básicas (según versión)."
    ],
    "youtube": "https://www.youtube.com/watch?v=uiqCLqnAu44",
    "prereqIds": [
      "burning-rubber"
    ],
    "position": {
      "x": 388,
      "y": 1353
    }
  },
  {
    "id": "the-extortionist",
    "nombre": "3. El extorsionador (The Extortionist)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 7,
    "descripcion": "Recupera una carpeta con información valiosa que un mensajero escondió en Aduanas.",
    "objetivos": [
      "Localizar la Unknown key en el cadáver del mensajero en Customs.",
      "Abrir la cabaña cerrada en Customs con la Unknown key.",
      "Obtener la carpeta Secure Folder 0048.",
      "Entregar la carpeta a Skier."
    ],
    "recompensas": [
      "≈3 200 EXP",
      "+0.04 reputación con Skier",
      "Dólares y armas de calibre 7,62×39 (según versión)."
    ],
    "youtube": "https://www.youtube.com/watch?v=CmjJICNXx08",
    "prereqIds": [
      "supplier"
    ],
    "position": {
      "x": 603,
      "y": 1447
    }
  },
  {
    "id": "agitation",
    "nombre": "4. Agitación (Hustle)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 8,
    "descripcion": "Skier quiere que siembres el caos eliminando operadores PMC con pistolas.",
    "objetivos": [
      "Eliminar 3 operadores PMC usando CUALQUIER pistola."
    ],
    "recompensas": [
      "≈5 300 EXP",
      "+0.05 reputación con Skier",
      "-0.05 reputación con Prapor",
      "-0.02 reputación con Terapeuta",
      "Rublos y equipamiento adicional."
    ],
    "youtube": "https://www.youtube.com/watch?v=Gm2Cq7XSY3k",
    "prereqIds": [
      "the-extortionist"
    ],
    "position": {
      "x": 741,
      "y": 1648
    }
  },
  {
    "id": "whats-on-the-flash-drive",
    "nombre": "5. ¿Qué hay en la memoria USB? (What’s on the Flash Drive?)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 8,
    "descripcion": "Skier necesita información almacenada en memorias USB encriptadas.",
    "objetivos": [
      "Encontrar EN RAID 2 Secure Flash Drive.",
      "Entregar las 2 Secure Flash Drive a Skier."
    ],
    "recompensas": [
      "+4 500 EXP",
      "+0.04 reputación con Skier",
      "30 000 Rublos",
      "OP-SKS 7,62×39 con accesorios (según versión)."
    ],
    "youtube": "https://www.youtube.com/watch?v=YYcoLGjC_DU",
    "prereqIds": [
      "the-extortionist"
    ],
    "position": {
      "x": 821,
      "y": 1534
    }
  },
  {
    "id": "bling-bling",
    "nombre": "6. Bling-Bling (Golden Swag)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 8,
    "descripcion": "Encuentra el mechero Zibbo dorado en los dormitorios de Customs y escóndelo en la cabaña del aparcamiento de caravanas.",
    "objetivos": [
      "Encontrar el mechero Golden Zibbo en la habitación 303 del dormitorio de 3 plantas en Customs.",
      "Esconder el Golden Zibbo en la cabaña del aparcamiento de caravanas de Customs."
    ],
    "recompensas": [
      "+4 500 EXP",
      "+0.04 reputación con Skier",
      "17 000 Rublos",
      "STM-9 9×19 y cargadores (según versión)."
    ],
    "youtube": "https://www.youtube.com/watch?v=1ai7Uv27a-8",
    "prereqIds": [
      "whats-on-the-flash-drive"
    ],
    "position": {
      "x": 1023,
      "y": 1534
    }
  },
  {
    "id": "chemical-part-1",
    "nombre": "7. Química – Parte 1 (Chemical – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 10,
    "descripcion": "Skier quiere información sobre el antiguo subjefe de seguridad de Customs y pruebas relacionadas.",
    "objetivos": [
      "Obtener el Secure Folder 0013 en Customs.",
      "Entregar el Secure Folder 0013 a Skier.",
      "Obtener la llave Dorm room 220 (o similar) para ayudar en la investigación.",
      "Entregar la llave a Skier."
    ],
    "recompensas": [
      "+4 800 EXP",
      "+0.04 reputación con Skier",
      "15 000 Rublos (aprox.)."
    ],
    "youtube": "https://www.youtube.com/watch?v=2_01I1sfXsY",
    "prereqIds": [
      "bling-bling"
    ],
    "position": {
      "x": 1223,
      "y": 1534
    }
  },
  {
    "id": "chemical-part-2",
    "nombre": "8. Química – Parte 2 (Chemical – Part 2)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 10,
    "descripcion": "Localiza e identifica el vehículo de la furgoneta química en Customs.",
    "objetivos": [
      "Marcar la furgoneta química en Customs con una baliza.",
      "Sobrevivir y extraer tras colocar la baliza."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Skier.",
      "Rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=R3a32MxFwiU",
    "prereqIds": [
      "chemical-part-1"
    ],
    "position": {
      "x": 1420,
      "y": 1534
    }
  },
  {
    "id": "chemical-part-3",
    "nombre": "9. Química – Parte 3 (Chemical – Part 3)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 10,
    "descripcion": "Recupera la jeringa sospechosa en Factory para continuar la investigación química.",
    "objetivos": [
      "Encontrar la jeringa química en Factory.",
      "Entregar la jeringa a Skier."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Skier.",
      "Rublos y posibles objetos médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=V9QMlL6dPkg",
    "prereqIds": [
      "chemical-part-2"
    ],
    "position": {
      "x": 1618,
      "y": 1534
    }
  },
  {
    "id": "chemical-part-4",
    "nombre": "10. Química – Parte 4 (Chemical – Part 4)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 10,
    "descripcion": "Decide a quién entregar el camión con los químicos: esta elección afectará a varias cadenas de misiones.",
    "objetivos": [
      "Marcar el camión con químicos en Customs.",
      "Decidir a quién entregar la información (Prapor, Terapeuta o Skier)."
    ],
    "recompensas": [
      "EXP (según elección).",
      "Cambios de reputación con varios traders."
    ],
    "youtube": "https://www.youtube.com/watch?v=8nB1lhz5gTk",
    "prereqIds": [
      "chemical-part-3"
    ],
    "position": {
      "x": 1809,
      "y": 1534
    }
  },
  {
    "id": "loyalty-buyout",
    "nombre": "11. Recompra de lealtad (Loyalty Buyout)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 12,
    "descripcion": "Si elegiste a Prapor o Terapeuta en Química – Parte 4, Skier te pedirá una compensación económica para recuperar tu lealtad.",
    "objetivos": [
      "Entregar 1 000 000 de rublos a Skier."
    ],
    "recompensas": [
      "+0.25 reputación con Skier."
    ],
    "youtube": "https://www.youtube.com/watch?v=ZyNfaQ6bMNM",
    "prereqIds": [
      "out-of-curiosity"
    ],
    "position": {
      "x": 2372,
      "y": 1416
    }
  },
  {
    "id": "vitamins-part-1",
    "nombre": "12. “Vitaminas” – Parte 1 (Vitamins – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 22,
    "descripcion": "Recoge y entrega tres contenedores químicos procedentes de Shoreline e Interchange.",
    "objetivos": [
      "Obtener el primer contenedor químico.",
      "Entregar el primer contenedor químico a Skier.",
      "Obtener el segundo contenedor químico.",
      "Entregar el segundo contenedor químico a Skier.",
      "Obtener el tercer contenedor químico.",
      "Entregar el tercer contenedor químico a Skier."
    ],
    "recompensas": [
      "+8 400 EXP (aprox.).",
      "+0.04 reputación con Skier.",
      "Rublos y objetos médicos."
    ],
    "youtube": "https://www.youtube.com/watch?v=rJ87kTwiDuc",
    "prereqIds": [
      "chemical-part-4"
    ],
    "position": {
      "x": 2006,
      "y": 1534
    }
  },
  {
    "id": "vitamins-part-2",
    "nombre": "13. “Vitaminas” – Parte 2 (Vitamins – Part 2)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 22,
    "descripcion": "Entrega respiradores y bolsas de sangre médicas encontradas en incursión.",
    "objetivos": [
      "Encontrar EN RAID 4 Respirators.",
      "Entregar 4 Respirators a Skier.",
      "Encontrar EN RAID 3 Medical bloodsets.",
      "Entregar 3 Medical bloodsets a Skier."
    ],
    "recompensas": [
      "EXP.",
      "Reputación con Skier.",
      "Rublos."
    ],
    "youtube": "https://www.youtube.com/watch?v=0kP6pB8tN7U",
    "prereqIds": [
      "vitamins-part-1"
    ],
    "position": {
      "x": 2206,
      "y": 1534
    }
  },
  {
    "id": "friend-from-the-west-1",
    "nombre": "14. Amigo del Oeste – Parte 1 (Friend From the West – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 9,
    "descripcion": "Gana la confianza de Peacekeeper eliminando operadores USEC y entregando sus chapas.",
    "objetivos": [
      "Eliminar 7 operadores PMC USEC.",
      "Obtener 7 chapas de PMC USEC.",
      "Entregar 7 chapas de PMC USEC a Skier."
    ],
    "recompensas": [
      "+6 800 EXP (aprox.).",
      "+0.25 reputación con Skier.",
      "Desbloquea tareas de Peacekeeper."
    ],
    "youtube": "https://www.youtube.com/watch?v=i6oq89ydG_k",
    "prereqIds": [
      "supplier"
    ],
    "position": {
      "x": 603,
      "y": 1353
    }
  },
  {
    "id": "friend-from-the-west-2",
    "nombre": "15. Amigo del Oeste – Parte 2 (Friend From the West – Part 2)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 15,
    "descripcion": "Skier te pide una fuerte inversión en dólares para consolidar sus negocios con Peacekeeper.",
    "objetivos": [
      "Entregar 5 000 dólares a Skier."
    ],
    "recompensas": [
      "+10 000 EXP",
      "+0.05 reputación con Skier.",
      "Desbloquea más misiones de Skier y Peacekeeper."
    ],
    "youtube": "https://www.youtube.com/watch?v=wnnn6x4hKfc",
    "prereqIds": [
      "friend-from-the-west-1"
    ],
    "position": {
      "x": 873,
      "y": 1251
    }
  },
  {
    "id": "knowledge-is-power",
    "nombre": "16. El saber es poder (Knowledge is Power)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 24,
    "descripcion": "Instala cámaras Wi-Fi en Woods, Customs e Interchange para que Skier tenga mejor control de la zona.",
    "objetivos": [
      "Instalar una cámara Wi-Fi en el muelle del aserradero en Woods.",
      "Instalar una cámara Wi-Fi apuntando a la carretera hacia el puerto en Customs.",
      "Instalar una cámara Wi-Fi cubriendo la entrada de KIBA Arms en Interchange."
    ],
    "recompensas": [
      "+14 000 EXP",
      "+0.05 reputación con Skier.",
      "45 000 rublos (más con Centro de inteligencia).",
      "2× culata FAB Defense UAS para AK.",
      "4× adaptador roscado Warrior CNC 5,56×45 para AK.",
      "1× visor EOTech Vudu 1-6×24."
    ],
    "youtube": "",
    "prereqIds": [
      "friend-from-the-west-2"
    ],
    "position": {
      "x": 1329,
      "y": 2667
    }
  },
  {
    "id": "baiting",
    "nombre": "17. Cebo (Baiting)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 27,
    "descripcion": "Coloca collares dorados como pago a distintos grupos y elimina PMC en Interchange en horario nocturno.",
    "objetivos": [
      "Colocar 3 collares dorados en la tienda Generic de Interchange, junto al BTR.",
      "Colocar 3 collares dorados en la cocina del dormitorio de Customs.",
      "Colocar 3 collares dorados en la cabaña central del aserradero en Woods.",
      "Eliminar 5 PMC en Interchange entre las 22:00 y las 10:00."
    ],
    "recompensas": [
      "+19 100 EXP",
      "+0.05 reputación con Skier.",
      "Rublos (aprox. 65 000, más con Centro de inteligencia).",
      "1× reloj Roler Submariner de oro.",
      "2× moneda GP."
    ],
    "youtube": "",
    "prereqIds": [
      "knowledge-is-power"
    ],
    "position": {
      "x": 1549,
      "y": 2667
    }
  },
  {
    "id": "silent-caliber",
    "nombre": "18. Calibre silencioso (Silent Caliber)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 30,
    "descripcion": "Demuestra tu eficacia usando una escopeta de calibre 12 con silenciador contra scavs y PMC.",
    "objetivos": [
      "Eliminar 20 scavs con una escopeta de calibre 12 equipada con silenciador.",
      "Eliminar 10 PMC con una escopeta de calibre 12 equipada con silenciador."
    ],
    "recompensas": [
      "+18 000 EXP",
      "+0.05 reputación con Skier.",
      "100 000 rublos (más con Centro de inteligencia).",
      "1× escopeta MP-155 Ultima 12ga.",
      "Desbloquea fabricación de munición 12/70 Flechette en Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "baiting"
    ],
    "position": {
      "x": 1766,
      "y": 2667
    }
  },
  {
    "id": "bullshit",
    "nombre": "19. Chorradas (Bullshit)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 30,
    "descripcion": "Planta un pendrive falso y objetos valiosos en los dormitorios de Customs sin matar scavs durante la misión.",
    "objetivos": [
      "Obtener el pendrive falso del coche azul del puente principal de Customs.",
      "Ocultar el pendrive falso en la basura frente a las escaleras de la 3.ª planta de los dormitorios de Customs.",
      "Ocultar 1 SV-98 en la misma pila de basura.",
      "Ocultar 1 reloj de oro Roler Submariner en la misma pila de basura.",
      "No matar ningún scav en Customs mientras la misión esté activa."
    ],
    "recompensas": [
      "+29 900 EXP",
      "+0.07 reputación con Skier.",
      "+0.05 reputación con Fence.",
      "120 000 rublos (más con Centro de inteligencia).",
      "1 000 dólares (más con Centro de inteligencia).",
      "Desbloquea compra del CMMG Mk47 Mutant 7,62×39 en Skier LL4.",
      "Desbloquea trueque de munición 12/70 RIP (5 uds.) en Skier LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "silent-caliber"
    ],
    "position": {
      "x": 1986,
      "y": 2667
    }
  },
  {
    "id": "setup",
    "nombre": "20. Montaje (Set-up)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 18,
    "descripcion": "Vestido como un scav y armando con escopetas de la serie MP, elimina PMC en Customs para avivar el conflicto.",
    "objetivos": [
      "Eliminar 15 PMC en Customs llevando chaleco Scav, gorro ushanka y utilizando escopetas de la serie MP."
    ],
    "recompensas": [
      "+21 900 EXP",
      "+0.05 reputación con Skier.",
      "+0.05 reputación con Fence.",
      "150 000 rublos (más con Centro de inteligencia).",
      "1× fusil Kel-Tec RFB 7,62×51.",
      "4× paquete de munición 12/70 AP-20 (25 unidades)."
    ],
    "youtube": "",
    "prereqIds": [
      "bullshit"
    ],
    "position": {
      "x": 2206,
      "y": 2667
    }
  },
  {
    "id": "hardening",
    "nombre": "21. Endurecimiento (Hardening)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 35,
    "descripcion": "Misión de progreso: Skier quiere que refuerces tus nervios y aumentes tu Resistencia al estrés.",
    "objetivos": [
      "Alcanzar nivel 5 en la habilidad de Resistencia al estrés."
    ],
    "recompensas": [
      "+25 100 EXP aprox.",
      "+0.05 reputación con Skier.",
      "≈150 000 rublos (más con Centro de inteligencia).",
      "3× Vodka Tarkovskaya.",
      "5× botellas de cerveza.",
      "Desbloquea compra del Miller Bros. Blades M-2 Tactical Sword en Skier LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "baiting"
    ],
    "position": {
      "x": 1766,
      "y": 2437
    }
  },
  {
    "id": "lend-lease-1",
    "nombre": "22. Préstamo-arriendo – Parte 1 (Lend-Lease – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 25,
    "descripcion": "Skier necesita componentes electrónicos militares que se encuentran repartidos entre Woods y Shoreline.",
    "objetivos": [
      "Encontrar EN RAID 3× controladores de motor (Motor Controller) en Woods o Shoreline.",
      "Encontrar EN RAID 2× giroscopio de fibra óptica de un solo eje.",
      "Entregar los 3 controladores de motor a Skier.",
      "Entregar los 2 giroscopios a Skier."
    ],
    "recompensas": [
      "≈22 800 EXP.",
      "+0.06 reputación con Skier.",
      "+0.05 reputación con Peacekeeper.",
      "Lote de rublos/dólares (cantidad exacta según versión).",
      "Munición y equipo de gama media."
    ],
    "youtube": "https://www.youtube.com/watch?v=rev-HWOJFOE",
    "prereqIds": [
      "friend-from-the-west-2"
    ],
    "position": {
      "x": 1336,
      "y": 2572
    }
  },
  {
    "id": "kind-of-sabotage",
    "nombre": "23. Una especie de sabotaje (A Kind of Sabotage)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Después de ayudar a Terapeuta en Farmacéutico, Skier quiere que te ocupes de cierto \"sabotaje\" en Woods.",
    "objetivos": [
      "Localizar la carpeta segura n.º 0052 en la zona del aserradero de Woods.",
      "Recoger la carpeta EN RAID.",
      "Sobrevivir y extraer de la incursión.",
      "Entregar la carpeta 0052 a Skier."
    ],
    "recompensas": [
      "≈8 000 EXP.",
      "+0.05 reputación con Skier.",
      "Rublos (alrededor de 60 000, más con Centro de inteligencia).",
      "Objetos varios de valor medio (armas/adjuntos)."
    ],
    "youtube": "https://www.youtube.com/watch?v=_6_KcuSaXts",
    "prereqIds": [
      "pharmacist"
    ],
    "position": {
      "x": 1648,
      "y": 461
    }
  },
  {
    "id": "rigged-game",
    "nombre": "24. Partida amañada (Rigged Game)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 21,
    "descripcion": "Skier quiere hacer saltar por los aires varios puntos de intercambio en Interchange para enviar un mensaje.",
    "objetivos": [
      "Colocar un marcador MS2000 en el primer puesto de intercambio en Interchange.",
      "Colocar un marcador MS2000 en el segundo puesto de intercambio.",
      "Colocar un marcador MS2000 en el tercer puesto de intercambio.",
      "Sobrevivir y extraer de Interchange después de colocar los marcadores."
    ],
    "recompensas": [
      "≈9 000–10 000 EXP.",
      "+0.05 reputación con Skier.",
      "Rublos (pago en efectivo medio).",
      "Granadas y equipamiento explosivo/letal adicional."
    ],
    "youtube": "https://www.youtube.com/watch?v=kEbnn03K1xQ",
    "prereqIds": [
      "anesthesia"
    ],
    "position": {
      "x": 5107,
      "y": 4953.7779541015625
    }
  },
  {
    "id": "secure-corridor",
    "nombre": "25. Corredor seguro (Secure Corridor)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 15,
    "descripcion": "Misión posterior a la cadena química: Skier quiere que investigues y asegures un corredor seguro usado por TerraGroup y sus contactos.",
    "objetivos": [
      "Investigar las ubicaciones señaladas en Customs/Labs relacionadas con el corredor seguro.",
      "Localizar y asegurar los documentos/contratos del corredor.",
      "Ocultar los documentos en el punto muerto indicado.",
      "Sobrevivir y extraer de la incursión."
    ],
    "recompensas": [
      "EXP (misión de historia de nivel medio-alto).",
      "+0.05 reputación con Skier.",
      "Buen pago en rublos.",
      "Recompensa extra de equipo táctico.",
      "Progreso hacia misiones de Skier de rango alto."
    ],
    "youtube": "https://www.youtube.com/watch?v=PAKuKX7jdrY",
    "prereqIds": [
      "chemical-part-4",
      "out-of-curiosity",
      "big-customer"
    ],
    "position": {
      "x": 3257,
      "y": 1385
    }
  },
  {
    "id": "night-sweep",
    "nombre": "26. Barrido nocturno (Night Sweep)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 50,
    "descripcion": "Skier quiere que reúnas una colección de cuchillos de sectario encontrados en incursión.",
    "objetivos": [
      "Encontrar EN RAID 12 cuchillos de sectario (Cultist knife / unusual knife).",
      "Entregar los 12 cuchillos de sectario a Skier."
    ],
    "recompensas": [
      "+107 000 EXP.",
      "+2 niveles de habilidad Escopetas.",
      "6 000 dólares (6 300 / 6 900 con Centro de inteligencia).",
      "Desbloquea fabricación del inyector antídoto XTG-12 en Enfermería nivel 2."
    ],
    "youtube": "https://www.youtube.com/watch?v=u58Gw37PB2I",
    "prereqIds": [
      "rigged-game"
    ],
    "position": {
      "x": 5322,
      "y": 5043.555908203125
    }
  },
  {
    "id": "private-club",
    "nombre": "27. Club privado (Private Club)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier perdió su cartera durante una noche de copas y apuestas en su club privado. Toca ir a Customs a recuperarla.",
    "objetivos": [
      "Localizar y obtener la cartera de Skier en Customs.",
      "Entregar la cartera encontrada a Skier."
    ],
    "recompensas": [
      "+23 000 EXP.",
      "+0.02 reputación con Skier.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "3× auriculares Walker's XCEL 500BT Digital.",
      "Desbloquea trueque de la Saiga-12K 12/76 automática en Skier LL4."
    ],
    "youtube": "https://www.youtube.com/watch?v=X3s0ICKx76s",
    "prereqIds": [
      "baiting"
    ],
    "position": {
      "x": 1766,
      "y": 2588
    }
  },
  {
    "id": "long-road",
    "nombre": "28. Larga carretera (Long Road)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 20,
    "descripcion": "Skier necesita que despejes la carretera principal de Lighthouse para proteger sus rutas de transporte.",
    "objetivos": [
      "Eliminar scavs a lo largo de la carretera principal en Lighthouse (el número exacto puede variar según versión del juego)."
    ],
    "recompensas": [
      "+15 300 EXP.",
      "+0.02 reputación con Skier.",
      "45 000 rublos (47 250 / 51 750 con Centro de inteligencia).",
      "Desbloquea compra del fusil de precisión Lobaev Arms DVL-10 7,62×51 (variante Urbana) en Skier LL3."
    ],
    "youtube": "https://www.youtube.com/watch?v=t5dkMN74ln0",
    "prereqIds": [
      "friend-from-the-west-2"
    ],
    "position": {
      "x": 1323,
      "y": 2759
    }
  },
  {
    "id": "missing-cargo",
    "nombre": "29. Carga desaparecida (Missing Cargo)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 30,
    "descripcion": "Un helicóptero civil cargado con información valiosa fue derribado en Lighthouse; Skier quiere hacerse con el dossier del informador.",
    "objetivos": [
      "Localizar el helicóptero estrellado en Lighthouse.",
      "Encontrar la carpeta de inteligencia del informador.",
      "Entregar la carpeta de inteligencia a Skier."
    ],
    "recompensas": [
      "+14 000 EXP.",
      "+0.03 reputación con Skier.",
      "68 000 rublos.",
      "Desbloquea compra de culata AR-15 Magpul MOE Carbine (negra) en Skier LL3.",
      "Desbloquea compra de empuñadura de pistola Zenit RK-3 para AK en Skier LL3.",
      "Desbloquea compra de placa de culata Magpul MOE Carbine en Skier LL4."
    ],
    "youtube": "https://www.youtube.com/watch?v=wXesveiQs3Y",
    "prereqIds": [
      "long-road"
    ],
    "position": {
      "x": 1543,
      "y": 2759
    }
  },
  {
    "id": "top-secret",
    "nombre": "30. Alto secreto (Top Secret)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere información sobre entregas aéreas y rutas de vuelo; para ello necesitas recuperar un HDD militar en la estación radar de Lighthouse.",
    "objetivos": [
      "Localizar el despacho del comandante de la estación radar en Lighthouse.",
      "Obtener el disco duro militar con rutas de vuelo archivadas.",
      "Entregar el disco duro a Skier."
    ],
    "recompensas": [
      "+11 700 EXP.",
      "+0.03 reputación con Skier.",
      "50 000 rublos.",
      "1× fusil de asalto Rifle Dynamics RD-704 7,62×39.",
      "2× cargador de 30 balas para AK 7,62×39.",
      "60× cartuchos 7,62×39 mm MAI AP."
    ],
    "youtube": "https://www.youtube.com/watch?v=JT8LgP3LJT0",
    "prereqIds": [
      "missing-cargo"
    ],
    "position": {
      "x": 1760,
      "y": 2759
    }
  },
  {
    "id": "house-arrest-part-1",
    "nombre": "31. Arresto domiciliario – Parte 1 (House Arrest – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 33,
    "descripcion": "Skier quiere que investigues dónde estaba retenido el grupo desaparecido en las calles de Tarkov.",
    "objetivos": [
      "Localizar el lugar donde el grupo desaparecido estuvo retenido en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+28 800 EXP.",
      "+0.03 reputación con Skier.",
      "112 000 rublos (más con Centro de inteligencia).",
      "1× fusil Kel-Tec RFB 7,62×51."
    ],
    "youtube": "https://www.youtube.com/watch?v=UObtqp2iCTQ",
    "prereqIds": [
      "debtor"
    ],
    "position": {
      "x": 1983,
      "y": 2303.7778091430664
    }
  },
  {
    "id": "house-arrest-part-2",
    "nombre": "32. Arresto domiciliario – Parte 2 (House Arrest – Part 2)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 33,
    "descripcion": "Segunda parte de la investigación en Chekannaya 15: debes encontrar el apartamento del carcelero e investigar qué le ocurrió.",
    "objetivos": [
      "Localizar el apartamento improvisado del carcelero en Streets of Tarkov.",
      "Averiguar qué le ocurrió al carcelero.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+29 200 EXP.",
      "+0.03 reputación con Skier.",
      "114 000 rublos (más con Centro de inteligencia).",
      "1× subfusil TDI KRISS Vector Gen.2 9×19."
    ],
    "youtube": "https://www.youtube.com/watch?v=6SqoEBISw_8",
    "prereqIds": [
      "house-arrest-part-1"
    ],
    "position": {
      "x": 2197,
      "y": 2303.7778091430664
    }
  },
  {
    "id": "debtor",
    "nombre": "33. Deudor (Debtor)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 31,
    "descripcion": "Skier tiene un deudor que se esconde en el hotel Pinewood de Streets of Tarkov. Toca ir a buscarlo.",
    "objetivos": [
      "Encontrar al deudor en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+26 600 EXP.",
      "+0.03 reputación con Skier.",
      "250 000 rublos (más con Centro de inteligencia)."
    ],
    "youtube": "https://www.youtube.com/watch?v=kbzoygJisys",
    "prereqIds": [
      "chumming"
    ],
    "position": {
      "x": 1766,
      "y": 2303.7778091430664
    }
  },
  {
    "id": "walls-have-eyes",
    "nombre": "34. Las paredes tienen ojos (The Walls Have Eyes)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere que instales cámaras para vigilar las grúas de Factory. Hay que plantar varias cámaras Wi-Fi en las cabinas.",
    "objetivos": [
      "Instalar una cámara Wi-Fi en la cabina de la primera grúa en Factory.",
      "Instalar una cámara Wi-Fi en la cabina de la segunda grúa en Factory.",
      "Instalar una cámara Wi-Fi en la cabina de la tercera grúa en Factory."
    ],
    "recompensas": [
      "+7 200 EXP.",
      "+0.02 reputación con Skier.",
      "550 euros (más con Centro de inteligencia).",
      "1× subfusil TDI KRISS Vector Gen.2 .45 ACP.",
      "3× cargador Glock .45 ACP KRISS G30 MagEx de 30 balas.",
      "3× caja de munición .45 ACP Lasermatch FMJ (50 uds)."
    ],
    "youtube": "https://www.youtube.com/watch?v=QiQaysrENRk",
    "prereqIds": [
      "exit-here"
    ],
    "position": {
      "x": 4124,
      "y": 6817.778076171875
    }
  },
  {
    "id": "exit-here",
    "nombre": "35. Por aquí está la salida (Exit Here)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 12,
    "descripcion": "Skier quiere que demuestres que conoces bien Factory extrayendo por la salida principal del patio.",
    "objetivos": [
      "Sobrevivir y extraer de Factory a través de la salida principal (Courtyard Gate)."
    ],
    "recompensas": [
      "+5 500 EXP.",
      "+0.01 reputación con Skier.",
      "260 euros (más con Centro de inteligencia).",
      "3× ladrillo de TNT TP-200."
    ],
    "youtube": "https://www.youtube.com/watch?v=Z2wzLw1dEUA",
    "prereqIds": [
      "scout"
    ],
    "position": {
      "x": 3903,
      "y": 6817.778076171875
    }
  },
  {
    "id": "beyond-red-meat-part-1",
    "nombre": "36. Más allá de la carne roja – Parte 1 (Beyond the Red Meat – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 22,
    "descripcion": "Skier quiere que investigues el restaurante Beluga en Streets of Tarkov y consigas el diario del chef con sus secretos culinarios.",
    "objetivos": [
      "Localizar el restaurante Beluga en Streets of Tarkov.",
      "Encontrar EN RAID el diario del chef (Chef's diary) con los secretos culinarios.",
      "Entregar los datos encontrados a Skier."
    ],
    "recompensas": [
      "+18 400 EXP.",
      "+0.02 reputación con Skier.",
      "80 000 rublos (84 120 / 92 920 con Centro de inteligencia).",
      "2× carabina SAG AK-545 5,45×39.",
      "4× cargador AK-74 5,45×39 6L23 de 30 balas (negro).",
      "6× paquete de 30 cartuchos 5,45×39 mm BT gs.",
      "Desbloquea compra del asa de carga AK CSS estriada en Skier LL3."
    ],
    "youtube": "https://www.youtube.com/watch?v=GB0ZE3z2Bdw",
    "prereqIds": [
      "vitamins-part-2"
    ],
    "position": {
      "x": 3742,
      "y": 2393.7778091430664
    }
  },
  {
    "id": "beyond-red-meat-part-2",
    "nombre": "37. Más allá de la carne roja – Parte 2 (Beyond the Red Meat – Part 2)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 22,
    "descripcion": "Siguiendo la pista del diario del chef, Skier quiere que encuentres el aditivo químico secreto que usaba TerraGroup en sus oficinas de Streets of Tarkov.",
    "objetivos": [
      "Localizar las oficinas de TerraGroup en Streets of Tarkov.",
      "Encontrar EN RAID el componente químico secreto (vial rojo).",
      "Entregar el aditivo químico a Skier."
    ],
    "recompensas": [
      "+21 300 EXP.",
      "+0.03 reputación con Skier.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "1× fusil de asalto SIG MCX .300 Blackout.",
      "3× cargador STANAG de 30 balas para AR-15 5,56×45.",
      "3× paquete de 50 cartuchos .300 Blackout CBJ.",
      "Desbloquea compra del grip táctico Zenit RK-1 en montura B-25U en Skier LL4."
    ],
    "youtube": "https://www.youtube.com/watch?v=authZNaJERE",
    "prereqIds": [
      "beyond-red-meat-part-1"
    ],
    "position": {
      "x": 3977,
      "y": 2393.7778091430664
    }
  },
  {
    "id": "pyramid-scheme",
    "nombre": "38. Sistema piramidal (Pyramid Scheme)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 28,
    "descripcion": "Skier quiere que revises todos los cajeros de Unity Credit Bank repartidos por Streets of Tarkov para comprobar cuáles siguen intactos.",
    "objetivos": [
      "Localizar los cajeros automáticos de Unity Credit Bank repartidos por Nizhnaya Sadovaya Street, Razvedchikov Street, Klimov Street y Primorsky Ave en Streets of Tarkov (15 ATMs en total).",
      "Acercarte lo suficiente a cada cajero para registrar su posición."
    ],
    "recompensas": [
      "+25 500 EXP.",
      "+0.03 reputación con Skier.",
      "600 000 rublos (630 000 / 690 000 con Centro de inteligencia)."
    ],
    "youtube": "https://www.youtube.com/watch?v=XT1xnqUUA2M",
    "prereqIds": [
      "vitamins-part-2"
    ],
    "position": {
      "x": 3747,
      "y": 2303.7778091430664
    }
  },
  {
    "id": "stop-chipping",
    "nombre": "39. Deja de mangar (Stop Chipping)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Los contrabandistas aliados de Skier abandonaron su base en Shoreline y ahora los scavs la están saqueando. Tienes que limpiar la zona para darles una lección.",
    "objetivos": [
      "Localizar la base de los contrabandistas en Shoreline (al noreste del balneario).",
      "Eliminar 25 enemigos en la base y sus alrededores."
    ],
    "recompensas": [
      "+26 000 EXP.",
      "280 000 rublos.",
      "+0.04 reputación con Skier.",
      "1× bombona de propano de 5L.",
      "1× batería de coche.",
      "1× tubo de silicona.",
      "1× limpiador alcalino para intercambiadores de calor.",
      "1× lata de café Majaica."
    ],
    "youtube": "",
    "prereqIds": [
      "baiting"
    ],
    "position": {
      "x": 1766,
      "y": 2513
    }
  },
  {
    "id": "irresistible",
    "nombre": "40. Irresistible (Irresistible)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 35,
    "descripcion": "Skier ha oído hablar de una remesa especial de escopetas de película perdida cerca del centro comercial Ultra en Interchange; necesita que recuperes la maleta de armas robada.",
    "objetivos": [
      "Localizar el contenedor rojo con la maleta de armas perdida en el aparcamiento del suroeste de Interchange (requiere activar la corriente y usar la tarjeta 21WS).",
      "Obtener EN RAID la maleta de armas robada.",
      "Entregar la maleta de armas a Skier."
    ],
    "recompensas": [
      "+32 000 EXP.",
      "+0.02 reputación con Skier.",
      "80 000 rublos (84 000 / 92 000 con Centro de inteligencia).",
      "Desbloquea compra del fusil automático MPS Auto Assault-12 Gen 1 calibre 12 en Skier LL4."
    ],
    "youtube": "https://www.youtube.com/watch?v=63JcoXvDvas",
    "prereqIds": [
      "hardening"
    ],
    "position": {
      "x": 1986,
      "y": 2437
    }
  },
  {
    "id": "dangerous-accessories",
    "nombre": "41. Accesorios peligrosos (Dangerous Accessories)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere demostrar que el fusil automático MPS Auto Assault-12 no es solo un 'atrezzo de película', sino un arma realmente letal.",
    "objetivos": [
      "Eliminar 20 objetivos usando un fusil automático MPS Auto Assault-12 (Gen 1 o Gen 2)."
    ],
    "recompensas": [
      "+39 900 EXP.",
      "+0.03 reputación con Skier.",
      "130 000 rublos (136 500 / 149 500 con Centro de inteligencia).",
      "Desbloquea el trueque del fusil automático MPS Auto Assault-12 Gen 2 calibre 12 en Skier LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "irresistible"
    ],
    "position": {
      "x": 2206,
      "y": 2437
    }
  },
  {
    "id": "northern-connections",
    "nombre": "42. Conexiones del Norte (Northern Connections)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere crear la leyenda de un francotirador 'del norte' que use sus armas, eliminando operadores a larga distancia con un fusil de cerrojo y visor nocturno o térmico.",
    "objetivos": [
      "Eliminar 50 operadores de PMC a más de 40 metros con un fusil de precisión de cerrojo equipado con visor nocturno o térmico."
    ],
    "recompensas": [
      "+21 000 EXP.",
      "+0.03 reputación con Skier.",
      "1× fusil de precisión de cerrojo Sako TRG M10 .338 LM.",
      "2× cargadores de 8 balas .338 LM para Sako TRG M10.",
      "1× caja de munición .338 Lapua Magnum FMJ (20 balas).",
      "Desbloquea la compra del Sako TRG M10 .338 LM en Skier LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "silent-caliber",
      "hunting-trip"
    ],
    "position": {
      "x": 2727,
      "y": 4430
    }
  },
  {
    "id": "the-bigger-they-are",
    "nombre": "43. Cuanto más grandes son… (The Bigger They Are)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere que elimines a unos operadores que se están metiendo en sus negocios en la zona de Priozersk (Woods).",
    "objetivos": [
      "Eliminar 2 operadores de PMC en Woods en una sola incursión."
    ],
    "recompensas": [
      "+8 000 EXP.",
      "+0.02 reputación con Skier.",
      "550 euros (más con Centro de inteligencia).",
      "1× caja de munición (Ammunition case)."
    ],
    "youtube": "",
    "prereqIds": [
      "quick-payback",
      "inevitable-reaction"
    ],
    "position": {
      "x": 1074,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "easy-money-part-1",
    "nombre": "44. Dinero fácil – Parte 1 (Easy Money – Part 1)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 10,
    "descripcion": "Primera parte de la cadena para desbloquear al comerciante Ref: hay que publicitar la Arena colocando un póster en la base de scavs de Customs.",
    "objetivos": [
      "Colocar el póster 'Bison vs Undertaker' en los dormitorios de la base de scavs en Customs."
    ],
    "recompensas": [
      "+4 500 EXP.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia).",
      "Desbloquea al comerciante Ref."
    ],
    "youtube": "https://www.youtube.com/watch?v=Z5TXUMIpOEE",
    "prereqIds": [
      "burning-rubber"
    ],
    "position": {
      "x": 388,
      "y": 1251
    }
  },
  {
    "id": "a-moment-of-glory",
    "nombre": "45. Un momento de gloria (A Moment of Glory)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier ha oído hablar de una edición especial de una revista de videojuegos sobre Tarkov en el centro comercial ULTRA de Interchange, y quiere que se la consigas.",
    "objetivos": [
      "Localizar y obtener la edición especial de la revista de videojuegos en Interchange (centro comercial ULTRA).",
      "Entregar la revista de videojuegos a Skier."
    ],
    "recompensas": [
      "+40 000 EXP.",
      "+0.02 reputación con Skier.",
      "1 600 euros (1 680 / 1 840 con Centro de inteligencia).",
      "2× supresor AWC Thor PSR XL multi-calibre.",
      "2× freno de boca AWC PSR 7,62×51 mm.",
      "2× supresor SIG Sauer SRD 7,62×51."
    ],
    "youtube": "https://www.youtube.com/watch?v=umIbVsaHl9U",
    "prereqIds": [
      "the-good-old-days-part-2"
    ],
    "position": {
      "x": 3964,
      "y": 2492.7778091430664
    }
  },
  {
    "id": "serious-allegations",
    "nombre": "46. Graves acusaciones (Serious Allegations)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier necesita un disco duro con información comprometedora almacenado en una vieja casa en Shoreline.",
    "objetivos": [
      "Localizar y obtener el disco duro en la casa vieja del pueblo pantanoso de Shoreline.",
      "Entregar el disco duro encontrado a Skier."
    ],
    "recompensas": [
      "+36 000 EXP.",
      "+0.02 reputación con Skier.",
      "1 500 euros (1 575 / 1 725 con Centro de inteligencia).",
      "1× monocular de visión nocturna L3Harris AN/PVS-14.",
      "1× montura AN/PVS-14 Norotos Dual Dovetail.",
      "1× montura Norotos Titanium Advanced Tactical Mount."
    ],
    "youtube": "https://www.youtube.com/watch?v=G90CrbidYhg",
    "prereqIds": [],
    "position": {
      "x": 1336,
      "y": 2167
    }
  },
  {
    "id": "proper-comeback",
    "nombre": "47. De vuelta en fuerza (Back in Force / Proper Comeback)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere marcar de forma discreta las cámaras Wi-Fi que Prapor ha colocado en varios mapas, usando figuras de gallo dorado.",
    "objetivos": [
      "Esconder una figura de gallo dorado en la cámara Wi-Fi de Prapor en Woods.",
      "Esconder una figura de gallo dorado en la cámara Wi-Fi de Prapor en Shoreline.",
      "Esconder una figura de gallo dorado en la cámara Wi-Fi de Prapor en Factory."
    ],
    "recompensas": [
      "+78 000 EXP.",
      "+0.02 reputación con Skier.",
      "1 900 euros (1 995 / 2 185 con Centro de inteligencia).",
      "2× huevo dorado.",
      "2× consola de juego portátil Tetriz."
    ],
    "youtube": "https://www.youtube.com/watch?v=TFp9MMJpBME",
    "prereqIds": [],
    "position": {
      "x": 2388,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "thirsty-breadwinner",
    "nombre": "48. Sediento – Gana-pan (Thirsty – Breadwinner)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Inicio de la cadena \"Sediento\": Skier quiere comprobar si puedes conseguir y manejar reservas de combustible.",
    "objetivos": [
      "Encontrar EN RAID 2 bombonas de propano de 5L.",
      "Entregar las 2 bombonas de propano de 5L a Skier."
    ],
    "recompensas": [
      "+9 600 EXP.",
      "+0.01 reputación con Skier.",
      "200 euros (210 / 230 con Centro de inteligencia).",
      "1× bidón de combustible expedicionario."
    ],
    "youtube": "https://www.youtube.com/watch?v=gRI2GZI5sEc",
    "prereqIds": [
      "proper-comeback"
    ],
    "position": {
      "x": 2618,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "thirsty-delivery",
    "nombre": "49. Sediento – Entrega (Thirsty – Delivery)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Segunda parte de la cadena \"Sediento\": Skier te devuelve las bombonas de propano para que las escondas en puntos clave de Woods y Customs.",
    "objetivos": [
      "Localizar el punto de escondite especificado en Woods (búnker scav con torre de radio).",
      "Localizar el punto de escondite especificado en Customs (tiendecita del cruce).",
      "Esconder la primera bombona de propano de 5L en Woods.",
      "Esconder la segunda bombona de propano de 5L en Customs."
    ],
    "recompensas": [
      "+14 200 EXP.",
      "+0.03 reputación con Skier.",
      "56 000 rublos (58 800 / 64 400 con Centro de inteligencia).",
      "4× tableta de chocolate Alyonka."
    ],
    "youtube": "https://www.youtube.com/watch?v=9dQaETHsEx4",
    "prereqIds": [
      "thirsty-breadwinner"
    ],
    "position": {
      "x": 2832,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "bypass",
    "nombre": "50. Desvío (Bypass / Route Deviation)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere saber por dónde se desvía el BTR en las Rues de Tarkov. Debes marcar todas sus paradas con balizas MS2000.",
    "objetivos": [
      "Marcar la parada del BTR en la grúa derrumbada en Streets of Tarkov con una baliza MS2000.",
      "Marcar la parada del BTR en el antiguo puesto de control scav en Streets of Tarkov con una baliza MS2000.",
      "Marcar la parada del BTR en el hotel Pinewood en Streets of Tarkov con una baliza MS2000.",
      "Marcar la parada del BTR en el centro de la ciudad en Streets of Tarkov con una baliza MS2000.",
      "Marcar la parada del BTR en el tranvía en Streets of Tarkov con una baliza MS2000.",
      "Marcar la parada del BTR en el cine Rodina en Streets of Tarkov con una baliza MS2000."
    ],
    "recompensas": [
      "+17 900 EXP.",
      "+0.02 reputación con Skier.",
      "1 100 euros.",
      "1× fusil de asalto Desert Tech MDR 5,56×45.",
      "3× cargador AR-15 Magpul PMAG 40 GEN M3 STANAG de 40 cartuchos 5,56×45.",
      "3× cajas de munición 5,56×45 mm M855A1 (50 cartuchos)."
    ],
    "youtube": "https://www.youtube.com/watch?v=PAKuKX7jdrY",
    "prereqIds": [
      "the-bigger-they-are"
    ],
    "position": {
      "x": 1293,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "20-20-retrospective",
    "nombre": "51. Retrospectiva 20/20 (20/20 Retrospective)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere usar un nuevo punto de almacenamiento bajo la montaña en Woods para dejar cajas de munición perforante rusa para sus chicos.",
    "objetivos": [
      "Localizar el búnker bajo la montaña en Woods.",
      "Depositar la primera caja de munición perforante rusa en el búnker.",
      "Depositar la segunda caja de munición perforante rusa en el búnker.",
      "Depositar la tercera caja de munición perforante rusa en el búnker."
    ],
    "recompensas": [
      "+21 800 EXP.",
      "+0.02 reputación con Skier.",
      "1 600 euros (1 680 / 1 840 con Centro de inteligencia).",
      "2× cascos antibruit electrónicos Peltor ComTac VI (Coyote Brown)."
    ],
    "youtube": "https://www.youtube.com/watch?v=cfMy9FaeYBg",
    "prereqIds": [
      "bypass"
    ],
    "position": {
      "x": 1514,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "key-partner",
    "nombre": "52. Socio clave (Key Partner)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "El conductor del BTR anda buscando nuevo empleador y Skier quiere que le recuerdes a Peacekeeper quién es su socio principal, vendiéndole mercancía.",
    "objetivos": [
      "Vender cualquier 75 objetos a Peacekeeper (la munición no cuenta)."
    ],
    "recompensas": [
      "+14 600 EXP.",
      "+0.02 reputación con Skier.",
      "900 euros (945 / 1 035 con Centro de inteligencia).",
      "2× carpeta de inteligencia."
    ],
    "youtube": "https://www.youtube.com/watch?v=2B2eJntZykM",
    "prereqIds": [
      "20-20-retrospective"
    ],
    "position": {
      "x": 1734,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "shock-argument",
    "nombre": "53. Argumento contundente (Shock Argument)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier ha hecho un trato para conseguir munición de RPG para reventar el BTR del conductor y necesita que recojas el paquete en la casa de los scavs del bosque.",
    "objetivos": [
      "Localizar y obtener el paquete con munición de RPG en la casa de los scavs de Woods.",
      "Entregar el paquete a Skier."
    ],
    "recompensas": [
      "+22 500 EXP.",
      "+0.02 reputación con Skier.",
      "1 800 euros (1 890 / 2 070 con Centro de inteligencia).",
      "1× fusil de asalto SIG MCX SPEAR 6,8×51 mm.",
      "80× 6,8×51 mm SIG FMJ.",
      "3× cargador Lancer L7AWM 7,62×51 de 20 balas para AR-10."
    ],
    "youtube": "https://www.youtube.com/watch?v=PhQAMFE-31M",
    "prereqIds": [
      "key-partner"
    ],
    "position": {
      "x": 1954,
      "y": 1936.7778091430664
    }
  },
  {
    "id": "choosing-the-right-friends",
    "nombre": "54. Elegir bien a los amigos (Choosing the Right Friends)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Tras un sabotaje fallido, Skier se ha quedado sin hombres ni munición y quiere que revientes la red de rutas del conductor usando los nuevos tránsitos entre mapas.",
    "objetivos": [
      "Usar el tránsito de Customs a Reserve.",
      "Usar el tránsito de Reserve a Woods.",
      "Usar el tránsito de Woods a Lighthouse.",
      "Sobrevivir y extraer de Lighthouse.",
      "Eliminar 5 operadores PMC mientras completas los otros objetivos."
    ],
    "recompensas": [
      "+85 200 EXP.",
      "+0.02 reputación con Skier.",
      "5 000 euros (5 250 / 5 750 con Centro de inteligencia).",
      "1× maletín T H I C C para armas de hombro.",
      "Desbloquea el logro All-wheel drive."
    ],
    "youtube": "https://www.youtube.com/watch?v=NCkg7HKOYsw",
    "prereqIds": [
      "discombobulate"
    ],
    "position": {
      "x": 2851,
      "y": 8478.666748046875
    }
  },
  {
    "id": "unquestionable-authority",
    "nombre": "55. Autoridad incuestionable (Unquestionable Authority)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": null,
    "descripcion": "Skier quiere que demuestres quién manda eliminando al llamado 'Minotauro' (la Sombra de Tagilla) y a parte de sus guardias en el Laberinto.",
    "objetivos": [
      "Eliminar a la Sombra de Tagilla en el Laberinto (Labyrinth).",
      "Eliminar 6 de sus guardias en el Laberinto."
    ],
    "recompensas": [
      "+25 500 EXP.",
      "+0.03 reputación con Skier.",
      "3 000 euros (3 150 / 3 450 con Centro de inteligencia).",
      "8× caja de munición 7,62×39 mm MAI AP (20 balas).",
      "8× caja de munición 7,62×39 mm BP gzh (20 balas).",
      "1× póster decorativo \"Tark Souls\"."
    ],
    "youtube": "https://www.youtube.com/watch?v=KR4gIinuv7A",
    "prereqIds": [
      "offensive-reconnaissance"
    ],
    "position": {
      "x": 1074,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "profitable-venture",
    "nombre": "56. Proyecto rentable (Profitable Venture)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier te propone un negocio extremadamente rentable a cambio de una colección de visores térmicos de alto valor.",
    "objetivos": [
      "Entregar 15 miras térmicas Trijicon REAP-IR."
    ],
    "recompensas": [
      "+1 nivel de habilidad Resistencia al estrés.",
      "+1 nivel de habilidad Percepción.",
      "+1 nivel de habilidad Atención.",
      "+1 nivel de habilidad Entrenamiento del objetivo (Aim Drills).",
      "+1 nivel de habilidad Movimiento sigiloso (Covert Movement)."
    ],
    "youtube": "",
    "prereqIds": [
      "unquestionable-authority"
    ],
    "position": {
      "x": 1297,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "safety-guarantee",
    "nombre": "57. Garantía de seguridad (Safety Guarantee)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier quiere demostrar a sus socios que puede proporcionar protección de primera línea, reuniendo un lote de armaduras y cascos pesados.",
    "objetivos": [
      "Entregar 15 chalecos antibalas BNTI Zhuk (EMR).",
      "Entregar 12 cascos antibalas Vulkan-5 LShZ-5.",
      "Entregar 3 visores faciales Maska-1SCh (edición Killa)."
    ],
    "recompensas": [
      "+1 nivel de habilidad Chalecos ligeros (Light Vests).",
      "+1 nivel de habilidad Chalecos pesados (Heavy Vests).",
      "+1 nivel de habilidad Mantenimiento de armas.",
      "+1 nivel de habilidad Solución de problemas (Troubleshooting)."
    ],
    "youtube": "",
    "prereqIds": [
      "profitable-venture"
    ],
    "position": {
      "x": 1517,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "never-too-late-to-learn",
    "nombre": "58. Nunca es tarde para aprender (Never Too Late To Learn)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier quiere comprobar si eres capaz de dominar armamento moderno y logística de munición y equipo especial.",
    "objetivos": [
      "Entregar 15 fusiles de asalto HK 416A5 5,56×45.",
      "Entregar 4 500 balas 5,56×45 mm MK 318 Mod 0 (SOST).",
      "Entregar 8 machetes de supervivencia UVSR Taiga-1."
    ],
    "recompensas": [
      "+1 nivel de habilidad Solución de problemas (Troubleshooting).",
      "+1 nivel de habilidad Carga de cargadores (Mag Drills).",
      "+1 nivel de habilidad Fabricación (Crafting).",
      "+1 nivel de habilidad Gestión del escondite (Hideout Management)."
    ],
    "youtube": "",
    "prereqIds": [
      "safety-guarantee"
    ],
    "position": {
      "x": 1737,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "get-a-foothold",
    "nombre": "59. Asentando posiciones (Get a Foothold)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Para consolidar su posición en Tarkov, Skier necesita una enorme reserva de estimulantes de combate y regenerativos.",
    "objetivos": [
      "Entregar 30 inyectores estimulantes SJ6 TGLabs.",
      "Entregar 30 cócteles inyectables Obdolbos 2.",
      "Entregar 30 inyectores regenerativos Propital.",
      "Entregar 30 inyectores estimulantes M.U.L.E.",
      "Entregar 30 inyectores regenerativos ETG-change.",
      "Entregar 30 inyectores de combate SJ9 TGLabs.",
      "Entregar 30 inyectores de combate SJ12 TGLabs."
    ],
    "recompensas": [
      "+1 nivel de habilidad Resistencia al estrés.",
      "+1 nivel de habilidad Vitalidad.",
      "+1 nivel de habilidad Cirugía.",
      "+1 nivel de habilidad Salud.",
      "+1 nivel de habilidad Inmunidad."
    ],
    "youtube": "",
    "prereqIds": [
      "never-too-late-to-learn"
    ],
    "position": {
      "x": 1957,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "profit-retention",
    "nombre": "60. Retención de beneficios (Profit Retention)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier quiere asegurarse de que sus beneficios sigan creciendo incluso en medio del caos, acumulando hardware de alto valor y criptomonedas.",
    "objetivos": [
      "Entregar 30 tarjetas gráficas (Graphics card).",
      "Entregar 15 Bitcoin físicos (Physical Bitcoin)."
    ],
    "recompensas": [
      "+1 nivel de habilidad Fabricación (Crafting).",
      "+1 nivel de habilidad Gestión del escondite (Hideout Management).",
      "+1 nivel de habilidad Percepción.",
      "+1 nivel de habilidad Atención.",
      "+1 nivel de habilidad Búsqueda (Search)."
    ],
    "youtube": "",
    "prereqIds": [
      "get-a-foothold"
    ],
    "position": {
      "x": 2177,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "a-life-lesson",
    "nombre": "61. Lección de vida (A Life Lesson)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier quiere ahogar las penas y te pide que le traigas una gran cantidad de alcohol selecto para poder \"pensar un nuevo plan\".",
    "objetivos": [
      "Entregar 8 Botellas de vodka Tarkovskaya.",
      "Entregar 15 Botellas de whisky Dan Jackiel.",
      "Entregar 15 Botellas de aguardiente Fierce Hatchling (moonshine)."
    ],
    "recompensas": [
      "+1 nivel de habilidad Resistencia (Endurance).",
      "+1 nivel de habilidad Fuerza (Strength).",
      "+1 nivel de habilidad Metabolismo (Metabolism).",
      "+1 nivel de habilidad Carisma (Charisma).",
      "+1 nivel de habilidad Intelecto (Intellect)."
    ],
    "youtube": "",
    "prereqIds": [
      "profit-retention"
    ],
    "position": {
      "x": 2398,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "consolation-prize",
    "nombre": "62. Premio de consolación (Consolation Prize)",
    "trader": "Skier",
    "traderColor": "skier",
    "nivel": 61,
    "descripcion": "Skier quiere recuperar algo del desastre financiero en el que os habéis metido. Para ello, necesita que limpies El Laboratorio una y otra vez, eliminando Raiders y sobreviviendo a las incursiones.",
    "objetivos": [
      "Sobrevivir y extraer de The Lab 15 veces.",
      "Eliminar 100 Raiders en The Lab."
    ],
    "recompensas": [
      "+1 nivel de habilidad Entrenamiento del objetivo (Aim Drills).",
      "+1 nivel de habilidad Fusiles de asalto (Assault Rifles).",
      "+1 nivel de habilidad Francotirador (Sniping).",
      "+1 nivel de habilidad Mantenimiento de armas (Weapon Maintenance).",
      "+1 nivel de habilidad Solución de problemas (Troubleshooting).",
      "+1 nivel de habilidad Fusiles de tirador designado (DMRs).",
      "+1 nivel de habilidad Ametralladoras pesadas (Heavy Machine Guns).",
      "+1 nivel de habilidad Ametralladoras ligeras (Light Machine Guns).",
      "+1 nivel de habilidad Cuerpo a cuerpo (Melee).",
      "+1 nivel de habilidad Pistolas.",
      "+1 nivel de habilidad Revólveres.",
      "+1 nivel de habilidad Lanzagranadas (Grenade Launchers).",
      "+1 nivel de habilidad Escopetas (Shotguns).",
      "+1 nivel de habilidad Subfusiles (Submachine Guns).",
      "+1 nivel de habilidad Armas arrojadizas (Throwables).",
      "+1 nivel de habilidad Lanzagranadas bajo cañón (Underbarrel Launchers).",
      "Desbloquea el logro \"All on Red\".",
      "+1 misión operativa semanal con recompensa de punto de habilidad."
    ],
    "youtube": "",
    "prereqIds": [
      "a-life-lesson"
    ],
    "position": {
      "x": 2618,
      "y": 1818.7778091430664
    }
  },
  {
    "id": "only-business",
    "nombre": "1. Solo negocios (Only Business)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 15,
    "descripcion": "Primera misión de Ragman: subir trato con él hasta nivel de lealtad 2.",
    "objetivos": [
      "Alcanzar el nivel de lealtad 2 con Ragman."
    ],
    "recompensas": [
      "+6 700 EXP",
      "+0.02 reputación con Ragman.",
      "10 000 rublos (más con Centro de inteligencia).",
      "1× chaleco BlackHawk! Commando chest harness (Desert Tan)."
    ],
    "youtube": "https://www.youtube.com/watch?v=CmilLNRlV2A",
    "prereqIds": [],
    "position": {
      "x": 439,
      "y": 7903
    }
  },
  {
    "id": "make-ultra-great-again",
    "nombre": "2. Make ULTRA Great Again",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Limpia Interchange eliminando Scavs para que Ragman pueda mandar a sus chicos al centro comercial.",
    "objetivos": [
      "Eliminar 25 Scavs en Interchange."
    ],
    "recompensas": [
      "+9 800 EXP",
      "+0.02 reputación con Ragman.",
      "+0.01 reputación con Jaeger.",
      "25 000 rublos (más con Centro de inteligencia).",
      "3× chaleco WARTECH TV-109 + TV-106 (A-TACS FG)."
    ],
    "youtube": "https://www.youtube.com/watch?v=vbntmwPEp9U",
    "prereqIds": [
      "only-business"
    ],
    "position": {
      "x": 697,
      "y": 7864
    }
  },
  {
    "id": "big-sale",
    "nombre": "3. Gran rebajas (Big Sale)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Revisa las tiendas de ropa de marca en Interchange y extrae con vida.",
    "objetivos": [
      "Localizar y comprobar la tienda AVOKADO en Interchange.",
      "Localizar y comprobar la tienda KOSTIN en Interchange.",
      "Localizar y comprobar la tienda tRend en Interchange.",
      "Localizar y comprobar la tienda DINO CLOTHES en Interchange.",
      "Localizar y comprobar la tienda TOP BRAND en Interchange.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+8 200 EXP",
      "+0.03 reputación con Ragman.",
      "30 000 rublos (más con Centro de inteligencia).",
      "1× mochila Oakley Mechanism heavy duty (Black)."
    ],
    "youtube": "https://www.youtube.com/watch?v=oncEvI7WdgA",
    "prereqIds": [
      "only-business"
    ],
    "position": {
      "x": 697,
      "y": 7971
    }
  },
  {
    "id": "blood-of-war-1",
    "nombre": "4. La sangre de la guerra – Parte 1 (The Blood of War – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Marca cisternas de combustible para Ragman; quiere controlar el movimiento de carburante por la zona.",
    "objetivos": [
      "Marcar las cisternas de combustible indicadas con balizas de señal.",
      "Sobrevivir y extraer de las incursiones donde coloques las balizas."
    ],
    "recompensas": [
      "+7 500 EXP",
      "+0.02 reputación con Ragman.",
      "60 000 rublos (más con Centro de inteligencia).",
      "2× depósito de combustible metálico.",
      "Desbloquea una receta de craft relacionada con combustible en el escondite."
    ],
    "youtube": "https://www.youtube.com/watch?v=dZawndma1AI",
    "prereqIds": [
      "make-ultra-great-again",
      "big-sale"
    ],
    "position": {
      "x": 998,
      "y": 7335.778076171875
    }
  },
  {
    "id": "blood-of-war-2",
    "nombre": "5. La sangre de la guerra – Parte 2 (The Blood of War – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 23,
    "descripcion": "Reúne acondicionadores de combustible nuevos para clientes de Ragman.",
    "objetivos": [
      "Encontrar 4 Fuel conditioner en incursión (en estado \"Encontrado en incursión\").",
      "Entregar 4 Fuel conditioner a Ragman."
    ],
    "recompensas": [
      "+14 600 EXP",
      "+0.03 reputación con Ragman.",
      "20 000 rublos (más con Centro de inteligencia).",
      "1× casco HighCom Striker ACHHC IIIA (Black).",
      "1× chaleco NPP KlASS Korund-VM (Black).",
      "Desbloquea un craft de chaleco Ars Arma A18 Skanda en el Escondite."
    ],
    "youtube": "https://www.youtube.com/watch?v=Pg5i1YIztSc",
    "prereqIds": [
      "blood-of-war-1"
    ],
    "position": {
      "x": 1257,
      "y": 7436.778076171875
    }
  },
  {
    "id": "blood-of-war-3",
    "nombre": "6. La sangre de la guerra – Parte 3 (The Blood of War – Part 3)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 30,
    "descripcion": "Tercera parte de la cadena de combustible: Ragman quiere que localices y marques varios escondites de combustible en Woods.",
    "objetivos": [
      "Localizar y marcar el primer escondite de combustible con un MS2000 Marker en Woods.",
      "Localizar y marcar el segundo escondite de combustible con un MS2000 Marker en Woods.",
      "Localizar y marcar el tercer escondite de combustible con un MS2000 Marker en Woods.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+21 300 EXP.",
      "+0.04 reputación con Ragman.",
      "75 000 rublos (78 750 / 86 250 con Centro de inteligencia).",
      "1× mochila Mystery Ranch Blackjack 50 (MultiCam).",
      "Desbloquea el trueque del chaleco HighCom Trooper TFO (MultiCam) en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "blood-of-war-2"
    ],
    "position": {
      "x": 1497,
      "y": 7436.778076171875
    }
  },
  {
    "id": "dressed-to-kill",
    "nombre": "7. Vestido para matar (Dressed to Kill)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Ragman quiere sombreros llamativos para sus clientes: ushankas y sombreros tipo vaquero.",
    "objetivos": [
      "Encontrar en incursión 2 sombreros Kinda Cowboy.",
      "Encontrar en incursión 2 gorros Ushanka (Ushanka ear-flap caps).",
      "Entregar 2 gorros Ushanka a Ragman.",
      "Entregar 2 sombreros Kinda Cowboy a Ragman."
    ],
    "recompensas": [
      "+8 400 EXP.",
      "+0.03 reputación con Ragman.",
      "21 000 rublos (22 050 / 24 150 con Centro de inteligencia).",
      "1× chaleco antibalas BNTI Gzhel-K.",
      "1× filtro de potencia militar (Military power filter)."
    ],
    "youtube": "",
    "prereqIds": [
      "blood-of-war-1"
    ],
    "position": {
      "x": 1257,
      "y": 7553.778076171875
    }
  },
  {
    "id": "gratitude",
    "nombre": "8. Gratitud (Gratitude)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Ragman quiere dejar un ‘regalo’ en el embarcadero del aserradero de Woods: varias prendas y gafas concretas.",
    "objetivos": [
      "Esconder 1 pasamontañas Ghost (Ghost balaclava) en los muelles del aserradero de Woods.",
      "Esconder 1 Shemagh verde en los muelles del aserradero de Woods.",
      "Esconder 1 gafas RayBench Hipster Reserve en los muelles del aserradero de Woods.",
      "Esconder 1 gafas de montura redonda (Round frame sunglasses) en los muelles del aserradero de Woods."
    ],
    "recompensas": [
      "+14 400 EXP.",
      "+0.03 reputación con Ragman.",
      "120 000 rublos (126 000 / 138 000 con Centro de inteligencia).",
      "2× sombrero de ala Stich Profi Chimera (boonie).",
      "2× sombrero Jack Pyke Hunting LLCS (boonie).",
      "2× sombrero Door Kicker (boonie).",
      "2× sombrero MIL-TEC (boonie)."
    ],
    "youtube": "",
    "prereqIds": [
      "dressed-to-kill",
      "database-part-2"
    ],
    "position": {
      "x": 1497,
      "y": 7553.778076171875
    }
  },
  {
    "id": "sales-night",
    "nombre": "9. Noche de rebajas (Sales Night)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 30,
    "descripcion": "Ragman quiere que compruebes la situación en Interchange, sobreviviendo y extrayendo varias veces del centro comercial ULTRA.",
    "objetivos": [
      "Sobrevivir y extraer de Interchange 7 veces (estado de extracción \"Superviviente\")."
    ],
    "recompensas": [
      "+17 500 EXP.",
      "+0.03 reputación con Ragman.",
      "35 000 rublos (36 750 / 40 250 con Centro de inteligencia).",
      "2× mochila SSO Attack 2 (Khaki).",
      "Desbloquea la compra del casco HighCom Striker ULACH IIIA (Desert Tan) en Ragman LL4.",
      "Desbloquea el trueque de la placa balística Granit Br4 en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gratitude"
    ],
    "position": {
      "x": 1743,
      "y": 7553.778076171875
    }
  },
  {
    "id": "hot-delivery",
    "nombre": "10. Entrega caliente (Hot Delivery)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 29,
    "descripcion": "Ragman quiere que equipes y escondas equipo de protección y cascos en puntos concretos de Interchange para sus clientes.",
    "objetivos": [
      "Esconder 2 auriculares ComTac II en el lugar indicado en Interchange.",
      "Esconder 2 cascos 6B47 (Olive Drab) en el lugar indicado en Interchange.",
      "Esconder 2 armaduras BNTI Gzhel-K en el lugar indicado en Interchange."
    ],
    "recompensas": [
      "+20 300 EXP.",
      "+0.04 reputación con Ragman.",
      "55 000 rublos (57 750 / 63 250 con Centro de inteligencia).",
      "1× armadura IOTV Gen4 (Full Protection Kit, MultiCam).",
      "Desbloquea el trueque de la armadura IOTV Gen4 (Full Protection Kit, MultiCam) en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "gratitude"
    ],
    "position": {
      "x": 1743,
      "y": 7645.778076171875
    }
  },
  {
    "id": "database-part-1",
    "nombre": "11. Base de datos – Parte 1 (Database – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 17,
    "descripcion": "Ragman quiere acceder a los manifiestos de carga de los grandes supermercados del ULTRA (Interchange) para saber qué se movía por allí.",
    "objetivos": [
      "Obtener EN RAID el manifiesto de carga de Goshan en Interchange.",
      "Entregar el manifiesto de carga de Goshan a Ragman.",
      "Obtener EN RAID el manifiesto de carga de OLI en Interchange.",
      "Entregar el manifiesto de carga de OLI a Ragman.",
      "Obtener EN RAID el manifiesto de carga de IDEA en Interchange.",
      "Entregar el manifiesto de carga de IDEA a Ragman."
    ],
    "recompensas": [
      "+8 400 EXP.",
      "+0.03 reputación con Ragman.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "1× auriculares activos MSA Sordin Supreme PRO-X/L.",
      "1× gafas RayBench Aviator.",
      "2× paquete de cigarrillos Malboro.",
      "Desbloquea el trueque del chaleco antibalas NFM THOR Concealable Reinforced en Ragman LL2."
    ],
    "youtube": "https://www.youtube.com/watch?v=m88fhcQOYP4",
    "prereqIds": [
      "make-ultra-great-again",
      "big-sale"
    ],
    "position": {
      "x": 998,
      "y": 7761
    }
  },
  {
    "id": "database-part-2",
    "nombre": "12. Base de datos – Parte 2 (Database – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 17,
    "descripcion": "Segunda parte de la investigación de manifiestos: esta vez Ragman quiere la ruta de carga de OLI desde la oficina de logística.",
    "objetivos": [
      "Obtener EN RAID los documentos de ruta de carga de OLI (OLI cargo route documents) en Interchange.",
      "Entregar los documentos de ruta de carga de OLI a Ragman."
    ],
    "recompensas": [
      "+8 500 EXP.",
      "+0.03 reputación con Ragman.",
      "1× batería de coche.",
      "1× relé de control de fase.",
      "Desbloquea el trueque del chaleco portaplacas 6B3TM-01 (Khaki) en Ragman LL2."
    ],
    "youtube": "https://www.youtube.com/watch?v=ppFZkPPlJWs",
    "prereqIds": [
      "database-part-1"
    ],
    "position": {
      "x": 1270,
      "y": 7761
    }
  },
  {
    "id": "minibus",
    "nombre": "13. Microbús (Minibus)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 24,
    "descripcion": "Ragman necesita localizar varios microbuses amarillos alrededor del ULTRA para organizar sus rutas de reparto.",
    "objetivos": [
      "Localizar y marcar el primer microbús amarillo con un marcador MS2000 en Interchange.",
      "Localizar y marcar el segundo microbús amarillo con un marcador MS2000 en Interchange.",
      "Localizar y marcar el tercer microbús amarillo con un marcador MS2000 en Interchange.",
      "Sobrevivir y extraer de Interchange tras colocar los marcadores."
    ],
    "recompensas": [
      "+13 800 EXP.",
      "+0.03 reputación con Ragman.",
      "50 000 rublos (52 500 / 57 500 con Centro de inteligencia).",
      "1× mochila Beta 2.",
      "Desbloquea acceso a trueques/crafts relacionados con el portaplacas Strandhogg y la armadura OTV."
    ],
    "youtube": "https://www.youtube.com/watch?v=45eWfyLnQCY",
    "prereqIds": [
      "database-part-2"
    ],
    "position": {
      "x": 1510,
      "y": 7911
    }
  },
  {
    "id": "sew-it-good-part-1",
    "nombre": "14. Cósetelo bien – Parte 1 (Sew it Good – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Ragman te propone un negocio \"confidencial\" y te pide un conjunto concreto de ropa para empezar el trato.",
    "objetivos": [
      "Encontrar EN RAID 1 gorro Ski hat with holes for eyes.",
      "Entregar 1 gorro Ski hat with holes for eyes a Ragman.",
      "Encontrar EN RAID 1 mochila Pilgrim tourist backpack.",
      "Entregar 1 mochila Pilgrim tourist backpack a Ragman."
    ],
    "recompensas": [
      "+12 300 EXP.",
      "+0.02 reputación con Ragman.",
      "25 000 rublos (26 250 / 28 750 con Centro de inteligencia).",
      "1× chaleco LBT-6094A Slick Plate Carrier (Black).",
      "1× auriculares Walker's XCEL 500BT Digital.",
      "Desbloquea el crafteo de la armadura 6B23-2 (Mountain Flora) en el Lavatory nivel 1."
    ],
    "youtube": "https://www.youtube.com/watch?v=rihSIi-oSiM",
    "prereqIds": [
      "database-part-2"
    ],
    "position": {
      "x": 1510,
      "y": 7824
    }
  },
  {
    "id": "sew-it-good-part-2",
    "nombre": "15. Cósetelo bien – Parte 2 (Sew it Good – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Ragman quiere probarte con equipo serio: necesita dos chalecos Gzhel en estados de desgaste distintos.",
    "objetivos": [
      "Obtener 1 chaleco BNTI Gzhel-K con 0–50% de durabilidad.",
      "Entregar 1 chaleco BNTI Gzhel-K con 0–50% de durabilidad a Ragman.",
      "Obtener 1 chaleco BNTI Gzhel-K con 50–100% de durabilidad.",
      "Entregar 1 chaleco BNTI Gzhel-K con 50–100% de durabilidad a Ragman."
    ],
    "recompensas": [
      "+17 500 EXP.",
      "+0.03 reputación con Ragman.",
      "1× pantalla facial ZSh-1-2M.",
      "1× pantalla facial Maska-1SCh (Olive Drab).",
      "1× pantalla facial para casco Altyn."
    ],
    "youtube": "https://www.youtube.com/watch?v=ZxZZXOkRkPM",
    "prereqIds": [
      "sew-it-good-part-1"
    ],
    "position": {
      "x": 1750,
      "y": 7824
    }
  },
  {
    "id": "sew-it-good-part-3",
    "nombre": "16. Cósetelo bien – Parte 3 (Sew it Good – Part 3)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Ragman quiere analizar cómo se degrada el blindaje del chaleco 6B43 Zabralo-Sh en distintas condiciones de uso.",
    "objetivos": [
      "Entregar a Ragman 1× 6B43 Zabralo-Sh (assault armor) con 0–75 % de durabilidad.",
      "Entregar a Ragman 1× 6B43 Zabralo-Sh (assault armor) con 75–100 % de durabilidad."
    ],
    "recompensas": [
      "+18 200 EXP",
      "+0.03 reputación con Ragman",
      "≈65 000 rublos.",
      "1× FORT Redut-T5 body armor (Smog).",
      "Desbloquea trueque por mochila 6Sh118 «Raid» (EMR) en Prapor LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "sew-it-good-part-2"
    ],
    "position": {
      "x": 1979,
      "y": 7824
    }
  },
  {
    "id": "sew-it-good-part-4",
    "nombre": "17. Cósetelo bien – Parte 4 (Sew it Good – Part 4)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Encargo de varios chalecos portaplacas para terminar de afinar el diseño de los portaequipo de Ragman.",
    "objetivos": [
      "Encontrar en incursión 2× chalecos tácticos WARTECH TV-109 + TV-106.",
      "Entregar a Ragman los 2× WARTECH TV-109 + TV-106 encontrados en incursión.",
      "Encontrar en incursión 2× chalecos tácticos BlackRock.",
      "Entregar a Ragman los 2× BlackRock encontrados en incursión."
    ],
    "recompensas": [
      "+22 000 EXP (aprox.)",
      "+0.03 reputación con Ragman",
      "≈85 000 rublos.",
      "1× Ars Arma CPC MOD.2 (Goons Edition) o chaleco similar de alta gama."
    ],
    "youtube": "",
    "prereqIds": [
      "sew-it-good-part-3"
    ],
    "position": {
      "x": 2203,
      "y": 7824
    }
  },
  {
    "id": "textile-part-1",
    "nombre": "18. Textiles – Parte 1 (Textile – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 42,
    "descripcion": "Ragman necesita muestras de telas técnicas (aramida, ripstop y cuerdas) para sus diseños de equipo táctico.",
    "objetivos": [
      "Encontrar en incursión 5× telas de aramida.",
      "Entregar a Ragman las 5× telas de aramida.",
      "Encontrar en incursión 10× telas ripstop.",
      "Entregar a Ragman las 10× telas ripstop.",
      "Encontrar en incursión 3× paracord.",
      "Entregar a Ragman los 3× paracord."
    ],
    "recompensas": [
      "+32 000 EXP",
      "≈100 000 rublos.",
      "Desbloquea compra de conjuntos cosméticos (por ejemplo BEAR TIGR Lower / USEC Commando Lower) en Ragman LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "sew-it-good-part-4"
    ],
    "position": {
      "x": 2424,
      "y": 7824
    }
  },
  {
    "id": "textile-part-2",
    "nombre": "19. Textiles – Parte 2 (Textile – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 42,
    "descripcion": "Segundo encargo de materiales textiles premium para terminar la línea de ropa táctica exclusiva de Ragman.",
    "objetivos": [
      "Encontrar en incursión 10× telas de forro polar (Fleece cloth).",
      "Entregar a Ragman las 10× telas de forro polar.",
      "Encontrar en incursión 10× telas de poliamida Cordura.",
      "Entregar a Ragman las 10× telas Cordura.",
      "Encontrar en incursión 5× cintas adhesivas KEKTAPE.",
      "Entregar a Ragman las 5× KEKTAPE."
    ],
    "recompensas": [
      "+34 800 EXP",
      "≈100 000 rublos.",
      "1× mochila Mystery Ranch Blackjack 50 (Multicam).",
      "Desbloquea nuevos conjuntos cosméticos (p. ej. BEAR TIGR Upper / USEC Tier 2 Upper) en Ragman LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "textile-part-1"
    ],
    "position": {
      "x": 2642,
      "y": 7824
    }
  },
  {
    "id": "the-key-to-success",
    "nombre": "20. La clave del éxito (The Key to Success)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 26,
    "descripcion": "Ragman busca manuales de diseño de ropa para mejorar su negocio y abrir nuevas líneas de producto.",
    "objetivos": [
      "Obtener en Interchange el «Clothes design handbook – Part 1».",
      "Entregar a Ragman el «Clothes design handbook – Part 1».",
      "Obtener en Interchange el «Clothes design handbook – Part 2».",
      "Entregar a Ragman el «Clothes design handbook – Part 2»."
    ],
    "recompensas": [
      "+18 000–19 000 EXP (aprox.)",
      "+0.06–0.07 reputación con Ragman (según versión).",
      "≈60 000 rublos.",
      "2× pasamontañas Ghost o similar.",
      "Desbloquea la misión «Sin complicaciones (No Fuss Needed)» de Ragman."
    ],
    "youtube": "",
    "prereqIds": [
      "sew-it-good-part-4"
    ],
    "position": {
      "x": 2424,
      "y": 7911
    }
  },
  {
    "id": "living-high-is-not-a-crime-part-1",
    "nombre": "21. Vivir a lo grande no es delito – Parte 1 (Living High is Not a Crime – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Ragman tiene clientes con gustos caros. Para empezar, quiere relojes y anillos de oro encontrandos en incursión.",
    "objetivos": [
      "Encontrar EN RAID 5× relojes Roler Submariner de oro.",
      "Entregar los 5× Roler Submariner de oro a Ragman.",
      "Encontrar EN RAID 5× anillos dorados con zafiros.",
      "Entregar los 5× anillos dorados con zafiros a Ragman."
    ],
    "recompensas": [
      "+28 400 EXP.",
      "+0.03 reputación con Ragman.",
      "85 000 rublos (aprox., más con Centro de inteligencia).",
      "1× chaleco antibalas NPP KlASS Korund-VM (Negro).",
      "1× casco HighCom Striker ACHHC IIIA (Olive Drab)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-key-to-success"
    ],
    "position": {
      "x": 2642,
      "y": 7911
    }
  },
  {
    "id": "living-high-is-not-a-crime-part-2",
    "nombre": "22. Vivir a lo grande no es delito – Parte 2 (Living High is Not a Crime – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Segunda parte del encargo de lujo: Ragman ahora quiere cadenas de oro y monedas GP para sus clientes VIP.",
    "objetivos": [
      "Encontrar EN RAID 10× cadenas de oro (Gold chain).",
      "Entregar las 10× cadenas de oro a Ragman.",
      "Encontrar EN RAID 5× monedas GP.",
      "Entregar las 5× monedas GP a Ragman."
    ],
    "recompensas": [
      "+30 000 EXP.",
      "+0.04 reputación con Ragman.",
      "95 000 rublos (aprox., más con Centro de inteligencia).",
      "2× casco Altyn (sin pantalla facial)."
    ],
    "youtube": "",
    "prereqIds": [
      "living-high-is-not-a-crime-part-1"
    ],
    "position": {
      "x": 2864,
      "y": 7911
    }
  },
  {
    "id": "charisma-brings-success",
    "nombre": "23. El carisma trae éxito (Charisma Brings Success)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 27,
    "descripcion": "Ragman dice que en los negocios el carisma lo es todo. Quiere que subas la habilidad de Carisma para ver si sales más airoso en los tratos.",
    "objetivos": [
      "Alcanzar nivel 10 en la habilidad Carisma."
    ],
    "recompensas": [
      "+14 500 EXP.",
      "+0.02 reputación con Ragman.",
      "70 000 rublos (aprox., más con Centro de inteligencia).",
      "1× casco Ops-Core FAST MT SUPER HIGH CUT (Urban Tan)."
    ],
    "youtube": "",
    "prereqIds": [
      "living-high-is-not-a-crime-part-2"
    ],
    "position": {
      "x": 3104,
      "y": 7911
    }
  },
  {
    "id": "no-fuss-needed",
    "nombre": "24. Sin complicaciones (No Fuss Needed)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 26,
    "descripcion": "Ragman quiere ver si puedes manejarte con chalecos tácticos de gama alta sin montar mucho ruido.",
    "objetivos": [
      "Encontrar EN RAID 2× chalecos tácticos 5.11 Tactec plate carrier.",
      "Entregar los 2× 5.11 Tactec plate carrier a Ragman.",
      "Encontrar EN RAID 2× chalecos tácticos Crye Precision AVS plate carrier.",
      "Entregar los 2× Crye AVS plate carrier a Ragman."
    ],
    "recompensas": [
      "+23 500 EXP.",
      "+0.03 reputación con Ragman.",
      "90 000 rublos (aprox., más con Centro de inteligencia).",
      "1× chaleco ANA Tactical M2 plate carrier (Digital Flora)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-key-to-success"
    ],
    "position": {
      "x": 2642,
      "y": 8026
    }
  },
  {
    "id": "supervisor",
    "nombre": "25. Supervisor (Supervisor)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 19,
    "descripcion": "Ragman quiere saber qué pasó con los jefes de seguridad de las grandes tiendas del ULTRA. Toca registrar sus oficinas.",
    "objetivos": [
      "Localizar y registrar la oficina del gerente de IDEA en Interchange.",
      "Localizar y registrar la oficina del gerente de OLI en Interchange.",
      "Localizar y registrar la oficina del gerente de Goshan en Interchange."
    ],
    "recompensas": [
      "+10 800 EXP.",
      "+0.03 reputación con Ragman.",
      "40 000 rublos (aprox., más con Centro de inteligencia).",
      "1× mochila Tactical sling bag (Black).",
      "Desbloquea progresión hacia otras quests de Ragman centradas en Interchange."
    ],
    "youtube": "",
    "prereqIds": [
      "database-part-2"
    ],
    "position": {
      "x": 1510,
      "y": 7745.777809143066
    }
  },
  {
    "id": "scavenger",
    "nombre": "26. Carroñero (Scavenger)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 29,
    "descripcion": "Ragman quiere asegurarse de que sabes exprimir cada cadáver y cada caja: básicamente, mejorar tu velocidad y efectividad saqueando.",
    "objetivos": [
      "Alcanzar nivel 9 en la habilidad Búsqueda (Search)."
    ],
    "recompensas": [
      "+17 700 EXP.",
      "+0.03 reputación con Ragman.",
      "65 000 rublos (68 250 / 74 750 con Centro de inteligencia).",
      "Desbloquea el trueque del hacha Crash Axe en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "hot-delivery"
    ],
    "position": {
      "x": 1977,
      "y": 7645.778076171875
    }
  },
  {
    "id": "inventory-check",
    "nombre": "27. Revisión de inventario (Inventory Check)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 15,
    "descripcion": "Ragman quiere saber si aún queda material en los barracones de la base de Reserve, revisando varios arsenales y una sala de servicio.",
    "objetivos": [
      "Comprobar el primer arsenal en los barracones del este (Black Pawn) en Reserve.",
      "Comprobar el segundo arsenal en los barracones del este (Black Pawn) en Reserve.",
      "Comprobar el primer arsenal en los barracones del sur (White Pawn) en Reserve.",
      "Comprobar el segundo arsenal en los barracones del sur (White Pawn) en Reserve.",
      "Comprobar la sala de guardia en los barracones del este (Black Pawn) en Reserve.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+10 000 EXP.",
      "+0.03 reputación con Ragman.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "1× casco ZSh-1-2M (Olive Drab).",
      "Desbloquea la compra de la mochila Camelbak Tri-Zip (Foliage y MultiCam) en Ragman LL3."
    ],
    "youtube": "",
    "prereqIds": [
      "a-fuel-matter"
    ],
    "position": {
      "x": 1497,
      "y": 7335.778076171875
    }
  },
  {
    "id": "a-fuel-matter",
    "nombre": "28. Asunto de combustible (A Fuel Matter)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 15,
    "descripcion": "Ragman está organizando una expedición de combustible a Reserve y necesita que localices y marques dos grupos de depósitos de combustible.",
    "objetivos": [
      "Marcar el primer grupo de depósitos de combustible con un MS2000 Marker en Reserve.",
      "Marcar el segundo grupo de depósitos de combustible con un MS2000 Marker en Reserve.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+8 200 EXP.",
      "+0.03 reputación con Ragman.",
      "30 000 rublos (31 500 / 34 500 con Centro de inteligencia).",
      "2× depósito de propano de 5L."
    ],
    "youtube": "",
    "prereqIds": [
      "blood-of-war-1"
    ],
    "position": {
      "x": 1257,
      "y": 7335.778076171875
    }
  },
  {
    "id": "long-line",
    "nombre": "29. Cola larga (Long Line)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 45,
    "descripcion": "Los PMCs están echando a la gente de ULTRA a tiros. Ragman quiere que limpies el interior del centro comercial para poder retomar el negocio.",
    "objetivos": [
      "Eliminar 20 PMCs dentro del centro comercial ULTRA en Interchange (cualquier planta, incluidos los aparcamientos)."
    ],
    "recompensas": [
      "+84 000 EXP.",
      "1× mochila 6Sh118 raid (EMR).",
      "1× casco Rys-T (negro)."
    ],
    "youtube": "",
    "prereqIds": [
      "supervisor"
    ],
    "position": {
      "x": 1750,
      "y": 7745.777809143066
    }
  },
  {
    "id": "booze",
    "nombre": "30. Bebida (Booze)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 50,
    "descripcion": "Pedido grande de alcohol: Ragman quiere vodka, whisky, cerveza y agua purificada, todo encontrado en incursión para garantizar la calidad.",
    "objetivos": [
      "Encontrar EN RAID 10× botellas de vodka Tarkovskaya.",
      "Encontrar EN RAID 10× botellas de whisky Dan Jackiel.",
      "Encontrar EN RAID 3× bidones con agua purificada.",
      "Encontrar EN RAID 20× botellas de cerveza Pevko Light.",
      "Entregar 10× botellas de vodka Tarkovskaya a Ragman.",
      "Entregar 10× botellas de whisky Dan Jackiel a Ragman.",
      "Entregar 3× bidones con agua purificada a Ragman.",
      "Entregar 20× botellas de cerveza Pevko Light a Ragman."
    ],
    "recompensas": [
      "+107 000 EXP.",
      "3× Paracord.",
      "10× piezas de plexiglás.",
      "Desbloquea un estilo de diana de botellas para el campo de tiro del escondite."
    ],
    "youtube": "",
    "prereqIds": [
      "long-line"
    ],
    "position": {
      "x": 1979,
      "y": 7745.777809143066
    }
  },
  {
    "id": "audit",
    "nombre": "31. Auditoría (Audit)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 17,
    "descripcion": "Ragman quiere las anotaciones financieras de una oficina en las Calles de Tarkov para saber qué estaba pasando con el dinero antes del desastre.",
    "objetivos": [
      "Obtener EN RAID los registros financieros en Streets of Tarkov.",
      "Entregar los registros financieros a Ragman."
    ],
    "recompensas": [
      "+8 700 EXP.",
      "+0.02 reputación con Ragman.",
      "200 000 rublos (210 000 / 230 000 con Centro de inteligencia).",
      "Desbloquea la compra de la armadura de asalto 6B13 (Flora) en Ragman LL2."
    ],
    "youtube": "https://www.youtube.com/watch?v=ijy5029E_d4",
    "prereqIds": [
      "only-business"
    ],
    "position": {
      "x": 697,
      "y": 8065.222190856934
    }
  },
  {
    "id": "audiophile",
    "nombre": "32. Audiófilo (Audiophile)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 25,
    "descripcion": "Un cliente de Ragman quiere un recuerdo muy concreto: un plectro grabado que se encuentra en el piso de un músico en las Calles de Tarkov.",
    "objetivos": [
      "Localizar el lugar de reunión de los músicos en Streets of Tarkov.",
      "Obtener el plectro de guitarra grabado (AG guitar pick).",
      "Entregar el plectro grabado a Ragman."
    ],
    "recompensas": [
      "+17 200 EXP.",
      "+0.02 reputación con Ragman.",
      "87 000 rublos (91 350 / 100 050 con Centro de inteligencia).",
      "1× reloj de pulsera Roler Submariner de oro.",
      "1× anillo de calavera de oro.",
      "Desbloquea la compra del chaleco CQC Osprey MK4A plate carrier (Assault, MTP) en Ragman LL3."
    ],
    "youtube": "https://www.youtube.com/watch?v=At_-8mfdl1k",
    "prereqIds": [
      "minibus",
      "ballet-lover"
    ],
    "position": {
      "x": 1750,
      "y": 8001
    }
  },
  {
    "id": "ballet-lover",
    "nombre": "33. Amante del ballet (Ballet Lover)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 20,
    "descripcion": "Ragman busca información sobre un tipo muy aficionado al ballet. Tienes que localizar su apartamento en las Calles de Tarkov y salir vivo.",
    "objetivos": [
      "Localizar el apartamento del maestro de ballet en Streets of Tarkov.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+10 700 EXP.",
      "+0.02 reputación con Ragman.",
      "66 000 rublos (69 300 / 75 900 con Centro de inteligencia).",
      "1× chaleco Eagle Industries MMAC plate carrier (Ranger Green).",
      "Desbloquea la compra del rig blindado 6B5-15 Zh-86 Uley (Flora) en Ragman LL2."
    ],
    "youtube": "https://www.youtube.com/watch?v=MUYeMuyVJ0o",
    "prereqIds": [
      "audit"
    ],
    "position": {
      "x": 1023,
      "y": 8057.222190856934
    }
  },
  {
    "id": "dandies",
    "nombre": "34. Dandis (Dandies)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 33,
    "descripcion": "Ragman quiere que te hagas pasar por ciertos pavos de Streets: elimina enemigos con un conjunto de ropa muy llamativo y luego déjalo en la barbería.",
    "objetivos": [
      "Eliminar a 30 enemigos en Streets of Tarkov llevando un gorro Bomber beanie y unas gafas RayBench Hipster Reserve.",
      "Esconder un Bomber beanie dentro de la barbería en Streets of Tarkov.",
      "Esconder unas gafas RayBench Hipster Reserve dentro de la barbería en Streets of Tarkov."
    ],
    "recompensas": [
      "+33 000 EXP.",
      "+0.03 reputación con Ragman.",
      "350 000 rublos (367 500 / 402 500 con Centro de inteligencia).",
      "1× armadura FORT Redut-M.",
      "Desbloquea un estilo de pared para el Escondite (Bricks Hideout wall style)."
    ],
    "youtube": "https://www.youtube.com/watch?v=yyxhHt6SRTk",
    "prereqIds": [
      "ballet-lover"
    ],
    "position": {
      "x": 1270,
      "y": 8057.222190856934
    }
  },
  {
    "id": "nothing-fishy-about-this",
    "nombre": "35. Nada raro en esto (Nothing Fishy About This)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Ragman compró un todoterreno barato que debía estar en Shoreline, pero el vendedor desapareció. Tienes que comprobar si el coche sigue allí.",
    "objetivos": [
      "Localizar el SUV de Ragman en Shoreline.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+7 200 EXP.",
      "+0.01 reputación con Ragman.",
      "25 000 rublos (26 250 / 28 750 con Centro de inteligencia).",
      "1× rig táctico Stich Profi Chest Rig MK2 (Recon, A-TACS FG)."
    ],
    "youtube": "https://www.youtube.com/watch?v=F1wYx92DdC8",
    "prereqIds": [
      "big-sale"
    ],
    "position": {
      "x": 1011,
      "y": 7963
    }
  },
  {
    "id": "drip-out-part-1",
    "nombre": "36. Goteo – Parte 1 (Drip-Out – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 24,
    "descripcion": "Primera parte de la cadena \"Goteo\": Ragman quiere demostrar el poder de su marca haciendo que Raiders luzcan equipo WARTECH… y que tú se lo quites.",
    "objetivos": [
      "Eliminar 100 Raiders.",
      "Entregar 50 piezas de equipo de marca WARTECH con estado ENCONTRADO EN INCURSIÓN."
    ],
    "recompensas": [
      "+0 EXP (solo desbloqueo cosmético).",
      "No da reputación adicional con Ragman.",
      "Desbloquea conjuntos de ropa especiales de Ragman (por facción, p.ej. BEAR Classic / BEAR Reitar para BEAR)."
    ],
    "youtube": "",
    "prereqIds": [
      "minibus"
    ],
    "position": {
      "x": 1750,
      "y": 7911
    }
  },
  {
    "id": "drip-out-part-2",
    "nombre": "37. Goteo – Parte 2 (Drip-Out – Part 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 33,
    "descripcion": "Segunda parte de \"Goteo\": ahora Ragman quiere que limpies a los Rogues y recojas equipo de la marca LBT.",
    "objetivos": [
      "Eliminar 100 Rogues.",
      "Entregar 50 piezas de equipo de marca LBT con estado ENCONTRADO EN INCURSIÓN."
    ],
    "recompensas": [
      "+0 EXP (solo desbloqueo cosmético).",
      "No da reputación adicional con Ragman.",
      "Desbloquea conjuntos de ropa avanzados de Ragman (por facción, p.ej. BEAR OPS MGS Black / BEAR URON Coyote o sus equivalentes USEC)."
    ],
    "youtube": "",
    "prereqIds": [
      "dandies"
    ],
    "position": {
      "x": 1510,
      "y": 8057.222190856934
    }
  },
  {
    "id": "the-invisible-hand",
    "nombre": "38. La mano invisible (The Invisible Hand)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 35,
    "descripcion": "Los competidores de Ragman usan porteadores con mochilas enormes para mover mercancía. Tu trabajo es eliminar a esos \"mulos\".",
    "objetivos": [
      "Eliminar a 15 objetivos que lleven una mochila de 20 o más casillas de capacidad."
    ],
    "recompensas": [
      "+12 800 EXP.",
      "+0.02 reputación con Ragman.",
      "86 000 rublos (90 300 / 98 900 con Centro de inteligencia).",
      "1× anillo de calavera de oro."
    ],
    "youtube": "",
    "prereqIds": [
      "only-business"
    ],
    "position": {
      "x": 697,
      "y": 8179.666748046875
    }
  },
  {
    "id": "circulate",
    "nombre": "39. Circular (Circulate)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 35,
    "descripcion": "Ragman quiere que el mercado se mueva: toca hacer circular chalecos y mochilas por sus manos, muchas.",
    "objetivos": [
      "Vender a Ragman un total de 250 mochilas o chalecos tácticos (cualquier combinación)."
    ],
    "recompensas": [
      "+32 000 EXP.",
      "+0.01 reputación con Ragman.",
      "264 000 rublos (277 200 / 303 600 con Centro de inteligencia).",
      "2× botella de aguardiente Fierce Hatchling (moonshine)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-invisible-hand"
    ],
    "position": {
      "x": 1011,
      "y": 8171.666748046875
    }
  },
  {
    "id": "special-offer",
    "nombre": "40. Oferta especial (Special Offer)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 35,
    "descripcion": "Ragman ha oído hablar de cierto equipamiento único usado por Sanitar, Tagilla, los Goons y compañía. Quiere obtener muestras originales para copiarlas.",
    "objetivos": [
      "Encontrar EN RAID la bolsa de Sanitar.",
      "Entregar la bolsa de Sanitar a Ragman.",
      "Encontrar EN RAID 1× Crye Precision AVS plate carrier (Tagilla Edition).",
      "Entregar el Crye Precision AVS plate carrier (Tagilla Edition) a Ragman.",
      "Encontrar EN RAID 1× LBT-1961A Load Bearing Chest Rig (Goons Edition).",
      "Entregar el LBT-1961A Load Bearing Chest Rig (Goons Edition) a Ragman.",
      "Encontrar EN RAID 1× Mystery Ranch NICE COMM 3 BVS frame system (Coyote).",
      "Entregar el Mystery Ranch NICE COMM 3 BVS frame system (Coyote) a Ragman.",
      "Encontrar EN RAID 1× Crye Precision CPC plate carrier (Goons Edition).",
      "Entregar el Crye Precision CPC plate carrier (Goons Edition) a Ragman."
    ],
    "recompensas": [
      "+85 500 EXP.",
      "+0.03 reputación con Ragman.",
      "328 000 rublos (344 400 / 377 200 con Centro de inteligencia).",
      "2× auriculares Walker's XCEL 500BT Digital.",
      "2× casco Diamond Age Bastion (Black)."
    ],
    "youtube": "",
    "prereqIds": [
      "circulate"
    ],
    "position": {
      "x": 1270,
      "y": 8171.666748046875
    }
  },
  {
    "id": "combat-proven",
    "nombre": "41. Probado en combate (Combat Proven)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": null,
    "descripcion": "Ragman quiere probar sus chalecos tácticos Edición Goons contra los jefes más duros de Tarkov.",
    "objetivos": [
      "Localizar y neutralizar a 5 jefes (Bosses) cualquiera, EXCEPTO los Goons, Partisan, Shadow of Tagilla y Vengeful Killa.",
      "Llevar equipado durante cada baja cualquier chaleco táctico Goons Edition: LBT-1961A (Goons), S&S PlateFrame (Goons) o Crye Precision CPC (Goons)."
    ],
    "recompensas": [
      "+92 000 EXP.",
      "+0.03 reputación con Ragman.",
      "340 000 rublos (357 000 / 391 000 con Centro de inteligencia).",
      "3× chaleco portaplacas NPP KlASS Bagariy (EMR).",
      "Desbloquea el estilo «Laminate» para el suelo del Escondite."
    ],
    "youtube": "https://www.youtube.com/watch?v=5hfSl8kCU5w",
    "prereqIds": [
      "special-offer"
    ],
    "position": {
      "x": 1510,
      "y": 8171.666748046875
    }
  },
  {
    "id": "old-patterns",
    "nombre": "42. Patrones antiguos (Old Patterns)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": null,
    "descripcion": "Ragman conoce un sastre que hace milagros con los patrones antiguos… pero quiere que pagues el «diseño» en Bitcoin.",
    "objetivos": [
      "Entregar a Ragman 15× Bitcoin físico (Physical Bitcoin)."
    ],
    "recompensas": [
      "+0.01 reputación con Ragman.",
      "+2 huecos adicionales de bolsillo permanentes para tu PMC."
    ],
    "youtube": "",
    "prereqIds": [
      "combat-proven"
    ],
    "position": {
      "x": 1750,
      "y": 8171.666748046875
    }
  },
  {
    "id": "key-to-the-city",
    "nombre": "43. Llave de la ciudad (Key to the City)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": null,
    "descripcion": "Ragman ha oído hablar de una llave conmemorativa de la ciudad de Tarkov guardada en un museo. Quiere ese recuerdo histórico para hacer negocio.",
    "objetivos": [
      "Localizar y obtener la «Tarkov City souvenir key» en el museo de Streets of Tarkov.",
      "Entregar a Ragman la llave-souvenir de la ciudad de Tarkov."
    ],
    "recompensas": [
      "+55 000 EXP.",
      "+0.02 reputación con Ragman.",
      "145 000 rublos (152 250 / 166 750 con Centro de inteligencia).",
      "3× botella de aguardiente Fierce Hatchling (moonshine)."
    ],
    "youtube": "https://www.youtube.com/watch?v=z7fYxWjC0L0",
    "prereqIds": [
      "proper-comeback"
    ],
    "position": {
      "x": 2618,
      "y": 2026.5556182861328
    }
  },
  {
    "id": "know-your-place",
    "nombre": "44. ¡Conoce tu sitio! (Know Your Place!)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": null,
    "descripcion": "Hay una ruta de contrabando entre Calles de Tarkov e Interchange que Ragman quiere controlar. Tu tarea es demostrar quién manda allí.",
    "objetivos": [
      "Eliminar 5 objetivos (PMC o Scavs) en Streets of Tarkov EN UNA SOLA incursión.",
      "Usar el tránsito de Streets of Tarkov hacia Interchange EN ESA MISMA incursión.",
      "Eliminar 5 objetivos (PMC o Scavs) en Interchange EN LA MISMA incursión en la que usaste el tránsito."
    ],
    "recompensas": [
      "+28 800 EXP.",
      "+0.03 reputación con Ragman.",
      "98 000 rublos (102 900 / 112 700 con Centro de inteligencia).",
      "2× auriculares Peltor ComTac VI (Coyote Brown)."
    ],
    "youtube": "https://www.youtube.com/watch?v=5t7pAWO16B4",
    "prereqIds": [
      "blood-of-war-3"
    ],
    "position": {
      "x": 1737,
      "y": 7436.778076171875
    }
  },
  {
    "id": "break-the-deal",
    "nombre": "45. Romper el trato (Break the Deal)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": null,
    "descripcion": "Ragman quiere sabotear una reunión entre Reshala y uno de sus socios. Ha colocado un francotirador, pero los Scavs han saqueado su alijo. Tienes que reabastecer su posición en la planta industrial de Customs.",
    "objetivos": [
      "Esconder 1× fusil de precisión Lobaev Arms DVL-10 7.62×51 en el punto indicado de Customs (andamiaje de la planta industrial).",
      "Esconder 1× cargador de 10 balas para DVL-10 7.62×51 en el punto indicado de Customs.",
      "Esconder 1× mira ELCAN SpecterDR 1x/4x en el punto indicado de Customs.",
      "Esconder 1× caja de munición de 7,62×51 mm NATO (cualquier tipo) en el punto indicado de Customs."
    ],
    "recompensas": [
      "+11 400 EXP.",
      "+0.03 reputación con Ragman.",
      "100 000 rublos (105 000 / 115 000 con Centro de inteligencia).",
      "1× chaleco antibalas IOTV Gen4 (High Mobility Kit, MultiCam)."
    ],
    "youtube": "https://www.youtube.com/watch?v=KPBIw404JIw",
    "prereqIds": [
      "make-ultra-great-again"
    ],
    "position": {
      "x": 1023,
      "y": 7864
    }
  },
  {
    "id": "another-shipping-delay",
    "nombre": "46. Otro retraso en el envío (Another Shipping Delay)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 40,
    "descripcion": "Un pedido de equipo de protección no ha llegado a su destino. Ragman quiere que compruebes el área de carga en Customs y verifiques si el envío fue interceptado.",
    "objetivos": [
      "Localizar la zona de descarga del envío perdido en Customs.",
      "Localizar el documento de envío o manifiesto en la zona de carga.",
      "Sobrevivir y extraer de la incursión.",
      "Entregar los documentos de envío a Ragman."
    ],
    "recompensas": [
      "+23 000 EXP aprox.",
      "+0.03 reputación con Ragman.",
      "120 000 rublos (aprox., más con Centro de inteligencia).",
      "1× chaleco táctico 5.11 Tactec plate carrier.",
      "1× casco Ops-Core FAST RAC (Tan)."
    ],
    "youtube": "",
    "prereqIds": [
      "special-offer"
    ],
    "position": {
      "x": 1510,
      "y": 8258
    }
  },
  {
    "id": "stabilize-business",
    "nombre": "47. Estabilizar el negocio (Stabilize Business)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 42,
    "descripcion": "Entre retrasos, robos y jefes cabreados, Ragman quiere blindar la seguridad de su operación. Necesita una colección de armaduras y cascos pesados.",
    "objetivos": [
      "Entregar 5× chalecos antibalas clase 5 o superior (cualquier tipo).",
      "Entregar 5× cascos antibalas clase 5 o superior (cualquier tipo)."
    ],
    "recompensas": [
      "+28 000 EXP aprox.",
      "+0.03 reputación con Ragman.",
      "150 000 rublos (aprox., más con Centro de inteligencia).",
      "1× armadura FORT Defender-2.",
      "1× casco Altyn con pantalla facial."
    ],
    "youtube": "",
    "prereqIds": [
      "another-shipping-delay"
    ],
    "position": {
      "x": 1750,
      "y": 8258
    }
  },
  {
    "id": "new-beginning-prestige-1",
    "nombre": "48. Nuevo comienzo – Prestigio 1 (New Beginning – Prestige 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 55,
    "descripcion": "Primera misión de Prestigio de Ragman: quiere ver si sigues siendo capaz de moverte por Tarkov como el primer día, cumpliendo objetivos repartidos por varios mapas.",
    "objetivos": [
      "Eliminar 15 PMC en cualquier localización.",
      "Eliminar 30 Scavs en cualquier localización.",
      "Sobrevivir y extraer de 5 incursiones seguidas sin morir."
    ],
    "recompensas": [
      "+40 000 EXP aprox.",
      "+0.05 reputación con Ragman.",
      "500 000 rublos.",
      "Desbloquea rango de Prestigio 1 con Ragman (nuevos cosméticos de ropa)."
    ],
    "youtube": "",
    "prereqIds": [
      "stabilize-business"
    ],
    "position": {
      "x": 1979,
      "y": 8258
    }
  },
  {
    "id": "new-beginning-prestige-2",
    "nombre": "49. Nuevo comienzo – Prestigio 2 (New Beginning – Prestige 2)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 55,
    "descripcion": "Segunda etapa del Prestigio de Ragman: ahora quiere pruebas de que dominas tanto el combate como la logística.",
    "objetivos": [
      "Eliminar 25 PMC en cualquier mapa.",
      "Eliminar 50 Scavs, Raiders o Renegados.",
      "Entregar 10× chalecos tácticos de calidad alta (clase 5 o superior) a Ragman."
    ],
    "recompensas": [
      "+50 000 EXP aprox.",
      "+0.05 reputación con Ragman.",
      "750 000 rublos.",
      "Desbloquea rango de Prestigio 2 con Ragman (más conjuntos cosméticos)."
    ],
    "youtube": "",
    "prereqIds": [
      "new-beginning-prestige-1"
    ],
    "position": {
      "x": 2203,
      "y": 8258
    }
  },
  {
    "id": "new-beginning-prestige-3",
    "nombre": "50. Nuevo comienzo – Prestigio 3 (New Beginning – Prestige 3)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 55,
    "descripcion": "Tercera misión de Prestigio: Ragman quiere que mantengas una racha de supervivencia alta mientras te enfrentas a los enemigos más peligrosos.",
    "objetivos": [
      "Eliminar 20 PMC de nivel 40 o superior.",
      "Eliminar 30 Raiders o Renegados.",
      "Sobrevivir y extraer de 10 incursiones en cualquier mapa.",
      "Entregar 5× Physical Bitcoin a Ragman."
    ],
    "recompensas": [
      "+65 000 EXP aprox.",
      "+0.05 reputación con Ragman.",
      "1 000 000 rublos.",
      "Desbloquea rango de Prestigio 3 con Ragman (conjuntos cosméticos avanzados)."
    ],
    "youtube": "",
    "prereqIds": [
      "new-beginning-prestige-2"
    ],
    "position": {
      "x": 2424,
      "y": 8258
    }
  },
  {
    "id": "new-beginning-prestige-4",
    "nombre": "51. Nuevo comienzo – Prestigio 4 (New Beginning – Prestige 4)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 55,
    "descripcion": "Cuarta misión de Prestigio de Ragman: quiere que demuestres que sigues dominando todos los frentes del conflicto y que conoces bien los nuevos tránsitos.",
    "objetivos": [
      "Eliminar 40 PMC.",
      "Eliminar 100 Renegados (Rogues).",
      "Usar el tránsito de The Lab a Streets of Tarkov.",
      "Usar el tránsito de Streets of Tarkov a Interchange.",
      "Sobrevivir y extraer de Interchange.",
      "Entregar la figura de BEAR operative (Encontrado en incursión).",
      "Entregar la figura de Politician Mutkevich (Encontrado en incursión).",
      "Entregar la figura de Killa (Encontrado en incursión).",
      "Entregar la figura de Reshala (Encontrado en incursión).",
      "Entregar la figura de Ryzhy (Encontrado en incursión).",
      "Entregar la figura de Scav (Encontrado en incursión).",
      "Entregar la figura de Tagilla (Encontrado en incursión).",
      "Entregar la figura de USEC operative (Encontrado en incursión).",
      "Entregar la figura de Cultist (Encontrado en incursión).",
      "Entregar la figura de Den (Encontrado en incursión)."
    ],
    "recompensas": [
      "11 000 EXP.",
      "+0.10 reputación con Ragman.",
      "3 000 000 rublos (más con Centro de inteligencia).",
      "3× Bitcoin físico (Physical Bitcoin)."
    ],
    "youtube": "",
    "prereqIds": [
      "new-beginning-prestige-3"
    ],
    "position": {
      "x": 2657,
      "y": 8258
    }
  },
  {
    "id": "sensory-analysis-part-1",
    "nombre": "52. Análisis sensorial – Parte 1 (Sensory Analysis – Part 1)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Un contacto de Ragman quiere probar la calidad del aguardiente local. Debes usar el BTR para hacerle llegar una muestra.",
    "objetivos": [
      "Obtener 1× botella de aguardiente Fierce Hatchling (Encontrado en incursión).",
      "Ir a Woods o Streets of Tarkov.",
      "Entregar la botella de moonshine al conductor del BTR."
    ],
    "recompensas": [
      "20 300 EXP.",
      "+0.02 reputación con Ragman.",
      "112 000 rublos (más con Centro de inteligencia).",
      "2× auriculares Safariland Liberator HP 2.0 (FDE).",
      "2× chaleco portaplacas ECLiPSE RBAV-AF (Ranger Green)."
    ],
    "youtube": "",
    "prereqIds": [
      "hidden-layer"
    ],
    "position": {
      "x": 2851,
      "y": 8683.44482421875
    }
  },
  {
    "id": "hot-zone",
    "nombre": "53. Zona caliente (Hot Zone)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 0,
    "descripcion": "Ragman está ayudando a montar una ‘zona de pruebas’ muy delicada; quiere que equipes y abastezcas dos puntos estratégicos con chalecos y placas.",
    "objetivos": [
      "Ocultar 12 chalecos Zulu Nylon Gear M4 RSCR en la gasolinera nueva de Customs.",
      "Ocultar 12 placas balísticas de clase 4 en el tejado del taller de reparación indicado en Reserve."
    ],
    "recompensas": [
      "29 400 EXP.",
      "+0.03 reputación con Ragman.",
      "170 000 rublos.",
      "3× tarjeta Labrys access keycard.",
      "2× casco Vulkan-5 LShZ-5 (Black).",
      "2× visor facial para casco Vulkan-5.",
      "Desbloquea trueque de Labrys access keycard con Ragman LL1."
    ],
    "youtube": "",
    "prereqIds": [
      "sensory-analysis-part-2"
    ],
    "position": {
      "x": 3338,
      "y": 8578.778076171875
    }
  },
  {
    "id": "vacate-the-premises",
    "nombre": "54. Desalojar el local (Vacate the Premises)",
    "trader": "Ragman",
    "traderColor": "ragman",
    "nivel": 15,
    "descripcion": "Ragman tiene clientes interesados en el Laberinto y necesita que ‘desalojes’ el lugar de operadores rivales.",
    "objetivos": [
      "Eliminar 24 PMC dentro de The Labyrinth."
    ],
    "recompensas": [
      "20 400 EXP.",
      "+0.03 reputación con Ragman.",
      "208 000 rublos.",
      "3× máscara balística Atomic Defense CQCM up-armored (Black).",
      "1× póster decorativo «Last Breath»."
    ],
    "youtube": "",
    "prereqIds": [
      "offensive-reconnaissance"
    ],
    "position": {
      "x": 983,
      "y": 8349
    }
  },
  {
    "id": "easy-money-part-2",
    "nombre": "1. Dinero fácil – Parte 2 (Easy Money – Part 2)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Segunda parte de la cadena de acceso a Ref. Después de colocar el póster para Skier, Ref quiere que demuestres que puedes abastecer a la Arena con comida y bebida encontradas en incursión.",
    "objetivos": [
      "Entregar 5 objetos ENCONTRADOS EN INCURSIÓN de la categoría Bebidas.",
      "Entregar 5 objetos ENCONTRADOS EN INCURSIÓN de la categoría Alimentos."
    ],
    "recompensas": [
      "+4 200 EXP.",
      "+0.03 reputación con Ref.",
      "52 monedas GP (55 / 60 con Centro de inteligencia)."
    ],
    "youtube": "",
    "prereqIds": [
      "easy-money-part-1"
    ],
    "position": {
      "x": 756,
      "y": 161
    }
  },
  {
    "id": "provide-viewership",
    "nombre": "2. Proporcionar audiencia (Provide Viewership)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": null,
    "descripcion": "Ref quiere retransmitir combates en condiciones reales en la planta industrial de Customs. Primero instalas cuatro cámaras WI-FI y después limpias la zona eliminando objetivos dentro del recinto.",
    "objetivos": [
      "Instalar la primera cámara WI-FI dentro de la planta industrial en Customs.",
      "Instalar la segunda cámara WI-FI dentro de la planta industrial en Customs.",
      "Instalar la tercera cámara WI-FI dentro de la planta industrial en Customs.",
      "Instalar la cuarta cámara WI-FI dentro de la planta industrial en Customs.",
      "Eliminar 15 objetivos dentro de la planta industrial en Customs (cualquier tipo de enemigo)."
    ],
    "recompensas": [
      "+5 100 EXP.",
      "+0.03 reputación con Ref.",
      "45 monedas GP (47 / 52 con Centro de inteligencia).",
      "1× fusil de asalto Steyr AUG A1 5,56×45.",
      "3× cargador Steyr AUG 5,56×45 de 30 balas.",
      "3× paquetes de 50 cartuchos 5,56×45 mm M856.",
      "1× máscara blindada ligera Death Shadow.",
      "Acceso de prueba de 3 días a Escape from Tarkov: Arena (se activa al completar la misión)."
    ],
    "youtube": "",
    "prereqIds": [
      "easy-money-part-2"
    ],
    "position": {
      "x": 971,
      "y": 244
    }
  },
  {
    "id": "balancing-part-1",
    "nombre": "3. Balanceo – Parte 1 (Balancing – Part 1)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": null,
    "descripcion": "Ref te asciende a ‘tester’ de equipo para la Arena. Quiere que pruebes los fusiles bullpup Steyr AUG eliminando scavs en cualquier mapa. Nota: la wiki indica que esta misión no está disponible en modo JcE en la versión actual.",
    "objetivos": [
      "Eliminar 5 scavs en cualquier localización usando un fusil de asalto Steyr AUG (A1 o A3)."
    ],
    "recompensas": [
      "+5 100 EXP.",
      "+0.03 reputación con Ref.",
      "45 monedas GP (47 / 52 con Centro de inteligencia).",
      "1× fusil de asalto Steyr AUG A1 5,56×45.",
      "3× cargadores Steyr AUG 5,56×45 de 30 balas.",
      "3× paquetes de 50 cartuchos 5,56×45 mm M856.",
      "1× máscara blindada ligera Death Shadow.",
      "Acceso de prueba de 3 días a Escape from Tarkov: Arena."
    ],
    "youtube": "",
    "prereqIds": [
      "easy-money-part-2"
    ],
    "position": {
      "x": 971,
      "y": 161
    }
  },
  {
    "id": "balancing-part-2",
    "nombre": "4. Balanceo – Parte 2 (Balancing – Part 2)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": null,
    "descripcion": "Segunda parte de las pruebas de ‘balanceo’: ahora Ref quiere probar chalecos PACA contra operadores reales. Tienes que llevar PACA puesto mientras eliminas PMCs. También se indica en la wiki que esta misión está ligada al modo estándar/JcJ, no al JcE puro.",
    "objetivos": [
      "Eliminar 2 operadores de PMC en cualquier localización llevando equipado un chaleco PACA Soft Armor."
    ],
    "recompensas": [
      "+7 000 EXP.",
      "+0.03 reputación con Ref.",
      "52 monedas GP (55 / 60 con Centro de inteligencia).",
      "2× máscara blindada ligera Death Shadow."
    ],
    "youtube": "",
    "prereqIds": [
      "balancing-part-1"
    ],
    "position": {
      "x": 1206,
      "y": 161
    }
  },
  {
    "id": "surprise",
    "nombre": "5. Sorpresa (Surprise)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": null,
    "descripcion": "Ref necesita placas balísticas de buena calidad para sus gladiadores y equipos de limpieza. Te pide placas clase 4 o superior encontradas en incursión.",
    "objetivos": [
      "Entregar 3 placas balísticas de clase 4 o superior ENCONTRADAS EN INCURSIÓN a Ref."
    ],
    "recompensas": [
      "+3 600 EXP.",
      "+0.04 reputación con Ref.",
      "55 monedas GP (≈más con Centro de inteligencia).",
      "1× casco Maska-1SCh (edición Killa)."
    ],
    "youtube": "",
    "prereqIds": [
      "balancing-part-2"
    ],
    "position": {
      "x": 1435,
      "y": 161
    }
  },
  {
    "id": "create-a-distraction-part-1",
    "nombre": "6. Crear una distracción – Parte 1 (Create a Distraction – Part 1)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Coloca ladrillos de TNT TP-200 en el café del centro de Ground Zero para asustar a los socios de Ref sin volar nada realmente.",
    "objetivos": [
      "Colocar 3 ladrillos de TNT TP-200 en la segunda planta del café de Ground Zero."
    ],
    "recompensas": [
      "+5 000 EXP",
      "+0.05 reputación con Ref.",
      "28 monedas GP (varía con Centro de inteligencia).",
      "3× cargador AR-15 PMAG GEN M3 5,56×45 de 20 balas.",
      "1× paquete de munición 5,56×45 mm M856 (100 balas).",
      "1× fusil de asalto Desert Tech MDR 5,56×45."
    ],
    "youtube": "",
    "prereqIds": [
      "surprise"
    ],
    "position": {
      "x": 1666,
      "y": 161
    }
  },
  {
    "id": "create-a-distraction-part-2",
    "nombre": "7. Crear una distracción – Parte 2 (Create a Distraction – Part 2)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Demuestra tu utilidad eliminando a los guardias de Kaban o Kollontay en Streets of Tarkov, sin tocar al propio jefe.",
    "objetivos": [
      "Eliminar guardias de Kaban o Kollontay en Streets of Tarkov (sin matar al propio Kaban/Kollontay)."
    ],
    "recompensas": [
      "+10 000 EXP",
      "+0.07 reputación con Ref.",
      "1× ametralladora ligera Degtyarev RPDN (configuración básica).",
      "1× tambor de 100 balas para RPD (\"Buben\").",
      "10× paquetes de munición FMJ 7,62×39 mm.",
      "1× medalla Lega."
    ],
    "youtube": "",
    "prereqIds": [
      "create-a-distraction-part-1"
    ],
    "position": {
      "x": 1890,
      "y": 81.88887786865234
    }
  },
  {
    "id": "to-great-heights-part-1",
    "nombre": "8. ¡A la cima! – Parte 1 (To Great Heights! – Part 1)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Primera prueba de Arena para Ref: ganar una partida en modos centrados en el punto para demostrar que puedes competir arriba.",
    "objetivos": [
      "Ganar 1 partida en modo CheckPoint o LastHero en Arena."
    ],
    "recompensas": [
      "+5 600 EXP",
      "+0.03 reputación con Ref.",
      "75 monedas GP.",
      "1× medalla Lega.",
      "1× visor M700 Vudu 1–6×24.",
      "2× cargador PMAG AC para M700.",
      "2× paquetes de munición 7,62×51 mm TCW SP."
    ],
    "youtube": "",
    "prereqIds": [
      "balancing-part-1"
    ],
    "position": {
      "x": 1201,
      "y": 244
    }
  },
  {
    "id": "to-great-heights-part-2",
    "nombre": "9. ¡A la cima! – Parte 2 (To Great Heights! – Part 2)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Ref quiere verte ganar en modos de equipo y objetivos: otra victoria en Arena, esta vez en TeamFight, BlastGang o CheckPoint.",
    "objetivos": [
      "Ganar 1 partida en modo TeamFight, BlastGang o CheckPoint en Arena."
    ],
    "recompensas": [
      "+6 500 EXP",
      "+0.03 reputación con Ref.",
      "52 monedas GP.",
      "1× fusil CMMG Mk47 Mutant (configuración básica).",
      "3× cargador AK US Palm AK30.",
      "3× paquetes de munición 7,62×39 mm PS gzh."
    ],
    "youtube": "",
    "prereqIds": [
      "to-great-heights-part-1"
    ],
    "position": {
      "x": 1435,
      "y": 244
    }
  },
  {
    "id": "to-great-heights-part-3",
    "nombre": "10. ¡A la cima! – Parte 3 (To Great Heights! – Part 3)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Prueba clave: ganar en Arena quedando al menos tercero en modos de equipo; es el paso necesario para desbloquear las transferencias Arena→Tarkov.",
    "objetivos": [
      "Ganar 1 partida quedando al menos 3.º en modo TeamFight, BlastGang o CheckPoint en Arena."
    ],
    "recompensas": [
      "+11 000 EXP",
      "+0.04 reputación con Ref.",
      "38 monedas GP.",
      "1× fusil de precisión DVL-10 Saboteur.",
      "2× cargador DVL-10 de 10 balas.",
      "2× paquetes de munición 7,62×51 mm TCW SP."
    ],
    "youtube": "",
    "prereqIds": [
      "to-great-heights-part-2"
    ],
    "position": {
      "x": 1666,
      "y": 244
    }
  },
  {
    "id": "to-great-heights-part-4",
    "nombre": "11. ¡A la cima! – Parte 4 (To Great Heights! – Part 4)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Ref quiere ver si de verdad eres una inversión rentable: te hace apostar 1 000 000₽ de tu saldo de EFT y además ganar una serie de partidas en Arena. Si pierdes demasiadas, la cadena falla y tienes que volver a intentarlo.",
    "objetivos": [
      "Entregar 1 000 000 rublos desde el saldo de EFT.",
      "Ganar 3 de un máximo de 6 partidas en modo TeamFight, BlastGang o CheckPoint en Arena.",
      "Condición de fallo: perder 4 partidas en esos modos antes de llegar a las 3 victorias."
    ],
    "recompensas": [
      "+12 000 EXP.",
      "+0.09 reputación con Ref.",
      "40 monedas GP.",
      "1 000 002 rublos.",
      "1× brazalete ARENA.",
      "1× subfusil HK MP7A1 (configuración básica).",
      "3× cargador HK MP7 4,6×30 de 30 balas.",
      "3× paquetes de munición 4,6×30 mm JSP SX."
    ],
    "youtube": "",
    "prereqIds": [
      "to-great-heights-part-3"
    ],
    "position": {
      "x": 1890,
      "y": 244
    }
  },
  {
    "id": "to-great-heights-part-5",
    "nombre": "12. ¡A la cima! – Parte 5 (To Great Heights! – Part 5)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Último escalón de la cadena ‘¡A la cima!’: tienes que encadenar dos victorias consecutivas en Arena en modos de equipo. Completarla desbloquea el patrocinio que permite el trueque del TWG (APOK Tactical Wasteland Gladius) en Ref LL2.",
    "objetivos": [
      "Ganar 2 partidas SEGUIDAS en modo TeamFight, BlastGang o CheckPoint en Arena."
    ],
    "recompensas": [
      "+21 000 EXP.",
      "+0.05 reputación con Ref.",
      "40 monedas GP.",
      "Desbloquea el trueque del TWG «APOK Tactical Wasteland Gladius» en Ref LL2."
    ],
    "youtube": "",
    "prereqIds": [
      "to-great-heights-part-4"
    ],
    "position": {
      "x": 2123,
      "y": 244
    }
  },
  {
    "id": "against-the-conscience-part-1",
    "nombre": "13. Contra la conciencia – Parte 1 (Against the Conscience – Part 1)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Empieza la parte ‘oscura’ de la historia de Ref. Te mandan investigar lo que le ocurrió al anterior campeón de la Arena, encontrando su apartamento en Dorms (Customs) y usando una llave especial que se consigue en la base de contrabandistas de Shoreline.",
    "objetivos": [
      "Localizar la habitación del antiguo campeón en Customs (Dorms de tres plantas).",
      "Averiguar qué le ocurrió al campeón.",
      "Sobrevivir y extraer de la localización.",
      "Opcional: localizar y obtener la llave en la base de contrabandistas de Shoreline (llave del encargado del dormitorio)."
    ],
    "recompensas": [
      "+11 700 EXP.",
      "50 000 rublos.",
      "1× chaleco portaplacas Osprey MK4A (A).",
      "1× fusil de asalto HK 416A5 (configuración básica).",
      "3× cargadores «HK Steel» para 5,56×45.",
      "3× paquetes de munición 5,56×45 mm MK318 SOST."
    ],
    "youtube": "",
    "prereqIds": [
      "create-a-distraction-part-1",
      "to-great-heights-part-5"
    ],
    "position": {
      "x": 2385,
      "y": 161
    }
  },
  {
    "id": "against-the-conscience-part-2",
    "nombre": "14. Contra la conciencia – Parte 2 (Against the Conscience – Part 2)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Después de descubrir la verdad sobre el antiguo campeón, Ref ‘canaliza’ tu crisis de conciencia en más violencia: te exige una matanza masiva en Arena para demostrar que sigues comprometido con el espectáculo.",
    "objetivos": [
      "Eliminar 100 enemigos en cualquier modo de juego de Arena (cualquier mapa y modo, sólo cuentan las muertes en Arena)."
    ],
    "recompensas": [
      "+23 000 EXP.",
      "+0.06 reputación con Ref.",
      "88 monedas GP.",
      "1× fusil de asalto SIG MCX-SPEAR 6,8×51 (configuración básica).",
      "3× cargadores AR-10 Lancer L7AWM de 20 balas.",
      "Varios lotes de munición 6,8×51 mm SIG FMJ para el MCX-SPEAR."
    ],
    "youtube": "",
    "prereqIds": [
      "against-the-conscience-part-1"
    ],
    "position": {
      "x": 2645,
      "y": 161
    }
  },
  {
    "id": "decisions-decisions",
    "nombre": "15. Decisiones, decisiones (Decisions, Decisions)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": 3,
    "descripcion": "Quest de elección final respecto a Ref. Tras completar la cadena con Fence, vuelves al escondite del campeón en Customs, recoges la información comprometida sobre Ref y decides entregársela a él (esta misión), a Fence (‘Entre dos fuegos’) o a Lightkeeper (‘Regalo sorpresa’). En PvE, entregársela a Ref te da el contenedor Theta y bastante reputación con él a costa de perderla con Fence.",
    "objetivos": [
      "Localizar y obtener la información comprometida sobre Ref en el escondite del antiguo campeón en Customs.",
      "Entregar la información encontrada a Ref."
    ],
    "recompensas": [
      "+18 500 EXP.",
      "+0.15 reputación con Ref.",
      "−0.15 reputación con Fence.",
      "72 monedas GP.",
      "1× contenedor seguro Theta."
    ],
    "youtube": "",
    "prereqIds": [
      "between-two-fires"
    ],
    "position": {
      "x": 980,
      "y": 339
    }
  },
  {
    "id": "postponed-reward",
    "nombre": "16. Recompensa diferida (Postponed Reward)",
    "trader": "Ref",
    "traderColor": "ref",
    "nivel": null,
    "descripcion": "Quest opcional de Ref ligada a la historia del contenedor Theta. Solo aparece como continuación de \"Regalo sorpresa\" (Lightkeeper), cuando entregas allí la información comprometida sobre Ref. A cambio de una medalla Lega, Ref termina cumpliendo su promesa y te entrega igualmente un contenedor Theta.",
    "objetivos": [
      "Entregar 1× medalla Lega a Ref."
    ],
    "recompensas": [
      "+0.01 reputación con Ref.",
      "1× contenedor seguro Theta."
    ],
    "youtube": "",
    "prereqIds": [
      "surprise-gift"
    ],
    "position": {
      "x": 3151,
      "y": 161
    }
  },
  {
    "id": "shipping-delay-part-2",
    "nombre": "1. Retraso del envío - Parte 2 (Shipping Delay - Part 2)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Primera misión directa del conductor del BTR. Debes reconocer el depósito ferroviario en Woods para localizar el envío de Prapor y completar también la tarea 'A Helping Hand' para Mechanic.",
    "objetivos": [
      "Localizar y reconocer los almacenes del depósito en Woods.",
      "Localizar y reconocer la oficina del depósito en Woods.",
      "Localizar y reconocer los garajes del depósito en Woods.",
      "Completar la misión 'A Helping Hand' de Mechanic."
    ],
    "recompensas": [
      "+0.01 reputación con BTR Driver.",
      "1× cartucho de señal reactivo RSP-30 (azul).",
      "1× consola de juego portátil Tetriz."
    ],
    "youtube": "",
    "prereqIds": [
      "a-helping-hand"
    ],
    "position": {
      "x": 508,
      "y": 8578.778076171875
    }
  },
  {
    "id": "hot-wheels",
    "nombre": "2. Ruedas calientes (Hot Wheels)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Misión de elección múltiple. El conductor del BTR necesita ruedas de repuesto: puedes marcar las ruedas correctas del BTR en Reserve, o equivocarte adrede en camiones de Customs para irte por la ruta alternativa con Ragman.",
    "objetivos": [
      "Localizar y marcar las ruedas de repuesto del BTR con una baliza MS2000.",
      "(Opcional) Completar el objetivo principal lo antes posible."
    ],
    "recompensas": [
      "+0.03 reputación con BTR Driver.",
      "1× filtro de potencia militar (Military power filter)."
    ],
    "youtube": "",
    "prereqIds": [
      "shipping-delay-part-2"
    ],
    "position": {
      "x": 741,
      "y": 8578.778076171875
    }
  },
  {
    "id": "hot-wheels-lets-try-again",
    "nombre": "3. Ruedas calientes - Otro intento (Hot Wheels - Let's Try Again)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Versión de repetición de Hot Wheels. Solo aparece si fallas la misión original marcando ruedas equivocadas en Customs. Esta vez el BTR Driver te manda directamente a Reserve a marcar las ruedas correctas.",
    "objetivos": [
      "Localizar y marcar las ruedas de repuesto del BTR con una baliza MS2000 en Reserve."
    ],
    "recompensas": [
      "+0.02 reputación con BTR Driver.",
      "3× lente NIXXOR."
    ],
    "youtube": "",
    "prereqIds": [
      "hot-wheels"
    ],
    "position": {
      "x": 980,
      "y": 8578.778076171875
    }
  },
  {
    "id": "swift-retribution",
    "nombre": "4. Represalia rápida (Swift Retribution)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Tras conseguir las ruedas, el conductor del BTR quiere vengarse de los Scavs que asaltaron su base. Toca limpiar parte de la reserva natural eliminando Scavs en Woods.",
    "objetivos": [
      "Eliminar 10 Scavs en Woods."
    ],
    "recompensas": [
      "+0.03 reputación con BTR Driver.",
      "1× llave 'Old house room key'."
    ],
    "youtube": "",
    "prereqIds": [
      "hot-wheels"
    ],
    "position": {
      "x": 980,
      "y": 8493
    }
  },
  {
    "id": "inevitable-response",
    "nombre": "5. Respuesta inevitable (Inevitable Response)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Continuación de la línea tras fallar Hot Wheels y hacer el segundo intento. El BTR Driver quiere que persigas a los saqueadores desde Woods hasta la base de Reserve usando el propio tránsito del BTR.",
    "objetivos": [
      "Eliminar 5 Scavs en Woods.",
      "Usar el tránsito del BTR desde Woods hacia Reserve.",
      "Eliminar 5 Scavs en Reserve."
    ],
    "recompensas": [
      "+0.02 reputación con BTR Driver.",
      "Recompensa en rublos (cantidad sujeta a cambios según parche)."
    ],
    "youtube": "",
    "prereqIds": [
      "hot-wheels-lets-try-again"
    ],
    "position": {
      "x": 1219,
      "y": 8578.778076171875
    }
  },
  {
    "id": "building-foundations",
    "nombre": "6. Construyendo cimientos (Building Foundations)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "El conductor del BTR quiere afianzar relaciones con los traders con los que hace negocios. Para ello te pide que vendas una cantidad importante de objetos a Prapor, Ragman y Peacekeeper.",
    "objetivos": [
      "Vender 50 objetos a Ragman (cualquier tipo excepto munición y pasamontañas blancos).",
      "Vender 50 objetos a Prapor (cualquier tipo excepto munición y pasamontañas blancos).",
      "Vender 50 objetos a Peacekeeper (cualquier tipo excepto munición y pasamontañas blancos)."
    ],
    "recompensas": [
      "+14 500 EXP.",
      "+0.01 reputación con BTR Driver.",
      "126 000 rublos.",
      "1× botella de aguardiente Fierce Hatchling moonshine."
    ],
    "youtube": "",
    "prereqIds": [
      "inevitable-response"
    ],
    "position": {
      "x": 1453,
      "y": 8578.778076171875
    }
  },
  {
    "id": "natural-exchange",
    "nombre": "7. Intercambio natural (Natural Exchange)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Para asegurar el suministro de combustible del BTR, el conductor quiere usar la base de contrabandistas de Shoreline como almacén. Tienes que esconder allí un par de depósitos metálicos de combustible.",
    "objetivos": [
      "Ocultar el primer depósito de combustible metálico en la base de contrabandistas de Shoreline.",
      "Ocultar el segundo depósito de combustible metálico en la base de contrabandistas de Shoreline."
    ],
    "recompensas": [
      "+26 800 EXP.",
      "+0.03 reputación con BTR Driver.",
      "96 000 rublos.",
      "1× tarjeta gráfica."
    ],
    "youtube": "",
    "prereqIds": [
      "building-foundations"
    ],
    "position": {
      "x": 1699,
      "y": 8578.778076171875
    }
  },
  {
    "id": "ask-for-directions",
    "nombre": "8. Pedir indicaciones (Ask for Directions)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "El conductor del BTR necesita rutas alternativas por Lighthouse. Te manda a marcar con balizas MS2000 los tramos clave del sendero de acantilado.",
    "objetivos": [
      "Localizar y marcar el primer tramo del sendero de acantilado con una baliza MS2000 en Lighthouse.",
      "Localizar y marcar el segundo tramo del sendero de acantilado con una baliza MS2000 en Lighthouse.",
      "Localizar y marcar el tercer tramo del sendero de acantilado con una baliza MS2000 en Lighthouse.",
      "Localizar y marcar el cuarto tramo del sendero de acantilado con una baliza MS2000 en Lighthouse."
    ],
    "recompensas": [
      "+13 200 EXP.",
      "+0.02 reputación con BTR Driver.",
      "90 000 rublos.",
      "2× batería de litio GreenBat."
    ],
    "youtube": "",
    "prereqIds": [
      "natural-exchange",
      "another-shipping-delay"
    ],
    "position": {
      "x": 1930,
      "y": 8578.778076171875
    }
  },
  {
    "id": "battery-change",
    "nombre": "9. Cambio de batería (Battery Change)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "El BTR necesita una batería militar nueva para seguir funcionando. Tienes que encontrar una batería 6-STEN-140-M y entregársela directamente al conductor del BTR.",
    "objetivos": [
      "Encontrar el objeto: batería militar 6-STEN-140-M.",
      "Entregar el objeto: batería militar 6-STEN-140-M al BTR Driver."
    ],
    "recompensas": [
      "+58 700 EXP.",
      "+0.03 reputación con BTR Driver.",
      "284 000 rublos.",
      "1× kit de reparación de armadura."
    ],
    "youtube": "",
    "prereqIds": [
      "ask-for-directions",
      "stick-in-the-wheel",
      "stabilize-business"
    ],
    "position": {
      "x": 2167,
      "y": 8578.778076171875
    }
  },
  {
    "id": "protect-the-sky",
    "nombre": "10. Proteger el cielo (Protect the Sky)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "El conductor está montando una nueva base y quiere protegerse de amenazas aéreas usando un sistema de interferencia electrónica. Debes recuperar un paquete con el equipo KOSA en un pequeño cementerio de Woods y entregárselo.",
    "objetivos": [
      "Localizar el paquete en el lugar especificado en Woods (zona del pequeño cementerio con camilla y cadáveres).",
      "Entregar el paquete al BTR Driver."
    ],
    "recompensas": [
      "+25 400 EXP.",
      "+0.02 reputación con BTR Driver.",
      "96 000 rublos.",
      "4× lote de munición .300 Blackout CBJ (50 uds).",
      "Desbloquea compra del fusil de asalto Aklys Defense Velociraptor .300 Blackout en Mechanic LL4.",
      "Desbloquea compra de la munición .300 Blackout CBJ en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "battery-change"
    ],
    "position": {
      "x": 2391,
      "y": 8578.778076171875
    }
  },
  {
    "id": "discombobulate",
    "nombre": "11. Discombobulate",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Misión avanzada del conductor del BTR. Forma parte del tramo final de su cadena: operaciones de guerra electrónica y sabotaje para confundir a las fuerzas enemigas. Aquí solo se incluye un resumen genérico para el árbol; consulta el juego o la wiki para los objetivos exactos.",
    "objetivos": [
      "Completar todos los objetivos de la misión «Discombobulate» tal y como aparecen en el cliente del juego (marcas, colocación de objetos, eliminaciones, etc.)."
    ],
    "recompensas": [
      "Reputación con BTR Driver.",
      "Recompensas en rublos y objetos (consultar juego/wiki para detalle actualizado)."
    ],
    "youtube": "",
    "prereqIds": [
      "protect-the-sky"
    ],
    "position": {
      "x": 2615,
      "y": 8578.778076171875
    }
  },
  {
    "id": "the-price-of-independence",
    "nombre": "12. El precio de la independencia (The Price of Independence)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Tramo casi final de la historia del BTR Driver: asegurar las rutas y posiciones que le permiten operar de forma independiente de otros grupos. De nuevo, esta entrada es un nodo de resumen para el árbol; los objetivos concretos (zonas a asegurar, enemigos a eliminar, etc.) deben seguirse en el juego.",
    "objetivos": [
      "Completar todos los objetivos de la misión «The Price of Independence» según se muestran en el cliente del juego."
    ],
    "recompensas": [
      "Reputación con BTR Driver.",
      "Recompensas en rublos y objetos (consultar juego/wiki para detalle actualizado)."
    ],
    "youtube": "",
    "prereqIds": [
      "discombobulate"
    ],
    "position": {
      "x": 2851,
      "y": 8578.778076171875
    }
  },
  {
    "id": "sensory-analysis-part-2",
    "nombre": "13. Análisis sensorial – Parte 2 (Sensory Analysis – Part 2)",
    "trader": "BTR Driver",
    "traderColor": "btr",
    "nivel": 0,
    "descripcion": "Conclusión de la rama conjunta BTR Driver / Ragman iniciada en «Análisis sensorial – Parte 1». Aquí terminas de calibrar el sistema de análisis sensorial del BTR en varias operaciones. Esta ficha es solo un resumen estructural para el árbol de quests.",
    "objetivos": [
      "Completar todos los objetivos de la misión «Sensory Analysis – Part 2» tal y como aparecen en el juego (uso de servicios del BTR, visitas a mapas, etc.)."
    ],
    "recompensas": [
      "Reputación con BTR Driver.",
      "Recompensas en rublos y objetos (consultar juego/wiki para detalle actualizado)."
    ],
    "youtube": "",
    "prereqIds": [
      "the-price-of-independence",
      "sensory-analysis-part-1"
    ],
    "position": {
      "x": 3104,
      "y": 8578.778076171875
    }
  },
  {
    "id": "information-source",
    "nombre": "1. Fuente de información (Information Source)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Primera misión de Lightkeeper. Quiere que uses las salidas de pago de varios mapas y que marques dos vehículos blindados Patrol-A en Rutas de Tarkov.",
    "objetivos": [
      "Sobrevivir y extraer de Woods mediante el vehículo Bridge V-Ex.",
      "Sobrevivir y extraer de Customs mediante el vehículo Dorms V-Ex.",
      "Sobrevivir y extraer de Interchange mediante el vehículo Power Station V-Ex.",
      "Sobrevivir y extraer de Streets of Tarkov mediante el taxi de Primorsky Ave (V-Ex).",
      "Sobrevivir y extraer de Ground Zero mediante el vehículo del puesto de control de policía.",
      "Localizar y marcar el primer vehículo blindado Patrol-A en Streets of Tarkov con una baliza MS2000.",
      "Localizar y marcar el segundo vehículo blindado Patrol-A en Streets of Tarkov con una baliza MS2000."
    ],
    "recompensas": [
      "+0.01 reputación con Lightkeeper.",
      "1× manual \"Materiales electrónicos avanzados\".",
      "Desbloquea el crafteo del procesador programable Virtex en el Centro de inteligencia nivel 2."
    ],
    "youtube": "",
    "prereqIds": [
      "getting-acquainted"
    ],
    "position": {
      "x": 3828,
      "y": 8057.222190856934
    }
  },
  {
    "id": "missing-informant",
    "nombre": "2. Informador desaparecido (Missing Informant)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Debes localizar el escondite de respaldo del confidente de Lightkeeper en Rutas de Tarkov, recuperar su diario y entregárselo.",
    "objetivos": [
      "Localizar el escondite de respaldo del informador en Streets of Tarkov.",
      "Obtener el diario del informador.",
      "Entregar la información a Lightkeeper."
    ],
    "recompensas": [
      "+0.01 reputación con Lightkeeper.",
      "1× placa de microcontroladores (Microcontroller board).",
      "Desbloquea trueque de placa de microcontroladores en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "information-source"
    ],
    "position": {
      "x": 4059,
      "y": 8057.222190856934
    }
  },
  {
    "id": "snatch",
    "nombre": "3. Entrada (Snatch)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Lightkeeper quiere que recuperes unos datos falsificados de los Rogues en Lighthouse, los intercambies por los originales en Reserve y le traigas la información real.",
    "objetivos": [
      "Sobrevivir y extraer de Lighthouse (cualquier extracción).",
      "Obtener la información falsificada en la base Rogue de Lighthouse.",
      "Obtener la información original en el taller de reparación (White Knight) de Reserve.",
      "Ocultar la información falsificada bajo el BMP-2 en lugar de la original en Reserve.",
      "Entregar la información original a Lightkeeper."
    ],
    "recompensas": [
      "+0.01 reputación con Lightkeeper.",
      "3× módulo de almacenamiento VPX Flash Storage Module.",
      "Desbloquea compra de la máscara balística Atomic Defense CQCM (negra) en Ragman LL4.",
      "Desbloquea el servicio de Lightkeeper \"Amuleto sagrado\"."
    ],
    "youtube": "",
    "prereqIds": [
      "missing-informant"
    ],
    "position": {
      "x": 4293,
      "y": 8057.222190856934
    }
  },
  {
    "id": "return-the-favor",
    "nombre": "4. Retribuir (Return the Favor)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Toca limpiar la zona de la montaña en Woods de operativos PMC curiosos y usarla para entregar discretamente documentos de TerraGroup al campamento USEC.",
    "objetivos": [
      "Eliminar 15 operadores PMC en la zona de la montaña en Woods.",
      "Ocultar los documentos TerraGroup \"Blue Folders\" en el lado del pasajero del SUV negro del campamento USEC en Woods.",
      "Ocultar los documentos TerraGroup \"Blue Folders\" en las cajas cercanas a la antena satélite del campamento USEC en Woods."
    ],
    "recompensas": [
      "+0.03 reputación con Lightkeeper.",
      "1× manual de circuitos integrados optoelectrónicos de silicio."
    ],
    "youtube": "",
    "prereqIds": [
      "snatch"
    ],
    "position": {
      "x": 4529,
      "y": 8057.222190856934
    }
  },
  {
    "id": "payback",
    "nombre": "5. Venganza (Payback)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Lightkeeper quiere un mensaje claro: eliminar a Glukhar y a su escolta en Reserve, señalar el éxito con una bengala amarilla y salir por Acantilado.",
    "objetivos": [
      "Localizar y eliminar a Glukhar en Reserve.",
      "Eliminar a 6 de los escoltas de Glukhar.",
      "Disparar una bengala de señal amarilla en la zona de la estación de radar de Reserve.",
      "Sobrevivir y extraer de Reserve por la extracción Cliff Descent."
    ],
    "recompensas": [
      "+0.03 reputación con Lightkeeper.",
      "1× placa de microcontroladores (Microcontroller board).",
      "3× escáner médico LEDX Skin Transilluminator.",
      "Desbloquea compra del respirador DevTac Ronin en Ragman LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "return-the-favor"
    ],
    "position": {
      "x": 4749,
      "y": 8057.222190856934
    }
  },
  {
    "id": "provocation",
    "nombre": "6. Provocación (Provocation)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Lightkeeper quiere que montes un show en Interchange imitando a Glukhar: matar enemigos alrededor de Kiba usando un ASh-12 y dejar un mensaje muy específico escondiendo comida y bebida en escondites secretos.",
    "objetivos": [
      "Eliminar 20 enemigos alrededor de la tienda Kiba Arms usando un ASh-12 en Interchange.",
      "Ocultar una salchicha de buey Salty Dog dentro de la tienda Kiba Arms.",
      "Ocultar una botella de aguardiente Fierce Hatchling moonshine dentro del escondite secreto asegurado.",
      "Ocultar un rollo de papel higiénico dentro del escondite secreto del contenedor.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+0.03 reputación con Lightkeeper.",
      "2× procesador programable Virtex.",
      "Desbloquea el crafteo del visor térmico FLIR RS-32 2.25–9× 35 mm 60 Hz en el Banco de trabajo nivel 3.",
      "Desbloquea el servicio de Lightkeeper «Soporte Rogue»."
    ],
    "youtube": "",
    "prereqIds": [
      "payback"
    ],
    "position": {
      "x": 4989,
      "y": 8057.222190856934
    }
  },
  {
    "id": "following-the-bread-crumbs",
    "nombre": "7. Siguiendo las migas (Following the Bread Crumbs)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Ahora toca limpiar pruebas en The Lab y Reserve: eliminar Raiders y localizar varias salas clave del laboratorio para recuperar una cinta de datos segura para Lightkeeper.",
    "objetivos": [
      "Eliminar 20 Raiders.",
      "Registrar la zona de pruebas de armas en The Lab.",
      "Registrar la sala de experimentos humanos en The Lab.",
      "Obtener la cinta de datos asegurada en la oficina del director en The Lab.",
      "Entregar la cinta segura a Lightkeeper."
    ],
    "recompensas": [
      "+0.04 reputación con Lightkeeper.",
      "1× Far-forward GPS Signal Amplifier Unit.",
      "Desbloquea trueque del Far-forward GPS Signal Amplifier Unit en Mechanic LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "provocation"
    ],
    "position": {
      "x": 5233,
      "y": 8057.222190856934
    }
  },
  {
    "id": "spotter",
    "nombre": "8. Observador (Spotter)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Preparas posiciones de francotirador para el tirador de Lightkeeper en Streets of Tarkov: dos puntos elevados sobre obras y cine, dejando en cada sitio equipamiento especializado.",
    "objetivos": [
      "Localizar una buena posición de francotirador en Concordia con vistas a la obra.",
      "Ocultar un moderador de sonido AI .338 LM Tactical cerca de la mesa roja en Concordia.",
      "Localizar una buena posición de francotirador en Primorsky con vistas al cine.",
      "Ocultar una mira térmica Trijicon REAP-IR bajo la cama de Makhor en Primorsky.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+0.04 reputación con Lightkeeper.",
      "1× placa de microcontroladores (Microcontroller board).",
      "Desbloquea crafteo de placa de microcontroladores en el Banco de trabajo nivel 3."
    ],
    "youtube": "",
    "prereqIds": [
      "following-the-bread-crumbs"
    ],
    "position": {
      "x": 5473,
      "y": 8057.222190856934
    }
  },
  {
    "id": "make-an-impression",
    "nombre": "9. Causar impresión (Make an Impression)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Antes de que el tirador de Lightkeeper se fíe de tus posiciones, quiere pruebas claras de que eres capaz de hacer contra-francotirador a larga distancia con cerrojo.",
    "objetivos": [
      "Alcanzar nivel 10 de habilidad con fusiles de cerrojo (Bolt-action Rifles).",
      "Eliminar 10 Scavs francotiradores desde más de 350 metros de distancia."
    ],
    "recompensas": [
      "+0.04 reputación con Lightkeeper.",
      "2× elemento de antena en fase (Phased array element).",
      "Desbloquea el crafteo de la mira térmica Trijicon REAP-IR en el Banco de trabajo nivel 3.",
      "Desbloquea el servicio de Lightkeeper «Soporte de Zryachiy»."
    ],
    "youtube": "",
    "prereqIds": [
      "spotter"
    ],
    "position": {
      "x": 5709,
      "y": 8057.222190856934
    }
  },
  {
    "id": "trouble-in-the-big-city",
    "nombre": "10. Problemas en la gran ciudad (Trouble in the Big City)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "La operación final en Streets of Tarkov: asegurar un cargamento crítico en el cruce principal, eliminar una gran cantidad de PMC hostiles, marcar el convoy y confirmar con una bengala amarilla.",
    "objetivos": [
      "Localizar el transporte que lleva el cargamento en Streets of Tarkov.",
      "Asegurar la zona eliminando 50 operadores PMC hostiles alrededor del convoy.",
      "Marcar la zona del cargamento con una baliza MS2000.",
      "Lanzar una bengala amarilla cerca del convoy blindado para confirmar que el trabajo está hecho.",
      "Sobrevivir y extraer de la localización."
    ],
    "recompensas": [
      "+0.05 reputación con Lightkeeper.",
      "1× Advanced current converter.",
      "Desbloquea trueque de Advanced current converter en Mechanic LL4.",
      "Desbloquea compra del fusil de asalto SIG MCX-SPEAR 6,8×51 en Peacekeeper LL4.",
      "Desbloquea compra del cargador AR-10 Lancer L7AWM de 25 balas en Peacekeeper LL4.",
      "Desbloquea compra de la munición 6,8×51 mm SIG Hybrid en Peacekeeper LL4."
    ],
    "youtube": "",
    "prereqIds": [
      "make-an-impression"
    ],
    "position": {
      "x": 5930,
      "y": 8057.222190856934
    }
  },
  {
    "id": "simple-side-job",
    "nombre": "11. Trabajo sencillo aparte (Simple Side Job)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Lightkeeper ha perdido una maleta de cargamento en Reserve y quiere que la recuperes discretamente y la dejes en la casa de los Scavs en Woods.",
    "objetivos": [
      "Localizar y obtener la maleta de cargamento de Lightkeeper en el tejado del hospital militar en Reserve.",
      "Esconder la maleta de cargamento en la casa de los Scavs en Woods."
    ],
    "recompensas": [
      "+0.02 reputación con Lightkeeper.",
      "1× transmisor de señal inalámbrico Military COFDM.",
      "1× lector UHF RFID.",
      "1× procesador programable Virtex."
    ],
    "youtube": "",
    "prereqIds": [
      "trouble-in-the-big-city"
    ],
    "position": {
      "x": 6163,
      "y": 8057.222190856934
    }
  },
  {
    "id": "order-from-outside",
    "nombre": "12. Orden del exterior (Order From Outside)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Orden especial coordinada con el BTR driver: recoger un inhibidor electrónico en Reserve y dejarlo preparado en Woods para una futura operación.",
    "objetivos": [
      "Localizar y obtener el inhibidor electrónico en el almacén electromecánico de Reserve.",
      "Esconder el dispositivo en la ubicación especificada en Woods."
    ],
    "recompensas": [
      "+0.02 reputación con Lightkeeper.",
      "1× transmisor de señal inalámbrico Military COFDM.",
      "1× lector UHF RFID.",
      "1× procesador programable Virtex."
    ],
    "youtube": "",
    "prereqIds": [
      "inevitable-response"
    ],
    "position": {
      "x": 3590,
      "y": 7745.777809143066
    }
  },
  {
    "id": "keepers-word",
    "nombre": "13. La palabra del Guardián (Keeper's Word)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Lightkeeper quiere enviar un mensaje muy claro a los vigilantes nocturnos de Tarkov: usarás los cuchillos de los sectarios para marcar tres lugares especiales en el Labyrinth bajo el balneario de Shoreline.",
    "objetivos": [
      "Depositar un Cuchillo de sectario en el primer lugar especial dentro de The Labyrinth.",
      "Depositar un Cuchillo de sectario en el segundo lugar especial dentro de The Labyrinth.",
      "Depositar un Cuchillo de sectario en el tercer lugar especial dentro de The Labyrinth."
    ],
    "recompensas": [
      "+0.03 reputación con Lightkeeper.",
      "1× procesador programable Virtex.",
      "1× bolsa organizadora S I C C.",
      "1× amuleto de Lightkeeper (amuleto sagrado)."
    ],
    "youtube": "",
    "prereqIds": [
      "order-from-outside",
      "knock-knock"
    ],
    "position": {
      "x": 3866,
      "y": 7745.777809143066
    }
  },
  {
    "id": "surprise-gift",
    "nombre": "14. Regalo sorpresa (Surprise Gift)",
    "trader": "Lightkeeper",
    "traderColor": "lightkeeper",
    "nivel": 0,
    "descripcion": "Parte final de la historia conjunta con Ref, Fence y la Arena. Vuelves al escondite del antiguo campeón de la Arena en Customs para encontrar información comprometida sobre Ref y entregársela a Lightkeeper.",
    "objetivos": [
      "Regresar al escondite del antiguo campeón de la Arena en Customs.",
      "Localizar y obtener la información comprometida sobre Ref.",
      "Entregar la información encontrada a Lightkeeper."
    ],
    "recompensas": [
      "+0.01 reputación con Lightkeeper.",
      "Recompensa en dólares (cantidad sujeta a cambios según parche)."
    ],
    "youtube": "",
    "prereqIds": [
      "against-the-conscience-part-2",
      "between-two-fires"
    ],
    "position": {
      "x": 2895,
      "y": 161
    }
  }
];
