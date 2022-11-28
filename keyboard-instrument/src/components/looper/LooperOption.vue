<script>
import LooperPads from './LooperPads.vue';

export default {
    props: ["parent"],
    components: { LooperPads }
}
</script>

<template>
    <div>Looper</div>
    <LooperPads :parent-key="this.parent" />
</template>