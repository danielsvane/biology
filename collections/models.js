Models = new Mongo.Collection("models");
Models.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
    },
    jsonFile: {
        type: String,
        label: "JSON file",
        autoform: {
            afFieldInput: {
                type: "fileUpload",
                collection: "Files"
            }
        }
    },
    binFile: {
        type: String,
        label: "BIN file",
        autoform: {
            afFieldInput: {
                type: "fileUpload",
                collection: "Files"
            }
        }
    }
}));
