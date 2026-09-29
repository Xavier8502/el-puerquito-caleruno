import Image from "next/image";

const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20con%20El%20Puerquito%20Caleruno.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#F8F5EF]"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-12 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 lg:pb-16 lg:pt-24">
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#8A3327]">
            Lechona · Desde 2021
          </p>

          <h1 className="font-serif text-[4rem] leading-[0.91] tracking-[-0.045em] text-[#24221F] sm:text-6xl lg:text-[5.75rem]">
            <span className="block">Mucha carne.</span>
            <span className="block">Poca grasa.</span>
            <span className="block text-[#8A3327]">
              Mucho por compartir.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-[#5D5851] sm:text-lg sm:leading-8">
            Lechonas completas y cojines para celebrar en grande, con mucha carne,
            poca grasa y opción de servicio de servida.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#8A3327] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#8A3327]/20 transition-all duration-200 hover:-translate-y-1 hover:bg-[#742A21] hover:shadow-xl"
            >
              Cotizar por WhatsApp
            </a>

            <span className="text-sm font-medium text-[#6B655D]">
              314 768 6244
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#6B655D]">
            <span>Bogotá - Barrio Villas de Granada</span>
            <span className="text-[#C58B52]">·</span>
            <span>La Calera</span>
            <span className="text-[#C58B52]">·</span>
            <span>Sopó</span>
            <span className="text-[#C58B52]">·</span>
            <span>Guasca</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative min-h-[460px] lg:min-h-[680px]">
          <div className="absolute -right-10 top-1/2 h-[80%] w-[80%] -translate-y-1/2 rounded-full bg-[#C58B52]/15 blur-3xl" />

          <div className="relative h-full min-h-[460px] overflow-hidden rounded-[2rem] shadow-2xl lg:min-h-[680px]">
            <Image
              src="/images/hero-lechona.jpg"
              alt="Lechona de El Puerquito Caleruno"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}