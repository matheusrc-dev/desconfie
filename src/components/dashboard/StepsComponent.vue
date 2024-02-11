<template>
  <div class="col-4">
    <div
      class="card shadow h-100 cursor-pointer"
      :class="{
        'text-bg-primary': status === REGISTRATION_STATUS.current
      }"
    >
      <div class="card-body">
        <div class="status-circle done" v-if="status === REGISTRATION_STATUS.done">
          <box-icon name="check" color="#00A39A" size="lg"></box-icon>
        </div>

        <div class="status-circle current" v-if="status === REGISTRATION_STATUS.current">
          {{ step }}
        </div>

        <div class="status-circle blocked opacity-50" v-if="status === REGISTRATION_STATUS.blocked">
          <box-icon name="lock" color="#00A39A" size="md"></box-icon>
        </div>

        <div class="mt-5 d-flex align-items-center justify-content-between">
          <div :class="{ 'opacity-50': status === REGISTRATION_STATUS.blocked }">
            <h2
              class="card-title"
              :class="{
                'text-white': status === REGISTRATION_STATUS.current
              }"
            >
              Passo {{ step }}
            </h2>
            <h6
              class="card-subtitle mb-2"
              :class="{ current: status === REGISTRATION_STATUS.current }"
            >
              {{ title }}
            </h6>
          </div>
          <box-icon
            v-if="status === REGISTRATION_STATUS.current"
            color="#A7FFFA"
            name="chevron-right"
            size="md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepsComponents',
  props: {
    step: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },

    /**
     * done, current, blocked
     */
    status: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      REGISTRATION_STATUS: {
        done: 'done',
        current: 'current',
        blocked: 'blocked'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  .status-circle {
    width: 56px;
    height: 56px;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &.done {
      background-color: #ddf5f3;
    }

    &.current {
      background-color: #00857b;
      color: #bbf5d2;
    }

    &.blocked {
      background-color: #ddf5f3;
    }
  }

  .card-title {
    font-weight: 700;
    color: #263a43;
  }

  .card-subtitle {
    color: #767676;
    font-weight: 400;
    font-size: 18px;

    &.current {
      color: #a8fffa;
    }
  }
}
</style>
