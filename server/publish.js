Meteor.publish("models", function(){
    return Models.find();
})

Meteor.publish("model", function(id){
    return Models.find({_id: id});
})
