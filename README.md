# Angular Base Classes for CoffeeScript

Base classes that make developing Angular with CoffeeScript much easier.

## Basic Use

```coffee-script
BaseClasses = require "angular-base-classes"

class RootController extends BaseClasses.AngularController
  @register()
  @inject '$http', '$rootScope'

  initialize: ->
    console.log "I am root"
```

All of your injected services will be mapped to instance variables.
