1. Visión general del flujo de carga aérea
El transporte de carga aérea no es solo “subir mercancía a un avión”. Es una cadena multimodal altamente regulada, con muchos actores y handoffs.
El flujo completo se divide en 7 grandes etapas:
Shipper → Logística terrestre → Terminal de carga aérea (exportación) → Aerolínea → Terminal de carga aérea (importación) → Logística terrestre → Consignee

2. Etapa 1: Preparación en bodega del remitente (Shipper)
Qué ocurre:
Consolidación de la mercancía.
Verificación de: 
Peso bruto y volumétrico
Tipo de mercancía (general, perecedera, peligrosa, valor alto)
Requisitos regulatorios (IATA, DGR, FDA, ICAO, etc.)
Empaque conforme a transporte aéreo.
Etiquetado (AWB, handling labels).
Documentos clave:
Air Waybill (AWB) – contrato de transporte.
Factura comercial.
Lista de empaque.
Certificados especiales (DGR, fitosanitarios, etc.).
Problemas típicos:
Datos incompletos o inconsistentes.
Peso volumétrico mal calculado.
Mercancía lista fuera de ventana del vuelo.
Falta de digitalización (documentos en papel).

3. Etapa 2: Transporte terrestre hacia el aeropuerto (Pre-carriage)
Aquí empieza uno de los puntos críticos de trazabilidad.
Qué ocurre:
Transporte desde bodega → terminal de carga del aeropuerto.
En muchos casos con forwarder o agente de carga.
Ventanas de entrega muy estrictas (cutoff time).
Riesgos comunes:
Tráfico urbano → pérdida de vuelo.
Falta de tracking en tiempo real del camión.
Desalineación entre: 
Hora de llegada a terminal
Slot operativo de la aerolínea
👉 Aquí suele romperse la visibilidad si no hay integración TMS ↔ aeropuerto.

4. Etapa 3: Terminal de carga aérea – Exportación
Esta fase es operativamente compleja.
Qué ocurre dentro del terminal:
Recepción física de la carga.
Pesaje y escaneo.
Inspección de seguridad (XRay, perros, etc.).
Aceptación en sistema de aerolínea.
Almacenamiento temporal (bonded warehouse).
Paletización o conteinerización (ULDs).
Sistemas involucrados:
WMS del terminal.
Sistema Cargospot / CHAMP / IBS / SkyChain u otros.
Autoridad aeroportuaria.
Aduana.
Problemas frecuentes:
Desacople de sistemas entre forwarder – aerolínea – terminal.
Baja automatización (procesos manuales).
Falta de eventos estandarizados: 
“Received”
“Ready for carriage”
“Loaded”

5. Etapa 4: Transporte aéreo (Main carriage)
Qué ocurre:
Carga asignada a: 
Aviones cargueros (Freighter)
Aviones de pasajeros (belly cargo)
Cumplimiento estricto de: 
Peso
Balance
Seguridad
Consideraciones críticas:
Prioridad de carga (mail, pharma, express).
Cambios de último minuto.
Reacomodación por condiciones climáticas.
Visibilidad real:
Muchas aerolíneas solo informan eventos macro: 
Flight departed
Flight arrived 👉 No tracking continuo, solo hitos.

6. Etapa 5: Terminal de carga aérea – Importación
Simétrico a exportación, pero con más fricción regulatoria.
Qué ocurre:
Descarga del avión.
Ingreso a terminal.
Registro en sistema.
Almacenaje.
Proceso de aduanas.
Liberación de carga.
Puntos críticos:
Tiempos de nacionalización.
Documentación incompleta.
Inspecciones físicas.
Costos por storage.
Aquí muchas empresas pierden visibilidad total hasta que el agente avisa “carga liberada”.

7. Etapa 6: Transporte terrestre final (On-carriage)
Despacho desde terminal → cliente final.
Coordinación con: 
Camión
Citas
Horarios del consignatario
Brechas comunes:
Falta de ETA real.
El cliente no sabe cuándo sale del aeropuerto.
Información llega tarde o por correo/WhatsApp.

8. Actores del ecosistema (muy importante)

👉 Cada actor tiene sistemas distintos, ahí nace el problema.

9. Por qué fallan la trazabilidad y la información en línea
Las causas raíz casi siempre son:
Modelo de datos no estandarizado
Dependencia de correo y teléfono.
Eventos logísticos no digitalizados.
Sistemas legacy no integrados.
Forwarders actuando como “caja negra”.

