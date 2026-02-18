# Amigos o Rivales: Análisis de "Ni venganza ni perdón"

Este repositorio contiene un análisis exhaustivo de las relaciones políticas y personales descritas por **Julio Scherer Ibarra** en sus memorias *"Ni venganza ni perdón"* (2025). 

El objetivo es visualizar el espectro de afectos del autor, desde sus enemigos más acérrimos hasta sus lealtades inquebrantables, utilizando Inteligencia Artificial para procesar el texto y herramientas web modernas para la presentación.

## 📊 Visualización Interactiva

El resultado final se puede explorar en la carpeta `docs/`.
Para ver el gráfico interactivo:
1. Abra el archivo `docs/index.html` en su navegador web (o visite la GitHub Page del repo).
2. Explore el diagrama de enjambre ("beeswarm plot"). El **tamaño** de cada círculo refleja las páginas dedicadas al personaje.
3. Los **antagonistas centrales** (Ramírez Cuevas, Gertz Manero) se distinguen por un contorno punteado.
4. Pase el cursor sobre cada círculo para ver el detalle de la relación.
5. Debajo de la gráfica, una **lista de encargos** ("to-do list") recopila las tareas que AMLO le asignó a Scherer.

---

## 🤖 Metodología: La Estrategia de los "15 Agentes"

Debido a que el libro tiene una extensión considerable (~300 páginas), el análisis no pudo realizarse en una sola pasada debido a las limitaciones de contexto de los LLM (Modelos de Lenguaje). Para solucionar esto, se diseñó una arquitectura de procesamiento paralelo inspirada en el concepto de "agentes".

### 1. Extracción y Fragmentación (`extract_text.py`)
El primer paso fue convertir el PDF en texto plano manejable.
- Se utilizó la librería `pdfplumber` para una extracción precisa.
- El texto completo se dividió lógicamente en bloques o "chunks".

### 2. El Proceso de los 15 Agentes
Para analizar el texto con profundidad y precisión, simulamos el trabajo de **15 agentes de análisis distintos**, cada uno encargado de una sección específica del libro (aproximadamente 20 páginas por agente).

| Agente | Páginas | Contenido principal |
|:---:|:---:|:---|
| 1 | 1-20 | Presentación, familia Scherer García, orígenes políticos de AMLO, la campaña de 1988 con Cárdenas y Heberto Castillo. |
| 2 | 21-40 | Los años de Fox, el terrorismo fiscal de Gil Díaz, el desafuero de AMLO, la campaña de 2006 y el "peligro para México". |
| 3 | 41-60 | La derrota de 2006, la resistencia civil, Peña Nieto y el incidente en el restaurante, la relación con Ebrard. |
| 4 | 61-80 | Beatriz Gutiérrez Müller, la reconciliación con La Jornada, la elección del Estado de México (Delfina vs. Del Mazo). |
| 5 | 81-100 | La campaña 2018: selección de candidatos estatales (Oaxaca, Chiapas, Quintana Roo, Veracruz, Campeche). |
| 6 | 101-120 | La noche de la victoria, la formación del equipo de transición, Alfonso Romo, Durazo, la búsqueda de secretario de Hacienda. |
| 7 | 121-140 | El gabinete: Moctezuma (SEP y INEE), Villalobos (sanidad animal), Bartlett (CFE), Álvarez-Buylla (Conacyt), Romo, Salvador Cienfuegos. |
| 8 | 141-160 | La relación con la Suprema Corte, Arturo Zaldívar, la reforma judicial, el poder de la mañanera, López-Gatell y las primeras señales. |
| 9 | 161-180 | **La pandemia** (capítulo completo): López-Gatell, los militares, Sheinbaum vs. Salud federal, los ventiladores, Irma Sandoval, García Paniagua y García Harfuch. |
| 10 | 181-200 | El caso Cienfuegos, la DEA, Nahle y Dos Bocas, el deporte, **el glifosato y maíz transgénico**, la manipulación de Ramírez Cuevas en el T-MEC. |
| 11 | 201-220 | Jesús Ramírez Cuevas a fondo: la estructura mediática ilegítima, las filtraciones, el financiamiento oscuro, Clara Brugada vs. García Harfuch. |
| 12 | 221-240 | La fractura con la Corte (Norma Piña), Zaldívar, Sánchez Cordero, la salida de Urzúa, Bartlett y la reforma eléctrica, la Agencia de Aduanas. |
| 13 | 241-260 | Los fideicomisos, la persecución contra Scherer desde la FGR, Gertz Manero, la CNDH (Piedra Ibarra), la denuncia ante la CIDH. |
| 14 | 261-280 | Ancira y Altos Hornos, Interjet, los amigos personales, el Charolazo, Aristegui, Paulo Díez y la concesión ferroviaria. |
| 15 | 281-300 | Las demandas por daño moral, Gómez Bruera, las conclusiones, la despedida y el último informe presidencial. |

