Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: %i(create destroy)

    get 'account', to: 'users#show'
    resources :users, only: :create do
      resources :watched_stocks, only: :index
    end

    resources :news, only: %i(index show)

    resources :companies, only: %i(index show) do
      resource :watched_stock, only: :create
    end

    resources :watched_stocks, only: %i(index destroy)
  end

end