10. Modelo ideal moderno (best practice)
Hoy el modelo objetivo es:
✳️ Endtoend visibility
✳️ Eventos estandarizados (IATA ONE Record)
✳️ Integración: 
WMS ↔ TMS ↔ Aerolínea ↔ Aduana
✳️ Tracking por hitos + sensores IoT
✳️ Single source of truth (control tower)

AS-IS

1️⃣ Modelo de referencia – Proceso AsIs → ToBe (Etapas 15)
1.1 Proceso ASIS (estado actual típico)
Características generales
Flujos fragmentados
Dependencia de: 
Correos
Excel
WhatsApp
Información distribuida entre: 
Shipper
Forwarder
Terminal
Aerolínea
Visibilidad reactiva, no preventiva

ASIS por etapa
🟠 Etapa 1 – Bodega / Shipper
ASIS
Cubicaje manual
Información en Excel
Cambios de última hora no versionados
Cancelaciones informales
Dolores
Error de cubicaje
Re-trabajo
Carga no aceptada en aeropuerto

🟠 Etapa 2 – Transporte terrestre (bodega → aeropuerto)
ASIS
Tracking limitado o inexistente
ETA basado en experiencia
Cambios no notificados a todos los actores
Dolores
Pérdida de vuelos
Desfase entre llegada real y slot de terminal

🟠 Etapa 3 – Terminal de carga (export)
ASIS
Recepción manual
Datos no coinciden con lo declarado
Paletización reactiva
Dolores
Rechazos
Penalidades
Falta de trazas de eventos intermedios

🟠 Etapa 4 – Aerolínea
ASIS
Cambio de aerolínea por: 
Tarifa
Sobreventa
Contingencia
Comunicación tardía
Dolores
Cliente se entera tarde
Reprocesos documentales
Pérdida de confianza

🟠 Etapa 5 – Cargue aeronave
ASIS
Último evento visible: “Accepted”
No se registran: 
Incidentes
Daños
Cambios operativos
Dolores
Cero trazabilidad de novedades en muelle
Reclamos sin evidencia

1.2 Proceso TOBE (modelo objetivo)
Principios de diseño
✅ Eventocéntrico, no documentocéntrico✅ Single Source of Truth✅ Datos versionados y auditables✅ Visibilidad en tiempo casi real✅ Modelo flexible a cambios

🔵 TOBE por etapa

🔵 Etapa 1 – Bodega / Prebooking inteligente
TOBE
Volumen y peso calculados digitalmente
Prebooking con reglas automatizadas
Versionamiento de información
Estados tempranos del envío
Eventos clave
Shipment Created
Weight & Volume Verified
Booking Confirmed
Shipment Cancelled (con causa)
✅ Resuelve:
Mal cubicaje
Cancelaciones informales
Cambios sin rastro

🔵 Etapa 2 – Transporte terrestre integrado
TOBE
Integración TMS o GPS
ETA dinámico
Alertas por desviación
Eventos
Truck Assigned
Out for Pickup
In Transit
Arrived at Cargo Terminal
✅ Resuelve:
Falta de visibilidad
Llegadas fuera de ventana

🔵 Etapa 3 – Terminal de carga (export digital)
TOBE
Prealerta electrónica al terminal
Match automático: 
Declarado vs recibido
Registro de inspecciones y seguridad
Eventos
Cargo Received
Security Screening Passed
ULD Build Started
Ready for Load
✅ Resuelve:
Rechazos
Incertidumbre operacional
Falta de trazas

🔵 Etapa 4 – Gestión dinámica de aerolíneas
TOBE
Motor de reglas: 
Tarifas
Disponibilidad
Prioridad
Cambio de aerolínea con workflow y trazabilidad
Eventos
Carrier Assigned
Carrier Changed (reason coded)
Flight Confirmed
✅ Resuelve:
Cambios opacos
Comunicación tardía

🔵 Etapa 5 – Cargue y cierre operacional
TOBE
Dispositivos móviles en rampa / muelle
Registro de novedades en tiempo real
Cierre digital del vuelo
Eventos
Loaded on Aircraft
Exception Reported
Flight Departed
✅ Resuelve:
Falta de traza en cargue
Reclamos sin evidencia
2.1 Arquitectura conceptual (alto nivel)
[Shipper Portal]
       |
[TMS / OMS]
       |
[ Logistics Control Tower ]
       |
-------------------------------------
| Event Bus / Event Streaming Layer |
-------------------------------------
   |        |        |        |
[WMS]   [Terminal] [Airline] [Mobile Ramp]
   |
