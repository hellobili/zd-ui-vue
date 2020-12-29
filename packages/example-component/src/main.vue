<template>
  <div class="zd-example-component" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZdExampleComponent',

  componentName: 'ZdExampleComponent',

  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>
