class CreateProduces < ActiveRecord::Migration[5.1]
  def change
    create_table :produces do |t|
      t.string :name
      t.string :quantity
      t.integer :supplier_id

      t.timestamps
    end
  end
end
