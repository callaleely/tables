# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  location   :string           not null
#  birthdate  :string           not null
#

class User < ApplicationRecord
    validates :first_name, :last_name, :location, :birthdate, presence: true

    has_many :vacations
        primary_key: :id
        foreign_key: :user_id  
        class_name: :Vacation 
end
