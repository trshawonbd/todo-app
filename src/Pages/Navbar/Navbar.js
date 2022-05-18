import React from 'react';

const Navbar = () => {
    return (
<div class="navbar bg-base-100 px-16">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <a class="btn btn-primary normal-case text-2xl">TODO APP</a>
  </div>
  <div class="navbar-center hidden lg:flex">

  </div>
  <div class="navbar-end">
    <a class="btn">Login</a>
  </div>
</div>
    );
};

export default Navbar;