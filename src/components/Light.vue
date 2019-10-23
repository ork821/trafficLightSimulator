<template>
    <div v-bind:class="color" class="light">
        <div v-bind:class="{active: isActive}" class="light-layer"></div>
        <span v-if="isActive" class="timer">
            {{ time }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "Light",
        props: {
            color: {
                type: String
            },
            isActive: {
                type: Boolean
            },
            time: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    .light {
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50px;
        position: relative;
    }

    .red {
        color: red;
        background: red;

    }

    .yellow {
        color: yellow;
        background: yellow;

    }

    .green {
        color: green;
        background-color: green;

    }

    .light-layer {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: #000;
        opacity: 0.5;
    }

    .active {
        opacity: 0.1;
    }

    .timer {
        font-size: 60px;
        line-height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
    }

</style>
