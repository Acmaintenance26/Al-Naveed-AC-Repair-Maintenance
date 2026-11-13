const steps = [
  {
    title: "Contact our team",
    text: "Call, send a WhatsApp message or fill in the booking request form. We are open 24 hours.",
  },
  {
    title: "Explain your AC problem",
    text: "Tell us what the unit is doing, what type it is and where you are. A photo helps.",
  },
  {
    title: "Arrange an inspection",
    text: "We agree a time with you, and a technician inspects the system at your property.",
  },
  {
    title: "Receive the recommended service",
    text: "You are told what was found and what is advised. The work goes ahead once you agree.",
  },
];

export function HowItWorks() {
  return (
    <section className="section on-dark bg-navy" aria-labelledby="how-heading">
      <div className="shell">
        <div className="max-w-[38rem]">
          <h2 id="how-heading" className="t-h2">
            How it works
          </h2>
          <p className="t-lead mt-5">Four steps from a warm room to a cool one.</p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li key={s.title} className="relative lg:pr-10">
              <div className="flex items-center gap-4">
                <span className="tabular flex size-11 shrink-0 items-center justify-center rounded-full border border-sky/60 text-[1.0625rem] font-bold text-sky">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/15 lg:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="t-small mt-2.5 max-w-[34ch]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
