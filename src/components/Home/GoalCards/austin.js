componentDidMount() {
    axios.get('/user-tests-results').then(response => {
           // console.log(response)
           this.setState({
               data: response.data
           })
       }).then(() => {
           console.log(this.state.data)
           const addCategories = this.state.data.map((item, index) => {
               this.setState({
                   categories: [...this.state.categories, item.category]
               })
           })
       }).then(() => {
           // console.log(this.state.categories)
           const myArray = this.state.categories
           const unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
           this.setState({
               singleCategories: unique,
           })
       }).then(() => {
           console.log(this.state.singleCategories)
           var data1 = {labels: [],
                           
                           datasets: [
                           {
                           label: 'Avg Percent/Subject',
                           backgroundColor: [
                               'rgba(255, 99, 132, 0.2)',
                               'rgba(54, 162, 235, 0.2)',
                               'rgba(255, 206, 86, 0.2)',
                               'rgba(75, 192, 192, 0.2)',
                               'rgba(153, 102, 255, 0.2)',
                               'rgba(255, 159, 64, 0.2)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 2,
                           hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                           hoverBorderColor: 'rgba(255,99,132,1)',
                           data: []
                           }
                           ]};
           this.state.singleCategories.map((item, index) => {
               data1.labels.push(item)
               var arr = []
               var length = ''
               var average = ''
               this.state.data.map((i, ind) => {
                   if(i.category === item) {
                       arr.push(i.percent)
                   }
               })
               // length = arr.length
               average = arr.reduce(( acc, cur ) => acc + cur, 0) / arr.length
               data1.datasets[0].data.push(average)
           })
           this.setState({
               data1: data1
           })
   }