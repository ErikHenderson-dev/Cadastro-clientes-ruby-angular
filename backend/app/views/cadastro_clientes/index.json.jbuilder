json.array! @cadastro_clientes do |item|
    json.call(
        item,
        :id,
        :nome,
        :empresa,
        :data
    )
end