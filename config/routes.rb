Rails.application.routes.draw do
  root 'home#index'

  resources :home, only: [:index] do
    collection do
      post :customize
      delete :reset_cache
    end
  end
end
