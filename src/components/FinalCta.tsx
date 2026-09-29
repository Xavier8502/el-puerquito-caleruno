const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20con%20El%20Puerquito%20Caleruno.";

export function FinalCta() {
  return (
    <section className="border-t border-[#E7DED4] bg-[#F8F5EF] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#8A3327] px-8 py-16 text-center shadow-xl sm:px-12 lg:px-16 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F8D9B7]">
          Haz tu pedido
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
          Mucho por compartir.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
          Cuéntanos cuántos platos necesitas y te ayudamos a elegir y cotizar
          tu lechona completa o cojín.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#8A3327] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
        >
          Cotizar por WhatsApp
        </a>

        <p className="mt-5 text-sm text-white/65">
          314 768 6244
        </p>
      </div>
    </section>
  );
}