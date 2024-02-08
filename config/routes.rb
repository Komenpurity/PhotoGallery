Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  resources :users, only: [:index] 
  resources :photos, only: [:index]
  resources :albums, only: [:index]

end
