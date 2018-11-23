let search = new Vue({
    el: '.search',

    data: {
        selected:'',
        repos: [],
        getProjects: [],
        hidepage:''
    },
  
    mounted: function () {
        let self = this;
        axios
            .get('/api/get/students/:project')
            .then(function (results) {

                if (results.data.success) {
                    let repos = results.data.data;
                    for (let current of repos) {
                        axios
                            .get(`/api/get/lastest/repos/${current.github_username}`)
                            .then(function (results) {
                                let name = results.data.lastestRepos[0].full_name.split('/');
                                const {
                                    created_at,
                                    updated_at
                                } = results.data.lastestRepos[0];
                                let data = {
                                    full_name: name[0],
                                    project_name: name[1],
                                    created_at: created_at,
                                    updated_at: updated_at
                                }
                                self.repos.push(data);
                            });
                    }
                }
            });

            axios.get('/api/get/projects')
            .then(function (results) {
                if (results.data.success) {
                    let data = results.data.data;
                    for (const current of data) {



                        self.getProjects.push(current)

                    }
                }
            });


    }
});


let filter = new Vue({

    el: '.filter',

    data: {
        selected: 'hello',
        getProjects: [],
        project: ''
    },
    methods: {
        filterByProjects:  function (selected) { 
            let self = this;
            axios.get(`/api/by/project/${selected}`)
                .then(function (results) {
                    self.getProjects =[];
                    self.getProjects.push(results.data.data)
                });
        }
    },
    mounted: function () {
       
    },
});