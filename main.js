window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 200) {
    navbar.classList.add("shadow-custom");
    navbar.classList.add("bg-white");
  } else {
    navbar.classList.remove("shadow-custom");
    navbar.classList.remove("bg-white");
  }
});

const topBarHTML = `
  <div class="flex flex-col hidden lg:block">
      <div class="mx-5 mb-2 text-sm text-white bg-sec rounded-b-xl">
        <ul class="flex mx-auto max-w-7xl">
          <li class="border-x border-slate-600">
            <div
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
              <svg
                id="fi_3059457"
                height="512"
                viewBox="0 0 32 32"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-sky-400 h-4 w-4"
              >
                <path
                  d="m30.035 22.594c-.053-.044-6.049-4.31-7.668-4.049-.781.138-1.227.671-2.122 1.737-.144.172-.491.583-.759.876a12.458 12.458 0 0 1 -1.651-.672 13.7 13.7 0 0 1 -6.321-6.321 12.458 12.458 0 0 1 -.672-1.651c.294-.269.706-.616.882-.764 1.061-.89 1.593-1.337 1.731-2.119.283-1.619-4.005-7.613-4.049-7.667a2.289 2.289 0 0 0 -1.706-.964c-1.738 0-6.7 6.436-6.7 7.521 0 .063.091 6.467 7.988 14.5 8.024 7.888 14.428 7.979 14.491 7.979 1.084 0 7.521-4.962 7.521-6.7a2.291 2.291 0 0 0 -.965-1.706zm-6.667 6.4c-.868-.074-6.248-.783-12.968-7.384-6.633-6.753-7.324-12.142-7.393-12.977a27.054 27.054 0 0 1 4.706-5.561c.04.04.093.1.161.178a35.391 35.391 0 0 1 3.574 6.063 11.886 11.886 0 0 1 -1.016.911 10.033 10.033 0 0 0 -1.512 1.422 1 1 0 0 0 -.171.751 11.418 11.418 0 0 0 .965 2.641 15.71 15.71 0 0 0 7.248 7.247 11.389 11.389 0 0 0 2.641.966.991.991 0 0 0 .751-.171 10.075 10.075 0 0 0 1.427-1.518c.314-.374.733-.873.892-1.014a35.146 35.146 0 0 1 6.076 3.578c.083.07.142.124.181.159a27.036 27.036 0 0 1 -5.562 4.707z"
                ></path>
                <path
                  d="m23 15h2a8.009 8.009 0 0 0 -8-8v2a6.006 6.006 0 0 1 6 6z"
                ></path>
                <path
                  d="m28 15h2a13.015 13.015 0 0 0 -13-13v2a11.013 11.013 0 0 1 11 11z"
                ></path>
              </svg>

              <a href="">(+976) 7011-5028</a>
            </div>
          </li>
          <li class="border-x border-slate-600">
            <div
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
              <svg
                version="1.1"
                id="fi_646094"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                class="fill-sky-400 h-4 w-4"
              >
                <g>
                  <g>
                    <path
                      d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121
                  C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18
                  s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z
                   M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939
                  l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"
                    ></path>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>

              <a href="">info@acwtrans.mn</a>
            </div>
          </li>
          <li class="border-x border-slate-600">
            <div
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_6_463)"><path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#27AAE2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 4V8L10.6667 9.33333" stroke="#27AAE2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_6_463"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
              <a href="">Ажлын өдөр 0:00 - 00:00</a>
            </div>
          </li>
          <li class="border-x border-slate-600 ml-auto">
            <a href="#" target="_blank"
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
               <div>
                <svg
                    class="w-4 h-4 fill-white group-hover:fill-white transition"
                    version="1.1"
                    id="fi_20837"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 155.139 155.139"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        id="f_1_"
                        d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                  c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                  v20.341H37.29v27.585h23.814v70.761H89.584z"
                      ></path>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
               </div>
            </a>
          </li>
           <li class="border-x border-slate-600">
            <a href="#" target="_blank"
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
              <div>
              <svg
                  class="w-4 h-4 fill-white group-hover:fill-white transition"
                  height="511pt"
                  viewBox="0 0 511 511.9"
                  width="511pt"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_1384031"
                >
                  <path
                    d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                  ></path>
                  <path
                    d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                  ></path>
                  <path
                    d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                  ></path>
                </svg>
              </div>
            </a>
          </li>
           <li class="border-x border-slate-600">
            <a href="#" target="_blank"
              class="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1"
            >
              <div>
                <svg
                    class="w-4 h-4 fill-white group-hover:fill-white transition"
                    id="fi_5968958"
                    viewBox="0 0 1226.37 1226.37"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"
                    ></path>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
            </a>
          </li>
        </ul>
      </div>
    </div>`;

