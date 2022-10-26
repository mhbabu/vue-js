export default {
    template: `
    
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assingment.name }} 
                <input type="checkbox" v-model="assingment.complete" class="ml-2" />
            </label>
        </li>

    `,
    
    props: {
        assingment: Object
    }
}