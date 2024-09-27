window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 200) {
    navbar.classList.add("shadow-custom");
  } else {
    navbar.classList.remove("shadow-custom");
  }
});

const footerHTML = `
  <div class="m-5 bg-white rounded-3xl px-6 py-20 pb-10">
      <div class="max-w-7xl flex flex-col mx-auto">
        <div class="flex flex-col lg:flex-row gap-20 pb-7">
          <div class="flex flex-col items-center sm:items-start w-ful basis-1/3">
            <img
              src="https://acwtrans.mn/wp-content/uploads/2020/07/logo-tsagaan-border-2.png"
              alt=""
              class="max-w-80"
            />
            <h1 class="text-2xl mt-1 mb-6 uppercase font-bold">
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

          <div class="flex flex-col col-span-full basis-2/3 gap-4 text-base sm:text-lg">
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
          class="flex justify-center gap-4 md:gap-20 items-center border-t-2 h-16 text-sm md:text-base mt-6 gap-2 border-light"
        >
          <h1>© 2024, ACW Trans</h1>
          <div class="flex items-center">
            Powered by

            <a
              href="https://kom.mn/"
              target="_blank"
              class="flex items-center hover:-translate-y-1 transition py-4"
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

document.getElementById("footer").innerHTML += footerHTML;
