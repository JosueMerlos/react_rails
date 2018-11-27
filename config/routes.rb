Rails.application.routes.draw do
  get 'tasks/index'
  get 'tasks/create'
  get 'tasks/show'
  get 'tasks/update'
  get 'tasks/destroy'
  root 'home#index'
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
