export function About() {
  return (
    <section
      id="nosotros"
      className="border-t border-[#3A3733] bg-[#24221F] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C58B52]">
              Nuestra historia
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#F8F5EF] sm:text-6xl">
              De La Calera
              <br />
              a Villas de Granada.
            </h2>

            <div className="mt-10 h-px w-16 bg-[#C58B52]" />

            <p className="mt-6 max-w-md text-lg leading-8 text-[#D8D1C7]">
              Una historia que comenzó en 2021 y que hoy continúa en una nueva
              etapa.
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#F8F5EF]">
              El Puerquito Caleruno nació en <strong>La Calera, Cundinamarca</strong>,
              en medio de la pandemia del COVID-19. En 2021 comenzó como una
              alternativa de ingresos para nuestra familia y, desde el inicio,
              estuvo liderado por <strong>Mónica Cortes</strong>.
            </p>

            <p className="mt-6 text-base leading-8 text-[#BEB6AC]">
              Con trabajo, dedicación y mucho cariño por lo que hacemos, fuimos
              ganando reconocimiento a nivel municipal. Poco a poco expandimos
              nuestra zona de atención a municipios vecinos como <strong>Sopó</strong>
              y <strong>Guasca</strong>.
            </p>

            <p className="mt-6 text-base leading-8 text-[#BEB6AC]">
              En este camino hemos participado en ferias de emprendimiento y
              fuimos invitados especiales a una feria comercial en el Centro
              Comercial <strong className="text-[#D8D1C7]">La Calera Gardens</strong>.
              También hemos llevado nuestro sabor a eventos muy variados:
              desde celebraciones de 15 años hasta eventos de carácter político,
              siempre procurando mantener la calidad y la amabilidad que nos
              caracterizan.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-4">
          <div className="border-l border-[#C58B52] px-5 py-4">
            <p className="font-serif text-3xl text-[#F8F5EF]">2021</p>
            <p className="mt-2 text-sm leading-6 text-[#BEB6AC]">
              Nace El Puerquito Caleruno en La Calera.
            </p>
          </div>

          <div className="border-l border-[#5A544D] px-5 py-4">
            <p className="font-serif text-3xl text-[#F8F5EF]">La Calera</p>
            <p className="mt-2 text-sm leading-6 text-[#BEB6AC]">
              Reconocimiento y crecimiento a nivel municipal.
            </p>
          </div>

          <div className="border-l border-[#5A544D] px-5 py-4">
            <p className="font-serif text-3xl text-[#F8F5EF]">Sopó · Guasca</p>
            <p className="mt-2 text-sm leading-6 text-[#BEB6AC]">
              Llevamos nuestro sabor a nuevos municipios y eventos.
            </p>
          </div>

          <div className="border-l border-[#C58B52] px-5 py-4">
            <p className="font-serif text-3xl text-[#F8F5EF]">Hoy</p>
            <p className="mt-2 text-sm leading-6 text-[#BEB6AC]">
              Una nueva etapa comienza en Villas de Granada, Bogotá.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#3A3733] pt-10">
          <p className="font-serif text-3xl leading-tight text-[#F8F5EF] sm:text-4xl">
            La historia comenzó en La Calera.
            <br />
            <span className="text-[#C58B52]">
              Hoy continúa en Villas de Granada.
            </span>
          </p>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#BEB6AC]">
            El Puerquito Caleruno · Desde 2021
          </p>
        </div>
      </div>
    </section>
  );
}
