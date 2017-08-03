module.exports = {
  home: function(req, res){
    let context = {};
    const col = req.db.collection('robots');
    let results = col.find({}).toArray((error, results)=>{
      context.model = results;
      res.render('index', context);
    });
  },

  lookingForWork: function(req, res){
    let context = {};
    const col = req.db.collection('robots');
    let results = col.find({'company': null}).toArray((error, results)=>{
      context.model = results;
      res.render('lookingForWork', context);
    });
  },

  employed: function(req, res){
    let context = {};
    const col = req.db.collection('robots');
    let results = col.find({'company': {$ne: null}}).toArray((error, results)=>{
      context.model = results;
      res.render('employed', context);
    });
  },

  robotProfile: function(req, res){
    let robot = req.params.id;
    robot = parseInt(robot);
    let context = {};
    const col = req.db.collection('robots');
    let results = col.find({'id': robot}).toArray((error, results)=>{
      context.model = results;
      res.render('profile', context);
    });
  },
}
