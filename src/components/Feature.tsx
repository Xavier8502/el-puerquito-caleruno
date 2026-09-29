import Image from "next/image";

export function Feature() {
  return (
    <section className="border-t border-[#3B3834] overflow-hidden bg-[#24221F] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Content */}
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C58B52]">
            Nuestro diferencial
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#F8F5EF] sm:text-6xl lg:text-7xl">
            Mucha carne.
            <br />
            <span className="text-[#C58B52]">Se nota.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-[#D8D1C7] sm:text-lg">
            La diferencia se ve desde el primer corte: una lechona generosa,
            preparada para que haya mucho para servir y mucho para compartir.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-[#C58B52]" />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F8F5EF]">
              Hecha para compartir
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-[#C58B52]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/lechona-interior.jpg"
              alt="Interior de una lechona de El Puerquito Caleruno con abundante carne"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}