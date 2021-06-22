class CadastroClientesController < ApplicationController
    
    def index
      @cadastro_clientes = CadastroCliente.all.order('data')
      render json: @cadastro_clientes
    end
  
    def show
      @cadastro_clientes = CadastroCliente.find(params[:id])
      render json: @cadastro_clientes, methods: [:produtos]
    end
  
    def create
      @cadastro_clientes = CadastroCliente.find_or_initialize_by(
        nome: params[:nome],
        empresa: params[:empresa],
        tel: params[:telefone],
        email: params[:email],
        data: params[:datapedido],
        obs: params[:obs]
      )      
      error @cadastro_clientes.errors unless @cadastro_clientes.save
      
      params[:produtos].map do | produto |
        @pedido = Pedido.create(
          cadastro_cliente_id: @cadastro_clientes.id,
          id_produto: produto.to_i
        )
      end
    end
  
    def update
      @cadastro_clientes = CadastroCliente.find(params[:id])
      @cadastro_clientes.update_attributes(
        nome: params[:nome], 
        empresa: params[:empresa], 
        tel: params[:telefone],
        email: params[:email], 
        data: Time.now.strftime("%d-%m-%Y"), 
        obs: params[:obs],
      )
      @pedido = Pedido.where(cadastro_cliente_id: @cadastro_clientes.id).destroy_all
      
      params[:produtos].map do | produto |
        @pedido = Pedido.create(
          cadastro_cliente_id: @cadastro_clientes.id,
          id_produto: produto.to_i
        )
      end
    end
  
    def destroy
      CadastroCliente.where(id: params[:id]).destroy_all
      render status: 204, json: nil
    end
end
