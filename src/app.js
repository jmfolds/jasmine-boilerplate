
/*global vw, Backbone */
if (!this.vw || typeof this.vw !== 'object') {
    this.vw = {};
}


(function () {
    'use strict';

    // auto render on change
    //Backbone.Marionette.ItemView.prototype["modelEvents"] = { "change": "render" };

    vw.App = new Backbone.Marionette.Application();

    //Add an initializer to the app to expose a property
    //we can check in the rest of the code to decide if
    //we are in the Mobile app or not.
    vw.App.addInitializer(function (options) {
        vw.App.addRegions({
            headerRegion: '#header-region',
            contentRegion: '#content-region',
            footerRegion: '#footer-region'
        });
    });

    // vw.App.CurrentUser = new vw.UserModel();

    vw.App.stubFields = [{ Type: "input", Name: "TestInput", Label: "Test Input", Value: "Text" },
                         { Type: "", Name: "TestText", Label: "Test Text", Value: "Uneditable Text" },
                         { Type: "textarea", Name: "TestTextArea", Label: "Test TextArea", Value: "Lots of Text" },
                         { Type: "select", Name: "TestSelect", Label: "Test Select", SelectedValue: "2", SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                         { Type: "multiselect", Name: "TestMultiSelect", Label: "Test MultiSelect", SelectedValues: ["1", "3"], SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                         { Type: "radio", Name: "TestOptions", Label: "Test Options", SelectedValue: "option1", RadioOptions: [{ Value: "option1", Name: "Option 1" }, { Value: "option2", Name: "Option 2" }] },
                         { Type: "checkbox", Name: "TestCheckbox", Label: "True/False", Value: true }];

    vw.App.stubWOList = [{
                        Id: 1,
                        ItemClass: "active",
                        Title: "Coffee Time",
                        Distance: 2,
                        Lat: "40.592379",
                        Long: "-105.079052",
                        Fields: [{ Type: "input", Name: "TestInput", Label: "Test Input", Value: "Text" },
                                 { Type: "", Name: "TestText", Label: "Test Text", Value: "Uneditable Text" },
                                 { Type: "textarea", Name: "TestTextArea", Label: "Test TextArea", Value: "Lots of Text" },
                                 { Type: "select", Name: "TestSelect", Label: "Test Select", SelectedValue: "2", SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "multiselect", Name: "TestMultiSelect", Label: "Test MultiSelect", SelectedValues: ["1", "3"], SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "radio", Name: "TestOptions", Label: "Test Options", SelectedValue: "option1", RadioOptions: [{ Value: "option1", Name: "Option 1" }, { Value: "option2", Name: "Option 2" }] },
                                 { Type: "checkbox", Name: "TestCheckbox", Label: "True/False", Value: true }]                                
                    },
                    {
                        Id: 2,
                        ItemClass: "",
                        Title: "I Can Haz Burrito?",
                        Distance: 5,
                        Lat: "40.588995",
                        Long: "-105.076391",
                        Fields: [{ Type: "input", Name: "TestInput", Label: "Test Input", Value: "Text" },
                                 { Type: "", Name: "TestText", Label: "Test Text", Value: "Uneditable Text" },
                                 { Type: "textarea", Name: "TestTextArea", Label: "Test TextArea", Value: "Lots of Text" },
                                 { Type: "select", Name: "TestSelect", Label: "Test Select", SelectedValue: "2", SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "multiselect", Name: "TestMultiSelect", Label: "Test MultiSelect", SelectedValues: ["1", "3"], SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "radio", Name: "TestOptions", Label: "Test Options", SelectedValue: "option1", RadioOptions: [{ Value: "option1", Name: "Option 1" }, { Value: "option2", Name: "Option 2" }] },
                                 { Type: "checkbox", Name: "TestCheckbox", Label: "True/False", Value: true }]
                    },
                    {
                        Id: 3,
                        ItemClass: "active",
                        Title: "Margarita Por Favor!",
                        Distance: 7,
                        Lat: "40.586875",
                        Long: "-105.078263",
                        Fields: [{ Type: "input", Name: "TestInput", Label: "Test Input", Value: "Text" },
                                 { Type: "", Name: "TestText", Label: "Test Text", Value: "Uneditable Text" },
                                 { Type: "textarea", Name: "TestTextArea", Label: "Test TextArea", Value: "Lots of Text" },
                                 { Type: "select", Name: "TestSelect", Label: "Test Select", SelectedValue: "2", SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "multiselect", Name: "TestMultiSelect", Label: "Test MultiSelect", SelectedValues: ["1", "3"], SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "radio", Name: "TestOptions", Label: "Test Options", SelectedValue: "option1", RadioOptions: [{ Value: "option1", Name: "Option 1" }, { Value: "option2", Name: "Option 2" }] },
                                 { Type: "checkbox", Name: "TestCheckbox", Label: "True/False", Value: true }]
                    },
                    {
                        Id: 4,
                        ItemClass: "Whole Paycheck",
                        Title: "Work Order #4",
                        Distance: 10,
                        Lat: "40.559089",
                        Long: "-105.078456",
                        Fields: [{ Type: "input", Name: "TestInput", Label: "Test Input", Value: "Text" },
                                 { Type: "", Name: "TestText", Label: "Test Text", Value: "Uneditable Text" },
                                 { Type: "textarea", Name: "TestTextArea", Label: "Test TextArea", Value: "Lots of Text" },
                                 { Type: "select", Name: "TestSelect", Label: "Test Select", SelectedValue: "2", SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "multiselect", Name: "TestMultiSelect", Label: "Test MultiSelect", SelectedValues: ["1", "3"], SelectOptions: [{ Id: "1", Value: "Option 1" }, { Id: "2", Value: "Option 2" }, { Id: "3", Value: "Option 3" }] },
                                 { Type: "radio", Name: "TestOptions", Label: "Test Options", SelectedValue: "option1", RadioOptions: [{ Value: "option1", Name: "Option 1" }, { Value: "option2", Name: "Option 2" }] },
                                 { Type: "checkbox", Name: "TestCheckbox", Label: "True/False", Value: true }]
                    }];

    vw.GetWO = function(id){
        var results = _.filter(vw.App.stubWOList, function (wo) { return wo.Id === id; });
        return (results.length > 0) ? results[0] : {};
    },

    // fires before ALL addInitializers have been run!
    vw.App.on("initialize:before", function (options) {
        // code
    });

    // fires after ALL addInitializers have been run!
    vw.App.on('initialize:after', function (options) {
        // function receives the options passed into Application.start() method.


    });
    //debugging so we can see events flying around
    vw.App.vent.on('all', function (evt, model) {
        console.log('APP:DEBUG: Event Caught: ' + evt);
    });

    //vw.MainLayout = Backbone.Marionette.Layout.extend({
    //    template: "#main-layout-template",
    //    id: 'cost-estimate-layout',
    //    regions: {
    //        HeaderRegion: '#header-region',
    //        mainRegion: '#main-region',
    //        footerRegion: '#footer-region'
    //    }
    //});


})();