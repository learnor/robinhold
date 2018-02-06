Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    resource :session, only: %i(create destroy)
    resources :users, only: [:create]
    resources :news, only: %i(index show)
  end
  root 'static_pages#root'
end
