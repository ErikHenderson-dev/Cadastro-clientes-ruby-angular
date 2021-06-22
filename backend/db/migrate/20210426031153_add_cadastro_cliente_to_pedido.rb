class AddCadastroClienteToPedido < ActiveRecord::Migration[5.2]
  def change
    add_reference :pedidos, :cadastro_cliente, foreign_key: true
  end
end
