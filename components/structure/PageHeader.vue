<template>
  <header>
    <div class="container mx-auto">
      <div class="flex justify-start items-center py-4">
        <div class="h-16">
          <img src="/images/netlabs.png" class="h-full">
        </div>
        <div class="ml-5">
          <nav>
            <ul class="flex">
              <li class="mr-2">
                <nuxt-link to="/">{{ $t("menu.home") }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/about">{{ $t("menu.about") }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/contact">{{ $t("menu.contact") }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
