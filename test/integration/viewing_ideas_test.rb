require 'test_helper'

class ViewingIdeasTest < ActionDispatch::IntegrationTest

  test "it displays ideas including title, body, and quality" do
    id1 = create_idea1.id
    id2 = create_idea2.id
    visit '/'
    assert_equal 200, page.status_code

    within(".idea#{id1}") do
      assert page.has_content?('Idea1')
      assert page.has_content?('First Best Idea Ever')
      assert page.has_content?('swill')
    end

    within(".idea#{id2}") do
      assert page.has_content?('Idea2')
      assert page.has_content?('Second Best Idea Ever')
      assert page.has_content?('genius')
    end
  end

  test "it limits body text length to 100 characters" do
    skip
  end

  # test "it displays ideas in chronological order" do
  #   id1 = create_idea1.id
  #   id2 = create_idea2.id
  #   visit '/'
  #   assert_equal 200, page.status_code
  #
  #   within(".idea#{id1}") do
  #     assert page.has_content?('Idea1')
  #     assert page.has_content?('First Best Idea Ever')
  #     assert page.has_content?('swill')
  #   end
  #
  #   within(".idea#{id2}") do
  #     assert page.has_content?('Idea2')
  #     assert page.has_content?('Second Best Idea Ever')
  #     assert page.has_content?('genius')
  #   end
  # end

end