const navHTML = `
      <div
        class="grid items-center grid-cols-2 mx-auto lg:grid-cols-3 max-w-7xl"
      >
        <div class="items-center hidden gap-10 lg:flex">
          <a
            href="index.html"
            class="py-8 transition text-sec hover:text-red-500 hover:translate-y-1"
          >
            Нүүр
          </a>
          <a
            href="about.html"
            class="py-8 transition text-sec hover:text-red-500 hover:translate-y-1"
          >
            Бидний тухай
          </a>
          <div
            class="relative group py-8 transition text-sec hover:text-red-500 hover:translate-y-1"
          >
            <p class="cursor-default">Танд хэрэгтэй</p>
            <div
              class="absolute hidden group-hover:flex top-20 left-0 bg-white border-t-2 border-rose-500"
            >
              <div class="text-slate-500 flex flex-col py-2">
                <a
                  href="index.html#faq"
                  class="w-40 px-4 py-2 hover:text-rose-500"
                >
                  FAQ
                </a>
                <a href="container.html" class="w-40 px-4 py-2 hover:text-rose-500">
                  Контейнер
                </a>
                <a href="incoterm.html" class="w-40 px-4 py-2 hover:text-rose-500">
                  Инкотерм
                </a>
              </div>
            </div>
          </div>
          <!-- <a
            href="faq.html"
            class="py-8 transition text-sec hover:text-red-500 hover:translate-y-1 relative group"
          >
            FAQ
          </a> -->
        </div>

        <a href="/" class="flex justify-start lg:justify-center">
          <img
            src="https://acwtrans.mn/wp-content/uploads/2020/07/logo-tsagaan-border-2.png"
            alt="logo"
            class="max-w-48 lg:max-w-64"
          />
        </a>
     

        <div class="flex justify-end gap-2">
          <button
            class="hidden sm:flex items-center gap-1 p-2 transition border-2 rounded-xl border-slate-300 hover:bg-slate-200 text-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              class="fill-sec w-5 h-5"
              id="fi_2889312"
            >
              <g id="Layer_2" data-name="Layer 2">
                <path
                  d="M87.95636,73.23224a44.29242,44.29242,0,0,0,6.54358-23.23145L94.5,50l-.00006-.00079a44.2927,44.2927,0,0,0-6.54376-23.23169l-.02442-.03815a44.5022,44.5022,0,0,0-75.8634-.00031l-.02472.03864a44.51347,44.51347,0,0,0-.00018,46.46436l.02514.03918a44.50213,44.50213,0,0,0,75.86292-.00037Zm-32.26825,13.641a10.81448,10.81448,0,0,1-2.8894,1.99561,6.52134,6.52134,0,0,1-5.59748,0,13.62135,13.62135,0,0,1-5.04809-4.44233,39.77474,39.77474,0,0,1-5.74762-12.47064Q43.19588,71.538,50,71.53021q6.80127,0,13.59521.42572a50.19826,50.19826,0,0,1-2.438,6.71222A25.80323,25.80323,0,0,1,55.68811,86.87329ZM10.587,52.5H28.536a88.30459,88.30459,0,0,0,1.62274,14.91418q-7.35983.64766-14.68207,1.779A39.23059,39.23059,0,0,1,10.587,52.5Zm4.88964-21.69324Q22.796,31.941,30.16388,32.58618A88.15014,88.15014,0,0,0,28.5376,47.5H10.587A39.2306,39.2306,0,0,1,15.47662,30.80676ZM44.31183,13.12665a10.81146,10.81146,0,0,1,2.8894-1.99561,6.52134,6.52134,0,0,1,5.59748,0,13.62131,13.62131,0,0,1,5.04809,4.44232A39.77482,39.77482,0,0,1,63.59436,28.044Q56.804,28.46185,50,28.46973q-6.80127-.00009-13.59528-.42578a50.18985,50.18985,0,0,1,2.43805-6.71216A25.80254,25.80254,0,0,1,44.31183,13.12665ZM89.413,47.5H71.464a88.31173,88.31173,0,0,0-1.62274-14.91425q7.35992-.64764,14.68207-1.779A39.2306,39.2306,0,0,1,89.413,47.5ZM35.18756,67.02545A82.69645,82.69645,0,0,1,33.53729,52.5H66.4632a82.67828,82.67828,0,0,1-1.64728,14.52563Q57.41607,66.54,50,66.53027,42.58927,66.53018,35.18756,67.02545Zm29.62482-34.051A82.70224,82.70224,0,0,1,66.46259,47.5H33.53674A82.67914,82.67914,0,0,1,35.184,32.97424q7.39985.4855,14.816.49543Q57.41074,33.46967,64.81238,32.97449ZM71.46228,52.5H89.413a39.23052,39.23052,0,0,1-4.88971,16.69318q-7.31936-1.13435-14.68719-1.77942A88.14559,88.14559,0,0,0,71.46228,52.5ZM81.52539,26.20477q-6.39945.92331-12.83734,1.462a57.01792,57.01792,0,0,0-2.9754-8.39581,35.48007,35.48007,0,0,0-4.13984-7.04529A39.49152,39.49152,0,0,1,81.52539,26.20477ZM22.06915,22.06915a39.48682,39.48682,0,0,1,16.3559-9.84289c-.09369.12134-.19006.2373-.28241.36114A45.64338,45.64338,0,0,0,31.321,27.66754q-6.43816-.54528-12.84643-1.46277A39.82535,39.82535,0,0,1,22.06915,22.06915Zm-3.5946,51.726q6.39943-.9234,12.83728-1.462A57.01789,57.01789,0,0,0,34.28729,80.729a35.48425,35.48425,0,0,0,4.13983,7.04529A39.49154,39.49154,0,0,1,18.47455,73.79517Zm59.45624,4.13562a39.48587,39.48587,0,0,1-16.3559,9.84289c.09369-.12134.19-.2373.28241-.36114A45.64338,45.64338,0,0,0,68.679,72.3324q6.43816.54528,12.84643,1.46277A39.82535,39.82535,0,0,1,77.93079,77.93079Z"
                ></path>
              </g>
            </svg>
            MN
          </button>

          <a
            href="contact.html"
            class="relative hidden md:flex items-center gap-2 group h-11"
          >
            <div
              class="relative z-10 flex items-center px-6 py-2 text-white bg-red-500 group-hover:bg-sec-600 font-semibold size-full rounded-xl"
            >
              <div class="relative overflow-hidden">
                <span
                  class="relative top-0 transition-all duration-300 group-hover:-top-10"
                >
                  Холбогдох
                </span>
                <span
                  class="absolute duration-300 left-[50%] -translate-x-[50%] top-20 transition-all group-hover:top-[50%] -translate-y-[50%]"
                >
                  Холбогдох
                </span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="44"
              height="44"
              class="absolute top-[50%] transition-all -translate-y-[50%] group-hover:scale-y-0 duration fill-red-500 right-7 flex items-center justify-center"
            >
              <path
                d="M0 0 C10.02766385 0 11.78016344 0.0022601 18.375 6.25 C21.21594016 8.14396011 23.33275869 8.80093012 26.765625 8.671875 C30.69416391 7.4905661 33.34474692 4.58563598 36.21484375 1.75 C39 0 39 0 48 0 C48 14.52 48 29.04 48 44 C39.48205443 44 37.45308287 43.27134166 31.625 37.75 C28.78104578 35.85403052 26.66245567 35.19943986 23.2265625 35.328125 C19.34599355 36.4991037 16.77099216 39.40514781 13.98046875 42.25 C11 44 11 44 0 44 C0 29.48 0 14.96 0 0 Z "
              ></path>
            </svg>

            <div
              class="border-4 h-full group-hover:border-sec-600 border-red-500 aspect-[1/1] rounded-2xl relative bg-white grid place-items-center"
            >
              <div class="relative overflow-hidden">
                <svg
                  version="1.1"
                  id="fi_271228"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 492.004 492.004"
                  class="w-4 h-4 absolute top-[50%] -translate-y-[50%] -left-[100%] group-hover:left-0 duration-300 transition-all fill-sec"
                >
                  <g>
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                  c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                  c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                  c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      ></path>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                <svg
                  version="1.1"
                  id="fi_271228"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 492.004 492.004"
                  class="w-4 h-4 group-hover:translate-x-10 duration-300 transition-all fill-red-500"
                >
                  <g>
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                  c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                  c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                  c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      ></path>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
            </div>
     
          </a>
          <button class="block lg:hidden" 
            type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
<svg class="w-7 h-7 fill-sec hover:fill-red-600 ml-4"  version="1.1" id="fi_17704" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 276.167 276.167" style="enable-background:new 0 0 276.167 276.167;" xml:space="preserve">
<g>
	<g>
		<path d="M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293
			S50.951,2.471,33.144,2.471z"></path>
		<path d="M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293
			S155.477,2.471,137.663,2.471z"></path>
		<path d="M243.873,67.059c17.804,0,32.294-14.486,32.294-32.293S261.689,2.471,243.873,2.471s-32.294,14.487-32.294,32.294
			S226.068,67.059,243.873,67.059z"></path>
		<path d="M32.3,170.539c17.807,0,32.297-14.483,32.297-32.293c0-17.811-14.49-32.297-32.297-32.297S0,120.436,0,138.246
			C0,156.056,14.493,170.539,32.3,170.539z"></path>
		<path d="M136.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297
			c-17.813,0-32.294,14.486-32.294,32.297C104.525,156.056,119.012,170.539,136.819,170.539z"></path>
		<path d="M243.038,170.539c17.811,0,32.294-14.483,32.294-32.293c0-17.811-14.483-32.297-32.294-32.297
			s-32.306,14.486-32.306,32.297C210.732,156.056,225.222,170.539,243.038,170.539z"></path>
		<path d="M33.039,209.108c-17.807,0-32.3,14.483-32.3,32.294c0,17.804,14.493,32.293,32.3,32.293s32.293-14.482,32.293-32.293
			S50.846,209.108,33.039,209.108z"></path>
		<path d="M137.564,209.108c-17.808,0-32.3,14.483-32.3,32.294c0,17.804,14.487,32.293,32.3,32.293
			c17.804,0,32.293-14.482,32.293-32.293S155.368,209.108,137.564,209.108z"></path>
		<path d="M243.771,209.108c-17.804,0-32.294,14.483-32.294,32.294c0,17.804,14.49,32.293,32.294,32.293
			c17.811,0,32.294-14.482,32.294-32.293S261.575,209.108,243.771,209.108z"></path>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
          </button>
        </div>
      </div>
`;

