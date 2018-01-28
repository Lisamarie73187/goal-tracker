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

    getGoalSubtask: (req,res,next) => {
        const db = req.app.get('db')
        db.get_goals_subtasks([req.session.user.id])
        .then((goals) => res.status(200).send(goals))
        .catch( () => res.status(500).send())
    },
    
    addGoal: (req,res,next) => {
        const db = req.app.get('db');
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
            db.add_task([req.body.taskname, req.body.completed, 
                        req.body.date, req.body.data])
            .then( (task) => {
                res.status(200).send(task)
            }).catch( (error) => {
                console.log(error)
                res.status(500).send(error)
            })
        },

        readTask: (req, res, next) => {
            const db = req.app.get('db')
            db.get_task([req.params.goalsid])
            .then((task) => res.status(200).send(task))
            .catch( (error) => {
                console.log('errortaskread', error)
                res.status(500).send(error)
            })
        },

        addSubTask: (req, res, next) => {
            const db = req.app.get('db')
            db.add_subtask([
                req.body.subTaskName,
                req.body.completed,
                req.body.date,
                req.body.taskid,
                req.body.goalsid
            ]).then((subtask) => res.status(200).send(subtask))
            .catch( (error) => {
                console.log('error post subtask', error)
                res.status(500).send(error)
            })
        },

        getSubTask: (req, res, next) => {
            const db = req.app.get('db')
            db.get_subtask([req.params.taskid])
            .then( (subtask) => res.status(200).send(subtask))
            .catch( (error) => {
                console.log('error read subtask', error)
                res.status(500).send(error)
            }) 
        },

        getSubTaskTwo: (req, res, next) => {
            const db = req.app.get('db')
            db.get_subtask_two([req.params.goalsid])
            .then( (subtask) => res.status(200).send(subtask))
            .catch( (error) => {
                console.log('error read subtask', error)
                res.status(500).send(error)
            }) 
        },

        deleteSubtasksGoals: (req, res, next) => {
            const db = req.app.get('db')
            db.delete_subtasks_goals([req.params.goalsid])
            .then( () => res.status(200).send())
            .catch ((error) => {
                console.log('delete Error', error)
                res.status(500).send(error)
            })
        },
     
        deleteTasksGoals:(req,res) => {
            const db = req.app.get('db')
            db.delete_tasks_goals([req.params.goalsid])
            .then((goals) => res.status(200).send(goals))
                .catch( (error) => {
                    console.log('delete', error)
                    res.status(500).send(error)
            })
        },
        deleteGoal:(req,res) => {
            const db = req.app.get('db')
            db.delete_goal([req.params.goalsid])
            .then((goals) => res.status(200).send(goals))
               .catch( (error) => {
                   console.log('delete', error)
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
            },

            completedSubTask: (req, res, next) => {
                const db = req.app.get('db')
            db.mark_complete([req.params.subtaskid, req.body.completedDate])
            .then(() => {
                res.status(200).send()
            }).catch((error) => {
                console.log('subtaskPut', error)
                res.status(500).send(error)
            })
            },

            deleteSubTask: (req, res, next) => {
                const db = req.app.get('db')
                db.delete_subtask([req.params.subtaskid])
                .then( () => {
                    res.status(200).send()
                }).catch((error) => {
                    console.log('subtaskDelete', error)
                    res.status(500).send(error)
                })
            },

            deleteTask: (req, res, next) => {
                const db = req.app.get('db')
                db.delete_task([req.params.taskid])
                .then( () => {
                    res.status(200).send()
                }).catch((error) => {
                    console.log('taskDelete', error)
                    res.status(500).send(error)
                })
            
            },

            getPercent: (req,res,next) =>{
                const db = req.app.get('db')
                db.get_percent([req.params.goalsid])
                .then( (subtask) => {
                    res.status(200).send(subtask)
                }).catch((error) => {
                    console.log('percent', error)
                    res.status(500).send()
                })
            }
}