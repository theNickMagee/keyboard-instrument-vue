<script>
import { store } from '../../state/store.js'


export default {
    data() {
        return {
            store,
        };
    },
    props: ['n', 'parentKey'],
    methods: {
        togglePad() {
            console.log("parentKey: ", this.parentKey)
            // find they key and change the options to toggle this n
            if (this.parentKey.options.padsSet.includes(this.n)) {
                const index = this.parentKey.options.padsSet.indexOf(this.n);
                if (index > -1) { // only splice array when item is found
                    this.parentKey.options.padsSet.splice(index, 1); // 2nd parameter means remove one item only
                }
            } else {
                this.parentKey.options.padsSet.push(this.n)
            }
        }
    }
}
</script>

<template>
    <div class="pad" :class="{ on: this.parentKey.options.padsSet && this.parentKey.options.padsSet.includes(this.n) }"
        @click="togglePad">
        {{ n }}
    </div>
</template>

<style scoped>
.pad {
    background-color: var(--vt-c-divider-dark-1);
    border-radius: 2px;
    height: 15px;
    width: 15px;
    text-align: center;
    line-height: normal;
    user-select: none;
    cursor: pointer;
    margin: 5px;
}

.on {
    background-color: blue;
}
</style>