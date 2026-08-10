import Container from "../ui/Container";

const navigation = [
  ["Solutions", "#solutions"],
  ["Work", "#featured-work"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Insights", "#faq"],
  ["Contact", "#contact"],
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f4f4f1] pb-8 pt-16 sm:pt-20 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(119,132,137,.18),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[18%] top-0 w-px bg-[linear-gradient(180deg,transparent,rgba(121,134,139,.08),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-[22%] top-0 w-px bg-[linear-gradient(180deg,transparent,rgba(121,134,139,.07),transparent)]" />

      <Container className="relative z-10 max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <p className="text-[clamp(3.8rem,8vw,8.6rem)] font-semibold leading-[.86] tracking-[-.075em] text-[#202b30]">
              FINCHX AI
            </p>
            <p className="mt-7 text-[15px] font-medium tracking-[.02em] text-[#66747a] sm:text-[17px]">
              Business Growth Partner
            </p>
          </div>

          <div className="grid gap-14 sm:grid-cols-2">
            <nav aria-label="Footer navigation">
              <ul className="grid gap-4">
                {navigation.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[14px] font-medium text-[#53636a] transition-colors duration-300 hover:text-[#92784e]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid content-start gap-5">
              <a href="https://www.linkedin.com/company/finchx-ai" target="_blank" rel="noreferrer" className="w-fit text-[14px] font-medium text-[#53636a] transition-colors duration-300 hover:text-[#92784e]">LinkedIn</a>
              <a href="mailto:hello@finchx.ai" className="w-fit text-[14px] font-medium text-[#53636a] transition-colors duration-300 hover:text-[#92784e]">Email</a>

              <form action="mailto:hello@finchx.ai?subject=Newsletter%20Signup" method="post" encType="text/plain" className="mt-6">
                <label htmlFor="footer-email" className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#8c7958]">Newsletter</label>
                <div className="mt-3 flex max-w-[360px] items-center rounded-full border border-white/82 bg-white/42 p-1.5 shadow-[inset_0_1px_0_white,0_12px_28px_rgba(57,70,76,.05)] backdrop-blur-xl">
                  <input id="footer-email" required type="email" name="email" autoComplete="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 py-2 text-[13px] text-[#42545b] outline-none placeholder:text-[#8b969a]" />
                  <button type="submit" className="rounded-full border border-[#dfcba6]/70 bg-[#ead9b9]/55 px-4 py-2 text-[11px] font-semibold text-[#5b4b34] transition-colors duration-300 hover:bg-[#dfc28e]/72">Join</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px bg-[linear-gradient(90deg,rgba(111,125,131,.05),rgba(111,125,131,.2),rgba(111,125,131,.05))] sm:mt-20" />
        <div className="flex flex-col gap-3 pt-7 text-[11px] font-medium tracking-[.04em] text-[#7a878c] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FINCHX AI</p>
          <p>Crafted with Intelligence.</p>
        </div>
      </Container>
    </footer>
  );
}
