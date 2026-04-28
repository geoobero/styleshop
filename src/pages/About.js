import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  const highlights = [
    { id: 1, label: "Curated Products", value: "120+" },
    { id: 2, label: "Happy Customers", value: "2.5K" },
    { id: 3, label: "Average Rating", value: "4.9" },
  ];

  const values = [
    {
      id: 1,
      title: "Thoughtful Selection",
      description:
        "Every item is chosen with a focus on quality, usefulness, and modern style.",
    },
    {
      id: 2,
      title: "Simple Experience",
      description:
        "We design every screen to feel clear, fast, and easy to navigate on any device.",
    },
    {
      id: 3,
      title: "Customer First",
      description:
        "From browsing to checkout, the experience is built around convenience and trust.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-24 text-slate-900">
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <section className="px-6 pb-10 pt-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
          <div className="grid gap-10 px-8 py-14 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-18">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-700">
                About StyleShop
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Minimal shopping, refined experience, and modern design that feels easy to trust.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                StyleShop was built to make online shopping feel clean, calm, and enjoyable.
                We focus on curated products, intuitive browsing, and a polished interface
                that works beautifully across desktop and mobile.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-slate-700">
                  Clean Interface
                </span>
                <span className="rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-slate-700">
                  Responsive Layout
                </span>
                <span className="rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-slate-700">
                  Smooth Cart Flow
                </span>
              </div>
            </div>

            <div className="grid gap-4 self-end sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl px-6 py-5 transition duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-slate-900 via-sky-800 to-sky-900 bg-[length:120%_140%] bg-left-bottom transition-all duration-500 group-hover:bg-right-top" />
                  <div className="relative z-10">
                    <p className="text-4xl font-semibold text-amber-500">{item.value}</p>
                    <p className="mt-2 text-sm text-gray-300">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built from a small idea into a polished storefront experience.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              StyleShop started with a simple goal: create a shopping experience that
              feels modern without becoming overwhelming. Instead of cluttered layouts
              and distracting visuals, the focus stays on clarity, product presentation,
              and a journey that feels smooth from start to finish.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The result is a storefront that balances minimal aesthetics with practical
              usability, making it easier for customers to discover products, review
              details, and move confidently through the site.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="bg-gray-200 h-80 rounded-[1.5rem] flex items-center justify-center
                bg-[url('/images/open-store.jpg')] bg-cover w-full h-100 ">

            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-900 px-8 py-12 text-white md:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Why It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A modern, minimal approach shaped around usability.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 p-6"
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-300/90 via-white/80 to-amber-300/90 bg-[length:120%_100%]
                      bg-right transition-all duration-500 group-hover:bg-left" />
                <div className="relative z-10">
                  <h3 className="text-xl font-medium font-semibold text-amber-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 font-semibold text-sky-900">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
