<template>
  <div class="main">
    <section class="relative bg-gray-700">
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
        src="https://www.roughrp.cz/assets/img/fullcity-min.jpg"
        alt="Background Los Santos"
      />

      <div
        class="
          hidden
          sm:block
          sm:inset-0
          sm:absolute
          sm:bg-gradient-to-r
          sm:from-red-800
          sm:to-transparent
        "
      ></div>

      <div
        class="
          relative
          max-w-screen-xl
          px-4
          py-32
          mx-auto
          lg:h-screen lg:items-center lg:flex
        "
      >
        <div class="max-w-xl text-center sm:text-left">
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
            <p id="serverStatus" class="font-bold"><span class="loading">Načítání dat</span></p>
            <p id="playerCount" class="font-bold"><span class="loading">Načítání dat</span></p>
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
              href="/download"
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

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>