[Data Lake / Analytics]
2.2 Componentes clave
1️⃣ Logistics Control Tower (núcleo)
👉 Cerebro del sistema
Funciones:
Orquestación de eventos
Estado del shipment endtoend
Gestión de excepciones
SLA / KPI
Tecnología típica:
Microservicios
Event sourcing
APIs REST / GraphQL

2️⃣ Modelo de datos estándar (CRÍTICO)
Basado en:
IATA ONE Record
Cargo iQ milestones
Conceptos clave:
Shipment
Piece
ULD
Flight
Event (con timestamp, actor, causa)
✅ Permite:
Versionamiento
Auditoría
Interoperabilidad

3️⃣ Capa de eventos (EventDriven Architecture)
Ejemplos:
Kafka / Azure Event Hub / AWS Kinesis
4️⃣ Integraciones claves

NFC, RFID y QR dinámicos encajan perfectamente para resolver trazabilidad, cambios operativos, y falta de eventos en tiempo real en transporte aéreo de carga si se usan de forma orquestada, no aislada.
Voy a responder como consultor experto, de manera muy práctica, cubriendo:
📐 Principio de diseño: cuándo usar NFC, RFID y QR
🔄 Modelo de identificación híbrido endtoend
✈️ Uso de cada tecnología por etapa (1–5)
🧠 Cómo resuelven tus 5 inconvenientes específicos
🏗️ Arquitectura técnica de soporte
🗺️ Buenas prácticas y errores comunes

1️⃣ Principio clave: no hay una sola tecnología ganadora
En carga aérea NO existe una tecnología única que resuelva todo:

✅ La clave es un modelo híbrido, donde cada tecnología actúa en el punto correcto del flujo.

2️⃣ Modelo de identificación híbrido (concepto base)
🎯 Objeto a trazar
No todo debe llevar RFID.

👉 Así se optimiza costo + automatización + visibilidad.

3️⃣ Uso de tecnologías por etapa (1–5)
🟢 Etapa 1 – Bodega / preparación de carga
📦 Qué se implementa
QR dinámico por bulto
NFC opcional por pallet prearmado
✔️ Qué permite
Asociar: 
dimensiones
peso
versión del shipment
Recalcular cubicaje automáticamente al escanear
📌 QR dinámico no “tiene datos fijos”, apunta a un Shipment Profile en la nube.
🔄 Si cambia el peso:
cambia el registro, no el código físico

🟢 Etapa 2 – Transporte terrestre (pickup → aeropuerto)
🚚 Tecnologías
QR dinámico escaneado al pickup
NFC para confirmación rápida del conductor
GPS del vehículo (complementario)
Eventos generados
Picked Up
Weight Verified at Origin
In Transit
✅ El camión no transporta papeles, transporta eventos

🟢 Etapa 3 – Terminal de carga aérea (export)
💡 Aquí está el punto crítico
Tecnologías usadas
RFID UHF en pallets / ULD
QR dinámico en piezas
Lectores RFID fijos en: 
Dock
Rayos X
Área de ULD build
Qué se logra
Matching automático: 
Declarado vs recibido
Registro invisible: 
Entrada
Movimiento interno
Detección temprana de inconsistencias
📍 Un pallet pasa por la puerta → evento automático:
PalletEnteredTerminal
✅ Sin intervención humana.

🟢 Etapa 4 – Gestión de aerolínea y cambios
✈️ Escenario típico
Cambio de aerolínea por mejor tarifa o contingencia
Qué hace la tecnología
El Shipment Profile se actualiza
El QR/NFC sigue siendo válido
El RFID del pallet se reasocia lógicamente al nuevo vuelo
📌 No se reetiqueta físicamente, se reversiona digitalmente
Eventos clave:
Carrier Changed
Flight Reassigned
ULD Reallocated

🟢 Etapa 5 – Cargue en avión (rampa)
📲 Tecnologías
Mobile app + NFC/QR
Lectores RFID en zona de rampa (si aplica)
Qué se captura (por primera vez de forma confiable)
Hora real de cargue
Novedades: 
Daño
Cambio de posición
Exclusión
Evidencia (foto + tag)
Evento:
LoadedOnAircraft
ExceptionReported
✅ Aquí se elimina el “cargamos pero nadie sabe qué pasó”.

4️⃣ Cómo estas tecnologías resuelven TUS 5 problemas

❌ 1. Falta de trazabilidad
✅ RFID → eventos automáticos ✅ QR/NFC → eventos manuales controlados
Resultado:
una línea de tiempo completa del shipment

