class Api::CompaniesController < ApplicationController
  def show
    @company = Company.find_by(id: params[:id])
    if @company
      render :show
    else
      render json: ['Non exist company!'], status: 404
    end
  end

  def index
    @companies = Company.all
  end
end
