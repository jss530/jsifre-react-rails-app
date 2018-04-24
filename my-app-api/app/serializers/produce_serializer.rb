class ProduceSerializer < ActiveModel::Serializer
  attributes :name, :inventory, :price
  belongs_to :supplier
end
