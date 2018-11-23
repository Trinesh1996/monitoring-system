Vue.component('search-project', {
    props : ['project'],
    data: function () {
        return {
            getProjects:[],
            selected: 'hello',
            username : '',

            
        }
    },
    methods: {
        filterByProjects:  function (username,selected) { 
            let self = this; 
            axios.get(`/api/search/${username}/${selected}`)
                .then(function (results) { 
                    console.log(results.data)
                    self.getProjects =[];
                    self.getProjects.push(results.data.data);

                    self.$emit('filtered', { projects : self.getProjects })
                });
        }
    },
    mounted: function () {
        let self = this;
        axios.get('/api/get/projects')
        .then(function(response){
          if (response.data.success) {
            for (const current of response.data.data) {
                self.getProjects.push(current)
            }
          }
        })
    },
template: `

<div class="row">
<input type="text"  v-model="username" value="ola!" style="float: left; position: relative; margin-top: -48px; margin-left: 585px; opacity: 1.0; color:black; display:block; left:0px;">

    <div class="dropdown filter" style="float: right; margin-top: -50px; margin-right: 30px; ">
   
        <select v-model="selected">
            <option value="">Select Project</option>
            <option v-for="project in getProjects" v-bind:value="project.project_keys">
                {{project.project_name}}
            </option>
        </select>
 
        <button v-on:click="filterByProjects(username,'shoe_api')" class="btn btn-primary dropdown-toggle"
     type="button" data-toggle="dropdown>Search">Search</button>
    </div>
     
</div>
    `
})

