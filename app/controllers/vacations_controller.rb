class VacationsController < ApplicationController
        def index
        @vacations = Vacation.all
        render :index 
    end

    def show
        @vacation = Vacation.find_by(id: params[:id])
        render :show 
    end

    def update
        vacation = Vacation.find_by(id: params[:id])
        if vacation.update(vacation_params)
            render json: vacation
        else
            render json: vacation.errors.full_messages, status: 404
        end
    end

    def create
        @vacation = Vacation.new(vacation_params)
        if @vacation.save
            render :show
        else
            render json: @vacation.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @vacation = Vacation.find(params[:id])
        if @vacation && @vacation.destroy
            render: index
        else
            render json: ["Cannot delete the vacation"], status: 403
        end
    end

    private

    def vacation_params
        params.require(:vacation).permit(:user_id, :start_date, :end_date)
    end

end
