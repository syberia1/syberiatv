/**
 * SYBERIATV — Kino app theme (apiVersion 18)
 */
export async function screen(args) {
  const active = args && args.activeTheme;
  const on = active === "syberia";

  const goOn = { useTheme: { theme: "syberia" }, setExperience: "full" };
  const goOff = { useTheme: { theme: null } };

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
        { type: "SizedBox", height: 8 },
        {
          type: "Text",
          text: on
            ? "Tema activo: negro, degradado fucsia y estilo liquid glass."
            : "Tema oscuro liquid glass: negro, degradado fucsia/rosado, bordes muy redondeados y barra de reproducción destacada.",
          style: "bodyMedium",
          color: "#E0A8C8"
        },
        { type: "SizedBox", height: 24 },
        {
          type: "ElevatedButton",
          labelText: on ? "Desactivar SYBERIATV" : "Activar SYBERIATV",
          labelTextEn: on ? "Turn off SYBERIATV" : "Turn on SYBERIATV",
          backgroundColor: "#FF2D95",
          foregroundColor: "#FFFFFF",
          onPressed: { go: on ? goOff : goOn }
        },
        { type: "SizedBox", height: 12 },
        {
          type: "Text",
          text: "Recomendado: experiencia visual completa (Ajustes) para maximizar bordes redondeados y efectos.",
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
