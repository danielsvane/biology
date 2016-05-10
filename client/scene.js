// Template.scene.onRendered(() => {
//     b4w.register("example_main", function(exports, require) {
//
//     var m_anim   = require("animation");
//     var m_app    = require("app");
//     var m_data   = require("data");
//     var m_main   = require("main");
//     var m_scenes    = require("scenes");
//     var m_sfx    = require("sfx");
//     var m_cam    = require("camera");
//
//     var TARGET_POS = new Float32Array([1.5, 0, 2]);
//     var TARGET_PIVOT = new Float32Array([0, 0, 0]);
//
//     var DIST_LIMITS = {
//         min: 10,
//         max: 20
//     };
//     var TARGET_VERT_LIMITS = {
//         down: -Math.PI/16,
//         up: -Math.PI/4
//     }
//     var TARGET_HORIZ_LIMITS = {
//         left: -Math.PI/4,
//         right: Math.PI/4
//     }
//
//     exports.init = function() {
//         m_app.init({
//             canvas_container_id: "canvas_cont",
//             callback: init_cb,
//             physics_enabled: false,
//             media_auto_activation: false
//         });
//     }
//
//     function init_cb(canvas_elem, success) {
//
//             m_data.load("primosome.json", load_cb);
//     }
//
//
//     function load_cb(root) {
//
//         console.log("yai");
//
//             m_app.enable_camera_controls();
//         var camera = m_scenes.get_active_camera();
//
//         m_cam.target_setup(camera, {
//             pos: TARGET_POS,
//             pivot: TARGET_PIVOT,
//             dist_lim: DIST_LIMITS,
//             use_panning: true
//         });
//         // setting some rotation
//         m_cam.rotate_camera(camera, 0, -Math.PI/4, true, true);
//     }
//
//     });
//
//     b4w.require("example_main").init();
// });