❌ 2. Procesos manuales no integrados
✅ Cada escaneo = evento digital estándar ✅ Integración vía event bus
Resultado:
puntos manuales → digitales

❌ 3. Cambios de información (cubicaje, cancelaciones)
✅ QR dinámico + versionamiento ✅ Toda modificación queda auditada
Resultado:
cambios controlados, no caóticos

❌ 4. Cambios de aerolínea
✅ Separación:
Identificador físico
Lógica de transporte
Resultado:
cambio de aerolínea sin ruptura del flujo

❌ 5. Sin traza en cargue
✅ Mobile scanning + RFID rampa ✅ Evidencia operativa
Resultado:
cero “cajas negras” en rampa

5️⃣ Arquitectura técnica (foco RFID / QR / NFC)
[QR / NFC / RFID]
        |
[Mobile / Fixed Readers]
        |
[Edge Gateway]
        |
[Event Streaming (Kafka / Event Hub)]
        |
[Control Tower / Shipment Service]
        |
[WMS / Airline / Terminal]
Principios técnicos
Edge computing para RFID
Eventdriven (no polling)
Dispositivos desacoplados del core

6️⃣ Buenas prácticas (lecciones del mundo real)
✅ RFID solo en pallets/ULD✅ QR dinámico versionado (no estático)✅ Mobile first (iOS/Android rugged)✅ Estándares IATA (ONE Record, Cargo iQ)
🚫 RFID en cada caja (costoso y lento)🚫 Etiquetas con lógica embebida🚫 Dependencia de un solo proveedor
1️⃣ Catálogo de Eventos Logísticos + Tecnología Asociada
(Etapas 1–5 | Enfoque aéreo export MIA)
1.1 Principios del catálogo
Eventdriven, no status manuales
Cada evento tiene: 
Actor responsable
Tecnología que lo genera
Evidencia
Compatible con: 
Cargo iQ
IATA ONE Record

1.2 Catálogo de eventos maestro
🟦 ETAPA 1 – SHIPPER / BODEGA ORIGEN

🟦 ETAPA 2 – TRANSPORTE TERRESTRE (PRECARRIAGE)


🟦 ETAPA 3 – TERMINAL DE CARGA AÉREA (EXPORT)

📌 Aquí RFID es CRÍTICO
Lectura masiva
Sin intervención humana
🟦 ETAPA 4 – GESTIÓN DE AEROLÍNEA

🟦 ETAPA 5 – CARGUE EN RAMPA

📌 Este bloque resuelve el “punto ciego” más grave del proceso
3️⃣ Blueprint del MVP – RFID + QR + NFC (MIA)
3.1 Alcance del MVP
1 aerolínea
1 terminal de carga en MIA
Export
Sin aduanas (fase 2)

3.2 Blueprint funcional (flujo)
[Shipper]
  |
  | QR dinámico
  |
[Pickup Truck]
  | NFC + GPS
  |
[MIA Cargo Terminal]
  | RFID Gates + QR
  |
[ULD Build Area]
  | RFID Tracking
  |
[Ramp]
  | RFID / Mobile QR
  |
[Aircraft]

3.3 Blueprint técnico (arquitectura)
[QR / NFC / RFID]
        |
[Mobile Apps / RFID Readers]
        |
[Edge Gateway]
        |
[Event Bus (Kafka / Event Hub)]
        |
[Shipment Service]
        |
[Control Tower UI]
        |
[Airline API]

3.4 Servicios clave del MVP
🔹 Shipment Service
Versionamiento
Estados
Relación piezas ↔ pallets ↔ vuelo
🔹 Event Engine
Validación de eventos
Orden lógico
Gestión de excepciones
🔹 Control Tower
Línea de tiempo
Alertas
SLA / KPI

3.5 Casos de uso cubiertos por el MVP
✅ Trazabilidad endtoend✅ Cambio de aerolínea sin caos✅ Evidencia operativa en rampa✅ Eliminación de Excel / correo✅ Base para ONE Record
🧩 C4 – Nivel 1: Diagrama de Contexto (C1)
🎯 Objetivo
Mostrar cómo el sistema MVP de trazabilidad aérea se relaciona con actores externos.

C1 – Context Diagram
┌──────────────────┐
│     Shipper       │
│ (Bodega Origen)   │
└─────────┬────────┘
          │
          │ QR / Portal
          ▼
┌───────────────────────────────┐
│  Air Cargo Digital Platform   │
│   (RFID + QR + NFC MVP)       │
└─────────┬─────────┬─────────┘
          │         │
      API │         │ API / EDI
          ▼         ▼
