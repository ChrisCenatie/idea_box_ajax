class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.order(id: :desc)
  end

  def create
    Idea.create(idea_params) unless empty_idea?
    respond_with status: 200
  end

  def destroy
    respond_with status: 200 if Idea.find(params[:id].to_i).delete
  end

  def update
    if idea_params[:thumbs]
      quality = UpdateQuality.new(params[:id], idea_params[:thumbs])
      respond_with status: quality.update
    elsif !empty_idea?
      idea = Idea.find(params[:id].to_i)
      respond_with status: 200 if idea.update(idea_params)
    end
  end

  def show
    respond_with Idea.find(params[:id])
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :thumbs)
    end

    def empty_idea?
      idea_params[:title].empty? && idea_params[:body].empty?
    end
end
