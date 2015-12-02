class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.all.reverse
  end

  def create
    Idea.create(idea_params) unless empty_idea?
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body)
    end

    def empty_idea?
      idea_params[:title].empty? && idea_params[:body].empty?
    end
end