┌────────────┐   ┌──────────────┐
│  Cargo      │   │   Airline     │
│ Terminal    │   │   System      │
│  (MIA)      │   └──────────────┘
└────────────┘
          │
          │ Mobile / RFID
          ▼
┌──────────────────┐
│ Ground Handling  │
│   / Ramp Ops     │
└──────────────────┘

Actores externos

✅ El sistema NO reemplaza a aerolínea o terminal✅ Actúa como capa de orquestación y trazabilidad

🧩 C4 – Nivel 2: Diagrama de Contenedores (C2)
🎯 Objetivo
Descomponer la plataforma en grandes bloques ejecutables.

C2 – Containers Diagram
┌───────────────────────────────────────────────┐
│        Air Cargo Digital Platform              │
│                                               │
│  ┌──────────────────────────────┐             │
│  │   Control Tower Web App       │             │
│  │ (Operaciones / Visibilidad)  │             │
│  └──────────────┬───────────────┘             │
│                 │ REST / WebSocket             │
│  ┌──────────────▼───────────────┐             │
│  │  API Gateway / BFF            │             │
│  └──────────────┬───────────────┘             │
│                 │                              │
│   ┌─────────────▼─────────────┐               │
│   │  Shipment Service          │               │
│   │  (ONE Record Light)        │               │
│   └─────────────┬─────────────┘               │
│                 │                              │
│   ┌─────────────▼─────────────┐               │
│   │  Event Processing Service  │               │
│   └─────────────┬─────────────┘               │
│                 │                              │
│   ┌─────────────▼─────────────┐               │
│   │   Integration Services     │               │
│   │ (Airline / Terminal)       │               │
│   └─────────────┬─────────────┘               │
│                 │                              │
│   ┌─────────────▼─────────────┐               │
│   │ Event Stream / Message Bus │               │
│   └───────────────────────────┘               │
└───────────────────────────────────────────────┘

Contenedores explicados
1️⃣ Control Tower Web App
Línea de tiempo del envío
Alertas
Gestión de excepciones
KPI operativos

2️⃣ API Gateway / BFF
Autenticación
Enrutamiento
Rate limiting
Backend For Frontend

3️⃣ Shipment Service (Core)
Modelo Shipment / Piece / ULD
Versionamiento
Estados
ONE Record simplificado

4️⃣ Event Processing Service
Consume eventos RFID / QR / NFC
Valida secuencia lógica
Genera milestones Cargo iQ

5️⃣ Integration Services
API aerolínea (vuelo, departure)
APIs terminal MIA
Mock inicial en MVP

6️⃣ Event Stream
Kafka / Event Hub
Fuente única de verdad de eventos

🧩 C4 – Nivel 3: Diagrama de Componentes (C3)
🎯 Objetivo
Mostrar qué vive dentro de cada contenedor, centrándonos en el core del MVP.

C3 – Shipment Service (ejemplo)
┌──────────────────────────────────────┐
│        Shipment Service               │
│                                      │
│ ┌───────────────┐  ┌───────────────┐ │
│ │ Shipment API  │  │ Piece API     │ │
│ └──────┬────────┘  └──────┬────────┘ │
│        │                    │          │
│ ┌──────▼────────────────────▼───────┐ │
│ │ Shipment Domain Model               │ │
│ │ - Shipment                          │ │
│ │ - Piece                             │ │
│ │ - Pallet / ULD                      │ │
│ │ - Flight Assignment                 │ │
│ └──────┬────────────────────────────┘ │
│        │                               │
│ ┌──────▼─────────────┐ ┌─────────────┐│
│ │ Versioning Engine  │ │ State Engine ││
│ └──────┬─────────────┘ └──────┬──────┘│
│        │                       │       │
│ ┌──────▼─────────────┐         │       │
│ │ Persistence Layer  │◄────────┘       │
│ │ (DB)               │                 │
│ └────────────────────┘                 │
└────────────────────────────────────────┘

Componentes críticos
🔹 Versioning Engine
Cada cambio = nueva versión del shipment
Base para auditoría y trazabilidad legal

🔹 State Engine
Controla transiciones válidas: 
Created → Picked → Received → Loaded

