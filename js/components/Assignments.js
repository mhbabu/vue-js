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
            assingments: [
                { name: 'Finish project', complete: false, tag: 'math' },
                { name: 'Read Chapter 4', complete: false, tag: 'science' },
                { name: 'Turn in Homework', complete: false, tag: 'math' },
            ],
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