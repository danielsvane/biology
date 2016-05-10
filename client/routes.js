FlowRouter.route("/", {
    action: function(){
        BlazeLayout.render("layout", {main: "index"});
    }
});

FlowRouter.route("/insert", {
    action: function(){
        BlazeLayout.render("layout", {main: "insert"});
    }
});

FlowRouter.route("/model/:id", {
    action: function(){
        BlazeLayout.render("layout", {main: "model"});
    }
});
