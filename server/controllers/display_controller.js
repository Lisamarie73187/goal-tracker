module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.get_goals([req.session.user.id])
          .then( goals => res.status(200).send( goals ) )
          .catch( () => res.status(500).send() );
      },

      getOne:(req,res,next) => {
        const db = req.app.get('db');
        const {goalsid} = req.params
        db.read_goal([goalsid])
        .then( (goal) => res.status(200).send(goal[0]))
        .catch( () => res.status(500).send())
    },
    
    addGoal: (req,res,next) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.create_goal([req.body.goalName, 
                        req.body.goalDesc, 
                        req.body.startDate, 
                        req.body.endDate, 
                        req.session.user.id])
        .then( (goal) => {
            res.status(200).send(goal)
        }).catch( (error) => {
            console.log(error)
            res.status(500).send(error)})
        },

        addTask: (req,res,next) => {
            const db = req.app.get('db');
            console.log(req.body)
            db.add_task([req.body.taskname, req.body.completed, 
                        req.body.date, req.body.data])
            .then( (task) => {
                console.log(req.body.goalsid)
                res.status(200).send(task)
            }).catch( (error) => {
                console.log(error)
                res.status(500).send(error)
            })
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
        },
        editGoal: (req,res, next) => {
            const db = req.app.get('db')
            db.edit_goal([
                req.params.goalsid, 
                req.body.goalName, 
                req.body.goalDesc, 
                req.body.startDate, 
                req.body.endDate, 
                ])
                .then(() => {
                    res.status(200).json()
                }).catch( (error) => {
                    console.log('errordelete', error)
                    res.status(500).send(error)
                })
            }
            
}