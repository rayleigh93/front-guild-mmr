import Vue from "vue"
const chunk = async () => import(/* webpackChunkName: "myChunkName" */ "../chunk")

export default Vue.extend({
    props: {
    },
    data() {
        return {
            booleanComponent: false,
        }
    },
    computed: {
    },
    methods: {
        load() {
            this.booleanComponent = !this.booleanComponent
        },
    },
    components: {
        chunk,
    },
})
