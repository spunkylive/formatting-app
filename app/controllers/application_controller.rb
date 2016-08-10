class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def send_notice(level, msg, render_path)
    flash[:notice] = msg
    flash[:level] = level
    render_path
  end
end
