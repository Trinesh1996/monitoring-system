Vue.component('add-students', {
    data: function () {
        return {
            userData: {
                full_name: '',
                email: '',
                github_username: '',
                codewars_username: ''
            },
            msg:''
        }
    },
    methods: {
        add_Students: function () {
            let self = this;
            let data = self.userData;
            axios.post('/api/add/new/students',{data})
                  .then(function (results) {
                      console.log("data",results)
                      if (results.success) {
                        {
                         self.msg = results.msg
                        }
                        self.msg ='Unable to add'
                      }
                  });
            
        }
    },
    mounted: function () {

    },
    template: `
    <div class="signup-form">	
		<h2>Add Student</h2>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-user"></i>Full Name</span>
				<input type="text" v-model = 'userData.full_name' class="form-control" name="username" placeholder="Username" value="ola!" style=" position: relative;  opacity: 1.0; color:black; display:block; left:0px;">
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-paper-plane"></i>Email</span>
				<input type="email" v-model = 'userData.email' class="form-control" name="email" placeholder="Email Address" value="ola!" style=" position: relative;  opacity: 1.0; color:black; display:block; left:0px;">
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i>Github Username</span>
				<input type="text" v-model = 'userData.github_username' class="form-control" name="password" placeholder="Github username" value="ola!" style=" position: relative;  opacity: 1.0; color:black; display:block; left:0px;">
			</div>
        </div>

        <div class="form-group">
        <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-lock"></i>CodeWars Username</span>
            <input type="text" v-model = 'userData.codewars_username' class="form-control" name="password" placeholder="Codewars username" value="ola!" style=" position: relative;  opacity: 1.0; color:black; display:block; left:0px;">
        </div>
    </div>
       
		<div class="form-group">
            <button type="submit" v-on:click="add_Students()" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
	
    
	<div class="text-center">Already have an account? <a href="#">Login here</a>.</div>
</div>
    `
})
