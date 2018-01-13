module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.get_goals()
          .then( goals => res.status(200).send( goals ) )
          .catch( () => res.status(500).send() );
      },

      getOne:(req,res,next) => {
        const db = req.app.get('db');
        const {goalsid} = req.params
        db.read_goal([goalsid])
        .then( (goal) => res.status(200).send(goal))
        .catch( () => res.status(500).send())
    },
    
    addGoal: (req,res,next) => {
        const db = req.app.get('db');
        // let { goalname, description, startdate, enddate } = req.body; 
        db.create_goal([req.body.goalName, req.body.goalDesc, req.body.startDate, req.body.endDate])
        .then( () => {
            res.status(200).send()
        }).catch( (error) => {
            console.log(error)
            res.status(500).send(error)})
        },
        deleteGoal:(req,res) => {
            const db = req.app.get('db')
            db.delete_goal([req.params.goalsid])
            .then(() => {
                res.status(200).json()
            }).catch( (error) => {
                console.log('errordelete', error)
                res.status(500).send(error)
            })
        }
           
}