Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :create, :update]
    resources :likes, only: [:create, :destroy]
    resource :search, only: [:show]
    resource :follow, only: [:create, :destroy]
  end

end
