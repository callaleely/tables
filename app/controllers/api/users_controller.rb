class UsersController < ApplicationController
    def index
        @users = User.all
        render :index 
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show 
    end

    def update
        user = User.find_by(id: params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @user = User.find(params[:id])
        if @user && @user.destroy
            render: index
        else
            render json: ["Cannot delete the user"], status: 403
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :location, :birthdate)
    end

end
