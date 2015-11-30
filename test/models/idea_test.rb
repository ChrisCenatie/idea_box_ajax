require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test "it has a default quality of swill" do
    idea = Idea.create(title: "test", body: "Best idea ever!")

    assert_equal 'swill', idea.quality
  end
end
