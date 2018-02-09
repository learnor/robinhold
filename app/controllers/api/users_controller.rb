class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    if signed_in?
      @user = @current_user
      render :show
    else
      render json: ['login first']
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :fname,
      :lname,
      :email,
      :cash_value
    )
  end
end
