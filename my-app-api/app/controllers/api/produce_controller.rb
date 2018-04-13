class Api::ProduceController < ApplicationController

  def index
    @produce = Produce.all
    render json: @produce
  end
end
