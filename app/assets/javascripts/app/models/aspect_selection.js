// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3-or-Later
app.models.AspectSelection = Backbone.Model.extend({
  toggleSelected: function() {
    this.set({"selected": !this.get("selected")}, {async: false});
  }
});
// @license-end
