require 'rails_helper'

RSpec.feature "viewing ideas", js: true do

  scenario "it displays ideas including title, body, and quality" do
    id1 = create_idea1.id
    id2 = create_idea2.id
    visit '/'

    within("#idea1") do
      expect(page).to have_content('Idea1')
      expect(page).to have_content('First Best Idea Ever')
      expect(page).to have_content('swill')
    end

    within("#idea2") do
      expect(page).to have_content('Idea2')
      expect(page).to have_content('Second Best Idea Ever')
      expect(page).to have_content('genius')
    end
  end

  scenario "it limits body text length to 100 characters" do
    skip
  end
end
