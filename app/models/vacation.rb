# == Schema Information
#
# Table name: vacations
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#

class Vacation < ApplicationRecord
    validates :user_id, :start_date, :end_date, presence: true 

    belongs_to :user
        primary_key: :id
        foreign_key: :user_id  
        class_name: :User

end
