Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :new]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show]
  end

end
