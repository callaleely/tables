@vacations.each do |vacation|
    json.set! vacation.id do
        json.partial! 'api/vacations/vacation', vacation: vacation
    end
end