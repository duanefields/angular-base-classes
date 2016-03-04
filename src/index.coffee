module.exports.AngularController = class AngularController

  # register the subclass with angular, module and name are optional
  @register: (name, module) ->
    module ?= @module || angular.module 'controllers'
    name ?= @name || @toString().match(/function\s*(.*?)\(/)?[1]
    module.controller name, @

  # inject the list of dependencies, as a list of Strings
  @inject: (args...) ->
    @$inject = args

  constructor: (args...) ->
    for key, index in @constructor.$inject
      # makes injected services to instance vars
      @[key] = args[index]

    @initialize?()

module.exports.AngularService = class AngularService

  # register the subclass with angular, module and name are optional
  @register: (name, module) ->
    module ?= @module || angular.module 'services'
    name ?= @name || @toString().match(/function\s*(.*?)\(/)?[1]
    module.service name, @

  # inject the list of dependencies
  @inject: (args...) ->
    @$inject = args

  constructor: (args...) ->
    for key, index in @constructor.$inject
      # makes injected services to instance vars
      @[key] = args[index]

    @initialize?()
