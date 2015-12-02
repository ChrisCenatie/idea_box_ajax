RSpec.configure do |config|
  require 'simplecov'
  SimpleCov.start

  require 'capybara/rspec'
  require 'capybara/poltergeist'
  Capybara.javascript_driver = :selenium
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  def create_idea1
    Idea.create(title: "Idea1", body: "First Best Idea Ever")
  end

  def create_idea2
    Idea.create(title: "Idea2", body: "Second Best Idea Ever", quality: "genius")
  end
end
