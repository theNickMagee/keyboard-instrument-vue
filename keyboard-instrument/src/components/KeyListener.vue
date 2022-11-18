<template>
    <div></div>
</template>
    
<script>
export default {
    created() {
        const component = this;
        this.handler = function (e) {
            if (e.type === 'keyup') {
                component.$emit('keyup', e);
            } else {
                component.$emit('keydown', e);
            }
        }
        window.addEventListener('keyup', this.handler);
        window.addEventListener('keydown', this.handler);
    },
    beforeDestroy() {
        window.removeEventListener('keyup', this.handler);
        window.removeEventListener('keydown', this.handler);
    }
}
</script>
    
<style scoped>
div {
    display: none;
}
</style>