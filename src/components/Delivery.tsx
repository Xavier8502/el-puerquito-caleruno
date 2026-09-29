const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20consultar%20la%20entrega%20de%20mi%20pedido%20con%20El%20Puerquito%20Caleruno.";

export function Delivery() {
  return (
    <section
      id="entrega"
      className="border-t border-[#E7DED4] bg-[#F3EEE7] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8A3327]">
            Cobertura y entrega
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-[#24221F] sm:text-5xl">
            Llevamos tu lechona
          </h2>

          <p className="mt-5 text-base leading-7 text-[#5D5851] sm:text-lg">
            Atendemos pedidos en Bogotá - Barrio Villas de Granada, La Calera, Sopó y Guasca.
          </p>
        </div>

        {/* Coverage */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Bogotá - Barrio Villas de Granada", "La Calera", "Sopó", "Guasca"].map((location) => (
            <span
              key={location}
              className="rounded-full border border-[#DCCFC1] bg-white px-5 py-2.5 text-sm font-medium text-[#4F4A44]"
            >
              {location}
            </span>
          ))}
        </div>

        {/* Delivery options */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Domicilio */}
          <article className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E5D8] text-[#8A3327]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                />
              </svg>
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
              Opción 01
            </p>

            <h3 className="mt-2 font-serif text-3xl text-[#24221F]">
              Domicilio
            </h3>

            <p className="mt-4 text-base leading-7 text-[#6B655D]">
              Coordinamos la entrega de tu pedido para que recibas la
              lechona donde la necesitas.
            </p>
          </article>

          {/* Transporte público */}
          <article className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E5D8] text-[#8A3327]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 17h14M6 17V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10M8 9h8M8 13h8M8 20h2M14 20h2"
                />
              </svg>
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
              Opción 02
            </p>

            <h3 className="mt-2 font-serif text-3xl text-[#24221F]">
              Transporte público
            </h3>

            <p className="mt-4 text-base leading-7 text-[#6B655D]">
              También podemos enviar tu pedido mediante transporte público
              para que lo reclames en el paradero correspondiente.
            </p>

            <p className="mt-5 text-sm font-semibold text-[#8A3327]">
              Coordinamos contigo el paradero de entrega.
            </p>
          </article>
        </div>

        {/* Delivery highlight */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-[#24221F] px-8 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
              Entrega
            </p>

            <p className="mt-2 font-serif text-2xl text-[#F8F5EF]">
              La entrega no tiene costo adicional.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#8A3327] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#742A21]"
          >
            Consultar entrega
          </a>
        </div>
      </div>
    </section>
  );
}