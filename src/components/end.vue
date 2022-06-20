<template>
  <footer class="bg-gray-900 border-t-2 border-opacity-30">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <p class="max-w-xs mt-4 text-sm text-gray-500">
            Kvalitní FiveM server z České Republiky který je s vámi od roku
            2021.
          </p>
        </div>

        <div
          class="
            grid grid-cols-1
            gap-8
            lg:col-span-2
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <div>
            <p class="font-medium underline" id="zaklad">Základ</p>

            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 transition duration-150" href="/#/">
                Domů
              </a>
              <!-- <a class="hover:opacity-75 transition duration-150" href="/#/rules">
                Pravidla
              </a> -->
              <router-link class="nav-it hover:opacity-75 transition duration-150" to="/rules">Pravidla</router-link>
              <router-link class="nav-it hover:opacity-75 transition duration-150" to="/docs">Dokumentace</router-link>
              <router-link class="nav-it hover:opacity-75 transition duration-150" to="/vip">VIP</router-link>
              <router-link class="nav-it hover:opacity-75 transition duration-150" to="/gov">GoV</router-link>

              <!-- <a class="hover:opacity-75 transition duration-150" href="/#/docs">
                Dokumentace
              </a>
              <a class="hover:opacity-75 transition duration-150" href="/#/vip">
                VIP
              </a>
              <a class="hover:opacity-75 transition duration-150" href="/#/gov">
                Zákony
              </a> -->
            </nav>
          </div>

          <div>
            <p class="font-medium underline">Služby</p>

            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 transition duration-150" href="https://roughrp.statuspage.io/" target="_blank">
                Status
              </a>
              <a class="hover:opacity-75 transition duration-150" href="https://discord.com/channels/929491049385173013/929527609786761236" target="_blank">
                Oznámení
              </a>
              <a class="hover:opacity-75 transition duration-150" href="https://discord.com/channels/929491049385173013/929528429257297950" target="_blank">
                Changelog
              </a>
            </nav>
          </div>

          <div>
            <p class="font-medium underline">Pomocné odkazy</p>

            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 transition duration-150" href="">
                Kontakt
              </a>
              <a class="hover:opacity-75 transition duration-150" href="">
                Dokumentace
              </a>
            </nav>
          </div>

          <div>
            <p class="font-medium underline">Ostatní</p>

            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 transition duration-150" href="">
                Zásady ochrany osobních údajů
              </a>
              <a class="hover:opacity-75 transition duration-150" href="">
                Všeobecné obchodní podmínky
              </a>
              <a class="hover:opacity-75 transition duration-150" href="">
                Podmínky použití
              </a>
            </nav>
          </div>
        </div>
      </div>

      <p class="mt-8 text-xs text-gray-500">&copy; 2022 RoughRP</p>
      <p class="text-xs text-gray-500">
        Vytvořil
        <a
          href="https://jakubsedlacek.xyz/"
          target="_blank"
          class="
            text-bold text-yellow-400 text-opacity-40
            hover:text-opacity-100
            transition
            duration-200
          "
          >Jakub Sedláček</a
        >
         se ♥️ a za pomoci ☕️.
      </p>
    </div>
  </footer>
</template>