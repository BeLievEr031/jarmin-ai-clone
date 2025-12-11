
function App() {
  return (
    <div className="relative isolate min-h-screen font-['Roboto',sans-serif] text-white">
      <div
        className="-z-10"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "radial-gradient(rgb(10, 22, 40) 0%, rgb(0, 5, 17) 100%)",
          filter: "blur(8px)"
        }}
      >
        <canvas
          data-engine="three.js r180"
          width={1536}
          height={390}
          style={{ display: "block", width: 1536, height: 390 }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[25vh] bg-gradient-to-b from-black via-black/95 to-transparent"
      />
      <section className="relative z-10">
        <div className="absolute top-6 left-6 z-20">
          <img alt="Jarmin AI Logo" className="h-12 w-12" src="https://www.jarmin.ai/favicon.png" />
        </div>
        <div className="flex min-h-[45vh] items-center justify-center px-6 py-12  bg-gradient-to-b from-black via-black to-transparent">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 md:backdrop-blur-sm">
              <img alt="Y Combinator" className="h-5 w-5" src="https://www.jarmin.ai/yc-logo.avif" />
              <span className="text-sm font-medium text-gray-300">
                Backed by Y Combinator
              </span>
            </div>
            <div className="mx-auto max-w-2xl mt-6 pb-4">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-wider bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] uppercase">
                primeml
              </h2>
            </div>
            <h1 className="pb-4 text-5xl  eading-tight tracking-tight text-transparent drop-shadow-2xl sm:text-6xl lg:text-7xl">
              <span className="text-white bg-clip-text">24/7 ML Eng employees</span>
            </h1>
            <div className="w-full pb-8 mt-16">
              <div className="mx-auto max-w-4xl px-6 md:max-w-2xl">
                <div className="flex flex-col items-center gap-2 text-center">
                  <h3 className="text-lg  text-white italic">Team from</h3>
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 lg:gap-x-10 w-full">
                    <div className="flex w-[calc(50%-0.75rem)] lg:w-auto flex-col items-center justify-center gap-2">
                      <img
                        alt="Apple Logo"
                        loading="lazy"
                        width={220}
                        height={110}
                        decoding="async"
                        className="h-auto object-contain w-24 sm:w-28 lg:w-32"
                        src="https://www.jarmin.ai/logos/apple_logo.svg"
                        style={{
                          filter:
                            "brightness(0) invert(85%) sepia(0%) saturate(0%) hue-rotate(136deg) brightness(107%) contrast(96%)"
                        }}
                      />
                    </div>
                    <div className="flex w-[calc(50%-0.75rem)] lg:w-auto flex-col items-center justify-center gap-2">
                      <img
                        alt="Meta Logo"
                        loading="lazy"
                        width={240}
                        height={120}
                        decoding="async"
                        className="h-auto object-contain w-24 sm:w-28 lg:w-32"
                        src="https://www.jarmin.ai/logos/meta_logo.svg"
                        style={{
                          filter:
                            "brightness(0) invert(85%) sepia(0%) saturate(0%) hue-rotate(136deg) brightness(107%) contrast(96%)"
                        }}
                      />
                      <p className="text-xs lg:text-sm text-white/80 font-medium whitespace-nowrap">
                        Super intelligence Labs
                      </p>
                    </div>
                    <div className="flex w-[calc(50%-0.75rem)] lg:w-auto flex-col items-center justify-center gap-2">
                      <img
                        alt="AWS Logo"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        className="h-auto object-contain w-24 sm:w-28 lg:w-32"
                        src="https://www.jarmin.ai/logos/aws-logo.png"
                        style={{
                          filter:
                            "brightness(0) invert(85%) sepia(0%) saturate(0%) hue-rotate(136deg) brightness(107%) contrast(96%)"
                        }}
                      />
                    </div>
                    <div className="flex w-[calc(50%-0.75rem)] lg:w-auto flex-col items-center justify-center gap-2">
                      <img
                        alt="Lockheed Martin Logo"
                        loading="lazy"
                        width={600}
                        height={200}
                        decoding="async"
                        className="h-auto object-contain w-36 sm:w-48 lg:w-[18rem]"
                        src="https://www.jarmin.ai/logos/lockheed_martin_logo.svg"
                        style={{
                          filter:
                            "brightness(0) invert(85%) sepia(0%) saturate(0%) hue-rotate(136deg) brightness(107%) contrast(96%)"
                        }}
                      />
                    </div>
                    <div className="flex w-[calc(50%-0.75rem)] lg:w-auto flex-col items-center justify-center gap-2">
                      <img
                        alt="JP Morgan Chase Logo"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        className="h-auto object-contain w-24 sm:w-28 lg:w-32"
                        src="https://www.jarmin.ai/logos/jp-chase.png"
                        style={{
                          filter:
                            "brightness(0) invert(85%) sepia(0%) saturate(0%) hue-rotate(136deg) brightness(107%) contrast(96%)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-8 md:max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/10 px-6 py-8 shadow-[0_0_60px_rgba(15,23,42,0.45)] backdrop-blur-xl md:px-10 md:py-12">
            <article className="relative prose prose-lg prose-invert max-w-none">
              <div className="space-y-8 text-lg leading-relaxed text-white md:text-xl">
                <p>
                  Intelligence has always been humanity's most asymmetrically
                  powerful resource. A single physicist conceived relativity. A
                  dozen engineers built the transistor. A small team at Xerox PARC
                  invented modern computing.
                </p>
                <p>
                  The pattern is clear: breakthrough capability concentrated in
                  exceptional minds moves civilization forward in leaps. But machine
                  learning, the technology reshaping every industry, has inverted
                  this. Today's AI revolution is bottlenecked by two brutal
                  constraints: compute and talent.
                </p>
                <p>
                  Companies with billion-dollar visions hire recruiters to compete
                  for the same few hundred ML engineers. Brilliant founders who can
                  architect entire systems are blocked by their inability to hire
                  someone who can implement them. And the vast majority of
                  businesses that could benefit from ML never even try, because the
                  entry barrier isn't capital or data. It's expertise.
                </p>
                <p>
                  The capability to build sophisticated ML systems exists. The need
                  for those systems is everywhere. What's missing is the transfer
                  mechanism: a way to package world-class ML engineering judgment
                  and deploy it wherever ambitious problems live.
                </p>
                <p>
                  <span className="font-bold italic">
                    At Prime ML, we're building a system that thinks like exceptional
                    ML engineers: decomposing ambiguous requirements, architecting
                    robust systems, making informed tradeoffs, and shipping
                    production pipelines. Built by a team with the right experience
                    (Meta, Apple, AWS, Lockheed Martin, JPMorganChase), grit, and
                    vision.
                  </span>
                </p>
                <p>
                  The future isn't a world where only the few can build with AI.
                  It's one where any team with a meaningful problem can create
                  exceptional AI capabilities.
                </p>
                <p>We're building that future. We’re building Prime ML.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-center px-6 pt-16 pb-5">
          <div
            className="w-full max-w-4xl md:max-w-2xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-zinc-200 backdrop-blur">
              <p className="text-lg font-medium text-white">
                Scope your first project with the Founders
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-12 py-5 text-xl font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
                  tabIndex={0}
                  style={{ opacity: 1, transform: "none" }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, rgb(168, 85, 247), rgb(59, 130, 246), rgb(236, 72, 153)) 0% 50% / 200% 200%"
                    }}
                  />
                  <span className="pointer-events-none absolute inset-[2px] rounded-full bg-black/90" />
                  <span className="relative">Hire Primeml</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative py-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">© 2025 Primeml, Inc.</p>
        </div>
      </footer>
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 h-[30vh] bg-gradient-to-b from-transparent to-black transition-opacity duration-200"
        style={{ opacity: 1 }}
      />
    </div>

  )
}

export default App