const footerHTML = `
  <div class="m-3 sm:m-5 bg-white rounded-3xl px-6 py-20 pb-10">
      <div class="max-w-7xl flex flex-col mx-auto">
        <div class="flex flex-col lg:flex-row gap-20 pb-7">
          <div class="flex flex-col items-center sm:items-start w-ful basis-1/3">
            <img
              src="https://acwtrans.mn/wp-content/uploads/2020/07/logo-tsagaan-border-2.png"
              alt=""
              class="max-w-40 md:max-w-80"
            />
            <h1 class="text-base sm:text-2xl mt-1 mb-6 uppercase font-bold">
              Бид бэлэн байна
            </h1>
            <div class="flex gap-3">
              <a
                href=""
                target="_blank"
                class="p-3 aspect-[1/1] bg-slate-100 rounded-xl group hover:bg-red-500 transition"
              >
                <svg
                  class="w-5 h-5 fill-slate-600 group-hover:fill-white transition"
                  version="1.1"
                  id="fi_20837"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 155.139 155.139"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      id="f_1_"
                      d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                v20.341H37.29v27.585h23.814v70.761H89.584z"
                    ></path>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                class="p-3 aspect-[1/1] bg-slate-100 rounded-xl group hover:bg-red-500 transition"
              >
                <svg
                  class="w-5 h-5 fill-slate-600 group-hover:fill-white transition"
                  height="511pt"
                  viewBox="0 0 511 511.9"
                  width="511pt"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_1384031"
                >
                  <path
                    d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                  ></path>
                  <path
                    d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                  ></path>
                  <path
                    d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                  ></path>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                class="p-3 aspect-[1/1] bg-slate-100 rounded-xl group hover:bg-red-500 transition"
              >
                <svg
                  class="w-5 h-5 fill-slate-600 group-hover:fill-white transition"
                  id="fi_5968958"
                  viewBox="0 0 1226.37 1226.37"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"
                  ></path>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </div>
          </div>

          <div class="flex flex-col col-span-full basis-2/3 gap-4 text-sm sm:text-base md:text-lg">
            <p class="flex items-center gap-1 flex-wrap">
              <svg
                class="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_31_291)">
                  <path
                    d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z"
                    stroke="#F62459"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z"
                    stroke="#F62459"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_31_291">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span class="font-bold">Хаяг:</span>
              Баянгол дүүрэг, 2-р хороо, Гранд Плаза “Оффис төв”, 808 тоот
            </p>

            <div class="flex items-center gap-1 flex-wrap">
              <svg
                class="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66665 2.66699H13.3333C14.0666 2.66699 14.6666 3.26699 14.6666 4.00033V12.0003C14.6666 12.7337 14.0666 13.3337 13.3333 13.3337H2.66665C1.93331 13.3337 1.33331 12.7337 1.33331 12.0003V4.00033C1.33331 3.26699 1.93331 2.66699 2.66665 2.66699Z"
                  stroke="#F62459"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14.6666 4L7.99998 8.66667L1.33331 4"
                  stroke="#F62459"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span class="font-bold">И-Мэйл:</span>
              <a
                href="mailto:info@acwtrans.mn"
                target="_blank"
                class="hover:text-rose-500 transition-all hover:-translate-y-1"
              >
                info@acwtrans.mn
              </a>
              ,
              <a
                href="mailto:import@acwtrans.mn"
                target="_blank"
                class="hover:text-rose-500 transition-all hover:-translate-y-1"
              >
                import@acwtrans.mn
              </a>
              ,
              <a
                href="mailto:info@freight@acwtrans.mn"
                target="_blank"
                class="hover:text-rose-500 transition-all hover:-translate-y-1"
              >
                freight@acwtrans.mn
              </a>
            </div>
            <div class="flex items-center gap-1 flex-wrap">
              <svg
                class="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.0333 3.33366C10.6845 3.4607 11.2829 3.77916 11.752 4.24828C12.2211 4.7174 12.5396 5.31584 12.6666 5.96699M10.0333 0.666992C11.3862 0.817283 12.6477 1.42311 13.6108 2.385C14.5739 3.34689 15.1813 4.60766 15.3333 5.96032M14.6666 11.2803V13.2803C14.6674 13.466 14.6294 13.6498 14.555 13.8199C14.4806 13.99 14.3715 14.1427 14.2347 14.2682C14.0979 14.3938 13.9364 14.4893 13.7605 14.5488C13.5846 14.6083 13.3982 14.6304 13.2133 14.6137C11.1619 14.3908 9.19131 13.6898 7.45998 12.567C5.84919 11.5434 4.48353 10.1778 3.45998 8.56699C2.33329 6.82779 1.63214 4.84765 1.41331 2.78699C1.39665 2.60264 1.41856 2.41683 1.47764 2.24141C1.53673 2.06598 1.63169 1.90478 1.75649 1.76807C1.88128 1.63136 2.03318 1.52213 2.2025 1.44734C2.37183 1.37255 2.55487 1.33383 2.73998 1.33366H4.73998C5.06351 1.33047 5.37717 1.44504 5.62248 1.65601C5.8678 1.86698 6.02803 2.15996 6.07331 2.48033C6.15772 3.12037 6.31428 3.74881 6.53998 4.35366C6.62967 4.59227 6.64908 4.8516 6.59591 5.10091C6.54274 5.35022 6.41922 5.57907 6.23998 5.76033L5.39331 6.60699C6.34235 8.27602 7.72428 9.65795 9.39331 10.607L10.24 9.76033C10.4212 9.58108 10.6501 9.45756 10.8994 9.40439C11.1487 9.35122 11.408 9.37063 11.6466 9.46032C12.2515 9.68603 12.8799 9.84258 13.52 9.92699C13.8438 9.97268 14.1396 10.1358 14.351 10.3853C14.5624 10.6348 14.6748 10.9534 14.6666 11.2803Z"
                  stroke="#F62459"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="font-bold mr-1">Утас:</span>

              <a
                href="tel:+97670115028"
                target="_blank"
                class="hover:text-rose-500 transition-all hover:-translate-y-1"
              >
                (+976) 7011-5028
              </a>
              ,
              <a
                href="tel:+97670115068"
                target="_blank"
                class="hover:text-rose-500 transition-all hover:-translate-y-1"
              >
                (+976) 7011-5068
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:gap-20 items-center border-t-2 pt-4 sm:pt-0 sm:h-16 text-sm md:text-base mt-6 gap-2 border-light"
        >
          <h1>© 2024, ACW Trans</h1>
          <div class="flex items-center">
            Powered by

            <a
              href="https://kom.mn/"
              target="_blank"
              class="flex items-center hover:-translate-y-1 transition py-0 sm:py-4"
            >
              <img
                src="./assets/images/kommn.png"
                class="h-4 w-4 mx-1 ml-2"
                alt=""
              />
              <span class="uppercase font-bold text-gray-700">kom.mn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
`;

