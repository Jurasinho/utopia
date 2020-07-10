<template>
    <div class="power-points" :style="style">
        <icon-fist class="power" :width="size * 2" :height="size * 2" ></icon-fist>
        <p>
            {{ value | plusIfPositive }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 24,
            },
            value: {
                type: Number,
                default: 0
            }
        },
        filters: {
            plusIfPositive(value) {
                return value > 0 ? `+${value}` : value;
            }
        },
        computed: {
            style(){
                return {
                    '--size': this.size + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .power-points {
        display: flex;
        align-items: center;
        margin: 0 calc(var(--size) / 3);
    }

    p {
        padding: 0;
        margin: 0 0 0 calc(var(--size) / 3);
        font-size: var(--size);
        font-weight: 500;
        font-family: Tahoma, sans-serif;
    }
</style>
