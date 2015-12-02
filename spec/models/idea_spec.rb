require 'rails_helper'

RSpec.describe Idea, :type => :model do
  it "it has a default quality of swill" do
    idea = Idea.create(title: "test", body: "Best idea ever!")

    expect(idea.quality).to eq('swill')
  end
end
