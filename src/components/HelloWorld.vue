<template>

  <div class="main">
    <section class="relative bg-gray-800">
      <img
        class="
          absolute
          inset-0
          object-[75%]
          sm:object-[25%]
          object-cover
          w-full
          h-full
          opacity-25
          sm:opacity-100
        "
        src="https://wallpapercave.com/wp/wp6860393.jpg"
        alt="Background Los Santos"
      />

      <div
        class="
          hidden
          sm:block
          sm:inset-0
          sm:absolute
          sm:bg-gradient-to-r
          sm:from-gray-900
          sm:to-transparent
        "
      ></div>

      <div
        class="
          relative
          max-w-screen-xl
          px-8
          py-28
          mx-auto
          lg:h-screen lg:items-center lg:flex
        "
      >
        <div class="max-w-xl text-center sm:text-left pb-20">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Vítejte na
            <strong class="font-extrabold underline text-Amber-700 sm:block">
              RoughRP
            </strong>
          </h1>

          <p class="pt-5 pb-5">
            Moderní RolePlay FiveM server, který ti nabídne mnoho skvělých
            funkcí: multichar, okrádání lidí, a mnohem více. Přijď se sám
            podívat a přesvědčit se o tom sám.
          </p>

          <div class="status">
            <p id="serverStatus" class="font-bold">
              <span class="loading">Načítání dat</span>
            </p>
            <p id="playerCount" class="font-bold">
              <span class="loading">Načítání dat</span>
            </p>
          </div>

          <div class="pt-5">
            <a
              class="
                px-3
                py-2
                text-indigo-300
                transition-colors
                border border-current
                rounded-lg
                hover:bg-indigo-300
                group
                active:bg-indigo-500
                focus:outline-none focus:ring
              "
              href="https://discord.gg/roughrp"
              target="_blank"
            >
              <span
                class="font-medium transition-colors group-hover:text-white"
              >
                Připoj se na <span class="font-bold">DISCORD</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <aside class="p-12 bg-gray-900 sm:p-16 lg:p-24">
      <div class="max-w-xl mx-auto text-center">
        <p class="text-sm font-medium text-gray-500">
          Kvalitní RolePlay server se servery v něměcku.
        </p>

        <p class="mt-2 text-3xl font-bold sm:text-5xl text-gray-100">
          Kvalitní WL-OFF server.
        </p>

        <div class="mt-8 sm:items-center sm:justify-center sm:flex">
          <a
            href="https://discord.gg/roughrp"
            target="_blank"
            class="
              block
              px-5
              py-3
              font-medium
              text-white
              bg-blue-500
              rounded-lg
              shadow-xl
              hover:bg-blue-600
              transition
              duration-150
            "
          >
            Připoj se na DISCORD
          </a>

          <a
            href="https://cfx.re/join/l5bma4"
            target="_blank"
            class="
              block
              px-5
              py-3
              mt-4
              font-medium
              text-blue-500
              rounded-lg
              hover:text-blue-600
              sm:mt-0
              transition
              duration-150
            "
          >
            Připoj se do hry
          </a>
        </div>
      </div>
    </aside>

    <aside
      class="
        p-12
        pt-48
        sm:p-16 sm:pt-64
        bg-gradient-to-r
        from-purple-600
        to-blue-500
      "
    >
      <div class="sm:items-end sm:justify-between sm:flex">
        <div class="max-w-xl">
          <p class="text-3xl font-bold text-white sm:text-4xl">
            Máme zpracovanou dokumentaci takže u nás se neztratíš.
          </p>
        </div>

        <a
          href="/#/docs"
          class="
            inline-block
            px-8
            py-4
            mt-4
            text-blue-500
            bg-white
            rounded-lg
            shadow-lg
            hover:opacity-75
            sm:mt-0 sm:ml-8
            transition
            duration-150
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </aside>
  </div>
</template>
  
  <style>
.serverStatusOffline {
  color: red;
  font-weight: 500;
}

.serverStatusOnline {
  color: greenyellow;
  font-weight: 500;
}

.playerCountNumber {
  font-weight: 500;
}
</style>