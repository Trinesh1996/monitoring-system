Vue.component("rank-wars", {
    props: ['rank'],
    data: function () {
        return {
            getCodeWarRanks: []
        }
    },

    mounted: function () {
        let self = this;

        Promise.all([
                axios.get('/api/coderwars/users/rank/nachowolf'),
                axios.get('/api/coderwars/users/rank/MrBooi'),
                axios.get('/api/coderwars/users/rank/avermeulen')
            ])
            .then(function (coderResults) {


                coderResults.forEach(function (results) {
                    console.log(results.data)
                    if (results.data.success) {
                        let data = results.data.data;

                        let getWars = {
                            username: data.name,
                            TotolCompeted: data.codeChallenges.totalCompleted,
                            honor: data.honor,
                        }
                        console.log(getWars);

                        self.getCodeWarRanks.push(getWars)

                    }
                });
            })
    },

    template: `
    <div class="panel-body">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Total Completed</th>
                <th>Honor</th>
               
            </tr>
        </thead>
        <tbody>
            <tr v-for="userRank in getCodeWarRanks">
                <td>#</td>
                <td> {{userRank.username}} </td>
                <td> {{userRank.TotolCompeted}} </td>
                <td> {{userRank.honor}} </td>
            </tr>
        </tbody>
    </table>
</div>`

});