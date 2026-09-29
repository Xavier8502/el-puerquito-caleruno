const whatsappUrl =
  "https://wa.me/573147686244?text=Hola%20M%C3%B3nica%2C%20quiero%20cotizar%20una%20lechona%20con%20El%20Puerquito%20Caleruno.";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="El Puerquito Caleruno"
          className="group flex items-center gap-3"
        >
          <span className="h-11 w-1 rounded-full bg-[#C58B52] transition-transform duration-200 group-hover:scale-y-110" />

          <span className="flex flex-col">
            <span className="text-[10px] font-bold uppercase leading-none tracking-[0.38em] text-[#8A3327]">
              El
            </span>

            <span className="mt-1 font-serif text-[1.8rem] font-bold leading-[0.9] tracking-[-0.045em] text-[#24221F] transition-colors duration-200 group-hover:text-[#8A3327] sm:text-[2rem]">
              Puerquito
            </span>

            <span className="mt-1 text-[0.72rem] font-bold uppercase leading-none tracking-[0.28em] text-[#5D5851]">
              Caleruno
            </span>
          </span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#8A3327] px-5 py-3 text-xs font-bold text-white shadow-md shadow-[#8A3327]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#742A21] hover:shadow-lg sm:px-6 sm:text-sm"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
