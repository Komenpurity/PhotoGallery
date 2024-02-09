class AlbumsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

      def index
        albums = Album.all
        render json: albums, include: :user
      end

      def show
        album =  Album.find(params[:id]) 
        render json: album,include: :photos
      end

    private

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
