Template.index.helpers({
    models: function(){
        return Models.find().fetch();
    }
});

Template.index.onCreated(function(){
    this.subscribe("models");
})
