class AddLikesToSuppliers < ActiveRecord::Migration[5.1]
  def change
    add_column :suppliers, :likes, :integer, :default => 0
  end
end
