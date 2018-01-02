module.exports = {
    read: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_goals()
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
}