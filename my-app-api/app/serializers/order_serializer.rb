class SupplierSerializer < ActiveModel::Serializer
  attributes :name, :location
  has_many :produce
end
