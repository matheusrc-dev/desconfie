<template>
  <div class="sidebar col-2 d-flex flex-column flex-shrink-0 p-3 shadow">
    <a href="/" class="d-flex align-items-center p-3">
      <img src="@/assets/img/logo.png" alt="Desconfie logo" />
    </a>
    <ul class="nav nav-pills flex-column mt-3 mb-auto">
      <li class="nav-item">
        <router-link
          to="/"
          class="nav-link active d-flex align-items-center gap-2"
          aria-current="page"
        >
          <box-icon color="#00a39a" name="home-smile" />
          Início
        </router-link>
      </li>

      <ul class="nav nav-pills flex-column mt-3 mb-auto">
        <div class="d-flex align-items-center gap-3" style="margin-left: -16px">
          <img src="@/assets/img/line.svg" alt="Linha cinza" />
          <div class="fs-7">Configurações</div>
        </div>
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link text-dark-grayish-blue d-flex align-items-center gap-2"
          >
            <box-icon color="#32475CAD" name="envelope" />
            Perfil
          </router-link>
        </li>
      </ul>
    </ul>
    <router-link to="/" class="nav-link text-dark-grayish-blue d-flex align-items-center gap-2">
      <box-icon color="#32475CAD" name="log-out" rotate="180" />
      Sair
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

</style>
