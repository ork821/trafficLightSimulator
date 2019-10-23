<template>
    <div class="traffic_light">
        <Light
                :color="'red'"
                :isActive="redIsActive"
                :time="redIsActive ? time : null"
                :isBlink="redIsActive ? isBlink : null"
        />
        <Light
                :color="'yellow'"
                :isActive="yellowIsActive"
                :time="yellowIsActive ? time : null"
                :isBlink="yellowIsActive ? isBlink : null"
        />
        <Light
                :color="'green'"
                :isActive="greenIsActive"
                :time="greenIsActive ? time : null"
                :isBlink="greenIsActive ? isBlink : null"
        />
    </div>
</template>

<script>
    import Light from "./Light";

    export default {
        name: "TraffLight",
        components: {
            Light
        },
        data: function () {
            return {
                currentLight: 1,
                prevLight: null,
                time: 10,
                redIsActive: true,
                yellowIsActive: false,
                greenIsActive: false,
                isBlink: false
            };
        },
        props: {
            id: {
                type: Number
            },
            startTime: {
                type: Number
            }
        },
        created: function() {
            this.currentLight = this.id
            this.time = this.startTime
            this.setActiveLight(this.currentLight)
            this.startTimer(this.time)

        },
        watch: {
            '$route': function () {
                this.isBlink = false
                this.prevLight = this.currentLight;
                this.currentLight = this.id;
                this.time = this.startTime;
                this.setActiveLight(this.currentLight);
                this.startTimer();
            }
        },
        methods: {
            setActiveLight: function (currentLight) {
                switch (currentLight) {
                    case 1:
                        this.redIsActive = true
                        this.yellowIsActive = false
                        this.greenIsActive = false
                        break
                    case 2:
                        this.redIsActive = false
                        this.yellowIsActive = true
                        this.greenIsActive = false
                        this.isBlink = true
                        break
                    case 3:
                        this.redIsActive = false
                        this.yellowIsActive = false
                        this.greenIsActive = true
                        break
                    default:
                        this.redIsActive = true
                        this.yellowIsActive = false
                        this.greenIsActive = false
                        break
                }
            },

            changeLight: function () {
                if (this.currentLight === 1 || this.currentLight === 3) {
                    this.prevLight = this.currentLight
                    this.$router.replace('/yellow')
                } else if (this.currentLight === 2 && this.prevLight === 1) {
                    this.prevLight = this.currentLight
                    this.$router.replace('/green')
                } else if (this.currentLight === 2 && this.prevLight === 3) {
                    this.prevLight = this.currentLight
                    this.$router.replace('/red')
                } else if(this.currentLight === 2 && this.prevLight === 2) {
                    this.prevLight = 2;
                    this.$router.replace(`/red`);
                }
            },

            startTimer: function () {
                this.time = this.startTime
                if (this.timer) {
                    clearInterval(this.timer)
                }
                this.timer = setInterval(this.setCurrentTime, 1000);
            },

            setCurrentTime: function () {
                if (this.time > 1) {
                    this.time--
                } else {
                    clearInterval(this.timer)
                    this.changeLight()
                }
                if (this.time <= 3) {
                    this.isBlink = true
                }
            }

        }
    };
</script>

<style scoped></style>
