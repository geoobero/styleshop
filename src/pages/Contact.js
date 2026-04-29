import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactDetails = [
    {
      id: 1,
      label: 'Email',
      value: 'wryhtgeo@gmail.com',
      note: 'Best for project questions and support requests.',
    },
    {
      id: 2,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      note: 'Available during standard business hours.',
    },
    {
      id: 3,
      label: 'Address',
      value: '123 Commerce Street, City, State 12345',
      note: 'Our studio and operations base.',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 text-slate-900">
      <div className='fixed top-0 z-50 w-full'>
        <Navbar />
      </div>

      <section className="px-6 pb-8 pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl flex items-center">
            <div className='max-w-4xl'>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
                Contact StyleShop
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Questions, ideas, or collaboration opportunities all have a place here.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                This page keeps the same calm and modern feeling as the rest of the site,
                but with a more open, conversational layout built for reaching out.
              </p>
            </div>
            <Image src="/images/vector-question-mark.png" width={200} height={100} alt='question mark image' className='w-40 h-30' />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-0">

            <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Response Promise
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Helpful replies with a clean, human touch.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We aim to keep communication direct and thoughtful, whether you&apos;re
                asking about the project, the design, or potential collaboration.
              </p>
            </div>
            <div className='flex justify-center p-0 m-0'>
              <Image src="/images/vector-man-paperplane.png" width={500} className='h-100 w-fit' height={100} alt='vector image email' />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Send A Message
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Tell us what you need.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Fill out the form below and we&apos;ll get back to you with a thoughtful response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400"
                    required
                    placeholder='eg. john doe'
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400"
                    required
                    placeholder='eg. john@example.com'
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full max-h-fit min-h-fit rounded-[1.5rem] border border-slate-200 bg-stone-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400"
                  required
                  placeholder='Tell us your message'
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
