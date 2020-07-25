const ExamplePlugin = {
  install: function (Vue) {
    Vue.filter('uppercase', function(value) {
      if (!value) {
        return value;
      }

      return value.toUpperCase();
    });
  }
}

export default ExamplePlugin;