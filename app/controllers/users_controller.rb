class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

      def index
        users = User.all
        render json: users
      end

      def show
        user = find_user
        render json: user
      end

      def create
        user = User.create!(user_params) 
        render json: user, status: :created 
      end


    private
    def find_user
      User.find(params[:id])  
    end

    def user_params
        params.permit(:name, :username, :email, :password) 
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
