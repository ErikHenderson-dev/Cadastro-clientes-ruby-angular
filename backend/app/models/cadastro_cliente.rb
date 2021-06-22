class CadastroCliente < ApplicationRecord
    has_many :pedido, dependent: :destroy

    def produtos
        produto = self.pedido.map {|i| i.id_produto}
        return produto
    end
end
