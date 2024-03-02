import './App.css';
import Activity from './components/Activity.jsx'
const App = () => {

  const events = [
    { name: 'Sumo Wresting', review:'3.5', imageUrl:'src/img/sumo.jpg'},
    { name: 'Climb Mount Fuji', review:'4.5', imageUrl:'src/img/fuji.jpg'},
    { name: 'Pachinko', review:'4.0', imageUrl:'src/img/Pachinko.jpg'},
    { name: 'Vist a traditional Temple', review:'4.0', imageUrl:'src/img/japanese temple.jpg'},
    { name: 'Sushi Omakase', review:'4.5', imageUrl:'src/img/sushi.jpg'},
    { name: 'Visit a castle', review:'3.5 ', imageUrl:'src/img/castle.jpg'},
    { name: 'Cherry Blossom Picnic', review:'4.5', imageUrl:'src/img/cherry.jpg'},
    { name: 'Go to an Onsen', review:'4.5', imageUrl:'src/img/Onsen.jpg'},
    { name: 'Akihabara', review:'5.0', imageUrl:'src/img/akihabara.jpg'},
    { name: 'Try some Japanese Sake', review:'3.5', imageUrl:'src/img/sake.jpg'},
  ]
  return (
    <div className="App">
      <h1>Activities in Japan</h1>
      <h2>Japan Trip, Check out this activity list to get to know the country and see all the sights during your stay</h2>
      <div className="activity-list">
        {events.map((event) =>(
          <Activity
            key={event.name}
            name={event.name}
            review={event.review}
            imageUrl={event.imageUrl}
          />
        ))}  
      </div>
    </div>

  )
}

export default App