Rails.application.routes.draw do

  namespace :api do
    resources :suppliers do
      resources :produce
    end
  end
end
