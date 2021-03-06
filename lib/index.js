// Generated by CoffeeScript 1.10.0
(function() {
  var AngularController, AngularService,
    slice = [].slice;

  module.exports.AngularController = AngularController = (function() {
    AngularController.register = function(name, module) {
      var ref;
      if (module == null) {
        module = this.module || angular.module('controllers');
      }
      if (name == null) {
        name = this.name || ((ref = this.toString().match(/function\s*(.*?)\(/)) != null ? ref[1] : void 0);
      }
      return module.controller(name, this);
    };

    AngularController.inject = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return this.$inject = args;
    };

    function AngularController() {
      var args, i, index, key, len, ref;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      ref = this.constructor.$inject;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        key = ref[index];
        this[key] = args[index];
      }
      if (typeof this.initialize === "function") {
        this.initialize();
      }
    }

    return AngularController;

  })();

  module.exports.AngularService = AngularService = (function() {
    AngularService.register = function(name, module) {
      var ref;
      if (module == null) {
        module = this.module || angular.module('services');
      }
      if (name == null) {
        name = this.name || ((ref = this.toString().match(/function\s*(.*?)\(/)) != null ? ref[1] : void 0);
      }
      return module.service(name, this);
    };

    AngularService.inject = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return this.$inject = args;
    };

    function AngularService() {
      var args, i, index, key, len, ref;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      ref = this.constructor.$inject;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        key = ref[index];
        this[key] = args[index];
      }
      if (typeof this.initialize === "function") {
        this.initialize();
      }
    }

    return AngularService;

  })();

}).call(this);
