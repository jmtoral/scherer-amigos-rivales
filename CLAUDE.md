# Proyecto: Amigos o Rivales de Julio Scherer Ibarra

## Descripción
Análisis del PDF de memorias de Julio Scherer Ibarra para extraer una tabla de
todos los personajes mencionados, clasificados por la opinión que Scherer tiene
de ellos, ordenados del que más detesta al que más aprecia.

## Contexto del autor
- **Julio Scherer Ibarra**: Exfuncionario público mexicano, abogado.
- Hijo de Julio Scherer García (legendario periodista mexicano, fundador de Proceso).
- Fue Consejero Jurídico de la Presidencia durante el gobierno de AMLO (2018-2024).
- Sus memorias contienen opiniones sobre políticos, funcionarios y figuras públicas.

## Convenciones del proyecto
- Idioma: Español (México).
- Los nombres deben escribirse completos la primera vez, luego se puede usar el apellido.
- Consolidar apodos y variantes de nombre en una sola entrada.
- Si Scherer menciona a alguien pero no emite opinión clara, clasificar como "Neutral".
- No inventar opiniones que no estén en el texto.

## Archivos
- `input/` - Aquí va el PDF de las memorias
- `output/` - Aquí se genera el xlsx final

## Herramientas preferidas
- Python 3 con pdfplumber para extracción de texto
- openpyxl para generar el Excel con formato
- No usar IA externa para el análisis, el propio Claude Code hace el análisis
