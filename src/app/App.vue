<template>
<div>
    <button @click="load">
        Load my chunk
    </button>
    <chunk v-if="booleanComponent" />
</div>
</template>

<script lang="ts" src="./App.ts"></script>
