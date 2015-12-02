class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.order(id: :desc)
  end

  def create
    Idea.create(idea_params) unless empty_idea?
  end

  def destroy
    respond_with status: 200 if Idea.find(params[:id].to_i).delete
  end

  def update
    if idea_params[:thumbs]
      idea = Idea.find(params[:id].to_i)
      quality = Idea.qualities[idea.quality] + idea_params[:thumbs].to_i
      idea.update(quality: quality)
      respond_with status: 200
    end
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :thumbs)
    end

    def empty_idea?
      idea_params[:title].empty? && idea_params[:body].empty?
    end
end
