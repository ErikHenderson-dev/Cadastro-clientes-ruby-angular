Rails.application.routes.draw do

  resources :cadastro_clientes, only: [:index, :show, :create, :update, :destroy]

end
