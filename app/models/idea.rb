class Idea < ActiveRecord::Base
  enum quality: [ "swill" , "plausible" , "genuis" ]
end
