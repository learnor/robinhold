Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    resource :session, only: %i(create destroy)
    resources :users, only: [:create]
  end
  root 'static_pages#root'
end
