<template>
  <main class="col-10 px-4">
    <h4 class="my-3">Finalize seu cadastro</h4>
    <div class="row">
      <steps-component
        v-for="(step, index) in registerSteps"
        :key="index"
        :step="index + 1"
        :title="step.title"
        :status="step.status"
      />
    </div>

    <hr class="border border-primary" style="opacity: 0.14 !important;"/>

    <!-- <div class="row">
      <div class="col-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-body">
              <h5 class="card-title">Testes realizados</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Mês</h6>
              <img src="@/assets/img/barchart.svg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-body">
              <h5 class="card-title">Falhas identicadas</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Mês</h6>
              <img src="@/assets/img/linechart.svg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-body">
              <h5 class="card-title">Vulnerabilidades encontradas</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">SMS</h6>
              <div class="d-flex align-items-center justify-content-center">

                  <img src="@/assets/img/coisachart.svg" alt="" srcset="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </main>
</template>

<script>
import StepsComponent from './StepsComponent.vue'

export default {
  name: 'MainComponent',
  components: { StepsComponent },
  data() {
    return {
      registerSteps: [
        {
          title: 'Dados da empresa',
          status: 'done'
        },
        {
          title: 'Lista de contatos',
          status: 'current'
        },
        {
          title: 'Testes em andamento',
          status: 'blocked'
        }
      ]
    }
  }
}
</script>
