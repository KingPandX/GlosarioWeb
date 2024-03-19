import Term from "./Term"

interface TermProps {
    letter: number;
}

interface defparams {
    title: string;
    description: string;

}

export default function TermList({letter}: TermProps) {

    const definitions = {
        "*": [
          {
            "title": "ACID Properties (Propiedades ACID)",
            "description": " Características clave de una transacción de base de datos: Atomicidad, Consistencia, Aislamiento y Durabilidad."
          },
          {
            "title": "Aggregate Function (Función de Agregación)",
            "description": "Función usada en bases de datos para resumir múltiples filas en una tabla en un solo valor."
          },
          {
            "title": "Attribute (Atributo)",
            "description": "Característica individual que describe un aspecto específico de una entidad en una base de datos."
          },
          {
            "title": " Atomicity (Atomicidad)",
            "description": "Propiedad de una transacción que garantiza que todas las operaciones se completen con éxito o no se realicen en absoluto."
          },
          {
            "title": "Authorization (Autorización)",
            "description": "Proceso de otorgar o restringir acceso a ciertos usuarios a ciertas partes de una base de datos."
          },
          {
            "title": "Availability (Disponibilidad)",
            "description": "Una de las características clave de una base de datos que garantiza que los sistemas de base de datos estén disponibles y accesibles para los usuarios cuando se necesiten."
          },
          {
            "title": "Backup (Respaldo)",
            "description": "Proceso de copiar datos como medida de seguridad para evitar pérdida de información."
          },
          {
            "title": "Binary Large Object (Objeto Binario Grande)",
            "description": "Tipo de dato utilizado para almacenar información binaria de gran tamaño en una base de datos."
          },
          {
            "title": "Bit (Bit)",
            "description": "La unidad más pequeña de información en informática, puede tener un valor de 0 o 1."
          },
          {
            "title": "Blob (Binary Large Object)",
            "description": "Tipo de dato en una base de datos utilizado para almacenar datos binarios como imágenes, sonido o video."
          },
          {
            "title": "Block (Bloque)",
            "description": "Unidad de almacenamiento básica en una base de datos, generalmente compuesto por múltiples registros."
          },
          {
            "title": "B-tree (Árbol B)",
            "description": "Estructura de datos utilizada para organizar y almacenar índices en una base de datos."
          },
          {
            "title": "Cardinality (Cardinalidad)",
            "description": "Número de relaciones que pueden existir entre dos entidades en una relación de base de datos."
          },
          {
            "title": "Clustering (Agrupación)",
            "description": "Técnica en la que los datos relacionados físicamente se almacenan juntos en un disco."
          },
          {
            "title": "Column (Columna)",
            "description": "Unidad básica de organización de datos en una tabla de base de datos, también conocida como campo."
          },
          {
            "title": "Commit (Confirmar)",
            "description": "Operación en una base de datos que hace permanente un conjunto de transacciones."
          },
          {
            "title": "Concurrency Control (Control de Concurrencia)",
            "description": "Mecanismos utilizados para garantizar la integridad de los datos cuando múltiples usuarios acceden simultáneamente a una base de datos."
          },
          {
            "title": "Consistency (Consistencia)",
            "description": "Una de las propiedades ACID que garantiza que la base de datos siempre se encuentra en un estado válido."
          },
          {
            "title": "Data Dictionary (Diccionario de Datos)",
            "description": "Registro centralizado de información sobre los datos de una base de datos."
          },
          {
            "title": "Data Definition Language (DDL) (Lenguaje de Definición de Datos)",
            "description": "Componente de SQL que permite definir la estructura de la base de datos."
          },
          {
            "title": "Data Manipulation Language (DML) (Lenguaje de Manipulación de Datos)",
            "description": "Componente de SQL que permite agregar, modificar, eliminar y consultar datos en una base de datos."
          },
          {
            "title": "Data Model (Modelo de Datos)",
            "description": "Representación abstracta y simplificada de la estructura de una base de datos."
          },
          {
            "title": "Data Redundancy (Redundancia de Datos): ",
            "description": "Presencia de datos duplicados en una base de datos."
          },
          {
            "title": "Database (Base de Datos):",
            "description": "Colección estructurada de datos que se almacenan electrónicamente en un sistema informático."
          },
          {
            "title": "Entity (Entidad)",
            "description": "Objeto o concepto en el mundo real que se puede identificar y almacenar en una base de datos."
          },
          {
            "title": "Entity-Relationship Diagram (Diagrama de Entidad-Relación)",
            "description": "Representación gráfica de las relaciones entre entidades en una base de datos."
          },
          {
            "title": "Entry (Entrada)",
            "description": "Cada fila en una tabla de base de datos se considera una entrada que representa un solo conjunto de datos."
          },
          {
            "title": "Eventual Consistency (Consistencia Eventual)",
            "description": "Modelo de consistencia en bases de datos distribuidas que garantiza que todos los nodos en la red eventualmente llegarán a un estado consistente."
          },
          {
            "title": "Extraction, Transformation, Loading (ETL) (Extracción, Transformación, Carga)",
            "description": "Proceso utilizado para mover datos desde múltiples fuentes a una base de datos."
          },
          {
            "title": "Exclusive Lock (Bloqueo Exclusivo)",
            "description": "Tipo de bloqueo en una base de datos que evita que otros usuarios modifiquen los mismos datos al mismo tiempo."
          },
          {
            "title": "Field (Campo)",
            "description": "Se refiere a una columna individual en una tabla de base de datos que contiene un tipo específico de dato."
          },
          {
            "title": "Foreign Key (Clave Foránea)",
            "description": "Campo en una tabla que hace referencia a la clave principal de otra tabla para establecer una relación."
          },
          {
            "title": "Free-List (Lista Liberada)",
            "description": "Mecanismo utilizado para administrar el espacio de almacenamiento fragmentado en una base de datos."
          },
          {
            "title": "Full Backup (Copia de Seguridad Completa)",
            "description": "Respaldo de todos los datos en una base de datos en un momento específico."
          },
          {
            "title": "Functional Dependency (Dependencia Funcional)",
            "description": "Relación en la que el valor de un atributo determina el valor de otro atributo en una base de datos."
          },
          {
            "title": "Full-Text Search (Búsqueda de Texto Completo)",
            "description": "Método que permite buscar texto en base de datos de forma más amplia que una búsqueda estándar."
          },
          {
            "title": "Granularity (Granularidad)",
            "description": "Tamaño de los datos almacenados en una base de datos."
          },
          {
            "title": "Graph Database (Base de Datos de Grafos)",
            "description": "Tipo de base de datos diseñada para trabajar con datos estructurados en forma de grafo."
          },
          {
            "title": "Group By (Agrupar Por)",
            "description": "Cláusula utilizada en consultas SQL para agrupar filas de datos según un criterio específico."
          },
          {
            "title": "GUI (Graphical User Interface) (Interfaz Gráfica de Usuario)",
            "description": "Forma visual de interactuar con una base de datos."
          },
          {
            "title": "Global Temporary Table (Tabla Temporal Global)",
            "description": "Tabla en una base de datos que es visible para todos los usuarios y existe por un tiempo limitado."
          },
          {
            "title": "Gigabyte (Gigabyte)",
            "description": "Unidad de medida que representa aproximadamente mil millones de bytes."
          },
          {
            "title": "High Availability (Alta Disponibilidad)",
            "description": "Característica que garantiza que una base de datos esté accesible en todo momento, incluso en caso de fallas."
          },
          {
            "title": "Hash Join (Unión por Hash)",
            "description": "Algoritmo de unión utilizado en bases de datos para combinar grandes conjuntos de datos."
          },
          {
            "title": "Hierarchical Database (Base de Datos Jerárquica)",
            "description": "Tipo de base de datos donde la información se organiza en una estructura de árbol."
          },
          {
            "title": "Heap Table (Tabla sin Ordenación)",
            "description": "): Estructura de datos básica en una base de datos que no está ordenada físicamente."
          },
          {
            "title": "Heterogeneous Database (Base de Datos Heterogénea)",
            "description": "Base de datos que combina múltiples tipos de bases de datos en un solo sistema."
          },
          {
            "title": "HIPAA (Health Insurance Portability and Accountability Act) (Ley de Transferibilidad y Responsabilidad del Seguro de Salud)",
            "description": "Legislación estadounidense que establece normas para proteger y asegurar la privacidad de la información médica del paciente."
          },
          {
            "title": "Index (Índice)",
            "description": "Estructura de la base de datos que mejora la velocidad de recuperación de datos."
          },
          {
            "title": "In-memory Database (Base de Datos en Memoria)",
            "description": "Tipo de base de datos que almacena datos principalmente en la memoria RAM en lugar de en el disco."
          },
          {
            "title": "Inconsistent Data (Datos Inconsistentes)",
            "description": "Información en una base de datos que contradice otras partes de la base de datos."
          },
          {
            "title": "Integrity Constraint (Restricción de Integridad)",
            "description": "Reglas que definen y garantizan la precisión y coherencia de los datos en una base de datos."
          },
          {
            "title": "Isolation (Aislamiento)",
            "description": "Propiedad de una transacción en una base de datos que garantiza que se ejecute de forma aislada de otras transacciones."
          },
          {
            "title": "Inverted Index (Índice Invertido)",
            "description": "Estructura de datos utilizada en motores de búsqueda y bases de datos para mejorar la velocidad de búsqueda de información."
          },
          {
            "title": "Join (Unión)",
            "description": "Operación en una base de datos que combina filas de una o más tablas según una condición específica."
          },
          {
            "title": "Journaling (Registro de Operaciones)",
            "description": "Técnica utilizada para mantener un registro de transacciones y actividades en una base de datos."
          },
          {
            "title": "JSON (JavaScript Object Notation)",
            "description": "Formato de intercambio de datos basado en texto que se utiliza en bases de datos y aplicaciones web."
          },
          {
            "title": "JDBC (Java Database Connectivity)",
            "description": "API de Java que facilita la interacción y conexión de aplicaciones Java con bases de datos."
          },
          {
            "title": "Journal (Registro)",
            "description": "Archivo que registra todas las modificaciones hechas en una base de datos para permitir la recuperación en caso de fallos."
          },
          {
            "title": "Job Queue (Cola de Trabajo)",
            "description": "Lista de tareas pendientes de ejecución en una base de datos."
          },
          {
            "title": "Key (Clave)",
            "description": "Campo o conjunto de campos que identifican de forma única un registro en una base de datos."
          },
          {
            "title": "Key-Value Store (almacenamiento Clave-Valor)",
            "description": "Tipo de base de datos NoSQL que almacena datos como pares de clave-valor."
          },
          {
            "title": "K-Means Clustering (Agrupamiento K-Means)",
            "description": "Algoritmo de agrupamiento utilizado en bases de datos para dividir conjuntos de datos en grupos más pequeños."
          },
          {
            "title": "Knowledge Base (Base de Conocimientos)",
            "description": "Base de datos que almacena información y conocimiento en una organización."
          },
          {
            "title": "KPI (Key Performance Indicator) (Indicador Clave de Rendimiento)",
            "description": "Métrica utilizada para medir el desempeño y éxito de una organización."
          },
          {
            "title": "Kilobyte (Kilobyte)",
            "description": "Unidad de medida que representa aproximadamente mil bytes."
          },
          {
            "title": "Lock (Bloqueo)",
            "description": "Método utilizado en bases de datos para limitar el acceso a datos y evitar conflictos."
          },
          {
            "title": "Log (Registro)",
            "description": "Archivo que registra operaciones y transacciones en una base de datos."
          },
          {
            "title": "Local Database (Base de Datos Local)",
            "description": "Base de datos que se ejecuta y almacena datos en un dispositivo de usuario local."
          },
          {
            "title": "Logical Database (Base de Datos Lógica)",
            "description": "Vista lógica de los datos almacenados en una base de datos que oculta la estructura física subyacente."
          },
          {
            "title": "Lookup Table (Tabla de Búsqueda)",
            "description": "Tabla en una base de datos que se utiliza para buscar valores de referencia."
          },
          {
            "title": "Load Balancing (Balanceo de Carga)",
            "description": "Método utilizado para distribuir de manera equitativa la carga de trabajo entre servidores en una base de datos distribuida."
          },
          {
            "title": "Metadata (Metadatos)",
            "description": "Información sobre los datos almacenados en una base de datos que describe su estructura y características."
          },
          {
            "title": "Multi-Tenancy (Multiinquilino)",
            "description": "Característica de bases de datos que permite a múltiples inquilinos compartir una sola instancia de base de datos."
          },
          {
            "title": "Multi-Model Database (Base de Datos Multi-Modelo)",
            "description": "Tipo de base de datos que admite múltiples modelos de datos en un solo motor."
          },
          {
            "title": "Master Data (Datos Maestros)",
            "description": "Datos críticos y comunes utilizados en toda una organización que se almacenan en una ubicación central."
          },
          {
            "title": "MapReduce (Mapa-Reduce)",
            "description": "Proceso de procesamiento de datos utilizado para la distribución y paralelismo en bases de datos distribuidas."
          },
          {
            "title": "MySQL (MySQL)",
            "description": "Sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado."
          },
          {
            "title": "Nesting (Anidación)",
            "description": "Proceso de incluir una consulta dentro de otra en una base de datos."
          },
          {
            "title": "Normalization (Normalización)",
            "description": "Proceso de organizar estructuras de bases de datos para reducir la redundancia y mejorar la integridad de los datos."
          },
          {
            "title": "NoSQL (No Solo SQL)",
            "description": "Tipo de base de datos que no sigue el modelo relacional tradicional y se utiliza para grandes volúmenes de datos no estructurados."
          },
          {
            "title": "Null (Nulo)",
            "description": "Valor especial que indica la ausencia de datos en una base de datos."
          },
          {
            "title": "Network Model (Modelo de Red)",
            "description": "Modelo de base de datos que organiza los datos en forma de grafo en lugar de tablas."
          },
          {
            "title": "Normalization Forms (Formas Normales de Normalización)",
            "description": "Reglas y estándares utilizados para normalizar bases de datos y mejorar la integridad de los datos."
          },
          {
            "title": "OLAP (Online Analytical Processing)",
            "description": "Proceso de análisis interactivo de múltiples dimensiones de datos en una base de datos."
          },
          {
            "title": "Outer Join (Unión Externa)",
            "description": "Operación en una base de datos que combina filas de dos tablas, incluidas las filas que no tienen correspondencias en la otra tabla."
          },
          {
            "title": "One-to-Many Relationship (Relación de Uno a Muchos)",
            "description": "Tipo de relación entre tablas en una base de datos en la que una fila de una tabla se relaciona con múltiples filas de otra tabla."
          },
          {
            "title": "Optimization (Optimización)",
            "description": "Proceso de ajustar y mejorar la estructura y el rendimiento de una base de datos para una mayor eficiencia."
          },
          {
            "title": "Object-Oriented Database (Base de Datos Orientada a Objetos)",
            "description": "Tipo de base de datos que almacena y manipula datos como objetos de programación."
          },
          {
            "title": "OLTP (Online Transaction Processing)",
            "description": "Proceso de transacciones en tiempo real en una base de datos relacional."
          },
          {
            "title": "Primary Key (Clave Primaria)",
            "description": "Campo o conjunto de campos en una tabla de base de datos que identifica de forma única cada registro."
          },
          {
            "title": "Partitioning (Particionamiento)",
            "description": "División de tablas grandes en segmentos más pequeños para mejorar la administración y el rendimiento de la base de datos."
          },
          {
            "title": "Physical Database (Base de Datos Física)",
            "description": "Physical Database (Base de Datos Física)"
          },
          {
            "title": "Python Database API (DB-API)",
            "description": "Estándar de Python para interactuar con bases de datos relacionales."
          },
          {
            "title": "Polyglot Persistence (Persistencia Políglota)",
            "description": "Uso de múltiples tipos de bases de datos para manejar diferentes aspectos de una aplicación."
          },
          {
            "title": "Query Plan (Plan de Consulta)",
            "description": "Estrategia de ejecución de una consulta en una base de datos para recuperar datos de manera eficiente."
          },
          {
            "title": "Query Optimization (Optimización de Consulta)",
            "description": "Proceso de ajustar consultas para mejorar la eficiencia y el rendimiento de la base de datos."
          },
          {
            "title": "Quiet Mode (Modo Silencioso)",
            "description": "Estado de funcionamiento de una base de datos en el que no se aceptan o procesan solicitudes de los usuarios."
          },
          {
            "title": "Queue (Cola)",
            "description": "Mecanismo utilizado para almacenar tareas en una base de datos de manera ordenada y secuencial."
          },
          {
            "title": "Quota (Cuota)",
            "description": "Límite establecido en una base de datos que restringe la cantidad de almacenamiento o procesamiento disponible para un usuario."
          },
          {
            "title": "Quick Response (Respuesta Rápida)",
            "description": "Capacidad de una base de datos para entregar resultados de consultas rápidamente."
          },
          {
            "title": "Relational Database (Base de Datos Relacional)",
            "description": "Tipo de base de datos que organiza los datos en tablas relacionadas."
          },
          {
            "title": "Row (Fila)",
            "description": "Un registro en una tabla de base de datos que representa una única instancia de datos."
          },
          {
            "title": "Replication (Replicación)",
            "description": "Proceso de copiar y distribuir datos de una base de datos a múltiples ubicaciones para soportar alta disponibilidad y recuperación."
          },
          {
            "title": "Rollback (Reversión)",
            "description": "Operación en una base de datos que revierte una transacción a un estado anterior."
          },
          {
            "title": "Recovery (Recuperación)",
            "description": "Proceso de restaurar una base de datos a un estado coherente después de una falla."
          },
          {
            "title": "Read-Only (Solo Lectura)",
            "description": "Estado de una base de datos que permite solo operaciones de lectura, sin cambios."
          },
          {
            "title": "Schema (Esquema)",
            "description": "Estructura lógica que define la organización y relación de datos en una base de datos."
          },
          {
            "title": "Subquery (Subconsulta)",
            "description": "Consulta anidada dentro de otra consulta en una base de datos."
          },
          {
            "title": "Stored Procedure (Procedimiento Almacenado)",
            "description": "Conjunto de instrucciones SQL que se almacenan y se pueden ejecutar repetidamente en una base de datos."
          },
          {
            "title": "Sum (Suma)",
            "description": "Función utilizada en bases de datos para calcular la suma de los valores en una columna."
          },
          {
            "title": "SQL (Structured Query Language)",
            "description": "Lenguaje estándar utilizado para interactuar con bases de datos relacionales."
          },
          {
            "title": "Scaling (Escalabilidad)",
            "description": "Capacidad de una base de datos para manejar un aumento en la carga de trabajo y el tamaño de los datos."
          },
          {
            "title": "Transacción",
            "description": "Una secuencia de operaciones realizadas como una única unidad lógica de trabajo. Si una transacción se ejecuta completamente, se dice que ha sido exitosa y todos sus cambios se aplican a la base de datos. Si falla, se deshacen todos los cambios."
          },
          {
            "title": "Tabla",
            "description": "Es una colección de datos relacionados, donde cada fila representa un registro y cada columna representa un atributo de ese registro."
          },
          {
            "title": "Trigger (Disparador)",
            "description": "Un procedimiento almacenado en la base de datos que se activa automáticamente en respuesta a ciertos eventos en una tabla o vista, como inserciones, actualizaciones o eliminaciones."
          },
          {
            "title": "Tupla",
            "description": "Otro término para fila o registro en una tabla de base de datos."
          },
          {
            "title": "Tipo de Dato",
            "description": "Define el tipo de valor que puede contener una columna, como entero, decimal, texto, fecha/hora, entre otros."
          },
          {
            "title": "TSQL (Transact-SQL)",
            "description": "Es una extensión del lenguaje SQL utilizada por Microsoft en SQL Server. Incluye operaciones adicionales para la declaración de variables, el manejo de errores y el soporte para procedimientos almacenados y funciones."
          },
          {
            "title": "Update (Actualizar)",
            "description": "Es una sentencia SQL que permite modificar los valores de una o varias filas existentes en una tabla."
          },
          {
            "title": "Unique (Único)",
            "description": "Es una restricción que se puede aplicar a una columna o conjunto de columnas para asegurar que cada fila de una tabla tenga un valor único en esa columna o combinación de columnas."
          },
          {
            "title": "User (Usuario)",
            "description": "Se refiere a una cuenta que tiene permisos para acceder a la base de datos y realizar operaciones específicas según los roles asignados."
          },
          {
            "title": "Union (Unión)",
            "description": "Es una operación SQL que combina los resultados de dos o más consultas SELECT en un solo conjunto de resultados, eliminando duplicados."
          },
          {
            "title": "Undo (Deshacer)",
            "description": "): En el contexto de las transacciones de bases de datos, se refiere a la capacidad de revertir operaciones o cambios realizados en la base de datos hasta un punto específico."
          },
          {
            "title": "Utility (Utilidad)",
            "description": "Programas o herramientas que ofrecen funcionalidades para el mantenimiento, monitoreo y optimización del rendimiento de una base de datos."
          },
          {
            "title": "Vista (View)",
            "description": "Resultado de una consulta SQL que se almacena para su uso como si fuera una tabla."
          },
          {
            "title": "Validación (Validation)",
            "description": "Proceso de asegurar que los datos ingresados siguen las reglas y restricciones de la base de datos."
          },
          {
            "title": "Variable",
            "description": "Elemento que puede almacenar un valor de datos que puede cambiar durante la ejecución de un programa."
          },
          {
            "title": "Volcado de Base de Datos (Database Dump)",
            "description": "Una copia de la base de datos almacenada en un archivo."
          },
          {
            "title": "VARCHAR",
            "description": "Tipo de dato que almacena cadenas de caracteres de longitud variable."
          },
          {
            "title": "Virtualización",
            "description": "Creación de una versión virtual de algo, como un sistema operativo, un servidor, un dispositivo de almacenamiento o recursos de red."
          },
          {
            "title": "Warehouse (Almacén de Datos)",
            "description": "Sistema para el almacenamiento y análisis de grandes cantidades de datos."
          },
          {
            "title": "Wrapper",
            "description": "Software que sirve de intermediario entre diferentes tecnologías permitiendo la interoperabilidad."
          },
          {
            "title": "Workload (Carga de Trabajo)",
            "description": "Cantidad de trabajo que un sistema de base de datos debe realizar en un período de tiempo."
          },
          {
            "title": "Write-Ahead Logging (WAL)",
            "description": "Técnica de recuperación de bases de datos que registra las transacciones antes de que se confirmen como completadas."
          },
          {
            "title": "Wildcard",
            "description": "Carácter especial utilizado en búsquedas para representar uno o más caracteres."
          },
          {
            "title": "Web Database",
            "description": "Base de datos accesible o gestionada a través de Internet."
          },
          {
            "title": "XML Database (Base de Datos XML)",
            "description": "Base de datos que almacena y gestiona datos en formato XML."
          },
          {
            "title": "XQuery",
            "description": "Lenguaje de consulta para bases de datos XML."
          },
          {
            "title": "XPath",
            "description": "Lenguaje de consulta que se utiliza para seleccionar nodos de un documento XML."
          },
          {
            "title": "XLink",
            "description": "Lenguaje que permite crear enlaces dentro de documentos XML."
          },
          {
            "title": "XSD (XML Schema Definition)",
            "description": "Esquema utilizado para definir la estructura de los datos en un documento XML."
          },
          {
            "title": "XACT_ABORT",
            "description": "Configuración en SQL Server que determina si una transacción se deshace completamente si ocurre un error en tiempo de ejecución."
          },
          {
            "title": "Year-to-Date (YTD)",
            "description": "Término utilizado para referirse a la acumulación de datos desde el comienzo del año hasta la fecha actual."
          },
          {
            "title": "YAML (YAML Ain't Markup Language)",
            "description": "Formato de serialización de datos legible por humanos, utilizado a menudo para archivos de configuración."
          },
          {
            "title": "Yottabyte",
            "description": "Unidad de medida que representa 2^80 bytes de datos, equivalente a mil trillones de gigabytes."
          },
          {
            "title": "YugabyteDB",
            "description": "Sistema de gestión de bases de datos distribuido y resiliente."
          },
          {
            "title": "Yield",
            "description": "En programación, es una palabra clave que se utiliza en algunos lenguajes para pausar y reanudar una función."
          },
          {
            "title": "YCSB (Yahoo! Cloud Serving Benchmark)",
            "description": "Herramienta de evaluación de rendimiento para sistemas de gestión de bases de datos en la nube."
          },
          {
            "title": "Zona (Zone)",
            "description": "En el contexto de bases de datos, se refiere a una partición o segmento de datos dentro de una base de datos o índice."
          },
          {
            "title": "ZFS (Zettabyte File System)",
            "description": "Sistema de archivos diseñado para ofrecer alta capacidad de almacenamiento y protección contra la corrupción de datos."
          },
          {
            "title": "Zero Downtime",
            "description": "Capacidad de un sistema de base de datos para actualizarse o mantenerse sin causar interrupciones en el servicio."
          },
          {
            "title": "Zigzag Join",
            "description": "Tipo de operación de unión en bases de datos que es eficiente para unir tablas grandes con índices."
          },
          {
            "title": "Z-normalization",
            "description": "Proceso de normalización de datos que ajusta y escala los valores para que tengan una media de cero y una desviación estándar de uno."
          },
          {
            "title": "Z-order Indexing",
            "description": "Técnica de indexación que convierte datos multidimensionales en una sola dimensión, lo que facilita las consultas rápidas en grandes conjuntos de datos."
          }
        ],
        "A": [
          {
            "title": "ACID Properties (Propiedades ACID)",
            "description": " Características clave de una transacción de base de datos: Atomicidad, Consistencia, Aislamiento y Durabilidad."
          },
          {
            "title": "Aggregate Function (Función de Agregación)",
            "description": "Función usada en bases de datos para resumir múltiples filas en una tabla en un solo valor."
          },
          {
            "title": "Attribute (Atributo)",
            "description": "Característica individual que describe un aspecto específico de una entidad en una base de datos."
          },
          {
            "title": " Atomicity (Atomicidad)",
            "description": "Propiedad de una transacción que garantiza que todas las operaciones se completen con éxito o no se realicen en absoluto."
          },
          {
            "title": "Authorization (Autorización)",
            "description": "Proceso de otorgar o restringir acceso a ciertos usuarios a ciertas partes de una base de datos."
          },
          {
            "title": "Availability (Disponibilidad)",
            "description": "Una de las características clave de una base de datos que garantiza que los sistemas de base de datos estén disponibles y accesibles para los usuarios cuando se necesiten."
          }
        ],
        "B": [
          {
            "title": "Backup (Respaldo)",
            "description": "Proceso de copiar datos como medida de seguridad para evitar pérdida de información."
          },
          {
            "title": "Binary Large Object (Objeto Binario Grande)",
            "description": "Tipo de dato utilizado para almacenar información binaria de gran tamaño en una base de datos."
          },
          {
            "title": "Bit (Bit)",
            "description": "La unidad más pequeña de información en informática, puede tener un valor de 0 o 1."
          },
          {
            "title": "Blob (Binary Large Object)",
            "description": "Tipo de dato en una base de datos utilizado para almacenar datos binarios como imágenes, sonido o video."
          },
          {
            "title": "Block (Bloque)",
            "description": "Unidad de almacenamiento básica en una base de datos, generalmente compuesto por múltiples registros."
          },
          {
            "title": "B-tree (Árbol B)",
            "description": "Estructura de datos utilizada para organizar y almacenar índices en una base de datos."
          }
        ],
        "C": [
          {
            "title": "Cardinality (Cardinalidad)",
            "description": "Número de relaciones que pueden existir entre dos entidades en una relación de base de datos."
          },
          {
            "title": "Clustering (Agrupación)",
            "description": "Técnica en la que los datos relacionados físicamente se almacenan juntos en un disco."
          },
          {
            "title": "Column (Columna)",
            "description": "Unidad básica de organización de datos en una tabla de base de datos, también conocida como campo."
          },
          {
            "title": "Commit (Confirmar)",
            "description": "Operación en una base de datos que hace permanente un conjunto de transacciones."
          },
          {
            "title": "Concurrency Control (Control de Concurrencia)",
            "description": "Mecanismos utilizados para garantizar la integridad de los datos cuando múltiples usuarios acceden simultáneamente a una base de datos."
          },
          {
            "title": "Consistency (Consistencia)",
            "description": "Una de las propiedades ACID que garantiza que la base de datos siempre se encuentra en un estado válido."
          }
        ],
        "D": [
          {
            "title": "Data Dictionary (Diccionario de Datos)",
            "description": "Registro centralizado de información sobre los datos de una base de datos."
          },
          {
            "title": "Data Definition Language (DDL) (Lenguaje de Definición de Datos)",
            "description": "Componente de SQL que permite definir la estructura de la base de datos."
          },
          {
            "title": "Data Manipulation Language (DML) (Lenguaje de Manipulación de Datos)",
            "description": "Componente de SQL que permite agregar, modificar, eliminar y consultar datos en una base de datos."
          },
          {
            "title": "Data Model (Modelo de Datos)",
            "description": "Representación abstracta y simplificada de la estructura de una base de datos."
          },
          {
            "title": "Data Redundancy (Redundancia de Datos): ",
            "description": "Presencia de datos duplicados en una base de datos."
          },
          {
            "title": "Database (Base de Datos):",
            "description": "Colección estructurada de datos que se almacenan electrónicamente en un sistema informático."
          }
        ],
        "E": [
          {
            "title": "Entity (Entidad)",
            "description": "Objeto o concepto en el mundo real que se puede identificar y almacenar en una base de datos."
          },
          {
            "title": "Entity-Relationship Diagram (Diagrama de Entidad-Relación)",
            "description": "Representación gráfica de las relaciones entre entidades en una base de datos."
          },
          {
            "title": "Entry (Entrada)",
            "description": "Cada fila en una tabla de base de datos se considera una entrada que representa un solo conjunto de datos."
          },
          {
            "title": "Eventual Consistency (Consistencia Eventual)",
            "description": "Modelo de consistencia en bases de datos distribuidas que garantiza que todos los nodos en la red eventualmente llegarán a un estado consistente."
          },
          {
            "title": "Extraction, Transformation, Loading (ETL) (Extracción, Transformación, Carga)",
            "description": "Proceso utilizado para mover datos desde múltiples fuentes a una base de datos."
          },
          {
            "title": "Exclusive Lock (Bloqueo Exclusivo)",
            "description": "Tipo de bloqueo en una base de datos que evita que otros usuarios modifiquen los mismos datos al mismo tiempo."
          }
        ],
        "F": [
          {
            "title": "Field (Campo)",
            "description": "Se refiere a una columna individual en una tabla de base de datos que contiene un tipo específico de dato."
          },
          {
            "title": "Foreign Key (Clave Foránea)",
            "description": "Campo en una tabla que hace referencia a la clave principal de otra tabla para establecer una relación."
          },
          {
            "title": "Free-List (Lista Liberada)",
            "description": "Mecanismo utilizado para administrar el espacio de almacenamiento fragmentado en una base de datos."
          },
          {
            "title": "Full Backup (Copia de Seguridad Completa)",
            "description": "Respaldo de todos los datos en una base de datos en un momento específico."
          },
          {
            "title": "Functional Dependency (Dependencia Funcional)",
            "description": "Relación en la que el valor de un atributo determina el valor de otro atributo en una base de datos."
          },
          {
            "title": "Full-Text Search (Búsqueda de Texto Completo)",
            "description": "Método que permite buscar texto en base de datos de forma más amplia que una búsqueda estándar."
          }
        ],
        "G": [
          {
            "title": "Granularity (Granularidad)",
            "description": "Tamaño de los datos almacenados en una base de datos."
          },
          {
            "title": "Graph Database (Base de Datos de Grafos)",
            "description": "Tipo de base de datos diseñada para trabajar con datos estructurados en forma de grafo."
          },
          {
            "title": "Group By (Agrupar Por)",
            "description": "Cláusula utilizada en consultas SQL para agrupar filas de datos según un criterio específico."
          },
          {
            "title": "GUI (Graphical User Interface) (Interfaz Gráfica de Usuario)",
            "description": "Forma visual de interactuar con una base de datos."
          },
          {
            "title": "Global Temporary Table (Tabla Temporal Global)",
            "description": "Tabla en una base de datos que es visible para todos los usuarios y existe por un tiempo limitado."
          },
          {
            "title": "Gigabyte (Gigabyte)",
            "description": "Unidad de medida que representa aproximadamente mil millones de bytes."
          }
        ],
        "H": [
          {
            "title": "High Availability (Alta Disponibilidad)",
            "description": "Característica que garantiza que una base de datos esté accesible en todo momento, incluso en caso de fallas."
          },
          {
            "title": "Hash Join (Unión por Hash)",
            "description": "Algoritmo de unión utilizado en bases de datos para combinar grandes conjuntos de datos."
          },
          {
            "title": "Hierarchical Database (Base de Datos Jerárquica)",
            "description": "Tipo de base de datos donde la información se organiza en una estructura de árbol."
          },
          {
            "title": "Heap Table (Tabla sin Ordenación)",
            "description": "): Estructura de datos básica en una base de datos que no está ordenada físicamente."
          },
          {
            "title": "Heterogeneous Database (Base de Datos Heterogénea)",
            "description": "Base de datos que combina múltiples tipos de bases de datos en un solo sistema."
          },
          {
            "title": "HIPAA (Health Insurance Portability and Accountability Act) (Ley de Transferibilidad y Responsabilidad del Seguro de Salud)",
            "description": "Legislación estadounidense que establece normas para proteger y asegurar la privacidad de la información médica del paciente."
          }
        ],
        "I": [
          {
            "title": "Index (Índice)",
            "description": "Estructura de la base de datos que mejora la velocidad de recuperación de datos."
          },
          {
            "title": "In-memory Database (Base de Datos en Memoria)",
            "description": "Tipo de base de datos que almacena datos principalmente en la memoria RAM en lugar de en el disco."
          },
          {
            "title": "Inconsistent Data (Datos Inconsistentes)",
            "description": "Información en una base de datos que contradice otras partes de la base de datos."
          },
          {
            "title": "Integrity Constraint (Restricción de Integridad)",
            "description": "Reglas que definen y garantizan la precisión y coherencia de los datos en una base de datos."
          },
          {
            "title": "Isolation (Aislamiento)",
            "description": "Propiedad de una transacción en una base de datos que garantiza que se ejecute de forma aislada de otras transacciones."
          },
          {
            "title": "Inverted Index (Índice Invertido)",
            "description": "Estructura de datos utilizada en motores de búsqueda y bases de datos para mejorar la velocidad de búsqueda de información."
          }
        ],
        "J": [
          {
            "title": "Join (Unión)",
            "description": "Operación en una base de datos que combina filas de una o más tablas según una condición específica."
          },
          {
            "title": "Journaling (Registro de Operaciones)",
            "description": "Técnica utilizada para mantener un registro de transacciones y actividades en una base de datos."
          },
          {
            "title": "JSON (JavaScript Object Notation)",
            "description": "Formato de intercambio de datos basado en texto que se utiliza en bases de datos y aplicaciones web."
          },
          {
            "title": "JDBC (Java Database Connectivity)",
            "description": "API de Java que facilita la interacción y conexión de aplicaciones Java con bases de datos."
          },
          {
            "title": "Journal (Registro)",
            "description": "Archivo que registra todas las modificaciones hechas en una base de datos para permitir la recuperación en caso de fallos."
          },
          {
            "title": "Job Queue (Cola de Trabajo)",
            "description": "Lista de tareas pendientes de ejecución en una base de datos."
          }
        ],
        "K": [
          {
            "title": "Key (Clave)",
            "description": "Campo o conjunto de campos que identifican de forma única un registro en una base de datos."
          },
          {
            "title": "Key-Value Store (almacenamiento Clave-Valor)",
            "description": "Tipo de base de datos NoSQL que almacena datos como pares de clave-valor."
          },
          {
            "title": "K-Means Clustering (Agrupamiento K-Means)",
            "description": "Algoritmo de agrupamiento utilizado en bases de datos para dividir conjuntos de datos en grupos más pequeños."
          },
          {
            "title": "Knowledge Base (Base de Conocimientos)",
            "description": "Base de datos que almacena información y conocimiento en una organización."
          },
          {
            "title": "KPI (Key Performance Indicator) (Indicador Clave de Rendimiento)",
            "description": "Métrica utilizada para medir el desempeño y éxito de una organización."
          },
          {
            "title": "Kilobyte (Kilobyte)",
            "description": "Unidad de medida que representa aproximadamente mil bytes."
          }
        ],
        "L": [
          {
            "title": "Lock (Bloqueo)",
            "description": "Método utilizado en bases de datos para limitar el acceso a datos y evitar conflictos."
          },
          {
            "title": "Log (Registro)",
            "description": "Archivo que registra operaciones y transacciones en una base de datos."
          },
          {
            "title": "Local Database (Base de Datos Local)",
            "description": "Base de datos que se ejecuta y almacena datos en un dispositivo de usuario local."
          },
          {
            "title": "Logical Database (Base de Datos Lógica)",
            "description": "Vista lógica de los datos almacenados en una base de datos que oculta la estructura física subyacente."
          },
          {
            "title": "Lookup Table (Tabla de Búsqueda)",
            "description": "Tabla en una base de datos que se utiliza para buscar valores de referencia."
          },
          {
            "title": "Load Balancing (Balanceo de Carga)",
            "description": "Método utilizado para distribuir de manera equitativa la carga de trabajo entre servidores en una base de datos distribuida."
          }
        ],
        "M": [
          {
            "title": "Metadata (Metadatos)",
            "description": "Información sobre los datos almacenados en una base de datos que describe su estructura y características."
          },
          {
            "title": "Multi-Tenancy (Multiinquilino)",
            "description": "Característica de bases de datos que permite a múltiples inquilinos compartir una sola instancia de base de datos."
          },
          {
            "title": "Multi-Model Database (Base de Datos Multi-Modelo)",
            "description": "Tipo de base de datos que admite múltiples modelos de datos en un solo motor."
          },
          {
            "title": "Master Data (Datos Maestros)",
            "description": "Datos críticos y comunes utilizados en toda una organización que se almacenan en una ubicación central."
          },
          {
            "title": "MapReduce (Mapa-Reduce)",
            "description": "Proceso de procesamiento de datos utilizado para la distribución y paralelismo en bases de datos distribuidas."
          },
          {
            "title": "MySQL (MySQL)",
            "description": "Sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado."
          }
        ],
        "N": [
          {
            "title": "Nesting (Anidación)",
            "description": "Proceso de incluir una consulta dentro de otra en una base de datos."
          },
          {
            "title": "Normalization (Normalización)",
            "description": "Proceso de organizar estructuras de bases de datos para reducir la redundancia y mejorar la integridad de los datos."
          },
          {
            "title": "NoSQL (No Solo SQL)",
            "description": "Tipo de base de datos que no sigue el modelo relacional tradicional y se utiliza para grandes volúmenes de datos no estructurados."
          },
          {
            "title": "Null (Nulo)",
            "description": "Valor especial que indica la ausencia de datos en una base de datos."
          },
          {
            "title": "Network Model (Modelo de Red)",
            "description": "Modelo de base de datos que organiza los datos en forma de grafo en lugar de tablas."
          },
          {
            "title": "Normalization Forms (Formas Normales de Normalización)",
            "description": "Reglas y estándares utilizados para normalizar bases de datos y mejorar la integridad de los datos."
          }
        ],
        "O": [
          {
            "title": "OLAP (Online Analytical Processing)",
            "description": "Proceso de análisis interactivo de múltiples dimensiones de datos en una base de datos."
          },
          {
            "title": "Outer Join (Unión Externa)",
            "description": "Operación en una base de datos que combina filas de dos tablas, incluidas las filas que no tienen correspondencias en la otra tabla."
          },
          {
            "title": "One-to-Many Relationship (Relación de Uno a Muchos)",
            "description": "Tipo de relación entre tablas en una base de datos en la que una fila de una tabla se relaciona con múltiples filas de otra tabla."
          },
          {
            "title": "Optimization (Optimización)",
            "description": "Proceso de ajustar y mejorar la estructura y el rendimiento de una base de datos para una mayor eficiencia."
          },
          {
            "title": "Object-Oriented Database (Base de Datos Orientada a Objetos)",
            "description": "Tipo de base de datos que almacena y manipula datos como objetos de programación."
          },
          {
            "title": "OLTP (Online Transaction Processing)",
            "description": "Proceso de transacciones en tiempo real en una base de datos relacional."
          }
        ],
        "P": [
          {
            "title": "Primary Key (Clave Primaria)",
            "description": "Campo o conjunto de campos en una tabla de base de datos que identifica de forma única cada registro."
          },
          {
            "title": "Partitioning (Particionamiento)",
            "description": "División de tablas grandes en segmentos más pequeños para mejorar la administración y el rendimiento de la base de datos."
          },
          {
            "title": "Physical Database (Base de Datos Física)",
            "description": "Physical Database (Base de Datos Física)"
          },
          {
            "title": "Python Database API (DB-API)",
            "description": "Estándar de Python para interactuar con bases de datos relacionales."
          },
          {
            "title": "Polyglot Persistence (Persistencia Políglota)",
            "description": "Uso de múltiples tipos de bases de datos para manejar diferentes aspectos de una aplicación."
          }
        ],
        "Q": [
          {
            "title": "Query Plan (Plan de Consulta)",
            "description": "Estrategia de ejecución de una consulta en una base de datos para recuperar datos de manera eficiente."
          },
          {
            "title": "Query Optimization (Optimización de Consulta)",
            "description": "Proceso de ajustar consultas para mejorar la eficiencia y el rendimiento de la base de datos."
          },
          {
            "title": "Quiet Mode (Modo Silencioso)",
            "description": "Estado de funcionamiento de una base de datos en el que no se aceptan o procesan solicitudes de los usuarios."
          },
          {
            "title": "Queue (Cola)",
            "description": "Mecanismo utilizado para almacenar tareas en una base de datos de manera ordenada y secuencial."
          },
          {
            "title": "Quota (Cuota)",
            "description": "Límite establecido en una base de datos que restringe la cantidad de almacenamiento o procesamiento disponible para un usuario."
          },
          {
            "title": "Quick Response (Respuesta Rápida)",
            "description": "Capacidad de una base de datos para entregar resultados de consultas rápidamente."
          }
        ],
        "R": [
          {
            "title": "Relational Database (Base de Datos Relacional)",
            "description": "Tipo de base de datos que organiza los datos en tablas relacionadas."
          },
          {
            "title": "Row (Fila)",
            "description": "Un registro en una tabla de base de datos que representa una única instancia de datos."
          },
          {
            "title": "Replication (Replicación)",
            "description": "Proceso de copiar y distribuir datos de una base de datos a múltiples ubicaciones para soportar alta disponibilidad y recuperación."
          },
          {
            "title": "Rollback (Reversión)",
            "description": "Operación en una base de datos que revierte una transacción a un estado anterior."
          },
          {
            "title": "Recovery (Recuperación)",
            "description": "Proceso de restaurar una base de datos a un estado coherente después de una falla."
          },
          {
            "title": "Read-Only (Solo Lectura)",
            "description": "Estado de una base de datos que permite solo operaciones de lectura, sin cambios."
          }
        ],
        "S": [
          {
            "title": "Schema (Esquema)",
            "description": "Estructura lógica que define la organización y relación de datos en una base de datos."
          },
          {
            "title": "Subquery (Subconsulta)",
            "description": "Consulta anidada dentro de otra consulta en una base de datos."
          },
          {
            "title": "Stored Procedure (Procedimiento Almacenado)",
            "description": "Conjunto de instrucciones SQL que se almacenan y se pueden ejecutar repetidamente en una base de datos."
          },
          {
            "title": "Sum (Suma)",
            "description": "Función utilizada en bases de datos para calcular la suma de los valores en una columna."
          },
          {
            "title": "SQL (Structured Query Language)",
            "description": "Lenguaje estándar utilizado para interactuar con bases de datos relacionales."
          },
          {
            "title": "Scaling (Escalabilidad)",
            "description": "Capacidad de una base de datos para manejar un aumento en la carga de trabajo y el tamaño de los datos."
          }
        ],
        "T": [
          {
            "title": "Transacción",
            "description": "Una secuencia de operaciones realizadas como una única unidad lógica de trabajo. Si una transacción se ejecuta completamente, se dice que ha sido exitosa y todos sus cambios se aplican a la base de datos. Si falla, se deshacen todos los cambios."
          },
          {
            "title": "Tabla",
            "description": "Es una colección de datos relacionados, donde cada fila representa un registro y cada columna representa un atributo de ese registro."
          },
          {
            "title": "Trigger (Disparador)",
            "description": "Un procedimiento almacenado en la base de datos que se activa automáticamente en respuesta a ciertos eventos en una tabla o vista, como inserciones, actualizaciones o eliminaciones."
          },
          {
            "title": "Tupla",
            "description": "Otro término para fila o registro en una tabla de base de datos."
          },
          {
            "title": "Tipo de Dato",
            "description": "Define el tipo de valor que puede contener una columna, como entero, decimal, texto, fecha/hora, entre otros."
          },
          {
            "title": "TSQL (Transact-SQL)",
            "description": "Es una extensión del lenguaje SQL utilizada por Microsoft en SQL Server. Incluye operaciones adicionales para la declaración de variables, el manejo de errores y el soporte para procedimientos almacenados y funciones."
          }
        ],
        "U": [
          {
            "title": "Update (Actualizar)",
            "description": "Es una sentencia SQL que permite modificar los valores de una o varias filas existentes en una tabla."
          },
          {
            "title": "Unique (Único)",
            "description": "Es una restricción que se puede aplicar a una columna o conjunto de columnas para asegurar que cada fila de una tabla tenga un valor único en esa columna o combinación de columnas."
          },
          {
            "title": "User (Usuario)",
            "description": "Se refiere a una cuenta que tiene permisos para acceder a la base de datos y realizar operaciones específicas según los roles asignados."
          },
          {
            "title": "Union (Unión)",
            "description": "Es una operación SQL que combina los resultados de dos o más consultas SELECT en un solo conjunto de resultados, eliminando duplicados."
          },
          {
            "title": "Undo (Deshacer)",
            "description": "): En el contexto de las transacciones de bases de datos, se refiere a la capacidad de revertir operaciones o cambios realizados en la base de datos hasta un punto específico."
          },
          {
            "title": "Utility (Utilidad)",
            "description": "Programas o herramientas que ofrecen funcionalidades para el mantenimiento, monitoreo y optimización del rendimiento de una base de datos."
          }
        ],
        "V": [
          {
            "title": "Vista (View)",
            "description": "Resultado de una consulta SQL que se almacena para su uso como si fuera una tabla."
          },
          {
            "title": "Validación (Validation)",
            "description": "Proceso de asegurar que los datos ingresados siguen las reglas y restricciones de la base de datos."
          },
          {
            "title": "Variable",
            "description": "Elemento que puede almacenar un valor de datos que puede cambiar durante la ejecución de un programa."
          },
          {
            "title": "Volcado de Base de Datos (Database Dump)",
            "description": "Una copia de la base de datos almacenada en un archivo."
          },
          {
            "title": "VARCHAR",
            "description": "Tipo de dato que almacena cadenas de caracteres de longitud variable."
          },
          {
            "title": "Virtualización",
            "description": "Creación de una versión virtual de algo, como un sistema operativo, un servidor, un dispositivo de almacenamiento o recursos de red."
          }
        ],
        "W": [
          {
            "title": "Warehouse (Almacén de Datos)",
            "description": "Sistema para el almacenamiento y análisis de grandes cantidades de datos."
          },
          {
            "title": "Wrapper",
            "description": "Software que sirve de intermediario entre diferentes tecnologías permitiendo la interoperabilidad."
          },
          {
            "title": "Workload (Carga de Trabajo)",
            "description": "Cantidad de trabajo que un sistema de base de datos debe realizar en un período de tiempo."
          },
          {
            "title": "Write-Ahead Logging (WAL)",
            "description": "Técnica de recuperación de bases de datos que registra las transacciones antes de que se confirmen como completadas."
          },
          {
            "title": "Wildcard",
            "description": "Carácter especial utilizado en búsquedas para representar uno o más caracteres."
          },
          {
            "title": "Web Database",
            "description": "Base de datos accesible o gestionada a través de Internet."
          }
        ],
        "X": [
          {
            "title": "XML Database (Base de Datos XML)",
            "description": "Base de datos que almacena y gestiona datos en formato XML."
          },
          {
            "title": "XQuery",
            "description": "Lenguaje de consulta para bases de datos XML."
          },
          {
            "title": "XPath",
            "description": "Lenguaje de consulta que se utiliza para seleccionar nodos de un documento XML."
          },
          {
            "title": "XLink",
            "description": "Lenguaje que permite crear enlaces dentro de documentos XML."
          },
          {
            "title": "XSD (XML Schema Definition)",
            "description": "Esquema utilizado para definir la estructura de los datos en un documento XML."
          },
          {
            "title": "XACT_ABORT",
            "description": "Configuración en SQL Server que determina si una transacción se deshace completamente si ocurre un error en tiempo de ejecución."
          }
        ],
        "Y": [
          {
            "title": "Year-to-Date (YTD)",
            "description": "Término utilizado para referirse a la acumulación de datos desde el comienzo del año hasta la fecha actual."
          },
          {
            "title": "YAML (YAML Ain't Markup Language)",
            "description": "Formato de serialización de datos legible por humanos, utilizado a menudo para archivos de configuración."
          },
          {
            "title": "Yottabyte",
            "description": "Unidad de medida que representa 2^80 bytes de datos, equivalente a mil trillones de gigabytes."
          },
          {
            "title": "YugabyteDB",
            "description": "Sistema de gestión de bases de datos distribuido y resiliente."
          },
          {
            "title": "Yield",
            "description": "En programación, es una palabra clave que se utiliza en algunos lenguajes para pausar y reanudar una función."
          },
          {
            "title": "YCSB (Yahoo! Cloud Serving Benchmark)",
            "description": "Herramienta de evaluación de rendimiento para sistemas de gestión de bases de datos en la nube."
          }
        ],
        "Z": [
          {
            "title": "Zona (Zone)",
            "description": "En el contexto de bases de datos, se refiere a una partición o segmento de datos dentro de una base de datos o índice."
          },
          {
            "title": "ZFS (Zettabyte File System)",
            "description": "Sistema de archivos diseñado para ofrecer alta capacidad de almacenamiento y protección contra la corrupción de datos."
          },
          {
            "title": "Zero Downtime",
            "description": "Capacidad de un sistema de base de datos para actualizarse o mantenerse sin causar interrupciones en el servicio."
          },
          {
            "title": "Zigzag Join",
            "description": "Tipo de operación de unión en bases de datos que es eficiente para unir tablas grandes con índices."
          },
          {
            "title": "Z-normalization",
            "description": "Proceso de normalización de datos que ajusta y escala los valores para que tengan una media de cero y una desviación estándar de uno."
          },
          {
            "title": "Z-order Indexing",
            "description": "Técnica de indexación que convierte datos multidimensionales en una sola dimensión, lo que facilita las consultas rápidas en grandes conjuntos de datos."
          }
        ]
      }

    return (
        <div className="TermContainer">
            {
                definitions[Object.keys(definitions)[letter] as keyof typeof definitions].map(({ title, description } : defparams, index: number) => {
                    return (
                        <Term title={title} description={description} key={index}/>
                    )
                })
            }
        </div>
    )
}