export function ProcessVideo() {
  return (
    <section className="border-t border-[#E7DED4] bg-[#F3EEE7] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Content */}
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8A3327]">
            Así la preparamos
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#24221F] sm:text-6xl">
            Del horno
            <br />
            a tu
            <br />
            <span className="text-[#8A3327]">celebración.</span>
          </h2>

          <p className="mt-7 text-base leading-8 text-[#5D5851] sm:text-lg">
            Preparamos nuestras lechonas pensando en lo más importante:
            que haya mucho para compartir.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-[#C58B52]" />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#24221F]">
              Hecha para compartir
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -inset-6 rounded-[3rem] bg-[#C58B52]/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#24221F] shadow-2xl">
            <video
              className="block h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/lechona-proceso-poster.jpg"
            >
              <source
                src="/videos/lechona-proceso.mp4"
                type="video/mp4"
              />

              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}