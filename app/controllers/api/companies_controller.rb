class Api::CompaniesController < ApplicationController
  def show
    @company = Company.find_by(id: params[:id])
    if @company
      @watch = current_user.watched_stocks.find_by(company_id: @company.id)
      render :show
    else
      render json: ['Non exist company!'], status: 404
    end
  end

  def index
    @companies = Company.all
  end
end
