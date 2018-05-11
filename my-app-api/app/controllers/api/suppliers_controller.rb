
class Api::SuppliersController < ApplicationController

  def index
    suppliers = Supplier.all
    render json: suppliers
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
    supplier = Supplier.find_by(id: params[:id])
    if supplier
      render json: supplier
    else
      render json: { message: supplier.errors }, status: 400
    end
  end

  def edit
    supplier = Supplier.find_by(id: params[:id])
  end

  def update
    supplier = Supplier.find_by(id: params[:id])
    if supplier.update(supplier_params)
      render json: supplier
    else
      render json: { message: supplier.errors }, status: 400
    end
  end

  private

  def set_supplier
    supplier = Supplier.find_by(id: params[:id])
  end

  def supplier_params
    params.fetch(:supplier, {}).permit(:name, :location, :likes)
  end
end
