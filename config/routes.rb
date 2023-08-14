# frozen_string_literal: true
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'spa#index'
  # get '*path', to: 'spa#index'

  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do
      resources :warriors
    end
  end

  get 'warriors', to: 'spa#index'

end
