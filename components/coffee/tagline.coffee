$ = require 'jquery'

do fill = (item = 'Some text here') ->
  $('.tagline').append "#{item}"
fill