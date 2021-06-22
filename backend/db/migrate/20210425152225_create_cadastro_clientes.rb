class CreateCadastroClientes < ActiveRecord::Migration[5.2]
  def change
    create_table :cadastro_clientes do |t|
      t.string :nome
      t.string :empresa
      t.string :tel
      t.string :email
      t.date :data
      t.string :obs
    end
  end
end
