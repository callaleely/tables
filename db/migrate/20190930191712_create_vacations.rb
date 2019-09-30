class CreateVacations < ActiveRecord::Migration[5.2]
  def change
    create_table :vacations do |t|
      t.integer :user_id, null: false 
      t.date :start_date, null: false
      t.date :end_date, null: false
    end
  end
end
