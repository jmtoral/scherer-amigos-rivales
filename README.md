# Amigos o Rivales: Análisis de "Ni venganza ni perdón"

Este repositorio contiene un análisis exhaustivo de las relaciones políticas y personales descritas por **Julio Scherer Ibarra** en sus memorias *"Ni venganza ni perdón"* (2025). 

El objetivo es visualizar el espectro de afectos del autor, desde sus enemigos más acérrimos hasta sus lealtades inquebrantables, utilizando Inteligencia Artificial para procesar el texto y herramientas web modernas para la presentación.

## 📊 Visualización Interactiva

El resultado final se puede explorar en la carpeta `visualization/`. 
Para ver el gráfico interactivo:
1. Abra el archivo `visualization/index.html` en su navegador web.
2. Explore el diagrama de enjambre ("beeswarm plot").
3. Pase el cursor sobre cada círculo para ver el detalle de la relación.

---

## 🤖 Metodología: La Estrategia de los "15 Agentes"

Debido a que el libro tiene una extensión considerable (~300 páginas), el análisis no pudo realizarse en una sola pasada debido a las limitaciones de contexto de los LLM (Modelos de Lenguaje). Para solucionar esto, se diseñó una arquitectura de procesamiento paralelo inspirada en el concepto de "agentes".

### 1. Extracción y Fragmentación (`extract_text.py`)
El primer paso fue convertir el PDF en texto plano manejable.
- Se utilizó la librería `pdfplumber` para una extracción precisa.
- El texto completo se dividió lógicamente en bloques o "chunks".

### 2. El Proceso de los 15 Agentes
Para analizar el texto con profundidad y precisión, simulamos el trabajo de **15 agentes de análisis distintos**, cada uno encargado de una sección específica del libro (aproximadamente 20 páginas por agente).

- **Agente 1 (Págs 1-20)**: Analizó los inicios del sexenio y los antecedentes familiares.
- **Agente 2 (Págs 21-40)**: Se enfocó en la formación del gabinete.
- ...
- **Agente 15 (Págs 281-300)**: Analizó las conclusiones y los conflictos finales (Gertz, Sánchez Cordero).

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
- **`visualization/`**: Carpeta autocontenida con la web app interactiva.

### Scripts de Procesamiento
| Archivo | Función |
|---------|---------|
| `extract_text.py` | Convierte PDF a texto y JSON. |
| `split_text.py` | Divide el texto en los bloques para los 15 agentes. |
| `generate_excel.py` | Contiene la "memoria" del análisis (los datos codificados) y genera el reporte final. |
| `visualization/extract_data_from_excel.py` | Puente que lee el Excel y genera `data.js` para la web. |

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

**Autor**: [Manuel Toral](https://github.com/jmtoral)  
**Co-autor (IA)**: Este proyecto, incluyendo el código, el análisis y esta documentación, fue asistido y generado por un agente de Inteligencia Artificial (Google DeepMind).
**Licencia**: MIT
