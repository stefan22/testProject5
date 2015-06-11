require 'sinatra'

get '/' do

send_file "index.html"


end



set :public_folder, 'public'
