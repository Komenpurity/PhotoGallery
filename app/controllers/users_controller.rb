class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
      def index
        users = User.all
        render json: users, include: :albums
      end

      def show
        user = User.find(params[:id]) 
        render json: user, include: :albums
      end

    private

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