C3 – Event Processing Service
┌──────────────────────────────────────┐
│      Event Processing Service         │
│                                      │
│ ┌───────────────┐                    │
│ │ Event Ingest  │◄── RFID / QR / NFC │
│ └──────┬────────┘                    │
│        │                              │
│ ┌──────▼───────────────┐             │
│ │ Event Normalizer     │             │
│ └──────┬───────────────┘             │
│        │                              │
│ ┌──────▼───────────────┐             │
│ │ Business Rules Engine│             │
│ └──────┬───────────────┘             │
│        │                              │
│ ┌──────▼───────────────┐             │
│ │ Milestone Generator  │             │
│ └───────────────┬──────┘             │
│                 │                    │
│         Event Stream / Bus            │
└──────────────────────────────────────┘

🧩 C4 – Nivel 4: Diagrama de Código / Despliegue (C4)
🎯 Objetivo
Mostrar cómo se despliega el MVP en la práctica.

C4 – Deployment Diagram (simplificado)
┌──────────────────────────────┐
│        Mobile Devices         │
│  (QR / NFC / Camera / App)   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         Edge Layer             │
│  RFID Readers + Edge Gateway  │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     Cloud Platform (AWS/AZ)   │
│ ┌──────────────┐             │
│ │ API Gateway  │             │
│ └──────┬───────┘             │
│        │                     │
│ ┌──────▼──────────────┐      │
│ │ Microservices (ECS) │      │
│ ├ Shipment Service    │      │
│ ├ Event Processor     │      │
│ └ Integrations        │      │
│        │                     │
│ ┌──────▼──────────────┐      │
│ │ Event Bus (Kafka)   │      │
│ └──────┬──────────────┘      │
│        │                     │
│ ┌──────▼──────────────┐      │
│ │ DB / Data Store     │      │
│ └────────────────────┘      │
└──────────────────────────────┘
1️⃣ Convenciones del diagrama
Participantes (lifelines)
Shipper / Bodega
Mobile App (QR / NFC)
Edge / RFID
Event Bus
Shipment Service
Cargo Terminal (MIA)
Airline
Ramp Ops
Tipos de eventos
🟦 Evento de negocio
🟩 Evento automático (RFID)
🟨 Evento manual (QR / NFC)
🔴 Excepción

2️⃣ Diagrama de Secuencia – EndtoEnd (Happy Path)
🔹 Vista general
Shipper → Pickup → Terminal MIA → Airline → Ramp → Aircraft

🔹 Secuencia detallada
🟦 ETAPA 1 – Creación y preparación del shipment
Shipper
  |
  | (1) Create Shipment
  |------------------------------------>
  |        Shipment Service
  |         - ShipmentCreated
  |
  | (2) Label Pieces (QR dinámico)
  |------------------------------------>
  |        Shipment Service
  |         - PiecesLabeled
  |
  | (3) Capture Weight & Volume (QR scan)
  |------------------------------------>
  |        Shipment Service
  |         - WeightVolumeCaptured
✅ Resultado:
Shipment tiene versión 1
Cada pieza tiene identificador único
Cero papel

🟦 ETAPA 2 – Pickup y transporte terrestre (NFC + GPS)
Driver / Mobile App
  |
  | (4) Pickup Confirmed (NFC tap)
  |------------------------------------>
  |        Event Bus
  |------------------------------------>
  |        Shipment Service
  |         - PickupConfirmed
  |
  | (5) Departure from Origin
  |------------------------------------>
  |        Shipment Service
  |         - DepartureFromOrigin
📍 Tracking GPS corre en paralelo📍 ETA se recalcula automáticamente

🟦 ETAPA 3 – Recepción en Terminal de Carga MIA (RFID)
Truck
  |
  | (6) Arrived at Cargo Terminal (QR/NFC)
  |------------------------------------>
  |        Shipment Service
  |         - ArrivedAtCargoTerminal
RFID Gate (Dock)
  |
  | (7) Pallet detected
  |------------------------------------>
  |         Edge Gateway
  |------------------------------------>
  |         Event Bus
  |------------------------------------>
  |         Shipment Service
  |          - CargoReceived
RFID Gate (Security)
  |
  | (8) Passed X-Ray
  |------------------------------------>
  |         Shipment Service
  |          - SecurityScreeningPassed
✅ Lectura automática✅ Sin escaneo manual✅ Evidencia temporal perfecta

🟦 ETAPA 3B – Paletización / ULD build (RFID continuo)
ULD Build Area
  |
  | (9) ULD Build Started
  |------------------------------------>
  |        Shipment Service
  |         - ULDBuildStarted
RFID Zone Exit
  |
  | (10) Ready for Load
  |------------------------------------>
  |        Shipment Service
  |         - ReadyForLoad
✅ El sistema ya sabe:
Qué pallet
Con qué piezas
Para qué vuelo

