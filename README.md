# Amigos o Rivales: Análisis de "Ni venganza ni perdón"

Visualización interactiva del espectro de relaciones políticas y personales descritas por **Julio Scherer Ibarra** en sus memorias *"Ni venganza ni perdón"* (2025).

[![Live Demo](https://img.shields.io/badge/demo-online-green)](https://jmtoral.github.io/scherer-amigos-rivales/)

## 🌐 Demo en Vivo

Explora la visualización interactiva aquí:  
👉 **[https://jmtoral.github.io/scherer-amigos-rivales/](https://jmtoral.github.io/scherer-amigos-rivales/)**

---

## 📖 Sobre el Proyecto

El objetivo de este proyecto es transformar las 300+ páginas del libro en datos estructurados para visualizar el "mapa de afectos" del autor. Utilizando **Inteligencia Artificial**, analizamos cómo Scherer describe a cada personaje, desde sus enemigos más acérrimos (puntuación -5) hasta sus lealtades inquebrantables (+5).

### La Visualización
El resultado es un **diagrama de enjambre interactivo** (Beeswarm Plot) donde:
- **Posición**: Horizontalmente, de izquierda (Enemigos/Rojo) a derecha (Amigos/Verde).
- **Interacción**: Al pasar el cursor, se revela la ficha completa del personaje con citas textuales y referencias de página.
- **Búsqueda**: Permite filtrar rápidamente para encontrar a actores políticos específicos.

---

## 🤖 Metodología: La Estrategia de los "15 Agentes"

Para superar las limitaciones de contexto de los modelos de lenguaje (LLM) al procesar un libro entero, diseñamos una arquitectura de **procesamiento paralelo**:

1.  **Fragmentación**: Dividimos el libro en 15 bloques de ~20 páginas.
2.  **Agentes Especializados**: Simulamos 15 agentes de análisis independientes. Cada uno recibió instrucciones estrictas (`prompt.txt`) para extraer únicamente:
    *   Entidades (Personas).
    *   Opinión explícita (Citas textuales).
    *   Puntuación (-5 a +5).
3.  **Consolidación**: Un proceso integrador unificó los resultados, resolvió duplicados y promedió las puntuaciones de personajes recurrentes.

---

## �️ Instalación y Uso Local

Si prefieres ejecutar el análisis o la visualización en tu propia máquina:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/jmtoral/scherer-amigos-rivales.git
    cd scherer-amigos-rivales
    ```

2.  **Instalar dependencias**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Ejecutar el análisis** (opcional):
    Si deseas reprocesar el texto o generar un nuevo Excel:
    ```bash
    ./run_analysis.bat
    ```

4.  **Ver la visualización**:
    Simplemente abre el archivo `docs/index.html` en tu navegador.

---

## 📂 Estructura del Repositorio

- **`docs/`**: Contiene la aplicación web (HTML/JS/CSS). En GitHub Pages, esta carpeta sirve el sitio.
- **`input/`**: Directorio para el PDF original.
- **`output/`**: Resultados del análisis (Excel).
- **`generate_excel.py`**: Script principal que contiene la base de datos de personajes y genera los reportes.
- **`CLAUDE.md`**: Definición del contexto y reglas del proyecto.

---

**Autor**: [Juan Manuel Toral](https://github.com/jmtoral)  
**Licencia**: MIT
