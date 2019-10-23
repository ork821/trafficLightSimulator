import Vue from "vue";
import VueRouter from "vue-router";
import TraffLight from "../components/TrafLight";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/red",
        },
        {
            name: 'Red Light',
            path: "/red",
            props: {
                id: 1,
                startTime: 10
            },
            component: TraffLight
        },
        {
            name: 'Yellow Light',
            path: "/yellow",
            props: {
                id: 2,
                startTime: 3
            },
            component: TraffLight
        },
        {
            name: 'Green Light',
            path: "/green",
            props: {
                id: 3,
                startTime: 15
            },
            component: TraffLight
        }
    ]
});

