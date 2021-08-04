<template>
    <div class="v-main">
        <h1>Million Dollars Collection Shop</h1>
        <p>
            <router-link :to="{name: 'Catalog'}">
                Catalog
            </router-link>
        </p>
    </div>
</template>

<script>
  export default {
      name: "Main"
  }
</script>