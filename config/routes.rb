# frozen_string_literal: true
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'spa#index'
  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do
      resources :warriors
      resources :historics, only: [:index, :show]
      resources :weapons

      post '/combat', to: 'combat#combat'
    end
  end

  get 'warriors', to: 'spa#index'
  get 'historics', to: 'spa#index'
  get 'weapons', to: 'spa#index'

end
