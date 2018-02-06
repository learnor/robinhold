class Api::NewsController < ApplicationController
  def index
    @news = News.all
  end

  def show
    @news = News.find(params[:id])
    if @news
      render :show
    else
      render json: ["News doesn't exist!"], status: 404
    end
  end
end
