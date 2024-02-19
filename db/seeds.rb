require 'rest-client'

def user_dataset
   users = RestClient.get("https://jsonplaceholder.typicode.com/users")
   users_array = JSON.parse(users)
   #puts(users_array) 
   users_array.each do |s| 
        User.create(name: s["name"], username: s["username"], email: s["email"]) 
    end
    puts "Users done!"
end
user_dataset()


def photos_dataset
    photos = RestClient.get("https://jsonplaceholder.typicode.com/photos")
    photos_array = JSON.parse(photos) 
    photos_array.each do |s| 
        Photo.create(album_id: s["albumId"], photoTitle: s["title"], imageUrl: s["url"])
    end 
    puts "Photos done!"
end
photos_dataset()


def albums_dataset
   albums = RestClient.get("https://jsonplaceholder.typicode.com/albums")
   albums_array = JSON.parse(albums)
   albums_array.each do |s| 
        Album.create(album_id: s["id"], user_id: s["userId"], albumTitle: s["title"])  
    end
    puts "Albums done!"
end
albums_dataset()

