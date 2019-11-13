const ExamplePlugin = {
  install: function (Vue) {
    Vue.filter('uppercase', function(value) {
      return value.toUpperCase();
    });
  }
}

export default ExamplePlugin;