🟦 ETAPA 4 – Asignación de aerolínea y vuelo
Cargo Ops
  |
  | (11) Assign Airline & Flight
  |------------------------------------>
  |        Shipment Service
  |         - CarrierAssigned
  |         - FlightConfirmed
📌 Esto no depende del RFID/QR, es lógica de negocio

🟦 ETAPA 5 – Cargue en rampa (RFID + mobile)
Ramp RFID Zone
  |
  | (12) Pallet enters Ramp
  |------------------------------------>
  |        Shipment Service
  |         - RampEntered
Ramp Operator / Mobile App
  |
  | (13) Load Confirmation (QR/RFID)
  |------------------------------------>
  |        Shipment Service
  |         - LoadedOnAircraft
Supervisor
  |
  | (14) Close Load
  |------------------------------------>
  |        Shipment Service
  |         - LoadCompleted
Airline System
  |
  | (15) Flight Departure
  |------------------------------------>
  |        Shipment Service
  |         - FlightDeparted
✅ Shipment queda cerrado operacionalmente✅ Trazabilidad completa hasta wheelsup
4️⃣ Qué problemas del negocio resuelve este diagrama

🧭 Blueprint específico – Carga aérea Export en MIA
(MIA + LATAM Cargo)

1️⃣ Contexto operativo real en MIA (baseline)
📍 Miami International Airport (MIA)
#1 aeropuerto de carga internacional en EE. UU. hacia LATAM
Operación altamente fragmentada: 
Forwarders
Truckers
Terminales dedicados por aerolínea
Windows de entrega muy estrictas
Gran volumen de: 
Pharma
Ecommerce
Retail
Perecederos

✈️ LATAM Cargo – Realidades
Usa: 
ULDs propios
Sistemas Cargo / SkyChain
Información hacia forwarders: 
EDI / Web portals
Muy poco evento granular
Ramp ops con procesos todavía manuales
✅ Esto hace a LATAM Cargo ideal para un MVP de trazabilidad, porque el valor se ve rápido.

2️⃣ Alcance EXACTO del MVP en MIA
✅ Incluido
Export shipments
1 terminal LATAM Cargo
1 cliente forwarder piloto
1 tipo de mercancía (ej: general cargo / ecommerce)
❌ Excluido (fase 2)
Aduanas USA (ACE)
Import
Sensores de temperatura
Billing

3️⃣ Blueprint físico-operativo (qué pasa y dónde)
📦 ETAPA 1 – Shipper / Warehouse (Miami area)
Ejemplo
Bodega en Doral / Medley
Tecnologías
QR dinámico en cada pieza
QR master por shipment
Báscula conectada
Flujo
Caja → QR scan → Weight & Volume → Shipment Created
📌 QR apunta a Shipment Profile en la nube, no a datos estáticos

🚚 ETAPA 2 – Trucking hacia MIA
Realidad MIA
Congestión
Colas en North Cargo
Multas por late arrival
Tecnologías
Mobile app del conductor
NFC tap en pickup
GPS del vehículo
Eventos críticos
PickupConfirmed
EnRoute
ArrivalAtLATAMTerminal
✅ Forwarder y terminal ven ETA real

🏭 ETAPA 3 – LATAM Cargo Terminal (export)
Zonas reales
Dock recepción
TSA screening
ULD build-up
Staging para rampa

🔁 Tecnología aplicada por zona
🟩 Dock de recepción
Portal RFID UHF
Lectura automática de pallets
Evento automático:
CargoReceived

🟩 Seguridad / TSA
Portal RFID o handheld
Asociación evento TSA
Evento:
SecurityScreeningPassed

🟩 ULD Build Area
Cada pallet / ULD tiene tag RFID
Lecturas al entrar / salir del área
Eventos:
ULDBuildStarted
ULDCompleted
✅ Aquí se elimina el Excel “ULD list”

✈️ ETAPA 4 – Asignación vuelo LATAM Cargo
Realidad LATAM
Cambios frecuentes: 
Slots
Overbooking
Consolidaciones
Qué hace el MVP
Lógica desacoplada: 
Shipment no “pertenece” físicamente al vuelo
Reasignación lógica sin reetiquetar
Evento clave:
CarrierChanged
FlightReassigned

🛫 ETAPA 5 – Rampa LATAM Cargo (punto crítico)
Problema real
“Lo cargamos… pero no sabemos exactamente cuándo ni qué pasó”

Tecnologías MVP
Handheld RFID / móvil
QR como fallback
Fotos + timestamp
Eventos capturados
RampEntered
LoadedOnAircraft
ExceptionReported
LoadClosed
📌 Este es el mayor salto de madurez del MVP

