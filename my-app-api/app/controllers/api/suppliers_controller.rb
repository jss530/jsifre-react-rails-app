class Api::SuppliersController < ApplicationController

  def index
    @suppliers = Supplier.all
    render json: @suppliers
  end

  def create
    supplier = Supplier.new(supplier_params)
    if supplier.save
      render json: supplier
    else
      render json: { message: supplier.errors }, status: 400
    end
  end

  def show
    render json: @supplier
  end

  private

  def set_supplier
    @supplier = Supplier.find_by(id: params[:id])
  end

  def supplier_params
    params.require(:supplier).permit(:name, :location)
  end
end
