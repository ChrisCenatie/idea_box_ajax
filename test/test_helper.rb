require 'simplecov'
SimpleCov.start 'rails'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'

# class ActiveSupport::TestCase
#   # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
#   # fixtures :all
#
#   def create_idea1
#     Idea.create(title: "Idea1", body: "First Best Idea Ever")
#   end
#
#   def create_idea2
#     Idea.create(title: "Idea2", body: "Second Best Idea Ever", quality: "genius")
#   end
# end

class ActionDispatch::IntegrationTest
   include Capybara::DSL

   def create_idea1
     Idea.create(title: "Idea1", body: "First Best Idea Ever")
   end

   def create_idea2
     Idea.create(title: "Idea2", body: "Second Best Idea Ever", quality: "genius")
   end

  def setup
    DatabaseCleaner.start
  end

  def teardown
    reset_session!
    DatabaseCleaner.clean
  end
end