4️⃣ Blueprint tecnológico específico (MIA)
Arquitectura desplegada
[MIA Terminal]
 ├─ RFID Portals (Dock / TSA)
 ├─ RFID Handhelds
 └─ Edge Gateway (local)

        │
        ▼

[Cloud Platform – AWS/Azure US-East]
 ├─ Event Hub / Kafka
 ├─ Shipment Service (ONE Record light)
 ├─ Event Processing Service
 ├─ Integration LATAM (API/EDI)
 └─ Control Tower Web

        │
        ▼

[Forwarder + Ops + LATAM view]

5️⃣ Integración REAL con LATAM Cargo
OPCIÓN MVP (recomendada)
No integración profunda al inicio
LATAM sigue operando “igual”
El sistema: 
Escucha eventos propios
Confirma eventos oficiales (Fly / Departure)
Eventos federados:
FlightConfirmed
FlightDeparted
✅ Cero fricción política ✅ ROI rápido

6️⃣ Hardware mínimo en MIA (realista)


1️⃣ Wireframes por etapa (cómo integrarlos en el documento)
Los wireframes que ves representan pantallas clave del MVP, alineadas exactamente con las etapas 1–5 que modelamos.
🟦 ETAPA 1 – Shipment Creation (Bodega / Shipper)
Propósito del wireframe
Crear el shipment
Asociar piezas
Generar QR dinámicos
Componentes clave
Card de shipment
Acción “Create”
Placeholder para QR
✅ Úsalo en el documento para explicar:
“Aquí se digitaliza el shipment desde origen, se elimina Excel y se genera identidad digital.”

🟦 ETAPA 2 – In Transit (Pickup / Trucking)
Propósito
Confirmar pickup (NFC)
Mostrar ETA dinámico
Componentes
Icono de camión
Barra de progreso
ETA visible
✅ Ideal para explicar:
“La visibilidad comienza antes de llegar al aeropuerto.”

🟦 ETAPA 3 – Cargo Processing (Terminal MIA)
Propósito
Recepción
Seguridad
ULD build
Componentes
Checklist de eventos
Estado RFID automático
✅ Aquí conectas con:
RFID
Eliminación de procesos manuales

🟦 ETAPA 5 – Loading (Rampa)
Propósito
Confirmar cargue
Registrar novedades
Componentes
Estado visual
Acción “Confirm”
✅ Este wireframe justifica todo el proyecto, porque ataca el mayor punto ciego.

2️⃣ Mockups con línea gráfica del sector Cargo (propuesta estética)
Ahora, más allá del wireframe, para que el documento se vea enterprise / cargo / airportgrade, te propongo la línea gráfica base para los mockups finales (Figma, PowerPoint o PDF).

🎨 Lineamiento visual – Cargo & Aviation
Paleta de colores (ejemplo sector real)
Azul oscuro (confianza / aviación)
Gris industrial (terminal / metal)
Verde operativo (OK / clearance)
Ámbar (warning / attention)
Ejemplo:
#0B3C5D – Azul cargo
#A7A9AC – Gris terminal
#2E8B57 – Verde status
#F5A623 – Alertas

Tipografía recomendada
Inter
Roboto
IBM Plex Sans
(Usadas por aerolíneas, aeropuertos y plataformas logísticas reales)

Iconografía
Lineal
Estilo técnico (truck, pallet, ULD, aircraft)
Sin sombras pesadas

3️⃣ Mockups recomendados (qué pantallas incluir)
Para el documento de diseño, no necesitas todas las pantallas, solo estas 6 mockups clave:
✅ Mockup 1 – Control Tower (desktop)
Timeline del shipment
Eventos RFID / QR / NFC
Alertas
👉 Público objetivo: dirección + operaciones

✅ Mockup 2 – Shipment Detail (desktop)
Versionamiento
Estado
Relación piezas ↔ pallet ↔ vuelo
👉 Público objetivo: TI + compliance

✅ Mockup 3 – Mobile Pickup (driver)
NFC confirm
ETA
👉 Público objetivo: operación real

✅ Mockup 4 – Terminal Scan (handheld)
RFID detectado
Estado automático
👉 Público objetivo: terminal / aeropuerto

✅ Mockup 5 – Ramp Loading (mobile)
Confirmación cargue
Reporte de excepción con foto
👉 Público objetivo: LATAM / handling

✅ Mockup 6 – Executive Dashboard
KPIs
OTIF
Incidencias
👉 Público objetivo: CLevel


Frames


