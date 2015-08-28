$ = require 'jquery'

do fill = (item = 'The Most Creative Minds in Art') ->
  $('.tagline').append "#{item}"
fill