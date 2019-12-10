import Vue from "vue"
import _ from "lodash"

const myFilter = (numb: number): boolean => {
    return numb === 1
}

export default Vue.extend({
    props: {
    },
    data() {
        return {
            toto: _.filter([1,2,3], myFilter)
        }
    },
    computed: {
    },
})
