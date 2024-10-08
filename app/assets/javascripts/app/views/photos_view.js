// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3-or-Later

app.views.Photos = app.views.InfScroll.extend({
  className: "clearfix row",
  postClass: app.views.Photo,

  initialize: function() {
    this.stream = this.model;
    this.collection = this.stream.items;
    new app.views.Gallery({el: this.$el});

    // viable for extraction
    this.stream.fetch();
    this.setupInfiniteScroll();
  }
});
// @license-end
