import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {

    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="incompletedAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

            <assignment-create @add="add" ></assignment-create>

        </section>
    
    `,

    data() {
        return {
            assingments: [],
        }
    },

    computed: {
        incompletedAssignments() {
            return this.assingments.filter(assignment => !assignment.complete);
        },
        completedAssignments() {
            return this.assingments.filter(assignment => assignment.complete);
        }
    },

    created(){
        fetch("http://localhost:3001/assignments")
        .then(response => response.json())
        .then(assingments => this.assingments = assingments);
    },

    methods: {
        add(name) {
            this.assingments.push({
                name: name,
                complete: false,
                id: this.assingments.length + 1
            })
        }
    },
}