**Tarea de cada agente:**
Cada instancia de análisis recibió instrucciones estrictas (`prompt.txt`) para:
1. Identificar **entidades** (personas reales).
2. Extraer el **sentimiento** explícito (cita textual).
3. Clasificar la relación en una escala de -5 a +5.
4. Ignorar inferencias; basarse solo en el texto.

### 3. Consolidación (`generate_excel.py`)
Una vez que los 15 "bloques" fueron procesados, un proceso central (o "Agente Integrador") unificó los datos:
- **Deduplicación**: Se fusionaron entradas como "AMLO", "Andrés Manuel" y "el Presidente".
- **Resolución de Conflictos**: Si un personaje aparecía en varios bloques (ej. Olga Sánchez Cordero), se ponderaron todas las menciones para determinar el puntaje final.
- **Formateo**: Se generó el archivo `amigos_o_rivales_JSI.xlsx` con código de colores y filtros.

---

## 📂 Estructura del Proyecto

### Archivos Principales
- **`CLAUDE.md`**: El "cerebro" del proyecto. Contiene las reglas maestras, el contexto del autor y las definiciones de las categorías de sentimiento. Guía a la IA para mantener consistencia.
- **`input/`**: Directorio para el PDF original.
- **`output/`**: Destino de los reportes generados (Excel).
- **`docs/`**: Carpeta autocontenida con la web app interactiva (GitHub Pages).

### Scripts de Procesamiento
| Archivo | Función |
|---------|---------|
| `extract_text.py` | Convierte PDF a texto y JSON. |
| `split_text.py` | Divide el texto en los bloques para los 15 agentes. |
| `generate_excel.py` | Contiene la "memoria" del análisis (los datos codificados) y genera el reporte final. |
| `docs/extract_data.py` | Puente que lee `generate_excel.py` y genera `data.js` para la web. |

---

## 🌟 Escala de Clasificación

El espectro se define de la siguiente manera:

| Puntuación | Categoría | Descripción |
|:---:|:---|:---|
| **-5** | **Desprecio** | Enemistad abierta, acusaciones graves (ej. Gertz Manero, Gil Díaz). |
| **-4** | **Hostilidad** | Oposición activa, daño percibido (ej. Bartlett). |
| **-3** | **Crítica** | Juicios negativos, decepción (ej. Adán Augusto). |
| **-2** | **Desconfianza** | Relación tensa, reservas morales. |
| **-1** | **Indiferencia** | Menciones frías o distantes. |
| **0** | **Neutral** | Mención fáctica sin carga emocional. |
| **+1** | **Cordialidad** | Relación profesional correcta. |
| **+2** | **Aprecio** | Valoración positiva, elogios. |
| **+3** | **Admiración** | Respeto profundo, reconocimiento de virtudes. |
| **+4** | **Lealtad** | Vínculo inquebrantable (ej. AMLO). |
| **+5** | **Devoción** | Amor filial y veneración (Solo su padre). |

---

## 🙏 Agradecimientos

- **[Enrique Tejeda](https://x.com/enriquegtejeda)**: Por sus comentarios y observaciones sobre el balance de la tabla, la importancia del peso narrativo de los personajes, y la necesidad de vincular los temas de política pública (sanidad animal, INEE, pandemia, glifosato) con los actores correspondientes. Sus señalamientos mejoraron sustancialmente la v2 del análisis.

---

**Autor**: [Manuel Toral](https://github.com/jmtoral)
**Co-autor (IA)**: Este proyecto, incluyendo el código, el análisis y esta documentación, fue asistido y generado por agentes de Inteligencia Artificial (Google DeepMind y Claude Code).
**Licencia**: MIT
