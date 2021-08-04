<template>
    <div class="v-main">
        <h1>Million Dollars Collection Shop</h1>
        <h2>
            <router-link :to="{name: 'Catalog'}">
                Catalog
            </router-link>
        </h2>
    </div>
</template>

<script>
  export default {
      name: "Main"
  }
</script>