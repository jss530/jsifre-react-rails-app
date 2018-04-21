require 'faker'

20.times do
  Supplier.create!(name: Faker::Company.name, location: Faker::Address.city)
end

100.times do
  Produce.create!(name: Faker::Food.ingredient,
                        quantity: Faker::Number.between(1, 500),
                        price: Faker::Number.between(3, 99),
                        supplier_id: Faker::Number.between(1, 20))
end
