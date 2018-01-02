module.exports = {
    read: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_goals()
          .then( goals => res.status(200).send( goals ) )
          .catch( () => res.status(500).send() );
      }


}