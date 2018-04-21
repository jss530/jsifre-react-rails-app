export const updateSupplierFormData = supplierFormData => {
  return {
    type: 'UPDATED_DATA',
    supplierFormData
  }
}

export const resetSupplierForm = () => {
  return {
    type: 'RESET_SUPPLIER_FORM'
  }
}
