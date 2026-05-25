function Header () {
  return (
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000')",
      backgroundRepeat: 'no-repeat',
      padding: '60px',
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'black'
    }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr style={{ width: '50%', margin: 'auto' }} />
    </div>
  )
}

export default Header
