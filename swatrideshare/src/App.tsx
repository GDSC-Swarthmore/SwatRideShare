import './App.css';
import RideshareForm from './components/RideshareForm.jsx'; // Assuming the RideshareForm component is located in ./components directory

function App() {  
  return (
    <>
      <div>
        <h1 style={{ color: 'maroon', fontWeight: 'bold', position: 'absolute', top: 0, left: 0 }}>Swat RideShare</h1>
      </div>

      <div style={{ marginRight: '500px' }}>
        <form>
          <div>
            <label htmlFor="departure-time">Departure Time:</label>
            <input type="time" id="departure-time" name="departure-time" required />
          </div>
          <div>
            <label htmlFor="pickup-location">Pick-up Location (Campus):</label>
            <input type="text" id="pickup-location" name="pickup-location" required />
          </div>
          <div>
            <label htmlFor="dropoff-location">Drop-off Location (Airport):</label>
            <input type="text" id="dropoff-location" name="dropoff-location" required />
          </div>
          <button type="submit"> Search Rideshare</button>
        </form>
      </div>

      {/* Integrate the RideshareForm component */}
      <RideshareForm />
    </>
  );
}

export default App;

