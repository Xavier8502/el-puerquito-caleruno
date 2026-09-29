const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20con%20El%20Puerquito%20Caleruno.";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#24221F] px-6 py-12 text-[#F8F5EF] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C58B52]">
              El Puerquito Caleruno
            </p>

            <p className="mt-4 max-w-sm font-serif text-2xl leading-tight">
              Mucha carne. Poca grasa. Mucho por compartir.
            </p>

            <p className="mt-5 text-sm text-[#AFA79D]">
              Lechonas completas y cojines desde 2021.
            </p>
          </div>

          {/* Coverage */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
              Cobertura
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#D1CAC1]">
              <li>Bogotá - Barrio Villas de Granada</li>
              <li>La Calera</li>
              <li>Sopó</li>
              <li>Guasca</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C58B52]">
              Contacto
            </p>

            <p className="mt-5 text-sm text-[#D1CAC1]">
              WhatsApp
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-lg font-semibold text-white transition-colors hover:text-[#C58B52]"
            >
              314 768 6244
            </a>

            <p className="mt-5 text-sm text-[#AFA79D]">
              Propietaria: Mónica Cortes
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#8F8880] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} El Puerquito Caleruno
          </p>

          <p>
            Lechona para compartir.
          </p>
        </div>
      </div>
    </footer>
  );
}