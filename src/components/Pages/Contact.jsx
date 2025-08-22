export default function Contact() {
  return (
    <>
      <div className="isolation-auto px-6 py-10 sm:py-12 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl text-orange-500">
            Contact Us
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-5 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-white"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-white"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-stone-300">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300 sm:text-sm/6"
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    >
                      <path
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="phone-number"
                    type="text"
                    name="phone-number"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-300"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-stone-300 transition-colors duration-200 ease-in-out has-checked:bg-orange-500 has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-trans htmlForm duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                  <input
                    id="agree-to-policies"
                    type="checkbox"
                    name="agree-to-policies"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm/6 text-gray-400"
              >
                By selecting this, you agree to our
                <a
                  href="#"
                  className="font-semibold whitespace-nowrap text-white"
                >
                  {" "}
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full bg-white hover:bg-orange-500 text-black hover:text-white rounded-md px-3.5 py-2.5 text-center text-sm font-semibold  shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>

      <div className=" overflow-hidden py-10 sm:py-15 ">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Brew n Code
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                ☕ Join the Brew Code Community! Subscribe to stay updated —
                code, learn, and grow together!
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-orange-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white hover:bg-orange-500 text-black hover:text-white px-3.5 py-2.5 text-sm font-semibold  shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Send Invite
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Let’s connect and keep in touch regarding opportunities where
                  I can bring value and contribute effectively
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Open-source
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Active contribute to coding communities to learn, share, and
                  grow.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
