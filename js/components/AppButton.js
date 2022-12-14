export default {
    template: `<button :class="{
        'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-blue-400 hover:bg-blue-600': type === 'primary',
        'bg-purple-200 hover:bg-purple-400': type === 'secondary',
        'bg-green-200 hover:bg-green-400': type === 'muted',
        'is-loading': processing
    }" 
    :disabled="processing"><slot/></button>`,

    props: {

        type: {
            type: String,
            default: 'primary'
        }
    },

    data() {
        return { processing: true }
    }
}
 // 'is-loading': processing