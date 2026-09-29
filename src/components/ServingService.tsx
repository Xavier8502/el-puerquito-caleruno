const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20con%20servicio%20de%20servida.";

export function ServingService() {
  return (
    <section
      id="servida"
      className="border-t border-[#E7DED4] bg-[#FFFDFC] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8A3327]">
            Servicio adicional
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-[#24221F] sm:text-5xl">
            ¿Quieres que nosotros la sirvamos?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#5D5851] sm:text-lg">
            Nos encargamos de servir tu lechona para que tú solo tengas que
            disfrutar y compartir.
          </p>
        </div>

        {/* Service */}
        <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
          {/* Price */}
          <div className="flex flex-col justify-center bg-[#8A3327] p-8 text-white sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F8D9B7]">
              Servicio de servida
            </p>

            <p className="mt-5 font-serif text-6xl tracking-[-0.04em] sm:text-7xl">
              $90.000
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
              Un servicio pensado para que puedas disfrutar la celebración
              junto a tus invitados.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#8A3327] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Consultar disponibilidad
            </a>
          </div>

          {/* Included */}
          <div className="p-8 sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#24221F]">
              El servicio incluye
            </p>

            <div className="mt-8 space-y-6">
              <ServiceItem
                title="Servida de la lechona"
                description="Nos encargamos de servir el pedido durante tu celebración."
              />

              <ServiceItem
                title="Platos y cubiertos"
                description="Incluidos con tu pedido, con o sin servicio de servida."
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-[#6B655D]">
          También puedes pedir tu lechona o cojín sin servicio de servida.
        </p>
      </div>
    </section>
  );
}

function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E5D8] text-xs font-bold text-[#8A3327]">
        ✓
      </div>

      <div>
        <h3 className="font-semibold text-[#24221F]">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-[#6B655D]">
          {description}
        </p>
      </div>
    </div>
  );
}