import React from "react";

function Ournewartists() {
     const artists = [
    {
      id: 1,
      name: "Arjun Verma",
      genre: "Indie / Pop",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
   {
      id: 2,
      name: "Neha Rao",
      genre: "Classical Fusion",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      id: 3,
      name: "DJ Flux",
      genre: "Electronic",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },

  ];

  return (
    <div style={styles.page}>
    

      <div style={styles.grid}>
        {artists.map((artist) => (
          <div key={artist.id} style={styles.card}>
            <img
              src={artist.image}
              alt={artist.name}
              style={styles.image}
            />

            <div style={styles.cardBody}>
              <h2 style={styles.name}>{artist.name}</h2>
              <p style={styles.genre}>{artist.genre}</p>
              <button style={styles.button}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    minwidth:"100vw",
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    padding: "0px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
    margin:"0px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "5px",
    fontSize: "36px",
  },
  subHeading: {
    textAlign: "center",
    marginBottom: "30px",
    opacity: 0.9,
  },
  grid: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    color: "#000",
    width: "240px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    transition: "transform 0.3s",
    margin:"20px"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "5px",
    textAlign: "center",
  },
 
  genre: {
    color: "#666",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#1d2671",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
}

export default Ournewartists;
