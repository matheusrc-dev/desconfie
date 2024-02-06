<template>
  <div class="row">
    <div class="col-4">
      <div class="card h-100 text-bg-primary cursor-pointer">
        <div class="card-body">
          <div class="step">1</div>
          <div class="mt-5 d-flex align-items-center justify-content-between">
            <div>
              <h2 class="card-title text-white">Passo 1</h2>
              <h6 class="card-subtitle mb-2">Dados da empresa</h6>
            </div>
            <box-icon color="#A7FFFA" name="chevron-right" size="md"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepsComponents'
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  .step {
    width: 56px;
    height: 56px;
    background: #00857b;
    font-size: 32px;
    color: #BBF5D2;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .card-title {
    font-weight: 700;
  }

  .card-subtitle {
    color: #A8FFFA;
    font-weight: 400;
    font-size: 18px;
  }
}
</style>
