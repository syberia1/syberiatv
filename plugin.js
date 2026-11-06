/**
 * SYBERIATV — Kino app theme pack (apiVersion 18)
 * Two looks: SYBERIATV (neon fuchsia) and SYBERIATV Suave.
 * Logo of Kino stays 100% original.
 */
export async function screen(args) {
  const active = args && args.activeTheme;
  const onMain = active === "syberia";
  const onSoft = active === "syberia-soft";

  return {
    type: "Scaffold",
    backgroundColor: "#050508",
    appBar: {
      type: "AppBar",
      title: "SYBERIATV",
      mergeWithKinoBar: true,
      dense: true,
      leading: { close: true }
    },
    body: {
      type: "ListView",
      padding: 20,
      children: [
        {
          type: "Text",
          text: "SYBERIATV",
          style: "headlineMedium",
          color: "#FF2D95"
        },
        { type: "SizedBox", height: 6 },
        {
          type: "Text",
          text: "Liquid glass oscuro con fucsia. El logo de Kino no se modifica.",
          style: "bodyMedium",
          color: "#E0A8C8"
        },
        { type: "SizedBox", height: 20 },
        {
          type: "Text",
          text: "Variantes",
          style: "titleMedium",
          color: "#FFF5FA"
        },
        { type: "SizedBox", height: 10 },
        {
          type: "ElevatedButton",
          labelText: onMain ? "SYBERIATV · activo" : "Activar SYBERIATV",
          labelTextEn: onMain ? "SYBERIATV · on" : "Turn on SYBERIATV",
          backgroundColor: onMain ? "#FF7AB8" : "#D5006D",
          foregroundColor: "#FFFFFF",
          onPressed: {
            go: onMain
              ? { useTheme: { theme: null } }
              : { useTheme: { theme: "syberia" }, setExperience: "full" }
          }
        },
        { type: "SizedBox", height: 8 },
        {
          type: "Text",
          text: "Neon fucsia, bordes máximos, barra de reproducción gruesa, sombras y zoom al enfocar.",
          style: "bodySmall",
          color: "#B3B3B3"
        },
        { type: "SizedBox", height: 16 },
        {
          type: "ElevatedButton",
          labelText: onSoft ? "SYBERIATV Suave · activo" : "Activar SYBERIATV Suave",
          labelTextEn: onSoft ? "SYBERIATV Soft · on" : "Turn on SYBERIATV Soft",
          backgroundColor: onSoft ? "#E891C0" : "#C2185B",
          foregroundColor: "#FFFFFF",
          onPressed: {
            go: onSoft
              ? { useTheme: { theme: null } }
              : { useTheme: { theme: "syberia-soft" }, setExperience: "full" }
          }
        },
        { type: "SizedBox", height: 8 },
        {
          type: "Text",
          text: "Misma familia, menos neon: ideal si quieres algo más discreto.",
          style: "bodySmall",
          color: "#B3B3B3"
        },
        { type: "SizedBox", height: 24 },
        {
          type: "Text",
          text: "Qué incluye el tema",
          style: "titleMedium",
          color: "#FFF5FA"
        },
        { type: "SizedBox", height: 8 },
        {
          type: "Text",
          text: "• Degradado negro → fucsia\n• Tarjetas y botones muy redondeados\n• Acento fucsia en favoritos y controles\n• Barra de seek más gruesa (player)\n• Sombras y movimiento suaves\n• Ajustes del usuario: color, radios, seek, tipografía\n• Perfiles distintos en móvil y TV",
          style: "bodySmall",
          color: "#E0A8C8"
        },
        { type: "SizedBox", height: 16 },
        {
          type: "Text",
          text: "Tras activarlo, en Ajustes del tema puedes retocar acento, bordes y grosor de la barra.",
          style: "bodySmall",
          color: "#B3B3B3"
        }
      ]
    }
  };
}

export async function screenEvent() {
  return null;
}
