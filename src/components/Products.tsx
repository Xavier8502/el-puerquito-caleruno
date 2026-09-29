import Image from "next/image";

const whatsappComplete =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20completa%20con%20El%20Puerquito%20Caleruno.";

const whatsappCushion =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20un%20coj%C3%ADn%20de%20lechona%20con%20El%20Puerquito%20Caleruno.";

export function Products() {
  return (
    <section
      id="productos"
      className="border-t border-[#E7DED4] bg-[#FFFDFC] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8A3327]">
            Para compartir
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-[#24221F] sm:text-5xl">
            ¿Qué vas a compartir?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#5D5851] sm:text-lg">
            Elige la opción que mejor se adapte a tu celebración.
          </p>
        </div>

        {/* Products */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Complete lechona */}
          <article className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/lechona-completa.jpg"
                alt="Lechona completa de El Puerquito Caleruno"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#F8F5EF]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8A3327] backdrop-blur-sm">
                Con cabeza
              </div>
            </div>

            <div className="p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
                Opción 01
              </p>

              <h3 className="mt-2 font-serif text-3xl tracking-[-0.02em] text-[#24221F]">
                Lechona completa
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5D5851]">
                La lechona tradicional completa, preparada para compartir en
                tus celebraciones.
              </p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-[#24221F]">
                    50 — 200
                  </p>

                  <p className="mt-1 text-sm text-[#6B655D]">
                    platos · incrementos de 10
                  </p>
                </div>

                <a
                  href={whatsappComplete}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-[#8A3327] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#742A21]"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </article>

          {/* Cushion */}
          <article className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/lechona-interior.jpg"
                alt="Cojín de lechona de El Puerquito Caleruno"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#F8F5EF]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8A3327] backdrop-blur-sm">
                Sin cabeza
              </div>
            </div>

            <div className="p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
                Opción 02
              </p>

              <h3 className="mt-2 font-serif text-3xl tracking-[-0.02em] text-[#24221F]">
                Cojín de lechona
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5D5851]">
                Una opción práctica para compartir, con toda la abundancia y
                sabor de nuestra lechona.
              </p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-[#24221F]">
                    20 — 200
                  </p>

                  <p className="mt-1 text-sm text-[#6B655D]">
                    platos · incrementos de 10
                  </p>
                </div>

                <a
                  href={whatsappCushion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-[#8A3327] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#742A21]"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Important clarification */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-6 text-[#6B655D]">
            No vendemos platos individuales. Los pedidos se realizan completos según
            la cantidad de platos: lechona completa desde 50 y cojín desde 20.
          </p>
        </div>
      </div>
    </section>
  );
}