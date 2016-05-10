Template.model.helpers({
    model: function(){
        return Models.findOne({_id: FlowRouter.getParam("id")});
    }
});

Template.model.onCreated(function(){
    this.modelSub = this.subscribe("model", FlowRouter.getParam("id"));

    this.autorun(() => {
        if(this.modelSub.ready()){
            let model = Models.findOne({_id: FlowRouter.getParam("id")});
            setupModel(model.model);
        }
    })
});

Template.model.onDestroyed(function(){
    b4w.require("main").reset();
});

setupModel = function(jsonFile){

    let m_app    = b4w.require("app");
    let m_data   = b4w.require("data");

    m_app.init({
        canvas_container_id: "canvas_cont",
        callback: init_cb,
        physics_enabled: false,
        media_auto_activation: false
    });

    function init_cb(canvas_elem, success) {
        m_data.load("../"+jsonFile, load_cb);
    }

    function load_cb(root) {
        m_app.enable_camera_controls();
    }
}
