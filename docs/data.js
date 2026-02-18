const personasData = [
    {
        "name": "Francisco Gil Díaz",
        "opinion": "Desprecio",
        "score": -5,
        "description": "Lo describe como 'malo, malísimo', que ejercía 'terrorismo fiscal'. Lo persiguió durante 5 años con 17 denuncias, intentó chantajearlo para controlar Proceso. En la UP le dijo que 'no tenía el alma podrida'.",
        "pages": "27-32, 203, 263-264, 284",
        "pageCount": 10,
        "isCentral": false
    },
    {
        "name": "Jesús Ramírez Cuevas",
        "opinion": "Desprecio",
        "score": -5,
        "description": "Lo califica de 'gran manipulador', 'personaje espantoso' que 'hizo mucho daño al Gobierno'. Lo acusa de operar la mañanera a su conveniencia, filtrar rumores, crear estructura mediática ilegítima, y reunirse con 'el rey del huachicol'. Asesoró la desastrosa defensa del T-MEC sobre glifosato y maíz transgénico sin tener formación legal, provocando un 'revés histórico para la soberanía alimentaria'. Convenció al presidente junto con Álvarez-Buylla de prohibir el glifosato sin sustituto, dañando gravemente la agricultura. Su nombre aparece en documentos judiciales de EE.UU.",
        "pages": "89, 127, 197-200, 201-221, 249, 271, 284",
        "pageCount": 30,
        "isCentral": true
    },
    {
        "name": "Alejandro Gertz Manero",
        "opinion": "Desprecio",
        "score": -5,
        "description": "Lo acusa de estar 'detrás de la persecución jurídica' en su contra, de actuar 'como extorsionador', de fabricar escándalos fallidos desde la FGR. Le dijo 'usted optó por tener fiscal enemigo'. Compara su lógica de chantaje con la de Gil Díaz. La confrontación con el Fiscal es uno de los hilos conductores de todo el libro.",
        "pages": "28, 108, 128-129, 253-258, 262, 276, 284-285",
        "pageCount": 14,
        "isCentral": true
    },
    {
        "name": "Hernán Gómez Bruera",
        "opinion": "Desprecio",
        "score": -5,
        "description": "Autor de un 'libro impúdico' y 'miserable', 'plagado de falsedades'. Lo acusa de cometer 'el delito de pornografía infantil' al revelar el caso de una menor. Lo demandó por daño moral.",
        "pages": "264, 272-273, 282",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Paulo Díez Gargari",
        "opinion": "Crítica",
        "score": -3,
        "description": "Lo califica de 'aberrante' y 'mercenario'. Lo acusa de difamar sin pruebas, de fraguar un plan con sobornos para revivir una concesión ferroviaria. Lo demandó por daño moral. Le dijo 'que se fuera a la chingada'. [Personaje marginal: aparece solo en las últimas páginas del libro.]",
        "pages": "277-282",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Manuel Bartlett",
        "opinion": "Hostilidad",
        "score": -4,
        "description": "Dice que 'perjudicó muchísimo al presidente', que 'amenazó de muerte a mi papá'. Su gestión en CFE costó 300 millones de dólares en un arbitraje. 'No había buenos abogados' en su jurídico. La reforma eléctrica fue declarada inconstitucional.",
        "pages": "123-125, 212, 233-238",
        "pageCount": 10,
        "isCentral": false
    },
    {
        "name": "Rutilio Escandón",
        "opinion": "Hostilidad",
        "score": -4,
        "description": "Lo califica como 'el peor candidato que nos tocó: fue pavoroso'. 'No quería salir de su casa', tenía un discurso 'de región cuatro', 'se movía como un soldado de madera'. 'Un fiasco' total.",
        "pages": "94-96",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Hugo López-Gatell",
        "opinion": "Hostilidad",
        "score": -4,
        "description": "Lo describe como 'personaje que hizo mucho daño', 'comunicador errático', 'funesto'. Lo acusa de impedir pruebas masivas, contradecirse sobre el tapabocas, adueñarse de la Cofepris. Dice que protegerlo fue una 'decisión pésima'. Subestimó la pandemia diciendo que 'no era una enfermedad grave', vendió mascarillas a China antes de necesitarlas, predijo máximo 60,000 muertos cuando fueron más de 600,000. Scherer le dedica un capítulo entero ('La pandemia') como ejemplo de la fórmula '90% lealtad, 10% capacidad'.",
        "pages": "158, 166-173, 197, 206, 271",
        "pageCount": 12,
        "isCentral": false
    },
    {
        "name": "Adán Augusto López Hernández",
        "opinion": "Crítica",
        "score": -3,
        "description": "Dice que 'hubiera preferido mil veces trabajar con Octavio que con Adán'. Destruyó manglar sin permisos, impulsó eliminar licitaciones, 'gobernó a su antojo'. Como secretario de Gobernación, la relación con la Corte se fracturó bajo su gestión.",
        "pages": "87, 94-96, 226, 231-233, 250, 270, 276-277",
        "pageCount": 12,
        "isCentral": false
    },
    {
        "name": "Elena Álvarez-Buylla",
        "opinion": "Crítica",
        "score": -3,
        "description": "La califica como 'un desastre desde el principio', 'confrontada con la comunidad científica'. 'Engañó al presidente y nos metió en graves problemas'. 'Quiso meter a la cárcel a los investigadores'. Junto con Jesús Ramírez, convenció al presidente de prohibir el glifosato sin sustituto viable; el Conacyt bajo su dirección 'no fue capaz de producir el producto que sustituiría al glifosato. Ni siquiera se acercó.' También impulsó la demanda contra el maíz transgénico que se perdió ante el panel del T-MEC.",
        "pages": "132-133, 197-199",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Rosario Robles",
        "opinion": "Crítica",
        "score": -3,
        "description": "Dice que 'fue una mujer apegada al dinero', que 'se descompuso' en el poder. 'Se involucró con personas que no le fueron totalmente leales'. También fue operadora electoral del PRI en el Estado de México.",
        "pages": "7, 21, 23, 36, 76",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Olga Sánchez Cordero",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Siempre había aspereza y fricción' entre ambos. La acusa de entregar una lista en su contra al presidente, de ser intermediaria en el caso Collado, y de alimentar embates mediáticos contra él. Apoyaba candidatos rivales de Zaldívar.",
        "pages": "108, 122, 137, 147, 153-154, 223-224, 237-238, 255-256, 284",
        "pageCount": 13,
        "isCentral": false
    },
    {
        "name": "Miguel Ángel Yunes Linares",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Lo presenta como adversario peligroso que mandó a Eva Cadena a calumniar a AMLO, que bloqueó camiones de campaña. Tenía una 'carpeta azul' con sus delitos pero 'era como de piedra'. Asociado con peligro físico.",
        "pages": "88, 98-99, 101-103",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Roberto Madrazo",
        "opinion": "Crítica",
        "score": -3,
        "description": "Le 'ganó la elección' a AMLO en Tabasco 1994 mediante 'una elección de Estado', con recursos públicos, padrón de funcionarios y operadores locales.",
        "pages": "15",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Enrique Peña Nieto",
        "opinion": "Crítica",
        "score": -3,
        "description": "'Echó a perder todo a partir de la Casa Blanca'. Lo increpó públicamente en un restaurante. Scherer lo confrontó de vuelta. 'Todo mundo empezó a desconfiar de él'. Asociado con operaciones electorales en Edomex.",
        "pages": "41, 54-57, 59-60, 64, 68, 76, 78-79, 103, 108, 126, 129, 140, 162-163",
        "pageCount": 19,
        "isCentral": false
    },
    {
        "name": "Javier Quijano",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Relación rota. Inicialmente amigo, pero lo acusó ante el presidente de intervenir en un asunto bancario. 'La relación está rota. Absolutamente.' Lo describe como 'abogado de derecha' que usaba cercanías como 'trampolín'.",
        "pages": "26, 37, 225, 269-271",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Jesús Ortega Martínez / 'los Chuchos'",
        "opinion": "Crítica",
        "score": -3,
        "description": "'Andrés Manuel quería el poder; los Chuchos, el dinero.' Dice que 'decir que apoyaban a Andrés Manuel es una falacia'. Querían jubilarlo.",
        "pages": "36-37, 52, 64",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Luis Echeverría",
        "opinion": "Crítica",
        "score": -3,
        "description": "Lo señala como responsable de la expulsión de su padre de Excélsior, junto con los mejores periodistas de su generación. Su comunicación se debía a su 'incapacidad para estarse tranquilo'.",
        "pages": "6, 159",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Felipe Calderón",
        "opinion": "Crítica",
        "score": -3,
        "description": "Beneficiario de la campaña de 'peligro para México' financiada por empresarios. 'Sí lastimó' a AMLO. Su gobierno incorporó burocracia al Servicio Civil como obstáculo. Fue responsable de la desaparición de Luz y Fuerza.",
        "pages": "36, 40-41, 43-44, 56, 115, 132, 144, 154, 156, 159, 161-162, 173, 210-211",
        "pageCount": 17,
        "isCentral": false
    },
    {
        "name": "Salomón Jara",
        "opinion": "Crítica",
        "score": -3,
        "description": "'Un personaje diametralmente distinto a Susana' Harp. En las giras 'le mostraban cartulinas ofensivas con ratas horribles'. Tenía 'un gran pleito con la Sección 22'.",
        "pages": "86, 92, 99",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "David Colmenares",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Dice que 'no ha sido todo lo correcto que debió ser'. Lo acusa de firmar un convenio sospechoso con Nahle sobre auditorías de la refinería con observaciones incongruentes.",
        "pages": "194",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Ana Gabriela Guevara",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'No le importaba el béisbol', era un obstáculo burocrático. Cuando 'decía que no, se frenaba la obra'. Había que invocar la autoridad del presidente para sortearla.",
        "pages": "129, 196-197",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Irma Eréndira Sandoval",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Produjo un proyecto de Ley de Austeridad 'muy controvertido' con disposiciones 'casi violatorias y atentatorias de la ley'. Propuestas inviables que generarían corrupción.",
        "pages": "171, 191-192",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Claudio X. González (padre)",
        "opinion": "Crítica",
        "score": -3,
        "description": "Lo confrontó directamente en el CCE: 'Usted sí pagó la campaña en 2006 contra López Obrador. Usted sí difamó e infamó a su familia, a su esposa, a sus hijos.'",
        "pages": "159-160",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Rocío Nahle",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Candidata fuerte y sólida, pero destruyó manglar sin permisos junto con Adán Augusto. Bartlett la manipulaba. 'Todo el mérito, o el demérito, se lo llevó Rocío completito.'",
        "pages": "98-99, 102, 194, 232, 237-238",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Rosario Piedra Ibarra",
        "opinion": "Crítica",
        "score": -3,
        "description": "La describe como 'inexperta en la materia' de derechos humanos. Bajo su presidencia la CNDH dio una respuesta absurda: consultó al acusado para determinar si había violación.",
        "pages": "258",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Enrique Molina",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Un empresario de un trato espantoso', 'un hombre de horrible trato'. Sin embargo, se negó a traicionarlo por principios éticos.",
        "pages": "27-28, 30",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Zedryk Raziel",
        "opinion": "Crítica",
        "score": -3,
        "description": "Lo demandó por un 'texto difamatorio'.",
        "pages": "282",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Georgina Zerga",
        "opinion": "Crítica",
        "score": -3,
        "description": "Demandada junto con Zedryk Raziel por un 'texto difamatorio'.",
        "pages": "282",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Marisela Morales",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Operadora del desafuero, luego procuradora con Calderón, cónsule en Milán, después impulsada por Morena a la Corte. 'Contradicciones de la vida.'",
        "pages": "36",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Jesús Murillo Karam",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Fue duro conmigo' al saludarlo. Lo denunció junto con Lerdo de Tejada por una llamada grabada.",
        "pages": "56-57, 60",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Josefina Vázquez Mota",
        "opinion": "Crítica",
        "score": -3,
        "description": "Dice que fue una 'candidatura débil'. El PAN con ella 'fue prácticamente acrítico con el PRI'. 'Se había desgastado mucho en la lucha interna'.",
        "pages": "54-55, 76-77, 281",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Erick Cisneros ('el Bola 8')",
        "opinion": "Crítica",
        "score": -3,
        "description": "'Hizo todos los desmanes posibles' como secretario de Gobierno de Veracruz. Terminó peleado con Nahle y fuera del gabinete.",
        "pages": "99",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Laura Beristáin",
        "opinion": "Crítica",
        "score": -3,
        "description": "'Lo más atrabancado del mundo'. Arrebató el micrófono para resaltar 'su propia figura. Lo demás no le importaba.'",
        "pages": "100",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Pedro Topete Vargas",
        "opinion": "Crítica",
        "score": -3,
        "description": "Socio de Paulo Díez en el esquema de la concesión ferroviaria, en contubernio con funcionarios para beneficiarse 'a costa del erario'.",
        "pages": "278-279",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "María Estela Ríos",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Elegirla como consejera jurídica 'no fue una buena elección'. Permitió que Jesús Ramírez la asesorara en la defensa ante el T-MEC con resultados desastrosos.",
        "pages": "200, 233",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Rosalinda López",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Tenía un poder real sobre Rutilio. Lo supeditaba, lo manipulaba.' Junto con Adán Augusto, gobernaban Chiapas y Tabasco.",
        "pages": "96",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Vicente Fox",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Había perdido el respeto de la gente', con una 'pavorosa encuestitis'. Dio margen a Gil Díaz para su terrorismo fiscal. Su administración era 'a contentillo', sin forma ni consistencia.",
        "pages": "22, 24, 27-30, 36, 38, 40, 45, 112, 115, 159, 203, 263",
        "pageCount": 15,
        "isCentral": false
    },
    {
        "name": "Alonso Ancira",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Se negó a entregar Altos Hornos pese a estar paralizada. Vendió Agronitrogenados a Pemex 'a un precio elevadísimo' en lo que se sospechaba era un fraude.",
        "pages": "264-265",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Raquel Buenrostro",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "Se opuso al proyecto que Scherer respaldaba, generó desavenencias. La función de ratificar nombramientos generó 'errores y abusos'. Conflictos por compras consolidadas.",
        "pages": "117, 205-206, 239-242",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Clara Brugada",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "No la ataca directamente pero la presenta como beneficiaria de la operación clientelar de Jesús Ramírez, candidata impuesta en lugar del ganador de la encuesta, Omar García Harfuch.",
        "pages": "210-211, 219",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Norma Piña",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "La asocia con la fractura de la relación entre la Corte y el Ejecutivo en la segunda mitad del sexenio. Mención relativamente neutral.",
        "pages": "151, 226, 229",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Alejandro Moreno ('Alito')",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'El más priista de los gobernadores.' 'Lo tenía todo controlado' en Campeche. 'Todos hablaron mal de Alito; había mucho temor.'",
        "pages": "87, 97, 101",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Ernesto Zedillo",
        "opinion": "Neutral",
        "score": 0,
        "description": "Mencionado contextualmente como presidente que no quería a Monreal como candidato, referencia temporal para reformas de seguridad.",
        "pages": "20, 27, 109, 140, 159, 179, 192",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Carlos Salinas de Gortari",
        "opinion": "Neutral",
        "score": 0,
        "description": "Reconoce que 'a través de Solidaridad tuvo gran interlocución con la población', pero mencionado como parte del 'complot' según AMLO. Neutral.",
        "pages": "27, 29, 35, 159, 255",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Ricardo Anaya",
        "opinion": "Neutral",
        "score": 0,
        "description": "Mencionado como candidato del PAN que 'enfocó su campaña en atacarse con Meade'. Sin opinión personal directa.",
        "pages": "76, 105",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "José Antonio Meade",
        "opinion": "Neutral",
        "score": 0,
        "description": "Lo cita respetuosamente reconociendo que si hubiera ganado 'el país nos habría reventado'. Neutral.",
        "pages": "105, 116, 164",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Alfonso Romo",
        "opinion": "Neutral",
        "score": 0,
        "description": "Presentado como coordinador del equipo, figura pragmática del círculo interno. Sin juicio positivo o negativo fuerte.",
        "pages": "85, 105, 107-109, 112, 121, 123, 125, 224, 234",
        "pageCount": 11,
        "isCentral": false
    },
    {
        "name": "Tatiana Clouthier",
        "opinion": "Neutral",
        "score": 0,
        "description": "'Hizo un buen papel' en la Cámara, pero en un episodio lo marginó. Evaluación mixta que se cancela.",
        "pages": "105, 108, 122, 147, 197",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Luis María Aguilar",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "Su trato 'era bastante duro'. No le puso lugar en el desayuno de la Corte. La relación con AMLO 'terminó muy mal'.",
        "pages": "153, 222",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Cuauhtémoc Cárdenas",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Gran luchador social', más institucional que AMLO. La campaña de 1988 fue 'verdadera hazaña' y llenó el Zócalo. Se le puede considerar 'héroe'.",
        "pages": "7, 14, 19-20, 23, 39, 47",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Alfredo del Mazo",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "Candidato del PRI que ganó gracias a operativo gubernamental, no por mérito propio.",
        "pages": "76-79",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Miguel Ángel Mancera",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Cometió el error de apoyar a los candidatos del PRD contra Morena'. AMLO le dijo: 'De cuándo acá el perro manda al amo.' La seguridad se deterioró durante su gobierno.",
        "pages": "26, 37, 47, 68, 73-75",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Mario Delgado",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Tenía una muy buena relación con Mario Delgado'. Había crecido políticamente, quería ser jefe de Gobierno.",
        "pages": "73-74, 122, 147, 220, 235",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Santiago Nieto",
        "opinion": "Neutral",
        "score": 0,
        "description": "Mencionado como director de la UIF que asistía al gabinete de seguridad. Sin juicio.",
        "pages": "136",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Bernardo Bátiz",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "AMLO 'siempre se quejó de que, por formalismos de Bátiz, Ahumada pudo salir adelante'. No logró judicializarlo.",
        "pages": "23, 35",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Esteban Moctezuma",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Muy buen tipo, muy razonable, trabajaba mucho en los diálogos.' Pero no tenía ánimo para empujar proyectos contra la burocracia. Junto con Scherer, plantearon al presidente conservar el instituto de evaluación educativa (INEE) con sus expertos en libros de texto y material didáctico, pero el presidente 'dijo que no era importante' y lo sustituyó por otro con gente de 'educación alternativa' que 'difícilmente eran expertos en educación'.",
        "pages": "107, 129-130, 196",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Alfonso Durazo",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un tipo con muy buen discurso y gran capacidad organizativa'. 'Creo que sí fue buen secretario de Seguridad'. 'Hacía un gran papel' en el gabinete. Buena relación personal.",
        "pages": "9, 21-22, 29-30, 108, 114-116, 128, 131, 138, 143, 145, 176-177",
        "pageCount": 16,
        "isCentral": false
    },
    {
        "name": "Dante Delgado",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Se había portado extraordinariamente bien con Andrés', 'nunca se negó a negociar, siempre ayudó'. Aunque reconoce su 'interés personal importante'.",
        "pages": "52-53, 147",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Alejandro Encinas",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Hizo un muy buen papel como suplente. Supo suavizar muchos temas.' Mantuvo distancia con Fox sin pelearse.",
        "pages": "38, 62",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Mauricio Kuri",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Una pieza fundamental para que esto saliera adelante' en la negociación de la Guardia Nacional desde el PAN.",
        "pages": "146-147",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Claudia Ruiz Massieu",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Muy buena negociadora: abogada asertiva, intuitiva y eficaz.' Reconoce su visión amplia del panorama.",
        "pages": "146-147",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Pedro Aspe",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Siempre fue muy generoso conmigo. Me apapachaba mucho.' Lo presenta como hombre lúcido. 'A quien yo quiero mucho.'",
        "pages": "22, 27-29, 115, 263-264",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Delfina Gómez",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Muy sencilla, muy modesta', 'dúctil al cambio, participativa'. La llevaron de 14 a 34 puntos en encuestas.",
        "pages": "76-80",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Leonel Cota",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Leal a sus principios', 'honesto', 'un hombre extraordinario'. 'Luchó hasta el último día por Andrés Manuel.'",
        "pages": "52",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Salvador Cienfuegos",
        "opinion": "Aprecio",
        "score": 2,
        "description": "Lo defiende apasionadamente como inocente. 'No había una sola prueba contra Cienfuegos.' El expediente de la DEA era 'un invento intransitable'.",
        "pages": "113, 140, 181-189",
        "pageCount": 11,
        "isCentral": false
    },
    {
        "name": "General Luis Cresencio Sandoval",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un hombre realmente profesional' con 'sensibilidad en derechos humanos'. Llevó 'información contundente' al presidente. Hizo 'un gran trabajo en la pandemia'.",
        "pages": "9, 113-114, 132, 136, 170, 177, 186, 206, 218, 239-240, 245",
        "pageCount": 13,
        "isCentral": false
    },
    {
        "name": "Víctor Villalobos",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Tenía muy claro lo que debía hacer', 'hombre muy eficaz'. Fue el primero en advertir que Álvarez-Buylla sería un desastre. Su consuegro. Defendió la inversión en sanidad animal argumentando que 'sin sanidad nos bloquearían la frontera con EE.UU.', pero el presidente 'decía que eso no se necesitaba, que solo era un gastadero de dinero'. 'Y eso fue, finalmente, lo que sucedió': se materializó el riesgo.",
        "pages": "121-122, 133, 197",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Santiago Levy",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un perfil social muy bueno', 'economista espléndido', creador de Progresa. 'Puede ayudarte muchísimo.' Lamenta que no aceptara ser secretario de Hacienda.",
        "pages": "109, 130",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Graciela Márquez",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Muy buena economista; además, es simpática y agradable. Hizo una buena labor.'",
        "pages": "130",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Jorge Alcocer",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un gran médico, una persona experta, un investigador.' Fue médico de cabecera de Rocío.",
        "pages": "130",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Jenaro Villamil",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Su parte del libro 'fue muy buena'. 'Escribía sobre lo que ocurría en Televisa y otros medios.'",
        "pages": "49-50",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Juan Luis González Alcántara",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un abogado de primer orden', 'con orgullo, fue mi maestro'. Tuvo la valentía de advertirle directamente al presidente que votaría en contra.",
        "pages": "108, 148-149, 229",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Margarita Ríos Farjat",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Persona muy sensata, muy buena abogada, muy competente.' 'Dura de carácter, fuerte.' Defendió su independencia.",
        "pages": "224, 229-230",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Yasmín Esquivel",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Recorrió todos los puestos' hasta la Corte. 'Hizo un trabajo espléndido.' Más receptiva a los pronunciamientos del Ejecutivo.",
        "pages": "229-230",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Loretta Ortiz",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Muchas veces escuchó bien las peticiones del Gobierno.' Actitud 'mucho menos beligerante que la de otros ministros.'",
        "pages": "230",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Verónica de Gives",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Una magnífica abogada', 'una penalista excelente'. Lamenta que no pudiera asumir la Consejería Jurídica.",
        "pages": "232-233",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Carlos Urzúa",
        "opinion": "Aprecio",
        "score": 2,
        "description": "Lo presenta con empatía como técnico que 'se quejaba amargamente' de las decisiones. 'Temblaba de coraje y de nervios.' Su renuncia fue consecuencia del conflicto.",
        "pages": "121, 130, 233-236",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Layda Sansores",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Muy querida y bien aceptada', con 'larga historia en Campeche'. 'Dicharachera, platicadora, con muy buen ambiente.'",
        "pages": "87, 97",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Manuel Velasco",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Siempre generoso con Andrés en todos los sentidos. Incapaz de cometer una trapacería.' 'Estuvo a la altura' con los maestros. No intervino en la elección.",
        "pages": "86-87, 95-96, 103",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Eduardo Ramírez ('Lalo')",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Candidato a senador buenísimo', 'construyó parte de la estructura', 'ayudó mucho', 'fue muy leal'. Hubiera sido mejor gobernador que Rutilio.",
        "pages": "95-96",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Rafael Marín Mollinedo",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un sujeto de primera, proveniente de la iniciativa privada.' 'Nos ayudó mucho a convencer a Mara Lezama.'",
        "pages": "88, 98",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Alfredo Higuera",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'De manera muy responsable' revisó el expediente Cienfuegos. 'Hizo un papel extraordinario en este caso.'",
        "pages": "187-188",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Alejandro Soberón",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Hizo un trabajo maravilloso en la CDMX para que no faltaran camas' durante la pandemia. 'Empresario muy bueno.'",
        "pages": "170",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Héctor Grisi",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Director global de Banco Santander. Le pidió consejo sobre la señora Botín. 'Quedó agradecido' y 'me lo correspondió.'",
        "pages": "269-270",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Julio Villarreal",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Generoso con sus afectos, muy amable, siempre cariñoso conmigo.' Respondió desde Croacia a las 5 am para ayudar con financiamiento de campaña.",
        "pages": "59-60, 265",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Jorge Carrasco Araizaga",
        "opinion": "Aprecio",
        "score": 2,
        "description": "Director de Proceso que confirmó ante Gertz que Scherer no intervenía en la revista. Defendió la independencia editorial.",
        "pages": "254",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Juan Antonio Pérez Simón",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Cariñoso como siempre', con gran colección de impresionistas. Destacó su generosidad al ofrecer prestar obra.",
        "pages": "132",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Humberto Artigas",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un hombre al que yo quiero muchísimo.' Arquitecto que aceptó ir a una reconciliación solo porque Scherer se lo pidió.",
        "pages": "271",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Ricardo Monreal",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'De los más experimentados en política', 'doctor en Derecho, aliado total'. Sin embargo, lo presionaba con 'recaditos para joderme' y lo acusó de ser parte de 'la tríada'. Relación ambivalente.",
        "pages": "9, 20, 73-74, 82, 84, 90-92, 99, 147",
        "pageCount": 11,
        "isCentral": false
    },
    {
        "name": "Claudia Sheinbaum",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Líder que venía desde abajo', 'académica destacada', 'mujer sensible con los mejores sentimientos'. 'Aprende rápido, domina muchos temas.' 'Hizo un trabajo muy eficiente' en la pandemia. Le escribió una nota de confianza.",
        "pages": "23, 25, 46-47, 61, 73, 90-92, 121, 127, 137, 145, 151, 170-174, 177, 180, 207, 211, 217, 220, 237, 264, 282",
        "pageCount": 28,
        "isCentral": false
    },
    {
        "name": "Marcelo Ebrard",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Un muy buen gobernador', administración 'ordenada, muy moderna'. 'No solo un político muy hábil, sino intelectualmente muy preparado.' 'Lo quiero y respeto mucho.' Gran mérito al declinar. Manejó bien el caso Cienfuegos.",
        "pages": "24, 34-35, 38, 40, 47-50, 55-56, 59, 62, 73-74, 82, 84, 116-117, 130, 170, 186, 188-190, 197, 220",
        "pageCount": 27,
        "isCentral": false
    },
    {
        "name": "Rosa Icela Rodríguez",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Persona excepcional con tremendo feeling político.' 'La quiero de toda la vida. Nos decíamos hermanitos.' AMLO dice que era 'la persona que mejor conocía la ciudad'.",
        "pages": "24-25, 127",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Susana Harp",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Generosísima, buenísima, muy inteligente y muy culta; conocedora del ámbito indígena.' En las giras 'le gritaban cosas buenas, le aplaudían'.",
        "pages": "86, 92, 99",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "César Yáñez",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Contribuía prodigiosamente', 'buen comunicador', 'persona muy generosa'. La decisión de apartarlo fue 'excesiva y lastimosa, porque si alguien era cercano a AMLO, ese era César'.",
        "pages": "39, 61, 67, 85, 104, 106, 116, 126-127",
        "pageCount": 9,
        "isCentral": false
    },
    {
        "name": "Alberto Rojas ('Rojitas')",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Indispensable, imprescindible, y con nosotros siempre fue muy cariñoso, muy gentil, muy generoso.'",
        "pages": "104, 106, 116",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Laura Nieto ('Laurita')",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Una señora maravillosa que se consagró en cuerpo y alma a su causa.' 'Era una parte esencial.'",
        "pages": "39, 47-48, 106, 108",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Arturo Zaldívar",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Un gran abogado, el mejor amparista del país', 'hizo un trabajo espléndido'. 'El único ministro que se la jugó con López Obrador.' Le lastima lo que dicen de él. 'Trato magnífico.'",
        "pages": "4, 9, 151-155, 222-226, 229",
        "pageCount": 13,
        "isCentral": false
    },
    {
        "name": "Carlos Montemayor",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Un tipazo', 'ese magnífico escritor', 'mi amigo'. Tuvieron 'una relación maravillosa.'",
        "pages": "50, 57, 180",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Gonzalo López Beltrán",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Lo quiero muchísimo', 'de una calidez, sencillez, humildad conmovedora'. 'Capacitador eficientísimo.' Aunque tenían tensiones por la visión de medios.",
        "pages": "89-90, 215",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Gabino Cué",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "AMLO lo describe como 'un tipo espléndido'. Scherer trabajó con él en Oaxaca. 'Platicamos largamente' y 'me fue muy bien'.",
        "pages": "62-64, 85",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Octavio Romero Oropeza",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Soy amigo de Octavio.' 'Hubiera preferido mil veces trabajar con Octavio que con Adán.' Hay que exculparlo del tema de Dos Bocas.",
        "pages": "24, 87, 121, 176, 237-238",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Omar García Harfuch",
        "opinion": "Admiración",
        "score": 4,
        "description": "'El personaje más valeroso que yo conozco.' 'De clase media, bien educado, de buenas formas.' 'Generosidad en el diálogo espléndida.' Ganó la encuesta por 20 puntos y 'debió haber sido jefe de Gobierno'. Lo conoce desde niño.",
        "pages": "8, 177-180, 210, 219-220",
        "pageCount": 8,
        "isCentral": false
    },
    {
        "name": "Cuauhtémoc Blanco",
        "opinion": "Indiferencia",
        "score": -1,
        "description": "'Pocas veces he visto a un hombre más popular.' Pero después lo describe con 'todos los inconvenientes que hoy le vemos'.",
        "pages": "110-111",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Beatriz Gutiérrez Müller",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Lindísima con mi papá', 'generosa, cariñosa, muy atenta', con 'agudeza intelectual'. 'Personaje fundamental en la vida de Andrés.' Contrataron juntos el seguro médico sin consentimiento de AMLO.",
        "pages": "12, 37, 39, 50-51, 62-63, 66-72, 102, 107, 131, 136, 154, 248-249, 270",
        "pageCount": 22,
        "isCentral": false
    },
    {
        "name": "Heberto Castillo",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Una de las figuras fundacionales de la izquierda', 'hombre excepcional', 'hermano mayor' de su padre. 'Muy bueno, muy generoso.' Su renuncia en 1988 fue 'un acierto brutal'.",
        "pages": "5, 11, 14, 17-19, 69",
        "pageCount": 7,
        "isCentral": false
    },
    {
        "name": "Javier García Paniagua",
        "opinion": "Admiración",
        "score": 4,
        "description": "'Hombre extraordinario, simpático, divertido, generoso', con 'gran talento político, de una fuerza abrumadora'. 'Me llamaba hijo.' Fue su jefe desde 1978.",
        "pages": "24, 177-180",
        "pageCount": 5,
        "isCentral": false
    },
    {
        "name": "Marcelino García Barragán",
        "opinion": "Admiración",
        "score": 3,
        "description": "'De una modestia abrumadora.' Le encargó a don Julio cuidar a su hijo. Pidió solo 'un uniforme y un ataúd de madera' para su funeral.",
        "pages": "177-179",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "María Sorté",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Mujer extraordinaria, gran actriz, cariñosa, simpática y sensible.' Madre de Omar García Harfuch.",
        "pages": "179",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Mónica Pretelini",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Mujer inteligente, culta, muy platicadora y desinhibida en lo político.' Su muerte 'me dolió mucho'.",
        "pages": "56",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Jorge Fernández Menéndez",
        "opinion": "Admiración",
        "score": 3,
        "description": "'Amigo entrañable' que condujo las conversaciones para crear el libro. Comparten pasiones comunes.",
        "pages": "5-10",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Rocío Beltrán Medina",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Mujer muy buena', 'la única persona que controlaba realmente a Andrés Manuel'. 'Alguien fundamental en su vida.'",
        "pages": "12, 17, 33",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Carmen Aristegui",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Hermosa relación' con su padre. Pero la critica por darle 'horas y horas' a Paulo Díez para difamarlo sin pruebas. Relación mixta con decepción.",
        "pages": "61, 216, 269, 281",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Alejandro Esquer",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Sonorense duro y rudo, pero buen hombre.' Encargado de toda la logística de AMLO.",
        "pages": "39, 67, 85, 106",
        "pageCount": 4,
        "isCentral": false
    },
    {
        "name": "Julio Scherer García (padre)",
        "opinion": "Devoción",
        "score": 5,
        "description": "Profunda admiración filial. 'El periodista más importante de México', 'hombre buenísimo'. 'Mi nombre es lo más valioso que poseo porque es el nombre intachable de mi padre.' Su legado es el eje moral de todo el libro.",
        "pages": "6, 11, 16-19, 30, 32-33, 49-51, 57-58, 62-63, 66-72, 89, 178, 215-216, 237, 251, 269, 281-283",
        "pageCount": 33,
        "isCentral": false
    },
    {
        "name": "Andrés Manuel López Obrador",
        "opinion": "Lealtad",
        "score": 4,
        "description": "'Compañero de travesía', 'mi hermano', 'cariño entrañable'. Lo admira como 'genio de la política' y líder transformador. Pero lo critica por dejarse manipular, no ser buen administrador, y la fórmula 90/10. 24 años de cercanísima amistad. 'La amistad verdadera sobrevive al odio y a los infundios.'",
        "pages": "Presente en prácticamente todas las páginas del libro",
        "pageCount": 300,
        "isCentral": false
    },
    {
        "name": "Federico Arreola",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Reconoce que hizo 'un trabajo muy importante con Andrés Manuel' y que 'se negó siempre' a aceptar dinero ilícito.",
        "pages": "161-162",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Miguel Ángel Granados Chapa",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Gran periodista', parte del grupo de los mejores de su generación.",
        "pages": "6, 16, 269",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Rosario Ibarra de Piedra",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Referente ético y moral' de AMLO, 'luchadora social desde los años setenta'. Su madre la llamaba 'mujer ejemplar'.",
        "pages": "258",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Guillermo Ortiz",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Le dijo algo 'muy cariñoso' sobre cómo trataba a Gil Díaz, 'que es lo que se merece'.",
        "pages": "31",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Carlos Imaz",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Hombre muy valeroso.' Lo defendió legalmente. Critica que AMLO no hizo nada por él: 'una de las grandes injusticias'.",
        "pages": "25-26",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Armando Garza",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Un gran empresario'. Aprendió de él la lección de que el presidente tiene derecho a gobernar como decida.",
        "pages": "134",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Rafael Ramírez Heredia",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Autor de 'El Rayo Macoy', 'muy divertido'. 'Le tenía mucho afecto a mi papá, y fue muy cariñoso conmigo.'",
        "pages": "269",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Manlio Fabio Beltrones",
        "opinion": "Neutral",
        "score": 0,
        "description": "'Siempre muy amable y atento.' Lo alcanzó después del incidente con Peña para decirle que 'no tenía sentido'.",
        "pages": "56-57",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Emilio Gamboa Patrón",
        "opinion": "Neutral",
        "score": 0,
        "description": "'Siempre muy amable y atento.'",
        "pages": "56-57",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Lázaro Cárdenas Batel",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Acompañó gestiones por orden presidencial. Confía en que confirmará sus dichos.",
        "pages": "265",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Roberto Alcántara",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Dueño de Viva Aerobús, con propuesta 'bastante razonable' para ayudar a los trabajadores de Interjet.",
        "pages": "266",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Ricardo Salinas Pliego",
        "opinion": "Neutral",
        "score": 0,
        "description": "Presente en el festejo íntimo de la noche de la elección. Parte del consejo empresarial. Sin opinión directa.",
        "pages": "108, 163, 168",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Daniel Chávez",
        "opinion": "Neutral",
        "score": 0,
        "description": "Presente en el festejo íntimo. Sin opinión directa.",
        "pages": "108",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Olegario Vázquez Aldir",
        "opinion": "Neutral",
        "score": 0,
        "description": "Presente en el festejo íntimo. Parte del consejo empresarial. Sin opinión directa.",
        "pages": "107, 163, 168",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Bernardo Gómez",
        "opinion": "Neutral",
        "score": 0,
        "description": "Presente en el festejo íntimo. Parte del consejo empresarial. Sin opinión directa.",
        "pages": "108, 163, 168",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Fidel Castro",
        "opinion": "Neutral",
        "score": 0,
        "description": "Mención referencial: AMLO es 'admirador de Fidel Castro hasta el tuétano'.",
        "pages": "12",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Enrique Krauze",
        "opinion": "Neutral",
        "score": 0,
        "description": "Mención puntual: calificó a AMLO como 'El mesías tropical'.",
        "pages": "12",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Octavio Paz",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'El gran Octavio Paz.' Citado en el epígrafe. Parte de los intelectuales expulsados de Excélsior.",
        "pages": "5-6, 202",
        "pageCount": 3,
        "isCentral": false
    },
    {
        "name": "Carmen Lira",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Directora de La Jornada. La reconciliación con su padre fue exitosa. 'Estoy seguro de que hoy lo recuerda con mucho cariño.'",
        "pages": "67, 70",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "José María Pérez Gay",
        "opinion": "Aprecio",
        "score": 2,
        "description": "'Hombre con experiencia diplomática, reconocido en medios intelectuales.' Lamenta su fallecimiento prematuro: 'Habría formado parte de su equipo más cercano.'",
        "pages": "35, 121",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Mauricio Vila",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Un candidatazo y luego un gran gobernador de Yucatán. Fue muy solidario con Andrés Manuel.'",
        "pages": "98, 101",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "León Krauze",
        "opinion": "Neutral",
        "score": 0,
        "description": "Sheinbaum reconoce que 'está haciendo un buen trabajo en un tema de migrantes'. Sin opinión de Scherer.",
        "pages": "217",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Luis Mandoki",
        "opinion": "Aprecio",
        "score": 2,
        "description": "Colaborador cercano y amigo. Fue a dar un abrazo a AMLO la mañana de la derrota. Le dio espacio a su testimonio sobre el Charolazo.",
        "pages": "44, 48-49, 60-61, 129",
        "pageCount": 6,
        "isCentral": false
    },
    {
        "name": "Elena Achar",
        "opinion": "Desconfianza",
        "score": -2,
        "description": "'Aprovechó mi distracción para grabar secretamente un audio' que detonó el escándalo del Charolazo.",
        "pages": "61",
        "pageCount": 1,
        "isCentral": false
    },
    {
        "name": "Enrique Álvarez del Castillo",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "'Asiduo a la pachanga' (lo dice 'con cariño'). Su frase sobre Proceso: 'No hay que salir ni para bien ni para mal.'",
        "pages": "58-59",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Graco Ramírez",
        "opinion": "Neutral",
        "score": 0,
        "description": "Acompañante y amigo con quien compartía comida. Lo animó a reconciliarse con Peña.",
        "pages": "56-57",
        "pageCount": 2,
        "isCentral": false
    },
    {
        "name": "Mara Lezama",
        "opinion": "Cordialidad",
        "score": 1,
        "description": "Conductora de radio exitosa, persuadida por Rafael Marín. 'Ya estaba decidido que Mara sería la candidata y ganaría.'",
        "pages": "98, 100",
        "pageCount": 2,
        "isCentral": false
    }
];
