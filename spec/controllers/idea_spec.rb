require 'rails_helper'
RSpec.describe Api::V1::IdeasController, :type => :controller do
  describe "GET index" do

    it "assigns @teams" do
      id1 = create_idea1.id
      id2 = create_idea2.id
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
end
