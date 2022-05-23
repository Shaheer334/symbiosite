import React from 'react'
import { Routes, Route } from 'react-router'
import AddCategory from './components/category/AddCategory'
import CategoryTable from './components/category/CategoryTable'
import EditCategory from './components/category/EditCategory'
import Dashboard from './components/dashboard/Dashboard'
import AddProduct from './components/products/AddProduct'
import ProductTable from './components/products/ProductTable'
import EditProduct from './components/products/EditProduct'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import UserTable from './components/users/UserTable'
import UserDetails from './components/users/UserDetails'
import ProductCard from './components/products/ProductCard'
import StripePurchase from './components/stripe/StripePurchase'

const App = () => {
  return (
    <>
      <Dashboard />
      <AddProduct />
      {/* <ProductTable /> */}
      <ProductCard />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path='/categorytable' element={<CategoryTable />} />
        <Route path='/editcategory' element={<EditCategory />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/producttable' element={<ProductTable />} />
        <Route path='/editproduct' element={<EditProduct />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/usertable' element={<UserTable />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='/edituser' element={<EditUser />} />
        <Route path='/purchase' element={<StripePurchase />} />
      </Routes>

    </>
  )
}

export default App