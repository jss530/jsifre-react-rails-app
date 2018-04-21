class AddPriceToProduces < ActiveRecord::Migration[5.1]
  def change
    add_column :produces, :price, :integer
  end
end
