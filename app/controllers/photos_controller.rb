class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

      def index
        photos = Photo.all
        render json: photos,include: :album
      end

      def show
        photo =  Photo.find(params[:id])  
        render json: photo
      end

      def update
        photo = Photo.find(params[:id]) 
        photo.update(photo_params)
        render json: photo
      end


    private

    def photo_params
      params.permit(:photoTitle)  
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
