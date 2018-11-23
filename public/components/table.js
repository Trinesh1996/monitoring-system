
Vue.component('lastest-repos', {
    props : ['repos'],
    data: function () {
      return {
        selected: 'hello',
        getProjects: [],
        project: ''
      }
    },
    methods: {
        // filterByProjects:  function (selected) { 
        //     let self = this;
        //     axios.get(`/api/by/project/${selected}`)
        //         .then(function (results) {
        //             self.getProjects =[];
        //             self.getProjects.push(results.data.data)
        //         });
        // }
    },
    mounted: function () {
        let self = this;
        axios.get('/api/get/repos/latest')
            .then(function (results) {
                if (results.data.success) {
                    let data = results.data.data;
                    for (const current of data) {
                        self.getProjects.push(current)
                    }
                }
            });


    },

    template: `
    <div class="panel-body">
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Project Name</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="repo in repos">
                <td>#</td>
                <td> {{repo.full_name}} </td>
                <td> {{repo.project_name}} </td>
                <td> {{repo.created_at}} </td>
                <td> {{repo.updated_at}} </td>
            </tr>
        </tbody>
    </table>
</div>`
  })

  