class HomeController < ApplicationController

  def index
    @header_color = session[:data] ? session[:data]["header_color"] : '#2c60ac'
    @app_title = session[:data] ? session[:data]["app_title"] : 'Formatting App'
    @para_text = session[:data] ? session[:data]["para_text"] : 'Ruby on Rails, or simply Rails, is a web application framework written in Ruby under the MIT License.
          Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.
          It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing.
          In addition to MVC, Rails emphasizes the use of other well-known software engineering.'
    @font = session[:data] ? session[:data]["font"] : "Verdana"
    @header_rgb = session[:data] ? convert_to_rgb(session[:data]["header_color"].split('#')) : convert_to_rgb('2c60ac')
  end

  def customize
    session[:data] = {
        app_title: params[:app_title],
        header_color: params[:header_color],
        para_text: params[:para_text],
        font: params[:font],
        header_rgb: convert_to_rgb(params[:header_color].split('#')[1])
    }
    redirect_to send_notice('SUCCESS', 'Formatting  is cached', root_path)
  end

  def reset_cache
    session[:data] = nil
    redirect_to send_notice('SUCCESS', 'Reset Formatting', root_path)
  end

  private

  def convert_to_rgb(color)
    color.scan(/../).map {|color| color.to_i(16)}
  end
end
