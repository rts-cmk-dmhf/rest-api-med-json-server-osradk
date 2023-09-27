import  { useState, useEffect } from 'react';

const Listevisning = () => {
    const [Produkter, setProdukter] = useState([]);
    const [searchText, setSearchText] = useState("");

  
    useEffect(() => {
    
      fetch('http://localhost:3001/produkter')
        .then((response) => response.json())
        .then((data) => {
      
            setProdukter(data);
            
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);


 
  return (
    <>
      <section className="search-section">
        <div className="search-box">
        <input
            type="search"
            placeholder="Søg efter perfume.."
            style={{
              padding: '10px', // Adjust the padding as needed
              width: '100%', // Expand the input to the container width
              border: '1px solid #ccc', // Add a border
              borderRadius: '5px', // Add rounded corners
              fontSize: '16px', // Adjust font size
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a box shadow
              marginTop:"30px"
            }}
            value={searchText} 
  onChange={(e) => setSearchText(e.target.value)} 
          />
        </div>
       
      </section>
 
      <section className="movie-list">
        <ul>
        {Produkter.filter((product) =>
  product.navn.toLowerCase().includes(searchText.toLowerCase())
).map((product) => (
  <li key={product.id} className="movie-item">
    <h2>{product.navn}</h2>
    <p> sopris: {product.pris}</p>
    <p>Vurdering: {product.stjerner}</p>
    <p>Beskrivelse: {product.beskrivelse}</p>
  </li>
))}
        </ul>
      </section>
    </>
  );
}

export default Listevisning;
