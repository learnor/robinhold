class Api::WatchedStocksController < ApplicationController
  
  def index
    @watched_stocks = WatchedStock.all.where(watcher_id: current_user.id)
  end

  def create
    @watched_stock = WatchedStock.new
    @watched_stock.watcher_id = current_user.id
    @watched_stock.company_id = params[:company_id]
    if @watched_stock.save
      render :show
    else
      render json: @watched_stock.errors.full_messages, status: 400
    end
  end

  def destroy
    @watched_stock = WatchedStock.find_by(id: params[:id])
    if @watched_stock
      if @watched_stock.watcher_id != current_user.id
        render json: ['You don not have permission to remove this \
          stock from watch list'], status: 400
      else
        @watched_stock.destroy
        render :show
      end
    else
      render json: ['Unable to find this stock on watch list with \
        id #{params[:id]}'], status: 404
    end
  end

end