const drawerHTML = `
 <div
      id="drawer-navigation"
      class="fixed top-0 left-0 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-sec-600 w-64"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
      style="z-index: 60"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-white uppercase"
      >
        Цэс
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-slate-200 rounded-xl hover:text-gray-900 text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="index.html"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">Нүүр</span>
            </a>
          </li>
          <li>
            <a
              href="about.html"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">Бидний тухай</span>
            </a>
          </li>
          <li>
            <a
              href="index.html#faq"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">FAQ</span>
            </a>
          </li>
          <li>
            <a
              href="incoterm.html"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">Инкотерм</span>
            </a>
          </li>
          <li>
            <a
              href="container.html"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">Контейнер</span>
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              class="flex items-center p-2 text-white hover:bg-slate-600 rounded-lg group"
            >
              <span class="ms-3">Холбогдох</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="mt-32 text-center text-xs text-white">
       <p>© 2024, ACW Trans</p>
       <div class="flex items-center justify-center mt-2">
            Powered by

            <a href="https://kom.mn/" target="_blank" class="flex items-center justify-center">
              <img src="./assets/images/kommn.png" class="h-4 w-4 mx-1 ml-2" alt="">
              <span class="uppercase font-semibold text-white">kom.mn</span>
            </a>
          </div>
      </div>
    </div>
`;

document.getElementById("top-bar").innerHTML += topBarHTML;
document.getElementById("drawer").innerHTML += drawerHTML;
document.getElementById("nav").innerHTML += navHTML;
document.getElementById("footer").innerHTML += footerHTML;
